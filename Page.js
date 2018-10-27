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

export default function Page({ navigation }) {
  return (
    <Container>
      <Header>
        <Left>
          <Icon name="arrow-back" onPress={() => navigation.goBack()} />
        </Left>
        <Body>
          <Title>Another Page</Title>
        </Body>
        <Right />
      </Header>
      <Content contentContainerStyle={styles.contentContainer}>
        <View>
          <Text>Another Page</Text>
        </View>
      </Content>
    </Container>
  );
}
