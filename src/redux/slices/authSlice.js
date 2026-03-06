import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  isLogin: true, // Currently using Boolean value to build the ui
};

const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    login: (state) => {
      state.isLogin = true;
    },
    logout: (state) => {
      state.isLogin = false;
    },
  },
});

export const { login, logout } = authSlice.actions;
export default authSlice.reducer;
