import React from "react";
import { Text, ScrollView, KeyboardAvoidingView, View } from "react-native";
import { Input, Button } from "react-native-elements";
import Icon from "react-native-vector-icons/Ionicons";
import { styles } from "./styles";
import { translate } from "../../i18n";

const Settings = () => {
  return (
    <ScrollView
      contentContainerStyle={styles.scrollContainer}
      showsVerticalScrollIndicator={false}
      enabled
    >
      <KeyboardAvoidingView style={styles.container} enabled>
        <Text style={styles.headerText}>
          {translate("settings.profileSettings")}
        </Text>

        <Text style={styles.hintText}>{translate("settings.email")}</Text>
        <View style={styles.inputContainer}>
          <Input
            placeholder=""
            label={translate("settings.email")}
            labelStyle={styles.inputLabel}
          />
        </View>
        <View style={styles.buttonContainer}>
          <Button
            title={translate("settings.refresh")}
            type="outline"
            buttonStyle={styles.buttonContainer}
            titleStyle={styles.buttonTitleStyle}
          />
        </View>

        <Text style={styles.hintText}>{translate("settings.password")}</Text>

        <View style={styles.inputContainer}>
          <Input
            placeholder=""
            label={translate("settings.oldPassword")}
            labelStyle={styles.inputLabel}
          />
          <Input
            placeholder=""
            label={translate("settings.newPassword")}
            labelStyle={styles.inputLabel}
          />
        </View>
        <View style={styles.buttonContainer}>
          <Button
            title={translate("settings.refresh")}
            type="outline"
            buttonStyle={styles.buttonContainer}
            titleStyle={styles.buttonTitleStyle}
          />
        </View>

        <Text style={styles.hintText}>
          {translate("settings.personalInfo")}
        </Text>
        <View style={styles.inputContainer}>
          <Input
            placeholder=""
            label={translate("settings.firstName")}
            labelStyle={styles.inputLabel}
          />
          <Input
            placeholder=""
            label={translate("settings.lastName")}
            labelStyle={styles.inputLabel}
          />
          <Input
            placeholder=""
            label={translate("settings.phone")}
            labelStyle={styles.inputLabel}
          />
        </View>
        <View style={styles.buttonContainer}>
          <Button
            title={translate("settings.refresh")}
            type="outline"
            buttonStyle={styles.buttonContainer}
            titleStyle={styles.buttonTitleStyle}
          />
        </View>

        <Text style={styles.hintText}>{translate("settings.language")}</Text>
        <Icon.Button
          name="md-radio-button-on"
          color="black"
          backgroundColor="transparent"
        >
          <Text style={styles.radioText}>Русский</Text>
        </Icon.Button>
        <Icon.Button
          name="md-radio-button-off"
          color="black"
          backgroundColor="transparent"
        >
          <Text style={styles.radioText}>Беларуская мова</Text>
        </Icon.Button>
        <Icon.Button
          name="md-radio-button-off"
          color="black"
          backgroundColor="transparent"
        >
          <Text style={styles.radioText}>English</Text>
        </Icon.Button>
        <View style={styles.buttonContainer}>
          <Button
            title={translate("settings.apply")}
            type="outline"
            buttonStyle={styles.buttonContainer}
            titleStyle={styles.buttonTitleStyle}
          />
        </View>
      </KeyboardAvoidingView>
    </ScrollView>
  );
};

Settings.navigationOptions = () => ({
  title: translate("topLevelMenu.settings"),
  headerStyle: {
    backgroundColor: "#546E7A"
  },
  headerTintColor: "#fff",
  headerTitleStyle: {
    fontWeight: "bold"
  }
});

export default Settings;
