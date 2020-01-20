import React from 'react';
import { Dialog, Paragraph, Text } from 'react-native-paper';
import { ErrorType } from "../../../entities";
import Button, { ButtonType } from "../Button";
import styles from "./styles";


interface ErrorModalProps {
  error?: ErrorType,
  action: () => void
}

const ErrorModal: React.FC<ErrorModalProps>  = ({ error, action = () => {} }) => {
  if (!error) return null;
  const { message } = error;
  return (
    <Dialog
      visible
      dismissable={false}>
      <Dialog.Title>Error</Dialog.Title>
      <Dialog.Content>
        <Paragraph><Text style={styles.message}>{message}</Text></Paragraph>
      </Dialog.Content>
      <Dialog.Actions>
        <Button title="OK" type={ButtonType.TEXT} onPress={action} />
      </Dialog.Actions>
    </Dialog>

  );
};

export default ErrorModal;