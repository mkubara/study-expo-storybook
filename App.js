import React from 'react';
import { Root } from 'native-base';
import { AppLoading } from 'expo';
import { createDrawerNavigator } from 'react-navigation';
import { Icon } from 'native-base';

import Hello from './Hello';
import Page from './Page';

const AppNavigator = createDrawerNavigator({
  Hello: {
    screen: Hello,
    navigationOptions: { drawerLabel: 'Hello', drawerIcon: () => <Icon name="home" /> },
  },
  Page: {
    screen: Page,
    navigationOptions: { drawerLabel: 'Page', drawerIcon: () => <Icon name="person" /> },
  },
});

export default class App extends React.Component {
  constructor() {
    super();
    this.state = { isReady: false };
  }

  componentWillMount() {
    this.loadFonts();
  }

  async loadFonts() {
    await Expo.Font.loadAsync({
      Roboto: require('./node_modules/native-base/Fonts/Roboto.ttf'),
      Roboto_medium: require('./node_modules/native-base/Fonts/Roboto_medium.ttf'),
    });
    this.setState({ isReady: true });
  }

  render() {
    if (!this.state.isReady) return <AppLoading />;

    return (
      <Root>
        <AppNavigator />
      </Root>
    );
  }
}
