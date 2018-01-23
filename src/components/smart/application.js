import {DragDropContext} from 'react-dnd';
//import AppCanvas from '../smart/app-canvas';
//import auth from '../../classes/auth-service';
//import Colors from 'material-ui/lib/styles/colors';
//import Helmet from 'react-helmet';
import HTML5Backend from 'react-dnd-html5-backend';
import {observer} from 'mobx-react';
import PropTypes from 'prop-types';
import React from 'react';
//import utils from '../../classes/utils';

@DragDropContext(HTML5Backend)
@observer
export default class Application extends React.Component {
  static propTypes = {
    dataModel: PropTypes.object.isRequired
  };

  render() {
    const {dataModel} = this.props;
    //const styles = this.getStyles();

    return (
      <div>
        Hello 2!
      </div>
   );
  }
}
