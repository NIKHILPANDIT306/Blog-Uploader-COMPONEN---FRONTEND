import { createSlice } from '@reduxjs/toolkit';

const blogSlice = createSlice({
  name: 'blog',
  initialState: [],
  reducers: {
    addBlog: (state, action) => {
      state.push({ ...action.payload, id: Date.now() });
    },
    deleteBlog: (state, action) => {
      return state.filter((blog) => blog.id !== action.payload);
    }
  }
});

export const { addBlog, deleteBlog } = blogSlice.actions;
export default blogSlice.reducer;
