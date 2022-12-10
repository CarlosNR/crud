import {Row, Col, Button, Form} from 'react-bootstrap'
import { useForm } from "react-hook-form"
import axios from "axios"
import {yupResolver} from '@hookform/resolvers/yup'
import * as yup from 'yup'
// import React, { useEffect } from 'react'
import {useLocation} from 'react-router-dom'

export default function AtEmail(){

    const schema = yup.object({
        email: yup.string().required("Email nescessário").email("Email inválido"),
    })
    
    const {
        register, 
        handleSubmit, 
        formState: {errors}
    } = useForm({
        resolver: yupResolver(schema)
    })

    const location = useLocation()
    const dado = location.state

    // useEffect(() => console.log('Email' + dado['id']), [dado])

    return(
        
        <Form onSubmit={handleSubmit((data) => {
            data['id'] = dado['id']
            axios.post('http://localhost:80/crud/src/backend/atualiza.php', data)
            .then((response) => {
              if(response.data.toString().includes("sucesso")){
                alert("Email atualizado com sucesso.")
              }else{
                alert("Operação não concluída.")
              }
            })
            .catch((error) => {
              alert("Falha ao conectar no banco de dados.")
            })
        })}>

            <Row className="align-items-center justify-content-center">
                <Col xs={2}/>
                <Col xs={6}>
                  <Form.Group>
                    <Form.Label style={{color: "var(--texto)"}}>Email*</Form.Label>
                    <Form.Control type="email" placeholder="ex@exemplo.com" {...register("email")} />
                    <Form.Text className="spanFormAviso">
                      {errors.email?.message}
                    </Form.Text>
                    
                  </Form.Group>
                </Col>

                <Col xs={4} className="d-flex align-items-center justify-content-center">
                    <Button className="botao" type="submit" variant="success">Atualizar</Button>
                </Col>
            </Row>

        </Form>

        
    )
}

 