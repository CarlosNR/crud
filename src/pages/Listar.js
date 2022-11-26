import {Container, Row, Col, Card, Button, Form} from 'react-bootstrap'
import { useForm } from "react-hook-form"
import axios from "axios"
import {yupResolver} from '@hookform/resolvers/yup'
import * as yup from 'yup'
import React, { useState } from 'react'
import { Table } from 'semantic-ui-react'

export default function Formulario(){

    const schema = yup.object({
        email: yup.string().required("Email nescessário").email("Email inválido"),

        senha: yup.string().required("Senha nescessária").min(6)
    })

    const {
        register, 
        handleSubmit, 
        formState: {errors}
    } = useForm({
        resolver: yupResolver(schema)
    })
  
    const [consulta, setConsulta] = useState({})

    return(
        
        <Container className="containerConteudo">
            
            <Row className="align-items-center justify-content-center">
                <Col lg={6}>
                    <h1>Consultar dados</h1>
                </Col>
            </Row>

            <form onSubmit={handleSubmit((data) => {
                axios.post('http://localhost:80/crud/src/backend/consultaUsuario.php', data)
                .then((response) => {
                    setConsulta(response.data)
                    console.log(consulta)
                })
                
            })}>

                <Row className="align-items-center justify-content-center mt-2">

                    <Col xs={4}>
                    <Form.Group className="mb-3">
                        <Form.Label style={{color: "var(--texto)"}}>Email*</Form.Label>
                        <Form.Control type="email" placeholder="ex@exemplo.com" {...register("email")} />
                        <Form.Text className="spanFormAviso">
                        {errors.email?.message}
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
                        <Button type="submit" variant="success">Consultar meus dados</Button>{' '}
                    </Col>
                </Row>
            </form>

            <Row className="mt-2">
                <Col>
                <Table singleLine>
                <Table.Header>
                    <Table.Row>
                        <Table.HeaderCell>Nome</Table.HeaderCell>
                        <Table.HeaderCell>Email</Table.HeaderCell>
                        <Table.HeaderCell>Data de nascimento</Table.HeaderCell>
                    </Table.Row>
                </Table.Header>
                <Table.Body>
                    <Table.Row>
                        <Table.Cell>{consulta.["id"]}</Table.Cell>
                        <Table.Cell>{consulta.["nome"]}</Table.Cell>
                        <Table.Cell>{consulta.["email"]}</Table.Cell>
                        <Table.Cell>{consulta.["nascimento"]}</Table.Cell>
                    </Table.Row>
                </Table.Body>
                </Table>
                </Col>
            </Row>
            
       </Container>

        
    )
}

 