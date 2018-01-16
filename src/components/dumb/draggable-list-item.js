import React, {PropTypes} from 'react';
import Paper from 'material-ui/lib/paper';
import ListItem from 'material-ui/lib/lists/list-item';
import {DragSource} from 'react-dnd';
import {ItemTypes} from '../../constants';

const enabledStyle = {
  cursor: 'move',
};

const disabledStyle = {
  cursor: 'default',
  backgroundColor: 'lightgrey'
}

/**
 * Implements the drag source contract.
 */
const conditionSource = {
  beginDrag(props) {
    return {
      item: props.data.obj
    };
  },
  canDrag(props) {
    return props.data.enabled;
  }
};

@DragSource(ItemTypes.CONDITION, conditionSource, (connect, monitor) => ({
  connectDragSource: connect.dragSource(),
  isDragging: monitor.isDragging()
}))
export default class DraggableListItem extends React.Component {
  static propTypes = {
    connectDragSource: PropTypes.func.isRequired,
    isDragging: PropTypes.bool.isRequired,
    showCopyIcon: PropTypes.bool,
    key: PropTypes.number,
    data: React.PropTypes.object.isRequired       // Item data.
  };

  render() {
    const {isDragging, connectDragSource, showCopyIcon, key, data} = this.props;
    const dropEffect = showCopyIcon ? 'copy' : 'move';
    const style = data.enabled ? enabledStyle : disabledStyle;

    return (
      connectDragSource(
        <div style={{marginBottom: '10px'}}>
          <Paper>
            <ListItem
              innerDivStyle={{fontSize:'14px', textAlign:'center'}}
              disabled={true} key={key} primaryText={data.name}
              style={{...style}} />
          </Paper>
        </div>,
        {dropEffect}
      )
    );
  }
}
