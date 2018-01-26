import {extendObservable} from 'mobx';
import {Screen} from '../constants';

/*
* Store to keep:
* - session information
* - application version
* - visibility of components
*/

export default class ViewModel {
  constructor() {
    extendObservable(this, {
      // TODO: Wrong place. Figure out how to configure endpoint URL.
      endpoint: '',

      // Application version number from package.json version key.
      appVersion: process.env.npm_package_version,

      // State of the progress bar.
      progressVisible: 'hidden',

      // State of login button.
      loginButtonDisabled: false,

      // About dialog visibility.
      aboutIsOpen: false,

      // Info dialog visibility.
      infoIsOpen: false,

      // Idex of expanded accordion item.
      selectedIndex: -1,

      // Flag to indicate AppBar needs refreshing. This is simple counter. Incrementing it causes AppBar.render().
      appBarRefresh: 0,

      // Flag indicating if snackbar notification is open.
      snackBarOpen: false,

      // Style properties of conditions side panel. Used for aninmation.
      condtionsWidth: '0px',
      conditionsPaddingLeft: '0px',

      // Specifies which screen is currently active/visible.
      activeScreen: Screen.EMPTY,

      // Flag to trigger popover to open or close.
      popoverIsOpen: false,

      // Flag indicating text field change on a popover.
      isNameChanged: false,

      // Value to show when popover is open.
      popoverValue: '',
    });
  }
}
