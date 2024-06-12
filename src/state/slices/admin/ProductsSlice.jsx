import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

export const fetchProducts = createAsyncThunk(
  "products/fetchProducts",
  async (_, thunkAPI) => {
    try {
      const res = await fetch("https://dummyjson.com/products?limit=200");
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
  // reducer actions---
  reducers: {
    ADD: (state, { payload }) => {
      const {
        title,
        price,
        description,
        category,
        stock,
        thumbnail,
        discountPercentage,
      } = payload;

      axios.post(`https://dummyjson.com/products/add`, {
        title,
        price,
        description,
        category,
        stock,
        thumbnail,
        discountPercentage,
      });

      state.push({ id: state.length * 0.01, ...payload });
    },

    EDIT: (state, { payload }) => {
      const { title, price, thumbnail, category } = payload;
      axios.put(`https://dummyjson.com/products/${payload.id}`, {
        title,
        price,
        thumbnail,
        category,
      });
      const updatedProducts = state.map((pro) =>
        pro.id === payload.id ? (pro = { ...payload }) : pro
      );
      return (state = [...updatedProducts]);
    },

    DELETE: (state, { payload }) => {
      payload.map(({ id }) =>
        axios.delete(`https://dummyjson.com/products/${id}`)
      );
      const filteredPayload = state.filter((item) => {
        const removedItem = payload.find(
          (deletedPro) => deletedPro.id === item.id
        );
        return !removedItem;
      });
      return (state = [...filteredPayload]);
    },
  },
  // fetch status actions
  extraReducers: (builder) => {
    // pending
    builder.addCase(fetchProducts.pending, (state, action) => {});
    // fulfilled
    builder.addCase(fetchProducts.fulfilled, (state, { payload }) => {
      const products = payload.filter(
        (item) => !unWantedProducts.includes(item.category)
      );
      const defalutProduct = {id:200,
        title: "Demo Product",
        description:
          "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quam, quibusdam adipisci! Nemo ipsum velit eligendi repudiandae.",
        price: 1000,
        discountPercentage: 40.6,
        stock: 2,
        thumbnail: "default-product.png",
        images: [
          "default-product.png",
          "default-product.png",
          "default-product.png",
        ],category:"mens-shirts",brand:"shirt",rating:5,new:true
      };
      return (state = [...products, defalutProduct]);
    });
    // rejected
    builder.addCase(fetchProducts.rejected, (state, action) => {});
  },
});

export const { DELETE, ADD, EDIT } = ProductsSlice.actions;

export default ProductsSlice.reducer;

// avoid these ugly looking images
export const unWantedProducts = [
  // "Women
  "groceries",
  // "tops",
  // "womens-shoes",
  // "automotive",
  // "motorcycle",
  // "womens-dresses",
  // "home-decoration",
];
