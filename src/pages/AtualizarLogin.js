import {Container, Row, Col, Card, Button, Form} from 'react-bootstrap'
import { useForm } from "react-hook-form"
import {yupResolver} from '@hookform/resolvers/yup'
import * as yup from 'yup'
import { useNavigate } from 'react-router'
import axios from "axios"
import React, { useState } from 'react'
// import { useEffect } from 'react'

export default function AtualizarLogin(){

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

    const [consulta, setConsulta] = useState({})
    // useEffect(() => console.log(consulta), [consulta])
    const navigate = useNavigate()

    const onSubmit = data => {
        axios.post('http://localhost:80/crud/src/backend/consultaUsuario.php', data)
        .then((response) => {
          if(response.data){
              setConsulta(response.data)
              navigate('/atualizarDados',{state:
                {
                    id:data.id,
                    senha:data.senha
                }})
          }else{
            alert("Cadastro não existe ou senha está errada.")
          }

        })
        .catch((error) => {
          alert("Falha ao conectar no banco de dados.")
        })  
          
    }

    return(
        
        <Container className="d-flex containerConteudo">
          <Col xs={12}>
            <Card>
              <Card.Header>
                <Card.Title>
                  <Row className="align-items-center justify-content-center">
                      <Col lg={6}>
                          <h1>Confirme sua conta para atualização</h1>
                      </Col>
                  </Row>
                  </Card.Title>
                </Card.Header>
              <Card.Body>
                <Form onSubmit={handleSubmit(onSubmit)}>
            
                  <Row className="align-items-center justify-content-center mt-2">
                    <Col xs={4}>
                      <Form.Group className="mb-3">
                      <Form.Label style={{color: "var(--texto)"}}>Id*</Form.Label>
                        <Form.Control type="text" placeholder="Identificador do mostrar meu dados" {...register("id")} />
                        <Form.Text className="spanFormAviso">
                          {errors.id?.message}
                        </Form.Text>
                      </Form.Group>
                    </Col>

                    <Col xs={4}>
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
                    <Button className="botao" type="submit" variant="success">Confirmar</Button>
                    </Col>
                </Row>

              </Form>
            </Card.Body>
          </Card>
        </Col>

        </Container>
       
    )
}

 