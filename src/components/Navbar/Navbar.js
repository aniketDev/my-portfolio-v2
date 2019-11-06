import React from 'react';
import './Navbar.scss';
import AppBar from '@material-ui/core/AppBar';

const Navbar = () => {
  return (
    <AppBar position="static">
      <nav className="navmenu" id="nav">
        <ul>
          <li>
            <a href="#header">Home</a>
          </li>
          <li>
            <a href="#about">About</a>
          </li>
          <li>
            <a href="#skills">Skills</a>
          </li>
          <li>
            <a href="#experience">Experience</a>
          </li>
          <li>
            <a href="#education">Education</a>
          </li>
          <li>
            <a href="#services">Services</a>
          </li>
          <li>
            <a href="#contact">Contact</a>
          </li>
        </ul>
      </nav>
    </AppBar>
  );
};

export default Navbar;
