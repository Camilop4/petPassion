import React from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css';

function Navbar() {
  return (
    <nav>
      <Link to="/">Inicio</Link>
      <Link to="/products">Productos</Link>
      <Link to="/cart">Carrito</Link>
      {/* Otros enlaces */}
    </nav>
  );
}

export default Navbar;