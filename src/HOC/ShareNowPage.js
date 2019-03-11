import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import share from './../images/share.svg';
import ShareNowCard from '../Components/Body/ShareNowCard'; 
import LoremTable from '../Components/LoremIpsum/LoremTable';
import GoogleMaps from '../Components/LoremIpsum/GoogleMaps';
import Grid from '@material-ui/core/Grid';

const styles = theme => ({
  root: {
    ...theme.mixins.gutters(),
    paddingTop: theme.spacing.unit * 2,
    paddingBottom: theme.spacing.unit * 2,
    flexGrow: 1

  },

});

function ShareNowPage(props) {
  const { classes } = props;

  return (
    <div>

      <Paper className={classes.root} elevation={1}>
        <Grid container spacing={8}>
          <Grid item xs={12}>
          <img src={share} alt=""></img>
            <Typography  variant="h6" component="p">
            Your car is always there. Free-floating car-sharing means you not only always have a car in the city — you have a fleet of hundreds.
        </Typography>
            <ShareNowCard />
          </Grid>
          <Grid item xs={12} md={6}>
            <GoogleMaps />
          </Grid>
          <Grid item xs={12} md={6}>
            <LoremTable />
          </Grid>

        </Grid>


      </Paper>
    </div>
  );
}

ShareNowPage.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(ShareNowPage);