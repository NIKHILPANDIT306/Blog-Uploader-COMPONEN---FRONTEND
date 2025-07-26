import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { addBlog, deleteBlog } from '../redux/blogSlice.jsx';

const BlogRedux = () => {
  const blogs = useSelector((state) => state.blog);
  const dispatch = useDispatch();
  const [form, setForm] = useState({ title: '', desc: '' });

  const handleAdd = () => {
    if (!form.title || !form.desc) return;
    dispatch(addBlog(form));
    setForm({ title: '', desc: '' });
  };

  return (
    <div>
      <h4 className="mb-4">Blog App using Redux Toolkit</h4>

      <div className="mb-3">
        <input
          className="form-control mb-2"
          placeholder="Title"
          value={form.title}
          onChange={(e) => setForm({ ...form, title: e.target.value })}
        />
        <textarea
          className="form-control mb-2"
          placeholder="Description"
          value={form.desc}
          onChange={(e) => setForm({ ...form, desc: e.target.value })}
        />
        <button className="btn btn-danger" onClick={handleAdd}>Add Blog</button>
      </div>

      {blogs.map((blog) => (
        <div key={blog.id} className="card mb-3 p-3">
          <h5>{blog.title}</h5>
          <p>{blog.desc}</p>
          <button className="btn btn-danger btn-sm" onClick={() => dispatch(deleteBlog(blog.id))}>Delete</button>
        </div>
      ))}
    </div>
  );
};

export default BlogRedux;
