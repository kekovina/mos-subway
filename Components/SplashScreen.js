import React, { Component } from 'react';
import { View, Text, StyleSheet, Image, ImageBackground } from 'react-native';
import bg_image from '../img/bg.png'
import logo from '../img/logo.png'

class SplashScreen extends Component {
  constructor(props) {
    super(props);
    
  }
  
  render() {
    return (
      <View style={style.container}>
            <ImageBackground source={bg_image} style={style.bg}>
            <Image source={logo} style={style.logo}/>
            <Text style={style.text}> МосМетро </Text>
        </ImageBackground>
      </View>
    );
  }
}

const style = StyleSheet.create({
    container:{
        flex:1,
        flexDirection: 'row',
        justifyContent: 'center',
    },
    bg:{
        flex:1,
        resizeMode: "cover",
        justifyContent: "center"
    },
    logo:{
        width: 177,
        height: 62,
        resizeMode: "stretch",
        alignSelf: "center",
    },
    text:{
        alignSelf:"center",
        marginTop: 15,
        fontSize: 30
    }

})
export default SplashScreen;
