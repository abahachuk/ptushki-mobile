import React from 'react';
import { Text } from 'react-native';

import { styles } from './styles';

type Props = {
  text: string;
  focused: boolean;
  tintColor: string;
};

export const DrawerLabel: React.FC<Props> = ({ text, tintColor }): React.ReactElement => {
  return <Text style={[styles.text, { color: tintColor }]}>{text}</Text>;
};

export default DrawerLabel;
