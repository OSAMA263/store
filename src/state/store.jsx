import { configureStore } from "@reduxjs/toolkit";
import products from "./slices/client/ProductsSlice";
import categories from "./slices/client/CategoriesSlice";

const store = configureStore({
  reducer: { products, categories },
});

export default store;
