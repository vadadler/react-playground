import React from 'react';
import Colors from 'material-ui/styles/colors';
import HardwareDeviceHub from 'material-ui/svg-icons/hardware/device-hub';
import DeviceDevices from 'material-ui/svg-icons/device/devices';
import MapsPlace from 'material-ui/svg-icons/maps/place';
import MapsDirectionsWalk from 'material-ui/svg-icons/maps/directions-walk';
import SocialPerson from 'material-ui/svg-icons/social/person';

export const ItemTypes = {
  CONDITION: 'condition',
  POLICY: 'policy'
};

// Icons.
let connectionIcon = <HardwareDeviceHub color={Colors.grey700}/>;
let deviceIcon = <DeviceDevices color={Colors.grey700}/>;
let locationIcon = <MapsPlace color={Colors.grey700}/>;
let identityIcon = <SocialPerson color={Colors.grey700}/>;

export const CategoryIcons = {
  'CONNECTION': connectionIcon,
  'DEVICE': deviceIcon,
  'LOCATION': locationIcon,
  'IDENTITY': identityIcon
};
