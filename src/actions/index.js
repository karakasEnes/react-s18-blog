import _ from "lodash";
import jsonPlaceHolder from "../api/jsonPlaceHolder";

export const fetchPostsAndUsers = () => async (dispatch) => {
  await dispatch(fetchPosts());
};

export const fetchPosts = () => async (dispatch) => {
  const response = await jsonPlaceHolder.get("/posts");
  dispatch({ type: "FETCH_POSTS", payload: response.data });
};

export const fetchUser = (userId) => async (dispatch) => {
  const response = await jsonPlaceHolder.get(`/users/${userId}`);
  dispatch({ type: "FETCH_USER", payload: response.data });
};

// export const fetchUser = (userId) => (dispatch) => _fetchUser(userId, dispatch);
// const _fetchUser = _.memoize(async (userId, dispatch) => {
//   const response = await jsonPlaceHolder.get(`/users/${userId}`);
//   dispatch({ type: "FETCH_USER", payload: response.data });
// });
