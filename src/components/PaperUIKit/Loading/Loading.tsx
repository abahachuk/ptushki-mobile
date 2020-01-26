import React from 'react';
import { ActivityIndicator } from 'react-native';
import { Modal } from 'react-native-paper';
import { blueLight } from '../../../constants/colors';

interface LoadingProps {
  visible: boolean;
}

const Loading: React.FC<LoadingProps> = ({ visible }) => {
  return (
    <Modal visible={visible} dismissable={false}>
      <ActivityIndicator size={50} color={blueLight} />
    </Modal>
  );
};

export default Loading;
