import React from "react"
import { useSelector } from "react-redux";
import { useParams } from "react-router";
import { AppBar, Box, Toolbar, Typography, IconButton, Grid, TableContainer, Table, TableBody, TableRow, TableCell} from '@mui/material'
import MenuIcon from '@mui/icons-material/Menu'
import { getItem } from "../Utils/getItem";
import { capitalizeFirstLetter } from "../Utils/getCapitalize";

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
              {capitalizeFirstLetter(bucketId)}
            </Typography>
          </Toolbar>
        </AppBar>
      </Box>
      <>
        <Box>
          <Grid xs={4} className="m-auto">
          <p className="text-24 center m-20"><strong>{capitalizeFirstLetter(bucketId)}</strong></p>
          <TableContainer sx={{border: '1px solid rgba(224, 224, 224, 1)'}}>
            <Table aria-label="simple table">
              <TableBody>
                {item?.map((x) => {
                  const [[title, value]] = Object.entries(x);
                  return <TableRow>
                    <TableCell><strong>{capitalizeFirstLetter(title?.replace('_', ' '))}:</strong></TableCell>
                    <TableCell>{capitalizeFirstLetter(value)}</TableCell>
                  </TableRow>
                })}
              </TableBody>
            </Table>
          </TableContainer>
          </Grid>
        </Box>
      </>
    </React.Fragment>
  )
}

export default Details