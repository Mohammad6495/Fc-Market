import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Swal from 'sweetalert2';

import { contactUsFormActions } from '../../Redux/actions/companyInfo-actions';

const ContactUsForm = () => {

    const dispatch = useDispatch()


    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [numberPhone, setNumberPhone] = useState('');
    const [topic, setTopic] = useState('');
    const [messageValue, setMessage] = useState('');

    const contactSubmitHandler = (e) => {
        e.preventDefault();
        const item = {
            name: name,
            email: email,
            numberPhone: numberPhone,
            topic: topic,
            message: messageValue,
        }
        if (name == '' || email == '' || numberPhone == '', topic == '', messageValue == '') {
            Swal.fire(
                'خطا!',
                'موارد را خالی نگذارید',
                'error'
            )
        } else {
            dispatch(contactUsFormActions(item));
            Swal.fire({
                position: 'top-end',
                icon: 'success',
                title: `${mes}`,
                showConfirmButton: false,
                timer: 1500
            });

        }
    }
    const addcontacus = useSelector((state) => state.contactUsForm);

    const { loading, mes } = addcontacus;
    return (
        <form className='form-group' onSubmit={(e) => contactSubmitHandler(e)}>
            <div className='row'>
                <div className='col-lg-6'>
                    <input value={name} onChange={(e) => setName(e.target.value)} type='text' placeholder='نام' className='contact-input' />
                </div>
                <div className='col-lg-6'>
                    <input value={email} onChange={(e) => setEmail(e.target.value)} type='email' placeholder='ایمیل' className='contact-input' />
                </div>
                <div className='col-lg-6'>
                    <input value={numberPhone} onChange={(e) => setNumberPhone(e.target.value)} type='text' placeholder='تلفن' className='contact-input' />
                </div>
                <div className='col-lg-6'>
                    <input value={topic} onChange={(e) => setTopic(e.target.value)} type='text' placeholder='موضوع' className='contact-input' />
                </div>
                <div className='col-lg-12'>
                    <textarea value={messageValue} onChange={(e) => setMessage(e.target.value)} rows='6' type='text' placeholder='پیام' className='contact-input'></textarea>
                </div>
            </div>
            <div className='text-right'>
                <button className='contact-form-btn'>ارسال پیام</button>
            </div>
        </form>
    )
}

export default ContactUsForm