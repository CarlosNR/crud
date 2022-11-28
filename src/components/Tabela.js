import { Row, Col } from 'react-bootstrap'
import { Table } from 'semantic-ui-react'

export default function Formulario({id, nome, email, nascimento}){

    return(
        
        <Row className="mt-5">
            <Col xs={2}/>
            <Col xs={8}><Table singleLine>
                <Table.Header>
                    <Table.Row>
                        <Table.HeaderCell>Id</Table.HeaderCell>
                        <Table.HeaderCell>Nome</Table.HeaderCell>
                        <Table.HeaderCell>Email</Table.HeaderCell>
                        <Table.HeaderCell>Data de nascimento</Table.HeaderCell>
                    </Table.Row>
                </Table.Header>
                <Table.Body>
                    <Table.Row>
                        <Table.Cell>{id}</Table.Cell>
                        <Table.Cell>{nome}</Table.Cell>
                        <Table.Cell>{email}</Table.Cell>
                        <Table.Cell>{nascimento}</Table.Cell>
                    </Table.Row>
                </Table.Body>
            </Table></Col>
            <Col xs={2}/>

        </Row>
            
            
            

        
    )
}

 