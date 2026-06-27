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
  },
});

export const { addUser, addUserCart } = userSlice.actions;

export default userSlice.reducer;
