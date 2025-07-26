import { configureStore } from '@reduxjs/toolkit';
import blogReducer from './blogSlice.jsx';

export const store = configureStore({
  reducer: {
    blog: blogReducer
  }
});
