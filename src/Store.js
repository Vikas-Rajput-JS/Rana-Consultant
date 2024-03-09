import { createStore } from "redux";
import { RootReducer } from "./Redux/Action/Reducers/Main";
const Store = createStore(RootReducer);

export default Store;
