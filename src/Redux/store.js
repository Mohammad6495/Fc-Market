import {
  legacy_createStore as createStore,
  combineReducers,
  applyMiddleware,
} from "redux";
import thunk from "redux-thunk";

import { brandListReducer } from "./reducers/brand-reducer";
import { blogsListReducers } from "./reducers/blogs-reducers";
import { productsImagesReducer } from "./reducers/products-Images-reducers";
import { futureListReducer } from "./reducers/future-reducers";
import { employeeListReducers } from "./reducers/employees-reducers";
import { aboutUsReducers } from "./reducers/aboutUs-reducers";

import {
  companyInformationsReducers,
  contactUsFormReducers,
} from "./reducers/companyInfo-reducers";
import {
  addCommentsReducers,
  commentsListReducers,
} from "./reducers/comments-reducers";
import {
  ProductTypeListReducer,
  ProductListMainReducer,
  ProductDetailsReducer,
  ProductTypeListForIdReducer,
} from "./reducers/products-reducer";

const reducer = combineReducers({
  productsTypeList: ProductTypeListReducer,
  productsList: ProductListMainReducer,
  brandList: brandListReducer,
  blogsList: blogsListReducers,
  productsDetails: ProductDetailsReducer,
  productsImages: productsImagesReducer,
  productsListForId: ProductTypeListForIdReducer,
  futureList: futureListReducer,
  addComments: addCommentsReducers,
  commentsList: commentsListReducers,
  companyInfo: companyInformationsReducers,
  contactUsForm: contactUsFormReducers,
  employeesList: employeeListReducers,
  aboutUs: aboutUsReducers,
});

const middleware = [thunk];

const store = createStore(reducer, applyMiddleware(...middleware));

export default store;
