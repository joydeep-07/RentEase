import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  product: null, 
  duration: 1, 
  totalRent: 0,
  totalAmount: 0,
};

const checkoutSlice = createSlice({
  name: "checkout",
  initialState,
  reducers: {
    setCheckoutProduct: (state, action) => {
      const { product, duration, totalRent, totalAmount } = action.payload;
      state.product = product;
      state.duration = duration;
      state.totalRent = totalRent;
      state.totalAmount = totalAmount;
    },
    clearCheckout: (state) => {
      state.product = null;
      state.duration = 1;
      state.totalRent = 0;
      state.totalAmount = 0;
    },
  },
});

export const { setCheckoutProduct, clearCheckout } = checkoutSlice.actions;
export default checkoutSlice.reducer;
