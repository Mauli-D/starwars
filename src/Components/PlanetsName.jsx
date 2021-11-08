import React, { useState, useEffect } from "react";
import { useSelector, useDispatch } from 'react-redux'
import { setPlanetsData } from '../redux/plantesReducer'
import { AppBar, Box, Toolbar, Typography, Button, IconButton, Avatar, Grid, white } from '@mui/material'
import MenuIcon from '@mui/icons-material/Menu'
import { useNavigate } from "react-router";
import { generateKey } from "../Utils/generateKey";

const PlanetName = () => {
  const navigate = useNavigate();
  const [dataisLoaded, setDataisLoaded] = useState(false);
  const items = useSelector((state) => state.planets.items)
  const dispatch = useDispatch()
  const _handleClick = (item) => {
    navigate(item.id);
  };

  useEffect(() => {
    const getItems = async () => {
      const res = await fetch("https://swapi.dev/api/planets");
      const jsonData = await res.json();
      const mapItems = jsonData.results.map(generateKey);
      dispatch(setPlanetsData(mapItems));
      setDataisLoaded(true);
    }
    if (items.length === 0) {
      getItems();
    } else {
      setDataisLoaded(true);
    }
  }, [items, dispatch]);

  return (
    <React.Fragment>
      <Box sx={{ flexGrow: 1 }}>
        <AppBar position="static">
          <Toolbar>
            <IconButton
              size="large"
              edge="start"
              color="inherit"
              aria-label="menu"
              sx={{ mr: 2 }}
            >
              <MenuIcon />
            </IconButton>
            <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
              Planets
            </Typography>
          </Toolbar>
        </AppBar>
      </Box>
      <Grid className="center" container spacing={2}>
        {items.map((item) => (
          <Grid item xs={4} key={item.id}>
            <Button className="primary" variant="" onClick={() => _handleClick(item)}>
              <Avatar sx={{ width: 125, height: 125, bgcolor: 'white', color: 'black', border: '0.1px solid hotpink' }}>{item.name}</Avatar>
            </Button>
          </Grid>
        ))
        }
      </Grid>
    </React.Fragment>
  );
}
export default PlanetName;