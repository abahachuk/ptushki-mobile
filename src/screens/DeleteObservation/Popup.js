import React, { Component } from "react";
import PropTypes from "prop-types";
import {
  View,
  UIManager,
  findNodeHandle,
  TouchableOpacity
} from "react-native";
import Icon from "react-native-vector-icons/MaterialCommunityIcons";

const ICON_SIZE = 24;

export default class PopupMenu extends Component {
  constructor(props) {
    super(props);
    this.state = {
      icon: null
    };

    this.onPress = this.onPress.bind(this);
  }

  onError() {
    console.log("Popup Error");
    this.setState({ icon: null });
  }

  onPress() {
    const { icon } = this.state;
    const { actions, onPress } = this.props;

    if (icon) {
      UIManager.showPopupMenu(
        findNodeHandle(icon),
        actions,
        this.onError,
        onPress
      );
    }
  }

  render() {
    const { onPress } = this;
    /* eslint-disable */
    const onRef = icon => {
      if (!this.state.icon) {
        this.setState({ icon });
      }
    };
    /* eslint-enable */
    return (
      <View>
        <TouchableOpacity onPress={onPress}>
          <Icon name="dots-vertical" size={ICON_SIZE} color="red" ref={onRef} />
        </TouchableOpacity>
      </View>
    );
  }
}

PopupMenu.propTypes = {
  actions: PropTypes.arrayOf(PropTypes.string),
  onPress: PropTypes.func
};

PopupMenu.defaultProps = {
  actions: [""],
  onPress: () => {}
};
