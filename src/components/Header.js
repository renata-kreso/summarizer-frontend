import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';

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

    // TODO: change language functionality
    return (
      <div>
        <AppBar position="static" color="inherit" className={classes.root}>
          <Toolbar>
            <Typography variant="h4" className={classes.title}>
              Text summarizer
            </Typography>
            <Button color="inherit">CRO</Button>
            <Typography>
              /
            </Typography>
            <Button color="inherit">ENG</Button>
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
