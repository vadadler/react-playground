import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from 'material-ui/styles';
import AppBar from 'material-ui/AppBar';
import Toolbar from 'material-ui/Toolbar';
import Typography from 'material-ui/Typography';
import Button from 'material-ui/Button';
import IconButton from 'material-ui/IconButton';
import MenuIcon from 'material-ui-icons/Menu';
import red from 'material-ui/colors/red';

const styles = {
  root: {
    width: '100%',
  },
  flex: {
    flex: 1,
  },
  menuButton: {
    marginLeft: -12,
    marginRight: 20,
  },
};

function MyAppBar(props) {
  const { classes } = props;
  // const {dataModel} = this.props;
  // const {viewModel} = this.props;

  
  return (
    <div className={classes.root}>
      <AppBar position="static" >
        <Toolbar>
          <IconButton className={classes.menuButton} color="inherit" aria-label="Menu">
            <MenuIcon />
          </IconButton>
          <Typography type="title" color="inherit" className={classes.flex}>
            Title
          </Typography>
          <Button color="inherit" onClick={()=>login()}>Login</Button>
        </Toolbar>
      </AppBar>
    </div>
  );
}

function login() {
  console.log("HAHAHAHA");
}

MyAppBar.propTypes = {
  classes: PropTypes.object.isRequired,
  dataModel: PropTypes.object.isRequired,
  viewModel: PropTypes.object.isRequired
};

export default withStyles(styles)(MyAppBar);