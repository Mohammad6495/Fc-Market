import React, { useEffect } from 'react';
import { useDispatch, useSelector } from "react-redux";
import { Navigation } from 'swiper';
import { Swiper, SwiperSlide } from "swiper/react";
import { Link } from 'react-router-dom'; 

import { ProductListPopularActions } from "../../../Redux/actions/products-actions";


const PopularProducts = () => {
    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(ProductListPopularActions())
    }, [dispatch])

    const ProductsListPopular = useSelector((state) => state.productsList);

    const { loading, products } = ProductsListPopular;

    return (
        <div className='popular-products text-center'>
            <div className='container'>
                <h1 className='popular-title'>محصولات پرطرفدار</h1>
                <div className='popular-list my-5'>
                    <Swiper
                        modules={[Navigation]}
                        slidesPerView={2}
                        spaceBetween={10}
                        breakpoints={{
                            640: {
                                slidesPerView: 2,
                                spaceBetween: 20,
                            },
                            768: {
                                slidesPerView: 3,
                                spaceBetween: 40,
                            },
                            1024: {
                                slidesPerView: 4,
                                spaceBetween: 50,
                            }
                        }}
                    >
                        {loading ? <>< h4 className='mt-3'>لطفا صبر کنید</h4> <div className="lds-hourglass"></div></> : products.sort(function (a, b) {
                            return a.view < b.view ? 1 : -1;
                        }).map((item) => {
                            return (
                                <SwiperSlide key={item.id}>
                                    <div className="special-products-item">
                                  
                                            <div className="new-products-item">
                                                <div href="#" className="new-products-img">
                                                    <span className="wishlist">
                                                        <i
                                                            className="fa fa-heart heart"
                                                            title="مورد علاقه"
                                                        ></i>
                                                    </span>
                                                    {item.offPrice === 0 ? null : (
                                                        <span className="off-price">{item.offPrice}%</span>
                                                    )}
                                                    <img src={`/./${item.image}`} className="img-fluid" />
                                                    <a href="#" className="text-light">
                                                        <div className="cart-manager">
                                                            <p className="mb-0">
                                                                <span>
                                                                    <i className="fa fa-shopping-cart"></i>
                                                                </span>{" "}
                                                                <span>سبد خرید</span>
                                                            </p>
                                                        </div>
                                                    </a>
                                                </div>
                                                <div className="new-products-info">
                                                    <div>
                                                        <span>
                                                            <i className="fa fa-star text-yellow"></i>
                                                        </span>
                                                        <span className="count-star">{item.star}</span>
                                                    </div>
                                                    <Link to={`/productdetails/${item.id}`} className='nav-link text-dark'>{item.name}</Link>
                                                    <span className="price">{item.price} تومان</span>
                                                </div>
                                            </div>
                                      
                                    </div>
                                </SwiperSlide>
                            );
                        })}
                    </Swiper>
                </div>
            </div >
        </div >
    )
}

export default PopularProducts