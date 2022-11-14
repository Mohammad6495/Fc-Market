import React from 'react';

import "./Footer.css";

const Footer = () => {
    return (
        <footer className='footer'>
            <div className='container'>
                <div className='row'>
                    <div className='col-lg-3 col-sm-6'>
                        <div className='item'>
                            <h4 className='footer-title'>آدرس</h4>
                            <p className='footer-info'>ایران ، تهران ، زعفرانیه ، خیابان مهر ، ساختمان هستی ، پلاک 123</p>
                        </div>
                    </div>
                    <div className='col-lg-3 col-sm-6'>
                        <div className='item'>
                            <h4 className='footer-title'>تلفن</h4>
                            <p className='footer-info'>تلفن رایگان (021) 765-4321</p>
                        </div>
                    </div>
                    <div className='col-lg-3 col-sm-6'>
                        <div className='item'>
                            <h4 className='footer-title'>ایمیل</h4>
                            <p className='footer-info'>mail@example.com</p>
                        </div>
                    </div>
                    <div className='col-lg-3 col-sm-6'>
                        <div className='item'>
                            <h4 className='footer-title'>ساعت کاری</h4>
                            <p className='footer-info'>شنبه - چهارشنبه / 9:00 - 20:00</p>
                        </div>
                    </div>
                </div>
                <div className='row mt-5'>
                    <div className='col-lg-3 col-sm-6'>
                        <div className='item'>
                            <h4 className='footer-title'>اطلاعات</h4>
                            <ul className='footer-list'>
                                <li><a className='footer-link' href="#">درباره ما</a></li>
                                <li><a className='footer-link' href="#">تماس با ما</a></li>
                                <li><a className='footer-link' href="#">سوالات متداول</a></li>
                                <li><a className='footer-link' href="#">حفظ حریم خصوصی</a></li>
                                <li><a className='footer-link' href="#">شرایط و ضوابط</a></li>
                            </ul>
                        </div>
                    </div>
                    <div className='col-lg-3 col-sm-6'>
                        <div className='item'>
                            <h4 className='footer-title'>خدمات</h4>
                            <ul className='footer-list'>
                                <li><a className='footer-link' href="#">سوالات متداول</a></li>
                                <li><a className='footer-link' href="#">سفارشات و بازگشت</a></li>
                                <li><a className='footer-link' href="#">سیاست های ارسال</a></li>
                                <li><a className='footer-link' href="#">ارسال بین المللی</a></li>
                                <li><a className='footer-link' href="#">شرایط و ضوابط</a></li>
                            </ul>
                        </div>
                    </div>
                    <div className='col-lg-3 col-sm-6'>
                        <div className='item'>
                            <h4 className='footer-title'>حساب کاربری</h4>
                            <ul className='footer-list'>
                                <li><a className='footer-link' href="#">سبد خرید</a></li>
                                <li><a className='footer-link' href="#">بررسی</a></li>
                                <li><a className='footer-link' href="#">حساب من</a></li>
                                <li><a className='footer-link' href="#">تماس با ما</a></li>
                                <li><a className='footer-link' href="#">حفظ حریم خصوصی</a></li>
                            </ul>
                        </div>
                    </div>
                    <div className='col-lg-3 col-sm-6'>
                        <div className='item'>
                            <div>
                                <h4 className='footer-title'>تماس با ما</h4>
                                <p className='footer-info'>ایران ، تهران ، زعفرانیه ، خیابان مهر ، ساختمان هستی ، پلاک 123</p>
                            </div>
                            <div className='mt-5'>
                                <h4 className='footer-title'>دریافت پشتیبانی؟</h4>
                                <a href='#' className='footer-link text-decoration-underline'>چت کن</a>
                            </div>
                        </div>
                    </div>
                </div>
                <div className='row mt-5'>
                    <div className='d-flex justify-content-between align-item-center flex-md-row flex-column'>
                        <div className='item'>
                            <div>
                                <a href='#' className='footer-link content-null' style={{ marginLeft: '10px' }}>خانه</a>
                                <a href='#' className='footer-link content-null mx-2'>امکانات</a>
                                <a href='#' className='footer-link content-null mx-2'>دسته بندی ها</a>
                                <a href='#' className='footer-link content-null mx-2'>درباره ما</a>
                                <a href='#' className='footer-link content-null mx-2'>فروشگاه</a>
                                <a href='#' className='footer-link content-null mx-2'>تماس با ما</a>
                            </div>
                        </div>
                        <div className='item'>
                           <a href='#' className='footer-icon mx-1'><i className='fa fa-instagram'></i></a>
                            <a href='#' className='footer-icon mx-1'><i className='fa fa-youtube-play'></i></a>
                            <a href='#' className='footer-icon mx-1'><i className='fa fa-telegram'></i></a>
                            <a href='#' className='footer-icon mx-1'><i className='fa fa-twitter'></i></a> 
                        </div>
                    </div>
                </div>
                <div className='row mt-5'>
                <div className='d-flex justify-content-between align-item-center flex-md-row flex-column'>
                        <div className='item'>
                            <div>
                                <a href='#' className='footer-link content-line'>ویژه</a>
                                <a href='#' className='footer-link content-line '>بازاریابی</a>
                                <a href='#' className='footer-link content-line '>ویژه</a>
                                <a href='#' className='footer-link content-line '>تخفیف</a>
                                <a href='#' className='footer-link'>برندها</a>
                            </div>
                        </div>
                        <div className='item'>
                            <p className='footer-info'>کپی رایت © 1400 داود</p>
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    )
}

export default Footer