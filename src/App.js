import './App.css'
import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css'
import {
  BrowserRouter as Router,
  Routes,
  Route
} from 'react-router-dom'

import Cadastrar from './pages/Cadastrar'
import Consultar from './pages/Consultar'
import Deletar from './pages/Deletar'
import Atualizar from './pages/Atualizar'

import Navbar from './components/Navbar'
import Footer from './components/Footer'

export default function App() {
  return (
    <div className="App">
    
      <Router>     
        <Navbar/>

        <Routes>
    
          <Route path="/" element={           
            <Cadastrar/>
          }/>
          <Route path="/mostrar" element={           
            <Consultar/>
          }/>
          <Route path="/deletar" element={     
            <Deletar/>
          }/>
          <Route path="/atualizar" element={
            <Atualizar/>
          }/>


        </Routes>
        <Footer/>
      </Router>

    </div>
  )
}


