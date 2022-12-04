import {Container, Row, Col} from 'react-bootstrap'
import AtNome from '../components/AtualizarNome'
import AtEmail from '../components/AtualizarEmail'
import AtSenha from '../components/AtualizarSenha'
import AtNascimento from '../components/AtualizarNascimento'
import React, { useEffect } from 'react'
import {useLocation} from 'react-router-dom';

export default function AtualizarDados(){

    const location = useLocation()
    const dado = location.state

    useEffect(() => console.log(dado), [dado])

    return(
        <Container className="containerConteudo">
            
          <Row className="align-items-center justify-content-center">
              <Col lg={6}>
                  <h1>Atualizar dados</h1>
              </Col>
          </Row>

          <AtNome/>
          <AtEmail id={dado['id']}/>
          <AtSenha/>
          <AtNascimento/>

        </Container>  
    )
}

 