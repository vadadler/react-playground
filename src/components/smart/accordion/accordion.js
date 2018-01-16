import React from 'react';
import Dialog from 'material-ui/lib/dialog';
import FlatButton from 'material-ui/lib/flat-button';
import RaisedButton from 'material-ui/lib/raised-button';
import ClearFix from 'material-ui/lib/clearfix';
import {observer} from 'mobservable-react';
import AccordionItem from './accordion-item';

@observer
export default class Accordion extends React.Component {
  render() {
    const {dataModel, viewModel, data} = this.props;
    let accordionInstance = this;

    return (
      <div>
        {
          data.map(function (element, i) {
            return <AccordionItem  key={i} data={element} index={i}
              dataModel={dataModel} viewModel={viewModel} selectedIndex={viewModel.selectedIndex} />
          })
        }
      </div>
    );
  }
}

AccordionItem.propTypes = {
  viewModel: React.PropTypes.object.isRequired, // View store.
  dataModel: React.PropTypes.object.isRequired, // Data store.
}
