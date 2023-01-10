import React from 'react'
import './Login.css'
import backicon from '../../assets/back.svg'
import radioon from '../../assets/radio-button-on.svg'
import radiooff from '../../assets/radio-button-off.svg'
import arrowdown from '../../assets/arrow-down.svg'
import preview from '../../assets/preview.svg'
import checkboxon from '../../assets/checkbox-checked.svg'

const Login = () => {
    return (
        <div className='login-body'>
            <div className='login-form'>
                <div className='form-head'>
                    <img src={backicon} alt="backicon" width={17} />
                    <p style={{ fontSize: '24px', margin: '0px auto', color: 'rgba(34, 34, 34, 1)' }}>
                        <b>Log in with Quantum</b>
                    </p>
                </div>
                <div className='form-radio'>
                    <img src={radioon} alt="radioon" width={20} className='radiobtn' />
                    <p className='radiotext'>District</p>
                    <img src={radiooff} alt="radiooff" width={20} className='radiobtn' />
                    <p className='radiotext'>Independent school</p>
                </div>
                <div className='form-dropdown'>
                    <p style={{ color: 'rgba(102, 102, 102, 1)', fontSize: '12px' }}>
                        State*
                    </p>
                    <div style={{ display: 'flex', justifyContent: 'space-between' }}>
                        <p style={{ color: 'rgba(34, 34, 34, 1)', fontSize: '16px' }}>
                            Alabama
                        </p>
                        <img src={arrowdown} alt="arrowdown" />
                    </div>
                </div>
                <div className='form-dropdown'>
                    <p style={{ color: 'rgba(102, 102, 102, 1)', fontSize: '12px' }}>
                        District*
                    </p>
                    <div style={{ display: 'flex', justifyContent: 'space-between' }}>
                        <p style={{ color: 'rgba(34, 34, 34, 1)', fontSize: '16px' }}>
                            Alabama School District
                        </p>
                        <img src={arrowdown} alt="arrowdown" />
                    </div>
                </div>
                <div className='form-input'>
                    <input className='form-input-field' type="text" placeholder='Username/Email ID*' />
                    <p style={{ color: 'rgba(31, 122, 84, 1)', fontSize: '14px', textAlign: 'end' }}>FORGOT USERNAME?</p>
                </div>
                <div className='form-input'>
                    <div style={{ display: 'flex', justifyContent: 'space-between' }}>
                        <input className='form-input-field' type="password" placeholder='Password*' />
                        <img src={preview} alt="preview" style={{ borderBottom: '1px solid rgba(0,0,0,0.12)' }} />
                    </div>
                    <p style={{ color: 'rgba(31, 122, 84, 1)', fontSize: '14px', textAlign: 'end' }}>FORGOT USERNAME?</p>
                </div>
                <div className='form-checkbox'>
                    <img src={checkboxon} alt="checkboxon" width={20} className='checkboxbtn' />
                    <p className='checkboxtext'>Remember Me</p>
                </div>
                <div style={{ display: 'flex', justifyContent: 'center' }}>
                    <button className='login-submit'>LOG IN</button>
                </div>
            </div>
        </div>
    )
}

export default Login