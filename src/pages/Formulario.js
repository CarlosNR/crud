import {Container, Row, Col, Card, Button, Form} from 'react-bootstrap'
import { useForm } from "react-hook-form"
import axios from "axios"
import {yupResolver} from '@hookform/resolvers/yup'
import * as yup from 'yup'

export default function Formulario(){
    const schema = yup.object({
        nome: yup.string().required("Nome nescessário"),

        email: yup.string().required("Email nescessário").email("Email inválido"),

        senha: yup.string().required("Senha nescessária").min(6),

        nascimento: yup.string().matches(
            // expressão regular para checar data, evita que o react leia 10101999 como 7 de outubro de 1999, forçando o uso de dd/mm/aaaa na entrada
            /^(0?[1-9]|[12][0-9]|3[01])[\/\-](0?[1-9]|1[012])[\/\-]\d{4}$/,
            "Formato de data inválida"
        )
    })
    const {
        register, 
        handleSubmit, 
        formState: {errors}
    } = useForm({
        resolver: yupResolver(schema)
    })

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
                          <Form.Control type="text" placeholder="João da Silva" {...register("nome")} />
                          <Form.Text className="spanFormAviso">
                            {errors.nome?.message}
                          </Form.Text>
                        </Form.Group>
                      </Col>

                      <Col xs={4}>
                        <Form.Group className="mb-3">
                          <Form.Label style={{color: "var(--texto)"}}>Email*</Form.Label>
                          <Form.Control type="email" placeholder="ex@exemplo.com" {...register("email")} />
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
                          <Form.Control type="password" placeholder="******" {...register("senha")} />
                          <Form.Text className="spanFormAviso">
                            {errors.senha?.message}
                          </Form.Text>
                        </Form.Group>
                      </Col>

                      <Col xs={4}>
                        <Form.Group className="mb-3">
                          <Form.Label style={{color: "var(--texto)"}}>Data de nascimento*</Form.Label>
                          <Form.Control type="text" placeholder="dd/mm/aaaa" {...register("nascimento")} />
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

 