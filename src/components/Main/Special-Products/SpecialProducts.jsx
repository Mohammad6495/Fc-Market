import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { Swiper, SwiperSlide } from "swiper/react";

import { ProductListSpecialActions } from "../../../Redux/actions/products-actions";

const SpecialProducts = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(ProductListSpecialActions());
  }, [dispatch]);

  const productsListSpecial = useSelector((state) => state.productsList);

  const { loading, products } = productsListSpecial;
  return (
    <div className="special-products text-center">
      <div className="special-text-title">
        <h1>محصولات ویژه هفته</h1>
        <h5>برترین محصولات بیشترین فروش</h5>
      </div>
      <div className="container my-4">
        <div className="row">
          <div className="col-lg-6">
            <div className="weekend-top-products">
              <img src="./images/special-products.png" className="img-fluid" />
              <div className="weekend-top-item">
                <h6>محبوب ترین محصولات</h6>
                <h1>این هفته</h1>
                <a href="#">مشاهده همه</a>
              </div>
            </div>
          </div>
          <div className="col-lg-6">
            <div className="special-products-list">
              <Swiper slidesPerView={2} spaceBetween={20}>
                {loading ? <><h4 className='mt-3'>لطفا صبر کنید</h4> <div className="lds-hourglass"></div></> : products.map((item) => {
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
                            {item.offPrice == 0 ? null : (
                              <span className="off-price">50%</span>
                            )}
                            <img src={item.image} className="img-fluid" />
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
          </div>
        </div>
      </div>
    </div>
  );
};

export default SpecialProducts;
