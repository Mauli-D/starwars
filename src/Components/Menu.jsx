import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import { useNavigate } from "react-router";
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import MenuItem from '@mui/material/MenuItem';
import Menu from '@mui/material/Menu';

export default function MenuAppBar() {
  const [anchorEl, setAnchorEl] = React.useState(null);
  const navigate = useNavigate();

  const handleNavigate = (route) => {
      navigate(route)
  }
  const handleMenu = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static" sx={{boxShadow: 'none'}}> 
        <Toolbar>
          <IconButton
            size="large"
            color="inherit"
            aria-label="menu"
          >
            <MenuIcon onClick={handleMenu}  />
          </IconButton>
              <Menu
                id="menu-appbar"
                anchorEl={anchorEl}
                anchorOrigin={{
                  vertical: 'top',
                  horizontal: 'right',
                }}
                keepMounted
                transformOrigin={{
                  vertical: 'top',
                  horizontal: 'right',
                }}
                open={Boolean(anchorEl)}
                onClose={handleClose}
              >
                <MenuItem onClick={() => handleNavigate("/people")}>People</MenuItem>
                <MenuItem onClick={() => handleNavigate("/movies")}>Movies</MenuItem>
                <MenuItem onClick={() => handleNavigate("/planets")}>Planets</MenuItem>
              </Menu>
        </Toolbar>
      </AppBar>
    </Box>
  );
}
