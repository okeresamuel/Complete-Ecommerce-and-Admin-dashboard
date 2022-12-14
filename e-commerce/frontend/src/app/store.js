import { configureStore } from '@reduxjs/toolkit';
import authslice from "../components/features/Auth/authslice"

export const store = configureStore({
  reducer: {
    auth:authslice
  },
});
