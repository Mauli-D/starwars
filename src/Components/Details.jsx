import React from "react"
import { useSelector } from "react-redux";
import { useParams } from "react-router";
import { AppBar, Box, Toolbar, Typography, IconButton } from '@mui/material'
import MenuIcon from '@mui/icons-material/Menu'
import { getItem } from "../Utils/getItem";

const Details = () => {
    const state = useSelector(state => state)
    const { bucketId, itemId } = useParams();
    const item = getItem({ bucketId, itemId, state })

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
              {bucketId.toUpperCase()}
            </Typography>
          </Toolbar>
        </AppBar>
      </Box>
      <>
      <Box>
       {JSON.stringify(item)}
      </Box>
      </>
      </React.Fragment>
    )
}

export default Details