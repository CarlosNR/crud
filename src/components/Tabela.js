import { Row, Col } from 'react-bootstrap'
import { Table } from 'semantic-ui-react'
import { parseISO, format } from 'date-fns'

export default function Formulario({id, nome, email, nascimento}){
    nascimento = format( parseISO(nascimento), "dd/MM/yyyy")

    return(
        
        <Row className="mt-5">
            <Col xs={2}/>
            <Col xs={8}><Table singleLine>
                <Table.Header>
                    <Table.Row>
                        <Table.HeaderCell style={{color: "var(--texto)"}}>Id</Table.HeaderCell>
                        <Table.HeaderCell style={{color: "var(--texto)"}}>Nome</Table.HeaderCell>
                        <Table.HeaderCell style={{color: "var(--texto)"}}>Email</Table.HeaderCell>
                        <Table.HeaderCell style={{color: "var(--texto)"}}>Data de nascimento</Table.HeaderCell>
                    </Table.Row>
                </Table.Header>
                <Table.Body>
                    <Table.Row>
                        <Table.Cell style={{color: "var(--links)"}}>{id}</Table.Cell>
                        <Table.Cell style={{color: "var(--links)"}}>{nome}</Table.Cell>
                        <Table.Cell style={{color: "var(--links)"}}>{email}</Table.Cell>
                        <Table.Cell style={{color: "var(--links)"}}>{nascimento}</Table.Cell>
                    </Table.Row>
                </Table.Body>
            </Table></Col>
            <Col xs={2}/>

        </Row>
            
            
            

        
    )
}

 