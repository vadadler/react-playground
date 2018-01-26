import Info from '../dumb/info';
import Login from './login';
import {observer} from 'mobservable-react';
import React from 'react';

/**
*
*/

@observer
export default class Empty extends React.Component {
  render() {
    const { dataModel }  = this.props;

    return (<div/>);
  }
}

Empty.propTypes = {
	viewModel: React.PropTypes.object.isRequired,
	dataModel: React.PropTypes.object.isRequired
};
