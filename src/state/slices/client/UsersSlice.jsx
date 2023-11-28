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
    // ADD PRODUCT TO CART
    addToCart: ({ cart }, { payload }) => {
      const { product, qty = 1 } = payload;
      // check if the product already in the fuckin cart
      const findedProduct = cart.find((pro) => pro.id === product.id);
      findedProduct
        ? (findedProduct.QTY += qty)
        : cart.push({ ...product, QTY: qty });
    },
    // REMOVE PRODUCT FROM THE CART
    removeFromCart: (state, { payload }) => {
      state.cart = state.cart.filter((product) => product.id !== payload);
    },
    // DECREACE QUANTITY PRODUCT IN THE CART
    decreaseProductQTY: (state, { payload }) => {
      const findProduct = state.cart.find((pro) => pro.id === payload);
      findProduct.QTY -= 1;
    },
    clearCart: (state) => {
      state.cart = [];
    },
    // wishlist actions---------
    addToWishlist: ({ wishlist }, { payload }) => {
      wishlist.push(payload);
    },
    removeFromWishlist: (state, { payload }) => {
      state.wishlist = state.wishlist.filter(
        (product) => product.id !== payload
      );
    },
    clearWishlist: (state) => {
      state.wishlist = [];
    },
  },
});

export const {
  addToCart,
  removeFromCart,
  clearCart,
  addToWishlist,
  removeFromWishlist,
  clearWishlist,
  decreaseProductQTY,
} = UserSlice.actions;

export default UserSlice.reducer;
