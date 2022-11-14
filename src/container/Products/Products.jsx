import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link, useParams } from 'react-router-dom';

import Companion from '../../components/UI/Companion/Companion';
import { productsList, ProductTypeListForIdActions } from '../../Redux/actions/products-actions'

import './Products.css';


const Products = () => {


    const { id } = useParams();

    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(productsList(id))
        dispatch(ProductTypeListForIdActions(id))

    }, [dispatch, id]);


    const productList = useSelector((state) => state.productsList);
    const { loading, products } = productList;

    const productsListForId = useSelector((state) => state.productsListForId);

    const { productsType } = productsListForId;

    if (id && !loading) {
        document.title = `لیست محصولات دسته ی : ${productsType.name}`
    } else if (loading) {
        document.title = 'در حال پردازش ...'
    }
    else {
        document.title = 'لیست همه ی محصولات'
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
                    <Companion title={id ? productsType.name : 'لیست محصولات'} />
                    <div className='products'>
                        <div className='container'>
                            <div className='row'>
                                <div className='product-option d-flex flex-lg-row flex-column justify-content-between align-items-center'>
                                    <div>
                                        <p className='mb-0'>
                                            <strong className='mx-1'>همه دسته</strong>( نمایش 1 تا 28 محصول از 23945 محصول )</p>
                                    </div>
                                    <div>
                                        <form className='form-group'>
                                            <label className='text-danger'>نمایش محصول : </label>
                                            <select className='mx-2'>
                                                <option value="">14</option>
                                                <option value="">20</option>
                                                <option value="">12</option>
                                                <option value="">12</option>
                                            </select>
                                            <select className='mx-2'>
                                                <option value="">مرتب سازی</option>
                                                <option value="">بر اساس محبوبیت</option>
                                                <option value="">بر اساس امتیاز</option>
                                                <option value="">جدید ترین ها</option>
                                                <option value="">قدیمی ها</option>
                                            </select>
                                            <button className='mx-2'>نمایش</button>
                                        </form>
                                    </div>
                                </div>
                            </div>
                            <div className='row mt-5'>
                                {loading ? <div className='text-center'><h4 className='mt-3'>لطفا صبر کنید</h4> <div className="lds-hourglass"></div></div> : products.map((item) => {
                                    return (
                                        <div className='col-xl-3 col-lg-4 col-md-6' key={item.id}>
                                            <div className='product-item'>
                                                <div className='product-body'>
                                                    <span className='product-star'>
                                                        <i className='fa fa-star text-yellow mx-1'></i>
                                                        <span>{item.star}</span>
                                                    </span>
                                                    {item.offPrice != 0 ? <span className='product-off'>{item.offPrice}%</span> : null}
                                                    <img src={`/${item.image}`} className='img-fluid' />
                                                    <div className='product-add-to-cart'>
                                                        <span><i className='fa fa-shopping-cart'></i></span>
                                                        <span><i className='fa fa-heart heart'></i></span>
                                                    </div>
                                                </div>
                                                <div className='product-footer mt-3'>
                                                    <Link to={`/productdetails/${item.id}`} className='nav-link mb-2'>{item.name}</Link>
                                                    <span>{item.price} تومان</span>
                                                </div>
                                            </div>
                                        </div>
                                    )
                                })}
                            </div>
                        </div>
                    </div>
                </>
            )}
        </>
    )
}

export default Products