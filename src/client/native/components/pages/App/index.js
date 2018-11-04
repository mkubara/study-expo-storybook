import React from 'react';
import { Root } from 'native-base';
import { AppLoading } from 'expo';

import AppNavigator from './navigator';

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
      Roboto: require('../../../../../../node_modules/native-base/Fonts/Roboto.ttf'),
      Roboto_medium: require('../../../../../../node_modules/native-base/Fonts/Roboto_medium.ttf'),
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
