import React, { useReducer, useState } from 'react';

const initialState = [];

const reducer = (state, action) => {
  switch (action.type) {
    case 'ADD':
      return [...state, { ...action.payload, id: Date.now() }];
    case 'DELETE':
      return state.filter((blog) => blog.id !== action.payload);
    default:
      return state;
  }
};

const BlogUseReducer = () => {
  const [blogs, dispatch] = useReducer(reducer, initialState);
  const [form, setForm] = useState({ title: '', desc: '' });

  const addBlog = () => {
    if (!form.title || !form.desc) return;
    dispatch({ type: 'ADD', payload: form });
    setForm({ title: '', desc: '' });
  };

  return (
    <div>
      <h4 className="mb-4">Blog App using useReducer</h4>

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
        <button className="btn btn-success" onClick={addBlog}>Add Blog</button>
      </div>

      {blogs.map((blog) => (
        <div key={blog.id} className="card mb-3 p-3">
          <h5>{blog.title}</h5>
          <p>{blog.desc}</p>
          <button className="btn btn-danger btn-sm" onClick={() => dispatch({ type: 'DELETE', payload: blog.id })}>Delete</button>
        </div>
      ))}
    </div>
  );
};

export default BlogUseReducer;
