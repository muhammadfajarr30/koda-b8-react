import { createSlice } from "@reduxjs/toolkit";

const initialState = [];

export const userSlice = createSlice({
  name: "users",
  initialState,
  reducers: {
    addUser: (state, action) => {
      state.push(action.payload);
    },

    addUserCart: (state, { payload }) => {
      const { userIndex, product } = payload;

      if (!state[userIndex]) return;
      state[userIndex].cart.push(product);
    },

    clearUserCart: (state, { payload }) => {
      const { userIndex } = payload;

      if (!state[userIndex]) return;
      state[userIndex].cart = [];
    }
  },
});

export const { addUser, addUserCart, clearUserCart } = userSlice.actions;

export default userSlice.reducer;
