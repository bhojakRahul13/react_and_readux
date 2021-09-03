import { GET_POSTS} from "../constants";

const initialState = {
  posts : [],
};

const PostsReducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case GET_POSTS:
      return {
        ...state,
        posts : payload,
      };

    default:
      return state;
  }
};
export default PostsReducer;