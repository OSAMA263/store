import { configureStore } from "@reduxjs/toolkit";
import categories from "./slices/client/CategoriesSlice";
import products from "./slices/admin/ProductsSlice";
import user from "./slices/client/UsersSlice";

const store = configureStore({
  reducer: { products, categories, user },
});

export default store;
