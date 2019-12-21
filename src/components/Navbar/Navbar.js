import React from 'react';
import './Navbar.scss';
import AppBar from '@material-ui/core/AppBar';

const Navbar = () => {
  return (
    <AppBar position="static" color="secondary">
      <nav className="navmenu" id="nav">
        <ul>
          <li>
            <a>Home</a>
          </li>
          <li>
            <a>About</a>
          </li>
          <li>
            <a>Skills</a>
          </li>
          <li>
            <a>Experience</a>
          </li>
          <li>
            <a>Education</a>
          </li>
          <li>
            <a>Services</a>
          </li>
          <li>
            <a>Contact</a>
          </li>
        </ul>
      </nav>
    </AppBar>
  );
};

export default Navbar;
