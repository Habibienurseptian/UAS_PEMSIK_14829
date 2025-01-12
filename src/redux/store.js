import { configureStore } from "@reduxjs/toolkit";
import authReducer from "./authSlice";
import reportSlice from "./reportSlice";

const store = configureStore({
  reducer: {
    auth: authReducer,
    report: reportSlice,
  },
});

export default store;
