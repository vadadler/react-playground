import React from 'react';
import PropTypes from 'prop-types';
import Table from 'material-ui/table';
import TableBody from 'material-ui/table/tablebody';
import TableRow from 'material-ui/table/tablerow';
import Dialog from 'material-ui/dialog';
import LinearProgress from 'material-ui/progress/linearprogress';
import Card from 'material-ui/card/card';
import CardActions from 'material-ui/card/cardactions';
import CardMedia from 'material-ui/card/cardmedia';
import CardTitle from 'material-ui/card/cardheader';
import TextField from 'material-ui/textfield';
import Button from 'material-ui/button';
import {Screen} from '../../constants';
import {observer} from 'mobx-react';

import auth from '../../classes/auth-service';
import utils from '../../classes/utils';
import info from '../dumb/info';

@observer
export default class Login extends React.Component {
  componentDidMount() {
    // If not logged on show login screen.
    if(auth.loggedIn() !== true) {
      this.props.viewModel.activeScreen = Screen.LOGIN;
    }
  }

  render() {
    const {dataModel, viewModel} = this.props;
    
    const content = [
      <div style={{width:'100%'}}>
        <Card initiallyExpanded={true}>
          <CardMedia overlay={<CardTitle title={utils.translate('login.cardTitle')}/>} >
            <img src={utils.translate('dataModel.imageURL')}/>
          </CardMedia>
          <CardActions expandable={true}>
            <Table
              style={{maxWidth:'100%', 'marginRight':'0px'}}
              selectable={false}
              fixedHeader={false}
              fixedFooter={false}>
              <TableBody
                style={{maxWidth:'100%'}}
                displayRowCheckbox={false}>
              <TableRow displayBorder={false} colSpan='3'>
                  <TextField
                    ref='username'
                    hintText={utils.translate('login.emailHintText')}
                    defaultValue={utils.translate('login.debugUserName')}
                    floatingLabelText={utils.translate('login.loginFloatingLabelText')} />
                </TableRow>
                <TableRow displayBorder={false} colSpan='3'>
                    <TextField
                      ref='password'
                      hintText={utils.translate('login.loginHintTextPwd')}
                      defaultValue={utils.translate('login.debugPassword')}
                      floatingLabelText={utils.translate('login.loginFloatingLabelTextPwd')}
                      type='password' />
                </TableRow>
                <TableRow colSpan='3' style={{textAlign: 'center'}}>
                    <Button
                      ref='loginButton'
                      onTouchTap={()=>this.handleLogin()}
                      label={utils.translate('buttons.login')}
                      disabled={viewModel.loginButtonDisabled}/>
                </TableRow>
              </TableBody>
            </Table>
            <LinearProgress ref='progress' style={{visibility: viewModel.progressVisible}} mode="indeterminate"/>
          </CardActions>
        </Card>
      </div>
    ];

    const customContentStyle = {
      width: '400px',
      maxWidth: 'none',
      height: '500px'
    };

    return(
      <Dialog
        modal={true}
        open={true}//viewModel.activeScreen === Screen.LOGIN}
        children={content}
        contentStyle={customContentStyle}
        autoScrollBodyContent={true}
        bodyStyle={{padding: '0px'}}
      />
    );
  }

  handleLogin() {
    auth.deleteToken();

    let properties = this.props;
    let userName = this.refs.username.getValue();
    let password = this.refs.password.getValue();

    var refs = this.refs;

    properties.viewModel.progressVisible = 'visible';
    properties.viewModel.loginButtonDisabled = true;
    
    // In real app login logic would go here.

    properties.viewModel.progressVisible = 'hidden';
    properties.viewModel.loginButtonDisabled = false;
    properties.viewModel.activeScreen = Screen.DASHBOARD;
  }
}

Login.propTypes = {
	viewModel: PropTypes.object.isRequired,
	dataModel: PropTypes.object.isRequired
};
