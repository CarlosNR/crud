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
  return (
    <div className="App">
    
      <Router>     
        <Navbar/>
        <Routes>
    
          <Route path="/" element={           
            <Form/>
          }/>
                    
        </Routes>
        <Footer/>
      </Router>

    </div>
  )
}


