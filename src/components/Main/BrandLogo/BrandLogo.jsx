import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux'
import SwiperCore, { Navigation, Autoplay } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';

import { brandListMainActions } from '../../../Redux/actions/brand-actions'


const BrandLogo = () => {
    
    const dispatch = useDispatch();
    SwiperCore.use([Autoplay])
    useEffect(() => {
        dispatch(brandListMainActions())
    }, [dispatch])

    const BrandListMain = useSelector((state) => state.brandList);

    const { loading, brand } = BrandListMain;

    return (
        <div className='brand-logo'>
            <div className='container'>
                <div className='brand-logo-list'>
                    <Swiper
                        modules={[Navigation]}
                        slidesPerView={2}
                        spaceBetween={10}                   
                        autoplay={{
                            delay: 800,
                            disableOnInteraction: false
                        }}
                        breakpoints={{
                            640: {
                                slidesPerView: 3,
                                spaceBetween: 20,
                            },
                            768: {
                                slidesPerView: 4,
                                spaceBetween: 40,
                            },
                            1024: {
                                slidesPerView: 5,
                                spaceBetween: 50,
                            },
                        }}
                    >
                        {brand.map((item) => {
                            return <SwiperSlide key={item.id}>
                                <a href='#'>
                                    <img src={item.logo} className='img-fluid' />
                                </a>
                            </SwiperSlide>
                        })}
                    </Swiper>
                </div>
            </div>
        </div>
    )
}

export default BrandLogo