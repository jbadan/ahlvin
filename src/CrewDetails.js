
import React from 'react';
import Paper from '@material-ui/core/Paper';
import Typography from "@material-ui/core/Typography";
import CardContent from "@material-ui/core/CardContent";
import CardHeader from "@material-ui/core/CardHeader";
import Card from "@material-ui/core/Card";
import Grid from '@material-ui/core/Grid';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import Button from '@material-ui/core/Button';

import CheckIcon from '@material-ui/icons/CheckBoxOutlined';
import { theme } from "./theme.js";


const style = ({
  root: {
    margin: '1rem',
    flexGrow: 1,
    },
  title: {
    padding: '1rem'
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
  },
  cards: {
      margin: "1rem"
  },
  cardHeader: {
      backgroundColor: theme.palette.primary.pink
  },
  cardContent: {
      display: 'flex',
      flex: '1 0 auto'
  },
  cardActions: {
      display: 'flex',
      alignItems: 'center',
      justifyContent: "space-between"
  },
  button: {
    margin: theme.spacing(1),
  },
});

function CrewDetails() {

  let providedArray = [
    'item 1', 'item 2', 'item 3', 'item 4', 'item 5'
  ];

  let bringArray = [
    'item 1', 'item 2', 'item 3', 'item 4', 'item 5'
  ];


  const checklist = providedArray.map((item, i) => (
      <ListItem key={i}>
        <ListItemIcon>
          <CheckIcon />
        </ListItemIcon>
          <ListItemText>{item}</ListItemText>
      </ListItem>
  ))

  const checklist2 = bringArray.map((item, i) => (
    <ListItem key={i}>
      <ListItemIcon>
        <CheckIcon />
      </ListItemIcon>
        <ListItemText>{item}</ListItemText>
    </ListItem>
))


  return (
    <Paper style={style.root}>
     <Typography variant='h2' style={style.title}>Crew Details</Typography>
     <Button variant="contained" color="secondary" style={style.button}>
        Medical Form
      </Button>
      <Button variant="contained" color="secondary" style={style.button}>
        Instructions
      </Button>
     <Grid container spacing={3}>
         <Grid item xs={12} sm={6}>
            <Card raised={true} style={style.cards}>
                <CardHeader
                style={style.cardHeader}
                title="What is Provided"
                >
                </CardHeader>
                <CardContent style={style.cardContent}>
                <List>
                  {checklist}
                </List>
                </CardContent>
            </Card>
            </Grid>
            <Grid item xs={12} sm={6}>
            <Card raised={true} style={style.cards}>
                <CardHeader
                style={style.cardHeader}
                title="What to Bring"
                >
                </CardHeader>
                <CardContent style={style.cardContent}>
                <List>
                  {checklist2}
                </List>
             </CardContent>
            </Card>
            </Grid>
     </Grid>
    </Paper>
  );
}

export default CrewDetails;
