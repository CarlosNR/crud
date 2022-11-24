import {Container, Row, Col, Card, Button} from 'react-bootstrap'
import { useForm } from "react-hook-form"
import axios from "axios"

export default function Formulario(){
    const {
        register, 
        handleSubmit, 
        formState: {errors}
    } = useForm()

    if(errors.length > 0){
        console.log(errors)
    }
    return(
        
        <Container className="containerConteudo">
            
            <Row className="align-items-center justify-content-center">
                <Col lg={6}>
                    <h1>Cadastro</h1>
                </Col>
            </Row>

                <form onSubmit={handleSubmit((data) => {
                    axios.post('http://localhost:80/crud/src/backend/cadastraUsuario.php', data)
                    console.log(data)
                })}>

                    <Row className="align-items-center justify-content-center mt-2">
                        <Col lg={6}>
                            <span className='spanForm'>*Nome</span>
                            <input placeholder="Teu nome" {...register("nome", { required: "Nome nescessário." })} />
                            <span className='spanFormAviso'>{errors.nome?.message}</span>
                        </Col>
                    </Row>

                    <Row className="align-items-center justify-content-center mt-2">
                        <Col lg={6}>
                            <span className='spanForm'>*Email</span>
                            <input placeholder="Teu email" {...register("email", { required: "Email nescessário." })} />
                            <span className='spanFormAviso'>{errors.email?.message}</span>

                        </Col>
                    </Row>

                    <Row className="align-items-center justify-content-center mt-2">
                        <Col lg={6}>
                            <span className='spanForm'>*Senha</span>
                            <input type="password" placeholder="Tua senha" {...register("senha", { required: "Senha nescessária.", minLength: {
                                value: 6,
                                message: 'Tamanho mínimo da senha são 6 caracteres.'
                            }
                            })} />
                            <span className='spanFormAviso'>{errors.senha?.message}</span>

                        </Col>
                    </Row>

                    <Row className="align-items-center justify-content-center mt-2">
                        <Col lg={6}>
                            <span className='spanForm'>*Data de nascimento</span>
                            <input type="date" placeholder="Data de nascimento" {...register("nascimento", { required: "Data de nascimento nescessária." })} />
                            <span className='spanFormAviso'>{errors.nascimento?.message}</span>
                        </Col>
                    </Row>
                    
                    <Row className="align-items-center justify-content-center mt-2">
                        <Col lg={8}>
                            <Button type="submit" variant="success">Cadastrar</Button>{' '}
                        </Col>
                    </Row>

                </form>
        </Container>

        
    )
}

 