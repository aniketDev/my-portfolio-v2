import React from 'react';
import './Navbar.scss';
import { Toolbar, Link } from '@material-ui/core';

const sections = [
  { title: 'Home', url: '#', ref: 'aboutRef' },
  { title: 'About', url: '#about', ref: 'aboutRef' },
  { title: 'Skills', url: '#', ref: 'aboutRef' },
  { title: 'Experience', url: '#', ref: 'aboutRef' },
  { title: 'Education', url: '#', ref: 'aboutRef' },
  { title: 'Service', url: '#', ref: 'aboutRef' },
  { title: 'Contact', url: '#', ref: 'aboutRef' }
];

const scrollToRef = ref => window.scrollTo(0, ref.current.offsetTop);

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
          // href={section.url}
          className="toolbar-link"
          onClick={section => scrollToRef(section.ref)}
        >
          {section.title}
        </Link>
      ))}
    </Toolbar>
  );
};

export default Navbar;
