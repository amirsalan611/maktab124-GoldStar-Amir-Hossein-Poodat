import { combineReducers, configureStore } from "@reduxjs/toolkit";
import darkModeReducer from "./reducers/darkMode";
import colorSelectedReducer from "./reducers/colorSelected";
import userDataReducer from "./reducers/userData";
import { persistReducer, persistStore } from "redux-persist";
import { CookieStorage } from "redux-persist-cookie-storage";
import Cookies from "js-cookie";

const cookieStorage = new CookieStorage(Cookies, {
  expiration: {
    default: 3 * 24 * 60 * 60,
  },
  secure: false,
});

const persistConfig = {
  key: "root",
  storage: cookieStorage,
  whitelist: ["darkMode", "userData"],
};

const combinedReducers = combineReducers({
  darkMode: darkModeReducer,
  colorSelected: colorSelectedReducer,
  userData: userDataReducer,
});

const persistedReducer = persistReducer(persistConfig, combinedReducers);

export const store = configureStore({
  reducer: persistedReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({ serializableCheck: false }),
});

export const persistor = persistStore(store);
export default store;
