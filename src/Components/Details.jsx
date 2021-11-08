import React from "react"
import { useSelector } from "react-redux";
import { useParams } from "react-router";
import { AppBar, Box, Toolbar, Typography, IconButton, TableContainer, Table, TableBody, TableRow, TableCell} from '@mui/material'
import { getItem } from "../Utils/getItem";
import { capitalizeFirstLetter } from "../Utils/getCapitalize";
import Menu from "./Menu"

const Details = () => {
  const state = useSelector(state => state)
  const { bucketId, itemId } = useParams();
  const {item, title} = getItem({ bucketId, itemId, state })

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
              {capitalizeFirstLetter(bucketId)}
            </Typography>
          </Toolbar>
        </AppBar>
      </Box>
      <>
        <Box sx={{width: '40%'}} className="m-auto">
          <p className="text-24 center m-20"><strong>{capitalizeFirstLetter(title)}</strong></p>
          <TableContainer sx={{border: '1px solid rgba(224, 224, 224, 1)', borderBlockEnd: 'none'}}>
            <Table aria-label="simple table">
              <TableBody>
                {item?.map((x) => {
                  const [[title, value]] = Object.entries(x);
                  return <TableRow key={title}>
                    <TableCell><strong>{capitalizeFirstLetter(title?.replace('_', ' '))}:</strong></TableCell>
                    <TableCell>{capitalizeFirstLetter(value)}</TableCell>
                  </TableRow>
                })}
              </TableBody>
            </Table>
          </TableContainer>
        </Box>
      </>
    </React.Fragment>
  )
}

export default Details