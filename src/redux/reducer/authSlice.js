import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  id: "",
  fullName: "",
  email: "",
  password: "",
};

export const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    login: (_, { payload }) => payload,

    logout: () => initialState,
  },
});

export const { login, logout } = authSlice.actions;

export default authSlice.reducer;
