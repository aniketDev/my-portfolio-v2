import React from 'react';
import './Navbar.scss';
import { Toolbar, Link } from '@material-ui/core';

const sections = [
  { title: 'Home', url: '#' },
  { title: 'About', url: '#' },
  { title: 'Skills', url: '#' },
  { title: 'Experience', url: '#' },
  { title: 'Education', url: '#' },
  { title: 'Service', url: '#' },
  { title: 'Contact', url: '#' }
];

const Navbar = () => {
  return (
    <Toolbar component="nav" variant="dense" className="toolbar-container">
      {sections.map(section => (
        <Link
          color="textSecondary"
          noWrap
          underline="none"
          key={section.title}
          variant="inherit"
          href={section.url}
          className="toolbar-link"
        >
          <span>{section.title}</span>
        </Link>
      ))}
    </Toolbar>
  );
};

export default Navbar;
