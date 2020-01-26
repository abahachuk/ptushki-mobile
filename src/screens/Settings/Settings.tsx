import React from "react";
import { connect } from "react-redux";
import { bindActionCreators, Dispatch } from "redux";
import { NavigationScreenComponent } from "react-navigation";
import { ScrollView, KeyboardAvoidingView, Text } from "react-native";
import { translate } from "../../i18n";
import SettingsEmail from "./SettingsEmail";
import SettingsPassword from "./SettingsPassword";
import SettingsPersonalData from "./SettingsPersonalData";
import SettingsLanguage from "./SettingsLanguage";
import Loading from "../../components/PaperUIKit/Loading/Loading";
import ErrorModal from "../../components/PaperUIKit/ErrorModal/ErrorModal";
import {
  clearUserError,
  requestUpdateUserEmail,
  requestUpdateUserPassword,
  requestUpdateUserPersonalData
} from "../../components/User/actions";
import { UsersStateType } from "../../components/User/types";
import styles from "./styles";


interface SettingStateType {
  user: UsersStateType
}

interface SettingsProps {
  user: UsersStateType
  clearUserError: () => void,
  updateUserEmail: (email: string, password: string) => void,
  updateUserPassword: (password: string, newPassword: string) => void,
  updateUserPersonalData: (firstName: string, lastName: string, phone: string) => void,
}

const Settings: NavigationScreenComponent<{}, SettingsProps> = ({ name, user, updateUserEmail, updateUserPassword, updateUserPersonalData, clearUserError }) => {
  const { email, firstName, lastName, phone, loading, error } = user;

  return (
    <>
      <ScrollView
        contentContainerStyle={styles.scrollContainer}
        showsVerticalScrollIndicator={false}
      >
        <KeyboardAvoidingView style={styles.container}>
          <Text style={styles.header}>
            {translate("settings.profileSettings")}
          </Text>

          <SettingsEmail email={email} updateUserEmail={updateUserEmail}/>
          <SettingsPassword updateUserPassword={updateUserPassword}/>
          <SettingsPersonalData
            userFirstName={firstName}
            userLastName={lastName}
            userPhone={phone}
            updateUserPersonalData={updateUserPersonalData}
          />
          <SettingsLanguage />
        </KeyboardAvoidingView>
      </ScrollView>
      <ErrorModal error={error} action={clearUserError}/>
      <Loading visible={loading} />
    </>
  );
};

Settings.navigationOptions = () => ({
  title: translate("topLevelMenu.settings")
});

const mapStateToProps = (state: SettingStateType) => ({
  user: state.user
});

const mapDispatchToProps = (dispatch: Dispatch) => (bindActionCreators({
  clearUserError,
  updateUserEmail: requestUpdateUserEmail,
  updateUserPassword: requestUpdateUserPassword,
  updateUserPersonalData: requestUpdateUserPersonalData,
}, dispatch));

export default connect(mapStateToProps, mapDispatchToProps)(Settings);
