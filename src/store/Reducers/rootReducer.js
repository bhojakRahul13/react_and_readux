import { combineReducers } from "redux";
import PostsReducer from "../Reducers/postReducer"
import SinglePostsReducer from "../Reducers/singlePostReducer"
import CommentReducer from "./commentReducer";
import UserReducer from "./userReducer";

const rootReducer = combineReducers({
  posts:PostsReducer,
  postById:SinglePostsReducer,
  comments:CommentReducer,
  user:UserReducer
});

export default rootReducer;