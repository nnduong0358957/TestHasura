import { combineReducers } from "redux";
import { createStore, applyMiddleware } from "redux";
import thunk from "redux-thunk";

import todoList from "./todoList.js";

const allReducers = combineReducers({
  todoList,
  // add more reducers here
});
const store = createStore(allReducers, applyMiddleware(thunk));

export default store;
