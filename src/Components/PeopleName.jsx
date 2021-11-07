import React, { useState, useEffect } from "react";
import { useSelector, useDispatch } from 'react-redux'
import { setPeopleData } from '../redux/peopleReducer'
import { AppBar, Box, Toolbar, Typography, Button, IconButton, Avatar, Stack, Grid } from '@mui/material'
import MenuIcon from '@mui/icons-material/Menu'
import { useNavigate } from "react-router";
import { generateKey } from "../Utils/generateKey";
import { GetInitials } from "../Utils/getInitials";

const PeopleName = () => {
  const navigate = useNavigate();
  const [dataisLoaded, setDataisLoaded] = useState(false);
  const items = useSelector((state) => state.people.items)
  const dispatch = useDispatch()
  const _handleClick = (item) => {
    navigate(item.id);
  };


  useEffect(() => {
    const getItems = async () => {
      const res = await fetch("https://swapi.dev/api/people");
      const jsonData = await res.json();
      const mapItems = jsonData.results.map(generateKey);
      dispatch(setPeopleData(mapItems));
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
              People
            </Typography>
          </Toolbar>
        </AppBar>
      </Box>
      <Grid container spacing={2}>
        {items.map((item) => (
          <Grid item xs={4} key={item.id}>
            <Button variant="" onClick={() => _handleClick(item)}>
              <Stack direction="row" className="text-18">
                <Avatar className="rightmargin-10">{GetInitials(item.name)}</Avatar><span>{item.name}</span>
              </Stack>
            </Button>
          </Grid>
        ))
        }
      </Grid>
    </React.Fragment>
  );
}
export default PeopleName;