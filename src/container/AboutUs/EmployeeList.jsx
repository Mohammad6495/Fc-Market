import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Navigation } from 'swiper';
import { Swiper, SwiperSlide } from "swiper/react";

import { employeeListActions } from '../../Redux/actions/employyes-actions';

const EmployeeList = () => {
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(employeeListActions());
    }, [dispatch]);

    const employeeList = useSelector((state) => state.employeesList);
    const { employees } = employeeList;

    return (
        <div className='employee text-center'>
            <h4 className='about-title mb-5'>اعضای تیم قوی ما</h4>
            <Swiper
                modules={[Navigation]}
                slidesPerView={2}
                spaceBetween={25}
                breakpoints={{
                    640: {
                        slidesPerView: 2,
                        spaceBetween: 25,
                    },

                    1024: {
                        slidesPerView: 3,
                        spaceBetween: 40,
                    }
                }}
            >

                {employees.map((item) => {
                    return (
                        <SwiperSlide key={item.id}>
                            <div className='employee-item'>
                                <img src={`/./${item.img}`} className='img-fluid' />
                                <h3 className='about-title my-2'>{item.name}</h3>
                                <span>{item.job}</span>
                                <div className='media mt-3'>
                                    <a href='#' className='footer-icon mx-1'><i className='fa fa-instagram'></i></a>
                                    <a href='#' className='footer-icon mx-1'><i className='fa fa-youtube-play'></i></a>
                                    <a href='#' className='footer-icon mx-1'><i className='fa fa-telegram'></i></a>
                                    <a href='#' className='footer-icon mx-1'><i className='fa fa-twitter'></i></a>
                                </div>
                            </div>
                        </SwiperSlide>
                    )
                })}
            </Swiper>
        </div>
    )
}

export default EmployeeList