import utils from './utils';
import {Screen} from '../constants';

class AuthService {
  setToken(token) {
    localStorage.csrf = token;
  }

  getToken() {
    return localStorage.csrf;
  }

  deleteToken() {
    delete localStorage.csrf;
  }

  logout(properties) {
    let Promise = this.Promise || require('promise');
    let agent = require('superagent-promise')(require('superagent'), Promise);

    // Logout.
    agent('GET', properties.viewModel.endpoint + '/api/v1/users/logout')
      .then(function onResult(res) {
      }, function onError(err) {
      });

    this.deleteToken();

    //properties.viewModel.activeScreen = Screen.LOGIN;
    //utils.transitionToScreen(properties.viewModel, '');
    //utils.resetViewModel(properties.viewModel);
    //utils.transitionToScreen(properties.viewModel, Screen.LOGIN);
  }

  loggedIn() {
    return !!localStorage.csrf;
  }
}

export default new AuthService();
