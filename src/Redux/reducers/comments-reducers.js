const initialState = {
  comments: [],
};
export const addCommentsReducers = (state = initialState, action) => {
  switch (action.type) {
    case "ADD_COMMENTS_REQUEST":
      return { loading: true, comments: [], message: "درحال ارسال اطلاعات" };
    case "ADD_COMMENTS_SUCCESS":
      return {
        loading: false,
        comments: action.payload,
        message: "ثبت نظر با موفقیت انجام شد",
      };
    case "ADD_COMMENTS_ERROR":
      return {
        loading: false,
        comments: [],
        message: "در هنگام ارسال اطلاعات خطایی رخ داده است",
      };
    default:
      return state;
  }
};

export const commentsListReducers = (state = initialState, action) => {
  switch (action.type) {
    case "COMMENT_LIST_REQUEST":
      return { loading: true, message: "در حال ارسال اطلاعات", comments: [] };
    case "COMMENT_LIST_SUCCESS":
      return {
        loading: false,
        message: "دریافت موفق ...",
        comments: action.payload,
      };
    case "COMMENT_LIST_ERROR":
      return {
        loading: false,
        message: "خطا در دریافت اطلاعات",
        comments: [],
      };
    default:
      return state;
  }
};
