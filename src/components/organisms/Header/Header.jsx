import React from 'react';
import { Link } from 'react-router-dom';
import { useTheme } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Drawer from '@mui/material/Drawer';
import CssBaseline from '@mui/material/CssBaseline';
import Toolbar from '@mui/material/Toolbar';
import List from '@mui/material/List';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import Divider from '@mui/material/Divider';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import HomeIcon from '@mui/icons-material/Home';
import GroupIcon from '@mui/icons-material/Group';
import LoginIcon from '@mui/icons-material/Login';
import LogoutIcon from '@mui/icons-material/Logout';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import CloseIcon from '@mui/icons-material/Close';
import Logo from '../../atoms/Logo/Logo';
import {AppBar, DrawerHeader , drawerWidth} from './Header.style';
import MainContent from '../../organisms/Main/Main';
import  "./Header.scss"

export default function Header2() {
  const theme = useTheme();
  const [open, setOpen] = React.useState(false);

  const handleDrawerOpen = () => {
    setOpen(!open);
  };



  return (
    <Box sx={{ display: 'flex' }}>
      <CssBaseline />
      <AppBar className='nav-header' position="fixed" open={open}>
        <Toolbar>
          <IconButton
            color="inherit"
            className={`nav-header-menuBtn ${open ? 'open' : ''}`}
            aria-label="open drawer"
            onClick={handleDrawerOpen}
            edge="start"
          >
            {open ? <CloseIcon /> : <MenuIcon />}
          </IconButton>
          <Link to="/" className="logo-link">
            <Logo/>
          </Link>
        </Toolbar>
        <IconButton
          color="inherit"
          aria-label="open drawer"
          onClick={handleDrawerOpen}
          edge="end"
        >
          <AccountCircleIcon />
        </IconButton>
      </AppBar>
      <Drawer
        sx={{
          width: drawerWidth,
          flexShrink: 0,
          '& .MuiDrawer-paper': {
            width: drawerWidth,
            boxSizing: 'border-box',
          },
        }}
        variant="persistent"
        anchor="left"
        open={open}
      >
        <Divider />
        <List>
          <ListItem  disablePadding>
            <ListItem button className="drawer-list-item">
              <Link to="/">
                <HomeIcon/><ListItemText primary="Home" />
              </Link>
            </ListItem>
          </ListItem>
        </List>
        <Divider />
        <List>
          {['Lista', 'Sair'].map((text, index) => (
            <ListItem key={text} disablePadding>
              <ListItemButton>
                <ListItemIcon>
                  {index % 2 === 0 ? <GroupIcon /> : <LogoutIcon />}
                </ListItemIcon>
                <ListItemText primary={text} />
              </ListItemButton>
            </ListItem>
          ))}
        </List>
      </Drawer>
    
      <MainContent open={open}>
        <DrawerHeader />
      </MainContent>
    </Box>
  );
}
