import {Link} from 'react-router-dom'
import styles from './Navbar.module.css'
import {Button, Container, Offcanvas, Nav, Navbar, } from 'react-bootstrap'  
import {useState, useEffect} from 'react'  
import icone from './imagens/logo4.png'
import 'bootstrap/dist/css/bootstrap.min.css'

export default function NavBar() {
  const [show, setShow] = useState(false) 
  const [bootLg, SetBootLg] = useState(window.innerWidth > 991);

  const closeSidebar = () => setShow(false)
  const showSidebar = () => setShow(true)

  const updateMedia = () => {
    //trabalha em pixel por padrão
    SetBootLg(window.innerWidth > 991)
  }

  useEffect(() => {
    window.addEventListener("resize", updateMedia)
    return () => window.removeEventListener("resize", updateMedia);
  })

  return (
    <>
      {bootLg ? (
        <Navbar className={styles.navBar} expand="lg">
            <Container>
                <Link  to="/">
                    <Navbar.Brand>            
                        <img className={styles.icone} src={icone} alt="Navbar"/>
                    </Navbar.Brand>
                </Link>

                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">

                    <Nav className="ms-auto">
                    
                    <Link to="/">
                        <Button variant="outline-success" className={styles.navButton}>
                            Cadastrar
                        </Button>
                    </Link>

                    <Link to="/mostrar">
                        <Button variant="outline-success" className={styles.navButton}>
                            Mostrar meus dados
                        </Button>
                    </Link>

                    <Link to="/deletar">
                        <Button variant="outline-success" className={styles.navButton}>
                            Deletar conta
                        </Button>
                    </Link>

                    <Link to="/atualizarLogin">
                        <Button variant="outline-success" className={styles.navButton}>
                            Atualizar dados
                        </Button>
                    </Link>

                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
      ) : (
        <Navbar className={styles.navBar} expand="lg">
        <Container>

          <Navbar.Brand>            
            <Link  to="/">
              <img className={styles.icone} src={icone} alt="Navbar"/>
            </Link>
          </Navbar.Brand>

          <Navbar.Toggle onClick={showSidebar} className="ms-auto"/>

          <Container>  

            <Offcanvas show={show} onHide={closeSidebar}>  

              <Offcanvas.Header className={styles.offCanvasHead} closeButton>  
                <Offcanvas.Title className={styles.canvasMenu}>Menu</Offcanvas.Title>  
              </Offcanvas.Header>  
              
              <Offcanvas.Body className={styles.offCanvasBody}>  

                {/* Colocar o button DENTRO do link, se não o botão fecha 
                o menu principal e apenas a palavra dentro do botão redireciona */}
                <Link to="/" onClick={closeSidebar}>
                  <Button variant="outline-success" className={styles.offCanvasButton}>
                    Cadastrar
                  </Button>
                </Link>

                <Link to="/mostrar" onClick={closeSidebar}>
                  <Button variant="outline-success" className={styles.offCanvasButton}>
                    Mostrar meus dados
                  </Button>
                </Link>

                <Link to="/deletar" onClick={closeSidebar}>
                  <Button variant="outline-success" className={styles.offCanvasButton}>
                    Deletar conta
                  </Button>
                </Link>

                <Link to="/atualizarLogin" onClick={closeSidebar}>
                  <Button variant="outline-success" className={styles.offCanvasButton}>
                    Atualizar dados
                  </Button>
                </Link>

              </Offcanvas.Body>  

            </Offcanvas> 
          </Container>
        </Container>
      </Navbar>
      )}
    </>
  )
}
