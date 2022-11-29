import {Container, Row, Col} from 'react-bootstrap'
import AtNome from '../components/AtualizarNome'
import AtEmail from '../components/AtualizarEmail'
import AtSenha from '../components/AtualizarSenha'
import AtNascimento from '../components/AtualizarNascimento'


export default function Atualizar(){

    return(
        <Container className="containerConteudo">
            
          <Row className="align-items-center justify-content-center">
              <Col lg={6}>
                  <h1>Cadastro</h1>
              </Col>
          </Row>

          <AtNome/>
          <AtEmail/>
          <AtSenha/>
          <AtNascimento/>

        </Container>  
    )
}

 