import React from 'react'
import {Routes,Route,Navigate} from 'react-router-dom'
import Home from './../pages/Home'
import Login from './../pages/Login'
import Register from './../pages/Register'
import BMI from './../pages/BMI'
import Calorie from './../pages/Calorie'
import Challenges from './../pages/Challenges'
import Contact from './../pages/Contact'
import About from '../pages/About'



const Routers = () => {
  return (
    <Routes>
        <Route path='/' element={<Navigate to='/home'/>} />
        <Route path='/home' element={<Home/>} />
        <Route path='/about' element={<About/>} />
        <Route path='/login' element={<Login/>} />
        <Route path='/register' element={<Register/>} />
        <Route path='/bmi' element={<BMI/>} />
        <Route path='/calorie' element={<Calorie/>} />
        <Route path='/challenges' element={<Challenges/>} />
        <Route path='/contact' element={<Contact/>} />
    </Routes>
  )
}

export default Routers