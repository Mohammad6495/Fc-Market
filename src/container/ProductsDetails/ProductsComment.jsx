import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Swal from 'sweetalert2';

import { addCommentActions } from '../../Redux/actions/comments-actions';
import PCommentList from './PCommentList';

const ProductsComment = ({ pId }) => {

    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [description, setDes] = useState('');

    const dispatch = useDispatch();
    var dateObj = new Date();
    var month = dateObj.getUTCMonth() + 1; //months from 1-12
    var day = dateObj.getUTCDate();
    var year = dateObj.getUTCFullYear();

 
    const AddProductsSubmitForm = (e) => {
        e.preventDefault();
        const data = {
            name: name,
            email: email,
            description: description,
            productId: parseInt(pId),
            statusView: false,
            DateTime:  year + "/" + month + "/" + day,
        }
        if (data.description == '' || data.email == '' || data.name == '') {
            Swal.fire(
                'خطا!',
                'موارد را خالی نگذارید',
                'error'
            )
        } else {
            dispatch(addCommentActions(data));
            Swal.fire({
                position: 'top-end',
                icon: 'success',
                title: `${message}`,
                showConfirmButton: false,
                timer: 1500
            });
        }
    }
    const addComment = useSelector((state) => state.addComments);

    const { loading, message } = addComment;

    return (
        <div className='p-details-comments mt-4'>
            <PCommentList id={pId} />
            <div className='comments-form mt-4'>
                <h4 className='details-title mb-4'>ارسال نظرات</h4>
                <form className='form-group' onSubmit={(e) => AddProductsSubmitForm(e)}>
                    <div className='row'>
                        <div className='col-lg-6 mt-3'>
                            <label htmlFor='name'>نام شما<span className='text-danger'>*</span></label>
                            <input value={name} onChange={(event) => setName(event.target.value)} id='name' type="text" />
                        </div>
                        <div className='col-lg-6 mt-3'>
                            <label htmlFor='email'>ایمیل شما<span className='text-danger'>*</span></label>
                            <input value={email} onChange={(event) => setEmail(event.target.value)} id='email' type="email" />
                        </div>
                        <div className='col-12 mt-3'>
                            <label htmlFor='description'>نظر شما<span className='text-danger'>*</span></label>
                            <textarea value={description} onChange={(event) => setDes(event.target.value)} rows='7' id='description'></textarea>
                        </div>
                    </div>
                    <div className='text-right'>
                        {loading ? <p>{message}</p> : <button className='comment-btn'>ارسال</button>}
                    </div>
                </form>
            </div>
        </div>
    )
}

export default ProductsComment