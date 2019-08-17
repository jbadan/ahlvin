
import React from 'react';
import Paper from '@material-ui/core/Paper';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
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
      margin: "1rem",
      marginTop: theme.spacing(3),
      overflowX: 'scroll'
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
                <CardContent style={style.cardContent}>
                <Table style={style.table}>
                  <TableHead>
                    <TableRow>
                      <TableCell>Dates</TableCell>
                      <TableCell align="left">Destination</TableCell>
                      <TableCell align="left">Crew</TableCell>
                    </TableRow>
                  </TableHead>
                  <TableBody>
                    {schedule.map(x => (
                      <TableRow key={x.destination}>
                        <TableCell component="th" scope="row">
                          {x.date}
                        </TableCell>
                        <TableCell align="left">{x.destination}</TableCell>
                        <TableCell align="left">{x.crew}</TableCell>
                      </TableRow>
                    ))}
                  </TableBody>
                </Table>
                
                </CardContent>
            </Card>
            </Grid>
     </Grid>
    </Paper>
  );
}

export default Schedule;
