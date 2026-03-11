import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  isLogin: JSON.parse(localStorage.getItem("isLogin")) || false,
  user: JSON.parse(localStorage.getItem("user")) || null,
};

const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    login: (state, action) => {
      state.isLogin = true;
      state.user = action.payload;

      localStorage.setItem("isLogin", true);
      localStorage.setItem("user", JSON.stringify(action.payload));
    },

    logout: (state) => {
      state.isLogin = false;
      state.user = null;

      localStorage.removeItem("isLogin");
      localStorage.removeItem("user");
    },
  },
});

export const { login, logout } = authSlice.actions;
export default authSlice.reducer;
