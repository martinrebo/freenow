import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import free from './../images/free.svg';
import FreeNowCard from './../Components/Body/FreeNowCard';
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

function FreeNowPage(props) {
  const { classes } = props;

  return (
    <div>

      <Paper className={classes.root} elevation={1}>
        <Grid container spacing={8}>
          <Grid item xs={12}>
          <img src={free} alt=""></img>
            <Typography  variant="h6" component="p">
              Your driver is here. Ride-hailing means you're connected to drivers all around town — so your freedom is just one tap away.
        </Typography>
            <FreeNowCard />
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

FreeNowPage.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(FreeNowPage);