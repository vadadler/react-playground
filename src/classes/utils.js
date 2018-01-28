import {Screen} from '../constants';
import auth from './auth-service';
import React from 'react';
import ReactDOM from 'react-dom';

class Utils {
  constructor() {
    this.counterpart = require('counterpart');
  }

  // Return true if application is running in development mode.
  // Otherwise return false.
  // NODE_ENV is set in scripts section of package.json
  isDebug() {
    return (process.env.NODE_ENV !== 'production');
  }

  // Set locale.
  setLocale(locale) {
    this.counterpart.setLocale(locale);
    if (locale === 'en') {
      this.counterpart.registerTranslations('en', require('../locales/en'));
    }
  }

  // Translate value of the passed in key based on set locale.
  translate(key) {
    if (this.counterpart === null) {
      console.log('Utils.translate counterpart has not been set.')
      setLocale('en');
    }
    return (this.counterpart.translate(key));
  }

  // Reset application data model.
  clearDataModel(dataModel) {
    dataModel.policyGroup = {};
    dataModel.policyGroup.categories = [];
    dataModel.policyGroup.policies  = [];
    dataModel.policyGroup.conditionTypes = [];
    dataModel.policyGroup.conditionTypesGrouped = [];
    dataModel.policyGroup.orchestrators = [];
  }

  // Reset applicaiton view model.
  resetViewModel(viewModel) {
    viewModel.selectedIndex = -1;
    viewModel.activeScreen = '';
  }

  /**
  * Handle errors based on the status.
  */
  handleError(properties, error) {
    console.log('Utils.handleError: ' + error.status);
    if(properties.viewModel.infoIsOpen === true) {
      return;
    }

    if(error.status === 403) {
      // Possible server timeout or server restart.
      if(auth.loggedIn() === true) {
        properties.viewModel.infoText = 'Session timeout.';
      }
      auth.logout(properties);
      properties.viewModel.infoIsOpen = true;
      //properties.viewModel.activeScreen = Screen.Login;
    }
    else if (error.status === 500) {
      // Show error dialog.
      //properties.viewModel.activeScreen = Screen.INFO;
      properties.viewModel.infoIsOpen = true;
    }
    else {
      properties.viewModel.infoIsOpen = true;
      //properties.viewModel.activeScreen = Screen.INFO;
      //auth.deleteToken();
      //transitionToScreen(properties.viewModel, '');
    }
  }

  sortAsc (a, b, column) {
    if (a.value > b.value) {
      return 1;
    }
    if (a.value < b.value) {
      return -1;
    }

    return 0;
  };

  sortDesc (a, b, column) {
    if (a.value < b.value) {
      return 1;
    }
    if (a.value > b.value) {
      return -1;
    }
    // a must be equal to b
    return 0;
  };


  findElement(data, id) {
    if(data.id === id) {
      return data.label;
    }
    else {
      if(data.children) {
        for(let i = 0; i < data.children.length; i++) {
          let label = this.findElement(data.children[i],id);

          if(label) {
            return label;
          }
        }
      }
    }
    return null;
  };
}

export default new Utils();
