import { createSlice } from "@reduxjs/toolkit";

const authSlice = createSlice({
  name: "auth",
  initialState: {
    token: localStorage.getItem("authToken") || null,
    successMessage: null,
    errorMessage: null,
  },
  reducers: {
    setToken: (state, action) => {
      state.token = action.payload;
      localStorage.setItem("authToken", action.payload);
    },
    clearToken: (state) => {
      state.token = null;
      localStorage.removeItem("authToken");
    },
    setSuccessMessage: (state, action) => {
      state.successMessage = action.payload;
    },
    setErrorMessage: (state, action) => {
      state.errorMessage = action.payload;
    },
    clearMessages: (state) => {
      state.successMessage = null;
      state.errorMessage = null;
    },
  },
});

export const {
  setToken,
  clearToken,
  setSuccessMessage,
  setErrorMessage,
  clearMessages,
} = authSlice.actions;

export default authSlice.reducer;
