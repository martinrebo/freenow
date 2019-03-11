import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import reach  from './../images/reach.svg';
import ReachNowCard from '../Components/Body/ReachNowCard';
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

function ReachNowPage(props) {
  const { classes } = props;

  return (
    <div>

      <Paper className={classes.root} elevation={1}>
        <Grid container spacing={8}>
          <Grid item xs={12}>
          <img src={reach} alt=""></img>
            <Typography  variant="h6" component="p">
            You're ready for your next move. Mobile trip-planning means you can move through the city the way you want — cashless and connected.
        </Typography>
            <ReachNowCard />
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

ReachNowPage.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(ReachNowPage);