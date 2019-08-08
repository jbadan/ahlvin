
import React from 'react';
import Paper from '@material-ui/core/Paper';
import Typography from "@material-ui/core/Typography";
import ahlvins from './images/ahlvins.jpg';
import Avatar from '@material-ui/core/Avatar';

const style = ({
  root: {
    margin: '1rem'
    },
  img: {
    height: '200px',
    width: '200px',
    margin: '1rem',
    display: 'inline-block'
  },
  paragraph: {
    margin: '1rem',
    padding: '1rem'
  }
});

function About() {
  return (
    <Paper style={style.root}>
     <Avatar style={style.img} src={ahlvins} alt="Ahlvin Family" sizes='lg' />
     <Typography variant='h4'>We're on a sailing trip around the world!</Typography>
     <Typography paragraph style={style.paragraph}>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Viverra adipiscing at in tellus integer feugiat scelerisque varius. Eros in cursus turpis massa tincidunt dui ut. Sagittis orci a scelerisque purus semper eget. Amet porttitor eget dolor morbi non. Et magnis dis parturient montes. Magna eget est lorem ipsum. Cursus risus at ultrices mi tempus imperdiet nulla malesuada. Dolor magna eget est lorem. Elit ullamcorper dignissim cras tincidunt lobortis. Hendrerit dolor magna eget est lorem ipsum.</Typography>
    </Paper>
  );
}

export default About;
