import React from 'react';
import './Navbar.scss';
import { Toolbar, Link, Button, Menu, MenuItem } from '@material-ui/core';
// import { useTheme } from '@material-ui/core/styles';
import useMediaQuery from '@material-ui/core/useMediaQuery';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const sections = [
  { title: 'Home', url: '#home', ref: 'aboutRef' },
  { title: 'About', url: '#about', ref: 'aboutRef' },
  { title: 'Skills', url: '#skills', ref: 'aboutRef' },
  { title: 'Experience', url: '#experience', ref: 'aboutRef' },
  { title: 'Education', url: '#education', ref: 'aboutRef' },
  { title: 'Service', url: '#service', ref: 'aboutRef' },
  { title: 'Contact', url: '#contact', ref: 'aboutRef' }
];

// const scrollToRef = ref => window.scrollTo(0, ref.current.offsetTop);
// const myRef = useRef(null);
// const executeScroll = () => scrollToRef(myRef);

const Navbar = () => {
  const [anchorEl, setAnchorEl] = React.useState(null);
  // const theme = useTheme();
  // const matches = useMediaQuery(theme.breakpoints.up('lg'));
  const matches = useMediaQuery('(min-width:1280px)');

  const handleClick = event => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <Toolbar component="nav" variant="dense" className="toolbar-container">
      {matches ? (
        ''
      ) : (
        <div>
          {/* <Button aria-controls="nav-menu" size="large" aria-haspopup="true" onClick={handleClick}>
            <FontAwesomeIcon className="icon" icon="bars" size="lg" />
          </Button> */}

          <FontAwesomeIcon
            className="icon"
            icon="bars"
            size="lg"
            aria-controls="nav-menu"
            aria-haspopup="true"
            onClick={handleClick}
          />

          <Menu
            id="nav-menu"
            anchorEl={anchorEl}
            keepMounted
            open={Boolean(anchorEl)}
            onClose={handleClose}
          >
            {sections.map(section => (
              <MenuItem key={section.url}>
                <Link
                  color="textSecondary"
                  noWrap
                  underline="none"
                  variant="inherit"
                  href={section.url}
                  className="toolbar-link"
                  onClick={handleClose}
                >
                  {section.title}
                </Link>
              </MenuItem>
            ))}
          </Menu>
        </div>
      )}

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
          {matches ? section.title : ''}
        </Link>
      ))}
    </Toolbar>
  );
};

export default Navbar;
