import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import BlogUseState from './components/BlogUseState.jsx';
import BlogUseReducer from './components/BlogUseReducer.jsx';
import BlogRedux from './components/BlogRedux.jsx';

export default function App() {
  return (
    <Router>
      <div className="container mt-4">
        <h2 className="text-center">📝 Blog Application</h2>
        <nav className="nav justify-content-center mb-4">
          <Link to="/usestate" className="btn btn-outline-primary mx-2">useState</Link>
          <Link to="/usereducer" className="btn btn-outline-success mx-2">useReducer</Link>
          <Link to="/redux" className="btn btn-outline-danger mx-2">Redux</Link>
        </nav>

        <Routes>
          <Route path="/usestate" element={<BlogUseState />} />
          <Route path="/usereducer" element={<BlogUseReducer />} />
          <Route path="/redux" element={<BlogRedux />} />
          <Route path="/" element={<div className="text-center text-muted">Select any blog method above.</div>} />
        </Routes>
      </div>
    </Router>
  );
}
