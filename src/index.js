import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Application from './components/smart/application';
import App from './App';
//import registerServiceWorker from './registerServiceWorker';

import DataModel from './stores/data-model';

let dataModel = new DataModel();

ReactDOM.render(
    <Application dataModel={dataModel} />, 
    document.getElementById('root'));
//registerServiceWorker();
