//React
import React ,{ useState, useEffect }from 'react';
import { Link } from 'react-router-dom';

//Importação de componentes criados
import Logo from '../../atoms/Logo/Logo';
import MainContent from '../../organisms/Main/Main';
import user from '../../../assets/images/user.png'
import {AppBar, DrawerHeader , drawerWidth} from './Header.style';
import  "./Header.scss"

//Funções do MUI
import CssBaseline from '@mui/material/CssBaseline';

//Componentes do MUI
import Avatar from '@mui/material/Avatar'
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Divider from '@mui/material/Divider';
import Drawer from '@mui/material/Drawer';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemText from '@mui/material/ListItemText';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import Toolbar from '@mui/material/Toolbar';

//Icons do MUI
import CloseIcon from '@mui/icons-material/Close';
import GroupIcon from '@mui/icons-material/Group';
import HomeIcon from '@mui/icons-material/Home';
import ListItemIcon from '@mui/material/ListItemIcon';
import LoginIcon from '@mui/icons-material/Login';
import LogoutIcon from '@mui/icons-material/Logout';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';


export default function Header2() {
  const [open, setOpen] = useState(false);
  const [anchorEl, setAnchorEl] = useState(null);
  
    const openMenu = Boolean(anchorEl);

  const handleDrawerOpen = () => {
    setOpen(!open);
  };

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
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

        <Button
        id="basic-button"
        aria-controls={openMenu ? 'basic-menu' : undefined}
        aria-haspopup="true"
        aria-expanded={openMenu ? 'true' : undefined}
        onClick={handleClick}
      >
      <IconButton
          color="inherit"
          aria-label="open drawer"
          edge="end"
          className="nav-header-login"
        >
          
         <Avatar alt="imagem usuário" src={user} />
        </IconButton>
      </Button>
      <Menu
        id="basic-menu"
        anchorEl={anchorEl}
        open={openMenu}
        onClose={handleClose}
        MenuListProps={{
          'aria-labelledby': 'basic-button',
        }}
      >
        <MenuItem > <Link to="/minha_conta" className="menu-link" >
            Minha Conta
          </Link></MenuItem>
        <MenuItem >Sair</MenuItem>
      </Menu>
        
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
        <List  className='lateral_nav_menu'>
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
