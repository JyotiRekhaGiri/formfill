import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch, faShoppingCart, faBars, faTimes } from '@fortawesome/free-solid-svg-icons';
import './Navbar.css'; 

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  // Toggle the side menu
  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <>
      <nav className="navbar">
        {/* Menu bar for mobile */}
        <div className="menu-bar" onClick={toggleMenu}>
          <FontAwesomeIcon icon={faBars} />
        </div>

        {/* Normal nav links */}
        <ul className="nav-links">
          <li><a href="/">Home</a></li>
          <li><a href="/book">Book</a></li>
          <li><a href="/trending">Trending</a></li>
          <li><a href="/apparels">Apparels</a></li>
          <li><a href="/accessories">Accessories</a></li>
        </ul>

        {/* Right-side icons */}
        <div className="nav-icons">
          <FontAwesomeIcon icon={faSearch} className="icon" />
          <FontAwesomeIcon icon={faShoppingCart} className="icon" />
        </div>
      </nav>

      {/* Side menu for mobile */}
      <div className={`side-menu ${isMenuOpen ? 'open' : ''}`}>
        <span className="close-btn" onClick={toggleMenu}>
          <FontAwesomeIcon icon={faTimes} />
        </span>
        <ul>
          <li><a href="/" onClick={toggleMenu}>Home</a></li>
          <li><a href="/book" onClick={toggleMenu}>Book</a></li>
          <li><a href="/trending" onClick={toggleMenu}>Trending</a></li>
          <li><a href="/apparels" onClick={toggleMenu}>Apparels</a></li>
          <li><a href="/accessories" onClick={toggleMenu}>Accessories</a></li>
        </ul>
      </div>
    </>
  );
};

export default Navbar;
