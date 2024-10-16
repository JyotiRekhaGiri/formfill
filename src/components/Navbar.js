import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch, faShoppingCart } from '@fortawesome/free-solid-svg-icons';
import './Navbar.css'; 

const Navbar = () => {
  return (
    <nav className="navbar">
      <ul className="nav-links">
        <li><a href="/">Home</a></li>
        <li><a href="/book">Book</a></li>
        <li><a href="/trending">Trending</a></li>
        <li><a href="/apparels">Apparels</a></li>
        <li><a href="/accessories">Accessories</a></li>
      </ul>
      <div className="nav-icons">
        <FontAwesomeIcon icon={faSearch} className="icon" />
        <FontAwesomeIcon icon={faShoppingCart} className="icon" />
      </div>
    </nav>
  );
};

export default Navbar;
