import React, { useState } from 'react';

import './LoginModal.css';

const LoginModal = (props) => {

    const [inputValue, setInputValue] = useState({
        username: '',
        password: ''
    })

    const loginSubmitHandler = async (e) => {
        e.preventDefault();
    }

    return (
        <div className={props.showModal ? 'login-show-modal' : 'login-cancel-modal'}>
            <button onClick={props.close} type='button' className='btn-close-login'><i className='fa fa-close'></i></button>
            <div className='login-modal'>
                <h4>ورود</h4>
                <p>به سفارشات، لیست مورد علاقه و توصیه های خود دسترسی پیدا کنید.</p>
                <form className='form-group' onSubmit={(e) => loginSubmitHandler(e)}>
                    <div className='row'>
                        <div className='col-12'>
                            <input className='login-input' type='text' placeholder='نام کاربری / ایمیل خود را وارد کنید' onChange={(e) => setInputValue({ ...inputValue, username: e.target.value })} value={inputValue.username} />
                        </div>
                        <div className='col-12'>
                            <input className='login-input' type='password' placeholder='رمز عبور را وارد کنید' onChange={(e) => setInputValue({ ...inputValue, password: e.target.value })} value={inputValue.password} />
                        </div>
                        <div className='d-flex justify-content-between'>
                            <div className='d-flex align-items-center'>
                                <input id='check' type='checkbox' />
                                <label htmlFor="check" className='mx-1'>مرا به خاطر بسپار</label>
                            </div>
                            <a href='#' className='text-danger'>رمز عبور خود را فراموش کرده اید؟</a>
                        </div>
                    </div>
                    <div className=''>
                        <button className='btn-submit-login'>ورود</button>
                    </div>
                </form>
            </div>
        </div>
    )
}

export default LoginModal