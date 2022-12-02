import {Row, Col, Button, Form} from 'react-bootstrap'
import { useForm } from "react-hook-form"
import axios from "axios"
import {yupResolver} from '@hookform/resolvers/yup'
import * as yup from 'yup'

export default function AtNascimento(){
    const schema = yup.object({
        nascimento: yup.string().matches(
            // expressão regular para checar data, evita que o react leia 10101999 como 7 de outubro de 1999, forçando o uso de dd/mm/aaaa na entrada
            /^(0?[1-9]|[12][0-9]|3[01])[\/\-](0?[1-9]|1[012])[\/\-]\d{4}$/,
            "Formato de data inválido"
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
        
        <Form onSubmit={handleSubmit((data) => {
            axios.post('http://localhost:80/crud/src/backend/cadastraUsuario.php', data)
            console.log(data)
        })}>

            <Row className="align-items-center justify-content-center">
                <Col xs={2}/>
                <Col xs={6}>
                  <Form.Group className="mb-2">
                    <Form.Label style={{color: "var(--texto)"}}>Data de nascimento*</Form.Label>
                    <Form.Control type="text" placeholder="dd/mm/aaaa" {...register("nascimento")} />
                    <Form.Text className="spanFormAviso">
                      {errors.nascimento?.message}
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

 