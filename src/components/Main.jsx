import React from 'react'
import { Routes, Route } from 'react-router-dom'
import Contact from './Contact'
import Home from './Home'
import Navbar from './Navbar'
import Student from './Student'

const Main = () => {
  return (
    <>
        <Navbar />
            <Routes>
                <Route  path='/' element= {< Home / >}/>
                <Route  path='/student' element= {< Student / >}/>
                <Route  path='/contact' element= {< Contact / >}/>
                

            </Routes>
    
    </>
  )
}

export default Main;