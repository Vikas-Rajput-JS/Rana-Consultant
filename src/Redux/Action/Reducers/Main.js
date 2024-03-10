import { combineReducers } from "redux";
import { persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";
import { user } from "../Reducers/Reducer";
const rootReducer = combineReducers({
  user,
});

const persistedReducer = persistReducer({ key: "root", storage }, rootReducer);

export default persistedReducer;
