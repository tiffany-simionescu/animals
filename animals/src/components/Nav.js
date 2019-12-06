import React from 'react';
import { Link } from 'react-router-dom';
import '../App.css';

const Nav = () => {
  return (
    <div className="nav-container">
      <Link to="/cat-image" className="link">Cat</Link>
      <Link to="/dog-image" className="link">Dog</Link>
      <Link to="/fox-image" className="link">Fox</Link>
    </div>
  )
}

export default Nav;