
import auth from '../../classes/auth-service';
import Dialog from 'material-ui/dialog';
import Button from 'material-ui/button';
import React from 'react';
import PropTypes from 'prop-types';
import {observer} from 'mobx-react';
import {Screen} from '../../constants';
import utils from '../../classes/utils';

/**
* Informational dialog.
*/

@observer
export default class Info extends React.Component {
  constructor(props) {
    super(props);
  }

  handleClose = () => {
    this.props.viewModel.infoIsOpen = false;
    this.props.viewModel.infoTitle ='';
    this.props.viewModel.infoText = '';
    if(auth.loggedIn() !== true) {
      // Assume if not logged in show login screen.
      this.props.viewModel.activeScreen = Screen.LOGIN;
    }
  };

  render() {
    const dataModel = this.props.dataModel;
    const viewModel = this.props.viewModel;

    const actions = [
      <Button
        label={utils.translate('buttons.ok')}
        onTouchTap={this.handleClose}
      />,
    ];

    return (
      <div>
        <Dialog
          title={viewModel.infoTitle}
          actions={actions}
          modal={true}
          open={this.props.viewModel.infoIsOpen}
        >
          {viewModel.infoText}
        </Dialog>
      </div>
    );
  }
}

Info.propTypes = {
	viewModel: PropTypes.object.isRequired,
	dataModel: PropTypes.object.isRequired
};
