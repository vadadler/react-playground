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
import {Screen} from '../../constants';

export default class MyAppBar extends React.Component {
  getStyles() {
    return {
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
    }
  }

  render() {
    const {dataModel, viewModel} = this.props;
    const styles = this.getStyles();
  
    return (
      <div id="haha" style={styles.root}>
        <AppBar position="static" >
          <Toolbar>
            <IconButton style={styles.menuButton} color="inherit" aria-label="Menu">
              <MenuIcon />
            </IconButton>
            <Typography type="title" color="inherit" style={styles.flex}>
              Title
            </Typography>
            <Button color="inherit" onClick={()=>this.login()}>Login</Button>
          </Toolbar>
        </AppBar>
      </div>
    );
  }

  login() {
    this.props.viewModel.activeScreen = Screen.LOGIN;
  }  
}

MyAppBar.propTypes = {
  dataModel: PropTypes.object.isRequired,
  viewModel: PropTypes.object.isRequired
};

//export default withStyles(styles)(MyAppBar);