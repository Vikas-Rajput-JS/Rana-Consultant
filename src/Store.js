import { createStore } from "redux";
import PersistReducer from "./Redux/Action/Reducers/Main";
import { persistStore } from "redux-persist";
import persistedReducer from "./Redux/Action/Reducers/Main";

const Store = createStore(persistedReducer);
const persistor = persistStore(Store);

export { Store, persistor };
