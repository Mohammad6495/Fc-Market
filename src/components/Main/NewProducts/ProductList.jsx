import React from 'react';
import { Link } from 'react-router-dom'

const ProductsList = ({ products }) => {
    return (
        <div className="tab-content" id="myTabContent">
            <div className="tab-pane fade show active" id="home-tab-pane" role="tabpanel" aria-labelledby="home-tab" tabIndex="0">
                <div className='row mt-3'>
                    {
                        products.filter(d => d.productsTypeId === 2).splice(0,4).map(item => {
                            return <div className='col-md-3' key={item.id}>
                       
                                    <div className='new-products-item'>
                                        <div href='#' className='new-products-img'>
                                            <span className='wishlist'><i className='fa fa-heart heart' title='مورد علاقه'></i></span>
                                            {item.offPrice == 0 ? null : <span className='off-price'>{item.offPrice}%</span>}
                                            <img src={item.image} className='img-fluid' />
                                            <a href='#' className='text-light'>
                                                <div className='cart-manager'>
                                                    <p className='mb-0'><span><i className='fa fa-shopping-cart'></i></span> <span>سبد خرید</span></p>
                                                </div>
                                            </a>
                                        </div>
                                        <div className='new-products-info'>
                                            <div>
                                                <span><i className='fa fa-star text-yellow'></i></span>
                                                <span className='count-star'>{item.star}</span>
                                            </div>
                                            <Link to={`/productdetails/${item.id}`} className='nav-link text-dark'>{item.name}</Link>
                                            <span className='price'>{item.price} تومان</span>
                                        </div>
                                    </div>
                               
                            </div>
                        })
                    }
                </div>
            </div>
            <div className="tab-pane fade" id="profile-tab-pane" role="tabpanel" aria-labelledby="profile-tab" tabIndex="0">
                <div className='row mt-3'>
                    {
                        products.filter(d => d.productsTypeId === 3).splice(0,4).map(item => {
                            return <div className='col-md-3' key={item.id}>
                      
                                    <div className='new-products-item'>
                                        <div href='#' className='new-products-img'>
                                            <span className='wishlist'><i className='fa fa-heart heart' title='مورد علاقه'></i></span>
                                            {item.offPrice == 0 ? null : <span className='off-price'>{item.offPrice}%</span>}
                                            <img src={item.image} className='img-fluid' />
                                            <a href='#' className='text-light'>
                                                <div className='cart-manager'>
                                                    <p className='mb-0'><span><i className='fa fa-shopping-cart'></i></span> <span>سبد خرید</span></p>
                                                </div>
                                            </a>
                                        </div>
                                        <div className='new-products-info'>
                                            <div>
                                                <span><i className='fa fa-star text-yellow'></i></span>
                                                <span className='count-star'>{item.star}</span>
                                            </div>
                                            <Link to={`/productdetails/${item.id}`} className='nav-link text-dark'>{item.name}</Link>
                                            <span className='price'>{item.price} تومان</span>
                                        </div>
                                    </div>
                            
                            </div>
                        })
                    }
                </div>
            </div>
            <div className="tab-pane fade" id="contact-tab-pane" role="tabpanel" aria-labelledby="contact-tab" tabIndex="0">
                <div className='row mt-3'>
                    {
                        products.filter(d => d.productsTypeId === 4).splice(0,4).map(item => {
                            return <div className='col-md-3' key={item.id}>
                           
                                    <div className='new-products-item'>
                                        <div href='#' className='new-products-img'>
                                            <span className='wishlist'><i className='fa fa-heart heart' title='مورد علاقه'></i></span>
                                            {item.offPrice == 0 ? null : <span className='off-price'>{item.offPrice}%</span>}
                                            <img src={item.image} className='img-fluid' />
                                            <a href='#' className='text-light'>
                                                <div className='cart-manager'>
                                                    <p className='mb-0'><span><i className='fa fa-shopping-cart'></i></span> <span>سبد خرید</span></p>
                                                </div>
                                            </a>
                                        </div>
                                        <div className='new-products-info'>
                                            <div>
                                                <span><i className='fa fa-star text-yellow'></i></span>
                                                <span className='count-star'>{item.star}</span>
                                            </div>
                                            <Link to={`/productdetails/${item.id}`} className='nav-link text-dark'>{item.name}</Link>
                                            <span className='price'>{item.price} تومان</span>
                                        </div>
                                    </div>
                                
                            </div>
                        })
                    }
                </div>
            </div>
        </div>
    )
}
export default ProductsList
