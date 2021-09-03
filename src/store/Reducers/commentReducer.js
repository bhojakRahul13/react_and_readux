import { GET_COMMENTS} from "../constants";


const initialState = {
  comment : [],
};

const CommentReducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case GET_COMMENTS:
      return {
        ...state,
        comment : payload,
      };

    default:
      return state;
  }
};
export default CommentReducer;