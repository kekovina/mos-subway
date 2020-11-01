import React, { Component } from "react";
import { ScrollView, View, Text, StyleSheet } from "react-native";
import Svg, { Rect, Path, Ellipse } from "react-native-svg";
import ChangePoint from "./ChangePoint";
import StartPoint from "./StartPoint";
import RegularPoint from "./RegularPoint";
import EndPoint from "./EndPoint";
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
    this.state = {};
    if (typeof this.props.path == "object") {
      console.log(this.props.path);
    }
  }
  render() {
    return (
      <View style={styles.wrap}>
        <StartPoint name={this.props.from.n} color={this.props.from.color} />

        <RegularPoint name="Серпуховская" color="#ebac0c" />
        <RegularPoint name="Серпуховская" color="#ebac0c" />
        <EndPoint name="Серпуховская" color="#ebac0c" middle />
        <ChangePoint title="Переход на краснопресненскую" duration="5" />
        <StartPoint name="Тимирязевская" color="#ebac0c" middle />
        <EndPoint name={this.props.to.n} color={this.props.to.color} />
      </View>
    );
  }
}

export default ListPath;
