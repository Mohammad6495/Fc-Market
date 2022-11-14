import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux'
import { Link } from 'react-router-dom';
import { Navigation } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';

import { ProductTypeListSwiperActions } from '../../../Redux/actions/products-actions'


const SwiperProductType = () => {

    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(ProductTypeListSwiperActions())
    })

    const productsList = useSelector((state) => state.productsTypeList);

    const { loading, productsType } = productsList

    return (
        <div className='container text-center '>
            <div className='swiper-product-type'>
                <Swiper
                    modules={[Navigation]}
                    slidesPerView={2}
                    spaceBetween={10}
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
                    navigation
                >
                    {productsType.map((item) => {
                        return <SwiperSlide key={item.id}>
                            <div className='swiper-item'>
                                <img src={item.images} />
                                <Link className='nav-link' to={`/products/${item.id}`}>{item.name}</Link>
                                <span>برند، محصولات</span>
                            </div>
                        </SwiperSlide>
                    })}
                </Swiper>
            </div>
        </div>
    )
}

export default SwiperProductType