import { AppRegistry } from 'react-native';
import { getStorybookUI, configure } from '@storybook/react-native';
import { loadStories } from './storyLoader';

// require('require-context/register');

import './rn-addons';

// automatically import all files ending in *.stories.js
// const req = require.context('../src/client', true, /.stories.jsx?$/);
// function loadStories() {
//   req.keys().forEach(filename => req(filename));
// }

// import stories
configure(() => loadStories(), module);

// Refer to https://github.com/storybooks/storybook/tree/master/app/react-native#start-command-parameters
// To find allowed options for getStorybookUI
const StorybookUIRoot = getStorybookUI({});

// If you are using React Native vanilla and after installation you don't see your app name here, write it manually.
// If you use Expo you can safely remove this line.
AppRegistry.registerComponent('%APP_NAME%', () => StorybookUIRoot);

export default StorybookUIRoot;
