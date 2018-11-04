import React from 'react';
import PropTypes from 'prop-types';
import { StyleSheet } from 'react-native';
import {
  Container,
  Header,
  Left,
  Body,
  Title,
  Right,
  Icon,
  Content,
  Text,
  View,
  Toast,
} from 'native-base';

import Button from '../../atoms/Button';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: '100%',
    height: '100%',
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
    text: `hello, clicked!`,
    buttonText: 'ok',
  });
}

export default function Hello({ navigation }) {
  return (
    <Container style={styles.container}>
      <Header>
        <Left>
          <Icon name="menu" onPress={() => navigation.openDrawer()} />
        </Left>
        <Body>
          <Title>Hello</Title>
        </Body>
        <Right />
      </Header>
      <Content contentContainerStyle={styles.contentContainer}>
        <View>
          <Button onPress={() => handleClick()}>
            <Text>Hello!!</Text>
          </Button>
        </View>
      </Content>
    </Container>
  );
}

Hello.propTypes = {
  navigation: PropTypes.object,
};
