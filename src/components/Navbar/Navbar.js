import React, { useState } from 'react';
import './Navbar.scss';
import {
  Toolbar,
  Link,
  Drawer,
  AppBar,
  IconButton,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  Icon,
  Button
} from '@material-ui/core';
import useMediaQuery from '@material-ui/core/useMediaQuery';
import MenuIcon from '@material-ui/icons/Menu';
import { isMobile } from '../../utils/deviceInformation';
import SaveIcon from '@material-ui/icons/Save';

const sections = [
  { title: 'Home', url: '#home', icon: 'home_rounded' },
  { title: 'About', url: '#about', icon: 'info_rounded' },
  { title: 'Skills', url: '#skills', icon: 'code_rounded' },
  { title: 'Experience', url: '#experience', icon: 'list_alt_rounded' },
  { title: 'Education', url: '#education', icon: 'school_rounded' },
  { title: 'Service', url: '#service', icon: 'dvr_rounded' },
  { title: 'Contact', url: '#contact', icon: 'contact_mail_rounded' }
];

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const mobileWidth = useMediaQuery('(max-width:599px)');

  const toggleDrawer = event => {
    if (event.type === 'keydown' && event.key !== 'Enter') {
      return;
    }
    setIsOpen(!isOpen);
  };

  const scrollToTop = e => {
    console.log(e);
    e.preventDefault();
    const element = e.target.innerText.toLowerCase();
    if (element === 'home') {
      // document.documentElement.scrollTop = 0;
      window.scrollTo(0, 0);
    } else {
      // document.documentElement.scrollTop = document.querySelector(`#${element}`).offsetTop;
      const elmnt = document.querySelector(`#${element}`);
      elmnt.scrollIntoView();
    }
  };

  const renderMenuItems = () => (
    <div className="drawerContent" role="presentation" onClick={e => toggleDrawer(e)} onKeyDown={e => toggleDrawer(e)}>
      <List>
        {sections.map(section => (
          <Link key={section.title} noWrap underline="none" variant="inherit" href={section.url}>
            <ListItem button={true}>
              <ListItemIcon>
                <Icon fontSize="small">{section.icon}</Icon>
              </ListItemIcon>
              <ListItemText primary={section.title} />
            </ListItem>
          </Link>
        ))}
      </List>
    </div>
  );

  return (
    <React.Fragment>
      {isMobile || mobileWidth ? (
        <div className="NavContainerMobile">
          <IconButton
            // edge="start"
            className="menuButton"
            color="inherit"
            aria-label="menu"
            onClick={e => toggleDrawer(e)}
          >
            <MenuIcon />
          </IconButton>
          <Drawer
            transitionDuration={{ enter: 500, exit: 200 }}
            anchor="left"
            open={isOpen}
            onClose={e => toggleDrawer(e)}
            children={renderMenuItems()}
            className="drawerContainer"
          />
        </div>
      ) : (
        <AppBar position="fixed" color="secondary" className="NavbarContainer">
          <Toolbar component="nav" variant="dense">
            <React.Fragment>
              {sections.map(section => (
                <Link
                  color="textSecondary"
                  noWrap
                  underline="none"
                  key={section.title}
                  variant="inherit"
                  href={section.url}
                  className="toolbar-link"
                  onClick={e => scrollToTop(e)}
                >
                  {section.title}
                </Link>
              ))}
            </React.Fragment>
          </Toolbar>
          <Button variant="contained" color="primary" className="downloadBtn" startIcon={<SaveIcon />}>
            Download CV
          </Button>
        </AppBar>
      )}
    </React.Fragment>
  );
};

export default Navbar;
