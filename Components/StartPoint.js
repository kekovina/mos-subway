import React, { Component } from "react";
import { View, Text, StyleSheet } from "react-native";
import Svg, { Rect, Path, Ellipse } from "react-native-svg";

const styles = StyleSheet.create({
  point: {
    position: "absolute",
    top: -2,
    left: -4,
  },
  wrap: {
    paddingHorizontal: 25,
  },
  text: {
    position: "absolute",
    top: -12,
    left: 20,
    fontSize: 22,
  },
  wrap: {
    height: 128,
  },
  line: {
    top: -97,
  },
  middle: {
    fontSize: 18,
    position: "absolute",
    top: -9,
    left: 20,
  },
});

class StartPoint extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <View style={styles.wrap}>
        <Svg
          width={12}
          height={225}
          fill="none"
          viewBox="0 0 10 10"
          style={styles.line}
        >
          <Path fill={this.props.color} d="M0 0H6V146H0z" />
        </Svg>
        <Svg
          width={15}
          height={15}
          viewBox="0 0 15 15"
          fill="none"
          style={styles.point}
        >
          <Ellipse
            cx={7.5}
            cy={7.48357}
            rx={7}
            ry={6.67136}
            fill={this.props.color}
          />
        </Svg>
        <Text style={this.props.middle ? styles.middle : styles.text}>
          {this.props.name}
        </Text>
      </View>
    );
  }
}

export default StartPoint;
