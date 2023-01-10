import React from 'react'
import './Footer.css'
import logo from '../../assets/logofooter.svg'

const Footer = () => {
    return (
        <div className='footer-body'>
            <div className='footer-links'>
                <p style={{ fontSize: '14px', color: 'rgba(31, 122, 84, 1)' }}>
                    About
                </p>
                <p style={{ fontSize: '14px', color: 'rgba(0,0,0,0.12)' }}>|</p>
                <p style={{ fontSize: '14px', color: 'rgba(31, 122, 84, 1)' }}>
                    Contact Us
                </p>
            </div>
            <div className='copyright'>
                <img src={logo} alt="logo" />
                <p style={{ fontSize: '20px', color: 'rgba(0,0,0,0.12)' }}>|</p>
                <p>
                    Copyright Ⓒ 2020-2021 <b>Zeus Systems Pvt. Ltd.</b>  All rights reserved.
                </p>
            </div>
        </div>
    )
}

export default Footer