import { combineReducers, createStore } from "redux";
import { todoReducers } from "./reducers/operations";

const rootReducer = combineReducers({
  todoReducers,
});

export const store = createStore(rootReducer);
