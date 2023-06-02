import React from 'react'
import Home from './components/Home'
import './App.css'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Signup from './components/Signup'
import Login from './components/Login'

const App = () => {
  return (
    <Router>
    <Routes>
      <Route path='/' element={<Home></Home>}></Route>
      <Route path='/signup' element={<Signup></Signup>}></Route>
      <Route path='/login' element={<Login></Login>}></Route>
    </Routes>
    
  </Router>
  )
}

export default App