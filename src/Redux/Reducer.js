const initialState = {
  loading: false,
  news: null,
};

export const reducer = (state = initialState, action) => {
  switch (action.type) {
    case "GET_NEWS":
      return { ...state, loading: true };
    case "NEWS_RECEIVED":
      return {
        ...state,
        loading: false,
        news: action.json,
      };
    case "REQUEST_FAILED":
      return {
        ...state,
        loading: false,
        message: action.error.message,
        news: "oops, there was a problem",
      };

    default:
      return state;
  }
};
