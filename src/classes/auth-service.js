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
    // Logout.

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
