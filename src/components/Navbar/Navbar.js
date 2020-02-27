import React, { useRef } from 'react';
import './Navbar.scss';
import { Toolbar, Link } from '@material-ui/core';

const sections = [
  { title: 'Home', url: '#home', ref: 'aboutRef' },
  { title: 'About', url: '#about', ref: 'aboutRef' },
  { title: 'Skills', url: '#skills', ref: 'aboutRef' },
  { title: 'Experience', url: '#experience', ref: 'aboutRef' },
  { title: 'Education', url: '#education', ref: 'aboutRef' },
  { title: 'Service', url: '#service', ref: 'aboutRef' },
  { title: 'Contact', url: '#contact', ref: 'aboutRef' }
];

const showNavMenu = false;

// const scrollToRef = ref => window.scrollTo(0, ref.current.offsetTop);
// const myRef = useRef(null);
// const executeScroll = () => scrollToRef(myRef);

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
          // onClick={section => scrollToRef(section.ref)}
          // onClick={executeScroll}
        >
          {section.title}
        </Link>
      ))}
    </Toolbar>
  );
};

export default Navbar;
