import {DragDropContext} from 'react-dnd';
import AppCanvas from '../smart/app-canvas';
import auth from '../../classes/auth-service';
import Colors from 'material-ui/lib/styles/colors';
import Helmet from 'react-helmet';
import HTML5Backend from 'react-dnd-html5-backend';
import {observer} from 'mobservable-react';
import React from 'react';
//import utils from '../../classes/utils';

@DragDropContext(HTML5Backend)
@observer
export default class Application extends React.Component {

  static propTypes = {
    dataModel: React.PropTypes.object.isRequired
  };

  render() {
    const {dataModel} = this.props;
    const styles = this.getStyles();

    return (
      <div style={styles.root}>
        Hello 2!
      </div>
   );
  }
}
