import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <nav style={{ background: '#333', color: '#fff', padding: '10px' }}>
      <ul style={{ listStyle: 'none', display: 'flex', gap: '20px' }}>
        <li><Link to="/" style={{ color: '#fff' }}>Home</Link></li>
        <li><Link to="/about" style={{ color: '#fff' }}>Sobre</Link></li>
        <li><Link to="/contact" style={{ color: '#fff' }}>Contato</Link></li>
      </ul>
    </nav>
  );
};

export default Navbar;