import './App.css'
import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css'
import {
  BrowserRouter as Router,
  Routes,
  Route
} from 'react-router-dom'

import Formulario from './pages/Formulario'
import FormularioB from './pages/FormularioB'
import Navbar from './components/Navbar'
import Footer from './components/Footer'

export default function App() {
  return (
    <div className="App">
    
      <Router>     
        <Navbar/>
        <Routes>
    
          <Route path="/" element={           
            <Formulario/>
          }/>
          <Route path="/b" element={           
            <FormularioB/>
          }/>   
        </Routes>
        <Footer/>
      </Router>

    </div>
  )
}


