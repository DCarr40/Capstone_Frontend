import { createSlice } from "@reduxjs/toolkit";
import { useSelector } from "react-redux";

export const userSlice = createSlice({
  name: "user",
  initialState: {
    user: null,
  },
  reducer: {
    login: (state, action) => {
      state.user = action.payload;
    },
    logout: (state) => {
      state.user = null;
    },
  },
});

export const { login, logout } = userSlice.actions;


export default userSlice.reducer;
