import { configureStore } from '@reduxjs/toolkit';
import authReducer from "../features/Auth/authslice"
import productReducer from "../features/Allproducts/productslice"
import searchReducer from "../features/searchInput/searchInputSlice"
import cartReducer from "../features/cart/cartslice"

export const store = configureStore({
  reducer: {
    auth:authReducer,
    product:productReducer, 
    search:searchReducer,
    cart:cartReducer
  },
});
