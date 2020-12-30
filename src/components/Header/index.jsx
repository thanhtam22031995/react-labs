import AppBar from '@material-ui/core/AppBar';
import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';
import { makeStyles } from '@material-ui/core/styles';
import Toolbar from '@material-ui/core/Toolbar';
import MenuIcon from '@material-ui/icons/Menu';
import React, { useContext } from 'react';
import { NavLink } from 'react-router-dom';
import ThemeContext, { themes } from 'themeContext';

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  title: {
    flexGrow: 1,
    color: 'white',
    textDecoration: 'none',
  },
  menu: {
    color: 'white',
    marginLeft: 15,
    textDecoration: 'none',
  },
}));

const menuItems = [
  {
    menuTitle: 'Magic Box',
    pageURL: '/box',
  },
  {
    menuTitle: 'Posts',
    pageURL: '/posts',
  },
  {
    menuTitle: 'Students',
    pageURL: '/students',
  },
  {
    menuTitle: 'Rendering',
    pageURL: '/rendering',
  },
  {
    menuTitle: 'Todos',
    pageURL: '/todos',
  },
];

export default function Header() {
  const classes = useStyles();
  const { currentTheme, setCurrentTheme } = useContext(ThemeContext);

  const handleToggleClick = () => {
    setCurrentTheme((theme) => (theme.name === 'light' ? themes.dark : themes.light));
  };

  return (
    <div className={classes.root}>
      <AppBar position="static">
        <Toolbar>
          <IconButton edge="start" className={classes.menuButton} color="inherit" aria-label="menu">
            <MenuIcon />
          </IconButton>

          <NavLink className={classes.title} to="/">
            <Button variant="contained" color="primary">
              Home
            </Button>
          </NavLink>
          <Button onClick={handleToggleClick} variant="contained" color="primary">
            Toggle
          </Button>

          {menuItems.map((item) => (
            <NavLink className={classes.menu} key={item.pageURL} to={item.pageURL}>
              <Button variant="contained" color="primary">
                {item.menuTitle}
              </Button>
            </NavLink>
          ))}

          <a
            className={classes.menu}
            href="https://zingmp3.vn/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Button variant="contained" color="secondary">
              Go To Zing MP3
            </Button>
          </a>
        </Toolbar>
      </AppBar>
    </div>
  );
}
