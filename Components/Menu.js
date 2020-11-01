import React, { Component } from "react";
import {
  View,
  Text,
  StyleSheet,
  TextInput,
  Dimensions,
  Image,
  Animated,
} from "react-native";

import { pathfinder } from "../utils/functions";
import ListPath from "./ListPath";
import { getStation } from "../utils/functions";
import Svg, { Rect, Path } from "react-native-svg";
import {
  PanGestureHandler,
  PinchGestureHandler,
  RotationGestureHandler,
} from "react-native-gesture-handler";
import GestureRecognizer, {
  swipeDirections,
} from "react-native-swipe-gestures";

const screen = Dimensions.get("window");
const styles = StyleSheet.create({
  wrap: {
    width: "100%",
    position: "absolute",
    bottom: -2020,
    paddingBottom: 10,
    paddingTop: 20,
    paddingLeft: 15,
    paddingRight: 15,
    backgroundColor: "#FFF",
  },
  inputs: {
    flexDirection: "row",
    alignItems: "center",
  },
  input: {
    backgroundColor: "#E3E3E3",
    paddingLeft: 20,
    paddingTop: 11,
    paddingBottom: 11,
    borderTopLeftRadius: 40,
    borderBottomLeftRadius: 10,
    fontSize: 19,
  },
  input2: {
    backgroundColor: "#E3E3E3",
    paddingLeft: 20,
    paddingTop: 11,
    paddingBottom: 11,
    borderTopRightRadius: 40,
    borderBottomRightRadius: 10,
    fontSize: 19,
  },
});

class Menu extends Component {
  constructor(props) {
    super(props);
    this.state = { focused: false, id: "", from: "", to: "", path: "" };
    this.translateY = new Animated.Value(0);
  }

  _onPanEvent = (e) => {};
  onFocusInput = (e) => {
    this.setState({ focused: true, id: e.nativeEvent.target });
    Animated.timing(this.translateY, {
      toValue: -screen.height * 0.85,
      duration: 500,
    }).start(({ finished }) => {
      if (finished) {
        this.translateY.setValue(-screen.height * 0.85);
      }
    });
  };

  componentDidUpdate() {
    if (this.state.from != "" && this.state.to != "") {
      const result = pathfinder(this.state.from.z, this.state.to.z);
      if (typeof this.state.path != "object") {
        this.setState({ path: result });
      }
    }
  }
  swipedDown = (e) => {
    Animated.timing(this.translateY, {
      toValue: 2020,
      duration: 500,
    }).start(({ finished }) => {
      if (finished) {
        console.log("А Я ФСЕ!");
        this.translateY.setValue(0);
      }
    });
    console.log("дААААААААААА!");
    console.log(e);
  };

  inputTextChangedFrom = (value) => {
    const res = getStation(value);
    if (res) {
      return this.setState({ from: res });
    }
  };
  inputTextChangedTo = (value) => {
    const res = getStation(value);
    if (res) {
      return this.setState({ to: res });
    }
  };
  render() {
    return (
      <GestureRecognizer
        onSwipeDown={(state) => this.swipedDown(state)}
        config={{
          velocityThreshold: 0.3,
          directionalOffsetThreshold: 10,
        }}
      >
        <View>
          <PanGestureHandler onHandlerStateChange={this.handlerPan}>
            <Animated.View
              style={[
                styles.wrap,
                {
                  transform: [{ translateY: this.translateY }],
                },
              ]}
            >
              <View style={styles.inputs}>
                <View style={{ flex: 3 }}>
                  <TextInput
                    name="from"
                    onFocus={this.onFocusInput}
                    style={styles.input}
                    placeholder="Откуда"
                    onChangeText={(text) => this.inputTextChangedFrom(text)}
                  />
                </View>
                <View style={{ flex: 1, paddingLeft: 0, alignItems: "center" }}>
                  <Svg width={35} height={26} fill="none">
                    <Rect
                      x={-0.0000610352}
                      width={35}
                      height={26}
                      rx={13}
                      fill="#E3E3E3"
                    />
                    <Path
                      d="M27.01 10.754a.5.5 0 000-.708L23.83 6.864a.5.5 0 10-.707.708L25.95 10.4l-2.828 2.828a.5.5 0 10.707.707l3.182-3.181zm-15.343.146h14.99v-1h-14.99v1zM9.285 16.546a.5.5 0 000 .707l3.182 3.183a.5.5 0 10.707-.708L10.347 16.9l2.829-2.828a.5.5 0 10-.708-.707l-3.182 3.181zM24.63 16.4H9.639v1h14.99v-1z"
                      fill="#B4B4B4"
                    />
                  </Svg>
                </View>
                <View style={{ flex: 3 }}>
                  <TextInput
                    name="to"
                    onFocus={this.onFocusInput}
                    style={styles.input2}
                    placeholder="Куда"
                    onChangeText={(text) => this.inputTextChangedTo(text)}
                  />
                </View>
              </View>
              <Animated.View
                style={{
                  backgroundColor: "#FFF",
                  height: 2000,
                  paddingTop: 50,
                  marginBottom: 20,
                }}
              >
                <ListPath
                  from={this.state.from}
                  to={this.state.to}
                  path={this.state.path}
                />
              </Animated.View>
            </Animated.View>
          </PanGestureHandler>
        </View>
      </GestureRecognizer>
    );
  }
}

export default Menu;
