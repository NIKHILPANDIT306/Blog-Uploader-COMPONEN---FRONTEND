import React, { useState } from 'react';

const BlogUseState = () => {
  const [blogs, setBlogs] = useState([]);
  const [form, setForm] = useState({ title: '', desc: '' });

  const addBlog = () => {
    if (!form.title || !form.desc) return;
    setBlogs([...blogs, { ...form, id: Date.now() }]);
    setForm({ title: '', desc: '' });
  };

  const deleteBlog = (id) => setBlogs(blogs.filter((blog) => blog.id !== id));

  return (
    <div>
      <h4 className="mb-4">Blog App using useState</h4>

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
        <button className="btn btn-primary" onClick={addBlog}>Add Blog</button>
      </div>

      {blogs.map((blog) => (
        <div key={blog.id} className="card mb-3 p-3">
          <h5>{blog.title}</h5>
          <p>{blog.desc}</p>
          <button className="btn btn-danger btn-sm" onClick={() => deleteBlog(blog.id)}>Delete</button>
        </div>
      ))}
    </div>
  );
};

export default BlogUseState;
