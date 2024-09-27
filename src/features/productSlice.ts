import { PayloadAction, createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

const api = "https://fakestoreapi.com/products";

export interface Rating {
  rate: number;
  count: number;
}

export interface Product {
  image: string;
  title: string;
  price: number;
  rating: Rating;
  description: string;
}

const initialState = {
  products: [] as Product[],
  cart: [] as Product[],
}

export const fetchProducts = createAsyncThunk('products/fetchProducts', async () => {
  const res = await axios.get<Product[]>(api);
  return res.data;
})

export const productSlice = createSlice({
  name: "products",
  initialState,
  reducers: {
    addToCart: (state, action) => {
      state.cart = [...state.cart, action.payload]
    }
  },
  extraReducers: (builder) => {
    builder.addCase(fetchProducts.fulfilled, (state, action: PayloadAction<Product[]>) => {
      state.products = action.payload;
    });
  },
});

export default productSlice.reducer;
export const { addToCart } = productSlice.actions;