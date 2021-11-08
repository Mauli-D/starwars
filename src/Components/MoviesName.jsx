import React, { useState, useEffect } from "react";
import { useSelector, useDispatch } from 'react-redux'
import { setMoviesData } from '../redux/moviesReducer'
import { AppBar, Box, Toolbar, Typography, Button, IconButton } from '@mui/material'
import MenuIcon from '@mui/icons-material/Menu'
import { useNavigate } from "react-router";
import { generateKey } from "../Utils/generateKey";

const MoviesName = () => {
  const navigate = useNavigate();
  const items = useSelector((state) => state.movies.items)
  const dispatch = useDispatch()
  const _handleClick = (item) => {
    navigate(item.id);
  };

  useEffect(() => {
    const getItems = async () => {
      const res = await fetch("https://swapi.dev/api/films");
      const jsonData = await res.json();
      const mapItems = jsonData.results.map(generateKey);
      dispatch(setMoviesData(mapItems));
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
              <MenuIcon />
            </IconButton>
            <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
              Movies
            </Typography>
          </Toolbar>
        </AppBar>
      </Box>
      <ul>
      {items.map((item) => (
        <li className="center text-18" key={item.id}>
          <Button className="primary" variant="" onClick={() => _handleClick(item)}>
            {item.title}
          </Button>
        </li>
      ))
      }
      </ul>
    </React.Fragment>
  );
}
export default MoviesName;