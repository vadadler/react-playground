import {AppContainer} from 'react-hot-loader'
import Application from './components/smart/application';
import React from 'react';
import ReactDOM from 'react-dom';
//import Routes from './routes'
//import registerServiceWorker from './registerServiceWorker';

import DataModel from './stores/data-model';

document.documentElement.style.height='100%';
document.body.style.height='100%';

const rootDiv = document.createElement('div');
rootDiv.style.height = '100%';

document.body.appendChild(rootDiv);

let dataModel = new DataModel();

ReactDOM.render(
    <Application dataModel={dataModel} />, 
    rootDiv);

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
  