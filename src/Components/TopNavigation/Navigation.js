
import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';
import AccountCircle from '@material-ui/icons/AccountCircle';
import Code from  '@material-ui/icons/Code';
import ClickAway from'./ClickAway';
import Link from '@material-ui/core/Link';


const styles = {
  root: {
    flexGrow: 1,
  },
  grow: {
    flexGrow: 1,
  },
  menuButton: {
    marginLeft: -12,
    marginRight: 20,
  },
  link: {
    margin: 5,
  },
};

function Navigation(props) {
  const { classes } = props;
  return (
    <div className={classes.root}>
      <AppBar position="static">
        <Toolbar>
          <IconButton className={classes.menuButton} color="inherit" aria-label="Menu">
            <ClickAway/>
          </IconButton>
          <Typography variant="h5" color="inherit" className={classes.grow}>
           YOUR NOW (React App)
          </Typography>


          <Typography>
          <Link href="https://github.com/martinrebo/freenow" className={classes.link} color="inherit" target="_blank" rel="noopener noreferrer">
          <Code> Github </Code>
        
      </Link>
          </Typography>
          <Typography>
          <Link href="https://martinreboredo.com" className={classes.link} color="inherit" target="_blank">
          <AccountCircle> Martin Portfolio </AccountCircle>
        
      </Link>
          </Typography>


        </Toolbar>
      </AppBar>

      
    </div>
  );
}

Navigation.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(Navigation);