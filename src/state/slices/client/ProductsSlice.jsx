import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

export const fetchProducts = createAsyncThunk(
  "products/fetchProducts",
  async (_, thunkAPI) => {
    try {
      const res = await fetch("https://dummyjson.com/products?limit=150");
      const data = await res.json();
      return data.products;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);
// products slice
const ProductsSlice = createSlice({
  initialState: localStorage.products ? JSON.parse(localStorage.products) : [],
  name: "products",

  extraReducers: (builder) => {
    // pending
    builder.addCase(fetchProducts.pending, (state, action) => {});
    // fulfilled
    builder.addCase(fetchProducts.fulfilled, (state, { payload }) => {
      const products = payload.filter(
        (item) => !unWantedProducts.includes(item.category)
      );
      return (state = [...products]);
    });
    // rejected
    builder.addCase(fetchProducts.rejected, (state, action) => {});
  },
});

// avoid these ugly looking images
export const unWantedProducts = [
  "skincare",
  "groceries",
  "tops",
  "womens-shoes",
  "automotive",
  "motorcycle",
  "womens-dresses",
  "home-decoration",
];

export default ProductsSlice.reducer;
