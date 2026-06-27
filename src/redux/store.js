import { configureStore, combineReducers } from "@reduxjs/toolkit";
import { persistReducer, persistStore } from "redux-persist";
import storage from "redux-persist/es/storage";

import authReducer from "./reducer/authSlice";
import userReducer from "./reducer/userSlice";
import orderReducer from "./reducer/orderSlice";

const rootReducer = combineReducers({
  auth: authReducer,
  users: userReducer,
  order: orderReducer,
});

const persistConfig = {
  key: "root",
  storage,
};

const persistedReducer = persistReducer(persistConfig, rootReducer);

export const store = configureStore({
  reducer: persistedReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: false,
    }),
});

export const persistor = persistStore(store);
