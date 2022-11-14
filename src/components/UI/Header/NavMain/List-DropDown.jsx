import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';

import { ProductTypeListActions } from '../../../../Redux/actions/products-actions'

const ListDropDown = (props) => {

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(ProductTypeListActions())
  }, [dispatch])

  const ProductsTypeList = useSelector((state) => state.productsTypeList);

  const { productsType } = ProductsTypeList;
  
  return (
    <div className={props.show ? 'show-dropdown-click' : 'dropdown-list-nav'}>
      {productsType.map((item) => {
        return <Link key={item.id} to={`/products/${item.id}`}>{item.name}</Link>
      })}
    </div>)
}
export default ListDropDown