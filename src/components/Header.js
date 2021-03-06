import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';

const useStyles = theme => ({
  root: {
    flexGrow: 1,
  },
  title: {
    flexGrow: 1,
  }
});

class Header extends React.Component {
  render() {
    const { classes } = this.props;

    return (
      <div>
        <AppBar position="static" color="inherit" className={classes.root}>
          <Toolbar>
            <Typography variant="h5" className={classes.title}>
              Sustav za sažimanje teksta
            </Typography>
          </Toolbar>
        </AppBar>
        <br />
      </div>
    );
  }
}

Header.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withStyles(useStyles)(Header);
