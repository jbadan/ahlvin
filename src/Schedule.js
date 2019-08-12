
import React from 'react';
import Paper from '@material-ui/core/Paper';
import Typography from "@material-ui/core/Typography";
import CardContent from "@material-ui/core/CardContent";
import Card from "@material-ui/core/Card";
import Grid from '@material-ui/core/Grid';
import { theme } from "./theme.js";
import { schedule } from './messages';

const style = ({
  root: {
    margin: '1rem',
    marginTop: '15rem',
    marginBottom: '2rem',
    flexGrow: 1,
    },
  title: {
    padding: '1rem'
  },
  cards: {
      margin: "1rem"
  },
  cardHeader: {
      backgroundColor: theme.palette.primary.yellow
  },
  cardContent: {
      display: 'flex',
      flex: '1 0 auto'
  },
  cardActions: {
      display: 'flex',
      alignItems: 'center',
      justifyContent: "space-between"
  }
});

function Schedule() {


  return (
    <Paper style={style.root}>
     <Typography variant='h2' style={style.title}>Schedule</Typography>
     <Grid container spacing={3}>
         <Grid item xs={12}>
            <Card raised={true} style={style.cards}>
                <CardContent style={style.cardContent}>Placeholder for schedule here </CardContent>
            </Card>
            </Grid>
     </Grid>
    </Paper>
  );
}

export default Schedule;
