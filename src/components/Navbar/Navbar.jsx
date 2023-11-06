import React from 'react'
import './style.scss'
import { NavLink } from 'react-router-dom'
import logo from '../../assets/logo/logo-navbar.png'

const Navbar = () => {
  return (
    <div className='navbar-container'>
        <div className='navbar-wrapper'>
            <NavLink to='/home'><img src={logo} alt="logo" /></NavLink>
            <ul>
                <li>
                    <NavLink to='/'>Home</NavLink>
                </li>
                <li>
                    <NavLink to='/aboutus'>About Us</NavLink>
                </li>
                <li>
                    <NavLink to='/architecture'>Architecture</NavLink>
                </li>
                <li>
                    <NavLink to='/services'>Services</NavLink>
                </li>
                <li>
                    <NavLink to='/projects'>Projects</NavLink>
                </li>
                <li>
                    <NavLink to='/contact'>Contact</NavLink>
                </li>
                
            </ul>
        </div>
    </div>
  )
}

export default Navbar
