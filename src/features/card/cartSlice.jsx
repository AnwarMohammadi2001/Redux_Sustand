import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  cartItems: [],
  totalQuantity: 0,
  totalPrice: 0,
};

const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addItemToCart: (state, action) => {
      const existingItem = state.cartItems.find(
        (item) => item.id === action.payload.id
      );
      if (existingItem) {
        existingItem.quantity += 1;
        existingItem.totalPrice += action.payload.price;
      } else {
        state.cartItems.push({
          ...action.payload,
          quantity: 1,
          totalPrice: action.payload.price,
        });
      }
      state.totalQuantity += 1;
      state.totalPrice += action.payload.price;
    },
    removeItemFromCart: (state, action) => {
      const item = state.cartItems.find((item) => item.id === action.payload);
      if (item.quantity === 1) {
        state.cartItems = state.cartItems.filter((item) => item.id !== action.payload);
      } else {
        item.quantity -= 1;
        item.totalPrice -= item.price;
      }
      state.totalQuantity -= 1;
      state.totalPrice -= item.price;
    },
  },
});

export const { addItemToCart, removeItemFromCart } = cartSlice.actions;
export default cartSlice.reducer;
