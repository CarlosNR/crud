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
import AtualizarLogin from './pages/AtualizarLogin'
import AtualizarDados from './pages/AtualizarDados'


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
          <Route path="/atualizarLogin" element={
            <AtualizarLogin/>
          }/>
          <Route path="/atualizarDados" element={
            <AtualizarDados/>
          }/>


        </Routes>
        <Footer/>
      </Router>

    </div>
  )
}


