// login and create for users and also admin in dashboard
import { createSlice } from "@reduxjs/toolkit";

const UserSlice = createSlice({
  initialState: {
    users: localStorage.users
      ? JSON.parse(localStorage.users)
      : [
          {
            cart: [],
            name: "user",
            email: "user@gmail.com",
            password: 123456,
            wishlist: [],
          },
        ],
    auth: localStorage.auth
      ? JSON.parse(localStorage.auth)
      : {
          isLoggedIn: true,
          cart: [],
          name: "user",
          email: "user@gmail.com",
          password: 123456,
          wishlist: [],
        },
  },

  name: "user",
  reducers: {
    // CART ACTIONS------
    addToCart: ({ auth }, { payload }) => {
      const { product, qty = 1 } = payload;
      // check if the product already in the fuckin cart
      const findedProduct = auth.cart.find((pro) => pro.id === product.id);
      findedProduct
        ? (findedProduct.QTY += qty)
        : auth.cart.push({ ...product, QTY: qty });
    },
    removeFromCart: ({ auth }, { payload }) => {
      auth.cart = auth.cart.filter((product) => product.id !== payload);
    },
    clearCart: ({ auth }) => {
      auth.cart = [];
    },
    // WISHLIST ACTIONS---------
    addToWishlist: ({ auth }, { payload }) => {
      auth.wishlist.push(payload);
    },
    removeFromWishlist: ({ auth }, { payload }) => {
      auth.wishlist = auth.wishlist.filter((product) => product.id !== payload);
    },
    clearWishlist: ({ auth }) => {
      auth.wishlist = [];
    },
    // DECREACE QUANTITY PRODUCT IN THE CART
    decreaseProductQTY: ({ auth }, { payload }) => {
      const findProduct = auth.cart.find((pro) => pro.id === payload);
      findProduct.QTY -= 1;
    },
    // CREATE A USER ACCOUNT
    CreateUser: ({ users }, { payload }) => {
      users.push({ ...payload, cart: [], wishlist: [] });
      localStorage.setItem("users", JSON.stringify(users));
    },
    // USER LOGIN ACTION
    LogIn: (state, { payload }) => {
      const findedUser = state.users.find((acc) => acc.name === payload.name);
      state.auth = { isLoggedIn: true, ...findedUser };
      localStorage.setItem("auth", JSON.stringify(state.auth));
    },
    // ?UPDATE USERS ARRAY
    UpdateUsers: (state, { payload }) => {
      const user = state.users.find((acc) => acc.name === payload.name);
      user.cart = payload.cart;
      user.wishlist = payload.wishlist;
    },
    LogOut: (state) => {
      state.auth = { isLoggedIn: false, cart: [], wishlist: [] };
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
  CreateUser,
  LogIn,
  LogOut,
  UpdateUsers,
} = UserSlice.actions;

export default UserSlice.reducer;
