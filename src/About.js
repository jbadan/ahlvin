
import React from 'react';
import Paper from '@material-ui/core/Paper';
import Typography from "@material-ui/core/Typography";
import ahlvins from './images/ahlvins.jpg';
import Avatar from '@material-ui/core/Avatar';
import { title, about } from './messages';

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
    textAlign: 'left',
    padding: '.5rem',
    margin: '0 .5rem'
  }
});

function About(){ 

  return (
    <Paper style={style.root}>
     <Avatar style={style.img} src={ahlvins} alt="Ahlvin Family" sizes='lg' />
     <Typography variant='h4'>{title}</Typography>
      {about.map((p, key) => <Typography paragraph style={style.paragraph} key={key}>{p}</Typography>)}    </Paper>
  );
}

export default About;
