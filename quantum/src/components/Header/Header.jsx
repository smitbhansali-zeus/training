import React from 'react'
import './Header.css'
import logo from '../../assets/logo.svg'
import alerticon from '../../assets/alerts.svg'
import announcementicon from '../../assets/announcements.svg'
import avatar from '../../assets/avatar.webp'
import hamburger from '../../assets/hamburger-menu.svg'

const Header = () => {
    return (
        <div className='header-body'>
            <div className='header-brand'>
                <img className='header-logo' src={logo} alt="logo" />
            </div>
            <div className='header-links'>
                <div className='header-link' style={{ color: 'white', borderBottom: '5px solid white', paddingTop: '25px' }}>
                    <p style={{ paddingBottom: '20px' }}>DASHBOARD</p>
                </div>
                <div className='header-link'>
                    <p>CONTENT</p>
                </div>
                <div className='header-link'>
                    <p>USERS</p>
                </div>
                <div className='header-link'>
                    <p>REPORTS</p>
                </div>
                <div className='header-link'>
                    <p>ADMIN</p>
                </div>
                <div className='header-link alerticon'>
                    <img src={alerticon} alt="alerticon" />
                    <p className='alertnumber'>2</p>
                </div>
                <div className='header-link announcementicon'>
                    <img src={announcementicon} alt="announcementicon" />
                    <p className='announcementnumber'>1</p>
                </div>
                <div className='header-link avatar'>
                    <img className='avatar-img' src={avatar} alt="avatar" width={30} />
                    <p className='avatartext'>T</p>
                </div>
                <div className='header-link hamburger'>
                    <img src={hamburger} alt="hamburger" width={30} />
                </div>
            </div>
        </div>
    )
}

export default Header