import React from 'react'
import './Navbar.css'
import logo from '../../assets/logo.svg'

const Navbar = () => {
    return (
        <div className='navbar-body'>
            <div className='navbar-brand'>
                <img className='navbar-logo' src={logo} alt="logo" />
            </div>
        </div>
    )
}

export default Navbar