import React from "react";
import { connect } from "react-redux";
import { bindActionCreators, Dispatch } from "redux";
// TODO add after update react navigator
//import { NavigationStackScreenComponent } from 'react-navigation-stack';
import { ScrollView, KeyboardAvoidingView, Text, View } from "react-native";
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

// TODO after update react navigator should use NavigationStackScreenComponent<SettingsProps>
const Settings: React.FC<SettingsProps> = ({ user, updateUserEmail, updateUserPassword, updateUserPersonalData, clearUserError }) => {
  const { email, firstName, lastName, phone, loading, error } = user;

  return (
    <View>
      <ScrollView
        contentContainerStyle={styles.scrollContainer}
        showsVerticalScrollIndicator={false}
      >
        <KeyboardAvoidingView style={styles.container} enabled>
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
    </View>
  );
};

Settings.navigationOptions = () => ({
  title: translate("topLevelMenu.settings")
});

const mapStateToProps = (state: SettingStateType) => ({
  user: state.user
});
const mapDispatchToProps = (dispatch: Dispatch) => ({
  clearUserError: bindActionCreators(clearUserError, dispatch),
  updateUserEmail: bindActionCreators(requestUpdateUserEmail, dispatch),
  updateUserPassword: bindActionCreators(requestUpdateUserPassword, dispatch),
  updateUserPersonalData: bindActionCreators(requestUpdateUserPersonalData, dispatch)
});

export default connect(mapStateToProps, mapDispatchToProps)(Settings);
