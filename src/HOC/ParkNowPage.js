import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import park from './../images/park.svg';
import ParkNowCard from '../Components/Body/ParkNowCard';
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

function ParkNowPage(props) {
  const { classes } = props;

  return (
    <div>

      <Paper className={classes.root} elevation={1}>
        <Grid container spacing={8}>
          <Grid item xs={12}>
          <img src={park} alt=""></img>
            <Typography  variant="h6" component="p">
            Your spot is waiting. Mobile parking makes it easy for you to find, reserve, and pay for parking remotely — so you don't have to circle the block or feed a meter.
        </Typography>
            <ParkNowCard />
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

ParkNowPage.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(ParkNowPage);