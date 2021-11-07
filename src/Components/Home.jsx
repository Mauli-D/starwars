import React from "react";
import { AppBar, Box, Toolbar, Typography, Button, IconButton } from '@mui/material'
import MenuIcon from '@mui/icons-material/Menu'
import { useNavigate } from "react-router";

var buttonStyle = {
	borderRadius: 10,
	padding: "18px 36px",
	fontSize: "18px",
	margin: "18px",
}

const Home = () => {
	const navigate = useNavigate();

	const handleNavigate = (route) => {
		navigate(route)
	}
	return (
		<>
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
							Star wars Explorer
						</Typography>
					</Toolbar>
				</AppBar>
			</Box>
			<Box spacing={2}>
				<Button style={buttonStyle} variant="contained" onClick={() => handleNavigate("/people")}>People</Button>
				<Button style={buttonStyle} variant="contained" onClick={() => handleNavigate("/movies")}>Movies</Button>
				<Button style={buttonStyle} variant="contained" onClick={() => handleNavigate("/planets")}>Planets</Button>
			</Box>
		</>
	);
}
export default Home;