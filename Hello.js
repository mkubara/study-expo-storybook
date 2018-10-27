import React from 'react';
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
  Button,
  Text,
  View,
  Toast,
} from 'native-base';

const styles = StyleSheet.create({
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
    <Container>
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
