import { createStore, applyMiddleware } from 'redux';
import rootReducer from "./Reducers/rootReducer";
import { composeWithDevTools } from "redux-devtools-extension";
const thunkMiddleware = require("redux-thunk").default;

export const store = createStore(
  rootReducer,  
  composeWithDevTools(applyMiddleware(thunkMiddleware))
);
