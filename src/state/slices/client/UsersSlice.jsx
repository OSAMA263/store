// login and create for users and also admin in dashboard

import { createSlice } from "@reduxjs/toolkit";

const UserSlice = createSlice({
  initialState: {
    cart: localStorage.cart ? JSON.parse(localStorage.cart) : [],
    wishlist: localStorage.wishlist ? JSON.parse(localStorage.wishlist) : [],
    isLoggedIn: false,
  },

  name: "user",
  reducers: {
    // cart actions-----------
    addToCart: ({ cart }, { payload }) => {
      const { product, qty } = payload;
      // if the product already in the fuckin cart
      const findedProduct = cart.find((pro) => pro.id === product.id);
      findedProduct
        ? (findedProduct.QTY += qty)
        : cart.push({ ...product, QTY: qty });
    },
    removeFromCart: (state, { payload }) => {
      state.cart = state.cart.filter((product) => product.id !== payload.id);
    },
    clearCart: (state) => (state.cart = []),
    // wishlist actions---------
    addToWishlist: ({ wishlist }, { payload }) => {
      wishlist.push(payload);
    },
    removeFromWishlist: (state, { payload }) => {
      state.wishlist = state.wishlist.filter(
        (product) => product.id !== payload.id
      );
    },
    clearWihlist: (state) => (state.wishlist = []),
  },
});

export const {
  addToCart,
  removeFromCart,
  clearCart,
  addToWishlist,
  removeFromWishlist,
  clearWihlist,
} = UserSlice.actions;

export default UserSlice.reducer;
