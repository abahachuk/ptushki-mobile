import React from 'react';
import { Icon } from 'react-native-vector-icons/Icon';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import Octicons from 'react-native-vector-icons/Octicons';

import { styles } from './styles';

type Props = {
  name: string;
  type: string;
  focused: boolean;
  tintColor: string;
};

const iconByType: {
  [typeName: string]: typeof Icon;
} = {
  FontAwesome,
  Octicons,
};

export const DrawerIcon: React.FC<Props> = ({ type, name }): React.ReactElement => {
  const Icon = iconByType[type];

  return <Icon name={name} style={styles.icon} />;
};

export default DrawerIcon;
