import {Row, Col, Button, Form} from 'react-bootstrap'
import { useForm } from "react-hook-form"
import axios from "axios"
import {yupResolver} from '@hookform/resolvers/yup'
import * as yup from 'yup'

export default function AtSenha(){
    const schema = yup.object({
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
        
        <Form onSubmit={handleSubmit((data) => {
            axios.post('http://localhost:80/crud/src/backend/cadastraUsuario.php', data)
            console.log(data)
        })}>

            <Row className="align-items-center justify-content-center">
                <Col xs={2}/>
                <Col xs={6}>
                  <Form.Group className="mb-2">
                    <Form.Label style={{color: "var(--texto)"}}>Senha*</Form.Label>
                    <Form.Control type="password" placeholder="******" {...register("senha")} />
                    <Form.Text className="spanFormAviso">
                      {errors.senha?.message}
                    </Form.Text>
                  </Form.Group>
                </Col>

                <Col xs={4} className="d-flex align-items-center justify-content-center">
                    <Button className="botao" type="submit" variant="success">Atualizar</Button>{' '}
                </Col>
            </Row>

        </Form>

        
    )
}

 