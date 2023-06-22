import React from 'react'
import Home from './components/Home'
import './App.css'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Signup from './components/Signup'
import Login from './components/Login'
import Dash from './components/Dash'
import { initializeApp} from 'firebase/app';
import { config } from './config/config'
import AuthRoute from './Auth/AuthRoute'

initializeApp(config.firebaseConfig);

export interface AppPropps{}
const App: React.FunctionComponent<AppPropps> = (props) => {
  return (
    <Router>
    <Routes>
      <Route path='/' element={
       <AuthRoute>
        <Home></Home>
        </AuthRoute>}>
      </Route>
      <Route path='/signup' element={<Signup onSignUP={function (): void {
          throw new Error('Function not implemented.')
        } }></Signup>}></Route>
      <Route path='/login' element={<Login onLogin={function (): void{
        throw new Error ('Function not implemented')
      }}></Login>}></Route>
      <Route path='/Dashboard' element={<Dash></Dash>}></Route>
    </Routes>
    
  </Router>
  )
}

export default App