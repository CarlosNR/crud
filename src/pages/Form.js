import {Container, Row, Col, Card, Button} from 'react-bootstrap'
import { useForm } from "react-hook-form";
import validator from 'validator'

export default function Form({onSave, user = {}}){
    const {register, handleSubmit} = useForm()
    return(
        
        <Container className="containerConteudo">
            
            <Row className="align-items-center justify-content-center">
                <Col lg={6}>
                    <h1>Cadastro</h1>
                </Col>
            </Row>

                <form onSubmit={handleSubmit((data) => {
                    console.log(data)
                })}>

                    <Row className="align-items-center justify-content-center">
                        <Col lg={6}>
                            <span>Nome</span>
                            <input placeholder="Teu nome" {...register("nome", { required: true })} />
                        </Col>
                    </Row>

                    <Row className="align-items-center justify-content-center">
                        <Col lg={6}>
                            <span>Email</span>
                            <input placeholder="Teu email" {...register("email", { required: true })} />
                        </Col>
                    </Row>

                    <Row className="align-items-center justify-content-center">
                        <Col lg={6}>
                            <span>Senha</span>
                            <input type="password" placeholder="Tua senha" {...register("senha", { required: true })} />
                        </Col>
                    </Row>

                    <Row className="align-items-center justify-content-center">
                        <Col lg={6}>
                            <span>Data de Nascimento</span>
                            <input type="date" {...register("idade", { required: true })} />
                        </Col>
                    </Row>
                    
                    <Row className="align-items-center justify-content-center">
                        <Col lg={6}>
                            <input type="submit"/>
                        </Col>
                    </Row>

                </form>
        </Container>

        
    )
}

 