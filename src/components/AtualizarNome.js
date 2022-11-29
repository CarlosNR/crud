import {Row, Col, Button, Form} from 'react-bootstrap'
import { useForm } from "react-hook-form"
import axios from "axios"
import {yupResolver} from '@hookform/resolvers/yup'
import * as yup from 'yup'

export default function AtNome(){
    const schema = yup.object({
        nome: yup.string().required("Nome nescessário"),
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
                    <Form.Label style={{color: "var(--texto)"}}>Nome*</Form.Label>
                    <Form.Control type="text" placeholder="João da Silva" {...register("nome")} />
                    <Form.Text className="spanFormAviso">
                        {errors.nome?.message}
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

 