import React from 'react'
import Home from './components/Home'
import './App.css'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Signup from './components/Signup'
import Login from './components/Login'
import Qr from './components/QR code/Qr'
import Dash from './components/Dash'
import Price from './components/pricing/Price'
import { initializeApp} from 'firebase/app';
import { config } from './config/config'
import PageError from './components/error/PageError'
import AuthRoute from './Auth/AuthRoute'
import Redirect from './components/Redirect'

initializeApp(config.firebaseConfig);

export interface AppPropps{}
const App: React.FunctionComponent<AppPropps> = (props) => {
  return (
    <Router>
        <Routes>
        <Route path='/' element={
      //  <AuthRoute>
        <Home></Home>
        // </AuthRoute>
        }>
      </Route>

      <Route path='/signup' element={<Signup onSignUP={function (): void {
          throw new Error('Function not implemented.')
        } }></Signup>}>

      </Route>
      <Route path='/login' element={<Login></Login>}>

      </Route>
      <Route path='/Dashboard' element={<Dash></Dash>}></Route>
      <Route path='/:slug' element={<Redirect></Redirect>}></Route>
      <Route path='/Pricing' element={<Price></Price>}></Route>
      <Route path='*' element={<PageError></PageError>}></Route>

      {/* Qr Route */}
      <Route path='/QR_generation' element={<Qr></Qr>}></Route>
    </Routes>
    
     </Router>
    
  )
}

export default App