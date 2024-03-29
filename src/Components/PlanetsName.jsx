import React, { useEffect } from "react";
import { useSelector, useDispatch } from 'react-redux'
import { setPlanetsData } from '../redux/plantesReducer'
import { AppBar, Box, Toolbar, Typography, Button, IconButton, Avatar, Grid } from '@mui/material'
import { useNavigate } from "react-router";
import { generateKey } from "../Utils/generateKey";
import Menu from "./Menu"

const PlanetName = () => {
  const navigate = useNavigate();
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
    }
    if (items.length === 0) {
      getItems();
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
              <Menu />
            </IconButton>
            <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
              Planets
            </Typography>
          </Toolbar>
        </AppBar>
      </Box>
      <Grid className="center" container spacing={2} mt={5}>
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