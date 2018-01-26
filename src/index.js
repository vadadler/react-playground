import {AppContainer} from 'react-hot-loader'
import Application from './components/smart/application';
import React from 'react';
import ReactDOM from 'react-dom';

import DataModel from './stores/data-model';
import ViewModel from './stores/view-model';

let dataModel = new DataModel();
let viewModel = new ViewModel();

ReactDOM.render(
    <AppContainer>
        <Application dataModel={dataModel} viewModel={viewModel} />
    </AppContainer>,
    document.getElementById('app')
);

  