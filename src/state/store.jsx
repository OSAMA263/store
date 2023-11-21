import { configureStore } from "@reduxjs/toolkit";
import products from "./slices/client/ProductsSlice";
import categories from "./slices/client/CategoriesSlice";
import user from "./slices/client/UsersSlice";

const store = configureStore({
  reducer: { products, categories, user, },
});

export default store;
