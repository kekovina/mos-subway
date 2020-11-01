import React, { Component } from "react";
import { View, Text, StyleSheet } from "react-native";
import Svg, { Rect, Path, Ellipse } from "react-native-svg";

const styles = StyleSheet.create({
  point: {
    position: "absolute",
    top: 8,
    left: -11,
  },
  wrap: {
    paddingHorizontal: 25,
  },
  text: {
    paddingLeft: 10,
    fontSize: 14,
    lineHeight: 30,
  },
  line: {
    borderLeftWidth: 7.17,
    height: 30,
  },
});

class RegularPoint extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <View style={{ ...styles.line, borderLeftColor: this.props.color }}>
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
        <Text style={styles.text}>{this.props.name}</Text>
      </View>
    );
  }
}

export default RegularPoint;
