import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux'

import { ProductListMainActions } from '../../../Redux/actions/products-actions';
import ProductsList from './ProductList';

const NewProducts = () => {
  
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(ProductListMainActions());
  }, [dispatch]);

  const productsListMain = useSelector((state) => state.productsList);

  const { loading, products } = productsListMain;

  return (
    <div className='new-products container text-center'>
      <h2>جدیدترین محصولات</h2>
      {loading ? <><h4 className='mt-3'>لطفا صبر کنید</h4> <div   className="lds-hourglass"></div></> :
        (
          <>  
          <ul className="nav nav-tabs d-flex justify-content-center">
            <li className="" role="presentation">
              <a className="nav-link active" id="home-tab" data-bs-toggle="tab" data-bs-target="#home-tab-pane" type="button" role="tab" aria-controls="home-tab-pane" aria-selected="true">لپتاپ</a>
            </li>
            <li className="" role="presentation">
              <a className="nav-link" id="profile-tab" data-bs-toggle="tab" data-bs-target="#profile-tab-pane" type="button" role="tab" aria-controls="profile-tab-pane" aria-selected="false">لوازم خانگی</a>
            </li>
            <li className="" role="presentation">
              <a className="nav-link" id="contact-tab" data-bs-toggle="tab" data-bs-target="#contact-tab-pane" type="button" role="tab" aria-controls="contact-tab-pane" aria-selected="false">پوشاک</a>
            </li>
          </ul>
            <ProductsList products={products} />
            </>
        )}
    </div>
  )
}

export default NewProducts