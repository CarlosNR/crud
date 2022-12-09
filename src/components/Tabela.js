import { Row, Col } from 'react-bootstrap'
import { Table } from 'semantic-ui-react'
import { parseISO, format } from 'date-fns'

export default function Formulario({id, nome, email, nascimento}){
    nascimento = format( parseISO(nascimento), "dd/MM/yyyy")

    return(
        
        <Row className='d-flex align-items-center justify-content-center my-2'>
            <Col xs={2}/>
            <Col xs={8}><Table singleLine>
                <Table.Header>
                    <Table.Row>
                        <Table.HeaderCell className='text-center' style={{color: "var(--texto)"}}>Id</Table.HeaderCell>
                        <Table.HeaderCell className='text-center' style={{color: "var(--texto)"}}>Nome</Table.HeaderCell>
                        <Table.HeaderCell className='text-center' style={{color: "var(--texto)"}}>Email</Table.HeaderCell>
                        <Table.HeaderCell className='text-center' style={{color: "var(--texto)"}}>Data de nascimento</Table.HeaderCell>
                    </Table.Row>
                </Table.Header>
                <Table.Body>
                    <Table.Row>
                        <Table.Cell className='infoTabela'>{id}</Table.Cell>
                        <Table.Cell className='infoTabela'>{nome}</Table.Cell>
                        <Table.Cell className='infoTabela'>{email}</Table.Cell>
                        <Table.Cell className='infoTabela'>{nascimento}</Table.Cell>
                    </Table.Row>
                </Table.Body>
            </Table></Col>
            <Col xs={2}/>

        </Row>
            
            
            

        
    )
}

 