import React, {PropTypes} from 'react';
import Card from 'material-ui/lib/card/card';
import CardActions from 'material-ui/lib/card/card-actions';
import CardHeader from 'material-ui/lib/card/card-header';
import FlatButton from 'material-ui/lib/flat-button';
import CardText from 'material-ui/lib/card/card-text';
import Colors from 'material-ui/lib/styles/colors';
import List from 'material-ui/lib/lists/list';
import ListItem from 'material-ui/lib/lists/list-item';
import {observer} from 'mobservable-react';
import DraggableListItem from '../../dumb/draggable-list-item';
import {CategoryIcons} from '../../../constants';
import {Screen} from '../../../constants';

@observer
export default class AccordionItem extends React.Component {
  componentWillReceiveProps(nextProps) {
    // Collapse open item.
    if(this.props.index !== nextProps.selectedIndex) {
      this.refs.card.setState({expanded: false});
    }
  }

  render() {
    const {dataModel, viewModel, index, data} = this.props;

    var content = [
      <List style={{padding: '10px', backgroundColor: 'transparent'}}>
        {
          data.map(function (element, i) {
            // Build condition element.
            let condition = {};
            condition.conditionTypeId = element.id;
            condition.conditionName = element.displayName;
            condition.arguments = {};
            for(let i = 0; i < Object.keys(element.options).length; i++) {
              let key = Object.keys(element.options)[i];
              let value;
              if(element.options[key].type === 'array') {
                value = element.options[key].items;
              }
              else {
               value = element.options[key].required;
             }
              condition.arguments[key] = value;
            }
            return <DraggableListItem key={i} data={{id:element.id,
                name:element.displayName, enabled:true, obj: condition}} showCopyIcon/>
          })
        }
      </List>
    ];

    return (
        <Card ref='card' onExpandChange={this.handleExpandChange} style={{boxShadow: '0px', backgroundColor: 'transparent'}}>
          <CardHeader
            avatar={CategoryIcons[data[0].category.toUpperCase()]}
            title={data[0].category}
            titleColor={Colors.grey700}
            titleStyle={{position: 'relative', top: '3px'}}
            ref='header'
            actAsExpander={true}
            showExpandableButton={true}
            style={{height:'47px', padding: '12px', backgroundColor: 'transparent', opacity: '.87'}}
          >
          </CardHeader>

          <CardText expandable={true} children={content} style={{padding: '0px'}}/>
        </Card>
    );
  }

  handleExpandChange = (newExpandedState) => {
    if(newExpandedState === true) {
      this.props.viewModel.selectedIndex = this.props.index;
    }
  }
}

AccordionItem.propTypes = {
  viewModel: React.PropTypes.object.isRequired, // View store.
  dataModel: React.PropTypes.object.isRequired, // Data store.
  data: React.PropTypes.object.isRequired,      // Data to be displayed.
  index: React.PropTypes.number.isRequired,     // Index of item inside accordion.
}
