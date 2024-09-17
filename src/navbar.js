import React from 'react';
import './navbar.css';
import { Link } from 'react-scroll';

const NavBar = () => {
  return (
    <nav className="navbar navbar-expand-lg custom-navbar">
      <div className="container-fluid">
        <Link className="navbar-brand" to="Home" smooth={true} duration={0} offset={-50}>Karl's Portfolio</Link>
        
        <div className="collapse navbar-collapse" id="navbarNavDropdown">
          <ul className="navbar-nav">
            <li className="nav-item">
              <Link className="nav-link" to="Home" smooth={true} duration={0} offset={-50}>Home</Link>
            </li>

            <li className="nav-item">
              <Link className="nav-link" to="Projects" smooth={true} duration={0} offset={-100}>Projects</Link>
            </li>

            <li className="nav-item">
              <Link className="nav-link" to="contactMe" smooth={true} duration={0} offset={-80}>Contact</Link>
            </li>
            
            <li className="nav-item">
              <Link className="nav-link" to="Home" smooth={true} duration={0} offset={-50}>About me</Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default NavBar;