import React from 'react';
import { Button as NbButton } from 'native-base';

export default function Button({ children, onPress }) {
  return <NbButton onPress={onPress ? () => onPress() : undefined}>{children}</NbButton>;
}
