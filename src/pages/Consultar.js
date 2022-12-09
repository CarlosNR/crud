import {Container, Row, Col, Card, Button, Form} from 'react-bootstrap'
import { useForm } from "react-hook-form"
import axios from "axios"
import {yupResolver} from '@hookform/resolvers/yup'
import * as yup from 'yup'
import React, { useState, useEffect } from 'react'
// import { useEffect } from 'react'
import Tabela from '../components/Tabela'

export default function Formulario(){

    const schema = yup.object({
        email: yup.string().required("Email nescessário").email("Email inválido"),

        senha: yup.string().required("Senha nescessária").min(6, "Digite pelo menos 6 caracteres")
    })

    const {
        register, 
        handleSubmit, 
        formState: {errors}
    } = useForm({
        resolver: yupResolver(schema)
    })
  
    const [consulta, setConsulta] = useState({})
    const [tabela, setTabela] = useState(false)
    
    // useEffect(() => console.log(consulta), [consulta]);

    function Condicional() {
        if(tabela && consulta){
            return(
                <Tabela id={consulta.id} nome={consulta.nome} email={consulta.email} nascimento={consulta.nascimento}/>
            )
        }
        if(tabela && !consulta){
            return(
                <Row className="d-flex align-items-center justify-content-center my-2">
                    <Col xs={12} className="text-center">
                        <span style={{color: "var(--links)"}}>Registro não cadastrado.</span>
                    </Col>
                </Row>
            )
        }
    }

    return(
        
        <Container className="containerConteudo align-items-center justify-content-center">
            <Row className="d-flex">
                <Col xs={12}>
                    <Card>
                        <Card.Header>
                            <Card.Title>
                                <Row className="align-items-center justify-content-center">
                                    <Col lg={6}>
                                        <h1>Consultar dados</h1>
                                    </Col>
                                </Row>
                            </Card.Title>
                        </Card.Header>
                        <Card.Body>
                            <Form className="mb-3" onSubmit={handleSubmit((data) => {
                                axios.post('http://localhost:80/crud/src/backend/consultaUsuario.php', data)
                                .then((response) => {
                                    if(response.data !== false){
                                        setConsulta(response.data)
                                        setTabela(true)
                                    }else{
                                        setTabela(true)
                                        setConsulta(false)
                                    }
                                })
                                .catch((error) => {
                                    alert("Falha ao conectar no banco de dados.")
                                })
                
                            })}>
                                <Row className="align-items-center justify-content-center mt-2">
                                    <Col md={4} xs={10}>
                                        <Form.Group className="mb-3">
                                            <Form.Label style={{color: "var(--texto)"}}>Email*</Form.Label>
                                            <Form.Control type="email" placeholder="ex@exemplo.com" {...register("email")} />
                                            <Form.Text className="spanFormAviso">
                                            {errors.email?.message}
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
                                        <Button className="botao" type="submit" variant="success">Consultar meus dados</Button>{' '}
                                    </Col>
                                </Row>
                            </Form>
                        </Card.Body>
                    </Card>
                </Col>
            </Row>
            {Condicional()}
        </Container>

        
    )
}

 