import {Container, Row, Col, Card, Button, Form} from 'react-bootstrap'
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
                      <Col xs={4}>
                        <Form.Group className="mb-3">
                        <Form.Label style={{color: "var(--texto)"}}>Nome*</Form.Label>
                          <Form.Control type="text" placeholder="João da Silva" {...register("nome", { required: "Nome nescessário." })} />
                          <Form.Text className="spanFormAviso">
                            {errors.nome?.message}
                          </Form.Text>
                        </Form.Group>
                      </Col>

                      <Col xs={4}>
                        <Form.Group className="mb-3">
                          <Form.Label style={{color: "var(--texto)"}}>Email*</Form.Label>
                          <Form.Control type="email" placeholder="ex@exemplo.com" {...register("email", { required: "Email nescessário." })} />
                          <Form.Text className="spanFormAviso">
                            {errors.email?.message}
                          </Form.Text>
                        </Form.Group>
                      </Col>
                  </Row>
                  <Row className="align-items-center justify-content-center mt-2">

                      <Col xs={4}>
                        <Form.Group className="mb-3">
                          <Form.Label style={{color: "var(--texto)"}}>Senha*</Form.Label>
                          <Form.Control type="password" placeholder="*****" {...register("senha", { required: "Senha nescessária." })} />
                          <Form.Text className="spanFormAviso">
                            {errors.email?.message}
                          </Form.Text>
                        </Form.Group>
                      </Col>

                      <Col xs={4}>
                        <Form.Group className="mb-3">
                          <Form.Label style={{color: "var(--texto)"}}>Data de nascimento*</Form.Label>
                          <Form.Control type="text" placeholder="dd/mm/aaaa" {...register("nascimento", { required: "Data de nascimento nescessária." })} />
                          <Form.Text className="spanFormAviso">
                            {errors.nascimento?.message}
                          </Form.Text>
                        </Form.Group>
                      </Col>
                  </Row>

                  <Row className="mt-2">
                      <Col xs={12} className="d-flex align-items-center justify-content-center">
                          <Button type="submit" variant="success">Cadastrar</Button>{' '}
                      </Col>
                  </Row>

                </form>
        </Container>

        
    )
}

 