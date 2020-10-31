import React, { Component } from 'react';
import { View, Text, StyleSheet,TextInput, Dimensions, Image} from 'react-native';
import Svg, { Rect, Path } from "react-native-svg";
import SearchMenu from './SearchMenu'
import * as GestureHandler from 'react-native-gesture-handler'

const screen = Dimensions.get('window')
const styles = StyleSheet.create({
    wrap: {
        flex:1,
        flexDirection: "row",
        position:"absolute",
        bottom:0,
        paddingBottom: 15,
        paddingTop: 25,
        paddingLeft: 15,
        paddingRight: 15,
        backgroundColor: "#FFF",
    },
    input:{
        backgroundColor: "#E3E3E3",
        paddingLeft: 20,
        paddingTop: 11,
        paddingBottom: 11,
        borderTopLeftRadius: 40,
        borderBottomLeftRadius: 10,
        fontSize: 19
    },
    input2:{
        backgroundColor: "#E3E3E3",
        paddingLeft: 20,
        paddingTop: 11,
        paddingBottom: 11,
        borderTopRightRadius: 40,
        borderBottomRightRadius: 10,
        fontSize: 19,
    }
   
  })

class Menu extends Component {
  constructor(props) {
    super(props);
    this.state = { focused: false, name: ''
    };
  }

  onFocusInputFrom = (e)=>{
    this.setState({focused: true, name: 'from'})
    
  }

  onFocusInputTo = (e)=>{
    this.setState({focused: true, name: 'to'})
    
  }

  render() {
    return (
        <View style = {styles.wrap}>
          <View style = {{flex:3}}>
        <TextInput name = "from" onFocus={this.onFocusInputFrom} style = {styles.input} placeholder = "Откуда">
        
        </TextInput>
        </View>
        <View style = {{flex:1,justifyContent:'center',alignItems:'center',paddingLeft:0}}>
        <Svg  width={35} height={26}  fill="none" >
      <Rect x={-0.0000610352} width={35} height={26} rx={13} fill="#E3E3E3" />
      <Path
        d="M27.01 10.754a.5.5 0 000-.708L23.83 6.864a.5.5 0 10-.707.708L25.95 10.4l-2.828 2.828a.5.5 0 10.707.707l3.182-3.181zm-15.343.146h14.99v-1h-14.99v1zM9.285 16.546a.5.5 0 000 .707l3.182 3.183a.5.5 0 10.707-.708L10.347 16.9l2.829-2.828a.5.5 0 10-.708-.707l-3.182 3.181zM24.63 16.4H9.639v1h14.99v-1z"
        fill="#B4B4B4"
      />
    </Svg>
        </View>
        <View style = {{flex:3}}>
        <TextInput name = "to" onFocus={this.onFocusInputTo} style = {styles.input2} placeholder = "Куда">
            
        </TextInput>
        </View>
        
      </View>
    
    
    );
  }
}

export default Menu;
