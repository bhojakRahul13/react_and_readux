import { GET_POSTS, GET_SINGLE_POST ,GET_USER,GET_COMMENTS} from "../constants";
import axios from "axios";

export const getPosts = () => async (dispatch) => {
  const result = await axios.get("https://jsonplaceholder.typicode.com/posts");

  dispatch({
    type: GET_POSTS,
    payload: result.data,
  });
};

export const getSinglePost = (id) => async (dispatch) => {
  const result = await axios.get(
    `https://jsonplaceholder.typicode.com/posts/${id}`
  );

  dispatch({
    type: GET_SINGLE_POST,
    payload: result.data,
  });
};

export const getUser = (post) => async (dispatch) => {
  const result = await axios.get(
    `https://jsonplaceholder.typicode.com/users/${post.userId}`
  );

  dispatch({
    type: GET_USER,
    payload: result.data,
  });
};


export const getComments = (post) => async (dispatch) => {
    const result = await axios.get(
        `https://jsonplaceholder.typicode.com/posts/${post.id}/comments`
      );

  dispatch({
    type: GET_COMMENTS,
    payload: result.data,
  });
};