import { combineReducers } from "redux";
import { user } from "./Reducer";

export const RootReducer = combineReducers({
  user,
});
