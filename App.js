import { StatusBar } from "expo-status-bar";
import React from "react";
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { StyleSheet, Text, View } from "react-native";
import { observer } from 'mobx-react';
import MainView from './Components/MainView';
import SplashScreen from './Components/SplashScreen'  

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});

const Stack = createStackNavigator();

 class App extends React.Component {

  constructor(props){
    super(props)
    this.state = {splashScreen: true}
  }

  componentDidMount(){
    setTimeout(() => {
      this.setState({splashScreen: false})
    }, 4000);
  }

  render(){
    return <View style={style.wrap}>
      {this.state.splashScreen?<SplashScreen/>:<MainView/>}
    </View>
  }
}

const style = StyleSheet.create({
  wrap: {
    flex: 1,
    flexDirection: "column",
    alignItems: "stretch"
  }
})
export default App;


