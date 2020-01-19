import React from 'react';
import { KeyboardAvoidingView } from 'react-native';
import PropTypes from 'prop-types';

import getDescriptionBlock from './DescriptionBlock';
import { translate } from '../../../i18n';
import { styles } from '../styles';
import { Input } from '../../../components';

const RingsSection = props => {
  const { rings, setRingsValues } = props;

  const onFieldValueChange = ringKey => fieldName => itemValue => {
    const ringQuantity = `${ringKey || 1}`;

    setRingsValues({
      ...rings,
      [ringQuantity]: { ...rings[ringQuantity], [fieldName]: itemValue },
    });
  };

  return (
    <KeyboardAvoidingView style={styles.ringsSectionContainer}>
      {getDescriptionBlock(
        translate('addEditObservation.ringHeader'),
        translate('addEditObservation.ringDescription'),
      )}

      <Input
        onChangeText={text => {
          onFieldValueChange(text);
        }}
        wrapperStyles={[styles.customInput, styles.ringField]}
        customViewStyles={styles.customView}
        customTextStyles={styles.customText}
        value={rings}
        label={translate('addEditObservation.ringNumber')}
      />
    </KeyboardAvoidingView>
  );
};

RingsSection.propTypes = {
  rings: PropTypes.object.isRequired,
  setRingsValues: PropTypes.func.isRequired,
};

export default RingsSection;
