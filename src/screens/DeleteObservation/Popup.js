import React, { Component } from "react";
import PropTypes from "prop-types";
import {
  View,
  UIManager,
  findNodeHandle,
  TouchableOpacity,
  Image
} from "react-native";

/*eslint-disable */
const dotsIcon = require("assets/three-dots-menu/dots-vertical-black.png");
/* eslint-enable */

export default class PopupMenu extends Component {
  constructor(props) {
    super(props);
    this.state = {
      icon: null
    };

    this.onPress = () => {
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
    };
  }

  onError() {
    console.log(
      "Popup Error: invalid arguments were passed to UIManager.showPopupMenu()"
    );
    this.setState({ icon: null });
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
          <Image resizeMode="contain" source={dotsIcon} ref={onRef} />
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
