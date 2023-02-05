import React from 'react'
import './App.css'
import SignUp from './components/SignUp'
import Login from './components/Signin'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Dashobaord from './components/Dashobaord'


const App = () => {
  return (
    <BrowserRouter>
          <Routes>
            <Route path="/" element={<SignUp />}></Route>
            <Route path="/login" element={<Login />}> </Route>
            <Route path="/dashboard/:name" element={<Dashobaord />}> </Route>
            {/* <Route path="/dashboard" element={<Dashobaord />}> </Route> */}
            </Routes>
        </BrowserRouter>
  )
}

export default App