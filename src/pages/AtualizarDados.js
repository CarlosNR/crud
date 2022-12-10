import {Container, Row, Col, Card} from 'react-bootstrap'
import AtNome from '../components/AtualizarNome'
import AtEmail from '../components/AtualizarEmail'
import AtSenha from '../components/AtualizarSenha'
import AtNascimento from '../components/AtualizarNascimento'

export default function AtualizarDados(){

    return(
        <Container className="d-flex containerConteudo">
            <Col xs={12}>
                <Card>
                    <Card.Header>
                        <Card.Title>

                            <Row className="align-items-center justify-content-center">
                                <Col lg={6}>
                                    <h1>Atualizar dados</h1>
                                </Col>
                            </Row>

                        </Card.Title>
                    </Card.Header>
                    <Card.Body>

                        <AtNome/>
                        <AtEmail/>
                        <AtSenha/>
                        <AtNascimento/>

                    </Card.Body>
                </Card>
            </Col>
        </Container>  
    )
}

 