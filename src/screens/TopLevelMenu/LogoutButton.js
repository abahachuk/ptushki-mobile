import React from 'react';
import PropTypes from 'prop-types';
import { Text, TouchableOpacity } from 'react-native';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';

import { instanceAuthService } from 'api';
import { icons } from 'constants/icons';
import { translate } from '../../i18n';
import { styles } from './styles';

const LogoutButton = props => {
  const onLogout = () => {
    instanceAuthService
      .logOut()
      .then(() => props.navigation.navigate('auth'))
      .catch(err => console.info(err));
  };

  return (
    <TouchableOpacity onPress={onLogout} style={styles.iconContainer}>
      <FontAwesome5 name={icons.exit} style={styles.icon} />
      <Text style={styles.iconText}>{translate('topLevelMenu.exit')}</Text>
    </TouchableOpacity>
  );
};

LogoutButton.propTypes = {
  navigation: PropTypes.shape({
    navigate: PropTypes.func,
  }).isRequired,
};

export default LogoutButton;
