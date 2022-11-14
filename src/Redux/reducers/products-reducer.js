const initialState = {
  productsType: [],
  products: [],
};

export const ProductTypeListReducer = (state = initialState, action) => {
  switch (action.type) {
    case "PRODUCTS_TYPE_LIST_REQUEST":
      return { loading: true, productsType: [] };
    case "PRODUCTS_TYPE_LIST_SUCCESS":
      return { loading: false, productsType: action.payload };
    default:
      return state;
  }
};

export const ProductTypeListForIdReducer = (state = initialState, action) => {
  switch (action.type) {
    case "PRODUCTS_TYPE_LIST_ID_REQUEST":
      return { loading: true, productsType: [] };
    case "PRODUCTS_TYPE_LIST_ID_SUCCESS":
      return { loading: false, productsType: action.payload };
    default:
      return state;
  }
};

export const ProductTypeListSwiperReducer = (state = initialState, action) => {
  switch (action.type) {
    case "PRODUCTS_TYPE_SWIPER_LIST_REQUEST":
      return { loading: true, productsType: [] };
    case "PRODUCTS_TYPE_SWIPER_LIST_SUCCESS":
      return { loading: false, productsType: action.payload };
    default:
      return state;
  }
};

export const ProductListMainReducer = (state = initialState, action) => {
  switch (action.type) {
    case "PRODUCTS_LIST_MAIN_REQUEST":
      return { loading: true, products: [] };
    case "PRODUCTS_LIST_MAIN_SUCCESS":
      return {
        loading: false,
        products: action.payload,
      };
    default:
      return state;
  }
};

export const ProductDetailsReducer = (state = initialState, action) => {
  switch (action.type) {
    case "PRODUCTS_DETAILS_REQUEST":
      return { loading: true, products: [] };
    case "PRODUCTS_DETAILS_SUCCESS":
      return {
        loading: false,
        products: action.payload,
      };
    default:
      return state;
  }
};
