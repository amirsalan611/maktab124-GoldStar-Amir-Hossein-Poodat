import { combineReducers, configureStore } from "@reduxjs/toolkit";
import darkModeReducer from "./reducers/darkMode";
import { persistReducer, persistStore } from "redux-persist";
import storage from "redux-persist/lib/storage";

const combinedReducers = combineReducers({
  darkMode: darkModeReducer,
});

const persistConfig = {
  key: "root",
  storage,
  whitelist: ["darkMode"],
};

const persistedReducer = persistReducer(persistConfig, combinedReducers);

export const store = configureStore({
  reducer: persistedReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({ serializableCheck: false }),
});

export const persistor = persistStore(store);

export default store;
