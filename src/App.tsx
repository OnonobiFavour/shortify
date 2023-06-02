import React from 'react'
import Home from './components/Home'
import './App.css'
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom'
import Signup from './components/Signup'
import Login from './components/Login'

const App = () => {
  return (
    <Router>
    <Routes>
      <Route exact path='/' element={<Home></Home>}></Route>
      <Route exact path='/signup' element={<Signup></Signup>}></Route>
      <Route exact path='/login' element={<Login></Login>}></Route>
    </Routes>
    
  </Router>
  )
}

export default App