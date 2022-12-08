import {Container, Row, Col} from 'react-bootstrap'
import AtNome from '../components/AtualizarNome'
import AtEmail from '../components/AtualizarEmail'
import AtSenha from '../components/AtualizarSenha'
import AtNascimento from '../components/AtualizarNascimento'

export default function AtualizarDados(){

    return(
        <Container className="containerConteudo">
            
          <Row className="align-items-center justify-content-center">
              <Col lg={6}>
                  <h1>Atualizar dados</h1>
              </Col>
          </Row>

          <AtNome/>
          <AtEmail/>
          <AtSenha/>
          <AtNascimento/>

        </Container>  
    )
}

 