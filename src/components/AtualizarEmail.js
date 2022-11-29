import {Row, Col, Button, Form} from 'react-bootstrap'
import { useForm } from "react-hook-form"
import axios from "axios"
import {yupResolver} from '@hookform/resolvers/yup'
import * as yup from 'yup'

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

    return(
        
        <Form onSubmit={handleSubmit((data) => {
            axios.post('http://localhost:80/crud/src/backend/cadastraUsuario.php', data)
            console.log(data)
        })}>

            <Row className="align-items-center justify-content-center">
                <Col xs={2}/>
                <Col xs={6}>
                  <Form.Group className="mb-2">
                    <Form.Label style={{color: "var(--texto)"}}>Email*</Form.Label>
                    <Form.Control type="email" placeholder="ex@exemplo.com" {...register("email")} />
                    <Form.Text className="spanFormAviso">
                      {errors.email?.message}
                    </Form.Text>
                    
                  </Form.Group>
                </Col>

                <Col xs={4} className="d-flex align-items-center justify-content-center">
                    <Button type="submit" variant="success">Atualizar</Button>{' '}
                </Col>
            </Row>

        </Form>

        
    )
}

 