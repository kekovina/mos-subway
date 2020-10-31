import React from 'react';
import { Animated, Dimensions, StyleSheet, TouchableHighlightBase } from 'react-native';

import {
  PanGestureHandler,
  PinchGestureHandler,
  RotationGestureHandler,
  State,
} from 'react-native-gesture-handler';
import Map from './Map';


const screen = Dimensions.get('window');
const styles = StyleSheet.create({
    container: {
     width: screen.width,
     height: screen.height,
     aspectRatio:1
    },
    pinchableImage: {
      width: 250,
      height: 250,
    },
    wrapper: {
      flex: 1,
    },
  });

export class PinchableBox extends React.Component {
  panRef = React.createRef();
  pinchRef = React.createRef();
  constructor(props) {
    super(props);

    /* Pinching */
    this._baseScale = new Animated.Value(1);
    this._pinchScale = new Animated.Value(1);

    this._baseX = new Animated.Value(1);
    this._baseY = new Animated.Value(1);
    this._translateX = new Animated.Value(1)
    this._translateY = new Animated.Value(1)
    
    this._translate = Animated.multiply(this._baseX, this._translateX);
    this._translate1 = Animated.multiply(this._baseY, this._translateY);

    this._scale = Animated.multiply(this._baseScale, this._pinchScale);
    this._lastX = 1;
    this._lastY = 1;
    this._onPanEvent = Animated.event(
        [{ nativeEvent: { translationX: this._translateX,translationY: this._translateY } }],
        { useNativeDriver: true }
      );
    
    this._lastScale = 1;
    this._onPinchGestureEvent = Animated.event(
      [{ nativeEvent: { scale: this._pinchScale } }],
      { useNativeDriver: true }
    );
  }

  _onPinchHandlerStateChange = event => {
    if (event.nativeEvent.oldState === State.ACTIVE) {
      this._lastScale *= event.nativeEvent.scale;
      this._baseScale.setValue(this._lastScale);
      this._pinchScale.setValue(1);
    }
  };

//    _onGesturePanEvent = (e)=>{
//     if (e.nativeEvent.oldState === State.ACTIVE) {
//         this._lastX += e.nativeEvent.translationX;
//         this._baseX.setValue(this._lastX);
//         this._translateX.setValue(1);
//         this._lastY += e.nativeEvent.translationY;
//         this._baseY.setValue(this._lastY);
//         this._translateY.setValue(1);
//     }
//   }

  render() {
    return (
              <PanGestureHandler
                onGestureEvent = {this._onPanEvent}
                maxPointers = {1}
                onHandlerStateChange = {this._onGesturePanEvent}
              >
              <Animated.View>
              <PinchGestureHandler
                ref={this.pinchRef}
                simultaneousHandlers={this.rotationRef}
                onGestureEvent={this._onPinchGestureEvent}
                onHandlerStateChange={this._onPinchHandlerStateChange}>
                <Animated.View style={[styles.container,{
                        transform: [
                          { scale: this._scale },{translateX: this._translate},{translateY: this._translate1}
                        ],
                      }]} collapsable={false}>
              {this.props.children}
                </Animated.View>
              </PinchGestureHandler>
              </Animated.View>
              </PanGestureHandler>
    );
  }
}

export default PinchableBox;