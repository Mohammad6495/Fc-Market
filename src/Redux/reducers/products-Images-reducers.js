const initialState = {
  productsImages: [],
};

export const productsImagesReducer = (state = initialState, action) => {
  switch (action.type) {
    case "PRODUCTS_IMAGES_REQUEST":
      return { loading: true, productsImages: [] };
    case "PRODUCTS_IMAGES_SUCCESS":
      return { loading: false, productsImages: action.payload };
    default:
      return state;
  }
};
