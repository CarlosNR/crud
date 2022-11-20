import './App.css'
import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css'
import {
  BrowserRouter as Router,
  Routes,
  Route
} from 'react-router-dom'

import Form from './pages/Form'
import Navbar from './components/Navbar'
import Footer from './components/Footer'

export default function App() {
  const user = {
    nome: "",
    email: "",
    senha: "",
    nascimento: ""
  }
  
  const handleSave = (values) => {
    console.log({values})
  }
  return (
    <div className="App">
    
      <Router>     
        <Navbar/>
        <Routes>
    
          <Route path="/" element={           
            <Form onSave={handleSave} {...{user}}/>
          }/>
                    
        </Routes>
        <Footer/>
      </Router>

    </div>
  )
}


