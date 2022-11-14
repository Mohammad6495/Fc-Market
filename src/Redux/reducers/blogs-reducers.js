const initialState = {
  blogs: [],
};

export const blogsListReducers = (state = initialState, action) => {
  switch (action.type) {
    case "BLOG_LIST_REQUEST":
      return { loading: true, blogs: [] };
    case "BLOG_LIST_SUCCESS":
      return { loading: false, blogs: action.payload };
    default:
      return state;
  }
};
