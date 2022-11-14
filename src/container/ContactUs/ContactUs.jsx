import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import Companion from '../../components/UI/Companion/Companion';
import { companyInformationsActions } from '../../Redux/actions/companyInfo-actions';
import ContactUsForm from './ContactUsForm';

import './ContactUs.css';
import backImage from './5.png';

const ContactUs = () => {

    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(companyInformationsActions())
    }, [dispatch]);

    const companyDataInfo = useSelector((state) => state.companyInfo);

    const { loading, companyInfo } = companyDataInfo;

    if (loading) {
        document.title = 'در حال پردازش ...';
    } else {
        document.title = 'تماس با ما';
    }

    const style = {
        background: `url(${backImage}) no-repeat bottom right / 60%`,
        width: "100%",
    }

    return (
        <>
            {loading ? (
                <div className='loading-Page'>
                    <div>
                        <div className="lds-hourglass"></div>
                        <p>لطفا صبر کنید...</p>
                    </div>
                </div>
            ) : (
                <>
                    <Companion title='تماس با ما' />
                    <div className='contact-us' style={style}>
                        <div className='container'>
                            <div className='row'>
                                <div className='col-lg-6'>
                                    <div className="mapouter">
                                        <div className="gmap_canvas">
                                            <iframe id="gmap_canvas" src="https://maps.google.com/maps?q=2880%20Broadway,%20New%20York&t=&z=13&ie=UTF8&iwloc=&output=embed"></iframe>
                                        </div>
                                    </div>
                                </div>
                                <div className='col-lg-6'>
                                    <div className='contact-info'>
                                        <h4 className='contact-title'>دفتر شرکت</h4>
                                        <p>
                                            {companyInfo.adress}
                                            <br />
                                            {companyInfo.numberPhone}
                                        </p>
                                    </div>
                                    <div className='contact-info'>
                                        <h4 className='contact-title'>فروشگاه</h4>
                                        <p>
                                            {companyInfo.adress}
                                            <br />
                                            {companyInfo.numberPhone}
                                        </p>
                                    </div>
                                </div>
                            </div>
                            <div className='row mt-5'>
                                <div className='col-lg-6 mb-4'>
                                    <div className='contact-info m-0'>
                                        <h4 className='contact-title'>با ما تماس بگیرید</h4>
                                        <p>
                                            {companyInfo.des}
                                            <br />
                                            {companyInfo.email}
                                        </p>
                                    </div>
                                </div>
                                <div className='col-lg-6 mb-4'>
                                    <ContactUsForm />
                                </div>
                            </div>
                        </div>
                    </div>
                </>
            )}

        </>
    )
}

export default ContactUs