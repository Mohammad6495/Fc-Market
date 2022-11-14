import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import Companion from '../../components/UI/Companion/Companion';
import EmployeeList from './EmployeeList';
import { aboutUsAction } from "../../Redux/actions/aboutUs-actions";

import './AboutUs.css';

const AboutUs = () => {
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(aboutUsAction())
    }, [dispatch])

    const aboutUsdata = useSelector((state) => state.aboutUs);

    const { loading, aboutUs } = aboutUsdata;
    if (loading) {
        document.title = 'در حال پردازش ...';
    } else {
        document.title = 'در باره ما'

    }
    return (
        <>
            {loading ? <div className='loading-Page'>
                <div>
                    <div className="lds-hourglass"></div>
                    <p>لطفا صبر کنید...</p>
                </div>
            </div> : <>
                <Companion title='درباره ما' />
                <div className='about-us'>
                    <div className='container my-5'>
                        <div className='row mb-5'>
                            <div className='col-md-6'>
                                <div className='mt-5'>
                                    <h4 className='about-title'>درباره ما</h4>
                                    <p className='about-des'>{aboutUs.description}</p>
                                </div>
                            </div>
                            <div className='col-md-6 mt-md-0 mt-4'>
                                <img src='./images/AboutUs/6.png' className='img-fluid' />
                            </div>
                        </div>
                        <div className='row mb-5'>
                            <div className='col-lg-3 col-md-6 mb-3'>
                                <div className='count-company'>
                                    <img src='./images/AboutUs/3.png' className='img-fluid ' />
                                    <div className='info'>
                                        <h6>مشتریان</h6>
                                        <span>1200</span>
                                    </div>
                                </div>
                            </div>
                            <div className='col-lg-3 col-md-6 mb-3'>
                                <div className='count-company'>
                                    <img src='./images/AboutUs/4.png' className='img-fluid ' />
                                    <div className='info'>
                                        <h6>کارمندان</h6>
                                        <span>312</span>
                                    </div>
                                </div>
                            </div>
                            <div className='col-lg-3 col-md-6 mb-3'>
                                <div className='count-company'>
                                    <img src='./images/AboutUs/3.png' className='img-fluid ' />
                                    <div className='info'>
                                        <h6>بازدید</h6>
                                        <span>24</span>
                                    </div>
                                </div>
                            </div>
                            <div className='col-lg-3 col-md-6 mb-3'>
                                <div className='count-company'>
                                    <img src='./images/AboutUs/4.png' className='img-fluid ' />
                                    <div className='info'>
                                        <h6>شعبه</h6>
                                        <span>24</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className='row mb-5'>
                            <div className='col-md-6 mt-md-0 mt-4'>
                                <img src='./images/AboutUs/5.png' className='img-fluid' />
                            </div>
                            <div className='col-md-6'>
                                <div className='mt-5'>
                                    <h4 className='about-title'>بنیانگذار ما</h4>
                                    <p className='about-des'>{aboutUs.ourfounder}</p>
                                </div>
                            </div>
                        </div>
                        <div className='row'>
                            <EmployeeList />
                        </div>
                    </div>
                </div>
            </>}
        </>
    )
}

export default AboutUs