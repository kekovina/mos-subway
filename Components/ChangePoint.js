import React, { Component } from "react";
import { View, Text, StyleSheet } from "react-native";
import Svg, { Rect, Path, Ellipse } from "react-native-svg";

const styles = StyleSheet.create({
  line: {
    height: 45,
    marginVertical: 25,
  },
  point1: {
    position: "absolute",
    top: -5,
    left: -4,
  },
  point2: {
    position: "absolute",
    top: 15,
    left: -4,
  },
  point3: {
    position: "absolute",
    top: 35,
    left: -4,
  },
  content: {
    color: "#d4d2d6",
    paddingLeft: 15,
    flexDirection: "row",
    justifyContent: "space-evenly",
    alignItems: "center",
    height: "100%",
  },
});

class ChangePoint extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <View style={styles.line}>
        <Svg
          width={15}
          height={15}
          viewBox="0 0 15 15"
          fill="none"
          style={styles.point1}
        >
          <Ellipse cx={7.5} cy={7.48357} rx={7} ry={6.67136} fill="#d4d2d6" />
        </Svg>
        <Svg
          width={15}
          height={15}
          viewBox="0 0 15 15"
          fill="none"
          style={styles.point2}
        >
          <Ellipse cx={7.5} cy={7.48357} rx={7} ry={6.67136} fill="#d4d2d6" />
        </Svg>
        <Svg
          width={15}
          height={15}
          viewBox="0 0 15 15"
          fill="none"
          style={styles.point3}
        >
          <Ellipse cx={7.5} cy={7.48357} rx={7} ry={6.67136} fill="#d4d2d6" />
        </Svg>
        <View style={styles.content}>
          <Svg width={17} height={25} viewBox="0 0 17 25" fill="none">
            <Path
              d="M15.627 12.64l-3.042-1.755a1.303 1.303 0 01-.495-.628l-.942-3.205a.74.74 0 00-.102-.215.803.803 0 00-.707-.423l-4.022.173a.798.798 0 00-.474.185c-.027.017-.055.033-.08.051L3.032 8.931c-.316.243-.493.739-.402 1.127l1.082 4.655a.904.904 0 00.946.678l.404-.04a.754.754 0 00.535-.302.754.754 0 00.124-.602l-.77-3.594a.668.668 0 01.215-.585l.487-.375.25 5.77c0 .007.003.012.003.019l-1.11 2.464c-.14.31-.492.74-.768.938L1.422 20.96c-.42.302-.578.905-.36 1.375l.355.77a.824.824 0 00.745.498c.18 0 .36-.062.515-.178l3.44-2.56c.342-.256.764-.752.96-1.131l1.717-3.307c.014-.026.023-.055.034-.082l.12-.006 2.81 7.747a1.4 1.4 0 001.727.85l.174-.054a1.294 1.294 0 00.83-1.686l-2.959-8.157c-.013-.038-.032-.072-.048-.108l-.095-2.189 3.262 1.695a.819.819 0 001.095-.335l.194-.358a.827.827 0 00-.311-1.103zM7.884 5.832a2.917 2.917 0 10-2.911-2.79 2.91 2.91 0 002.911 2.79z"
              fill="#8A8A8A"
            />
          </Svg>
          <View>
            <Text>{this.props.title}</Text>
            <Text style={styles.time}>{this.props.duration} мин.</Text>
          </View>
        </View>
      </View>
    );
  }
}

export default ChangePoint;
