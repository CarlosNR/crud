import {Container, Row, Col, Card, Button, Form} from 'react-bootstrap'
import { useForm } from "react-hook-form"
import axios from "axios"
import {yupResolver} from '@hookform/resolvers/yup'
import * as yup from 'yup'

export default function Deletar(){
    const schema = yup.object({
        id: yup.number("id não é um número inteiro").required("id nescessário"),
        senha: yup.string().required("Senha nescessária").min(6, "Digite pelo menos 6 caracteres"),
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
                  <h1>Deletar registro</h1>
              </Col>
          </Row>

          <Form onSubmit={handleSubmit((data) => {
            axios.post('http://localhost:80/crud/src/backend/deletaUsuarioEspecifico.php', data)
            .then((response) => {
              alert("É uma pena sua despedida, esperamos encontra-lo novamente.")
            })
            .catch((error) => {
              alert("Falha ao conectar no banco de dados.")
            })
          })}>    
            <Row className="align-items-center justify-content-center mt-2">
                <Col md={4} xs={10}>
                  <Form.Group className="mb-3">
                  <Form.Label style={{color: "var(--texto)"}}>Id*</Form.Label>
                    <Form.Control type="text" placeholder="Identificador do mostrar meu dados" {...register("id")} />
                    <Form.Text className="spanFormAviso">
                      {errors.id?.message}
                    </Form.Text>
                  </Form.Group>
                </Col>

                <Col md={4} xs={10}>
                  <Form.Group className="mb-3">
                    <Form.Label style={{color: "var(--texto)"}}>Senha*</Form.Label>
                    <Form.Control type="password" placeholder="******" {...register("senha")} />
                    <Form.Text className="spanFormAviso">
                      {errors.senha?.message}
                    </Form.Text>
                  </Form.Group>
                </Col>
            </Row>
           
            <Row className="mt-2">
                <Col xs={12} className="d-flex align-items-center justify-content-center">
                    <Button className="botao" type="submit" variant="success">Deletar meu cadastro</Button>
                </Col>
            </Row>

          </Form>
        </Container>

        
    )
}

 