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
  Icon
} from '@material-ui/core';
import useMediaQuery from '@material-ui/core/useMediaQuery';
import MenuIcon from '@material-ui/icons/Menu';

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
  const isMobile = useMediaQuery('(max-width:599px)');

  const toggleDrawer = event => {
    if (event.type === 'keydown' && event.key !== 'Enter') {
      return;
    }
    setIsOpen(!isOpen);
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
      <AppBar position="fixed" color="secondary" className="NavbarContainer">
        <Toolbar component="nav" variant="dense">
          {isMobile ? (
            <React.Fragment>
              <IconButton
                edge="start"
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
            </React.Fragment>
          ) : (
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
                >
                  {section.title}
                </Link>
              ))}
            </React.Fragment>
          )}
        </Toolbar>
      </AppBar>
    </React.Fragment>
  );
};

export default Navbar;
