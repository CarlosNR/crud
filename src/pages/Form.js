import {Container, Row, Col} from 'react-bootstrap'
import {useState} from 'react'
import validator from 'validator'

export default function Form({onSave, user = {}}){
    const [userData, setUserData] = useState(user)
    const [errors, setErrors] = useState({})
    
    const {nome, email, senha, nascimento} = userData

    const validateData = () => {
        let errors = {}
        
        if (!validator.isAlpha(nome)){
            errors.nome = "Nome aceita apenas letras."
        }
        if (!validator.isEmail(email)){
            errors.email = "E-mail inválido."
        }
        if (!senha){
            errors.nome = "Senha nescesária."
        }
        if (!validator.isDate(nascimento)){
            errors.nome = "Data de nascimento inválida."
        }
        return errors;
    }

    const handleChange = (event) => {
        const {nome, value} = event.target
        setUserData((prevData) => ({...prevData, [nome]:value}))
    }

    const handleSave = () => {
        
        const errors = validateData()
        
        if(Object.keys(errors).length){
            setErrors(errors)
            // tem erro aqui, nao salvar mais
            return
        }

        setErrors({})
        console.log(userData)
        onSave(userData)

    }
    return(
        
        <Container className="containerConteudo">
            
            <Row className="align-items-center justify-content-center">
                <h1>Cadastro</h1>
            </Row>

            <Row className="align-items-center justify-content-center">
                <Col lg={6}>
                    <span>Nome</span>
                    <input name="nome" defaultValue={nome} onChange={handleChange}/>
                    <div style={{color: "red"}}>{errors.name}</div>
                </Col>
            </Row>

            <Row className="align-items-center justify-content-center">
                <Col lg={6}>
                    <span>Email</span>
                    <input name="nome" defaultValue={email} onChange={handleChange}/>
                    <div style={{color: "red"}}>{errors.email}</div>
                </Col>
            </Row>

            <Row className="align-items-center justify-content-center">
                <Col lg={6}>
                    <span>Senha</span>
                    <input name="senha" defaultValue={senha} type="password" onChange={handleChange}/>
                    <div style={{color: "red"}}>{errors.senha}</div>
                </Col>
            </Row>

            <Row className="align-items-center justify-content-center">
                <Col lg={6}>
                    <span>Nascimento</span>
                    <input name="nascimento" defaultValue={nascimento} type="date" onChange={handleChange}/>
                    <div style={{color: "red"}}>{errors.nascimento}</div>
                </Col>
            </Row>
        </Container>
        
    )
}

 