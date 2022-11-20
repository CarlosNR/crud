import {Link} from 'react-router-dom'
import styles from './Navbar.module.css'
import {Container, Navbar} from 'react-bootstrap'  
import icone from './imagens/logo4.png'
import 'bootstrap/dist/css/bootstrap.min.css'

export default function ColorSchemesExample() {
  return (

      <Navbar className={styles.navBarDesk} expand="lg">
        <Container>
          <Link  to="/">
            <Navbar.Brand>            
                <img className={styles.icone} src={icone} alt="Navbar"/>
            </Navbar.Brand>
          </Link>
        </Container>
      </Navbar>

      
  )
}
