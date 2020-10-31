import React, { Component } from 'react';
import { View, Text } from 'react-native';
import Map from './Map'
import PinchableScreen from './PinchableScreen'
import Menu from './Menu'

class MainView extends Component {
  constructor(props) {
    super(props);
    
  }

 
  render() {
     return ( 
       <View>
     <PinchableScreen>
      <Map/>
    </PinchableScreen> 
    <Menu/>
    </View>
     )
        
      
   
  }
}

export default MainView;
