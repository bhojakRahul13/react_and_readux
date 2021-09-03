import { GET_SINGLE_POST} from "../constants";

const initialState = {
  postByid :[]
};

const SinglePostsReducer = (state = initialState, { type, payload }) => {
  switch (type) {
      case GET_SINGLE_POST:
        return{
          ...state,
          postByid:payload
        }
    default:
      return state;
  }
};
export default SinglePostsReducer;