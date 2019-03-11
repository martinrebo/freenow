import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';

const styles = theme => ({
  root: {
    width: '100%',
    marginTop: theme.spacing.unit * 4,
    overflowX: 'auto',
  },
  table: {
    minWidth: 700,
  },
  head: {
      backgroundColor: 'primary',
  }
});


let id = 0;
function createData(destination, price, distance, time, stars ) {
  id += 1;
  return { id, destination, price, distance, time, stars  };
}

const rows = [
  createData('Sagrada Familia', 5, 5, 2, 5.0),
  createData('Dali Museum', 5, 9.0, 2, 5.0),
  createData('Barceloneta', 5, 16.0, 10, 5.0),
  createData('PobleNou', 10, 3.7, 15, 5.0),
  createData('My Taxi Offices', 5, 16.0, 49, 5.0),
];

function SimpleTable(props) {
  const { classes } = props;

  return (
    <Paper className={classes.root}>
      <Table className={classes.table}>
        <TableHead className={classes.head}>
          <TableRow>
            <TableCell>Destination </TableCell>
            <TableCell align="right">price</TableCell>
            <TableCell align="right">distance (km)</TableCell>
            <TableCell align="right">time (min)</TableCell>
            <TableCell align="right">Rating  (stars)</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map(row => (
            <TableRow key={row.id}>
              <TableCell component="th" scope="row">
                {row.destination}
              </TableCell>
              <TableCell align="right">{row.price}</TableCell>
              <TableCell align="right">{row.distance}</TableCell>
              <TableCell align="right">{row.time}</TableCell>
              <TableCell align="right">{row.stars }</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </Paper>
  );
}

SimpleTable.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(SimpleTable);