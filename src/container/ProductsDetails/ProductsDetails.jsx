import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import { Navigation } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';

import Companion from '../../components/UI/Companion/Companion';
import { productsDetailsActions } from '../../Redux/actions/products-actions'
import { productsImagesDetailsActios } from '../../Redux/actions/productsImages-actions'
import { futureListActions } from '../../Redux/actions/future-actions'
import PopularProducts from '../../components/Main/PopularProduct/PopularProducts'
import ProductsComment from './ProductsComment';

import './ProductsDetails.css';
import ProductsFuture from './ProductsFuture';

const ProductsDetails = () => {

    const { id } = useParams();
    const dispatch = useDispatch();
    const [img, setImg] = useState(null)

    useEffect(() => {
        dispatch(productsDetailsActions(id));
        dispatch(productsImagesDetailsActios(id))
        dispatch(futureListActions(id))
        setImg(null)
    }, [dispatch, id]);

    const productsDetails = useSelector((state) => state.productsDetails);
    const productsImagesDetails = useSelector((state) => state.productsImages);
    const futureList = useSelector((state) => state.futureList);

    const { loading, products } = productsDetails;
    const { productsImages } = productsImagesDetails;
    const { future } = futureList;

    if (loading) {
        document.title = 'در حال پردازش ...'
    } else {
        document.title = `محصول ${products.name}`;
    }
    const setImagesHandler = (e) => {
        setImg(e.target.src);
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
                    <Companion title={products.name} />
                    <div className='product-details my-5'>
                        <div className='container'>
                            <div className='row'>
                                <div className='col-lg-6'>
                                    <div className='p-details-img'>
                                        <div className='big-img bg-gray'>
                                            <img src={!img ? `/./${products.image}` : img} className='w-100 actived' />
                                        </div>
                                        <div className='p-details-img-list mt-4'>
                                            <ul>
                                                <Swiper
                                                    modules={[Navigation]}
                                                    slidesPerView={3}
                                                    spaceBetween={20}
                                                    navigation
                                                >
                                                    {productsImages.map((item) => {
                                                        return (
                                                            <SwiperSlide key={item.id}>
                                                                <li>
                                                                    <img onClick={(e) => setImagesHandler(e)} src={`/./${item.images}`} className='w-100 bg-gray img-item' />
                                                                </li>
                                                            </SwiperSlide>
                                                        )
                                                    })}
                                                </Swiper>
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                                <div className='col-lg-6'>
                                    <div className='p-details-info mt-5 mt-lg-0'>
                                        <div className='p-details-title'>
                                            <h5>{products.name}</h5>
                                        </div>
                                        <div className='price d-flex flex-column my-4'>
                                            <span style={{ fontSize: '17px' }}>{products.price}تومان</span>
                                            <span className='price-off mt-1'>تخفیف تومان 43000 (36%)</span>
                                        </div>
                                        <div>
                                            <span className='text-yellow'><i className='fa fa-star'></i></span>
                                            <span className='mx-1'>{products.star}</span>
                                        </div>
                                        <div className='p-details-select mt-3'>
                                            <select>
                                                <option value="">سایز</option>
                                                <option value="">کوجک</option>
                                                <option value="">متوسط</option>
                                                <option value="">بزرگ</option>
                                            </select>
                                            <select className='mx-3'>
                                                <option value="">تعداد</option>
                                                <option value="">1</option>
                                                <option value="">2</option>
                                                <option value="">3</option>
                                                <option value="">4</option>
                                            </select>
                                        </div>
                                        <div className='future w-75 mt-5'>
                                            <span className='future-title'>نکات / ویژگی </span>
                                            <div className='row list-future mt-3'>
                                                {future.slice(0, 4).map((item) => {
                                                    return (
                                                        <div className='col-6'><p><span> - </span>{`${item.title} : ${item.futureValue}`}</p></div>
                                                    )
                                                })}
                                            </div>
                                        </div>
                                        <div className='p-add-to-cart mt-4'>
                                            <button>سبد خرید</button>
                                            <button className='mx-3'>خرید محصول</button>
                                        </div>
                                        <div className='p-details-des mt-5'>
                                            <p>
                                                {products.descriptions}
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className='row  mt-5'>
                                <div className='p-details-link'>
                                    <ul className="nav nav-tabs d-flex justify-content-start">
                                        <li role="presentation">
                                            <a className="nav-link active" id="tab-description" data-bs-toggle="tab" data-bs-target="#tab-description-pane" type="button" role="tab" aria-controls="tab-description-pane" aria-selected="true">توضیحات</a>
                                        </li>
                                        <li role="presentation">
                                            <a className="nav-link" id="tab-future" data-bs-toggle="tab" data-bs-target="#tab-future-pane" type="button" role="tab" aria-controls="tab-future-pane" aria-selected="false">اطلاعات تکمیلی</a>
                                        </li>
                                        <li role="presentation">
                                            <a className="nav-link" id="comment-tab" data-bs-toggle="tab" data-bs-target="#comment-tab-pane" type="button" role="tab" aria-controls="comment-tab-pane" aria-selected="false">نظرات</a>
                                        </li>
                                    </ul>
                                    <div className='nav-line'></div>
                                </div>

                                <div className="tab-content" id="myTabContent">
                                    <div className="tab-pane fade show active" id="tab-description-pane" role="tabpanel" aria-labelledby="tab-description" tabIndex="0">
                                        <div className='row details-order-des'>
                                            <div className='col-lg-6 mt-4'>
                                                <div>
                                                    <h4 className='details-title'>توضیحات محصول</h4>
                                                    <p className='details-des'>{products.descriptions}</p>
                                                </div>
                                            </div>
                                            <div className='col-lg-6 mt-4'>

                                                <div className='mt-3'>
                                                    <h4 className='details-title'>درباره سوالات متداول:</h4>
                                                    <div id="accordion">
                                                        <div className="card-details">
                                                            <div className="card-header">
                                                                <a className="d-flex align-items-center" data-bs-toggle="collapse" href="#collapseOne">
                                                                    <i className='fa fa-chevron-down'></i>
                                                                    <span className='mx-1'>
                                                                        طراحی وب سایت و اپلیکیشن موبایل
                                                                    </span>
                                                                </a>
                                                            </div>
                                                            <div id="collapseOne" className="collapse" data-bs-parent="#accordion">
                                                                <div className="card-body mt-2">
                                                                    <p className='details-des'>
                                                                        لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است. چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است و برای شرایط فعلی تکنولوژی مورد نیاز و کاربردهای متنوع با هدف بهبود ابزارهای کاربردی می باشد. کتابهای زیادی در شصت و سه درصد گذشته.
                                                                    </p>
                                                                </div>
                                                            </div>
                                                        </div>

                                                        <div className="card-details">
                                                            <div className="card-header">
                                                                <a className="collapsed d-flex align-items-center" data-bs-toggle="collapse" href="#collapseTwo">
                                                                    <i className='fa fa-chevron-down'></i>
                                                                    <span className='mx-1'>
                                                                        موشن گرافیک و انیمیشن
                                                                    </span>                                                   </a>
                                                            </div>
                                                            <div id="collapseTwo" className="collapse" data-bs-parent="#accordion">
                                                                <div className="card-body mt-2">
                                                                    <p className='details-des'>
                                                                        لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است. چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است و برای شرایط فعلی تکنولوژی مورد نیاز و کاربردهای متنوع با هدف بهبود ابزارهای کاربردی می باشد. کتابهای زیادی در شصت و سه درصد گذشته.
                                                                    </p>
                                                                </div>
                                                            </div>
                                                        </div>

                                                        <div className="card-details">
                                                            <div className="card-header">
                                                                <a className="collapsed d-flex align-items-center" data-bs-toggle="collapse" href="#collapseThree">
                                                                    <i className='fa fa-chevron-down'></i>
                                                                    <span className='mx-1'>
                                                                        تجربه کاربر و استراتژی برند       </span>                                                         </a>
                                                            </div>
                                                            <div id="collapseThree" className="collapse" data-bs-parent="#accordion">
                                                                <div className="card-body mt-2">
                                                                    <p className='details-des'>
                                                                        لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است. چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است و برای شرایط فعلی تکنولوژی مورد نیاز و کاربردهای متنوع با هدف بهبود ابزارهای کاربردی می باشد. کتابهای زیادی در شصت و سه درصد گذشته.
                                                                    </p>
                                                                </div>
                                                            </div>
                                                        </div>

                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="tab-pane fade" id="tab-future-pane" role="tabpanel" aria-labelledby="tab-future" tabIndex="0">
                                        <ProductsFuture future={future} />
                                    </div>
                                    <div className="tab-pane fade" id="comment-tab-pane" role="tabpanel" aria-labelledby="comment-tab" tabIndex="0">
                                        <div className='row'>
                                            <div className='col-lg-8'>
                                                <ProductsComment pId={id} />
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className='mt-5'>
                            <PopularProducts />
                        </div>
                    </div>
                </>
            )}
        </>
    )
}

export default ProductsDetails;