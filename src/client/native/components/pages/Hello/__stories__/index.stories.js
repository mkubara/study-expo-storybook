import React from 'react';
import { Text } from 'native-base';
import { storiesOf } from '@storybook/react-native';

import Hello from '..';
import CenterView from '../../../__storybook__/CenterView';

storiesOf('pages/Hello', module)
  .addDecorator(getStory => <CenterView>{getStory()}</CenterView>)
  .add('default', () => <Hello />);
