import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import ButtonBase from '@material-ui/core/ButtonBase';
import Typography from '@material-ui/core/Typography';
import free from './media/free.jpeg';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";


const styles = theme => ({
  root: {
    display: 'flex',
    flexWrap: 'wrap',
    minWidth: 100,
    width: '100%',
  },
  link: {
    textDecoration: 'none',
    color: '#fff'
  },
  image: {
    position: 'relative',
    height: 200,
    outline: '2px solid #fff',
    [theme.breakpoints.down('xs')]: {
      width: '100% !important', // Overrides inline-style
      height: 100,
    },
    '&:hover, &$focusVisible': {
      zIndex: 1,
      '& $imageBackdrop': {
        opacity: 0.15,
      },
      '& $imageMarked': {
        opacity: 0,
      },
      '& $imageTitle': {
        border: '4px solid currentColor',
      },
    },
  },
  focusVisible: {},
  imageButton: {
    position: 'absolute',
    left: 0,
    right: 0,
    top: 0,
    bottom: 0,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    color: theme.palette.common.white,
  },
  imageSrc: {
    position: 'absolute',
    left: 0,
    right: 0,
    top: 0,
    bottom: 0,
    backgroundSize: 'cover',
    backgroundPosition: 'center 40%',
  },
  imageBackdrop: {
    position: 'absolute',
    left: 0,
    right: 0,
    top: 0,
    bottom: 0,
    backgroundColor: theme.palette.common.black,
    opacity: 0.4,
    transition: theme.transitions.create('opacity'),
  },
  imageTitle: {
    position: 'relative',
    backgroundColor: 'rgba(0,0,0,0.5)',
    padding: `${theme.spacing.unit * 2}px ${theme.spacing.unit * 4}px ${theme.spacing.unit + 6}px`,
  },
  imageMarked: {
    height: 3,
    width: 18,
    backgroundColor: theme.palette.common.white,
    position: 'absolute',
    bottom: -2,
    left: 'calc(50% - 9px)',
    transition: theme.transitions.create('opacity'),
  },
});


function ButtonBases(props) {
  const { classes } = props;

  return (
    <div className={classes.root}>
      <ButtonBase
        focusRipple
        key="free"
        className={classes.image}
        focusVisibleClassName={classes.focusVisible}
        style={{
          width: "100%",
        }}
      >
        <span
          className={classes.imageSrc}
          style={{
            backgroundImage: `url(${free})`,
          }}
        />
        <span className={classes.imageBackdrop} />
        <span className={classes.imageButton}>
          <Typography
            component="span"
            variant="h4"
            color="inherit"
            className={classes.imageTitle}
          >
            <Link to="/free/" style={{ textDecoration: 'none', color: "#fff" }}>FREE</Link>
            <span className={classes.imageMarked} />
          </Typography>
        </span>
      </ButtonBase>
    </div>
  );
}

ButtonBases.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(ButtonBases);