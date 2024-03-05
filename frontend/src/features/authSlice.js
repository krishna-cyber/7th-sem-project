/** @format */

import { createSlice } from "@reduxjs/toolkit";

const token = localStorage.getItem("token")
  ? localStorage.getItem("token")
  : null;

const initialState = {
  loading: false,
  user: null,
  message: null,
  token,
  error: null,
};

const authSlice = createSlice({
  name: "auth",
  initialState: initialState,
  reducers: {
    setUser: (state, action) => {
      console.log(action.payload);
      state.user = action.payload.user;
      state.message = action.payload.message;
      state.token = action.payload.token;
    },
    setLoading: (state, action) => {
      state.loading = action.payload;
    },
    setError: (state, action) => {
      state.error = action.payload;
    },
    setToken: (state, action) => {
      state.token = action.payload;
    },
    logOut: (state) => {
      state.user = null;
      state.token = null;
      state.error = null;
      state.message = null;
    },
  },
});

export default authSlice.reducer;
export const { setUser, setLoading, setError, setToken, logOut } =
  authSlice.actions;
