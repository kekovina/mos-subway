import React, { Component } from 'react';
import { View, Text, StyleSheet,Dimensions } from 'react-native';


const screen = Dimensions.get('window')
const styles = StyleSheet.create({
    wrap: {
        flex:1,
        flexDirection: "column",
        position:"absolute",
        width: screen.width,
        height: screen.height,
        backgroundColor:'black'
    }
   
  })

class SearchMenu extends Component {
  constructor(props) {
    super(props);
    this.state = {
    };
  }

  render() {
    return (
      <View style = {styles.wrap}>
        <Text> SearchMenu </Text>
      </View>
    );
  }
}

export default SearchMenu;
