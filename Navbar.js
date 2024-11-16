import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => (
  <nav>
    <Link to="/">Home</Link>
    <Link to="/dashboard">Dashboard</Link>
    <Link to="/admin">Admin</Link>
  </nav>
);

export default Navbar;
