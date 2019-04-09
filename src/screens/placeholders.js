import React from "react";
import { Text, View, Button } from "react-native";

// temporary components for navigation flow
/* eslint react/prop-types: 0 */
export const passwordResetScreen = props => {
  const { navigation } = props;

  return (
    <View>
      <Text>Восстановление пароля</Text>
      <Text>Введите ваш e-mail</Text>
      <Text>E-mail</Text>
      <Button
        title="Выслать новый пароль"
        onPress={() => {
          navigation.navigate("passwordResetDone");
        }}
      />
      <Button
        title="Назад"
        onPress={() => {
          navigation.navigate("login");
        }}
      />
    </View>
  );
};

export const passwordResetDoneScreen = props => {
  const { navigation } = props;

  return (
    <View>
      <Text>Мы выслали вам новый пароль</Text>
      <Text>проверьте ваш e-mail</Text>
      <Button
        title="Перейти ко входу"
        onPress={() => {
          navigation.navigate("login");
        }}
      />
    </View>
  );
};

export const registrationSuccessScreen = props => {
  const { navigation } = props;

  return (
    <View>
      <Text>Ура! Регистрация произошла</Text>
      <Text>проверьте ваш e-mail</Text>
      <Button
        title="Перейти ко входу"
        onPress={() => {
          navigation.navigate("login");
        }}
      />
    </View>
  );
};

export const mainPageScreen = props => {
  const { navigation } = props;

  return (
    <View>
      <Text>У вас еще нет наблюдений</Text>
      <Text>Самое время добавить</Text>
      <Button
        title="Добавить"
        onPress={() => {
          navigation.navigate("login");
        }}
      />
    </View>
  );
};
