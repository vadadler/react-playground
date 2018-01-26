import {AppContainer} from 'react-hot-loader'
import Application from './components/smart/application';
import React from 'react';
import ReactDOM from 'react-dom';
//import Routes from './routes'
//import registerServiceWorker from './registerServiceWorker';

import DataModel from './stores/data-model';
import ViewModel from './stores/view-model';

let dataModel = new DataModel();
let viewModel = new viewModel();

ReactDOM.render(
    <AppContainer>
        <Application dataModel={dataModel} viewModel={viewModel} />
    </AppContainer>,
    document.getElementById('app'));

    //registerServiceWorker();

  // Hot Module Replacement API
//   if (module.hot) {
//     module.hot.accept('./components/smart/application', () => {
//         const Application = require('./components/smart/application').default;
//         ReactDOM.render(
//             <AppContainer>
//                 <Application dataModel={dataModel} />
//             </AppContainer>,
//             rootDiv
//         );
//     });
//   }
  