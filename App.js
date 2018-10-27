import React from 'react';
import { StyleSheet } from 'react-native';
import Expo from 'expo';
import { Root, Container, Header, Content, Button, Text, View, Toast } from 'native-base';

const styles = StyleSheet.create({
  header: {
    alignItems: 'center',
    justifyContent: 'center',
  },
  headerText: {
    color: 'white',
  },
  contentContainer: {
    flex: 1,
    padding: 32, // must be number
    alignItems: 'center', // must be container style
    justifyContent: 'center', // must be container style
    backgroundColor: '#fff',
  },
});

function handleClick() {
  Toast.show({
    text: 'clicked!',
    buttonText: 'ok',
  });
}

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
    if (!this.state.isReady) return <Expo.AppLoading />;

    return (
      <Root>
        <Container>
          <Header style={styles.header}>
            <Text style={styles.headerText}>Header</Text>
          </Header>
          <Content contentContainerStyle={styles.contentContainer}>
            <View>
              <Button onPress={() => handleClick()}>
                <Text>Hello!!</Text>
              </Button>
            </View>
          </Content>
        </Container>
      </Root>
    );
  }
}
