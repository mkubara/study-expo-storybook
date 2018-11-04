import React from 'react';
import { Text } from 'native-base';
import { storiesOf } from '@storybook/react-native';

import Button from '..';
import CenterView from '../../CenterView'

storiesOf('atoms/Button', module)
  .addDecorator(getStory => <CenterView>{getStory()}</CenterView>)
  .add('with text', () => (
    <Button>
      <Text>Hello Button!</Text>
    </Button>
  ))
  .add('with some emoji', () => (
    <Button>
      <Text>😀 😎 👍 💯</Text>
    </Button>
  ));