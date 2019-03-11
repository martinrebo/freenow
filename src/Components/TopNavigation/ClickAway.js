import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import ClickAwayListener from '@material-ui/core/ClickAwayListener';
import Paper from '@material-ui/core/Paper';
import grey from '@material-ui/core/colors/grey';
import MenuIcon from '@material-ui/icons/Menu';
import Typography from '@material-ui/core/Typography';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";


const styles = theme => ({
  root: {
    position: 'relative',
  },
  paper: {
    position: 'absolute',
    top: 36,
    right: 0,
    left: 0,
    width: 150,
    zIndex: 1
  },
  fake: {
    backgroundColor: grey[900],
    height: theme.spacing.unit * 3,
    margin: theme.spacing.unit * 5,
    // Selects every two elements among any group of siblings.
    '&:nth-child(2n)': {
      marginRight: theme.spacing.unit * 4,
    },
  },
});

class ClickAway extends React.Component {
  state = {
    open: false,
  };

  handleClick = () => {
    this.setState(state => ({
      open: !state.open,
    }));
  };

  handleClickAway = () => {
    this.setState({
      open: false,
    });
  };

  render() {
    const { classes } = this.props;
    const { open } = this.state;
    const fake = <div className={classes.fake} />;

    return (
      <div className={classes.root}>
        <ClickAwayListener onClickAway={this.handleClickAway}>
          <div>
            <MenuIcon onClick={this.handleClick} />

            {open ? (
              <Paper className={classes.paper}>
                <div> <Typography variant="h6" color="primary" className={classes.grow}>
                <Link to="/">HOME</Link>
          </Typography>
                </div>
                <div>
                  <Typography variant="h6" color="primary" className={classes.grow}>
                  <Link to="/free/">FREE</Link>
          </Typography>
                </div>
                <div>
                  <Typography variant="h6" color="primary" className={classes.grow}>
                  <Link to="/share/">SHARE</Link>
          </Typography></div>
                <div>
                  <Typography variant="h6" color="primary" className={classes.grow}>
                  <Link to="/reach/">REACH</Link>
          </Typography> </div>
                <div>
                  <Typography variant="h6" color="primary" className={classes.grow}>
                  <Link to="/park/">PARK</Link>
          </Typography> </div>
                <div>
                  <Typography variant="h6" color="primary" className={classes.grow}>
                  <Link to="/charge/">CHARGE</Link>
          </Typography> </div>

              </Paper>
            ) : null}
          </div>
        </ClickAwayListener>
      </div>
    );
  }
}

ClickAway.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(ClickAway);