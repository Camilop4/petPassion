import React from 'react';
import './Footer.css';

function Footer() {
  return (
    <footer>
      <p>&copy; {new Date().getFullYear()} Mi Tienda Online</p>
    </footer>
  );
}

export default Footer;