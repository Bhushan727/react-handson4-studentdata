import React from 'react'
import { NavLink } from 'react-router-dom'

const Navbar = () => {
  return (
    <div className='navHeads'>

        
        <li className="nav-item">
            <NavLink className="nav-link active" to='/'>Home</NavLink>
        </li>
        <li className="nav-item">
            <NavLink className="nav-link" to="/student">Student</NavLink>
        </li>
        <li className="nav-item">
            <NavLink className="nav-link" to="contact">Contact Us</NavLink>
        </li>
        
       



    </div>
  )
}

export default Navbar