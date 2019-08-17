/* eslint-disable react/jsx-no-target-blank */
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
// import IconButton from '@material-ui/core/IconButton';
// import MenuIcon from '@material-ui/icons/Menu';
import Typography from '@material-ui/core/Typography';
import About from './About';
import Cards from "./Cards";
import CrewDetails from './CrewDetails';
import Paper from '@material-ui/core/Paper';
import React from 'react';
import rover from './images/rover.jpg';
import Schedule from './Schedule';
import SailBoat from './SailBoat';
// import Menu from '@material-ui/core/Menu';
// import MenuItem from '@material-ui/core/MenuItem';
import './App.css';
import 'typeface-roboto';
import { theme } from "./theme.js";



const style = ({
  root: {
    flexGrow: 1,
    overflowY: 'hidden',
    overflowX: 'hidden'
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  div: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center'
  },
  paper: {
    maxWidth: '500px'
  },
  rover: {
    maxHeight: '500px',
    padding: '20px 20px 10px 20px'
  }
})

function App() {
  const [anchorEl, setAnchorEl] = React.useState(null);

  function handleClick(event) {
    setAnchorEl(event.currentTarget);
  }

  function handleClose() {
    setAnchorEl(null);
  }
  return (
    <div className="App" style={style.root}>
      <AppBar position="static" color="primary">
        <Toolbar>
        {/* <IconButton edge="start" style={style.menuButton} color="inherit" aria-label="menu" aria-haspopup="true" onClick={handleClick}>
            <MenuIcon />
          </IconButton>
          <Menu
            id="simple-menu"
            anchorEl={anchorEl}
            keepMounted
            open={Boolean(anchorEl)}
            onClose={handleClose}
          >
            <MenuItem onClick={handleClose}>Eric's Blog</MenuItem>
            <MenuItem onClick={handleClose}>Linda's Blog</MenuItem>
            <MenuItem onClick={handleClose}>Tracker</MenuItem>
            <MenuItem onClick={handleClose}>Kindle Links</MenuItem>
          </Menu> */}
        <Typography variant="h4">Linda and Eric Ahlvin: Rover</Typography>
        </Toolbar>
      </AppBar>
      <About />
      <SailBoat />
      <Schedule />
      <div style={style.div}>
        <Paper style={style.paper}>
          <img alt='rover' src={rover} style={style.rover} />
          <Typography variant="caption" display="block" gutterBottom>
            Rover, <a target='_blank' href='http://valiantsailboats.com/mac/mac42specs.htm'>Valiant 42</a>
          </Typography>
        </Paper>
      </div>
      <CrewDetails />
      <Cards />
    </div>
  );
}

export default App;
