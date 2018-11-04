import React from 'react';
import PropTypes from 'prop-types';
import { Button as NbButton } from 'native-base';

export default function Button({ children, onPress }) {
  return <NbButton onPress={onPress ? () => onPress() : undefined}>{children}</NbButton>;
}

Button.propTypes = {
  children: PropTypes.node,
  onPress: PropTypes.func,
};
