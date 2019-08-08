import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import Typography from '@material-ui/core/Typography';
import About from './About';
import Cards from "./Cards";
import CrewDetails from './CrewDetails';
import React from 'react';
import Schedule from './Schedule';
import SailBoat from './SailBoat';
import Menu from '@material-ui/core/Menu';
import MenuItem from '@material-ui/core/MenuItem';
import './App.css';
import 'typeface-roboto';
import { theme } from "./theme.js";



const style = ({
  root: {
    flexGrow: 1,
    overflowY: 'hidden'
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  title: {
    // flexGrow: 1
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
        <IconButton edge="start" style={style.menuButton} color="inherit" aria-label="menu" aria-haspopup="true" onClick={handleClick}>
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
          </Menu>
        <Typography variant="h4" style={style.title}>Rover</Typography>
        </Toolbar>
      </AppBar>
      <About />
      <SailBoat />
      <Schedule />
      <CrewDetails />
      <Cards />
    </div>
  );
}

export default App;
