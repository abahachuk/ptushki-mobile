import React from "react";
import { DrawerItems } from "react-navigation";
import { View, Text, SafeAreaView, ScrollView, Image } from "react-native";
import { Divider } from "react-native-elements";
import { translate } from "../../i18n";
import { styles } from "./styles";
import LogoutButton from "./LogoutButton";

const logo = require("./../../assets/logotype/logotype2x.png");

// TODO: replace Ivan on line 18 with actual user name
const TopLevelMenu = props => (
  <SafeAreaView style={styles.safeArea}>
    <View style={styles.imageContainer}>
      <Image resizeMode="contain" style={styles.image} source={logo} />
    </View>
    <View>
      <Text style={styles.userNameText}>Иван Иванов</Text>
    </View>
    <View>
      <Text style={styles.userRoleText}>
        {translate("topLevelMenu.userRole")}
      </Text>
    </View>
    <Divider style={styles.divider} />
    <ScrollView>
      <DrawerItems {...props} />
      <LogoutButton {...props} />
    </ScrollView>
  </SafeAreaView>
);

export default TopLevelMenu;
