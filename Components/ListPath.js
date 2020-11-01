import React, { Component } from "react";
import { ScrollView, View, Text, StyleSheet } from "react-native";
import Svg, { Rect, Path, Ellipse } from "react-native-svg";
import ChangePoint from "./ChangePoint";
import StartPoint from "./StartPoint";
import RegularPoint from "./RegularPoint";
import EndPoint from "./EndPoint";
import { pathfinder, getStation } from "../utils/functions";
// import { ScrollView } from "react-native-gesture-handler";

const styles = StyleSheet.create({
  line: {
    borderLeftWidth: 7,
    borderLeftColor: "#c4c4c4",
    justifyContent: "flex-start",
    flexDirection: "column",
    paddingLeft: 21.5,
    fontSize: 18,
    height: 30,
  },
  point: {
    position: "absolute",
    top: 3,
    left: -11,
  },
  wrap: {
    paddingHorizontal: 25,
  },
  scroll: {
    margin: 0,
    padding: 0,
  },
});
class ListPath extends Component {
  constructor(props) {
    super(props);
    this.state = { path: "" };
  }
  refreshData() {
    if (this.props.from != "" && this.props.to != "") {
      const res = pathfinder(this.props.from.z, this.props.to.z);
      return res;
    }
    return null;
  }
  render() {
    const path = this.refreshData();
    if (path) {
      const start = path.shift();
      console.log(start);
      const end = path.pop();
      return (
        <View style={styles.wrap}>
          <StartPoint name={start.n} color={getStation(start.n).color} />
          {path.map((item) => {
            if (item.t == "change") {
              return (
                <ChangePoint
                  title="Переход на другую ветку"
                  duration={item.d}
                />
              );
            } else {
              return (
                <RegularPoint name={item.n} color={getStation(item.n).color} />
              );
            }
          })}
          <EndPoint name={end.n} color={getStation(end.n).color} />
        </View>
      );
    } else {
      return (
        <View style={styles.wrap}>
          <Text>Введите названия станций</Text>
        </View>
      );
    }
  }
}

export default ListPath;
