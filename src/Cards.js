/* eslint-disable react/jsx-no-target-blank */
import Eric from './images/eric.jpg';
import Linda from './images/linda.jpg';
import Avatar from '@material-ui/core/Avatar';
import Card from "@material-ui/core/Card";
import React from 'react';
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import CardHeader from "@material-ui/core/CardHeader";
import Grid from '@material-ui/core/Grid';
import Button from "@material-ui/core/Button";

import { theme } from "./theme.js";
import Typography from "@material-ui/core/Typography";

const style = ({
    root: {
        flexGrow: 1,
      },
    cards: {
        margin: "1rem"
    },
    cardHeader: {
        backgroundColor: theme.palette.primary.main
    },
    cardContent: {
        display: 'flex',
        flex: '1 0 auto',
        alignItems: 'flex-end',
        justifyContent: 'center'
    },
    cardActions: {
        display: 'flex',
        alignItems: 'center',
        justifyContent: "space-between"
    },
    img: {
        height: '80px',
        width: '80px'
    }
});

function Cards() {
  return (
      <div style={style.root}>
    <Grid container spacing={3}>
         <Grid item xs={12} sm={4} md={4}>
            <Card raised={true} style={style.cards}>
                <CardHeader
                style={style.cardHeader}
                title="Eric's Blog"
                >
                </CardHeader>
                <CardContent style={style.cardContent}>
                  <Avatar style={style.img} src={Eric} alt="Eric Ahlvin" sizes='lg' />
                </CardContent>
                <CardActions style={style.cardActions}>
                <Button 
                    fullWidth
                    href='https://www.sailblogs.com/member/rover2'
                    size="large">Learn More</Button>
                </CardActions>
            </Card>
        </Grid>
        <Grid item xs={12} sm={4} md={4}>
          <Card raised={true} style={style.cards}>
            <CardHeader
              style={style.cardHeader}
              title="Linda's Blog"
            >
            </CardHeader>
            <CardContent style={style.cardContent}>
            <Avatar style={style.img} src={Linda} alt="Linda Ahlvin" sizes='lg' />
              <Typography color="textPrimary"></Typography>
            </CardContent>
            <CardActions style={style.cardActions}>
              <Button 
                fullWidth
                href='/'
                size="large">Coming Soon</Button>
            </CardActions>
          </Card>
            </Grid>
            <Grid item xs={12} sm={4} md={4}>
          <Card raised={true} style={style.cards}>
            <CardHeader
              style={style.cardHeader}
              title="Tracker"
            >
            </CardHeader>
            <CardContent style={style.cardContent}>
              <Typography color="textPrimary">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam</Typography>
            </CardContent>
            <CardActions style={style.cardActions}>
              <Button 
                fullWidth
                href='http://www.ngc457.com/coho/index.php?sharename%5B%5D=captainalberg&sharename%5B%5D=emeraldmistress&sharename%5B%5D=DOUGLOMBARD&sharename%5B%5D=Agatha&sharename%5B%5D=svalabama&sharename%5B%5D=ArcticLoon2018&sharename%5B%5D=blueoasis&sharename%5B%5D=svCapellaIII&sharename%5B%5D=SVCoquette&sharename%5B%5D=SvEclipse&sharename%5B%5D=svjeananne&sharename%5B%5D=NorthStar&sharename%5B%5D=Realitycheck&sharename%5B%5D=MarcusCox'
                size="large">Learn More</Button>
            </CardActions>
          </Card>
            </Grid>
            <Grid item xs={12} sm={4} md={4}>
          <Card raised={true} style={style.cards}>
            <CardHeader
              style={style.cardHeader}
              title="Links"
            >
            </CardHeader>
            <CardContent style={style.cardContent}>
              <Typography color="textPrimary">
                <ul>
                  <li><a target='_blank' href='http://valiantsailboats.com/mac/mac42specs.htm'>Rover Specs</a></li>
                  <li><a target='_blank' href='http://www.baja-haha.com/Dates.html'>Baja Ha-Ha</a></li>
                  <li><a target='_blank' href='https://cohohoho.com/rally-runner-blogs/'>COHO HO HO</a></li>
                  <li><a target='_blank' href='http://www.pacificpuddlejump.com'>Pacific Puddle Jump</a></li>
                </ul>
              </Typography>
            </CardContent>
          </Card>
          </Grid>
    </Grid>
    </div>
  );
}

export default Cards;
