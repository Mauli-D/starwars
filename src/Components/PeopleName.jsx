import React, { useEffect } from "react";
import { useSelector, useDispatch } from 'react-redux'
import { setPeopleData } from '../redux/peopleReducer'
import { AppBar, Box, Toolbar, Typography, Button, IconButton, Card, Stack, Grid, CardContent, Avatar } from '@mui/material'
import { useNavigate } from "react-router";
import { generateKey } from "../Utils/generateKey";
import { GetInitials } from "../Utils/getInitials";
import Menu from "./Menu"

const PeopleName = () => {
  const navigate = useNavigate();
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
              People
            </Typography>
          </Toolbar>
        </AppBar>
      </Box>
      <Grid container spacing={2} mt={5} className = "justify-content center">
        {items.map((item) => (
          <Grid item xs={3} key={item.id} sx={{ border: '1px solid hotpink' }} mr={1} mt={2}>
            <Button variant="" onClick={() => _handleClick(item)}>
              <Stack direction="row" className="text-18">
                <Card sx={{ width: 300, boxShadow: 'none' }}>
                  <CardContent>
                    <Avatar sx={{ bgcolor: 'white', color: 'hotpink', border: '2px solid hotpink' }} className="m-auto" variant="h5" component="div">
                      {GetInitials(item.name)}
                    </Avatar>
                    <Typography variant="h6" component="div" sx={{ flexGrow: 1 }} mt={2}>
                      {item.name}
                    </Typography>
                  </CardContent>
                </Card >
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