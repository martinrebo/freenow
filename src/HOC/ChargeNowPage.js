import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import charge from './../images/charge.svg';
import ChargeNowCard from '../Components/Body/ChargeNowCard';
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

function ChargeNowPage(props) {
  const { classes } = props;

  return (
    <div>

      <Paper className={classes.root} elevation={1}>
        <Grid container spacing={8}>
          <Grid item xs={12}>
          <img src={charge} alt=""></img>
            <Typography  variant="h6" component="p">
              We're working on providing access to electric charging infrastructure in your city — so you can already make the switch to electric cars right now.
        </Typography>
            <ChargeNowCard />
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

ChargeNowPage.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(ChargeNowPage);