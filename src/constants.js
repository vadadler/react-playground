import React from 'react';
import grey from 'material-ui/colors';
import DeviceDevices from 'material-ui-icons/devices';
import HardwareDeviceHub from 'material-ui-icons/devicehub';
import MapsPlace from 'material-ui-icons/place';
import MapsDirectionsWalk from 'material-ui-icons/directionswalk';
import SocialPerson from 'material-ui-icons/person';

export const ItemTypes = {
  CONDITION: 'condition',
  POLICY: 'policy'
};

// Icons.
let connectionIcon = <HardwareDeviceHub color={grey}/>;
let deviceIcon = <DeviceDevices color={700}/>;
let locationIcon = <MapsPlace color={700}/>;
let identityIcon = <SocialPerson color={700}/>;

export const CategoryIcons = {
  'CONNECTION': connectionIcon,
  'DEVICE': deviceIcon,
  'LOCATION': locationIcon,
  'IDENTITY': identityIcon
};

// Name of screens. Used when transitioning between screens.
export const Screen = {
  DASHBOARD: 'dashboard',
  POLICY: 'policy',
  APPLICATIONS: 'applicaions',
  CONNECTIONS: 'connections',
  ANALYTICS: 'analytics',
  LOGIN: 'login',
  SETTINGS: 'settings',
  EMPTY: ''
};
