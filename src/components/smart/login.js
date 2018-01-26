import React from 'react';

import Table from 'material-ui/lib/table/table';
import TableBody from 'material-ui/lib/table/table-body';
import TableFooter from 'material-ui/lib/table/table-footer';
import TableHeader from 'material-ui/lib/table/table-header';
import TableHeaderColumn from 'material-ui/lib/table/table-header-column';
import TableRow from 'material-ui/lib/table/table-row';
import TableRowColumn from 'material-ui/lib/table/table-row-column';
import FlatButton from 'material-ui/lib/flat-button';
import Dialog from 'material-ui/lib/dialog';
import LinearProgress from 'material-ui/lib/linear-progress';
import Card from 'material-ui/lib/card/card';
import CardActions from 'material-ui/lib/card/card-actions';
import CardExpandable from 'material-ui/lib/card/card-expandable';
import CardHeader from 'material-ui/lib/card/card-header';
import CardMedia from 'material-ui/lib/card/card-media';
import CardText from 'material-ui/lib/card/card-text';
import CardTitle from 'material-ui/lib/card/card-title';
import TextField from 'material-ui/lib/text-field';
import RaisedButton from 'material-ui/lib/raised-button';
import {Screen} from '../../constants';
import {observer} from 'mobservable-react';

// import auth from '../../classes/auth-service';
// import utils from '../../classes/utils';
// import info from '../dumb/info';

@observer
export default class Login extends React.Component {
  componentDidMount() {
    // If not logged on show login screen.
    if(auth.loggedIn() !== true) {
      this.props.viewModel.activeScreen = Screen.LOGIN;
    }
  }

  render() {
    const dataModel = this.props.dataModel;
    const viewModel = this.props.viewModel;

    const content = [
      <div style={{width:'100%'}}>
        <Card initiallyExpanded={true}>
          <CardMedia overlay={<CardTitle title={utils.translate('login.cardTitle')}/>} >
            <img src={utils.translate('login.imageURL')}/>
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
              <TableRow displayBorder={false}>
                  <TableRowColumn colSpan='3'>
                    <TextField
                      ref='username'
                      hintText={utils.translate('login.emailHintText')}
                      defaultValue={utils.translate('login.debugUserName')}
                      floatingLabelText={utils.translate('login.loginFloatingLabelText')} />
                  </TableRowColumn>
                  <TableRowColumn/>
                  <TableRowColumn/>
                </TableRow>
                <TableRow displayBorder={false}>
                  <TableRowColumn colSpan='3'>
                    <TextField
                      ref='password'
                      hintText={utils.translate('login.loginHintTextPwd')}
                      defaultValue={utils.translate('login.debugPassword')}
                      floatingLabelText={utils.translate('login.loginFloatingLabelTextPwd')}
                      type='password' />
                  </TableRowColumn>
                  <TableRowColumn/>
                  <TableRowColumn/>
                </TableRow>
                <TableRow>
                  <TableRowColumn/>
                  <TableRowColumn colSpan='3' style={{textAlign: 'center'}}>
                    <RaisedButton
                      ref='loginButton'
                      onTouchTap={()=>this.handleLogin()}
                      label={utils.translate('buttons.login')}
                      disabled={viewModel.loginButtonDisabled}/>
                  </TableRowColumn>
                  <TableRowColumn/>
                </TableRow>
              </TableBody>
              <TableFooter/>
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
        open={viewModel.activeScreen === Screen.LOGIN}
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

    let Promise = this.Promise || require('promise');
    let agent = require('superagent-promise')(require('superagent'), Promise);

    agent.options(properties.viewModel.endpoint + '/api/v1/users/login')
      .then(function onResult(response) {
        auth.setToken(response.header['x-csrf-token']);
        return agent('POST', properties.viewModel.endpoint + '/api/v1/users/login')
          .set('X-CSRF-TOKEN', auth.getToken())
          .type('json')
          .send({email:userName, password:password});
      }, function onError(err) {
        properties.viewModel.infoTitle = 'Authentication error';
        properties.viewModel.infoText = 'Unable to get intial token.';
        utils.handleError(properties, err);
      })
      .then(function onResult(response) {
        auth.setToken(response.header['x-csrf-token']);
        properties.viewModel.isLoginOpen = false;
        utils.resetViewModel(properties.viewModel);
        utils.getPolicyGroups(properties);
      }, function onError(err) {
        properties.viewModel.infoTitle = 'Authentication error';
        properties.viewModel.infoText = 'Unable to login. Check user name and password.';
        auth.deleteToken();
        utils.handleError(properties, err);
      /*})
      .catch (function(results) {
        properties.viewModel.infoTitle = 'Authentication error';
        properties.viewModel.infoText = 'Unable to login. Check user name and password.';
        utils.handleError(properties, results);
        */
      }.bind(this));

      properties.viewModel.progressVisible = 'hidden';
      properties.viewModel.loginButtonDisabled = false;
      properties.viewModel.activeScreen = Screen.DASHBOARD;
  }
}

Login.propTypes = {
	viewModel: React.PropTypes.object.isRequired,
	dataModel: React.PropTypes.object.isRequired
};