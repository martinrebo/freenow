import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import FreeNowCard from './FreeNowCard';
import ReachNowCard from './ReachNowCard';
import ShareNowCard from './ShareNowCard';
import ParkNowCard from './ParkNowCard';

const styles = theme => ({
  root: {
    flexGrow: 1,
  },
  paper: {
    padding: theme.spacing.unit * 2,
    textAlign: 'center',
    color: theme.palette.text.secondary,
  },
});

function BodyGrid(props) {
  const { classes } = props;

  return (
    <div className={classes.root}>
      <Grid container spacing={8}>
        <Grid item xs={6}>
          <Paper className={classes.paper}>
          <FreeNowCard/>
          <ShareNowCard/>
          <ParkNowCard/>
          </Paper>
        </Grid>
        <Grid item xs={6}>
          <Paper className={classes.paper}>
          <ReachNowCard/>
          </Paper>
        </Grid>
      </Grid>
    </div>
  );
}

BodyGrid.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(BodyGrid);