import React, { Component } from 'react';
import { View } from 'react-native';
import PropTypes from 'prop-types';

import { styles } from './styles';
import { setI18nConfig, localeChangedEvent, emitter } from '../../i18n';

export const Translation = React.createContext();

export default class TranslationProvider extends Component {
  constructor(props) {
    super(props);
    const { locale } = props;
    this.state = {
      locale,
    };
    this.onLocaleChanged = this.onLocaleChanged.bind(this);
    setI18nConfig(locale); // set initial config
  }

  componentDidMount() {
    emitter.on(localeChangedEvent, this.onLocaleChanged);
  }

  componentWillUnmount() {
    emitter.off(localeChangedEvent, this.onLocaleChanged);
  }

  onLocaleChanged(locale) {
    this.setState({ locale });
  }

  render() {
    /* eslint-disable-next-line */
    const { children } = this.props;
    const { locale } = this.state;

    return (
      <Translation.Provider
        value={{
          locale,
        }}
      >
        <View style={styles.container}>{children}</View>
      </Translation.Provider>
    );
  }
}

TranslationProvider.propTypes = {
  locale: PropTypes.string,
};
TranslationProvider.defaultProps = {
  locale: '',
};
