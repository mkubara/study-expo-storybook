import React from 'react';
import { Text } from 'native-base';
import { storiesOf } from '@storybook/react-native';

import CenterView from '..';

storiesOf('atoms/CenterView', module)
  .add('with text', () => (
    <CenterView>
      <Text>Hello!</Text>
    </CenterView>
  ))
  .add('with some emoji', () => (
    <CenterView>
      <Text>😀 😎 👍 💯</Text>
    </CenterView>
  ));
