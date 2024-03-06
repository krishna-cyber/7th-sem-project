/** @format */

import { createSlice } from "@reduxjs/toolkit";

const token = localStorage.getItem("token")
  ? localStorage.getItem("token")
  : null;

const initialState = {
  loading: false,
  users: null,
  error: null,
  userDetail: null,
};

const searchSlice = createSlice({
  name: "search",
  initialState: initialState,
  reducers: {
    setUsers: (state, action) => {
      console.log(action.payload);
      state.users = action.payload.users;
      state.message = action.payload.message;
    },
    setLoading: (state, action) => {
      state.loading = action.payload;
    },
    setError: (state, action) => {
      state.error = action.payload;
    },
    setUserDetail: (state, action) => {
      state.userDetail = action.payload;
    },
  },
});

export default searchSlice.reducer;
export const { setUsers, setLoading, setError, setUserDetail } =
  searchSlice.actions;
