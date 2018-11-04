import React from 'react';
import { createDrawerNavigator } from 'react-navigation';
import { Icon } from 'native-base';

import Hello from '../Hello';
import Another from '../Another';

export default function AppNavigator() {
  return createDrawerNavigator({
    Hello: {
      screen: Hello,
      navigationOptions: { drawerLabel: 'Hello', drawerIcon: () => <Icon name="home" /> },
    },
    Another: {
      screen: Another,
      navigationOptions: { drawerLabel: 'Another', drawerIcon: () => <Icon name="person" /> },
    },
  });
}
