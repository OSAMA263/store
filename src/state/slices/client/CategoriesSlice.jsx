import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

export const fetchCategories = createAsyncThunk(
  "fetchCategories/categories",
  async (_, thunkAPI) => {
    try {
      const res = await fetch("https://dummyjson.com/products/categories");
      const data = await res.json();
      return data.map(({slug})=>slug)
    } catch (err) {
      thunkAPI.rejectWithValue(err.message);
    }
  }
);

const CategoriesSlice = createSlice({
  initialState: localStorage.categories
    ? JSON.parse(localStorage.categories)
    : [],

  name: "categories",
  extraReducers: (builder) => {
    // pending
    builder.addCase(fetchCategories.pending);
    // fulfiled
    builder.addCase(fetchCategories.fulfilled, (state, action) => {
      const data = action.payload
      return state=[...data]
    });
    // rejected
    builder.addCase(fetchCategories.rejected, (state, action) => {});
  },
});

export default CategoriesSlice.reducer;
