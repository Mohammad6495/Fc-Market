import React from 'react';

import './Cart.css'

const Cart = (props) => {
    return (
        <div className={props.show ? 'cart cart-show' : 'cart cart-hidden'}>
            <div className='list-cart'>
                <div className='cart-item  d-flex'>
                    <img src='./images/square-1.png' className='img-cart-item' />
                    <div className='cart-info mx-3'>
                        <h6>لباس بافتنی</h6>
                        <div>
                            <span>فروشنده:</span>
                            <span>
                                <a href='#' className='mx-1 mb-1' rel='tag'>صنایف دستی</a>
                                <span>,</span>
                                <a href='#' className='mx-1 mb-1' rel='tag'>ابزارهای اداری</a>
                                <span>,</span>
                                <a href='#' className='mx-1 mb-1' rel='tag'>ابزارهای اداری</a>
                            </span>
                        </div>
                        <div className="cart-item-quantity">1 × <span>تومان</span> 25000</div>
                    </div>
                    <button className='btn-close-cart' title='حذف'><i className='fa fa-close'></i></button>
                </div>
                <div className='cart-item  d-flex'>
                    <img src='./images/square-1.png' className='img-cart-item' />
                    <div className='cart-info mx-3'>
                        <h6>لباس بافتنی</h6>
                        <div>
                            <span>فروشنده:</span>
                            <span>
                                <a href='#' className='mx-1' rel='tag'>صنایف دستی</a>
                                <span>,</span>
                                <a href='#' className='mx-1' rel='tag'>ابزارهای اداری</a>
                                <span>,</span>
                                <a href='#' className='mx-1' rel='tag'>ابزارهای اداری</a>
                            </span>
                        </div>
                        <div className="cart-item-quantity">1 × <span>تومان</span> 25000</div>
                    </div>
                    <button className='btn-close-cart' title='حذف'><i className='fa fa-close'></i></button>
                </div>
            </div>
            <div className='sum-cost d-flex justify-content-between'>
                <h5>جمع:</h5>
                <h5>تومان 131000</h5>
            </div>
            <div className='cart-link mt-2'>
                <button className='btn-cart-link btn-red'>سبد خرید</button>
                <button className='btn-cart-link btn-black mx-2'>بررسی</button>
            </div>
        </div>
    )
}

export default Cart