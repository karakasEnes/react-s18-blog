const postsReducer = (state = [], action) => {
  switch (action.type) {
    case "FETCH_POSTS":
      return action.payload;
    default:
      return action;
  }
};

export default postsReducer;
