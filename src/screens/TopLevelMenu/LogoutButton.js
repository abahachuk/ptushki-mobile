import React from "react";
import PropTypes from "prop-types";
import { View, Text, AsyncStorage } from "react-native";
import Icon from "react-native-vector-icons/SimpleLineIcons";
import { translate } from "../../i18n";
import { styles } from "./styles";

const LogoutButton = props => {
  const onLogout = async () => {
    await AsyncStorage.clear();
    props.navigation.navigate("auth");
  };

  return (
    <View style={styles.iconContainer}>
      <Icon.Button
        name="login"
        color="black"
        backgroundColor="white"
        size={23}
        onPress={onLogout}
        style={styles.icon}
      >
        <Text style={styles.iconText}>{translate("topLevelMenu.exit")}</Text>
      </Icon.Button>
    </View>
  );
};

LogoutButton.propTypes = {
  navigation: PropTypes.shape({
    navigate: PropTypes.func
  }).isRequired
};

export default LogoutButton;
