import { rootReducer} from "./reducer";

import { combineReducers, createStore } from "redux";
import { persistStore, persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage"; 


const persistConfig = {
  key: "root",
  storage,
};
const mainReducer = combineReducers({
  user: rootReducer
});

const persistedReducer = persistReducer(persistConfig, mainReducer);

export let store = createStore(persistedReducer);
export const persistedStore = persistStore(store);

