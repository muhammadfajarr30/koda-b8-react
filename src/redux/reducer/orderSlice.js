import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  items: [],
  shipmentDetails: {},
  paymentMethod: "",
};

export const orderSlice = createSlice({
  name: "order",
  initialState,
  reducers: {
    setShipmentDetails: (state, { payload }) => {
      state.shipmentDetails = payload;
    },

    addCartToItems: (state, { payload }) => {
      state.items = payload;
    },

    setPaymentMethod: (state, { payload }) => {
      state.paymentMethod = payload;
    },
  },
});

export const { setShipmentDetails, addCartToItems, setPaymentMethod } =
  orderSlice.actions;

export default orderSlice.reducer;
