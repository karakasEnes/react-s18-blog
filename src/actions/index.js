import jsonPlaceHolder from "../api/jsonPlaceHolder";

export const fetchPosts = () => {
  const response = jsonPlaceHolder.get("/posts");

  return {
    type: "FETCH_POSTS",
    payload: response,
  };
};
