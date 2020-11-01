import { StatusBar } from "expo-status-bar";
import React,{useRef} from "react";
import Svg, {
  Path,
  LinearGradient,
  Stop,
  Rect,
  G,
  Circle,
  Ellipse,
  Text
} from "react-native-svg";
import { StyleSheet, View, Animated, Dimensions, TouchableWithoutFeedback } from "react-native";
import * as GestureHandler from 'react-native-gesture-handler'


const {PinchGestureHandler} = GestureHandler;

const screen = Dimensions.get('window')

const styles = StyleSheet.create({
    container: {
      flex: 1,
      alignItems: "center",
      justifyContent: "center",
    },
    svg:{
        width: screen.width,
        height: screen.height
    }
  });


var colors = {}

class Map extends React.Component {

    constructor(props){
        super(props)
        this.state = {greenBranch:"#4baf4f"}
        this.state.limeBranch = "#bed12e"
        this.state.limeBranch = "#bed12e"
        this.state.Branch7 = "#943f90"
        this.state.Branch15 = "#d68ab1"
        this.state.Branch1 = "#e42518"
        this.state.Branch3 = "#0572b9"
        this.state.Branch4 = "#24bcef"
        this.state.Branch5 = "#925233"
        this.state.Branch6 = "#ef7e24"
        this.state.Branch8 = "#ffcd1e"
        this.state.Branch9 = "#adacac"
        this.state.Branch11 = "#67c7c3"
        this.state.Branch12 = "#bac8e8"
        this.state.d1 = "#f7a600"
        this.state.d2 = "#f42a7c"
        colors = this.state
    }
    lastTap = null;

    handleDoubleTap = () => {
        const now = Date.now();
        const DOUBLE_PRESS_DELAY = 300;
        if (this.lastTap && (now - this.lastTap) < DOUBLE_PRESS_DELAY) {
          this.setState(colors)
        } else {
          this.lastTap = now;
        }
      }

    initialState = this.state

    greenHandler=()=>{
        
        this.chooseBranch('greenBranch')
    }

    limeHandler=()=>{
        this.chooseBranch('limeBranch')
    }
    Handler7=()=>{
        this.chooseBranch('Branch7')
    }
    Handler15=()=>{
        this.chooseBranch('Branch15')
    }
    Handler1=()=>{
        this.chooseBranch('Branch1')
    }
    Handler3=()=>{
        this.chooseBranch('Branch3')
    }
    Handler4=()=>{
        this.chooseBranch('Branch4')
    }
    Handler5=()=>{
        this.chooseBranch('Branch5')
    }
    Handler6=()=>{
        this.chooseBranch('Branch6')
    }
    Handler8=()=>{
        this.chooseBranch('Branch8')
    }
    Handler9=()=>{
        this.chooseBranch('Branch9')
    }
    Handler11 = ()=>{
        this.chooseBranch('Branch11')
    }
    Handler12 = ()=>{
        this.chooseBranch('Branch12')
    }
    Handler_d1 = ()=>{
        this.chooseBranch('d1')
    }
    Handler_d1 = ()=>{
        this.chooseBranch('d2')
    }

    chooseBranch = (name)=>{
        let newState = {}
        if(name != 'greenBranch'){
            newState.greenBranch = '#d6d6d6'
        } else {
            newState.greenBranch = colors[name]
        }
        if(name != 'limeBranch'){
            newState.limeBranch = '#d6d6d6'
        }else {
            newState.limeBranch = colors[name]
        }
        if(name != 'Branch7'){
            newState.Branch7 = '#d6d6d6'
        }else {
            newState.Branch7 = colors[name]
        }
        if(name != 'Branch15'){
            newState.Branch15 = '#d6d6d6'
        }else {
            newState.Branch15 = colors[name]
        }
        if(name != 'Branch1'){
            newState.Branch1 = '#d6d6d6'
        }else {
            newState.Branch1 = colors[name]
        }
        if(name != 'd1'){
            newState.d1 = '#d6d6d6'
        }else {
            newState.d1 = colors[name]
        }
        if(name != 'd2'){
            newState.d2 = '#d6d6d6'
        }else {
            newState.d2 = colors[name]
        }
        if(name != 'Branch3'){
            newState.Branch3 = '#d6d6d6'
        }else {
            newState.Branch3 = colors[name]
        }
        if(name != 'Branch4'){
            newState.Branch4 = '#d6d6d6'
        }else {
            newState.Branch4 = colors[name]
        }
        if(name != 'Branch5'){
            newState.Branch5 = '#d6d6d6'
        }else {
            newState.Branch5 = colors[name]
        }
        if(name != 'Branch6'){
            newState.Branch6 = '#d6d6d6'
        }else {
            newState.Branch6 = colors[name]
        }
        if(name != 'Branch8'){
            newState.Branch8 = '#d6d6d6'
        }else {
            newState.Branch8 = colors[name]
        }
        if(name != 'Branch9'){
            newState.Branch9 = '#d6d6d6'
        }else {
            newState.Branch9 = colors[name]
        }
        if(name != 'Branch11'){
            newState.Branch11 = '#d6d6d6'
        }else {
            newState.Branch11 = colors[name]
        }
        if(name != 'Branch12'){
            newState.Branch12 = '#d6d6d6'
        }else {
            newState.Branch12 = colors[name]
        }
        this.setState(newState)
    }

    updateColors(){
        this.setState(colors)
    }

  
  render(){  return <TouchableWithoutFeedback onPress={this.handleDoubleTap}>
  <View>
    <View>
    <Svg
        
      style = {{scale:0.22}}
      width="100%"
      height="100%"
      xmlSpace="preserve"
      
    >
      <Path
        d="M503.43698 2161.002H666.4705V2195.738759H503.43698z"
        fill="#fff"
        fillOpacity={1}
        stroke="none"
        strokeWidth={1.01821637}
        strokeMiterlimit={4}
        strokeDasharray="none"
        strokeOpacity={1}
      />
      <Path
        d="M1553.7019 1011.2923H1589.836734V1051.039305H1553.7019z"
        fill="#fff"
        strokeWidth={1.44432676}
      />
      <Path
        d="M1700.5243 981.44263H1837.83801V1021.542628H1700.5243z"
        fill="#fff"
        strokeWidth={1.04393077}
      />
      <Path
        d="M504.34668 2093.6824H667.3802000000001V2128.419159H504.34668z"
        fill="#fff"
        fillOpacity={1}
        stroke="none"
        strokeWidth={1.01821637}
        strokeMiterlimit={4}
        strokeDasharray="none"
        strokeOpacity={1}
      />
      <Path
        d="M447.92334 352.19678H498.201241V392.19678H447.92334z"
        fill="#fff"
        strokeWidth={0.68548298}
      />
      <Path
        d="M548.19427 538.87579H632.0654549999999V581.08141H548.19427z"
        fill="#fff"
        strokeWidth={0.90943074}
      />
      <Path
        d="M1441.4429 393.48126H1657.91307V423.838888H1441.4429z"
        opacity={1}
        fill="#fff"
        fillOpacity={1}
        stroke="none"
        strokeWidth={0.92717201}
        strokeMiterlimit={4}
        strokeDasharray="none"
        strokeOpacity={1}
      />
      <Path
        d="M184.58102 1044.4307H298.42916V1073.482427H184.58102z"
        opacity={1}
        fill="#fff"
        fillOpacity={1}
        stroke="none"
        strokeWidth={0.63006186}
        strokeMiterlimit={4}
        strokeDasharray="none"
        strokeOpacity={1}
      />
      <Path
        d="M1786.3086 2080.9915H1946.7085900000002V2121.9915H1786.3086z"
        fill="#fff"
      />
      <Path d="M1826.7 1980.75H1974.2V2024.75H1826.7z" fill="#fff" />
      <Path
        fill="#fff"
        d="M1984.3712 1909.6821H2155.03154V1969.6821H1984.3712z"
      />
      <Path
        fill="#fff"
        d="M1999.4216 1683.0402H2192.64152V1736.010758H1999.4216z"
      />
      <Path d="M1986.25 2121.75H2147.25V2157.75H1986.25z" fill="#fff" />
      <Path
        d="M1984.3712 1909.6821H2155.03154V1969.6821H1984.3712z"
        fill="#fff"
        strokeWidth={1.0841341}
      />
      <Path
        fill="#fff"
        d="M636.58063 1058.7255H665.0095620000001V1099.2083H636.58063z"
      />
      <Path
        fill="#fff"
        d="M784.18365 1211.3319H876.293384V1262.0491129999998H784.18365z"
      />
      <Path
        d="M1591.3787 925.94568H1697.40217V962.430658H1591.3787z"
        fill="#fff"
        strokeWidth={0.81138849}
      />
      <Path
        fill="#fff"
        d="M899.13525 1140.3628H1008.3309V1179.120014H899.13525z"
      />
      <Path
        d="M643.858 623.072l151.348 5.003-83.8 31.963-93.584 25.44z"
        fill="#fff"
        strokeWidth={0.83246613}
        fillOpacity={1}
        stroke="#fff"
        strokeOpacity={1}
      />
      <Path
        fill="#fff"
        d="M1074.2664 1243.7689H1310.34771V1266.926739H1074.2664z"
      />
      <Path
        fill="#fff"
        d="M1004.7929 1076.8396H1103.8569870000001V1121.868733H1004.7929z"
      />
      <Path
        fill="#fff"
        d="M1216.0593 1175.077H1353.4469299999998V1206.780674H1216.0593z"
      />
      <Path
        fill="#fff"
        d="M1332.8622 1863.8844H1478.5636200000001V1888.007149H1332.8622z"
      />
      <Path
        fill="#fff"
        d="M1103.2593 1950.177H1305.52315V1987.7145099999998H1103.2593z"
      />
      <Path
        d="M866.05902 1547.316H979.05343V1616.230444H866.05902z"
        fill="#fff"
        strokeWidth={0.87803745}
      />
      <Path
        fill="#fff"
        d="M990.23657 2240.6868H1136.24757V2308.461374H990.23657z"
      />
      <Path
        fill="#fff"
        d="M1193.9153 1347.0143H1346.6926999999998V1376.9265090000001H1193.9153z"
      />
      <Path
        fill="#fff"
        d="M836.85931 1332.1823H939.1790100000001V1377.2481719999998H836.85931z"
      />
      <Path
        fill="#fff"
        d="M884.1792 1417.4526H1032.7753500000001V1450.259542H884.1792z"
      />
      <Path
        fill="#fff"
        d="M1351.3594 1888.177H1463.4468000000002V1924.995363H1351.3594z"
      />
      <Path
        d="M1990.8036 1799.8171H2117.8036V1847.8171H1990.8036z"
        fill="#fff"
      />
      <Path
        d="M1798.8036 1783.8171H1982.8036V1843.8171H1798.8036z"
        fill="#fff"
      />
      <Path
        d="M1820.3745 1706.1212H1975.3745V1763.1212H1820.3745z"
        fill="#fff"
      />
      <Path fill="#fff" d="M1984.28 1436.4403H2106.4357V1494.360607H1984.28z" />
      <Path
        fill="#fff"
        d="M1924.176 1279.816H2106.3316999999997V1337.7363070000001H1924.176z"
      />
      <Path d="M1873.892 1557.974H2028.892V1601.974H1873.892z" fill="#fff" />
      <Path d="M1936.5 1623.5H2091.5V1684.5H1936.5z" fill="#fff" />
      <Path
        d="M1388.4094 429.47867H1467.708228V459.836298H1388.4094z"
        opacity={1}
        fill="#fff"
        fillOpacity={1}
        stroke="none"
        strokeWidth={0.56117028}
        strokeMiterlimit={4}
        strokeDasharray="none"
        strokeOpacity={1}
      />
      <Path
        d="M1259.2866 393.32013H1338.5854279999999V423.677758H1259.2866z"
        opacity={1}
        fill="#fff"
        fillOpacity={1}
        stroke="none"
        strokeWidth={0.56117028}
        strokeMiterlimit={4}
        strokeDasharray="none"
        strokeOpacity={1}
      />
      <Path
        d="M875.12384 412.41116H1002.48546V450.16478H875.12384z"
        fill="#fff"
        strokeWidth={1.0846523}
      />
      <Path
        d="M670.758 669.963v41.422l65.694-6.993 5.393-33.89z"
        fill="none"
        stroke="#fff"
        strokeWidth="1.2803936px"
        strokeLinecap="butt"
        strokeLinejoin="miter"
        strokeOpacity={1}
      />
      <Path
        d="M791.44666 1494.1104H928.36731V1531.646266H791.44666z"
        fill="#fff"
        fillOpacity={1}
        strokeWidth={0.73290408}
      />
      <Path
        d="M1000.4333 1563.1267H1092.833431V1599.860392H1000.4333z"
        fill="#fff"
        fillOpacity={1}
        strokeWidth={0.5956046}
      />
      <Path
        d="M1481.8342 445.41724H1585.9552800000001V486.522068H1481.8342z"
        fill="#fff"
        strokeWidth={0.91250771}
      />
      <Path d="M501.153 1957.926h163v36h-163z" fill="#fff" />
      <Path
        d="M496.60699 2012.8021H669.6475V2047.538859H496.60699z"
        fill="#fff"
        fillOpacity={1}
        stroke="none"
        strokeWidth={1.04900002}
        strokeMiterlimit={4}
        strokeDasharray="none"
        strokeOpacity={1}
      />
      <LinearGradient
        gradientUnits="userSpaceOnUse"
        x1={-126989.65}
        y1={-137979.44}
        x2={-126846.49}
        y2={-138122.59}
        gradientTransform="matrix(0.1423,0,0,0.1423,18669.74,20534.467)"
      >
        <Stop offset={0.3} stopColor="#e42518" stopOpacity={1} />
        <Stop offset={0.7} stopColor="#d68ab1" stopOpacity={1} />
      </LinearGradient>
      <LinearGradient
        gradientUnits="userSpaceOnUse"
        x1={929.68439}
        y1={1453.2924}
        x2={984.97247}
        y2={1453.2924}
        gradientTransform="matrix(0.9962,-0.08715574,0.08715574,0.9962,-123.0299,88.9871)"
      >
        <Stop offset={0} stopColor="#8f749f" stopOpacity={1} />
        <Stop offset={1} stopColor="#24bcef" stopOpacity={1} />
      </LinearGradient>
      <LinearGradient
        gradientTransform="matrix(0.9962,-0.08715574,0.08715574,0.9962,-123.0299,88.9871)"
        y2={1453.2924}
        x2={984.97247}
        y1={1453.2924}
        x1={929.68439}
        gradientUnits="userSpaceOnUse"
        id="l"
      >
        <Stop offset={0} stopColor="#8f749f" stopOpacity={1} />
        <Stop offset={1} stopColor="#c54000" />
      </LinearGradient>
      <LinearGradient
        gradientUnits="userSpaceOnUse"
        x1={-127582.51}
        y1={-136148.16}
        x2={-127582.51}
        y2={-136043.39}
        gradientTransform="matrix(0.1423,0,0,0.1423,18669.74,20534.467)"
      >
        <Stop offset={0} stopColor="#24bcef" stopOpacity={1} />
        <Stop offset={1} stopColor="#e42518" />
      </LinearGradient>
      <LinearGradient
        gradientTransform="matrix(0.1423,0,0,0.1423,18669.74,20534.467)"
        y2={-136043.39}
        x2={-127582.51}
        y1={-136148.16}
        x1={-127582.51}
        gradientUnits="userSpaceOnUse"
      >
        <Stop offset={0} stopColor="#f8925b" stopOpacity={1} />
        <Stop offset={1} stopColor="#e42518" />
      </LinearGradient>
      <LinearGradient
        gradientTransform="matrix(0.9905,-0.1375,-0.1375,-0.9905,263.8975,1744.2119)"
        y2={1062.752}
        x2={371.16339}
        y1={1062.752}
        x1={331.3703}
        gradientUnits="userSpaceOnUse"
      >
        <Stop offset={0} stopColor="#f8925b" stopOpacity={1} />
        <Stop offset={1} stopColor="#bed12e" stopOpacity={1} />
      </LinearGradient>
      <LinearGradient
        gradientUnits="userSpaceOnUse"
        x1={-127582.16}
        y1={-136115.44}
        x2={-127582.16}
        y2={-136065.64}
        gradientTransform="matrix(0.1423,0,0,0.1423,18669.74,20534.467)"
      >
        <Stop offset={0} stopColor="#f8925b" stopOpacity={1} />
        <Stop offset={1} stopColor="#e42518" stopOpacity={1} />
      </LinearGradient>
      <LinearGradient>
        <Stop offset={0} stopColor="#e42518" stopOpacity={1} />
        <Stop offset={1} stopColor="#e42518" stopOpacity={1} />
      </LinearGradient>
      <LinearGradient
        id="j"
        gradientUnits="userSpaceOnUse"
        x1={-127582.51}
        y1={-136148.16}
        x2={-127582.51}
        y2={-136043.39}
        gradientTransform="matrix(0.1423,0,0,0.1423,18669.74,20534.467)"
      >
        <Stop offset={0} stopColor="#943f90" stopOpacity={1} />
        <Stop offset={1} stopColor="#e42518" />
      </LinearGradient>
      <LinearGradient
        gradientTransform="matrix(0,-0.1423,0.1423,0,22230.92,24687.148)"
        y2={-151184.97}
        x2={169109.59}
        y1={-151184.97}
        x1={169040.41}
        gradientUnits="userSpaceOnUse"
      >
        <Stop offset={0.1} stopColor="#943f90" stopOpacity={1} />
        <Stop offset={0.9} stopColor="#f8925b" stopOpacity={1} />
      </LinearGradient>
      <LinearGradient
        gradientTransform="matrix(0.1423,0,0,0.1423,18669.74,20534.467)"
        y2={-136043.39}
        x2={-127582.51}
        y1={-136148.16}
        x1={-127582.51}
        gradientUnits="userSpaceOnUse"
        id="i"
      >
        <Stop offset={0} stopColor="#adacac" stopOpacity={1} />
        <Stop offset={1} stopColor="#e42518" />
      </LinearGradient>
      <LinearGradient
        gradientTransform="matrix(0.1423,0,0,0.1423,18669.74,20534.467)"
        y2={-136065.64}
        x2={-127582.16}
        y1={-136115.44}
        x1={-127582.16}
        gradientUnits="userSpaceOnUse"
        id="k"
      >
        <Stop offset={0} stopColor="#adacac" stopOpacity={1} />
        <Stop offset={1} stopColor="#8f749f" stopOpacity={1} />
      </LinearGradient>
      <LinearGradient
        gradientUnits="userSpaceOnUse"
        x1={-90747.484}
        y1={-94266.203}
        x2={-90668.07}
        y2={-94128.648}
        gradientTransform="matrix(0.1423,0,0,0.1423,13822.655,14167.964)"
      >
        <Stop offset={0.2988} stopColor="#8f749f" stopOpacity={1} />
        <Stop offset={0.7046} stopColor="#bed12e" stopOpacity={1} />
      </LinearGradient>
      <LinearGradient
        id="h"
        gradientUnits="userSpaceOnUse"
        x1={-90747.484}
        y1={-94266.203}
        x2={-90668.07}
        y2={-94128.648}
        gradientTransform="matrix(0.1423,0,0,0.1423,13822.655,14167.964)"
      >
        <Stop offset={0.17467836} stopColor="#fff" stopOpacity={1} />
        <Stop offset={0.7046} stopColor="#8f749f" stopOpacity={1} />
      </LinearGradient>
      <LinearGradient
        gradientTransform="matrix(0.1423,0,0,0.1423,13822.655,14167.964)"
        y2={-94128.648}
        x2={-90668.07}
        y1={-94266.203}
        x1={-90747.484}
        gradientUnits="userSpaceOnUse"
        id="g"
      >
        <Stop offset={0.2988} stopColor="#8f749f" stopOpacity={1} />
        <Stop offset={0.7046} stopColor="#adacac" />
      </LinearGradient>
      <LinearGradient
        gradientTransform="matrix(0,-0.1423,0.1423,0,22230.92,24687.148)"
        y2={-151184.97}
        x2={169109.59}
        y1={-151184.97}
        x1={169040.41}
        gradientUnits="userSpaceOnUse"
        id="f"
      >
        <Stop offset={0.1} stopColor="#4baf4f" stopOpacity={1}  />
        <Stop offset={0.9} stopColor="#8f749f" stopOpacity={1} />
      </LinearGradient>
      <LinearGradient id="d">
        <Stop offset={0} stopColor="#f8925b" stopOpacity={1} />
        <Stop offset={1} stopColor="#adacac" stopOpacity={1} />
      </LinearGradient>
      <LinearGradient
        gradientTransform="matrix(1,0,0,-1,0,2060)"
        y2={1420.8126}
        x2={497.8725}
        y1={1383.2715}
        x1={506.35779}
        gradientUnits="userSpaceOnUse"
      >
        <Stop offset={0} stopColor="#ffc500" stopOpacity={1} />
        <Stop offset={1} stopColor="#bed12e" stopOpacity={1} />
      </LinearGradient>
      <LinearGradient
        gradientTransform="matrix(0.8737,0.4865,0.4865,-0.8737,-354.4689,1398.8701)"
        y2={1040.3401}
        x2={394.138}
        y1={1040.3401}
        x1={335.98801}
        gradientUnits="userSpaceOnUse"
        id="c"
      >
        <Stop offset={0} stopColor="#bed12e" stopOpacity={1} />
        <Stop offset={1} stopColor="#e42518" stopOpacity={1} />
      </LinearGradient>
      <LinearGradient
        gradientTransform="matrix(0.1423,0,0,0.1423,18601.154,20515.164)"
        y2={-141042.62}
        x2={-120558.59}
        y1={-141042.62}
        x1={-120635.49}
        gradientUnits="userSpaceOnUse"
        id="e"
      >
        <Stop offset={0.1} stopColor="#f8925b" stopOpacity={1} />
        <Stop offset={0.94627404} stopColor="#fff" />
      </LinearGradient>
      <LinearGradient
        gradientUnits="userSpaceOnUse"
        x1={-62101.742}
        y1={81541.914}
        x2={-62010.098}
        y2={81475.258}
        gradientTransform="matrix(0.2439,0,0,-0.2439,16452.801,20652.762)"
      >
        <Stop offset={0.3} stopColor="#1ebee7" stopOpacity={0} />
        <Stop offset={0.7} stopColor="#925233" stopOpacity={1} />
      </LinearGradient>
      <LinearGradient>
        <Stop offset={0} stopColor="#000" stopOpacity={1} />
        <Stop offset={1} stopColor="#f8925b" stopOpacity={1} />
      </LinearGradient>
      <LinearGradient id="b">
        <Stop offset={0} stopColor="#8f749f" stopOpacity={1} />
        <Stop offset={1} stopColor="#0572b9" stopOpacity={1} />
      </LinearGradient>
      <LinearGradient id="a">
        <Stop offset={0} stopColor="#0572b9" stopOpacity={1} />
        <Stop offset={1} stopColor="#8f749f" stopOpacity={1} />
      </LinearGradient>
      <LinearGradient
        xlinkHref="#a"
        x1={-982.41797}
        y1={-442.77475}
        x2={-982.13092}
        y2={-452.5881}
        gradientUnits="userSpaceOnUse"
        gradientTransform="translate(-12.646825,-49.785179)"
      />
      <LinearGradient
        xlinkHref="#SVGID_81_"
        gradientUnits="userSpaceOnUse"
        gradientTransform="matrix(1,0,0,-1,0,2060)"
        x1={506.35779}
        y1={1383.2715}
        x2={497.8725}
        y2={1420.8126}
      />
      <LinearGradient
        xlinkHref="#SVGID_84_"
        gradientUnits="userSpaceOnUse"
        x1={409.39999}
        y1={777.79999}
        x2={452.29999}
        y2={777.79999}
      />
      <LinearGradient
        xlinkHref="#SVGID_832"
        gradientUnits="userSpaceOnUse"
        gradientTransform="matrix(0.8737,0.4865,0.4865,-0.8737,-354.4689,1398.8701)"
        x1={335.98801}
        y1={1040.3401}
        x2={394.138}
        y2={1040.3401}
      />
      <LinearGradient
        gradientUnits="userSpaceOnUse"
        x1={335.98801}
        y1={1040.3401}
        x2={394.138}
        y2={1040.3401}
        gradientTransform="matrix(0.8737,0.4865,0.4865,-0.8737,-354.4689,1398.8701)"
      >
        <Stop offset={0} stopColor="#e42518" />
        <Stop offset={1} stopColor="#f9ff55" />
      </LinearGradient>
      <LinearGradient
        xlinkHref="#b"
        x1={448.03488}
        y1={644.87891}
        x2={495.72769}
        y2={684.34766}
        gradientUnits="userSpaceOnUse"
        gradientTransform="matrix(0.93551326,-0.0241616,0.00906056,1.014494,23.056318,0.90954329)"
      />
      <LinearGradient
        gradientUnits="userSpaceOnUse"
        x1={-128086.55}
        y1={-140699.75}
        x2={-127848.51}
        y2={-140646.52}
        gradientTransform="matrix(0.1423,0,0,0.1423,18669.74,20534.467)"
      >
        <Stop offset={0} stopColor="#943f90" />
        <Stop offset={1} stopColor="#e42518" />
      </LinearGradient>
      <LinearGradient
        xlinkHref="#SVGID_72_"
        gradientUnits="userSpaceOnUse"
        gradientTransform="matrix(0.1423,0,0,0.1423,18669.74,20534.467)"
        x1={-128090.57}
        y1={-140701.11}
        x2={-127825.84}
        y2={-140641.89}
      />
      <LinearGradient
        xlinkHref="#LinearGradient6877"
        gradientUnits="userSpaceOnUse"
        gradientTransform="matrix(0.46389685,0.87807235,-1.0160607,0.12312368,936.55396,176.38245)"
        x1={454.13058}
        y1={655.30725}
        x2={488.31534}
        y2={674.61047}
      />
      <LinearGradient
        gradientUnits="userSpaceOnUse"
        x1={-62101.742}
        y1={81541.914}
        x2={-62010.098}
        y2={81475.258}
        gradientTransform="matrix(0.2439,0,0,-0.2439,16452.801,20652.762)"
      >
        <Stop offset={0.3} stopColor="#bed12e" />
        <Stop offset={0.7} stopColor="#0572b9" />
      </LinearGradient>
      <LinearGradient
        gradientUnits="userSpaceOnUse"
        x1={-50945.922}
        y1={-66837.68}
        x2={-50935.199}
        y2={-66715.102}
        gradientTransform="matrix(0.2439,0,0,0.2439,13765.307,17034.637)"
      >
        <Stop offset={0.7341} stopColor="#915133" />
        <Stop offset={1} stopColor="#0572b9" />
      </LinearGradient>
      <LinearGradient
        gradientUnits="userSpaceOnUse"
        x1={1342.0726}
        y1={10209.19}
        x2={1366.4384}
        y2={10188.744}
        gradientTransform="matrix(1,0,0,-1,0,11177.891)"
      >
        <Stop offset={0.3144} stopColor="#943f90" />
        <Stop offset={0.3689} stopColor="#a95b79" />
        <Stop offset={0.4974} stopColor="#d79848" />
        <Stop offset={0.5918} stopColor="#f4be2a" />
        <Stop offset={0.6412} stopColor="#ffcd1e" />
      </LinearGradient>
      <LinearGradient
        xlinkHref="#LinearGradient7481"
        gradientUnits="userSpaceOnUse"
        gradientTransform="matrix(1,0,0,-1,0,11177.891)"
        x1={1342.0726}
        y1={10209.19}
        x2={1366.4384}
        y2={10188.744}
      />
      <LinearGradient
        xlinkHref="#LinearGradient11559"
        gradientUnits="userSpaceOnUse"
        gradientTransform="matrix(0.1423,0,0,0.1423,18601.154,20515.164)"
        x1={-120635.49}
        y1={-141042.62}
        x2={-120507.52}
        y2={-141050.67}
      />
      <LinearGradient
        xlinkHref="#c"
        gradientUnits="userSpaceOnUse"
        gradientTransform="matrix(0.8737,0.4865,0.4865,-0.8737,-354.4689,1398.8701)"
        x1={335.98801}
        y1={1040.3401}
        x2={394.138}
        y2={1040.3401}
      />
      <LinearGradient
        gradientUnits="userSpaceOnUse"
        x1={506.35779}
        y1={1383.2715}
        x2={497.8725}
        y2={1420.8126}
        gradientTransform="matrix(1,0,0,-1,0,2060)"
      >
        <Stop offset={0} stopColor="#ffcd1e" />
        <Stop offset={1} stopColor="#943f90" />
      </LinearGradient>
      <LinearGradient
        xlinkHref="#d"
        gradientUnits="userSpaceOnUse"
        gradientTransform="translate(-12.646825,-49.785179)"
        x1={-982.41797}
        y1={-442.77475}
        x2={-982.13092}
        y2={-452.5881}
      />
      <LinearGradient
        xlinkHref="#e"
        gradientUnits="userSpaceOnUse"
        gradientTransform="matrix(0.1423,0,0,0.1423,18601.154,20515.164)"
        x1={-120635.49}
        y1={-141042.62}
        x2={-120538.86}
        y2={-141041.72}
      />
      <LinearGradient
        xlinkHref="#f"
        gradientUnits="userSpaceOnUse"
        gradientTransform="matrix(0,-0.1423,0.1423,0,22230.92,24687.148)"
        x1={169040.41}
        y1={-151184.97}
        x2={169109.59}
        y2={-151184.97}
      />
      <LinearGradient
        xlinkHref="#g"
        gradientUnits="userSpaceOnUse"
        gradientTransform="matrix(0.1423,0,0,0.1423,13822.655,14167.964)"
        x1={-90747.484}
        y1={-94266.203}
        x2={-90668.07}
        y2={-94128.648}
      />
      <LinearGradient
        xlinkHref="#LinearGradient7198"
        gradientUnits="userSpaceOnUse"
        gradientTransform="matrix(0.1423,0,0,0.1423,13822.655,14167.964)"
        x1={-90747.484}
        y1={-94266.203}
        x2={-90668.07}
        y2={-94128.648}
      />
      <LinearGradient
        xlinkHref="#h"
        gradientUnits="userSpaceOnUse"
        gradientTransform="matrix(0.1423,0,0,0.1423,13822.655,14167.964)"
        x1={-90785.656}
        y1={-94273.266}
        x2={-90668.07}
        y2={-94128.648}
      />
      <LinearGradient
        gradientUnits="userSpaceOnUse"
        x1={331.3703}
        y1={1062.752}
        x2={371.16339}
        y2={1062.752}
        gradientTransform="matrix(0.9905,-0.1375,-0.1375,-0.9905,263.8975,1744.2119)"
      >
        <Stop offset={0} stopColor="#e42518" />
        <Stop offset={1} stopColor="#b900bf" />
      </LinearGradient>
      <LinearGradient
        gradientUnits="userSpaceOnUse"
        x1={-127582.51}
        y1={-136147.7}
        x2={-127582.51}
        y2={-136042.97}
        gradientTransform="matrix(0.1423,0,0,0.1423,18669.74,20534.467)"
      >
        <Stop offset={0} stopColor="#e42518" />
        <Stop offset={1} stopColor="#e42518" />
      </LinearGradient>
      <LinearGradient
        gradientUnits="userSpaceOnUse"
        x1={-127582.51}
        y1={-136148.16}
        x2={-127582.51}
        y2={-136043.39}
        gradientTransform="matrix(0.1423,0,0,0.1423,18669.74,20534.467)"
      >
        <Stop offset={0} stopColor="#e42518" />
        <Stop offset={1} stopColor="#e42518" />
      </LinearGradient>
      <LinearGradient
        xlinkHref="#i"
        gradientUnits="userSpaceOnUse"
        gradientTransform="matrix(0.1423,0,0,0.1423,18669.74,20534.467)"
        x1={-127582.51}
        y1={-136148.16}
        x2={-127582.51}
        y2={-136043.39}
      />
      <LinearGradient
        xlinkHref="#LinearGradient7990"
        gradientUnits="userSpaceOnUse"
        gradientTransform="matrix(0,-0.1423,0.1423,0,22230.92,24687.148)"
        x1={169040.41}
        y1={-151184.97}
        x2={169109.59}
        y2={-151184.97}
      />
      <LinearGradient
        xlinkHref="#LinearGradient8064"
        gradientUnits="userSpaceOnUse"
        gradientTransform="matrix(0,-0.1423,0.1423,0,22230.92,24687.148)"
        x1={169040.41}
        y1={-151184.97}
        x2={169109.59}
        y2={-151184.97}
      />
      <LinearGradient
        xlinkHref="#j"
        gradientUnits="userSpaceOnUse"
        gradientTransform="matrix(0.1423,0,0,0.1423,18669.74,20534.467)"
        x1={-127582.51}
        y1={-136148.16}
        x2={-127582.51}
        y2={-136043.39}
      />
      <LinearGradient
        xlinkHref="#LinearGradient11509"
        gradientUnits="userSpaceOnUse"
        gradientTransform="matrix(0.9905,-0.1375,-0.1375,-0.9905,263.8975,1744.2119)"
        x1={331.3703}
        y1={1062.752}
        x2={371.16339}
        y2={1062.752}
      />
      <LinearGradient
        xlinkHref="#SVGID_5_"
        id="n"
        gradientUnits="userSpaceOnUse"
        gradientTransform="matrix(0.2439,0,0,-0.2439,14851.381,17801.318)"
        x1={-55891.844}
        y1={69361.492}
        x2={-55800.195}
        y2={69294.836}
      />
      <LinearGradient
        xlinkHref="#SVGID_74_"
        gradientUnits="userSpaceOnUse"
        gradientTransform="matrix(0.1423,0,0,0.1423,18669.74,20534.467)"
        x1={-128090.66}
        y1={-140700.08}
        x2={-127826.08}
        y2={-140640.89}
      />
      <LinearGradient
        xlinkHref="#k"
        gradientUnits="userSpaceOnUse"
        gradientTransform="matrix(0.1423,0,0,0.1423,18669.74,20534.467)"
        x1={-127582.16}
        y1={-136115.44}
        x2={-127582.16}
        y2={-136065.64}
      />
      <LinearGradient
        xlinkHref="#LinearGradient7485"
        gradientUnits="userSpaceOnUse"
        gradientTransform="matrix(0.9905,-0.1375,-0.1375,-0.9905,263.8975,1744.2119)"
        x1={331.3703}
        y1={1062.752}
        x2={371.16339}
        y2={1062.752}
      />
      <LinearGradient
        gradientUnits="userSpaceOnUse"
        x1={929.49414}
        y1={1458.8212}
        x2={1008.0998}
        y2={1439.4327}
        gradientTransform="matrix(0.9962,-0.08715574,0.08715574,0.9962,-123.0299,88.9871)"
      >
        <Stop offset={0} stopColor="#adacac" />
        <Stop offset={1} stopColor="#c54000" />
      </LinearGradient>
      <LinearGradient
        xlinkHref="#l"
        gradientUnits="userSpaceOnUse"
        gradientTransform="matrix(0.9962,-0.08715574,0.08715574,0.9962,-123.0299,88.9871)"
        x1={941.08606}
        y1={1456.5447}
        x2={984.97247}
        y2={1453.2924}
      />
      <LinearGradient
        gradientUnits="userSpaceOnUse"
        x1={1664.2244}
        y1={3037.439}
        x2={1674.3674}
        y2={3037.439}
        gradientTransform="matrix(0.2969,-0.02075953,0.02075953,0.2969,444.54417,571.82887)"
      >
        <Stop offset={0} stopColor="#6a0b00" />
        <Stop offset={1} stopColor="#e42518" />
      </LinearGradient>
      <LinearGradient
        gradientUnits="userSpaceOnUse"
        x1={1664.2244}
        y1={3037.439}
        x2={1674.3674}
        y2={3037.439}
        gradientTransform="matrix(0.2969,-0.02075953,0.02075953,0.2969,430.602,576.0901)"
      >
        <Stop offset={0} stopColor="#6a0b00" />
        <Stop offset={1} stopColor="#e42518" />
      </LinearGradient>
      <LinearGradient
        gradientUnits="userSpaceOnUse"
        x1={929.68439}
        y1={1453.2924}
        x2={984.97247}
        y2={1453.2924}
        gradientTransform="matrix(0.9962,-0.08715574,0.08715574,0.9962,-123.0299,88.9871)"
      >
        <Stop offset={0} stopColor="#adacac" />
        <Stop offset={1} stopColor="#c54000" />
      </LinearGradient>
      <LinearGradient
        xlinkHref="#LinearGradient8057"
        x1={287.10718}
        y1={1261.7969}
        x2={285.89679}
        y2={1112.5933}
        gradientUnits="userSpaceOnUse"
      />
      <LinearGradient
        xlinkHref="#LinearGradient8057"
        x1={287.10718}
        y1={1261.7969}
        x2={285.89679}
        y2={1112.5933}
        gradientUnits="userSpaceOnUse"
      />
      <LinearGradient
        xlinkHref="#LinearGradient8057"
        x1={287.10718}
        y1={1261.7969}
        x2={285.89679}
        y2={1112.5933}
        gradientUnits="userSpaceOnUse"
      />
      <LinearGradient
        xlinkHref="#LinearGradient8057"
        x1={287.10718}
        y1={1261.7969}
        x2={285.89679}
        y2={1112.5933}
        gradientUnits="userSpaceOnUse"
      />
      <LinearGradient
        xlinkHref="#LinearGradient8057"
        x1={287.10718}
        y1={1261.7969}
        x2={285.89679}
        y2={1112.5933}
        gradientUnits="userSpaceOnUse"
      />
      <LinearGradient
        xlinkHref="#LinearGradient8057"
        x1={287.10718}
        y1={1261.7969}
        x2={285.89679}
        y2={1112.5933}
        gradientUnits="userSpaceOnUse"
      />
      <LinearGradient
        xlinkHref="#LinearGradient8057"
        x1={287.10718}
        y1={1261.7969}
        x2={285.89679}
        y2={1112.5933}
        gradientUnits="userSpaceOnUse"
      />
      <LinearGradient
        xlinkHref="#LinearGradient8057"
        x1={287.10718}
        y1={1261.7969}
        x2={285.89679}
        y2={1112.5933}
        gradientUnits="userSpaceOnUse"
      />
      <LinearGradient
        xlinkHref="#LinearGradient8057"
        x1={287.10718}
        y1={1261.7969}
        x2={285.89679}
        y2={1112.5933}
        gradientUnits="userSpaceOnUse"
      />
      <LinearGradient
        xlinkHref="#LinearGradient8057"
        x1={287.10718}
        y1={1261.7969}
        x2={285.89679}
        y2={1112.5933}
        gradientUnits="userSpaceOnUse"
      />
      <LinearGradient
        xlinkHref="#LinearGradient8057"
        x1={287.10718}
        y1={1261.7969}
        x2={285.89679}
        y2={1112.5933}
        gradientUnits="userSpaceOnUse"
      />
      <LinearGradient
        xlinkHref="#LinearGradient8057"
        x1={287.10718}
        y1={1261.7969}
        x2={285.89679}
        y2={1112.5933}
        gradientUnits="userSpaceOnUse"
      />
      <LinearGradient
        xlinkHref="#LinearGradient8057"
        x1={287.10718}
        y1={1261.7969}
        x2={285.89679}
        y2={1112.5933}
        gradientUnits="userSpaceOnUse"
      />
      <LinearGradient
        xlinkHref="#LinearGradient8057"
        x1={287.10718}
        y1={1261.7969}
        x2={285.89679}
        y2={1112.5933}
        gradientUnits="userSpaceOnUse"
      />
      <LinearGradient
        xlinkHref="#LinearGradient8057"
        x1={287.10718}
        y1={1261.7969}
        x2={285.89679}
        y2={1112.5933}
        gradientUnits="userSpaceOnUse"
      />
      <LinearGradient
        xlinkHref="#LinearGradient9009"
        gradientUnits="userSpaceOnUse"
        x1={288.71896}
        y1={1262.3733}
        x2={289.2663}
        y2={1175.2327}
      />
      <LinearGradient
        xlinkHref="#LinearGradient9009"
        gradientUnits="userSpaceOnUse"
        x1={288.71896}
        y1={1262.3733}
        x2={289.2663}
        y2={1175.2327}
      />
      <LinearGradient
        xlinkHref="#LinearGradient9009"
        gradientUnits="userSpaceOnUse"
        x1={288.71896}
        y1={1262.3733}
        x2={289.2663}
        y2={1175.2327}
      />
      <LinearGradient
        xlinkHref="#LinearGradient9009"
        gradientUnits="userSpaceOnUse"
        x1={288.71896}
        y1={1262.3733}
        x2={289.2663}
        y2={1175.2327}
      />
      <LinearGradient
        xlinkHref="#LinearGradient9009"
        gradientUnits="userSpaceOnUse"
        x1={288.71896}
        y1={1262.3733}
        x2={289.2663}
        y2={1175.2327}
      />
      <LinearGradient
        xlinkHref="#LinearGradient9009"
        gradientUnits="userSpaceOnUse"
        x1={288.71896}
        y1={1262.3733}
        x2={289.2663}
        y2={1175.2327}
      />
      <LinearGradient
        xlinkHref="#LinearGradient9009"
        gradientUnits="userSpaceOnUse"
        x1={288.71896}
        y1={1262.3733}
        x2={289.2663}
        y2={1175.2327}
      />
      <LinearGradient
        xlinkHref="#LinearGradient9009"
        gradientUnits="userSpaceOnUse"
        x1={288.71896}
        y1={1262.3733}
        x2={289.2663}
        y2={1175.2327}
      />
      <LinearGradient
        xlinkHref="#LinearGradient9009"
        gradientUnits="userSpaceOnUse"
        x1={288.71896}
        y1={1262.3733}
        x2={289.2663}
        y2={1175.2327}
      />
      <Path
        d="M117.02261 576.80591H259.61212V611.1545120000001H117.02261z"
        fill="#fff"
        strokeWidth={1.16259491}
      />
      <Path
        d="M126.09815 633.52802H268.68766V667.876622H126.09815z"
        fill="#fff"
        strokeWidth={1.16259491}
      />
      <Path
        d="M128.36703 693.36981H270.95654V727.7184120000001H128.36703z"
        fill="#fff"
        strokeWidth={1.16259491}
      />
      <Path
        d="M129.50146 743.28522H272.09096999999997V796.352115H129.50146z"
        fill="#fff"
        strokeWidth={1.44505942}
      />
      <Path
        d="M114.27558 859.2547H235.3107V912.321595H114.27558z"
        fill="#fff"
        strokeWidth={1.33136642}
      />
      <Path
        d="M103.51726 972.98114H249.60044V1013.655178H103.51726z"
        fill="#fff"
      />
      <Path
        d="M50.198483 1048.2556H165.988013V1088.929638H50.198483z"
        fill="#fff"
      />
      <Path
        d="M459.95047 1313.2721H508.267773V1353.946138H459.95047z"
        fill="#fff"
      />
      <Path
        d="M660.88324 1086.3245H729.023079V1118.9009469999999H660.88324z"
        fill="#fff"
        strokeWidth={0.74381548}
      />
      <Path
        d="M735.24811 1028.2365H789.073351V1052.386729H735.24811z"
        fill="#fff"
      />
      <Path
        d="M903.24017 878.83362H951.5574730000001V909.180277H903.24017z"
        fill="#fff"
      />
      <Path
        d="M935.9707 712.98383H990.0863459999999V739.4286050000001H935.9707z"
        fill="#fff"
        strokeWidth={0.67179269}
      />
      <Path
        d="M939.1579 587.61633H993.273546V614.061105H939.1579z"
        fill="#fff"
        strokeWidth={0.67179269}
      />
      <Path
        d="M897.33594 376.7312H1051.15634V410.598586H897.33594z"
        fill="#fff"
        strokeWidth={1.62812531}
      />
      <Path
        d="M945.65387 275.63486H1051.66776V297.552649H945.65387z"
        fill="#fff"
        strokeWidth={0.74627692}
      />
      <Path
        d="M900.54865 210.00249H1048.6973V234.15272H900.54865z"
        fill="#fff"
      />
      <Path
        d="M1028.3854 90.595345H1171.46391V127.742043H1028.3854z"
        fill="#fff"
        strokeWidth={1.09116066}
      />
      <Path
        d="M1014.6024 32.932381H1124.88399V55.86421H1014.6024z"
        fill="#fff"
        strokeWidth={0.64094543}
      />
      <Path
        d="M963.59 41.29l117.39-35.45 38.405 37.854z"
        fill="none"
        stroke="#fff"
        strokeWidth="1.1632961px"
        strokeLinecap="butt"
        strokeLinejoin="miter"
        strokeOpacity={1}
      />
      <Path
        d="M817.012 2.82l77.108 36.092 66.08-27.67zM750.03 61.78l59.679-30.597 51.021 32.2zM656.979 8.836l64.173 35.296 60.163-29.28zM627.712 31.183l-87.85 36.212 168.857-2.407zM475.287 4.424l-1.204 34.895 78.613-1.204-2.005-35.696z"
        fill="none"
        stroke="#fff"
        strokeWidth="1px"
        strokeLinecap="butt"
        strokeLinejoin="miter"
        strokeOpacity={1}
      />
      <Path
        d="M241.72687 45.649052H389.18703V81.503647H241.72687z"
        fill="#fff"
      />
      <Path
        d="M240.41942 103.38789H387.87958000000003V139.242485H240.41942z"
        fill="#fff"
      />
      <Path
        d="M232.77612 160.59814H380.23627999999997V196.45273500000002H232.77612z"
        fill="#fff"
      />
      <Path
        d="M241.49744 218.75426H403.35398V254.608855H241.49744z"
        fill="#fff"
        strokeWidth={1.04767799}
      />
      <Path
        d="M225.37106 278.82913H387.2276V314.68372500000004H225.37106z"
        fill="#fff"
        strokeWidth={1.04767799}
      />
      <Path
        d="M192.47224 340.08899H354.32878V375.94358500000004H192.47224z"
        fill="#fff"
        strokeWidth={1.04767799}
      />
      <Path
        d="M499.352 340.133l57.006 34.344 44.469-28.328zM521.813 385.055l2.005 21.257 86.541 4.065-1.283-22.059z"
        fill="none"
        stroke="#fff"
        strokeWidth="1px"
        strokeLinecap="butt"
        strokeLinejoin="miter"
        strokeOpacity={1}
      />
      <Path
        d="M644.74487 525.54193H799.3997899999999V564.856505H644.74487z"
        fill="#fff"
        strokeWidth={1.0663811}
      />
      <Path
        d="M871.907 546.365l38.145 49.961 46.248-55.553zM898.28 608.051l19.003 28.083 56.954 3.61 22.862-22.06z"
        fill="none"
        stroke="#fff"
        strokeWidth="1px"
        strokeLinecap="butt"
        strokeLinejoin="miter"
        strokeOpacity={1}
      />
      <Path
        d="M1045.8276 633.11334H1139.4955610000002V672.2398929999999H1045.8276z"
        fill="#fff"
        strokeWidth={2.08520174}
      />
      <Path
        d="M1612.7974 1249.5775H1709.7974V1279.693892H1612.7974z"
        fill="#fff"
        strokeWidth={0.70264596}
      />
      <Path
        d="M1518.8251 1204.3455H1641.8956600000001V1240.077094H1518.8251z"
        fill="#fff"
        strokeWidth={0.86208981}
      />
      <Path
        d="M1336.6418 1596.8137H1467.6418V1633.5416209999999H1336.6418z"
        fill="#fff"
        strokeWidth={1.23706508}
      />
      <Path
        d="M1353.665 847.908l4.412 24.065 132.759-.401.802-20.857z"
        fill="none"
        stroke="#fff"
        strokeWidth="1px"
        strokeLinecap="butt"
        strokeLinejoin="miter"
        strokeOpacity={1}
      />
      <Path
        d="M1266.415 757.087l132.171-13.251-90.705-1.833 50.535 19.032z"
        fill="none"
        stroke="#fff"
        strokeWidth="1.0656203px"
        strokeLinecap="butt"
        strokeLinejoin="miter"
        strokeOpacity={1}
      />
      <Path
        d="M1686.5972 1301.3176H1761.5374769999999V1331.433992H1686.5972z"
        fill="#fff"
        strokeWidth={0.61760151}
      />
      <Path
        d="M1516.3511 1727.3474H1592.42055V1761.9704160000001H1516.3511z"
        fill="#fff"
      />
      <Path
        d="M1587.4609 1697.749H1717.4859900000001V1730.355529H1587.4609z"
        fill="#fff"
        strokeWidth={1.1611563}
      />
      <Path
        d="M1991.5092 2029.1541H2166.94829V2065.1540999999997H1991.5092z"
        fill="#fff"
        strokeWidth={1.04387915}
      />
      <Path
        d="M1510.1927 1855.554H1610.3593700000001V1890.177016H1510.1927z"
        fill="#fff"
      />
      <Path
        d="M1497.1548 1965.1669H1591.827819V1999.789916H1497.1548z"
        fill="#fff"
        strokeWidth={0.88268799}
      />
      <Path
        d="M1286.6239 2015.1172H1335.8421620000001V2049.7402159999997H1286.6239z"
        fill="#fff"
      />
      <Path
        d="M1246.6227 2086.1804H1403.24572V2112.9176780000003H1246.6227z"
        fill="#fff"
        strokeWidth={0.8787719}
      />
      <Path
        d="M1265.8712 2153.4126H1461.55385V2174.598986H1265.8712z"
        fill="#fff"
        strokeWidth={0.99552041}
      />
      <Path
        d="M1247.5364 2263.2722H1337.009972V2295.317019H1247.5364z"
        fill="#fff"
        strokeWidth={0.82788855}
      />
      <Path
        d="M1254.507 2321.3953H1343.9805720000002V2353.4401190000003H1254.507z"
        fill="#fff"
        strokeWidth={0.82788855}
      />
      <Path
        d="M1254.543 2380.0986H1371.84132V2412.143419H1254.543z"
        fill="#fff"
        strokeWidth={0.9479171}
      />
      <Path
        d="M1255.0212 2436.5671H1372.31952V2468.6119190000004H1255.0212z"
        fill="#fff"
        strokeWidth={0.9479171}
      />
      <Path
        d="M1254.5413 2494.8723H1382.8768400000001V2526.917119H1254.5413z"
        fill="#fff"
        strokeWidth={0.99151194}
      />
      <Path
        d="M1251.9021 2549.5786H1380.23764V2581.623419H1251.9021z"
        fill="#fff"
        strokeWidth={0.99151194}
      />
      <Path
        d="M1010.25 51.343c-9.946-10.4-11.635-12.071-26.179-12.471l-.094-7.73h.094-.094c15.858 0 19.987 3.4 30.871 15l2.714 2.87-5.694 4.144zm-41.949-20.2v7.729h15.77l-.094-7.73z"
        fill = {this.state.d1} onPress = {this.Handler_d1}
        fillOpacity={1}
        strokeWidth={0.96866733}
      />
      <Path
        d="M1011.624 49.885c-10.3-11.107-13.034-12.817-27.578-13.217l-.336-.015.173-3.322c15.858 0 17.335 1.83 29.634 14.138l3.404 3.588-2.584 3.16zm-45.08-16.542v3.322l17.166-.012.173-3.323z"
        fill="#fff"
        fillOpacity={1}
        strokeWidth={0.96866733}
      />
      <Path
        d="M1091.4109 248.10304H1254.7109V284.10303999999996H1091.4109z"
        fill="#fff"
      />
      <Path
        d="M1101.2015 319.43054H1228.0014999999999V357.83054200000004H1101.2015z"
        fill="#fff"
      />
      <Path
        d="M1101.7106 373.73752H1232.6105900000002V412.33107900000005H1101.7106z"
        fill="#fff"
      />
      <Path d="M503.35931 1594.877H614.35931V1632.877H503.35931z" fill="#fff" />
      <Path
        d="M517.35931 1467.7769H628.35931V1510.5768990000001H517.35931z"
        fill="#fff"
      />
      <Path
        d="M503.6593 1531.9771H668.81251V1574.7770990000001H503.6593z"
        fill="#fff"
        strokeWidth={1.22143316}
      />
      <Path d="M671.05933 1940.377H829.05933V1976.377H671.05933z" fill="#fff" />
      <Path d="M671.05933 1984.377H829.05933V2020.377H671.05933z" fill="#fff" />
      <Path d="M671.05933 2027.377H829.05933V2063.377H671.05933z" fill="#fff" />
      <Path
        d="M775.888 782.076l156.25 2.708-63.679 24.993-12.298 4.616c-26.758-10.772-85.816 9.26-80.273-32.317z"
        fill="#fff"
        fillOpacity={1}
        stroke="none"
        strokeWidth={1.04900002}
        strokeMiterlimit={4}
        strokeDasharray="none"
        strokeOpacity={1}
      />
      <Path
        d="M670.184 1242.648l-3.594-58.687 106.77 3.609-8.8 58.128z"
        fill="#fff"
        fillOpacity={1}
        strokeWidth={1.27607095}
      />
      <Path
        d="M1056.8286 399.82138H1098.123621V446.62841699999996H1056.8286z"
        opacity={1}
        fill="#fff"
        fillOpacity={1}
        stroke="none"
        strokeWidth={0.50284225}
        strokeMiterlimit={4}
        strokeDasharray="none"
        strokeOpacity={1}
      />
      <Path
        d="M853.1593 835.0769H958.3593000000001V875.176898H853.1593z"
        fill="#fff"
      />
      <Path d="M668.35931 1733.177H829.35931V1775.177H668.35931z" fill="#fff" />
      <Path
        fill="#fff"
        d="M662.89313 2074.2349H818.2436200000001V2122.480399H662.89313z"
      />
      <Path
        fill="#fff"
        d="M697.95154 976.1673H751.986498V1024.412799H697.95154z"
      />
      <Path
        fill="#fff"
        d="M785.7757 872.23169H887.4375600000001V909.9853099999999H785.7757z"
      />
      <Path
        d="M868.45929 806.2959H899.467743V831.8977749999999H868.45929z"
        fill="#fff"
        strokeWidth={0.45784914}
      />
      <Path
        fill="#fff"
        d="M585.40857 972.07397H738.24251V1005.27896H585.40857z"
      />
      <Path
        fill="#fff"
        d="M737.83447 852.65881H803.448346V906.693768H737.83447z"
      />
      <Path
        fill="#fff"
        d="M1107.0734 1120.2605H1229.9386V1183.6229190000001H1107.0734z"
      />
      <Path
        fill="#fff"
        d="M1381.9049 984.94031H1527.05846V1026.6917859999999H1381.9049z"
      />
      <Path
        d="M673.35931 1639.5769H817.35931V1684.176898H673.35931z"
        fill="#fff"
      />
      <Path d="M666.35931 1596.177H815.35931V1639.177H666.35931z" fill="#fff" />
      <Path d="M675.35931 1535.177H856.35931V1579.177H675.35931z" fill="#fff" />
      <Path d="M701.35931 1436.177H847.35931V1480.177H701.35931z" fill="#fff" />
      <Path d="M777.35931 1383.177H911.45932V1419.177H777.35931z" fill="#fff" />
      <Path d="M822.35931 1308.177H912.35931V1350.177H822.35931z" fill="#fff" />
      <Path
        d="M946.35931 1307.177H1083.35931V1367.177H946.35931z"
        fill="#fff"
      />
      <Path d="M1084.3594 1270.177H1219.3594V1327.177H1084.3594z" fill="#fff" />
      <Path d="M1281.3594 1070.177H1375.3594V1119.177H1281.3594z" fill="#fff" />
      <Path d="M1425.3594 943.177H1588.3594V987.177H1425.3594z" fill="#fff" />
      <Path
        d="M1463.3594 891.37695H1640.3594V916.1769489999999H1463.3594z"
        fill="#fff"
      />
      <Path
        d="M1531.9432 852.177H1637.36148V888.3770010000001H1531.9432z"
        fill="#fff"
        strokeWidth={0.78516316}
      />
      <Path
        d="M1579.6826 764.82251H1716.6826V798.82251H1579.6826z"
        fill="#fff"
      />
      <Path
        d="M1662.1418 701.27893H1851.7513000000001V729.1816779999999H1662.1418z"
        fill="#fff"
        strokeWidth={0.74120849}
      />
      <Path
        d="M1536.2053 673.00989H1701.86393V696.09825H1536.2053z"
        fill="#fff"
        strokeWidth={0.87114072}
      />
      <Path
        d="M1704.4083 531.44733H1858.4083V568.44733H1704.4083z"
        fill="#fff"
      />
      <Path
        d="M275.67 385.81l.567 26.092 171.3 1.135-2.269-34.034z"
        fill="none"
        stroke="#fff"
        strokeWidth="1px"
        strokeLinecap="butt"
        strokeLinejoin="miter"
        strokeOpacity={1}
      />
      <Path d="M407.76263 286.8967H514.76263V326.8967H407.76263z" fill="#fff" />
      <Path
        d="M417.57529 235.3033H542.4427499999999V275.30330000000004H417.57529z"
        fill="#fff"
        strokeWidth={1.08027112}
      />
      <Path d="M404.35931 566.177H534.35931V606.177H404.35931z" fill="#fff" />
      <Path d="M403.35931 621.177H523.35931V665.177H403.35931z" fill="#fff" />
      <Path d="M328.35931 791.177H471.35931V834.177H328.35931z" fill="#fff" />
      <Path
        d="M327.35931 836.177H503.20669V878.177H327.35931z"
        fill="#fff"
        strokeWidth={1.14555395}
      />
      <Path
        d="M314.75385 1033.2802H487.77828999999997V1063.370475H314.75385z"
        fill="#fff"
        strokeWidth={1.10318005}
      />
      <Path
        d="M498.35931 1368.7769H608.35931V1413.1769020000002H498.35931z"
        fill="#fff"
      />
      <Path
        transform="rotate(-.486)"
        d="M1056.5869 1197.2262H1154.490426V1242.0278090000002H1056.5869z"
        fill="#fff"
      />
      <Path d="M1199.3594 1209.177H1344.3594V1246.177H1199.3594z" fill="#fff" />
      <Path
        d="M1533.3594 1066.177H1642.3594V1096.189545H1533.3594z"
        fill="#fff"
      />
      <Path
        d="M1592.3594 1003.7021H1699.26752V1046.276971H1592.3594z"
        fill="#fff"
        strokeWidth={0.94912755}
      />
      <Path
        d="M1661.0316 828.42163H1779.0316V861.721629H1661.0316z"
        fill="#fff"
      />
      <Path
        d="M1734.3594 845.177H1902.3594V881.077002H1734.3594z"
        fill="#fff"
      />
      <Path
        d="M1844.1943 762.36157H2010.1943V802.36157H1844.1943z"
        fill="#fff"
      />
      <Path
        d="M1855.6866 624.99005H2021.6866V667.99005H1855.6866z"
        fill="#fff"
      />
      <Path
        d="M1849.1896 562.22388H2001.1896V618.22388H1849.1896z"
        fill="#fff"
      />
      <Path
        d="M173.37587 1100.9535H318.37586999999996V1135.9535H173.37587z"
        fill="#fff"
      />
      <Path
        d="M346.07288 1088.0374H482.07288V1135.837399H346.07288z"
        fill="#fff"
      />
      <Path
        d="M200.57039 1152.3351H385.57039V1192.935098H200.57039z"
        fill="#fff"
      />
      <Path
        d="M371.18295 1280.9272H463.582952V1312.9272H371.18295z"
        fill="#fff"
      />
      <Path
        d="M524.03998 1288.4771H668.55927V1321.4771H524.03998z"
        fill="#fff"
        strokeWidth={1.02782655}
      />
      <Path d="M660.35931 1301.177H806.35931V1350.177H660.35931z" fill="#fff" />
      <Path
        d="M440.25073 1153.8464H596.8333399999999V1180.1769089999998H440.25073z"
        fill="#fff"
        strokeWidth={0.69743854}
      />
      <Path
        d="M645.4505 1136.0521H775.99614V1169.029696H645.4505z"
        fill="#fff"
      />
      <Path
        d="M690.338 1096.573l68.536-61.753 6.974 6.424-68.346 59.874z"
        fill = {this.state.d1} onPress = {this.Handler_d1}
        fillOpacity={1}
        strokeWidth={1.21400297}
      />
      <Path
        d="M691.9 1098.584l69.458-61.895 1.75 2.606-68.474 61.058z"
        fill="#fff"
        fillOpacity={1}
        strokeWidth={1.21400297}
      />
      <Path
        d="M777.35931 1127.5769H848.35931V1187.176898H777.35931z"
        fill="#fff"
      />
      <Path
        d="M777.35931 1127.5769H848.35931V1187.176898H777.35931z"
        fill="#fff"
      />
      <Path
        transform="rotate(-.486)"
        d="M1001.5393 1158.9022H1110.2432000000001V1196.503553H1001.5393z"
        fill="#fff"
      />
      <Path d="M611.35931 276.177H750.35931V319.177H611.35931z" fill="#fff" />
      <Path d="M611.35931 321.177H770.35931V363.177H611.35931z" fill="#fff" />
      <Path
        d="M618.58154 364.177H747.35928V408.177H618.58154z"
        fill="#fff"
        strokeWidth={0.96952748}
      />
      <Path
        d="M557.987 374.439l26.177.162c8.11.026 12.743 4.425 12.743 14.225l7.707.025c0-13.1-6.198-22.168-20.24-22.125-16.24.008-26.387-.005-26.387-.005z"
        fill = {this.state.d2} onPress = {this.Handler_d2}
        fillOpacity={1}
      />
      <Path
        d="M556.757 372.355l27.164.08c12.729.072 14.886 8.886 15.107 16.565l3.112.11 2.187-.24-2.187.24c-.575-11.155-4.962-20.04-18.253-19.954-16.239.008-27.129-.133-27.129-.133z"
        fill="#fff"
        fillOpacity={1}
      />
      <Path
        d="M610.35931 410.37695H725.35931V450.17694900000004H610.35931z"
        fill="#fff"
      />
      <Path
        d="M611.35931 573.177H752.35931V615.476999H611.35931z"
        fill="#fff"
      />
      <Path
        d="M666.35931 901.27686H746.059307V954.176862H666.35931z"
        fill="#fff"
      />
      <Path
        d="M749.6994 964.09119H827.4464469999999V1016.492702H749.6994z"
        fill="#f7fcff"
        fillOpacity={1}
        stroke="none"
        strokeWidth={0.85769379}
        strokeMiterlimit={4}
        strokeDasharray="none"
        strokeOpacity={1}
      />
      <Path
        d="M794.12091 1039.208H850.728961V1100.962238H794.12091z"
        fill="#f7fcff"
        fillOpacity={1}
        stroke="none"
        strokeWidth={0.85769379}
        strokeMiterlimit={4}
        strokeDasharray="none"
        strokeOpacity={1}
      />
      <Path
        d="M879.56696 1021.0364H1026.16146V1062.607975H879.56696z"
        fill="#f7fcff"
        fillOpacity={1}
        stroke="none"
        strokeWidth={1.04900002}
        strokeMiterlimit={4}
        strokeDasharray="none"
        strokeOpacity={1}
      />
      <Path
        d="M1045.3594 1018.177H1170.3594V1074.1770000000001H1045.3594z"
        fill="#fff"
      />
      <Path
        transform="rotate(-.332)"
        d="M1174.5923 1031.9484H1324.59482V1076.049139H1174.5923z"
        fill="#fff"
      />
      <Path
        d="M1396.3594 1110.2769H1460.8594V1168.1769020000002H1396.3594z"
        fill="#fff"
      />
      <Path
        d="M1435.3594 1245.177H1584.95941V1279.177H1435.3594z"
        fill="#fff"
      />
      <Path d="M1644.3594 1357.177H1801.3594V1400.177H1644.3594z" fill="#fff" />
      <Path d="M1696.3594 1402.177H1935.3594V1453.177H1696.3594z" fill="#fff" />
      <Rect
        width={5.4904985}
        height={4.6103568}
        x={2212.3591}
        y={1409.5377}
        transform="matrix(.99938 .03524 -.27286 .96205 0 0)"
        ry={1.2235147}
        fill="#fff"
        fillOpacity={1}
        fillRule="nonzero"
        stroke="none"
        strokeWidth={0.80000001}
        strokeLinecap="butt"
        strokeLinejoin="bevel"
        strokeMiterlimit={4}
        strokeDasharray="none"
        strokeDashoffset={0}
        strokeOpacity={1}
      />
      <Path
        d="M1765.7196 1463.3645H1938.3485699999999V1518.3645H1765.7196z"
        fill="#fff"
        strokeWidth={1.77633345}
      />
      <Path
        d="M815.17877 297.84332H1023.20207V341.84332H815.17877z"
        fill="#fff"
        strokeWidth={1.09974444}
      />
      <Path
        d="M813.35931 253.87738H985.35931V272.352436H813.35931z"
        fill="#fff"
        strokeWidth={0.64798737}
      />
      <Path
        d="M815.17877 347.84332H1021.95857V375.087361H815.17877z"
        fill="#fff"
        strokeWidth={0.92220968}
      />
      <Path
        d="M702.48444 441.90164H857.1393599999999V481.216215H702.48444z"
        fill="#fff"
        strokeWidth={1.0663811}
      />
      <Path d="M831.35931 660.177H921.35931V699.177H831.35931z" fill="#fff" />
      <Path
        d="M740.17694 747.26636H861.17694V770.521275H740.17694z"
        fill="#fff"
      />
      <Path
        d="M860.1593 905.50659H957.359297V933.177099H860.1593z"
        fill="#fff"
      />
      <Path d="M958.35931 943.177H1092.35931V984.177H958.35931z" fill="#fff" />
      <Path d="M1328.3594 1304.177H1494.3594V1342.177H1328.3594z" fill="#fff" />
      <Path
        d="M1350.3594 1474.177H1471.3594V1510.577002H1350.3594z"
        fill="#fff"
      />
      <Path
        d="M1321.5699 1810.9021H1475.5699V1851.9021H1321.5699z"
        fill="#fff"
      />
      <Path
        d="M1327.3594 1934.7969H1512.3594V1957.70512H1327.3594z"
        fill="#fff"
      />
      <Path d="M1327.3594 1980.177H1452.3594V2023.177H1327.3594z" fill="#fff" />
      <Path
        d="M1326.3594 2042.177H1439.3594V2085.1769999999997H1326.3594z"
        fill="#fff"
      />
      <Path
        d="M1326.3594 2118.7327H1504.3594V2147.177087H1326.3594z"
        fill="#fff"
        strokeWidth={0.81332487}
      />
      <Path d="M1412.3594 2176.177H1611.3594V2227.177H1412.3594z" fill="#fff" />
      <Path d="M1624.3594 2177.177H1821.3594V2225.177H1624.3594z" fill="#fff" />
      <Path
        d="M1281.1724 177.804H1424.13123V222.803977H1281.1724z"
        fill="#fff"
        strokeWidth={1.07800877}
      />
      <Path
        d="M1290.545 221.42941H1409.18995V265.429387H1290.545z"
        fill="#fff"
        strokeWidth={1.1222713}
      />
      <Path
        d="M1280.0541 279.3212H1410.5528800000002V314.921198H1280.0541z"
        fill="#fff"
        strokeWidth={1.06796753}
      />
      <Path
        d="M997.22516 729.78973H1027.2785159999999V766.329391H997.22516z"
        fill="#fff"
        strokeWidth={0.53181708}
      />
      <Path
        d="M1237.1512 354.91425H1388.59457V389.60661799999997H1237.1512z"
        fill="#fff"
        fillOpacity={1}
        stroke="none"
        strokeWidth={0.94333249}
        strokeMiterlimit={4}
        strokeDasharray="none"
        strokeOpacity={1}
      />
      <Path
        d="M1134.9839 464.94128H1399.7538299999999V501.403125H1134.9839z"
        fill="#fff"
        strokeWidth={1.18442738}
      />
      <Path
        d="M1010.0985 583.14117H1050.877633V619.5531149999999H1010.0985z"
        fill="#fff"
        strokeWidth={1.32726514}
      />
      <Path
        d="M1014.8956 673.14368H1094.868577V707.154472H1014.8956z"
        fill="#fff"
        strokeWidth={0.78796214}
      />
      <Path
        d="M1022.706 754.47675H1172.7060000000001V778.117428H1022.706z"
        fill="#fff"
      />
      <Path
        d="M875.1 801.015l-4.44 5.28 2.629 7.234 6.59-7.32c9.526-11.326 15.939-15.926 30.595-21.092l96.041-23.896-1.405-5.963-95.887 23.047c-16.42 5.372-23.76 10.389-34.122 22.71z"
        fill = {this.state.Branch11} onPress = {this.Handler11}
      />
      <Path
        d="M1055.3594 847.177H1216.7593900000002V890.177H1055.3594z"
        fill="#fff"
      />
      <Path d="M1095.6593 925.177H1200.3593V972.177H1095.6593z" fill="#fff" />
      <Path d="M1111.3594 1075.177H1221.3594V1116.177H1111.3594z" fill="#fff" />
      <Path
        d="M923.35931 1230.177H1066.35931V1274.177H923.35931z"
        fill="#fff"
      />
      <Path d="M1122.3594 1409.177H1216.3594V1450.177H1122.3594z" fill="#fff" />
      <Path
        d="M1095.53 1505.177H1255.35932V1531.1281379999998H1095.53z"
        fill="#fff"
        strokeWidth={0.79540253}
      />
      <Path
        d="M1105.3594 1541.3749H1229.99632V1566.122781H1105.3594z"
        fill="#fff"
        strokeWidth={0.79470247}
      />
      <Path
        d="M1000.2081 1615.775H1135.5928999999999V1656.775H1000.2081z"
        fill="#fff"
        strokeWidth={0.97988564}
      />
      <Path d="M1105.3594 1796.177H1220.3594V1835.177H1105.3594z" fill="#fff" />
      <Path d="M1105.3594 1837.177H1258.3594V1885.177H1105.3594z" fill="#fff" />
      <Path d="M1107.3594 1988.177H1256.3594V2024.177H1107.3594z" fill="#fff" />
      <Path
        d="M1107.3594 2026.177H1226.2594000000001V2058.1769999999997H1107.3594z"
        fill="#fff"
      />
      <Path d="M1107.3594 2061.177H1228.3594V2093.177H1107.3594z" fill="#fff" />
      <Path d="M1105.3594 2102.177H1318.3594V2146.177H1105.3594z" fill="#fff" />
      <Path d="M1105.3594 2147.177H1219.6594V2183.177H1105.3594z" fill="#fff" />
      <Path
        d="M1105.3594 2185.177H1293.71568V2228.60412H1105.3594z"
        fill="#fff"
      />
      <Path
        d="M1302.908 2025.305s-10.147.02-26.386.01c-14.042-.043-20.24 9.025-20.24 22.125v11.07h.03l.37 44.523 7.673-.04-.369-44.483h.024l-.022-11.096c0-9.8 4.632-14.198 12.742-14.224l26.178-.163z"
        fill = {this.state.d2} onPress = {this.Handler_d2}
        fillOpacity={1}
      />
      <Path
        d="M1304.137 2027.412s-10.89.143-27.13.133c-13.467-.176-18.054 7.826-18.54 19.865l.014 9.557h.027l.377 47.808 3.299-.018-.383-48.564-.022-9.014c.22-7.678 2.465-16.283 15.193-16.355l27.166-.08z"
        fill="#fff"
        fillOpacity={1}
      />
      <Path
        d="M477.11978 366.64682H556.079421V374.3760099H477.11978z"
        fill = {this.state.d2} onPress = {this.Handler_d2}
        fillOpacity={1}
        strokeWidth={0.72471315}
      />
      <Path
        d="M476.9408 368.92206H556.200161V372.2440939H476.9408z"
        fill="#fff"
        fillOpacity={1}
        strokeWidth={0.47891283}
      />
      <Path
        d="M1408.9384 249.89072H1558.9384V291.89072H1408.9384z"
        fill="#fff"
      />
      <Path d="M1444.5906 296.7178H1606.5906V340.7178H1444.5906z" fill="#fff" />
      <Path
        d="M1449.8567 347.07135H1570.8567V388.07135H1449.8567z"
        fill="#fff"
      />
      <Path d="M1404.3594 580.177H1526.3594V618.177H1404.3594z" fill="#fff" />
      <Path
        d="M1441.2593 630.22046H1602.2593V664.22046H1441.2593z"
        fill="#fff"
      />
      <Path
        d="M1413.8549 727.177H1501.7767290000002V761.729635H1413.8549z"
        fill="#fff"
        strokeWidth={1.02149487}
      />
      <Path d="M1322.1593 781.5769H1501.3593V813.1769H1322.1593z" fill="#fff" />
      <Path d="M1294.3594 874.177H1436.3594V919.177H1294.3594z" fill="#fff" />
      <Path
        d="M1225.0593 982.177H1371.3592999999998V1022.3770010000001H1225.0593z"
        fill="#fff"
      />
      <Path
        d="M1294.5593 1120.177H1395.3592999999998V1167.177H1294.5593z"
        fill="#fff"
      />
      <Path d="M1183.3594 1328.177H1326.3594V1360.177H1183.3594z" fill="#fff" />
      <Path
        d="M891.35931 1443.177H1038.35931V1493.177H891.35931z"
        fill="#fff"
      />
      <Path
        d="M955.50049 1508.0063H1091.3702V1536.342236H955.50049z"
        fill="#fff"
        strokeWidth={0.63433623}
      />
      <Path
        d="M890.23798 1653.177H1071.3593V1694.0556809999998H890.23798z"
        fill="#fff"
        strokeWidth={0.98078197}
      />
      <Path
        d="M887.35931 1743.7125H1055.35931V1784.176966H887.35931z"
        fill="#fff"
        strokeWidth={0.95898223}
      />
      <Path
        d="M877.35931 1785.177H1085.35931V1824.2272509999998H877.35931z"
        fill="#fff"
        strokeWidth={0.94207525}
      />
      <Path
        d="M860.2442 1842.7922H908.681505V1883.022604H860.2442z"
        fill="#fff"
        strokeWidth={0.75144064}
      />
      <Path
        d="M880.05933 1915.377H985.2593300000001V1949.176999H880.05933z"
        fill="#fff"
      />
      <Path
        d="M865.35931 1954.177H991.9593100000001V1994.177H865.35931z"
        fill="#fff"
      />
      <Path
        d="M864.35931 1998.177H1024.15931V2039.177H864.35931z"
        fill="#fff"
      />
      <Path
        d="M864.35931 2043.177H984.5593100000001V2084.1769999999997H864.35931z"
        fill="#fff"
      />
      <Path
        d="M865.35931 2088.7769H1073.35931V2123.6769019999997H865.35931z"
        fill="#fff"
      />
      <Path
        d="M1078.3827 707.90637H1233.6606700000002V742.44475H1078.3827z"
        fill="#fff"
        strokeWidth={1.07636464}
      />
      <Path d="M1179.3594 758.177H1319.95941V795.177H1179.3594z" fill="#fff" />
      <Path d="M1202.3594 901.177H1291.059397V946.177H1202.3594z" fill="#fff" />
      <Path d="M1294.3594 920.177H1423.3594V979.177H1294.3594z" fill="#fff" />
      <Path
        d="M1382.9312 1061.2775H1517.9312V1096.6052889999999H1382.9312z"
        fill="#fff"
        strokeWidth={0.92825288}
      />
      <Path
        d="M1556.3594 1167.8573H1653.3594V1199.176953H1556.3594z"
        fill="#fff"
        strokeWidth={0.7165451}
      />
      <Path
        d="M1513.3594 1365.377H1636.13986V1401.079282H1513.3594z"
        fill="#fff"
        strokeWidth={0.68529677}
      />
      <Path
        d="M1599.4241 1465.3979H1730.7241V1510.3979H1599.4241z"
        fill="#fff"
      />
      <Path
        d="M1599.6923 1546.4752H1765.3803599999999V1589.4752H1599.6923z"
        fill="#fff"
        strokeWidth={1.1051172}
      />
      <Path
        d="M1596.5913 1638.8962H1636.995467V1680.510679H1596.5913z"
        fill="#fff"
        strokeWidth={0.73124027}
      />
      <Path
        d="M1616.6724 1780.177H1736.05935V1820.177H1616.6724z"
        fill="#fff"
        strokeWidth={0.94570959}
      />
      <Path
        d="M1620.6616 1840.177H1726.85935V1881.177H1620.6616z"
        fill="#fff"
        strokeWidth={0.84565735}
      />
      <Path
        d="M1753.722 1535.9418H1849.655212V1578.9418H1753.722z"
        fill="#fff"
        strokeWidth={1.17086017}
      />
      <Path
        d="M1619.3873 1899.177H1764.3593600000002V1943.177H1619.3873z"
        fill="#fff"
        strokeWidth={0.88523036}
      />
      <Path
        d="M1614.7484 1959.177H1742.25936V2003.177H1614.7484z"
        fill="#fff"
        strokeWidth={0.88203192}
      />
      <Path
        d="M1579.3594 2020.177H1742.8594V2064.1769999999997H1579.3594z"
        fill="#fff"
      />
      <Path
        d="M1579.3594 2081.177H1774.7593900000002V2122.177H1579.3594z"
        fill="#fff"
      />
      <Path d="M1577.3594 2134.177H1729.3594V2174.177H1577.3594z" fill="#fff" />
      <Path
        d="M773.35931 2125.4771H935.35931V2175.177101H773.35931z"
        fill="#fff"
      />
      <Path
        d="M937.35931 2126.2769H1075.35931V2174.1769019999997H937.35931z"
        fill="#fff"
      />
      <Path
        d="M858.35931 2177.177H1101.35931V2221.177H858.35931z"
        fill="#fff"
      />
      <Path
        d="M883.35931 2231.177H993.35931V2322.077002H883.35931z"
        fill="#fff"
      />
      <Path d="M768.35931 2231.177H880.35931V2302.177H768.35931z" fill="#fff" />
      <Path d="M652.35931 2231.177H763.35931V2302.177H652.35931z" fill="#fff" />
      <Path d="M1073.0593 1900.377H1168.0593V1945.377H1073.0593z" fill="#fff" />
      <Path d="M1176.3594 1896.177H1299.3594V1945.177H1176.3594z" fill="#fff" />
      <Path
        d="M417.75934 1412.2769H528.2593400000001V1458.0768990000001H417.75934z"
        fill="#fff"
      />
      <Path
        d="M1557.377 1293.427l102.982 25.088v36.662l-109.736 1.287z"
        fill="#fff"
      />
      <Path
        d="M1661.3594 1179.177H1743.074709V1221.74877H1661.3594z"
        fill="#fff"
        strokeWidth={0.76214111}
      />
      <Path
        d="M1725.5834 1094.4247H1778.510066V1144.142229H1725.5834z"
        fill="#fff"
        strokeWidth={0.62234223}
      />
      <Path d="M1827.2347 1042.965H1876.2347V1089.965H1827.2347z" fill="#fff" />
      <Path
        d="M1640.8369 1094.4247H1725.583368V1144.142214H1640.8369z"
        fill="#fff"
        strokeWidth={0.78750396}
      />
      <Path
        d="M1896.7903 1002.8782H2004.7903V1046.8782H1896.7903z"
        fill="#fff"
      />
      <Path
        d="M1907.0507 949.22534H2065.0507V980.22534H1907.0507z"
        fill="#fff"
      />
      <Path
        d="M1940.9535 865.56903H2007.449746V917.56903H1940.9535z"
        fill="#fff"
        strokeWidth={0.69668794}
      />
      <Path d="M852.35931 1165.177H885.35931V1230.177H852.35931z" fill="#fff" />
      <Path
        fill="#fff"
        d="M852.19843 1068.8396H1010.8268V1110.411175H852.19843z"
      />
      <Path d="M798.35931 934.177H957.35931V969.177H798.35931z" fill="#fff" />
      <Path
        d="M1058.3594 813.74976H1250.2593900000002V845.176878H1058.3594z"
        fill="#fff"
      />
      <Path
        d="M1322.1593 814.177H1501.3593V841.335741H1322.1593z"
        fill="#fff"
        strokeWidth={0.80033511}
      />
      <Path d="M1463.3594 918.177H1640.3594V941.577H1463.3594z" fill="#fff" />
      <Path
        d="M1498.8396 1026.9961H1542.348309V1058.518401H1498.8396z"
        fill="#fff"
        strokeWidth={1.41139078}
      />
      <Path d="M1439.3594 1280.177H1549.3594V1303.177H1439.3594z" fill="#fff" />
      <Path d="M1350.3594 1440.177H1471.3594V1473.177H1350.3594z" fill="#fff" />
      <Path d="M1137.3594 1447.177H1283.3594V1491.177H1137.3594z" fill="#fff" />
      <Path
        d="M312.55237 1194.9351H379.570406V1235.5350979999998H312.55237z"
        fill="#fff"
        strokeWidth={0.60188007}
      />
      <Path d="M667.35931 1793.177H799.35931V1837.177H667.35931z" fill="#fff" />
      <Path
        d="M1337.9659 1680.0159H1468.9659V1704.0159H1337.9659z"
        fill="#fff"
      />
      <Path d="M668.35931 1854.177H799.35931V1898.177H668.35931z" fill="#fff" />
      <Path d="M682.35931 1902.177H812.35931V1937.177H682.35931z" fill="#fff" />
      <Path
        d="M1145.5114 560.21838H1186.6008510000001V594.018379H1145.5114z"
        fill="#fff"
      />
      <Path
        d="M1057.0381 558.36346H1096.441191V590.36346H1057.0381z"
        fill="#fff"
      />
      <Path
        d="M1204.5294 553.66278H1277.5294V582.66278H1204.5294z"
        fill="#fff"
      />
      <Path
        d="M1276.2587 546.21143H1356.2587V578.21143H1276.2587z"
        fill="#fff"
      />
      <Path
        d="M1365.0436 537.22516H1413.814222V590.1211599999999H1365.0436z"
        fill="#fff"
      />
      <Path
        d="M1433.3594 531.07703H1520.3594V559.07703H1433.3594z"
        fill="#fff"
      />
      <Path d="M1109.182 489.10016H1179.182V517.900159H1109.182z" fill="#fff" />
      <Path d="M1170.27 520.953h154l.454 20.7-154.455 14.1z" fill="#fff" />
      <Path
        d="M1198.6438 592.69861H1345.6438V619.882887H1198.6438z"
        fill="#fff"
      />
      <Path
        d="M910.79871 452.46082H1015.79871V489.64835400000004H910.79871z"
        fill="#fff"
        strokeWidth={1.13239956}
      />
      <Path
        d="M844.537 489.98l119.74 4.01-6.373 33.147-108.123.999z"
        fill="#fff"
        fillOpacity={1}
        stroke="none"
        strokeWidth={1.04900002}
        strokeMiterlimit={4}
        strokeDasharray="none"
        strokeOpacity={1}
      />
      <Path
        d="M769.846 580.057l-10.19 30.408h99.47l-8.423-30.082-79.798-1.734zM610.423 737.334l3.61 43.317 108.694 2.005-8.824-43.718z"
        fill="none"
        stroke="#fff"
        strokeWidth="1px"
        strokeLinecap="butt"
        strokeLinejoin="miter"
        strokeOpacity={1}
      />
      <Path
        d="M490.229 908.09558H616.229V947.09558H490.229z"
        fill="#fff"
        fillOpacity={1}
      />
      <Path
        d="M492.50381 1017.319H618.5038099999999V1056.319H492.50381z"
        fill="#fff"
        fillOpacity={1}
      />
      <Path
        d="M503.73425 1108.7666H633.74511V1156.590487H503.73425z"
        fill="#fff"
        fillOpacity={1}
        strokeWidth={1.12485015}
      />
      <Path
        d="M680.88196 1296.0646H719.769629V1327.8631129999999H680.88196z"
        fill="#fff"
        fillOpacity={1}
        strokeWidth={0.4157525}
      />
      <Path
        d="M653.96808 1360.8627H766.27688V1403.4335199999998H653.96808z"
        fill="#fff"
        fillOpacity={1}
        strokeWidth={0.81750125}
      />
      <Path
        d="M1177.2372 1578.545H1238.903647V1647.412317H1177.2372z"
        fill="#fff"
        strokeWidth={0.93248791}
      />
      <Path
        d="M1268.6847 1550.4691H1330.351147V1606.902759H1268.6847z"
        fill="#fff"
        strokeWidth={0.84412301}
      />
      <Path
        d="M1352.9127 1526.4039H1414.5791470000001V1582.837559H1352.9127z"
        fill="#fff"
        strokeWidth={0.84412301}
      />
      <Path
        d="M1485.6722 1459.0215H1585.4418V1500.6149830000002H1485.6722z"
        fill="#fff"
        strokeWidth={0.9217729}
      />
      <Path
        d="M1586.0126 1409.4531H1678.71162V1442.748865H1586.0126z"
        fill="#fff"
        strokeWidth={0.57504016}
      />
      <Path
        d="M1723.6422 1249.191H1910.99747V1282.486765H1723.6422z"
        fill="#fff"
        strokeWidth={0.8175109}
      />
      <Path
        d="M1755.111 1191.8235H1926.34402V1227.8235H1755.111z"
        fill="#fff"
        strokeWidth={0.95436567}
      />
      <Path
        d="M1788.855 1158.2842H1908.33802V1190.298917H1788.855z"
        fill="#fff"
        strokeWidth={0.75179213}
      />
      <Path
        d="M1771.6229 1121.2676H1929.94254V1157.6686849999999H1771.6229z"
        fill="#fff"
        strokeWidth={0.92277193}
      />
      <Path
        d="M1788.942 1083.7705H2007.73093V1123.149868H1788.942z"
        fill="#fff"
        strokeWidth={1.10918748}
      />
      <Path
        d="M1749.2372 940.92303H1900.24262V980.302398H1749.2372z"
        fill="#fff"
        strokeWidth={0.9214856}
      />
      <Path
        d="M1765.243 872.84863H1914.243V908.7486319999999H1765.243z"
        fill="#fff"
      />
      <Path
        d="M1671.1871 628.39838H1825.42836V666.7723199999999H1671.1871z"
        fill="#fff"
        strokeWidth={0.94186896}
      />
      <Path
        d="M1604.8036 570.15527H1696.584606V614.05801H1604.8036z"
        fill="#fff"
        strokeWidth={1.32968891}
      />
      <Path
        d="M1566.7188 515.87396H1691.96585V559.7767H1566.7188z"
        fill="#fff"
        strokeWidth={1.55330729}
      />
      <Path
        d="M518.76 1408.177c-6 0-11 4.9-11 11 0 6 4.9 11 11 11 6 0 11-4.9 11-11 0-6.2-4.8-11-11-11zm0 16.1c-2.5 0-4.9-2.2-4.9-4.9 0-2.5 2.2-4.9 4.9-4.9s4.9 2.2 4.9 4.9c-.1 2.8-2.2 4.9-4.9 4.9z"
        fill = {this.state.Branch8} onPress = {this.Handler8}
      />
      <Path
        d="M640.624 1055.587l.153.128c1.345 2.292.693 5.262-1.458 6.594-2.01 1.32-5.25.833-6.594-1.458l-.077-.064-5.108 3.163c3.15 4.968 9.745 6.426 14.763 3.057 4.967-3.15 6.426-9.744 3.121-14.84z"
        fill = {this.state.Branch11} onPress = {this.Handler11}
      />
      <Path
        d="M632.712 1060.71l-.154-.128c-1.345-2.292-.692-5.262 1.459-6.594 2.01-1.32 5.249-.833 6.594 1.458l.077.064 5.108-3.163c-3.151-4.968-9.745-6.426-14.764-3.057-4.967 3.15-6.425 9.744-3.12 14.84z"
        fill = {this.state.Branch8} onPress = {this.Handler8}
      />
      <Path
        d="M639.024 1062.194c-2.304 1.204-5.134.539-6.543-1.676-1.344-2.292-.538-5.134 1.676-6.543 2.305-1.204 5.135-.539 6.543 1.676 1.627 2.266.629 5.339-1.676 6.543z"
        fill="#fff"
      />
      <Path
        d="M640.624 1055.587l.153.128c1.345 2.292.693 5.262-1.458 6.594-2.01 1.32-5.25.833-6.594-1.458l-.077-.064-5.108 3.163c3.15 4.968 9.745 6.426 14.763 3.057 4.967-3.15 6.426-9.744 3.121-14.84z"
        fill = {this.state.Branch11} onPress = {this.Handler11}
      />
      <Path
        d="M632.712 1060.71l-.154-.128c-1.345-2.292-.692-5.262 1.459-6.594 2.01-1.32 5.249-.833 6.594 1.458l.077.064 5.108-3.163c-3.151-4.968-9.745-6.426-14.764-3.057-4.967 3.15-6.425 9.744-3.12 14.84z"
        fill = {this.state.Branch8} onPress = {this.Handler8}
      />
      <Path
        d="M639.024 1062.194c-2.304 1.204-5.134.539-6.543-1.676-1.344-2.292-.538-5.134 1.676-6.543 2.305-1.204 5.135-.539 6.543 1.676 1.627 2.266.629 5.339-1.676 6.543z"
        fill="#fff"
      />
      <Path
        d="M722.16 986.577c.1 0 .1.1.2.1 2.1 1.8 2.4 4.8.8 6.8-1.5 2-4.7 2.4-6.8.8l-.1-.1-3.7 4.7c4.6 3.6 11.3 2.9 15-1.8 3.6-4.6 2.9-11.3-1.7-15z"
        fill = {this.state.Branch11} onPress = {this.Handler11}
      />
      <Path
        d="M716.16 994.077c-.1 0-.1-.1-.2-.1-2.1-1.8-2.4-4.8-.8-6.8 1.5-2 4.7-2.4 6.8-.8l.1.1 3.7-4.7c-4.6-3.6-11.3-2.9-15 1.8-3.6 4.6-2.9 11.3 1.8 15z"
        fill = {this.state.Branch8} onPress = {this.Handler8}
      />
      <Path
        d="M722.76 993.277c-1.8 2-4.7 2.2-6.8.4-2.1-1.8-2.2-4.7-.4-6.8 1.8-2 4.7-2.2 6.8-.4 1.8 1.8 2.1 5 .4 6.8z"
        fill="#fff"
      />
      <Path
        d="M722.16 986.577c.1 0 .1.1.2.1 2.1 1.8 2.4 4.8.8 6.8-1.5 2-4.7 2.4-6.8.8l-.1-.1-3.7 4.7c4.6 3.6 11.3 2.9 15-1.8 3.6-4.6 2.9-11.3-1.7-15z"
        fill = {this.state.Branch11} onPress = {this.Handler11}
      />
      <Path
        d="M716.16 994.077c-.1 0-.1-.1-.2-.1-2.1-1.8-2.4-4.8-.8-6.8 1.5-2 4.7-2.4 6.8-.8l.1.1 3.7-4.7c-4.6-3.6-11.3-2.9-15 1.8-3.6 4.6-2.9 11.3 1.8 15z"
        fill = {this.state.Branch8} onPress = {this.Handler8}
      />
      <Path
        d="M722.76 993.277c-1.8 2-4.7 2.2-6.8.4-2.1-1.8-2.2-4.7-.4-6.8 1.8-2 4.7-2.2 6.8-.4 1.8 1.8 2.1 5 .4 6.8z"
        fill="#fff"
      />
      <Path d="M803.459 888.977l10.5 8.4-4.6 6-10.7-9.3z" fill = {this.state.Branch11} onPress = {this.Handler11} />
      <Path d="M791.359 880.277l10.4 8.1-4.5 5.5-10.9-8.1z" fill = {this.state.Branch8} onPress = {this.Handler8} />
      <Path
        d="M868.06 809.677c.1 0 .1.1.2.1 2.1 1.8 2.5 4.7.8 6.8-1.5 2-4.6 2.6-6.8.8l-.1-.1-3.6 4.7c4.7 3.5 11.3 2.7 15-2 3.6-4.6 2.7-11.3-2-15z"
        fill = {this.state.Branch11} onPress = {this.Handler11}
      />
      <Path
        d="M862.36 817.377c-.1 0-.1-.1-.2-.1-2.1-1.8-2.5-4.7-.9-6.7 1.5-2 4.6-2.6 6.7-.9l.1.1 3.6-4.7c-4.7-3.5-11.3-2.7-15 2-3.5 4.7-2.7 11.3 2 15z"
        fill = {this.state.Branch8} onPress = {this.Handler8}
      />
      <Path
        d="M678.76 1185.177c-6.1.3-10.5 5.1-10.5 10.9.3 5.9 5.1 10.5 10.9 10.5 6.1-.3 10.5-5.1 10.5-10.9-.1-6.2-4.9-10.7-10.9-10.5zm.2 15.4c-2.4.3-4.8-2.1-4.8-4.8-.3-2.4 2.1-4.8 4.8-4.8 2.4-.3 4.8 2.1 4.8 4.8 0 2.5-2.1 4.8-4.8 4.8z"
        fill = {this.state.Branch11} onPress = {this.Handler11}
      />
      <Path
        d="M482.882 1327.207l197.257-218.567 7.51 5.79-193.683 212.976z"
        fill = {this.state.d1} onPress = {this.Handler_d1}
        fillOpacity={1}
        strokeWidth={1.21400297}
      />
      <Path
        d="M488.043 1325.386l194.735-215.101 1.972 2.442-193.828 214.183z"
        fill="#fff"
        fillOpacity={1}
        strokeWidth={1.21400297}
      />
      <Path
        d="M1210.1241 602.06982H1225.1241V610.06982H1210.1241z"
        fill = {this.state.limeBranch} onPress = {this.limeHandler}
      />
      <Path
        d="M1192.26 540.277c-4.3-4.3-11.2-4.3-15.5 0-4.3 4.3-4.3 11.2 0 15.5 4.3 4.3 11.2 4.3 15.5 0 4.3-4.3 4.2-11.3 0-15.5zm-4.3 11.3c-1.9 1.9-4.9 1.9-6.9 0-1.9-1.9-1.9-4.9 0-6.9s4.9-1.9 6.9 0c2.1 1.9 2.1 5 0 6.9zM1118.859 477.877c-4.3-4.3-11.2-4.3-15.5 0-4.3 4.3-4.3 11.2 0 15.5 4.3 4.3 11.2 4.3 15.5 0 4.4-4.2 4.4-11.4 0-15.5zm-4.1 11.3c-1.9 1.9-4.9 1.9-6.9 0-1.9-1.9-1.9-4.9 0-6.9 1.9-1.9 4.9-1.9 6.9 0 1.9 1.9 1.8 4.8 0 6.9z"
        fill = {this.state.limeBranch} onPress = {this.limeHandler}
      />
      <Path
        d="M684.35931 1917.177H699.35931V1925.177H684.35931z"
        fill = {this.state.Branch1} onPress = {this.Handler1}
      />
      <Path
        d="M684.35931 1873.177H699.35931V1881.177H684.35931z"
        fill = {this.state.Branch1} onPress = {this.Handler1}
      />
      <Path
        d="M1343.3594 1692.177H1358.3594V1699.177H1343.3594z"
        fill={this.state.greenBranch}
        onPress={this.greenHandler}

        id = "green-branch"
      />
      <Path
        d="M684.35931 1813.177H699.35931V1820.177H684.35931z"
        fill = {this.state.Branch1} onPress = {this.Handler1}
      />
      <Path
        d="M1366.86 1889.277c-6 0-11 4.9-11 11 0 6 4.9 11 11 11 6.2 0 11-4.9 11-11 .1-6-5-11-11-11zm0 16.1c-2.5 0-4.9-2.2-4.9-4.9s2.2-4.9 4.9-4.9 4.9 2.2 4.9 4.9-2.1 4.9-4.9 4.9z"
        fill = {this.state.Branch11} onPress = {this.Handler11}
        fillOpacity={1}
      />
      <Path
        d="M1018.36 1422.677c-4.3-4.3-11.2-4.3-15.5 0-4.3 4.3-4.3 11.2 0 15.5 4.3 4.3 11.2 4.3 15.5 0 4.3-4.3 4.3-11.3 0-15.5zm-4.1 11.2c-1.9 1.9-4.9 1.9-6.9 0s-1.9-4.9 0-6.9c1.9-1.9 4.9-1.9 6.9 0 1.8 1.9 1.8 5 0 6.9zM1138.36 1476.777c-6 0-11 4.9-11 11s4.9 11 11 11c6 0 11-4.9 11-11 0-6.2-4.8-11-11-11zm0 16c-2.5 0-4.9-2.2-4.9-4.9 0-2.5 2.2-4.9 4.9-4.9 2.5 0 4.9 2.2 4.9 4.9 0 2.5-2.2 4.9-4.9 4.9zM1373.56 1459.577c-1.3-6-6.9-9.8-12.8-8.7-6 1.3-9.8 6.9-8.7 12.8 1.1 6 6.9 9.8 12.8 8.7 6.1-1.2 9.9-7.1 8.7-12.8zm-9.8 6.8c-2.5.5-5.5-1.3-6-3.8s1.3-5.5 3.8-6 5.5 1.3 6 3.8c.5 2.9-1.2 5.4-3.8 6zM1537.06 1282.777c-4.4-4.1-11.4-3.9-15.5.5-4.3 4.6-3.9 11.4.5 15.5s11.4 3.9 15.5-.5c4.1-4.3 3.8-11.4-.5-15.5zm-4 11.5c-1.9 2.1-4.9 2.1-7 .3-2.1-1.8-2.1-4.9-.3-7 1.9-1.9 4.9-2.1 7-.3 2 1.8 2.3 5 .3 7zM1532.975 1039.107c-6 .3-10.8 5.2-10.8 11.2.3 6.2 5.2 10.8 11.2 10.8 6-.3 10.8-5.2 10.8-11.2-.2-6-5.1-10.9-11.2-10.8zm.3 16.1c-2.5.3-4.9-2.1-4.9-4.9-.3-2.5 2.1-4.9 4.9-4.9 2.5-.3 4.9 2.1 4.9 4.9 0 2.5-2.3 4.8-4.9 4.9zM1491.16 921.977c-4.3-4.3-11.2-4.3-15.5 0-4.3 4.3-4.3 11.2 0 15.5 4.3 4.3 11.2 4.3 15.5 0 4.3-4.3 4.2-11.1 0-15.5zm-4.4 11.4c-1.9 1.9-4.9 1.9-6.9 0s-1.9-4.9 0-6.9c1.9-1.9 4.9-1.9 6.9 0 2 1.6 2 5.1 0 6.9zM1354.26 818.877c-4.3-4.3-11.2-4.3-15.5 0-4.3 4.3-4.3 11.2 0 15.5 4.3 4.3 11.2 4.3 15.5 0 4.4-4.3 4.4-11.3 0-15.5zm-4.3 11.4c-1.9 1.9-4.9 1.9-6.9 0s-1.9-4.9 0-6.9 4.9-1.9 6.9 0c1.9 1.6 1.9 4.8 0 6.9zM1101.16 813.777c-4.3-4.3-11.2-4.3-15.5 0-4.3 4.3-4.3 11.2 0 15.5 4.3 4.3 11.2 4.3 15.5 0 4.3-4.3 4.3-11.1 0-15.5zm-4.2 11.2c-1.9 1.9-4.9 1.9-6.9 0-1.9-1.9-1.9-4.9 0-6.9 1.9-1.9 4.9-1.9 6.9 0 2 2 1.8 5 0 6.9zM934.26 941.077c-4.3-4.3-11.2-4.3-15.5 0-4.3 4.3-4.3 11.2 0 15.5 4.3 4.3 11.2 4.3 15.5 0 4.1-4.2 4.1-11.4 0-15.5zm-4.3 11.3c-1.9 1.9-4.9 1.9-6.9 0-1.9-1.9-1.9-4.9 0-6.9 1.9-1.9 4.9-1.9 6.9 0 2 1.8 2 4.8 0 6.9zM870.76 1068.077c-6 0-11 4.9-11 11 0 6 4.9 11 11 11 6 0 11-4.9 11-11s-4.9-11-11-11zm0 15.7c-2.5 0-4.9-2.2-4.9-4.9 0-2.5 2.2-4.9 4.9-4.9 2.5 0 4.9 2.2 4.9 4.9.1 2.9-2.1 4.9-4.9 4.9zM868.06 1185.077c-6 0-11 4.9-11 11 0 6 4.9 11 11 11 6 0 11-4.9 11-11 0-6-4.8-11-11-11zm0 16c-2.5 0-4.9-2.2-4.9-4.9 0-2.5 2.2-4.9 4.9-4.9 2.5 0 4.9 2.2 4.9 4.9.2 2.6-2.2 4.9-4.9 4.9zM924.26 1332.177c-6 0-11 4.9-11 11 0 6 4.9 11 11 11 6 0 11-4.9 11-11 0-5.8-4.8-11-11-11zm0 16.1c-2.5 0-4.9-2.2-4.9-4.9 0-2.5 2.2-4.9 4.9-4.9 2.5 0 4.9 2.2 4.9 4.9s-2 4.9-4.9 4.9z"
        fill = {this.state.Branch5} onPress = {this.Handler5}
      />
      <Path
        d="M1974.366 883.592a12.782 12.782 0 00-18.142 0 12.797 12.797 0 000 18.15 12.782 12.782 0 0018.142 0c5.15-4.8 5.15-12.88 0-18.15zm-4.916 13.35c-2.224 2.224-5.735 2.224-8.076 0-2.224-2.225-2.224-5.738 0-8.08 2.224-2.225 5.735-2.225 8.076 0 2.107 2.108 2.107 5.855 0 8.08zM1916.755 970.601l.068-7.353 14.707.135v7.284zM1916.57 1030.961l.069-7.354 14.707.136v7.283z"
        fill = {this.state.Branch8} onPress = {this.Handler8}
        fillOpacity={1}
      />
      <Path
        d="M1852.679 1062.078c-4.3-4.3-11.2-4.3-15.5 0-4.3 4.3-4.3 11.2 0 15.5 4.3 4.3 11.2 4.3 15.5 0 4.4-4.1 4.4-11 0-15.5zm-4.2 11.4c-1.9 1.9-4.9 1.9-6.9 0-1.9-1.9-1.9-4.9 0-6.9 1.9-1.9 4.9-1.9 6.9 0 1.8 1.8 1.8 5 0 6.9zM1678.86 1186.177c-4.3-4.3-11.2-4.3-15.5 0-4.3 4.3-4.3 11.2 0 15.5 4.3 4.3 11.2 4.3 15.5 0 4.3-4.2 4.3-11.1 0-15.5zm-4.4 11.3c-1.9 1.9-4.9 1.9-6.9 0-2.1-1.9-1.9-4.9 0-6.9s4.9-1.9 6.9 0c2.1 1.9 2.1 5.2 0 6.9zM1568.86 1295.877c-4.4-4.1-11.2-3.9-15.5.5-4.1 4.4-3.9 11.2.5 15.5 4.4 4.1 11.2 3.9 15.5-.5 3.9-4.3 3.8-11.4-.5-15.5zm-4 11.4c-1.9 2.1-4.9 2.1-6.9.3-2.1-1.9-2.1-4.9-.3-6.9 1.9-1.9 4.9-2.1 6.9-.3 1.9 1.7 2.1 5.1.3 6.9zM518.46 1407.577c-6 0-11 4.9-11 11 0 6 4.9 11 11 11 6 0 11-4.9 11-11 0-6.2-4.8-11-11-11zm0 16.1c-2.5 0-4.9-2.2-4.9-4.9 0-2.5 2.2-4.9 4.9-4.9s4.9 2.2 4.9 4.9c-.1 2.8-2.2 4.9-4.9 4.9z"
        fill = {this.state.Branch8} onPress = {this.Handler8}
      />
      <Path
        d="M1244.3594 1929.177H1252.3594V1943.177H1244.3594z"
        fill = {this.state.Branch11} onPress = {this.Handler11}
        fillOpacity={1}
      />
      <Path
        d="M1099.86 1928.777c-6 0-11 4.9-11 11 0 6 4.9 11 11 11 6.2 0 11-4.9 11-11 .1-6.1-4.8-11-11-11zm0 15.9c-2.5 0-4.9-2.2-4.9-4.9s2.2-4.9 4.9-4.9c2.5 0 4.9 2.2 4.9 4.9s-2.1 4.9-4.9 4.9z"
        fill = {this.state.Branch11} onPress = {this.Handler11}
        fillOpacity={1}
      />
      <Path
        d="M677.35931 2235.177H684.35931V2257.177H677.35931z"
        fill = {this.state.Branch12} onPress = {this.Handler12}
      />
      <Path
        d="M794.35931 2242.177H801.35931V2257.177H794.35931z"
        fill = {this.state.Branch12} onPress = {this.Handler12}
      />
      <Path
        d="M911.35931 2242.177H918.35931V2257.177H911.35931z"
        fill = {this.state.Branch12} onPress = {this.Handler12}
      />
      <Path
        d="M1020.3594 2242.177H1027.3594V2257.177H1020.3594z"
        fill = {this.state.Branch12} onPress = {this.Handler12}
      />
      <Path
        d="M1099.76 2192.877c-4.3-4.3-11.2-4.3-15.5 0-4.3 4.3-4.3 11.2 0 15.5 4.3 4.3 11.2 4.3 15.5 0 4.1-4.2 4.1-11.2 0-15.5zm-4.3 11.3c-1.9 1.9-4.9 1.9-6.9 0-1.9-1.9-1.9-4.9 0-6.9s4.9-1.9 6.9 0c2 2 2 5.1 0 6.9z"
        fill = {this.state.Branch12} onPress = {this.Handler12}
      />
      <Path
        d="M1006.3594 2134.177H1014.3594V2149.177H1006.3594z"
        fill = {this.state.Branch12} onPress = {this.Handler12}
      />
      <Path
        d="M920.76 2128.677c-4.3-4.3-11.2-4.3-15.5 0-4.3 4.3-4.3 11.2 0 15.5 4.3 4.3 11.2 4.3 15.5 0 4.2-4.2 4.1-11.2 0-15.5zm-4.5 11.3c-1.9 1.9-4.9 1.9-6.9 0-1.9-1.9-1.9-4.9 0-6.9 1.9-1.9 4.9-1.9 6.9 0 1.8 1.9 1.8 4.9 0 6.9z"
        fill = {this.state.Branch12} onPress = {this.Handler12}
      />
      <Path
        d="M1617.66 2157.177c-6 0-11 4.9-11 11 0 6 4.9 11 11 11 6.2 0 11-4.9 11-11 0-6.2-4.9-11-11-11zm0 16c-2.5 0-4.9-2.2-4.9-4.9s2.2-4.9 4.9-4.9c2.5 0 4.9 2.2 4.9 4.9.1 2.4-1.9 4.9-4.9 4.9z"
        fill = {this.state.limeBranch} onPress = {this.limeHandler}
      />
      <Path
        d="M1614.3594 2099.177H1628.3594V2106.177H1614.3594z"
        fill = {this.state.limeBranch} onPress = {this.limeHandler}
      />
      <Path
        d="M1614.3594 2038.177H1628.3594V2046.177H1614.3594z"
        fill = {this.state.limeBranch} onPress = {this.limeHandler}
      />
      <Path
        d="M1614.3594 1977.177H1628.3594V1985.177H1614.3594z"
        fill = {this.state.limeBranch} onPress = {this.limeHandler}
      />
      <Path
        d="M1614.3594 1918.177H1628.3594V1925.177H1614.3594z"
        fill = {this.state.limeBranch} onPress = {this.limeHandler}
      />
      <Path
        d="M1614.3594 1857.177H1628.3594V1865.177H1614.3594z"
        fill = {this.state.limeBranch} onPress = {this.limeHandler}
      />
      <Path
        d="M1614.3594 1797.177H1628.3594V1804.177H1614.3594z"
        fill = {this.state.limeBranch} onPress = {this.limeHandler}
      />
      <Path
        d="M1628.137 1563.592c-2.3-5.7-8.8-8.2-14.5-6-5.7 2.3-8.2 8.8-6 14.5 2.2 5.7 8.8 8.2 14.5 6 5.7-2.5 8.3-8.9 6-14.5zm-8.2 8.7c-2.5 1-5.5-.3-6.5-2.5-1-2.5.3-5.5 2.5-6.5 2.5-1 5.5.3 6.5 2.5 1.2 2.7-.1 5.4-2.5 6.5zM1627.86 1481.777c-2.3-5.7-8.8-8.2-14.5-6-5.7 2.3-8.2 8.8-6 14.5 2.2 5.7 8.8 8.2 14.5 6 5.7-2.5 8.3-8.9 6-14.5zm-8.2 8.7c-2.5 1-5.5-.3-6.5-2.5-1-2.5.3-5.5 2.5-6.5 2.5-1 5.5.3 6.5 2.5 1.2 2.7-.1 5.4-2.5 6.5zM1637.06 1373.177c-4.3-4.3-11.2-4.3-15.5 0-4.3 4.3-4.3 11.2 0 15.5 4.3 4.3 11.2 4.3 15.5 0 4.4-4.1 4.4-11.3 0-15.5zm-4.3 11.4c-1.9 1.9-4.9 1.9-6.9 0s-1.9-4.9 0-6.9c1.9-1.9 4.9-1.9 6.9 0 2.1 1.8 2.1 4.9 0 6.9zM1651.46 1186.177c-4.3-4.3-11.2-4.3-15.5 0-4.3 4.3-4.3 11.2 0 15.5 4.3 4.3 11.2 4.3 15.5 0 4.2-4.2 4.2-11.1 0-15.5zm-4.4 11.3c-1.9 1.9-4.9 1.9-6.9 0s-1.9-4.9 0-6.9 4.9-1.9 6.9 0c1.9 2 1.9 5.2 0 6.9zM1517.364 1067.583c-6 .3-10.8 5.2-10.8 11.2.3 6.2 5.2 10.8 11.2 10.8 6.2-.3 10.8-5.2 10.8-11.2 0-5.9-5-10.9-11.2-10.8zm.5 16c-2.5.3-4.9-2.1-4.9-4.9-.3-2.5 2.1-4.9 4.9-4.9 2.5-.3 4.9 2.1 4.9 4.9 0 2.7-2.2 4.9-4.9 4.9zM1371.56 959.177c-6 0-11 4.9-11 11 0 6 4.9 11 11 11s11-4.9 11-11c.1-6.1-4.6-11-11-11zm0 16c-2.5 0-4.9-2.2-4.9-4.9 0-2.5 2.2-4.9 4.9-4.9s4.9 2.2 4.9 4.9c.1 2.7-2 4.9-4.9 4.9zM1218.16 922.877c-5.7-2.3-11.9.3-14.5 6-2.3 5.7.3 11.9 6 14.5 5.7 2.3 11.9-.3 14.5-6 2.4-5.6-.3-12-6-14.5zm.4 12.2c-1 2.5-3.9 3.8-6.5 2.5-2.5-1-3.8-3.9-2.5-6.5 1-2.5 3.9-3.8 6.5-2.5 2.3 1.3 3.5 4.1 2.5 6.5z"
        fill = {this.state.limeBranch} onPress = {this.limeHandler}
      />
      <Path
        d="M1210.3594 771.177H1225.3594V779.177H1210.3594z"
        fill = {this.state.limeBranch} onPress = {this.limeHandler}
      />
      <Path
        d="M887.20898 2063.1162H902.20898V2070.1162H887.20898z"
        fill = {this.state.Branch6} onPress = {this.Handler6}
      />
      <Path
        d="M887.35931 2018.177H902.35931V2025.177H887.35931z"
        fill = {this.state.Branch6} onPress = {this.Handler6}
      />
      <Path
        d="M887.35931 1973.177H902.35931V1980.177H887.35931z"
        fill = {this.state.Branch6} onPress = {this.Handler6}
      />
      <Path
        d="M887.35931 1928.177H902.35931V1935.177H887.35931z"
        fill = {this.state.Branch6} onPress = {this.Handler6}
      />
      <Path
        d="M887.35931 1808.177H894.35931V1861.175047H887.35931z"
        fill = {this.state.Branch6} onPress = {this.Handler6}
      />
      <Path
        d="M887.35931 1864.9032H894.35931V1931.1770649999999H887.35931z"
        fill = {this.state.Branch6} onPress = {this.Handler6}
        strokeWidth={1.22728324}
      />
      <Path
        d="M887.35931 1860.6752H902.35931V1867.6752H887.35931z"
        fill = {this.state.Branch6} onPress = {this.Handler6}
      />
      <Path
        d="M887.35931 1804.177H902.35931V1811.177H887.35931z"
        fill = {this.state.Branch6} onPress = {this.Handler6}
      />
      <Path
        d="M887.35931 1759.177H902.35931V1766.177H887.35931z"
        fill = {this.state.Branch6} onPress = {this.Handler6}
      />
      <Path
        d="M887.35931 1671.177H902.35931V1678.177H887.35931z"
        fill = {this.state.Branch6} onPress = {this.Handler6}
      />
      <Path
        d="M919.534 1538.914c-6-1.3-11.7 2.5-12.8 8.7-1.3 6 2.5 11.7 8.7 12.8 6 1.3 11.7-2.5 12.8-8.7 1.1-5.9-2.7-11.8-8.7-12.8zm2.7 11.5c-.5 2.5-3.2 4.4-6 3.8-2.5-.5-4.4-3.2-3.8-6 .5-2.5 3.2-4.4 6-3.8 2.6.8 4.3 3.5 3.8 6z"
        fill = {this.state.Branch6} onPress = {this.Handler6}
      />
      <Path
        d="M964.093 1517.322l-4.58 5.468-10.804-9.98 4.89-5.398z"
        fill = {this.state.Branch6} onPress = {this.Handler6}
        fillOpacity={1}
      />
      <Path
        d="M1018.36 1450.277c-4.3-4.3-11.2-4.3-15.5 0-4.3 4.3-4.3 11.2 0 15.5 4.3 4.3 11.2 4.3 15.5 0 4.3-4.6 4.3-11.3 0-15.5zm-4.1 10.9c-1.9 1.9-4.9 1.9-6.9 0s-1.9-4.9 0-6.9c1.9-1.9 4.9-1.9 6.9 0 1.8 2 1.8 5.3 0 6.9zM1324.26 1331.977c-4.1-4.6-11-4.9-15.5-1-4.6 4.1-4.9 11-1 15.5 4.1 4.6 11 4.9 15.5 1 4.6-4.1 4.9-11 1-15.5zm-5.1 10.9c-2.1 1.9-5.2 1.6-6.9-.3-1.8-2.1-1.6-5.2.3-6.9 1.9-1.8 5.2-1.6 6.9.3 1.8 2.1 1.6 5.4-.3 6.9zM1393.26 1129.777c-4.3-4.3-11.2-4.3-15.5.3-4.3 4.3-4.3 11.2.3 15.5 4.3 4.3 11.2 4.3 15.5-.3 4.2-4.5 4.2-11.2-.3-15.5zm-4 11c-1.9 1.9-4.9 1.9-6.9 0s-1.9-4.9 0-6.9 4.9-1.9 6.9 0c1.7 2 1.9 5.2 0 6.9zM1355.66 986.977c-6 0-11 4.9-11 11 0 6 4.9 11 11 11 6 0 11-4.9 11-11 .1-6.1-5-11-11-11zm0 15.9c-2.5 0-4.9-2.2-4.9-4.9 0-2.5 2.2-4.9 4.9-4.9s4.9 2.2 4.9 4.9-2.2 4.9-4.9 4.9z"
        fill = {this.state.Branch6} onPress = {this.Handler6}
      />
      <Path
        d="M1302.3594 894.177H1316.3594V901.177H1302.3594z"
        fill = {this.state.Branch6} onPress = {this.Handler6}
      />
      <Path
        d="M1354.26 791.377c-4.3-4.3-11.2-4.3-15.5 0-4.3 4.3-4.3 11.2 0 15.5 4.3 4.3 11.2 4.3 15.5 0 4.4-4.3 4.4-11.3 0-15.5zm-4.3 11.4c-1.9 1.9-4.9 1.9-6.9 0s-1.9-4.9 0-6.9c1.9-1.9 4.9-1.9 6.9 0 1.9 1.7 1.9 5 0 6.9zM1469.631 652.882h-15.2l.036-6.84 15.464-.16zM1467.254 590.916c-4.3-4.3-11.2-4.3-15.5 0-4.3 4.3-4.3 11.2 0 15.5 4.3 4.3 11.2 4.3 15.5 0 3.9-4.3 3.9-11 0-15.5zm-4.5 11.2c-1.9 1.9-4.9 1.9-6.9 0-1.9-1.9-1.9-4.9 0-6.9 1.9-1.9 4.9-1.9 6.9 0s1.9 5.1 0 6.9zM1458.46 399.177c-6 0-11 4.9-11 11 0 6 4.9 11 11 11 6.2 0 11-4.9 11-11-.1-6-5.1-11-11-11zm0 16c-2.5 0-4.9-2.2-4.9-4.9s2.2-4.9 4.9-4.9c2.5 0 4.9 2.2 4.9 4.9s-2.3 4.9-4.9 4.9z"
        fill = {this.state.Branch6} onPress = {this.Handler6}
      />
      <Path
        d="M1455.3594 367.177H1469.3594V374.177H1455.3594z"
        fill = {this.state.Branch6} onPress = {this.Handler6}
      />
      <Path
        d="M1455.3594 312.177H1469.3594V319.177H1455.3594z"
        fill = {this.state.Branch6} onPress = {this.Handler6}
      />
      <Path
        d="M1447.3594 256.177H1469.3594V263.177H1447.3594z"
        fill = {this.state.Branch6} onPress = {this.Handler6}
      />
      <Path
        d="M1127.26 2192.277c-4.3-4.3-11.2-4.3-15.5 0-4.3 4.3-4.3 11.2 0 15.5 4.3 4.3 11.2 4.3 15.5 0 4.2-4.1 4.2-11.1 0-15.5zm-4.3 11.4c-1.9 1.9-4.9 1.9-6.9 0-2.1-1.9-1.9-4.9 0-6.9 1.9-1.9 4.9-1.9 6.9 0 2 1.8 2 5.1 0 6.9z"
        fill = {this.state.Branch9} onPress = {this.Handler9}
      />
      <Path
        d="M1115.3594 2162.177H1130.3594V2170.177H1115.3594z"
        fill = {this.state.Branch9} onPress = {this.Handler9}
      />
      <Path
        d="M1115.3594 2111.177H1130.3594V2118.177H1115.3594z"
        fill = {this.state.Branch9} onPress = {this.Handler9}
      />
      <Path
        d="M1115.3594 2075.177H1130.3594V2082.177H1115.3594z"
        fill = {this.state.Branch9} onPress = {this.Handler9}
      />
      <Path
        d="M1115.3594 2039.177H1130.3594V2047.177H1115.3594z"
        fill = {this.state.Branch9} onPress = {this.Handler9}
      />
      <Path
        d="M1115.3594 2003.177H1130.3594V2011.177H1115.3594z"
        fill = {this.state.Branch9} onPress = {this.Handler9}
      />
      <Path
        d="M1119.46 1948.177c-6 0-11 4.9-11 11 0 6 4.9 11 11 11 6 0 11-4.9 11-11-.1-6.1-5-11-11-11zm0 16.1c-2.5 0-4.9-2.2-4.9-4.9 0-2.5 2.2-4.9 4.9-4.9 2.5 0 4.9 2.2 4.9 4.9s-2.3 4.9-4.9 4.9z"
        fill = {this.state.Branch9} onPress = {this.Handler9}
      />
      <Path
        d="M1115.3594 1848.177H1130.3594V1856.177H1115.3594z"
        fill = {this.state.Branch9} onPress = {this.Handler9}
      />
      <Path
        d="M1115.3594 1811.177H1130.3594V1818.177H1115.3594z"
        fill = {this.state.Branch9} onPress = {this.Handler9}
      />
      <Path
        d="M1115.3594 1552.177H1129.3594V1558.177H1115.3594z"
        fill = {this.state.Branch9} onPress = {this.Handler9}
      />
      <Path
        d="M1118.96 1496.077c-6 0-11 4.9-11 11s4.9 11 11 11c6 0 11-4.9 11-11-.1-5.9-4.8-11-11-11zm0 16c-2.5 0-4.9-2.2-4.9-4.9 0-2.5 2.2-4.9 4.9-4.9 2.5 0 4.9 2.2 4.9 4.9s-2.2 4.9-4.9 4.9z"
        fill = {this.state.Branch9} onPress = {this.Handler9}
      />
      <Path
        d="M1115.3594 1429.177H1129.3594V1435.177H1115.3594z"
        fill = {this.state.Branch9} onPress = {this.Handler9}
      />
      <Path
        d="M1058.86 1247.877c-2.2-5.7-8.7-8.5-14.3-6.3-5.7 2.2-8.5 8.7-6.3 14.3 2.2 5.6 8.7 8.5 14.3 6.3 5.8-2.3 8.6-8.8 6.3-14.3zm-8.6 8.7c-2.5 1-5.5-.3-6.5-2.8-1.1-2.5.3-5.5 2.5-6.5 2.5-1 5.5.3 6.5 2.8 1.3 2.5.2 5.5-2.5 6.5zM1124.96 1076.377c-6.2 0-11.2 4.9-11.2 11 0 6 4.9 11 11.2 11 6.2 0 11.2-4.9 11.2-11-.1-6-5.2-11-11.2-11zm0 16c-2.5 0-4.9-2.2-4.9-4.9 0-2.5 2.2-4.9 4.9-4.9s4.9 2.2 4.9 4.9c-.2 2.6-2.1 4.9-4.9 4.9zM1192.86 933.577c-5.7-2.3-11.9.3-14.5 6-2.5 5.7.3 11.9 6 14.5 5.7 2.3 11.9-.3 14.5-6 2.2-5.8-.5-12.2-6-14.5zm.3 12c-1 2.5-3.9 3.8-6.5 2.5-2.5-1-3.8-3.9-2.5-6.5 1-2.5 3.9-3.8 6.5-2.5 2.4.9 3.6 4.1 2.5 6.5zM1101.16 840.277c-4.3-4.3-11.2-4.3-15.5 0-4.3 4.3-4.3 11.2 0 15.5 4.3 4.3 11.2 4.3 15.5 0 4.3-4.2 4.3-11.2 0-15.5zm-4.2 11.3c-1.9 1.9-4.9 1.9-6.9 0-1.9-1.9-1.9-4.9 0-6.9 1.9-1.9 4.9-1.9 6.9 0 2 1.8 1.8 5 0 6.9zM1045.522 593.991c-4.3-4.3-11.2-4.3-15.5 0-4.3 4.3-4.3 11.2 0 15.5 4.3 4.3 11.2 4.3 15.5 0 4.3-4.2 4.3-11.1 0-15.5zm-4.2 11.3c-1.9 1.9-4.9 1.9-6.9 0s-1.9-4.9 0-6.9 4.9-1.9 6.9 0 2 5.1 0 6.9z"
        fill = {this.state.Branch9} onPress = {this.Handler9}
      />
      <Path
        d="M1054.328 575.23l90.613-83.537-4.074-4.557-91.739 83.094c-11.9 12.2-7.748 7.72-15 22.6v2-2h8l-.2 2.3c5.397-10.69 1.6-8.9 12.4-19.9z"
        fill = {this.state.Branch9} onPress = {this.Handler9}
        fillOpacity={1}
      />
      <Path
        d="M1157.146 476.657c-4.3-4.3-11.2-4.3-15.5 0-4.3 4.3-4.3 11.2 0 15.5 4.3 4.3 11.2 4.3 15.5 0 4.4-4.2 4.4-11.3 0-15.5zm-4.1 11.3c-1.9 1.9-4.9 1.9-6.9 0-1.9-1.9-1.9-4.9 0-6.9 1.9-1.9 4.9-1.9 6.9 0 1.8 1.9 1.8 4.9 0 6.9z"
        fill = {this.state.Branch9} onPress = {this.Handler9}
      />
      <Path
        d="M1108.0613 390.49991H1115.0613V478.783861H1108.0613z"
        fill = {this.state.limeBranch} onPress = {this.limeHandler}
        strokeWidth={1.31603098}
      />
      <Path
        d="M1120.3214 479.98801H1140.774592V489.98801H1120.3214z"
        fill="url(#LinearGradient9696)"
        strokeWidth={1.43014657}
      />
      <Path
        d="M1114.2161 482.98801H1146.8798310000002V486.98801H1114.2161z"
        fill="#fff"
        strokeWidth={1.08007491}
      />
      <Path
        d="M1253.114 367.086c-6 0-11 4.9-11 11 0 6 4.9 11 11 11 6 0 11-4.9 11-11-.1-6-5.2-11-11-11zm0 16.1c-2.5 0-4.9-2.2-4.9-4.9s2.2-4.9 4.9-4.9c2.5 0 4.9 2.2 4.9 4.9s-2.2 4.9-4.9 4.9z"
        fill = {this.state.Branch9} onPress = {this.Handler9}
      />
      <Path
        d="M1290.2194 291.99023H1304.219488V298.9902243H1290.2194z"
        fill = {this.state.Branch9} onPress = {this.Handler9}
      />
      <Path
        d="M1290.2194 241.99072H1304.219488V248.9907143H1290.2194z"
        fill = {this.state.Branch9} onPress = {this.Handler9}
      />
      <Path
        d="M1283.3254 192.62671H1305.325535V200.6267043H1283.3254z"
        fill = {this.state.Branch9} onPress = {this.Handler9}
      />
      <Path
        d="M1696.3594 2177.177H1703.3594V2199.177H1696.3594z"
        fill={this.state.greenBranch}
        onPress={this.greenHandler}
        id = "green-branch"
      />
      <Path
        d="M1599.458 2174.868c-6 0-11 4.9-11 11 0 6 4.9 11 11 11 6 0 11-4.9 11-11-.1-6.1-5-11-11-11zm0 15.9c-2.5 0-4.9-2.2-4.9-4.9s2.2-4.9 4.9-4.9c2.5 0 4.9 2.2 4.9 4.9s-2.3 4.9-4.9 4.9z"
        fill={this.state.greenBranch}
        onPress={this.greenHandler}
        id = "green-branch"
      />
      <Path
        d="M1343.3594 2123.177H1358.3594V2130.177H1343.3594z"
        fill={this.state.greenBranch}
        onPress={this.greenHandler}
        id = "green-branch"
      />
      <Path
        d="M1343.3594 2061.177H1358.3594V2068.177H1343.3594z"
        fill={this.state.greenBranch}
        onPress={this.greenHandler}
        id = "green-branch"
      />
      <Path
        d="M1343.3594 1943.177H1358.3594V1950.177H1343.3594z"
        fill={this.state.greenBranch}
        onPress={this.greenHandler}
        id = "green-branch"
      />
      <Path
        d="M1347.46 1869.977c-6 0-11 4.9-11 11 0 6.2 4.9 11 11 11 6 0 11-4.9 11-11 .1-6.3-4.9-11-11-11zm0 16c-2.5 0-4.9-2.2-4.9-4.9 0-2.5 2.2-4.9 4.9-4.9s4.9 2.2 4.9 4.9-2.2 4.9-4.9 4.9z"
        fill={this.state.greenBranch}
        onPress={this.greenHandler}
        id = "green-branch"
      />
      <Path
        d="M1343.3594 1829.177H1358.3594V1837.177H1343.3594z"
        fill={this.state.greenBranch}
        onPress={this.greenHandler}
        id = "green-branch"
      />
      <Path
        d="M1347.46 1604.977c-6 0-11 4.9-11 11 0 6 4.9 11 11 11 6 0 11-4.9 11-11 .1-6.2-4.9-11-11-11zm0 15.8c-2.5 0-4.9-2.2-4.9-4.9s2.2-4.9 4.9-4.9 4.9 2.2 4.9 4.9c0 2.8-2.2 4.9-4.9 4.9zM1358.26 1482.177c-1.3-6-6.9-9.8-12.8-8.7-6 1.3-9.8 6.9-8.7 12.8 1.1 6 6.9 9.8 12.8 8.7 6.1-1.1 9.9-6.8 8.7-12.8zm-9.8 7.1c-2.5.5-5.5-1.3-6-3.8s1.3-5.5 3.8-6 5.5 1.3 6 3.8c.6 2.7-1.2 5.4-3.8 6zM1356.76 1318.777c-4.1-4.6-11-4.9-15.5-1-4.6 3.9-4.9 11-1 15.5 4.1 4.6 11 4.9 15.5 1 4.5-4.1 5-11 1-15.5zm-5 10.9c-2.1 1.9-5.2 1.6-6.9-.3-1.9-2.1-1.6-5.2.3-6.9 2.1-1.9 5.2-1.6 6.9.3 2 2.1 1.9 5.3-.3 6.9zM1235.06 1191.777c-2.3-5.7-8.8-8.2-14.5-6-5.7 2.3-8.2 8.8-6 14.5 2.3 5.7 8.8 8.2 14.5 6 5.5-2.6 8.3-8.8 6-14.5zm-10.3 9.2c-2.5 0-4.9-2.2-4.9-4.9 0-2.5 2.2-4.9 4.9-4.9 2.5 0 4.9 2.2 4.9 4.9.1 2.5-2.1 4.9-4.9 4.9zM1092.76 1076.377c-6 0-11 4.9-11 11 0 6 4.9 11 11 11 6 0 11-4.9 11-11 0-6-4.7-11-11-11zm0 16c-2.5 0-4.9-2.2-4.9-4.9 0-2.5 2.2-4.9 4.9-4.9 2.5 0 4.9 2.2 4.9 4.9.3 2.8-2.2 4.9-4.9 4.9z"
        fill={this.state.greenBranch}
        onPress={this.greenHandler}
        id = "green-branch"
      />
      <Path
        d="M983.832 962.279l4.678 5.207-11.111 10.308-4.517-5.09z"
        fill={this.state.greenBranch}
        onPress={this.greenHandler}
        fillOpacity={1}
        id = "green-branch"
      />
      <Path
        d="M934.26 913.477c-4.3-4.3-11.2-4.3-15.5 0-4.3 4.3-4.3 11.2 0 15.5 4.3 4.3 11.2 4.3 15.5 0 4.1-4.2 4.1-11.1 0-15.5zm-4.3 11.4c-1.9 1.9-4.9 1.9-6.9 0-1.9-1.9-1.9-4.9 0-6.9 1.9-1.9 4.9-1.9 6.9 0s2 4.8 0 6.9zM865.36 848.377c-5.7 0-10.5 4.7-10.5 10.5 0 5.7 4.7 10.5 10.5 10.5 5.7 0 10.5-4.7 10.5-10.5-.1-5.5-4.9-10.5-10.5-10.5zm0 15.4c-2.4 0-4.7-2.1-4.7-4.7s2.1-4.7 4.7-4.7c2.4 0 4.7 2.1 4.7 4.7-.1 2.7-2.2 4.7-4.7 4.7z"
        fill={this.state.greenBranch}
        onPress={this.greenHandler}
        id = "green-branch"
      />
      <Path
        d="M828.35931 756.177H843.35931V764.177H828.35931z"
        fill={this.state.greenBranch}
        onPress={this.greenHandler}
        id = "green-branch"
      />
      <Path
        d="M836.35931 672.04614H851.35931V679.04614H836.35931z"
        fill={this.state.greenBranch}
        onPress={this.greenHandler}
        id = "green-branch"
      />
      <Path
        d="M850.56 457.777c-2.3-5.7-8.8-8.2-14.5-6-5.7 2.2-8.2 8.8-6 14.5 2.3 5.7 8.8 8.2 14.5 6 5.8-2.5 8.5-9 6-14.5zm-8.2 8.8c-2.5 1-5.5-.3-6.5-2.5-1-2.5.3-5.5 2.5-6.5 2.5-1 5.5.3 6.5 2.5 1.1 2.6 0 5.4-2.5 6.5z"
        fill={this.state.greenBranch}
        onPress={this.greenHandler}
        id = "green-branch"
      />
      <Path
        d="M836.35931 360.177H851.35931V367.177H836.35931z"
        fill={this.state.greenBranch}
        onPress={this.greenHandler}
        id = "green-branch"
      />
      <Path
        d="M836.35931 317.177H851.35931V325.177H836.35931z"
        fill={this.state.greenBranch}
        onPress={this.greenHandler}
        id = "green-branch"
      />
      <Path
        d="M1711.591 1441.313l-5.953-5.019 10.81-9.972 4.991 5.305z"
        fill = {this.state.Branch7} onPress = {this.Handler7}
        fillOpacity={1}
      />
      <Path
        d="M1731.344 1271.423c-1.423 3.592 5.877-13.808-1.423 3.592-37.228 64.298-50.872 82.54-99.526 134.812-.5.5 2.335.05 3.735 1.35 1.4 1.6 1.208 5.333 1.708 4.633 48.372-53.75 64.048-71.454 102.065-138.25 7.5-17.8 0 0 1.141-4.037.3-.5-2.1-.5-4.1-1-1.7-.3-3.3-1.6-3.6-1.1z"
        fill = {this.state.Branch1} onPress = {this.Handler1}
      />
      <Path
        d="M1737.732 1274.403l-2.788-1.88-6.161 9.94c-37.402 59.877-39.61 67.776-97.092 129.402l2.235 2.496c51.265-55.402 62.596-70.968 97.747-130.502z"
        fill="#fff"
      />
      <Path
        d="M1664.56 1373.177c-4.3-4.3-11.2-4.3-15.5 0-4.3 4.3-4.3 11.2 0 15.5 4.3 4.3 11.2 4.3 15.5 0 4.3-4.1 4.3-11.3 0-15.5zm-4.3 11.4c-1.9 1.9-4.9 1.9-6.9 0s-1.9-4.9 0-6.9c1.9-1.9 4.9-1.9 6.9 0 1.9 1.8 1.9 4.9 0 6.9zM1420.86 1129.777c-4.3-4.3-11.2-4.3-15.5.3-4.3 4.3-4.3 11.2.3 15.5 4.3 4.3 11.2 4.3 15.5-.3 4.1-4.5 4.1-11.4-.3-15.5zm-4.1 11c-1.9 1.9-4.9 1.9-6.9 0s-1.9-4.9 0-6.9 4.9-1.9 6.9 0c1.7 2 1.8 5.2 0 6.9zM1289.86 1048.877c-6-1.3-11.7 2.5-12.8 8.7-1.3 6 2.5 11.7 8.7 12.8 6 1.3 11.7-2.5 12.8-8.7 1.1-5.7-2.9-11.5-8.7-12.8zm2.6 11.7c-.5 2.5-3.2 4.4-6 3.8-2.5-.5-4.4-3.2-3.8-6 .5-2.5 3.2-4.4 6-3.8 2.6.8 4.5 3.4 3.8 6zM1108.86 1048.577c-6 0-11 4.9-11 11 0 6 4.9 11 11 11 6 0 11-4.9 11-11 0-5.9-4.8-11-11-11zm0 16c-2.5 0-4.9-2.2-4.9-4.9 0-2.5 2.2-4.9 4.9-4.9 2.5 0 4.9 2.2 4.9 4.9.2 2.5-2.1 4.9-4.9 4.9zM890.36 1048.577c-6 0-11 4.9-11 11 0 6 4.9 11 11 11 6 0 11-4.9 11-11 0-5.9-5.1-11-11-11zm0 16c-2.5 0-4.9-2.2-4.9-4.9 0-2.5 2.2-4.9 4.9-4.9 2.5 0 4.9 2.2 4.9 4.9 0 2.5-2.3 4.9-4.9 4.9z"
        fill = {this.state.Branch7} onPress = {this.Handler7}
      />
      <Path
        d="M808.781 1037.67l4.678 5.207-11.11 10.308-4.517-5.09z"
        fill = {this.state.Branch7} onPress = {this.Handler7}
        fillOpacity={1}
      />
      <Path
        d="M714.26 933.377c-4.3-4.3-11.2-4.3-15.5 0-4.3 4.3-4.3 11.2 0 15.5 4.3 4.3 11.2 4.3 15.5 0 4.3-4.3 4.4-11.3 0-15.5zm-4.2 11.2c-1.9 1.9-4.9 1.9-6.9 0s-1.9-4.9 0-6.9c1.9-1.9 4.9-1.9 6.9 0 2 1.8 2 5 0 6.9zM637.56 654.977c-6 0-11 4.9-11 11 0 6 4.9 11 11 11 6 0 11-4.9 11-11s-4.9-11-11-11zm0 15.9c-2.5 0-4.9-2.2-4.9-4.9s2.2-4.9 4.9-4.9 4.9 2.2 4.9 4.9c.1 2.7-2.1 4.9-4.9 4.9z"
        fill = {this.state.Branch7} onPress = {this.Handler7}
      />
      <Path
        d="M633.35931 424.177H648.35931V432.177H633.35931z"
        fill = {this.state.Branch7} onPress = {this.Handler7}
      />
      <Path
        d="M633.35931 339.177H648.35931V347.177H633.35931z"
        fill = {this.state.Branch7} onPress = {this.Handler7}
      />
      <Path
        d="M626.35931 297.177H648.35931V305.177H626.35931z"
        fill = {this.state.Branch7} onPress = {this.Handler7}
      />
      <Path
        d="M1094.76 1247.877c-2.2-5.7-8.7-8.5-14.3-6.3-5.7 2.2-8.5 8.7-6.3 14.3 2.2 5.6 8.7 8.5 14.3 6.3 5.9-2.3 8.5-8.6 6.3-14.3zm-8.3 8.8c-2.5 1-5.5-.3-6.5-2.8s.3-5.5 2.5-6.5c2.5-1 5.5.3 6.5 2.8 1.3 2.4 0 5.4-2.5 6.5z"
        fill = {this.state.Branch4} onPress = {this.Handler4}
      />
      <Path
        d="M1022.133 1173.404l5.054 5.033-11.528 9.84-4.302-5.272z"
        fill = {this.state.Branch4} onPress = {this.Handler4}
        fillOpacity={1}
      />
      <Path
        d="M949.35931 1160.177H956.35931V1175.177H949.35931z"
        fill = {this.state.Branch4} onPress = {this.Handler4}
      />
      <Path
        d="M825.26 1160.077c-6 0-11 4.9-11 11 0 6 4.9 11 11 11 6 0 11-4.9 11-11 .2-5.9-4.7-11-11-11zm0 16.1c-2.5 0-4.9-2.2-4.9-4.9 0-2.5 2.2-4.9 4.9-4.9 2.5 0 4.9 2.2 4.9 4.9.3 2.7-2 4.9-4.9 4.9z"
        fill = {this.state.Branch4} onPress = {this.Handler4}
      />
      <Path
        d="M825.26 1160.077c-6 0-11 4.9-11 11 0 6 4.9 11 11 11 6 0 11-4.9 11-11 .2-5.9-4.7-11-11-11zm0 16.1c-2.5 0-4.9-2.2-4.9-4.9 0-2.5 2.2-4.9 4.9-4.9 2.5 0 4.9 2.2 4.9 4.9.3 2.7-2 4.9-4.9 4.9zM691.66 1160.077c-6 .3-10.8 5.2-10.8 11.2.3 6 5.2 10.8 11.2 10.8 6-.3 10.8-5.2 10.8-11.2-.1-5.8-5.2-10.8-11.2-10.8zm.2 16.1c-2.5.3-4.9-2.1-4.9-4.9-.3-2.5 2.1-4.9 4.9-4.9 2.5-.3 4.9 2.1 4.9 4.9 0 2.5-2.2 4.9-4.9 4.9zM592.16 1160.577c-6 0-11 4.9-11 11 0 6 4.9 11 11 11 6 0 11-4.9 11-11 .1-6.1-4.6-11-11-11zm0 15.6c-2.5 0-4.9-2.2-4.9-4.9 0-2.5 2.2-4.9 4.9-4.9s4.9 2.2 4.9 4.9-2 4.9-4.9 4.9z"
        fill = {this.state.Branch4} onPress = {this.Handler4}
      />
      <Path
        d="M703.727 1275.454l-4.58 5.469-10.795-10.639 4.882-4.74z"
        fill = {this.state.Branch4} onPress = {this.Handler4}
        fillOpacity={1}
      />
      <Path
        d="M367.924 1165.44l9.387-10.388 5.935 5.364-9.386 10.387zM346.073 1135.837l9.386-10.387 5.936 5.364-9.387 10.387zM308.99 1111.34l9.386-10.386 5.935 5.363-9.386 10.387z"
        fill = {this.state.Branch4} onPress = {this.Handler4}
      />
      <Path
        d="M281.854 1065.307c-5.299 2.815-7.416 9.488-4.554 14.875 2.815 5.299 9.489 7.415 14.875 4.553 5.476-2.908 7.416-9.488 4.554-14.875-2.727-5.345-9.488-7.415-14.875-4.553zm7.506 14.13c-2.207 1.173-5.359.356-6.626-2.029a4.908 4.908 0 012.029-6.626c2.207-1.173 5.359-.356 6.626 2.028 1.267 2.385.62 5.22-2.029 6.627z"
        fill = {this.state.Branch4} onPress = {this.Handler4}
        fillOpacity={1}
      />
      <Path
        d="M1856.1305 588.26031H1878.1305V596.26031H1856.1305z"
        fill = {this.state.Branch3} onPress = {this.Handler3}
      />
      <Path
        d="M1863.1305 644.26031H1878.1305V651.26031H1863.1305z"
        fill = {this.state.Branch3} onPress = {this.Handler3}
      />
      <Path
        d="M1863.1305 780.26031H1878.1305V787.26031H1863.1305z"
        fill = {this.state.Branch3} onPress = {this.Handler3}
      />
      <Path
        d="M1832.38 844.667c-4.3-4.3-11.2-4.3-15.5 0-4.3 4.3-4.3 11.2 0 15.5 4.3 4.3 11.2 4.3 15.5 0 4.4-4.2 4.4-11.3 0-15.5zm-4.1 11.3c-1.9 1.9-4.9 1.9-6.9 0s-1.9-4.9 0-6.9c1.9-1.9 4.9-1.9 6.9 0 2 1.8 2 5 0 6.9z"
        fill = {this.state.Branch3} onPress = {this.Handler3}
      />
      <Path
        transform="scale(-1.00193 -.99806) rotate(45)"
        d="M-1858.0863 521.42371H-1850.6636263V619.102932H-1858.0863z"
        fill = {this.state.Branch3} onPress = {this.Handler3}
        strokeWidth={1.07747698}
      />
      <Path
        transform="matrix(-.6986 -.7155 .6984 -.7157 0 0)"
        d="M-1865.9222 442.35645H-1857.5057934V547.36194H-1865.9222z"
        fill = {this.state.Branch3} onPress = {this.Handler3}
        strokeWidth={1.05579174}
      />
      <Path d="M1743.746 864.635l5.2-5.2 10.4 10.4-5.1 5.2z" fill = {this.state.Branch3} onPress = {this.Handler3} />
      <Path
        d="M1675.32 932.933l5.2-5.2 10.4 10.4-5.1 5.2zM1604.242 1015.686l5.1-5 10.3 10.2-5.2 5zM1245.36 1216.777c-2.3-5.7-8.8-8.2-14.5-6-5.7 2.3-8.2 8.8-6 14.5 2.2 5.7 8.8 8.2 14.5 6 5.6-2.5 8.2-8.8 6-14.5zm-10.2 9.3c-2.5 0-4.9-2.2-4.9-4.9 0-2.5 2.2-4.9 4.9-4.9 2.5 0 4.9 2.2 4.9 4.9.1 2.4-2 4.9-4.9 4.9zM1112.86 1216.777c-2.2-5.7-8.7-8.5-14.3-6.3-5.7 2.2-8.5 8.7-6.3 14.3 2.2 5.7 8.7 8.5 14.3 6.3 5.8-2.3 8.7-8.6 6.3-14.3zm-8.5 8.7c-2.5 1-5.5-.3-6.5-2.8-1.1-2.5.3-5.5 2.5-6.5 2.5-1 5.4.3 6.5 2.8 1.4 2.7.1 5.4-2.5 6.5z"
        fill = {this.state.Branch3} onPress = {this.Handler3}
      />
      <Path
        d="M949.35931 1210.177H956.35931V1224.177H949.35931z"
        fill = {this.state.Branch9} onPress = {this.Handler9}
      />
      <Path
        transform="rotate(-90)"
        d="M-1214.8768 949.35931H-1212.8768V956.35931H-1214.8768z"
        opacity={1}
        fill="#fff"
        strokeWidth={0.15617375}
      />
      <Path
        transform="scale(-1)"
        d="M-953.79999 -1217.177H-951.79999V-1210.177H-953.79999z"
        opacity={1}
        fill="#fff"
        strokeWidth={0.15617375}
      />
      <Path
        d="M825.26 1209.877c-6 0-11 4.9-11 11 0 6 4.9 11 11 11 6 0 11-4.9 11-11 .2-6.3-4.7-11-11-11zm0 16c-2.5 0-4.9-2.2-4.9-4.9 0-2.5 2.2-4.9 4.9-4.9 2.5 0 4.9 2.2 4.9 4.9.3 2.5-2 4.9-4.9 4.9zM537.86 1388.277c-6 0-11 4.9-11 11 0 6 4.9 11 11 11 6 0 11-4.9 11-11-.1-6.3-4.8-11-11-11zm0 15.9c-2.5 0-4.9-2.2-4.9-4.9s2.2-4.9 4.9-4.9c2.5 0 4.9 2.2 4.9 4.9s-2.2 4.9-4.9 4.9zM324.072 1041.659c-5.298 2.814-7.415 9.487-4.553 14.874 2.815 5.3 9.488 7.416 14.875 4.554 5.475-2.909 7.415-9.488 4.553-14.875-2.726-5.346-9.488-7.415-14.875-4.553zm7.507 14.13c-2.208 1.172-5.36.355-6.626-2.03a4.908 4.908 0 012.028-6.625c2.208-1.173 5.36-.356 6.626 2.028 1.267 2.384.621 5.219-2.028 6.626z"
        fill = {this.state.Branch3} onPress = {this.Handler3}
      />
      <Path
        d="M324.07236 860.42896H338.07236V867.42896H324.07236z"
        fill = {this.state.Branch3} onPress = {this.Handler3}
      />
      <Path
        d="M324.07236 808.42896H338.07236V815.42896H324.07236z"
        fill = {this.state.Branch3} onPress = {this.Handler3}
      />
      <Path
        d="M423.35931 634.177H437.35931V642.177H423.35931z"
        fill = {this.state.Branch3} onPress = {this.Handler3}
      />
      <Path
        d="M423.35931 583.177H437.35931V590.177H423.35931z"
        fill = {this.state.Branch3} onPress = {this.Handler3}
      />
      <Path
        d="M423.35931 310.177H437.35931V318.177H423.35931z"
        fill = {this.state.Branch3} onPress = {this.Handler3}
      />
      <Path
        d="M415.35931 245.177H437.35931V253.177H415.35931z"
        fill = {this.state.Branch3} onPress = {this.Handler3}
      />
      <Path
        d="M1727.764 539.51c-4.3-4.3-11.2-4.3-15.5 0-4.3 4.3-4.3 11.2 0 15.5 4.3 4.3 11.2 4.3 15.5 0 4.3-4.4 4.3-11.4 0-15.5zm-4.2 11.1c-1.9 1.9-4.9 1.9-6.9 0s-1.9-4.9 0-6.9 4.9-1.9 6.9 0c1.9 1.7 1.9 5 0 6.9zM1701.864 673.01c-4.3-4.3-11.2-4.3-15.5 0-4.3 4.3-4.3 11.2 0 15.5 4.3 4.3 11.2 4.3 15.5 0 4.3-4.2 4.3-11.1 0-15.5zm-4.2 11.3c-1.9 1.9-4.9 1.9-6.9 0s-1.9-4.9 0-6.9c1.9-1.9 4.9-1.9 6.9 0 1.8 1.7 1.8 4.8 0 6.9zM1664.639 706.104l4.9-5 10.7 10.2-5.2 5.2zM1582.957 792.668l4.9-5 10.7 10.2-5.2 5.2zM1529.142 851.516l5.2-5.3 10.3 10.5-5.3 5zM1491.16 894.577c-4.3-4.3-11.2-4.3-15.5 0-4.3 4.3-4.3 11.2 0 15.5 4.3 4.3 11.2 4.3 15.5 0 4.2-4.4 4.2-11 0-15.5zm-4.4 11.3c-1.9 1.9-4.9 1.9-6.9 0s-1.9-4.9 0-6.9c1.9-1.9 4.9-1.9 6.9 0 2 1.8 2 5.1 0 6.9zM1431.084 949.74l5.2-5.2 10.4 10.4-5.2 5.2zM1387.76 986.977c-6.2 0-11.2 4.9-11.2 11 0 6 4.9 11 11.2 11 6.3 0 11.2-4.9 11.2-11-.2-6.1-5.2-11-11.2-11zm0 15.9c-2.5 0-4.9-2.2-4.9-4.9 0-2.5 2.2-4.9 4.9-4.9 2.5 0 4.9 2.2 4.9 4.9-.1 2.8-2.3 4.9-4.9 4.9zM1304.96 1071.777c-6-1.3-11.7 2.5-12.8 8.7-1.3 6 2.5 11.7 8.7 12.8 6 1.1 11.7-2.5 12.8-8.7 1.3-5.8-2.8-11.5-8.7-12.8zm2.8 11.7c-.5 2.5-3.2 4.4-6 3.8-2.5-.5-4.4-3.2-3.8-6 .5-2.5 3.2-4.4 6-3.8 2.6.8 4.3 3.3 3.8 6zM1216.56 1160.077c-6-1.3-11.7 2.5-12.8 8.7-1.3 6 2.5 11.7 8.7 12.8 6 1.3 11.7-2.5 12.8-8.7 1.3-5.5-2.7-11.4-8.7-12.8zm2.8 11.9c-.5 2.5-3.2 4.4-6 3.8-2.5-.5-4.4-3.2-3.8-6 .5-2.5 3.2-4.4 6-3.8 2.6.7 4.3 3.4 3.8 6zM1112.86 1279.177c-2.2-5.7-8.7-8.5-14.3-6.3-5.5 2.2-8.5 8.7-6.3 14.3 2.2 5.7 8.7 8.5 14.3 6.3 5.6-2.3 8.5-8.6 6.3-14.3zm-8.5 8.8c-2.5 1-5.5-.3-6.5-2.8s.3-5.5 2.5-6.5c2.5-1 5.4.3 6.5 2.8 1.2 2.4-.1 5.4-2.5 6.5z"
        fill = {this.state.Branch1} onPress = {this.Handler1}
      />
      <Path
        d="M977.35938 1320.177H984.35938V1335.177H977.35938z"
        fill = {this.state.Branch1} onPress = {this.Handler1}
      />
      <Path
        d="M785.06 1386.877l4.6-4.7 9.5 9.8-4.6 4.7zM759.098 1417.738c-4.3-4.3-11.2-4.3-15.5 0-4.3 4.3-4.3 11.2 0 15.5 4.3 4.3 11.2 4.3 15.5 0 4.1-4.3 4.1-11.2 0-15.5zm-4.4 11.2c-1.9 1.9-4.9 1.9-6.9 0-1.9-1.9-1.9-4.9 0-6.9 1.9-1.9 4.9-1.9 6.9 0 1.9 1.9 1.9 5.1 0 6.9z"
        fill = {this.state.Branch1} onPress = {this.Handler1}
      />
      <Path
        d="M684.35931 1554.177H699.35931V1562.177H684.35931z"
        fill = {this.state.Branch1} onPress = {this.Handler1}
      />
      <Path
        d="M684.35931 1615.177H699.35931V1622.177H684.35931z"
        fill = {this.state.Branch1} onPress = {this.Handler1}
      />
      <Path
        d="M684.35931 1679.6433H692.35931V1756.1769299999999H684.35931z"
        fill = {this.state.Branch1} onPress = {this.Handler1}
        strokeWidth={1.01846504}
      />
      <Path
        d="M684.35931 1619.177H692.35931V1678.018255H684.35931z"
        fill = {this.state.Branch1} onPress = {this.Handler1}
        strokeWidth={1.05565989}
      />
      <Path
        d="M684.35931 1752.177H699.35931V1760.177H684.35931z"
        fill = {this.state.Branch1} onPress = {this.Handler1}
      />
      <Path
        d="M920.76 2101.177c-4.3-4.3-11.2-4.3-15.5 0-4.3 4.3-4.3 11.2 0 15.5 4.3 4.3 11.2 4.3 15.5 0 4.1-4.2 4.1-11.2 0-15.5zm-4.5 11.4c-1.9 1.9-4.9 1.9-6.9 0-1.9-1.9-1.9-4.9 0-6.9 1.9-1.9 4.9-1.9 6.9 0 1.9 1.8 1.8 4.8 0 6.9z"
        fill = {this.state.Branch6} onPress = {this.Handler6}
      />
      <Path
        d="M1235.401 2218.855H1263.589478V2233.855H1235.401z"
        fillOpacity={0.65}
        fill="#fff"
      />
      <Path
        d="M1290.2194 244.99072H1297.2194434V292.990678H1290.2194z"
        fill = {this.state.Branch9} onPress = {this.Handler9}
      />
      <Path
        d="M1290.2194 197.99048H1297.2194434V244.99044899999998H1290.2194z"
        fill = {this.state.Branch9} onPress = {this.Handler9}
      />
      <Path
        d="M515.55933 1424.5769H522.55933V1478.91143H515.55933z"
        fill = {this.state.Branch8} onPress = {this.Handler8}
        strokeWidth={0.89919388}
      />
      <Path
        d="M515.55933 1486.5604H522.55933V1543.976767H515.55933z"
        fill = {this.state.Branch8} onPress = {this.Handler8}
        strokeWidth={1.02924371}
      />
      <Path
        d="M515.55933 1543.7769H522.55933V1615.476897H515.55933z"
        fill = {this.state.Branch8} onPress = {this.Handler8}
      />
      <Path
        transform="rotate(-50.486)"
        className="st134"
        d="M-179.87271 1184.5889H-82.86834600000002V1191.5892147H-179.87271z"
        fill = {this.state.Branch11} onPress = {this.Handler11}
      />
      <Path
        transform="rotate(-50.514)"
        d="M-304.1355 1184.4684H-180.43277999999998V1191.468554H-304.1355z"
        fill = {this.state.Branch11} onPress = {this.Handler11}
      />
      <Path
        d="M716.36 994.277l5.195 4.674c-33.893 37.617-75.818 60.259-76.38 60.565l-2.857-5.073c.378-.383 40.812-23.356 74.041-60.166zM677.05 1189.952l-55.708-89.241c-7.355-11.559-4.831-20.632 6.98-28.148l8.531-5.232-4.295-6.749-8.53 5.232c-15.187 9.663-18.147 23.638-9.65 38.854l55.87 89.495z"
        fill = {this.state.Branch11} onPress = {this.Handler11}
        fillOpacity={1}
      />
      <Path
        transform="rotate(-50.486)"
        className="st7"
        d="M-179.22952 1178.6736H-83.52522V1185.6739147H-179.22952z"
        fill = {this.state.Branch8} onPress = {this.Handler8}
      />
      <Path
        transform="translate(209.06 306.377)"
        d="M586.2 581.9L591.6 586.3 513.5 681.6 508.1 677.1z"
        fill = {this.state.Branch8} onPress = {this.Handler8}
      />
      <Path
        d="M708.604 992.626l5.196 4.675c-33.893 37.616-70.92 56.836-71.482 57.142l-3.548-5.346c.378-.384 36.604-19.66 69.834-56.47z"
        fill = {this.state.Branch8} onPress = {this.Handler8}
      />
      <Path
        d="M540.67 1121.97l90.538-60.32-4.198-6.038-90.948 60.347c-13.89 10-17.534 17.173-20.472 33.51l-.052 261.713 7.954-.192v-260.596c2.45-14.19 4.7-19.492 17.179-28.425z"
        fill = {this.state.Branch8} onPress = {this.Handler8}
        fillOpacity={1}
      />
      <Path
        d="M1106.7593 257.5769H1113.7593V327.5769H1106.7593z"
        fill = {this.state.limeBranch} onPress = {this.limeHandler}
      />
      <Path
        d="M1106.7593 327.5769H1113.7593V378.55100200000004H1106.7593z"
        fill = {this.state.limeBranch} onPress = {this.limeHandler}
      />
      <Path
        d="M1106.7593 323.677H1121.7593V330.677H1106.7593z"
        fill = {this.state.limeBranch} onPress = {this.limeHandler}
      />
      <Path
        d="M1069.73 411.024c-28.6 6.2-54.605 14.058-81.905 24.058-.5.3 3.334 1.095 4.134 3.095.8 1.9-1.451 4.403-.851 4.103 26.8-9.9 52.557-18.084 80.657-24.084.3 0-.55-1.269-.85-3.369-.3-2-.485-4.003-1.185-3.803z"
        fill = {this.state.Branch1} onPress = {this.Handler1}
      />
      <Path
        d="M1074.644 416.438l-1.685-5.404.227 1.422c-31.1 6.5-55.804 13.705-85.104 24.905l1.377 3.27c29.1-11 54.085-18.275 85.185-24.875-.2 0 0 .682 0 .682z"
        fill="#fff"
      />
      <Path
        d="M930.41 469.146c17.9-9.1 40.604-19.317 59.304-26.417.3 0-3.355-.452-4.155-2.352-.8-1.9 1.595-4.825 1.095-4.725-18.9 7.1-41.247 16.88-59.347 26.08-.5.3 1.652 1.645 2.652 3.345.9 2-.149 4.369.451 4.069z"
        fill = {this.state.Branch1} onPress = {this.Handler1}
      />
      <Path
        d="M927.775 464.102l2.062 2.79c19.9-10.3 38.622-18.06 59.622-26.26l-1.377-3.27c-21.2 7.9-40.207 16.34-60.307 26.74z"
        fill="#fff"
      />
      <Path
        d="M887.46 483.877s-4.316 2.054-14.868 9.55c-.3.3 2.1 1.3 3.4 2.5 1.4 1.6 1.922 3.8 2.222 3.4 5.81-4.301 13.606-8.73 13.606-8.73 11.2-6.6 27.19-15.351 38.59-21.451.5-.3-3.249-.479-4.249-2.379-1-1.8.682-4.659-.018-4.259-11.5 6.4-27.384 14.669-38.684 21.369z"
        fill = {this.state.Branch1} onPress = {this.Handler1}
      />
      <Path
        d="M889.005 485.74c-14.261 8.443-16.79 10.78-16.79 10.78l1.573 3.363s2.88-2.673 16.589-10.71c12.2-7.4 25.867-15.385 38.567-21.585l-2.018-3.211c-12.7 6.2-23.411 12.918-37.921 21.363z"
        fill="#fff"
      />
      <Path
        d="M841.764 515.09c-25.48 18.439-46.018 35.962-68.191 58.044-.275.324 2.199 1.125 3.593 2.215 1.525 1.48 1.904 3.656 2.17 3.233 21.8-21.75 42.078-38.75 67.169-57.058 10.624-7.491 7.18-5.26 18.045-12.269.474-.34-.977-2.127-2.128-3.94-1.144-1.712-1.705-3.673-2.37-3.217-10.94 7.317-7.572 5.392-18.288 12.991z"
        fill = {this.state.Branch1} onPress = {this.Handler1}
      />
      <Path
        d="M843.173 516.666c-26.146 18.895-49.546 39.255-72.268 61.983l3.057 2.019c22.44-22.505 44.695-41.574 70.965-60.178 11.556-8.37 12.31-8.557 22.934-16.013l-2.73-3.715c-10.427 7.18-10.103 7.509-21.958 15.904z"
        fill="#fff"
      />
      <Path
        d="M735.06 615.277c-14.3 17.4-27.6 35.4-40 53.8-.3.3 2.3.5 4.1 1.6 1.8 1.3 2.5 3.2 2.8 2.8 12.1-18.5 25.1-36.1 39.3-53.1 9.5-11.2 19.3-22.4 29.5-33 .3-.5-1.3-1.6-2.5-3.2-1.4-1.6-3.644-2.276-3.644-2.276-10.1 11.1-19.757 21.676-29.557 33.376z"
        fill = {this.state.Branch1} onPress = {this.Handler1}
      />
      <Path
        d="M737.285 616.518c-14.9 18-29.545 37.426-42.728 58.29l3.153.669c14.595-22.49 27.18-38.637 41.624-56.263 10.3-12.3 21.745-25.465 32.945-36.765l-2.433-2.392c-11.3 11.5-22.161 23.861-32.561 36.461z"
        fill="#fff"
      />
      <Path
        d="M685.492 685.238c-.023.007-.033.051-.033.139-11.454 18.551-22.39 38.889-31.943 59.334l-.022.045c1.817.947 4.065 2.09 6.91 3.66 9.589-20.296 20.546-40.56 31.856-58.94.3-.3-2.501-.499-4.301-1.599-1.575-.963-2.308-2.69-2.467-2.639z"
        fill = {this.state.Branch1} onPress = {this.Handler1}
      />
      <Path
        d="M689.527 683.594c-12.186 19.582-23.706 40.172-33.79 61.293 1.26.549 1.959.978 3.035 1.5 9.895-20.777 21.208-41.004 33.285-60.453z"
        fill="#fff"
      />
      <Path
        d="M597.96 997.951c0 11.7.64 26.016 1.34 37.616 0 .5 2.626.126 4.826.126 2.1-.3 3.574.074 3.574-.426-.6-11.4-1.34-25.816-1.34-37.516 0-18.9 1-37.6 2.5-55.9 0-.5-2.1.5-4.1.3-2.1-.3-4.1-1.9-4.1-1.3-1.7 18.7-2.7 37.7-2.7 57.1z"
        fill = {this.state.Branch1} onPress = {this.Handler1}
      />
      <Path
        d="M603.283 938.451c-1.9 19.6-2.66 39.828-2.66 59.728 0 12.6.471 26.366 1.471 38.366l3.056-.91c-.8-12-1.3-24.856-1.3-37.456 0-19.6.772-39.514 2.772-58.914z"
        fill="#fff"
      />
      <Path
        d="M624.181 1140.036c-8.5-31.7-12.267-57.377-15.167-90.277-.3-.5-2.1.8-4.1 1-2.1.3-4.1-.8-4.1-.3 3 33.5 6.767 59.477 15.467 91.777.3.5 1.9-1.1 3.9-1.6 1.9-.6 4.3-.1 4-.6z"
        fill = {this.state.Branch1} onPress = {this.Handler1}
      />
      <Path
        d="M621.903 1140.69c-9.1-33.5-11.76-55.506-15.783-90.433l-2.543.414c3.113 35.1 5.631 57.405 14.831 91.305z"
        fill="#fff"
      />
      <Path
        d="M629.36 1183.177c13.469 40.036 30.797 78.282 52.118 114.348.274.323 1.542-1.68 3.434-2.728 1.701-1.165 4.231-.565 3.857-.897-21.054-35.642-38.545-73.993-51.573-113.29-1.91-6.076-2.95-7.645-8.415-27.179-.258-.523-2 1.14-4.042 1.575-1.935.343-4.261-.651-4.111-.036 6.38 21.331 6.34 21.532 8.731 28.207z"
        fill = {this.state.Branch1} onPress = {this.Handler1}
      />
      <Path
        d="M635.127 1181.584c-7.268-21.467-6.614-19.425-9.034-28.763l-2.919 1.61c3.32 11.182 1.454 6.392 8.781 28.365 13.412 40.734 31.661 79.082 53.24 115.67l2.344-2.244c-21.511-36.182-38.959-74.403-52.412-114.638z"
        fill="#fff"
      />
      <Path
        d="M740.456 1384.028l6.086-5.178c-18.7-22.154-35.7-45.362-50.99-69.721-.272-.326-1.156 1.704-2.74 2.566-1.908 1.134-4.425 1.21-4.27 1.726 15.688 24.395 32.86 47.92 51.914 70.607z"
        fill = {this.state.Branch1} onPress = {this.Handler1}
      />
      <Path
        d="M742.992 1383.247l2.203-2.903c-19.236-22.905-37.185-46.808-52.62-71.783l-3.162 1.646c15.69 25.5 34.154 50.017 53.58 73.04z"
        fill="#fff"
      />
      <Path
        d="M775.46 1419.577c34.3 33.8 91.145 74.699 131.745 99.399.3.3.3-2.1 1.4-3.9 1-1.8 3.2-3 2.5-3.2-40-24.2-96.546-64.799-130.046-97.999-20.6-20.4-13.386-13.535-22.906-24.695-.3-.3-1 1.8-2.5 2.8-1.8 1.3-4.3 1.6-4.1 2.1 9.276 10.677 14.807 16.496 23.906 25.495z"
        fill = {this.state.Branch1} onPress = {this.Handler1}
      />
      <Path
        d="M776.863 1418.014c17.071 19.666 90.873 74.55 132.555 100.054l2.49-2.353c-58.407-37.566-106.696-73.23-132.29-100.636-11.39-11.13-20.298-19.82-23.424-25.148l-3.574 2.72c8.572 10.089 13.94 15.099 24.243 25.363z"
        fill="#fff"
      />
      <Path
        d="M967.96 1548.077c23.4 9.8 48.166 18.17 72.366 24.87.5.3-.667-2.27.033-4.07.5-2.1 2.767-3.63 2.067-3.93-23.9-6.6-48.167-14.97-71.267-24.67-21.7-9.1-24.628-9.69-44.728-20.99-.3-.3-.3 2.1-1.3 3.8-1 1.9-3.2 3.2-2.5 3.4 20.2 11.9 23.428 12.29 45.328 21.59z"
        fill = {this.state.Branch1} onPress = {this.Handler1}
      />
      <Path
        d="M968.573 1546.208c24.2 10.3 45.22 16.953 71.33 24.222l1.855-2.77c-26.579-8.152-47.199-14.505-71.399-24.805-22.684-9.784-27.192-11.113-44.232-21.023l-1.663 3.336c16.314 9.827 21.323 11.597 44.109 21.04z"
        fill="#fff"
      />
      <Path
        d="M1194.76 1587.077c-49.8-.8-104.734-9.63-152.334-22.13-.6-.3 2.265 3.193 1.765 5.193-.5 1.9-4.365 2.408-3.765 2.708 48.1 12.7 103.733 21.729 154.333 22.429.6 0-.3-2.1-.3-4.3 0-2.2.7-3.9.3-3.9z"
        fill = {this.state.Branch1} onPress = {this.Handler1}
      />
      <Path
        d="M1197.56 1589.724c-52.4-.5-106.524-9.732-155.802-22.065l-.99 3.069c46.904 11.69 104.091 22.086 156.891 22.586z"
        fill="#fff"
      />
      <Path
        d="M1044.26 1566.224a3.956 3.956 0 00-5.615 0 3.96 3.96 0 000 5.617 3.956 3.956 0 005.614 0c1.594-1.485 1.594-3.986 0-5.617zm-1.522 4.132c-.689.688-1.775.688-2.5 0-.688-.689-.688-1.776 0-2.501.689-.689 1.775-.689 2.5 0 .652.652.652 1.812 0 2.5z"
        fill = {this.state.Branch1} onPress = {this.Handler1}
        fillOpacity={1}
        strokeWidth={0.30948851}
      />
      <Path
        d="M1302.526 1579.096c-32 5.2-59.217 8.626-92.012 8.061l-4.673-.08c-.6-.01-.3 2.2-.3 4.4.3 1.9-.1 3.588.6 3.6l4.373.08c33.194.61 60.912-2.961 93.312-8.161.6-.3-1.667-1.819-1.867-4.019-.2-1.8 1.167-4.081.567-3.881z"
        fill = {this.state.Branch1} onPress = {this.Handler1}
      />
      <Path
        d="M1305.26 1584.71l-.8-3.496c-33.2 5.7-52.245 8.373-95.67 8.373h-2.928l-.113 3.34 3.098.17c33.931.696 63.112-2.787 96.412-8.387z"
        fill="#fff"
      />
      <Path
        d="M1210.528 1586.082c-2.3-5.7-8.8-8.2-14.5-6-5.7 2.2-8.2 8.8-6 14.5 2.3 5.7 8.8 8.2 14.5 6 5.8-2.5 8.5-9 6-14.5zm-8.2 8.8c-2.5 1-5.5-.3-6.5-2.5-1-2.5.3-5.5 2.5-6.5 2.5-1 5.5.3 6.5 2.5 1.1 2.6 0 5.4-2.5 6.5z"
        fill = {this.state.Branch1} onPress = {this.Handler1}
        fillOpacity={1}
      />
      <Path
        d="M1358.66 1566.977c-16.7 4.4-39.234 9.119-56.134 12.119-.6.3 4.866 1.044 5.066 3.044.3 2-4.566 5.056-3.766 4.856 16.9-3 40.333-7.619 56.933-12.219.5-.3-1.1-1.9-1.6-3.9s-.1-4.2-.5-3.9z"
        fill = {this.state.Branch1} onPress = {this.Handler1}
      />
      <Path
        d="M1361.13 1568.971c-18.5 4.9-37.47 9.143-56.67 12.243l.277 3.48c19.3-3.2 38.98-7.342 57.78-12.542z"
        fill="#fff"
      />
      <Path
        d="M1306.78 1580.079a3.956 3.956 0 00-5.614 0 3.96 3.96 0 000 5.617 3.956 3.956 0 005.615 0c1.593-1.485 1.593-3.986 0-5.617zm-1.52 4.131c-.69.69-1.776.69-2.5 0-.688-.688-.688-1.775 0-2.5.688-.689 1.775-.689 2.5 0 .651.652.651 1.812 0 2.5z"
        fill = {this.state.Branch1} onPress = {this.Handler1}
        fillOpacity={1}
        strokeWidth={0.30948851}
      />
      <Path
        d="M1531.86 1489.977c-30.2 19.6-62 36.6-95.5 50.4-19.5 8.2-42.878 15.763-62.778 21.863-.3.3 1.14 1.559 1.64 3.559.5 1.9.46 4.54.66 4.34 20.4-6.2 43.777-13.862 63.677-22.262 34.1-14.2 66.3-31.3 97-51.2.3-.3-1.6-1.4-2.5-3.2-1.7-1.5-2-3.8-2.2-3.5z"
        fill = {this.state.Branch1} onPress = {this.Handler1}
      />
      <Path
        d="M1536.416 1494.094l-1.753-3.233c-30.6 20.1-63.34 37.702-97.64 52.002-20.6 8.7-42.044 15.277-63.044 21.677l1.015 3.19c21.2-6.3 43.185-13.057 63.785-21.757a584.446 584.446 0 0097.637-51.878z"
        fill="#fff"
      />
      <Path
        d="M1376.06 1564.677c-2.3-5.7-8.8-8.2-14.5-6-5.7 2.2-8.2 8.8-6 14.5 2.3 5.7 8.8 8.2 14.5 6 5.8-2.5 8.5-9 6-14.5zm-8.2 8.8c-2.5 1-5.5-.3-6.5-2.5-1-2.5.3-5.5 2.5-6.5 2.5-1 5.5.3 6.5 2.5 1.1 2.6 0 5.4-2.5 6.5z"
        fill = {this.state.Branch1} onPress = {this.Handler1}
        fillOpacity={1}
      />
      <Path
        d="M1629.813 1410.394c-1 1-2.554 2.383-3.454 3.383-24.5 24.2-53.486 48.374-81.386 67.974-.3.3 1.4 1.3 2.5 3 1.1 1.6 1.6 4.1 1.9 3.8 28.4-19.7 57.686-44.274 82.686-69.074l3.796-3.71c.304-.297-3.987.76-5.087-.84-1.5-1.5-.855-4.733-.955-4.533z"
        fill = {this.state.Branch1} onPress = {this.Handler1}
      />
      <Path
        d="M1633.926 1414.361l-2.235-2.496-3.438 3.351c-25.1 25-52.69 47.726-81.59 67.626l1.714 3.253c29.1-20.1 56.414-42.873 81.914-67.873 1.9-2 1.635-1.96 3.635-3.86z"
        fill="#fff"
      />
      <Path
        d="M1549.211 1486.676c-2.3-5.7-8.8-8.2-14.5-6-5.7 2.2-8.2 8.8-6 14.5 2.3 5.7 8.8 8.2 14.5 6 5.8-2.5 8.5-9 6-14.5zm-8.2 8.8c-2.5 1-5.5-.3-6.5-2.5-1-2.5.3-5.5 2.5-6.5 2.5-1 5.5.3 6.5 2.5 1.1 2.6 0 5.4-2.5 6.5z"
        fill = {this.state.Branch1} onPress = {this.Handler1}
        fillOpacity={1}
      />
      <Path
        d="M1635.448 1410.23a3.956 3.956 0 00-5.615 0 3.96 3.96 0 000 5.617 3.956 3.956 0 005.615 0c1.593-1.486 1.593-3.986 0-5.617zm-1.522 4.131c-.688.69-1.775.69-2.5 0-.687-.688-.687-1.775 0-2.5.69-.689 1.776-.689 2.5 0 .652.652.652 1.812 0 2.5z"
        fill = {this.state.Branch1} onPress = {this.Handler1}
        fillOpacity={1}
        strokeWidth={0.30948851}
      />
      <Path
        d="M1758.908 1212.645c-4.915 12.827-4.644 11.266-10.422 23.578a564.065 564.065 0 01-10.515 21.186c2.325 1.682 4.403 2.968 6.508 4.628 4.038-6.677 8.309-15.698 11.385-22.236 5.905-12.584 5.275-11.139 10.408-24.195-2.667-.643-5.397-1.817-7.364-2.961z"
        fill = {this.state.Branch1} onPress = {this.Handler1}
      />
      <Path
        d="M1760.323 1214.944c-5.249 13.775-3.616 9.261-9.903 22.66a591.376 591.376 0 01-10.18 20.605c.968.617 2.018 1.199 2.783 1.799v-.01l.01.01a557.66 557.66 0 0010.426-21.006c6.68-13.766 4.943-9.14 9.969-22.91z"
        fill="#fff"
      />
      <Path
        d="M1748.666 1263.03c-2.3-5.7-8.8-8.2-14.5-6-5.7 2.2-8.2 8.8-6 14.5 2.3 5.7 8.8 8.2 14.5 6 5.8-2.5 8.5-9 6-14.5zm-8.2 8.8c-2.5 1-5.5-.3-6.5-2.5-1-2.5.3-5.5 2.5-6.5 2.5-1 5.5.3 6.5 2.5 1.1 2.6 0 5.4-2.5 6.5z"
        fill = {this.state.Branch1} onPress = {this.Handler1}
        fillOpacity={1}
      />
      <Path
        d="M1784.526 1142.09c-4.75 15.243-13.768 41.212-19.805 56.242-.343.471 2.098.01 3.74.755 2.021.98 3.442 3.188 3.694 2.607 6.046-15.129 14.513-42.12 19.2-57.77.343-.472-2.566 1.892-4.315 1.237-1.74-.755-2.262-3.65-2.514-3.07z"
        fill = {this.state.Branch1} onPress = {this.Handler1}
      />
      <Path
        d="M1785.928 1144.304c-5.403 18.097-13.396 40.333-20.349 57.792l2.767 1.314c7.252-17.433 15.044-39.72 20.465-58.016z"
        fill="#fff"
      />
      <Path
        d="M1774.888 1203.926c-2.3-5.7-8.8-8.2-14.5-6-5.7 2.2-8.2 8.8-6 14.5 2.3 5.7 8.8 8.2 14.5 6 5.8-2.5 8.5-9 6-14.5zm-8.2 8.8c-2.5 1-5.5-.3-6.5-2.5-1-2.5.3-5.5 2.5-6.5 2.5-1 5.5.3 6.5 2.5 1.1 2.6 0 5.4-2.5 6.5z"
        fill = {this.state.Branch1} onPress = {this.Handler1}
        fillOpacity={1}
      />
      <Path
        d="M1794.964 1101.524c-3.428 15.594-5.175 23.345-9.903 38.837 2.798-.302 4.891 1.325 6.634 2.272 4.729-15.592 7.306-23.554 10.635-39.548.301-.5-2.1-.304-3.898-.807-1.8-.603-3.267-1.353-3.468-.754z"
        fill = {this.state.Branch1} onPress = {this.Handler1}
      />
      <Path
        d="M1797.823 1097.957c-3.834 18.493-5.18 24.113-10.612 42.104l2.957.983c5.733-17.99 6.704-23.046 10.538-41.739z"
        fill="#fff"
      />
      <Path
        d="M1790.698 1139.948a3.956 3.956 0 00-5.614 0 3.96 3.96 0 000 5.618 3.956 3.956 0 005.614 0c1.594-1.486 1.594-3.987 0-5.618zm-1.521 4.132c-.688.689-1.775.689-2.5 0-.688-.689-.688-1.776 0-2.5.689-.69 1.776-.69 2.5 0 .652.652.652 1.811 0 2.5z"
        fill = {this.state.Branch1} onPress = {this.Handler1}
        fillOpacity={1}
        strokeWidth={0.30948851}
      />
      <Path
        d="M1800.26 974.277c1 13.7 1.4 27.6 1.4 41.2 0 23.9-1.4 47.5-4.3 70.7-.3.5 2.1.3 4.1.5 2.1.3 4.1.8 4.1.3 2.8-23.5 4.3-47.5 4.3-71.4 0-13.9-.5-27.8-1.4-41.8 0-.5-2.1.8-4.1 1-2 0-4.1-1.1-4.1-.5z"
        fill = {this.state.Branch1} onPress = {this.Handler1}
      />
      <Path
        d="M1805.907 972.3l-3.454.357c1.1 14.7 1.544 28.447 1.544 43.247 0 25.3-1.6 50.087-4.7 74.887l3.112.386c3.2-25 4.927-50 4.927-75.3.2-15.3-.13-28.977-1.43-43.577z"
        fill="#fff"
      />
      <Path
        d="M1809.407 1090.505c-2.3-5.7-8.8-8.2-14.5-6-5.7 2.2-8.2 8.8-6 14.5 2.3 5.7 8.8 8.2 14.5 6 5.8-2.5 8.5-9 6-14.5zm-8.2 8.8c-2.5 1-5.5-.3-6.5-2.5-1-2.5.3-5.5 2.5-6.5 2.5-1 5.5.3 6.5 2.5 1.1 2.6 0 5.4-2.5 6.5z"
        fill = {this.state.Branch1} onPress = {this.Handler1}
        fillOpacity={1}
      />
      <Path
        d="M1790.922 888.763c1.117 7.908.226.588 2.35 14.02 3.734 23.607 6.228 48.126 6.987 71.494-.218.54 1.818.343 3.824.228 2.121-.031 4.454-.234 4.376-.728-.905-23.649-3.338-48.569-7.072-72.175-2.17-13.73-.896-5.349-2.444-14.614-.078-.494-1.95 1.118-3.894 1.628-1.975.313-4.221-.446-4.127.147z"
        fill = {this.state.Branch1} onPress = {this.Handler1}
      />
      <Path
        d="M1796.673 888.984l-3.355.892c.97 6.226.018-1.654 2.33 12.965 3.952 24.99 6.243 49.721 7.056 74.701l3.133-.105c-.744-25.193-2.943-50.156-6.895-75.145-2.193-15.143-.953-6.086-2.269-13.308z"
        fill="#fff"
      />
      <Path
        d="M1806.98 970.246a3.956 3.956 0 00-5.614 0 3.961 3.961 0 000 5.617 3.956 3.956 0 005.615 0c1.593-1.486 1.593-3.986 0-5.617zm-1.52 4.131c-.69.69-1.776.69-2.5 0-.688-.688-.688-1.775 0-2.5.688-.689 1.775-.689 2.5 0 .651.652.651 1.812 0 2.5z"
        fill = {this.state.Branch1} onPress = {this.Handler1}
        fillOpacity={1}
        strokeWidth={0.30948851}
      />
      <Path
        d="M1695.507 659.654c53.14 93.483 67.935 120.719 92.742 215.334.3.5 2.1-.8 4.1-1 2.1-.3 4.3.8 4.3.3-18.197-82.51-41.347-124.257-93.442-217.534-.3-.5-1.8.8-3.6 1.6-1.9.8-4.3.7-4.1 1.3z"
        fill = {this.state.Branch1} onPress = {this.Handler1}
      />
      <Path
        d="M1697.678 659.172c53.14 93.483 68.152 120.518 92.96 215.133.3.5-1.028-.174.972-.374 2.1-.3 2.14.288 2.14-.212-18.198-82.51-40.538-123.126-92.634-216.402-.3-.5.29.237-1.51 1.037-1.9.8-2.128.218-1.928.818z"
        fill="#fff"
        fillOpacity={1}
      />
      <Path
        d="M1804.395 878.744c-2.3-5.7-8.8-8.2-14.5-6-5.7 2.2-8.2 8.8-6 14.5 2.3 5.7 8.8 8.2 14.5 6 5.8-2.5 8.5-9 6-14.5zm-8.2 8.8c-2.5 1-5.5-.3-6.5-2.5-1-2.5.3-5.5 2.5-6.5 2.5-1 5.5.3 6.5 2.5 1.1 2.6 0 5.4-2.5 6.5z"
        fill = {this.state.Branch1} onPress = {this.Handler1}
        fillOpacity={1}
      />
      <Path
        d="M1677.52 621.923c-5.861-7.539-11.806-15.19-17.993-22.574-.252-.341-1.267 1.733-2.772 3.027-1.49 1.195-3.73 1.976-3.575 2.302a629.556 629.556 0 0117.626 22.317c5.255 6.842 9.987 13.81 15.002 20.92.252.34 1.267-1.734 2.955-2.9 1.788-1.15 4.334-1.28 4.067-1.521-5.04-7.62-10.154-14.744-15.31-21.571z"
        fill = {this.state.Branch1} onPress = {this.Handler1}
      />
      <Path
        d="M1675.746 623.577c-6.239-8.403-13.4-17.107-20.122-24.974l-2.492 2.25c6.51 7.937 11.972 14.935 19.374 24.448 5.564 7.494 11.7 16.097 16.978 24.155 1.112-1.28.676-1.226 2.767-3.159-5.535-7.692-10.773-15-16.505-22.72z"
        fill="#fff"
      />
      <Path
        d="M1705.275 646.17c-2.3-5.7-8.8-8.2-14.5-6-5.7 2.2-8.2 8.8-6 14.5 2.3 5.7 8.8 8.2 14.5 6 5.8-2.5 8.5-9 6-14.5zm-8.2 8.8c-2.5 1-5.5-.3-6.5-2.5-1-2.5.3-5.5 2.5-6.5 2.5-1 5.5.3 6.5 2.5 1.1 2.6 0 5.4-2.5 6.5z"
        fill = {this.state.Branch1} onPress = {this.Handler1}
        fillOpacity={1}
      />
      <Path
        d="M1631.899 569.322c-6.957-6.6-13.7-13.38-20.9-19.78-.3-.3-.94 2.235-2.24 3.735-1.3 1.4-4.125 1.335-3.925 1.635 7 6.3 14.739 13.68 21.539 20.38 6.2 6 11.786 12.485 17.786 18.785.3.3 1-1.9 2.5-3.3 1.6-1.4 4.1-1.9 3.8-2.1-6.1-6.8-12.621-13.355-18.56-19.355z"
        fill = {this.state.Branch1} onPress = {this.Handler1}
      />
      <Path
        d="M1629.761 570.155c-7.771-7.6-15.01-14.335-22.582-21.249l-2.435 3.332c7.6 6.9 15.37 14.07 22.97 21.47 6.6 6.6 11.992 11.865 18.392 19.065l2.379-2.906c-6.6-6.8-11.792-12.933-18.724-19.712z"
        fill="#fff"
      />
      <Path
        d="M1661.332 592.052c-2.3-5.7-8.8-8.2-14.5-6-5.7 2.2-8.2 8.8-6 14.5 2.3 5.7 8.8 8.2 14.5 6 5.8-2.5 8.5-9 6-14.5zm-8.2 8.8c-2.5 1-5.5-.3-6.5-2.5-1-2.5.3-5.5 2.5-6.5 2.5-1 5.5.3 6.5 2.5 1.1 2.6 0 5.4-2.5 6.5z"
        fill = {this.state.Branch1} onPress = {this.Handler1}
        fillOpacity={1}
      />
      <Path
        d="M1501.699 483.989c33.57 19.727 71.332 47.485 103.135 70.923 4.8-2.333-2.418-1.353-.651-4.673.892-2.072 6.336-1.167 5.629-1.558-32.333-23.828-71.407-53.05-105.86-72.778-.884-.586 2.38 1.255.968 4.575-1.767 3.906-4.281 3.12-3.221 3.51z"
        fill = {this.state.Branch1} onPress = {this.Handler1}
        strokeWidth={1.85767126}
      />
      <Path
        d="M1503.399 478.218l-1.992 3.64c37.634 21.484 67.28 44.091 102.617 70.068l3.778-1.788c-35.69-26.563-66.24-50.435-104.403-71.92z"
        fill="#fff"
        strokeWidth={1.85767126}
      />
      <Path
        d="M1611.016 549.5a4.03 4.03 0 00-5.724 0 4.048 4.048 0 000 5.736 4.03 4.03 0 005.724 0c1.625-1.518 1.625-4.07 0-5.736zm-1.55 4.218c-.703.704-1.81.704-2.55 0-.7-.703-.7-1.813 0-2.553.703-.703 1.81-.703 2.55 0 .664.666.664 1.85 0 2.553z"
        fill = {this.state.Branch1} onPress = {this.Handler1}
        fillOpacity={1}
        strokeWidth={0.31577167}
      />
      <Path
        d="M1442.357 453.79c19.592 8.9 38.615 18.335 57.327 29.192.318.28 1.678-2.008 2.57-3.767.899-1.659 2.11-3.137 1.698-3.312-19.024-11.038-38.583-21.042-58.674-29.91-.517-.268-.68 1.947-1.373 3.693-.873 2.058-2.159 3.942-1.548 4.104z"
        fill = {this.state.Branch1} onPress = {this.Handler1}
      />
      <Path
        d="M1441.369 446.312l-2.418 3.681c21.942 9.654 41.668 19.834 62.456 31.864l1.992-3.639c-21.007-12.317-39.788-22.27-62.03-31.906z"
        fill="#fff"
      />
      <Path
        d="M1505.24 476.873a4.028 4.028 0 00-5.805 0 4.251 4.251 0 000 5.936 4.028 4.028 0 005.805 0c1.648-1.57 1.648-4.213 0-5.936zm-1.573 4.366c-.711.728-1.835.728-2.584 0-.711-.728-.711-1.877 0-2.643.712-.727 1.835-.727 2.584 0 .674.69.674 1.915 0 2.643z"
        fill = {this.state.Branch1} onPress = {this.Handler1}
        fillOpacity={1}
        strokeWidth={0.32348824}
      />
      <Path
        d="M1275.661 401.368c48.653 2.009 102.729 20.698 157.329 40.684m0 0l-1.36 6.079c-51.04-17.974-99.53-34.925-155.618-40.75l.13-6.302"
        fill = {this.state.Branch1} onPress = {this.Handler1}
        fillOpacity={1}
        stroke="none"
        strokeWidth="1.01229548px"
        strokeLinecap="butt"
        strokeLinejoin="miter"
        strokeOpacity={1}
      />
      <Path
        d="M1277.996 402.147l-.507 3.942c27.491 2.326 67.953 10.27 149.66 39.141l.931-3.504c-93.783-37.237-148.75-38.15-150.084-39.579z"
        fill="#fff"
        strokeWidth={0.99732369}
      />
      <Path
        d="M1476.36 559.177v6.2c0 5.2-1.6 6.8-6 6.8h-26v8h26c8 0 14-5.6 14-14.9v-6.2z"
        fill = {this.state.Branch12} onPress = {this.Handler12}
      />
      <Path
        d="M1478.36 559.177v6.2c0 6.2-2.1 8.8-7 8.8h-27v4h27c6.3 0 11-4.6 11-12.8v-6.2z"
        fill = {this.state.Branch3} onPress = {this.Handler3}
      />
      <Path
        d="M1318.3594 572.177H1435.75989V580.177H1318.3594z"
        fill = {this.state.Branch12} onPress = {this.Handler12}
        strokeWidth={1.22683918}
      />
      <Path
        d="M1318.3594 574.177H1433.99088V577.177H1318.3594z"
        fill = {this.state.Branch3} onPress = {this.Handler3}
        strokeWidth={1.21756113}
      />
      <G transform="translate(215.06 226.377)">
        <Path d="M1028.3 345.79999H1103.3V353.79999H1028.3z" fill = {this.state.Branch12} onPress = {this.Handler12} />
        <Path d="M1028.3 347.79999H1103.3V350.79999H1028.3z" fill = {this.state.Branch3} onPress = {this.Handler3} />
      </G>
      <G transform="translate(215.06 226.377)">
        <Path
          d="M951.29999 345.79999H1028.29999V353.79999H951.29999z"
          fill = {this.state.Branch12} onPress = {this.Handler12}
        />
        <Path
          d="M951.29999 347.79999H1028.29999V350.79999H951.29999z"
          fill = {this.state.Branch3} onPress = {this.Handler3}
        />
      </G>
      <G transform="matrix(.75858 0 0 1 442.551 226.377)">
        <Path
          d="M855.29999 345.79999H942.29999V353.79999H855.29999z"
          fill = {this.state.Branch12} onPress = {this.Handler12}
        />
        <Path
          d="M855.29999 347.79999H942.29999V350.79999H855.29999z"
          fill = {this.state.Branch3} onPress = {this.Handler3}
        />
      </G>
      <Path
        d="M1085.705 846.586c-.9-.5-51.846-44.4-51.846-62.9 0 0 0-3.398.193-11.306l7.807.193v11.113c0 13.8 48.346 56.6 48.546 56.7z"
        fill = {this.state.Branch9} onPress = {this.Handler9}
        fillOpacity={1}
      />
      <Path
        d="M1085.06 819.777c-3.3 1.3-6.6 2.5-10.1 4.1-41.8 17.8-79.3 43-111.8 75.3-12.8 12.8-24.7 26.8-35.4 41.2l6 4.4c10.4-14.3 21.9-27.8 34.7-40.4 31.5-31.5 68.4-56.5 109.4-73.8 3.2-1.3 6.3-2.5 9.3-3.8l-2.1-7zM888.16 1010.977c-8.2 19-14.5 38.9-19 59.2l7 1.9c4.6-19.9 10.6-39.3 18.6-58 8.5-20.1 18.9-39.1 30.8-57l-5.7-4.7c-12.3 18.2-22.9 37.8-31.7 58.6zM866.16 1084.177c-3.8 20.7-5.7 42-5.7 63.3 0 14.3.8 28.4 2.5 42.5l7.4-.8c-1.6-13.7-2.5-27.6-2.5-41.8 0-20.7 1.9-41.4 5.5-61.6l-7.2-1.6zM894.96 1281.677c-10.6-25.4-18.5-51.5-22.6-78.5l-7.4.3c4.4 27.8 12.2 54.9 23.2 81.2 8 19 17.8 37.1 28.7 54.2l6.5-3.4c-11-17.2-20.7-35-28.4-53.8zM968.56 1391.077c-13.4-13.4-25.8-28.1-36.7-43.4l-6.3 3.8c11.2 15.9 24 31 37.8 44.8 12.1 12.1 24.7 23.2 38.4 33.2l4.3-6c-13.1-9.7-25.5-20.6-37.5-32.4z"
        fill = {this.state.Branch5} onPress = {this.Handler5}
      />
      <Path
        d="M1314.16 1346.877l-5.2-5.2-34.7 34.6c-10.4 10.3-16.3 12.9-31.7 12.9h-148.9c-16.9 0-24.7 3.8-36.3 15.1l-44.8 44.9 5.2 5.2 44.5-44.2c10.4-10.4 16.4-12.9 31.9-12.9h148.9c16.9 0 25-3.8 36.6-15.2l.3-.4c.3-.3.3-.4.3-.4l33.9-34.4z"
        fill = {this.state.Branch6} onPress = {this.Handler6}
      />
      <Path
        d="M1078.26 1464.877c-21.1-9-40.7-19.6-59.4-32.4l-4.6 6c19 13.1 39.6 24.2 61.3 33.2 17.9 7.5 36.2 13.7 54.9 18l2.1-7c-18.6-4.3-36.9-10.1-54.3-17.8z"
        fill = {this.state.Branch5} onPress = {this.Handler5}
      />
      <Path
        d="M1553.76 1306.077l-35 35c-10.4 10.4-16.3 12.8-31.7 13.1h-144.7v7h145c17.1 0 25-3.4 36.7-15l34.9-34.8-5.2-5.3z"
        fill = {this.state.Branch8} onPress = {this.Handler8}
      />
      <Path
        d="M1529.86 1298.877l-6.6-3.2c-16.9 35.5-39.5 67.4-67.4 95.5-25.8 25.8-54.9 46.9-86.9 63.3l2.8 6.6c32.7-16.7 62.7-38.4 89.2-64.9 28.5-28.5 51.7-61 68.9-97.3z"
        fill = {this.state.Branch5} onPress = {this.Handler5}
      />
      <Path
        d="M1519.821 1088.702l5.138-5.325 117.26 103.673-5.138 5.326z"
        fill = {this.state.limeBranch} onPress = {this.limeHandler}
      />
      <Path
        d="M1354.26 1461.177c-2.5 1.3-5.5 2.3-8.2 3.6-42.5 17.9-87.3 27.2-134 27.2-22.4 0-44.4-2.1-65.7-6.3l-2.2 7c22.1 4.3 44.8 6.5 67.9 6.5 47.6 0 93.5-9.3 136.9-27.6 2.5-1.1 5.2-2.3 7.7-3.4l-2.4-7zM1531.777 1027.47c-8.275-40.452-17.84-54.59-39.902-91.25l-6.71 3.019c21.93 36.325 32.273 49.944 39.772 89.501 1.775 9.74.828 5.754 2.395 14.17l7.361-.623c-2.154-9.214-1.008-4.743-2.916-14.817zM1563.76 1147.777c0-30.4-17.434-61.57-25.034-90.67l-6.356 1.6c7.5 28.4 24.19 58.87 24.19 89.07 0 46.4-9.1 91.4-27.2 134-.3.5-.3 1-.5 1.3l6.9 2.5c.3-.3.3-.6.5-1 18.1-43.3 27.5-89.3 27.5-136.8zM1460.86 899.077c-30.4-30.4-65.7-54.9-104.7-72.5l-3.8 6.3c38.7 17.4 73.6 41.2 103.4 71.1 7 7 13.9 14.5 20.2 22.1l5.7-4.7c-6.6-7.5-13.5-15.1-20.8-22.3z"
        fill = {this.state.Branch5} onPress = {this.Handler5}
      />
      <Path
        d="M1210.3594 775.177H1217.3594V926.177H1210.3594z"
        fill = {this.state.limeBranch} onPress = {this.limeHandler}
      />
      <Path
        d="M1321.56 828.577l21.3-21.3-5.2-5.2-21.3 21.5c-11.9 12.2-15 20.2-15 36.6v38h8l-.2-37.7c-.1-14.9 1.6-20.9 12.4-31.9z"
        fill = {this.state.Branch6} onPress = {this.Handler6}
      />
      <Path
        d="M1212.16 796.077c-39.1 0-77.2 6.3-113.7 18.9l2.8 6.6c35.5-12.1 72.9-18.3 110.8-18.3 43.6 0 85.9 8 125.9 23.9l3.2-6.5c-40.9-16.5-84.4-24.6-129-24.6z"
        fill = {this.state.Branch5} onPress = {this.Handler5}
      />
      <Path
        d="M1343.3594 1888.177H1351.3594V1944.648863H1343.3594z"
        fill={this.state.greenBranch}
        onPress={this.greenHandler}
        id = "green-branch"
      />
      <Path
        d="M1555.56 1264.177c-4.4-4.1-11.2-3.9-15.5.5-4.1 4.4-3.9 11.2.5 15.5 4.4 4.1 11.2 3.9 15.5-.5 4-4.3 3.9-11.3-.5-15.5zm-3.9 11.3c-1.9 2.1-4.9 2.1-6.9.3-2.1-1.9-2.1-4.9-.3-6.9 1.9-2.1 4.9-2.1 6.9-.3 2 2 2.2 5 .3 6.9z"
        fill = {this.state.Branch7} onPress = {this.Handler7}
      />
      <Path
        d="M1359.26 1902.677l-20.4 20.4c-10.4 10.4-16.3 12.7-31.7 13.1h-58.8v7h59.3c16.9 0 25-3.4 36.7-15l20.2-20.1-5.3-5.4z"
        fill = {this.state.Branch11} onPress = {this.Handler11}
        fillOpacity={1}
      />
      <Path
        d="M1115.3594 1852.177H1123.3594V1952.177H1115.3594z"
        fill = {this.state.Branch9} onPress = {this.Handler9}
      />
      <Path
        d="M1107.3594 1936.177H1248.3594V1943.177H1107.3594z"
        fill = {this.state.Branch11} onPress = {this.Handler11}
        fillOpacity={1}
      />
      <Path
        d="M1917.677 956.4l-.854 6.848 6.946.867.743-5.954c1.833-14.686 1.141-25.661 10.631-38.295l24.852-20.264-4.51-4.995-24.422 20.313c-10.875 14.027-11.392 25.504-13.386 41.48z"
        fill = {this.state.Branch8} onPress = {this.Handler8}
        fillOpacity={1}
      />
      <Path
        transform="rotate(179.932) skewX(-.02)"
        d="M-1923.1769 -1025.8936H-1915.7769695V-971.9426380000001H-1923.1769z"
        fill = {this.state.Branch8} onPress = {this.Handler8}
        strokeWidth={1.09132123}
      />
      <Path
        d="M1852.57 1064.861h43c13.7-.011 21.03-7.03 21.03-21.03l-.03-12.87 8 .1-.01 12.845c0 18-9.59 27.955-26.99 28.955h-45z"
        fill = {this.state.Branch8} onPress = {this.Handler8}
        fillOpacity={1}
      />
      <Path
        d="M1836.012 1366.633l-21.682.023c-16.334.07-24.467 3.254-36.558 15.346l-32.385 32.386c1.508 1.858 2.942 3.728 4.545 5.322l32.57-32.57c10.82-10.82 16.829-13.293 31.395-13.293h22.383c.01-2.422-.153-5.026-.267-7.207z"
        transform="translate(0 -300)"
        fill = {this.state.Branch8} onPress = {this.Handler8}
        fillOpacity={1}
      />
      <Path
        d="M1673.06 1239.777c-.3-16.9-3.6-25-15-36.6l-6.5-6.5-5.2 5.2 6 6.3c10.4 10.6 13 16.4 13 31.9v80.5c0 14.8-2.2 20.7-13.1 31.9l-20.1 20.2 5.3 5.2 20.6-20.6c11.4-11.9 14.8-19.9 14.8-36.1l.2-81.4z"
        fill = {this.state.limeBranch} onPress = {this.limeHandler}
      />
      <Path
        transform="rotate(-135)"
        d="M-2029.8429 189.73352H-2022.4429710000002V330.93216H-2029.8429z"
        fill = {this.state.Branch8} onPress = {this.Handler8}
      />
      <Path
        d="M684.35931 1877.177H692.35931V1921.177H684.35931z"
        fill = {this.state.Branch1} onPress = {this.Handler1}
      />
      <Path
        d="M684.35931 1816.177H692.35931V1877.177H684.35931z"
        fill = {this.state.Branch1} onPress = {this.Handler1}
      />
      <Path
        d="M684.35931 1756.177H692.35931V1816.177H684.35931z"
        fill = {this.state.Branch1} onPress = {this.Handler1}
      />
      <Path
        d="M684.35931 1558.177H692.35931V1619.177H684.35931z"
        fill = {this.state.Branch1} onPress = {this.Handler1}
      />
      <Path
        d="M705.69 1472.455l41.183-37.705-5.092-5.306-41.188 37.906c-12.147 11.954-15.41 19.89-15.745 36.286l-.489 55.14 7.999.164.282-54.845c.205-14.899 2.027-20.863 13.05-31.64z"
        fill = {this.state.Branch1} onPress = {this.Handler1}
      />
      <Path
        transform="rotate(-135.016)"
        d="M-1542.5414 -468.69635H-1535.5843506V-422.415367H-1542.5414z"
        fill = {this.state.Branch1} onPress = {this.Handler1}
      />
      <Path
        d="M872.36 1320.377c-16.4.3-24.2 3.6-35.5 14.7l-49.8 49.8 5.2 5.2 48.9-48.8c10.4-10.4 16.4-13.1 31.9-13.1h27v-7.8h-27.7z"
        fill = {this.state.Branch1} onPress = {this.Handler1}
      />
      <Path
        d="M913.55933 1320.177H980.3593330000001V1328.177H913.55933z"
        fill = {this.state.Branch1} onPress = {this.Handler1}
      />
      <Path
        d="M1389.46 1047.977c-.3-16.9-3.6-24.8-15.2-36.7l-.5.5.5-.5-11-11-5.2 5.2 11.1 11c10.4 10.4 12.2 16.4 13.2 31.9v81.9h7.3l-.2-82.3z"
        fill = {this.state.Branch6} onPress = {this.Handler6}
      />
      <Path
        transform="rotate(-45)"
        d="M36.932304 1682.9736H148.03123399999998V1690.373529H36.932304z"
        fill = {this.state.Branch1} onPress = {this.Handler1}
      />
      <Path
        d="M1352.36 1071.377c-12.2-11.9-19.9-15.2-36.1-15.2h-20.9v7h20.2c14.8 0 20.7 2.7 31.7 13.3l59 59.1 5.2-5.2-59.1-59z"
        fill = {this.state.Branch7} onPress = {this.Handler7}
      />
      <Path
        transform="rotate(-45)"
        d="M162.99603 1683.3721H267.99502V1690.772029H162.99603z"
        fill = {this.state.Branch1} onPress = {this.Handler1}
      />
      <Path
        d="M1434.554 984.385c-12.2-11.7-18.295-18.208-34.295-18.208h-21.9v8h21.2c14.8 0 18.895 5.408 30.095 16.208l78.91 84.825 5.2-5.3z"
        fill = {this.state.limeBranch} onPress = {this.limeHandler}
      />
      <Path
        transform="rotate(-45)"
        d="M283.16187 1683.4973H340.36132100000003V1690.897229H283.16187z"
        fill = {this.state.Branch1} onPress = {this.Handler1}
      />
      <Path
        transform="rotate(-45)"
        d="M340.20892 1683.2512H403.508313V1690.6511289999999H340.20892z"
        fill = {this.state.Branch1} onPress = {this.Handler1}
      />
      <Path
        transform="rotate(-45)"
        d="M419.35468 1683.3796H479.15410699999995V1690.779529H419.35468z"
        fill = {this.state.Branch1} onPress = {this.Handler1}
      />
      <Path
        transform="translate(0 -300)"
        d="M1582.957 1092.668l-48.615 53.549 5.096 6.379 49.607-55.373c-1.967-1.725-4.258-3.143-6.088-4.555z"
        fill = {this.state.Branch1} onPress = {this.Handler1}
      />
      <Path
        d="M1664.973 1005.57l-77.116 82.098c1.71 1.83 3.362 6.136 4.785 4.64l77.418-81.93z"
        transform="translate(0 -300)"
        fill = {this.state.Branch1} onPress = {this.Handler1}
        fillOpacity={1}
        strokeWidth={1.35350394}
      />
      <Path
        transform="rotate(-45)"
        d="M681.422 1676.4149H707.8561550000001V1683.3323743H681.422z"
        fill = {this.state.Branch1} onPress = {this.Handler1}
      />
      <Path
        d="M1723.564 552.61h-7.3v82.3c0 13.9-2.3 20.1-11.8 30.2l5.2 5.1c10.6-11.2 13.7-19.2 13.7-35.2h.3z"
        fill = {this.state.Branch1} onPress = {this.Handler1}
      />
      <Path
        d="M681.35931 2242.177H798.35931V2250.177H681.35931z"
        fill = {this.state.Branch12} onPress = {this.Handler12}
      />
      <Path
        d="M1123.06 1378.177c-.3 0 2.9-22.7-15.2-37l-42.3-42.4c-10.4-10.4-12.8-16.5-13.2-32v-6.6h-7v8.2c0 16.3 3.6 24 14.8 35.5l42.3 42.5c10.4 10.4 12.9 16.3 12.9 31.9v53.9h8v-54h-.3z"
        fill = {this.state.Branch9} onPress = {this.Handler9}
      />
      <Path
        d="M1094.36 1286.277l-21.1 20.9c-10.4 10.4-16.4 13-31.9 13h-61v8h61.5c16.4 0 24.5-3.5 35.5-14.4l22.1-22.1-5.1-5.4z"
        fill = {this.state.Branch1} onPress = {this.Handler1}
      />
      <Path
        d="M798.35931 2242.177H914.35931V2250.177H798.35931z"
        fill = {this.state.Branch12} onPress = {this.Handler12}
      />
      <Path
        d="M1002.76 2242.177H914.36v8h109v-8h-20.6zM1088.36 2208.277v13.9c0 13.7-7 20-21 20h-43v8h43c18 0 28-10.2 29-27.6v-14.2l-8-.1zM1095.86 2161.277c-.5-16.7-10.8-27.1-27.8-27.1h-.5H1010.36v7h56.9c13.7 0 21.1 7.3 21.1 21v31h7.1l.4-31.9z"
        fill = {this.state.Branch12} onPress = {this.Handler12}
      />
      <Path
        d="M920.35931 2134.177H1010.35931V2141.177H920.35931z"
        fill = {this.state.Branch12} onPress = {this.Handler12}
      />
      <Path
        d="M902.66 2103.077c-11.7-11.7-15-19.6-15.2-36.8l7.4-.3c.3 15.5 2.5 21.3 13.2 31.9l1.9 1.6-4.9 5.7-2.4-2.1z"
        fill = {this.state.Branch6} onPress = {this.Handler6}
      />
      <Path
        d="M887.35931 2021.177H894.35931V2066.1769999999997H887.35931z"
        fill = {this.state.Branch6} onPress = {this.Handler6}
      />
      <Path
        d="M887.35931 1976.177H894.35931V2022.177H887.35931z"
        fill = {this.state.Branch6} onPress = {this.Handler6}
      />
      <Path
        d="M887.35931 1931.177H894.35931V1976.177H887.35931z"
        fill = {this.state.Branch6} onPress = {this.Handler6}
      />
      <Path
        d="M887.35931 1763.177H894.35931V1807.177H887.35931z"
        fill = {this.state.Branch6} onPress = {this.Handler6}
      />
      <Path
        d="M887.35931 1675.177H894.35931V1763.177H887.35931z"
        fill = {this.state.Branch6} onPress = {this.Handler6}
        strokeWidth={1.39841175}
      />
      <Path
        d="M906.732 1564.108l8.024-8.547-5.318-5.079-8.02 8.748c-11.616 12.47-14.53 20.54-14.152 36.936l.208 75.813 7.998-.184-.402-75.51c-.443-14.893 1.118-20.93 11.662-32.177z"
        fill = {this.state.Branch6} onPress = {this.Handler6}
        strokeWidth={0.78448141}
      />
      <Path
        transform="rotate(-45)"
        d="M-441.78595 1740.506H-395.68773300000004V1747.2626557H-441.78595z"
        fill = {this.state.Branch6} onPress = {this.Handler6}
      />
      <Path
        transform="rotate(-45)"
        d="M-393.46555 1740.5608H-323.56622V1747.960729H-393.46555z"
        fill = {this.state.Branch6} onPress = {this.Handler6}
      />
      <Path
        d="M1248.46 966.477c-18.5 0-29.1-9-30.6-26.2h-7.4c1.6 21.1 14.8 33 36.7 34h116.2v-8h-115.1l.2.2z"
        fill = {this.state.limeBranch} onPress = {this.limeHandler}
      />
      <Path
        d="M1322.46 959.677c-10.4-10.4-13.1-16.4-13.1-31.9v-30.6h-8v31.4c0 16.7 3.8 24.7 15.2 36.1l30.7 30.6 5.3-5.2-30.1-30.4zM1409.274 752.058c-.3.3-3.274-2.993-3.274-2.993l-56.14 41.812 5.2 5.2 55.358-40.12s3.984 2.838 4.284 2.338zM1440.913 721.979l-21.79 20.798 5.077 5.32 21.795-20.998c12.181-11.92 15.467-19.845 15.849-36.24l.885-37.99-7.998-.187-.678 37.694c-.247 14.899-2.086 20.858-13.14 31.603z"
        fill = {this.state.Branch6} onPress = {this.Handler6}
      />
      <Path
        d="M1462.36 640.436v-35.013h-8v36.074c0 2.88.1 5.457.1 7.882h7.4c.3-3.032.5-6.063.5-8.943z"
        fill = {this.state.Branch6} onPress = {this.Handler6}
        strokeWidth={1.23114884}
      />
      <Path
        d="M1455.3594 416.19214H1462.3594V590.22954H1455.3594z"
        fill = {this.state.Branch6} onPress = {this.Handler6}
        strokeWidth={1.35350394}
      />
      <Path
        d="M1455.3594 371.177H1462.3594V403.660997H1455.3594z"
        fill = {this.state.Branch6} onPress = {this.Handler6}
        strokeWidth={0.70693266}
      />
      <Path
        d="M1455.3594 315.177H1462.3594V371.177H1455.3594z"
        fill = {this.state.Branch6} onPress = {this.Handler6}
      />
      <Path
        d="M1455.3594 259.177H1462.3594V315.177H1455.3594z"
        fill = {this.state.Branch6} onPress = {this.Handler6}
      />
      <Path
        d="M1614.3594 2102.177H1621.3594V2161.177H1614.3594z"
        fill = {this.state.limeBranch} onPress = {this.limeHandler}
      />
      <Path
        d="M1614.3594 2042.177H1621.3594V2102.1769999999997H1614.3594z"
        fill = {this.state.limeBranch} onPress = {this.limeHandler}
      />
      <Path
        d="M1614.3594 1981.177H1621.3594V2042.177H1614.3594z"
        fill = {this.state.limeBranch} onPress = {this.limeHandler}
      />
      <Path
        d="M1614.3594 1921.177H1621.3594V1981.177H1614.3594z"
        fill = {this.state.limeBranch} onPress = {this.limeHandler}
      />
      <Path
        d="M1614.3594 1861.177H1621.3594V1921.177H1614.3594z"
        fill = {this.state.limeBranch} onPress = {this.limeHandler}
      />
      <Path
        d="M1614.3594 1800.177H1621.3594V1861.177H1614.3594z"
        fill = {this.state.limeBranch} onPress = {this.limeHandler}
      />
      <Path
        d="M1614.3594 1668.01H1621.3594V1801.17675H1614.3594z"
        fill = {this.state.limeBranch} onPress = {this.limeHandler}
        strokeWidth={1.25910389}
      />
      <Path
        d="M1614.681 1577.962H1621.681V1650.060015H1614.681z"
        fill = {this.state.limeBranch} onPress = {this.limeHandler}
        strokeWidth={1.16735148}
      />
      <Path
        d="M1614.3594 1495.5371H1621.3594V1562.048536H1614.3594z"
        fill = {this.state.limeBranch} onPress = {this.limeHandler}
        strokeWidth={0.93510383}
      />
      <Path
        d="M1623.958 1383.455c-12.508 11.66-8.304 79.123-8.948 95.445l-.034.215c2.575-.174 5.04-.303 7.255-.386.51-14.558-4.472-79.926 6.72-90.358z"
        fill = {this.state.limeBranch} onPress = {this.limeHandler}
      />
      <Path
        d="M1210.3594 724.28467H1217.3594V775.176993H1210.3594z"
        fill = {this.state.limeBranch} onPress = {this.limeHandler}
        strokeWidth={1.3207401}
      />
      <Path
        d="M1210.3594 608.93524H1217.3594V724.28467H1210.3594z"
        fill = {this.state.limeBranch} onPress = {this.limeHandler}
        strokeWidth={1.57437122}
      />
      <Path
        d="M1216.643 602.185c-.3-17.4 3.516-23.908-8.084-35.708l-16.2-16.2-5.2 5.2 16.2 16.3c10.4 10.4 6.472 14.796 6.765 30.293 4.08.05.642.19 6.519.115.39-5.64-.57 8.336 0 0z"
        fill = {this.state.limeBranch} onPress = {this.limeHandler}
        fillOpacity={1}
      />
      <Path
        d="M1182.91 541.233c-12.2-11.7-15.195-10.497-31.695-10.497l-14.856-.259v7l14.356.259c14.797.267 18.046-.436 27.477 7.55 2.061-1.99 2.17 0 4.718-4.053z"
        fill = {this.state.limeBranch} onPress = {this.limeHandler}
      />
      <Path
        d="M1107.759 510.377c.5 16.7 10.8 27.1 27.8 27.1h.8l.012-1.346-.012-5.461v-.193c-13.695-1.934-21.1-7.3-21.1-21v-16.3h-7.502z"
        fill = {this.state.limeBranch} onPress = {this.limeHandler}
        fillOpacity={1}
      />
      <Path
        d="M1115.3594 2166.177H1123.3594V2193.177H1115.3594z"
        fill = {this.state.Branch9} onPress = {this.Handler9}
      />
      <Path
        d="M1115.3594 2115.177H1123.3594V2166.177H1115.3594z"
        fill = {this.state.Branch9} onPress = {this.Handler9}
      />
      <Path
        d="M1115.3594 2079.177H1123.3594V2115.177H1115.3594z"
        fill = {this.state.Branch9} onPress = {this.Handler9}
      />
      <Path
        d="M1115.3594 2043.177H1123.3594V2079.1769999999997H1115.3594z"
        fill = {this.state.Branch9} onPress = {this.Handler9}
      />
      <Path
        d="M1115.3594 2007.177H1123.3594V2043.177H1115.3594z"
        fill = {this.state.Branch9} onPress = {this.Handler9}
      />
      <Path
        d="M1115.3594 1967.177H1123.3594V2007.177H1115.3594z"
        fill = {this.state.Branch9} onPress = {this.Handler9}
      />
      <Path
        d="M1115.3594 1815.177H1123.3594V1852.177H1115.3594z"
        fill = {this.state.Branch9} onPress = {this.Handler9}
      />
      <Path
        d="M1115.3594 1626.0399H1123.3594V1814.17695H1115.3594z"
        fill = {this.state.Branch9} onPress = {this.Handler9}
        strokeWidth={2.44389129}
      />
      <Path
        d="M1115.3594 1558.177H1123.3594V1610.975035H1115.3594z"
        fill = {this.state.Branch9} onPress = {this.Handler9}
        strokeWidth={0.5684377}
      />
      <Path
        d="M1115.3594 1515.177H1123.3594V1552.177H1115.3594z"
        fill = {this.state.Branch9} onPress = {this.Handler9}
        strokeWidth={0.64117944}
      />
      <Path
        d="M1115.3594 1432.177H1123.3594V1500.177H1115.3594z"
        fill = {this.state.Branch9} onPress = {this.Handler9}
      />
      <Path
        d="M1065.16 1152.377l57.5-57.5-5.2-5.2-57.1 57.2c-11.7 12.2-15 20.1-15 36.3v62h7v-61.3c0-14.5 2.3-20.6 12.8-31.5z"
        fill = {this.state.Branch9} onPress = {this.Handler9}
      />
      <Path
        d="M1217.06 1192.277c-11.7-.5-17.4-3.4-27.3-13.1l-88.9-88.9-5.2 5.2 88.9 88.7.3.3.3.3c11.2 10.6 18.9 14.5 32.4 15l-.5-7.5z"
        fill={this.state.greenBranch}
        onPress={this.greenHandler}
        id = "green-branch"
      />
      <Path
        transform="rotate(-45)"
        d="M-121.1673 1683.2781H23.13131V1690.678029H-121.1673z"
        fill = {this.state.Branch1} onPress = {this.Handler1}
      />
      <Path
        transform="rotate(-45.016)"
        d="M168.85135 1379.38H176.2512795V1499.9788500000002H168.85135z"
        fill = {this.state.Branch9} onPress = {this.Handler9}
      />
      <Path
        d="M1034.3594 695.54443H1041.3594V757.839825H1034.3594z"
        fill = {this.state.Branch9} onPress = {this.Handler9}
        strokeWidth={0.79913545}
      />
      <Path
        d="M1206.96 1010.577c16.9-17.1 16.9-36.7-.3-53.8l-10.5-10.6-5.2 5.2 10.8 10.8c14.2 14.2 13.9 29.1-.3 43.4l-74.9 74.9 5.2 5.2 75.2-75.1z"
        fill = {this.state.Branch9} onPress = {this.Handler9}
      />
      <Path
        d="M1609.1857 2184.177H1700.359429V2191.177H1609.1857z"
        fill={this.state.greenBranch}
        onPress={this.greenHandler}
        id = "green-branch"
      />
      <Path
        d="M1382.26 2183.977c-19.9 0-30.9-10.4-30.9-29.9v-27.9h-8V2154.377c0 23.2 13.9 36.8 37.1 37.8l210.088-1.364-.818-6.536-207.47-.3z"
        fill={this.state.greenBranch}
        onPress={this.greenHandler}
        id = "green-branch"
      />
      <Path
        d="M1343.3594 2065.177H1351.3594V2126.177H1343.3594z"
        fill={this.state.greenBranch}
        onPress={this.greenHandler}
        id = "green-branch"
      />
      <Path
        d="M1343.3594 2009.6097H1351.3594V2065.1769679999998H1343.3594z"
        fill={this.state.greenBranch}
        onPress={this.greenHandler}
        id = "green-branch"
      />
      <Path
        d="M1343.3594 1948.5066H1351.3594V1996.101101H1343.3594z"
        fill={this.state.greenBranch}
        onPress={this.greenHandler}
        id = "green-branch"
      />
      <Path
        d="M1343.3594 1832.6506H1351.3594V1873.176952H1343.3594z"
        fill={this.state.greenBranch}
        onPress={this.greenHandler}
        id = "green-branch"
      />
      <Path
        d="M1343.3594 1696.677H1351.3594V1830.68573H1343.3594z"
        fill={this.state.greenBranch}
        onPress={this.greenHandler}
        strokeWidth={1.33219552}
        id = "green-branch"
      />
      <Path
        d="M1343.3594 1625.7635H1351.3594V1696.17698H1343.3594z"
        fill={this.state.greenBranch}
        onPress={this.greenHandler}
        strokeWidth={1.48674071}
        id = "green-branch"
      />
      <Path
        d="M1343.3594 1491.177H1351.3594V1607.8048199999998H1343.3594z"
        fill={this.state.greenBranch}
        onPress={this.greenHandler}
        id = "green-branch"
        strokeWidth={0.78141975}
      />
      <Path
        d="M1343.3594 1332.177H1351.3594V1477.177H1343.3594z"
        fill={this.state.greenBranch}
        onPress={this.greenHandler}
        id = "green-branch"
      />
      <Path
        d="M1351.26 1288.977c-.3-16.4-3.6-24.3-14.7-35.4l-45.6-45.4h-.3l-.3-.6c-11.9-11.7-19.9-15.4-35.8-15.4h-22.2v8h21.3c14.8 0 20.7 2.4 31.9 13.1l44.7 44.7c10.4 10.6 13.1 16.3 13.1 31.8v29.4h7.6l.3-30.2z"
        fill={this.state.greenBranch}
        onPress={this.greenHandler}
        id = "green-branch"
      />
      <Path
        d="M897.35931 1056.177H1101.35931V1063.177H897.35931z"
        fill = {this.state.Branch7} onPress = {this.Handler7}
      />
      <Path
        transform="translate(209.06 306.377)"
        d="M770.9 663.2L880.7 773 875.5 778.2 765.7 668.4z"
        fill={this.state.greenBranch}
        onPress={this.greenHandler}
        id = "green-branch"
      />
      <Path
        transform="translate(209.06 306.377)"
        d="M724.9 617.3L770.9 663.2 765.7 668.4 719.6 622.5z"
        fill={this.state.greenBranch}
        onPress={this.greenHandler}
        id = "green-branch"
      />
      <Path
        transform="rotate(-44.834)"
        d="M4.0830011 1226.5894H11.6834974V1298.5941H4.0830011z"
        fill={this.state.greenBranch}
        onPress={this.greenHandler}
        id = "green-branch"
      />
      <Path
        d="M857.66 857.177c-.9-.5-21.3-13-21.3-31.5 0 0 0-61.398.192-69.306l7.807.193v69.113c0 13.8 17.8 25.2 18 25.3z"
        fill={this.state.greenBranch}
        onPress={this.greenHandler}
        id = "green-branch"
      />
      <Path
        d="M836.35931 679.04614H844.35931V757.5661140000001H836.35931z"
        fill={this.state.greenBranch}
        onPress={this.greenHandler}
        strokeWidth={1.07943153}
        id = "green-branch"
      />
      <Path
        d="M836.35931 471.177H844.35931V672.04614H836.35931z"
        fill={this.state.greenBranch}
        onPress={this.greenHandler}
        strokeWidth={2.09787965}
        id = "green-branch"
      />
      <Path
        d="M836.35931 367.177H844.35931V456.914152H836.35931z"
        fill={this.state.greenBranch}
        onPress={this.greenHandler}
        strokeWidth={1.02149653}
        id = "green-branch"
      />
      <Path
        d="M836.35931 322.177H844.35931V360.177H836.35931z"
        fill={this.state.greenBranch}
        onPress={this.greenHandler}
        strokeWidth={0.88063055}
        id = "green-branch"
      />
      <Path
        d="M1538.76 1081.377l-122.6 122.7c-10.4 10.4-16.3 13.1-31.7 13.1h-142.1v7h142.3c17.1 0 25.1-3.4 36.7-15l122.6-122.4-5.2-5.4z"
        fill = {this.state.Branch3} onPress = {this.Handler3}
      />
      <Path
        d="M1382.36 1144.177v105.6c0 14.8-2.7 20.7-13.4 31.9l-49.9 49.8 5.2 5.2 49.9-49.9c11.7-12.2 15.2-20.1 15.2-36.3v-106.3h-7z"
        fill = {this.state.Branch6} onPress = {this.Handler6}
      />
      <Path
        transform="rotate(-44.984)"
        d="M191.72423 2224.3262H199.1228764V2315.276594H191.72423z"
        fill = {this.state.Branch7} onPress = {this.Handler7}
      />
      <Path
        transform="rotate(-44.984)"
        d="M191.19853 2154.2559H198.59845950000002V2224.2552290000003H191.19853z"
        fill = {this.state.Branch7} onPress = {this.Handler7}
      />
      <Path
        transform="rotate(-44.992)"
        d="M191.03519 2001.6998H198.435119V2141.39845H191.03519z"
        fill = {this.state.Branch7} onPress = {this.Handler7}
      />
      <Path
        transform="rotate(-44.992)"
        d="M191.27829 1810.4177H198.678219V1986.31602H191.27829z"
        fill = {this.state.Branch7} onPress = {this.Handler7}
      />
      <Path
        d="M1115.3594 1056.177H1279.3594V1063.177H1115.3594z"
        fill = {this.state.Branch7} onPress = {this.Handler7}
      />
      <Path
        d="M845.06 1055.977c-14.8 0-20.6-2.5-31.6-13.1l-2.2-2.2-5.1 5.1 2.2 2.2c12.3 11.9 20.1 15.2 36.4 15.2h37.6v-7.5l-37.3.3zM774.399 1013.957l5.251-3.795 29.41 28.115-4.062 4.987z"
        fill = {this.state.Branch7} onPress = {this.Handler7}
      />
      <Path
        d="M766.922 1029L918.28 893.911l6.975 6.425-147.308 129.83z"
        fill = {this.state.d1} onPress = {this.Handler_d1}
        fillOpacity={1}
        strokeWidth={1.21400297}
      />
      <Path
        d="M770.897 1028.919L920.765 895.78l1.75 2.606-148.884 132.301z"
        fill="#fff"
        fillOpacity={1}
        strokeWidth={1.21400297}
      />
      <Path
        d="M710.808 948.772l5.251-3.795 52.832 53.021-5.244 5.222zM654.16 883.477c-10.3-10.3-12.8-16.3-12.8-31.6v-176.7h-7v177c0 17.1 3.5 25.1 15 36.7l49.1 49.2 5.1-5.2z"
        fill = {this.state.Branch7} onPress = {this.Handler7}
      />
      <Path
        d="M610.304 925.032c4.278-35.778 28.792-128.935 45.144-166.54.3-.3-2.144.5-4.144-.4-2.1-.8-2.717-3.2-2.817-2.9-17.568 39.776-42.115 131.463-45.328 168.385 0 .3 1.8-.6 3.8-.5 1.9.5 3.345 2.455 3.345 1.955z"
        fill = {this.state.Branch1} onPress = {this.Handler1}
      />
      <Path
        d="M604.744 923.442l3.771.375c4.7-37.9 27.624-128.706 44.67-165.045l-2.973-1.34c-17.224 36.378-40.868 127.91-45.468 166.01z"
        fill="#fff"
      />
      <Path
        d="M633.35931 605.64862H641.35931V657.177078H633.35931z"
        fill = {this.state.Branch7} onPress = {this.Handler7}
        strokeWidth={0.57999456}
      />
      <Path
        d="M633.35931 428.177H641.35931V589.9662000000001H633.35931z"
        fill = {this.state.Branch7} onPress = {this.Handler7}
        strokeWidth={1.87540829}
      />
      <Path
        d="M633.35931 395.86121H641.35931V428.177021H633.35931z"
        fill = {this.state.Branch7} onPress = {this.Handler7}
        strokeWidth={0.88780093}
      />
      <Path
        d="M633.35931 343.177H641.35931V378.65362700000003H633.35931z"
        fill = {this.state.Branch7} onPress = {this.Handler7}
        strokeWidth={0.89793485}
      />
      <Path
        d="M633.35931 301.177H641.35931V343.177H633.35931z"
        fill = {this.state.Branch7} onPress = {this.Handler7}
      />
      <Path
        d="M599.35931 1168.177H685.35931V1175.177H599.35931z"
        fill = {this.state.Branch4} onPress = {this.Handler4}
      />
      <Path
        d="M1020.86 1182.777c-1-1-1.9-1.9-3-2.5l-5.2 5.2c1 1 1.9 1.9 3 2.8l60.9 60.9 5.2-5.2-60.9-61.2z"
        fill = {this.state.Branch4} onPress = {this.Handler4}
      />
      <Path
        d="M984.56 1168.177h-32.2v7h31.5c13.3 0 19.6 2 28.9 10.4l5.2-5c-10.8-9.6-18.7-12.4-33.4-12.4z"
        fill = {this.state.Branch4} onPress = {this.Handler4}
      />
      <Path
        d="M832.35931 1168.177H952.35931V1175.177H832.35931z"
        fill = {this.state.Branch4} onPress = {this.Handler4}
      />
      <Path
        d="M832.35931 1168.177H952.35931V1175.177H832.35931z"
        fill = {this.state.Branch4} onPress = {this.Handler4}
      />
      <Path
        d="M697.35931 1168.177H818.35931V1175.177H697.35931z"
        fill = {this.state.Branch4} onPress = {this.Handler4}
      />
      <Path
        d="M697.35931 1168.177H818.35931V1175.177H697.35931z"
        fill = {this.state.Branch4} onPress = {this.Handler4}
      />
      <Path
        d="M774.96 1186.877l-113.729 112.6 4.897 5.595 113.931-112.795c12.7-12.7 20.4-16.7 38.4-17.4v-7.1c-20.1.8-29.5 5.2-43.5 19.1z"
        fill = {this.state.Branch4} onPress = {this.Handler4}
      />
      <Path
        d="M774.96 1186.877l-113.729 112.6 4.897 5.595 113.931-112.795c12.7-12.7 20.4-16.7 38.4-17.4v-7.1c-20.1.8-29.5 5.2-43.5 19.1z"
        fill = {this.state.Branch4} onPress = {this.Handler4}
      />
      <Path
        transform="rotate(-135.008)"
        d="M-1392.4464 -450.87088H-1384.9063977V-411.684055H-1392.4464z"
        fill = {this.state.Branch4} onPress = {this.Handler4}
      />
      <Path
        d="M649.66 1310.385l-29.8 31.592c-9.6 9.5-15 11.2-29.1 12.2h-126.7c-9.6 0-14.7-5.4-14.7-15.2v-31.472l-6.614-.386-.387 32.458c0 13.1 7.6 20.6 20.7 21.6h128.7c15.2 0 22.4-3.8 33.2-14.4l29.8-31.492z"
        fill = {this.state.Branch4} onPress = {this.Handler4}
      />
      <Path
        d="M443.881 1244.921v45.084l5.827-.186.521-45.443c-.716-17.099-4.099-25.006-16.13-36.443l-50.963-47.826-4.738 5.153 51.194 47.85c10.506 9.85 13.688 16.477 14.289 31.811z"
        fill = {this.state.Branch4} onPress = {this.Handler4}
        fillOpacity={1}
      />
      <Path
        d="M346.073 1135.837l4.738-5.152 26.5 24.367-4.739 5.153zM287.138 1081.739l4.738-5.153 26.5 24.367-4.738 5.153z"
        fill = {this.state.Branch4} onPress = {this.Handler4}
      />
      <Path
        d="M1863.1305 596.02649H1870.1305V644.260316H1863.1305z"
        fill = {this.state.Branch3} onPress = {this.Handler3}
        strokeWidth={0.78138}
      />
      <Path
        d="M1863.1305 651.26031H1870.1305V784.26031H1863.1305z"
        fill = {this.state.Branch3} onPress = {this.Handler3}
        strokeWidth={1.29751468}
      />
      <Path
        d="M1863.13 787.26l-.033 41.76c-.01 13.7-7 20-21 20h-7.667l-.08 7.545 7.747.055c18 0 28-9.8 29-27.2l-.321-42.343z"
        fill = {this.state.Branch3} onPress = {this.Handler3}
        fillOpacity={1}
      />
      <Path
        d="M1755.015 864.263l-4.863 4.895 4.966 4.934 4.228-4.257c10.431-10.5 16.434-12.852 31.99-13.186l26.748-.034 1.576-7.354-28.207.175c-17.182.268-25.091 3.406-36.438 14.827z"
        fill = {this.state.Branch3} onPress = {this.Handler3}
      />
      <Path
        transform="rotate(-135.008)"
        d="M-1859.5673 336.87234H-1852.167371V418.97155300000003H-1859.5673z"
        fill = {this.state.Branch3} onPress = {this.Handler3}
      />
      <Path
        d="M1110.3594 1217.177H1227.3594V1224.177H1110.3594z"
        fill = {this.state.Branch3} onPress = {this.Handler3}
      />
      <Path
        fill = {this.state.Branch3} onPress = {this.Handler3}
        d="M831.35931 1217.177H1097.15127V1224.177H831.35931z"
      />
      <Path
        d="M788.66 1232.377l-73.1 73.1-73.1 73.1c-13.4 13.4-22 16.6-41.9 17.6h-55.2v7h56.4c21.1 0 31.1-4.8 45.8-19.4l145.9-145.8c8.7-8.7 13.9-11.7 24.9-12.8v-7.4c-13 .9-19.8 4.7-29.7 14.6z"
        fill = {this.state.Branch3} onPress = {this.Handler3}
      />
      <Path
        d="M529.053 1395.895l-181.814-.193c-9.6-.017-14.7-5.4-14.7-15.2l-.387-148.068-6.613.194v148.474c0 13.1 7.6 20.6 20.7 21.6 16.24-.32 182.92-.325 182.92-.325z"
        fill = {this.state.Branch3} onPress = {this.Handler3}
        fillOpacity={1}
      />
      <Path
        d="M332.139 1216.165l.22-157.657-8-.052v157.302z"
        fill = {this.state.Branch3} onPress = {this.Handler3}
        strokeWidth={0.72270149}
      />
      <Path
        d="M324.07236 867.42896H331.07236V1041.65853H324.07236z"
        fill = {this.state.Branch3} onPress = {this.Handler3}
        strokeWidth={1.12431991}
      />
      <Path
        d="M324.07236 815.42896H331.07236V860.42896H324.07236z"
        fill = {this.state.Branch3} onPress = {this.Handler3}
      />
      <Path
        d="M344.059 778.577l21.3-21.3-5.077-5.32-21.423 21.62c-11.9 12.2-14.787 18.452-14.787 34.852v.221l6.89.079c-.1-14.9 2.297-19.152 13.097-30.152zm65.197-74.968l-.142.128-49.23 48.604 5.395 5.014 48.917-48.498c12.18-11.92 16.064-14.401 15.99-36.369l-.138-30.598-6.689.287-.167 30.17c-.247 14.899-2.883 20.517-13.936 31.262z"
        fill = {this.state.Branch3} onPress = {this.Handler3}
        fillOpacity={1}
      />
      <Path
        d="M319.573 1111.47l4.738-5.153 26.5 24.368-4.738 5.152z"
        fill = {this.state.Branch4} onPress = {this.Handler4}
      />
      <Path
        d="M423.35931 588.64856H430.17181V635.364483H423.35931z"
        fill = {this.state.Branch3} onPress = {this.Handler3}
      />
      <Path
        d="M423.35931 541.11639H430.35931V583.993187H423.35931z"
        fill = {this.state.Branch3} onPress = {this.Handler3}
      />
      <Path
        d="M423.35931 395.53946H430.35931V541.11639H423.35931z"
        fill = {this.state.Branch3} onPress = {this.Handler3}
        strokeWidth={1.19413924}
      />
      <Path
        d="M423.35931 318.177H430.35931V378.177H423.35931z"
        fill = {this.state.Branch3} onPress = {this.Handler3}
      />
      <Path
        d="M423.35931 253.177H430.35931V313.177H423.35931z"
        fill = {this.state.Branch3} onPress = {this.Handler3}
      />
      <Path
        d="M666.219 1298.142c-4.3-4.3-11.2-4.3-15.5 0-4.3 4.3-4.3 11.2 0 15.5 4.3 4.3 11.2 4.3 15.5 0 4.1-4.4 4.1-11.2 0-15.5zm-4.3 11.1c-1.9 1.9-4.9 1.9-6.9 0-1.9-1.9-1.9-4.9 0-6.9 1.9-1.9 4.9-1.9 6.9 0 1.8 1.9 1.8 5.2 0 6.9z"
        fill = {this.state.Branch4} onPress = {this.Handler4}
      />
      <Path
        d="M1587.335 1185.317c-10.4-9.946-12.07-11.635-12.47-26.179l-7.73-.094v.094-.094c0 15.858 3.4 19.987 15 30.871l35.5 33.404 5.2-4.88zm-20.2-135.949h7.73v109.77l-7.73-.094z"
        fill = {this.state.d2} onPress = {this.Handler_d2}
        fillOpacity={1}
        strokeWidth={0.96866733}
      />
      <Path
        d="M1585.656 1186.902c-11.107-10.3-12.595-13.245-12.995-27.789l-.015-.336-3.323.173c0 15.858 1.832 17.335 14.139 29.633l35.588 33.405 2.195-2.222zm-16.32-137.291h3.321l-.012 109.166-3.322.173z"
        fill="#fff"
        fillOpacity={1}
        strokeWidth={0.96866733}
      />
      <Path
        d="M1546.76 1067.677c-6 .3-10.8 5.2-10.8 11.2.3 6 5.2 10.8 11.2 10.8 6-.3 10.8-5.2 10.8-11.2-.2-5.9-5.2-10.9-11.2-10.8zm.1 15.8c-2.5.3-4.9-2.1-4.9-4.9-.3-2.5 2.1-4.9 4.9-4.9 2.5-.3 4.9 2.1 4.9 4.9.2 2.8-2.1 4.9-4.9 4.9z"
        fill = {this.state.Branch3} onPress = {this.Handler3}
      />
      <Circle cx={1546.8594} cy={1078.777} r={4.9000001} fill="#fff" />
      <Path
        d="M867.567 829.082a2 2 0 11-2.517 3.108 2 2 0 012.517-3.108zm-.14 5.772a2 2 0 11-2.517 3.108 2 2 0 012.517-3.108zm.153 5.684a2 2 0 11-2.517 3.108 2 2 0 012.517-3.108z"
        opacity={1}
        fill="#858585"
        fillOpacity={0.45882353}
        stroke="none"
        strokeWidth={1.04900002}
        strokeMiterlimit={4}
        strokeDasharray="none"
        strokeOpacity={1}
      />
      <G transform="translate(209.06 306.377)">
        <LinearGradient
          xlinkHref="#SVGID_81_"
          id="m"
          gradientUnits="userSpaceOnUse"
          gradientTransform="matrix(1,0,0,-1,0,2060)"
          x1={506.35779}
          y1={1383.2715}
          x2={497.8725}
          y2={1420.8126}
        />
        <Path
          d="M493.1 639.6L502.5 638.6 511.7 676.5 501.5 679.1z"
          fill="url(#m)"
        />
        <Path
          d="M509.9 685.1L506.5 684.3 495.5 635.5 498.7 636.5z"
          fill="#fff"
        />
      </G>
      <G transform="translate(209.06 306.377)">
        <Path
          d="M493.1 639.6L502.5 638.6 511.7 676.5 501.5 679.1z"
          fill="url(#LinearGradient1144)"
        />
        <Path
          d="M509.9 685.1L506.5 684.3 495.5 635.5 498.7 636.5z"
          fill="#fff"
        />
      </G>
      <G transform="translate(209.06 306.377)">
        <Path
          d="M493.1 639.6L502.5 638.6 511.7 676.5 501.5 679.1z"
          fill="url(#LinearGradient1155)"
        />
        <Path
          d="M509.9 685.1L506.5 684.3 495.5 635.5 498.7 636.5z"
          fill="#fff"
        />
      </G>
      <G transform="translate(209.06 306.377)">
        <Path
          d="M473.3 869.5L482.4 873.6 478.1 883.2 469.2 879.2z"
          fill="url(#SVGID_831_)"
        />
        <Path d="M472.8 886.3L469.9 885 478.8 866.2 481.7 867.7z" fill="#fff" />
      </G>
      <G strokeMiterlimit={10}>
        <Path
          d="M1180.9 684.3c.3-.6.3-1.3.3-1.9 0-7.5-4.6-13.9-10.8-16.7"
          transform="translate(209.06 306.377)"
          fill="none"
          stroke="url(#_x33__1_)"
          strokeWidth={11.99969959}
          strokeMiterlimit={10}
        />
        <Path
          d="M1178.7 691.7c1.6-2.5 2.5-6 2.5-9.3 0-10.3-8.2-18.5-18.5-18.5"
          transform="translate(209.06 306.377)"
          fill="none"
          stroke="#fff"
          strokeWidth={3.9999001}
          strokeMiterlimit={10}
        />
      </G>
      <G strokeMiterlimit={10}>
        <Path
          d="M1151.7 697.4c3.2 2.3 6.9 3.6 11 3.6 3.8 0 7.1-1.1 10.3-3"
          transform="translate(209.06 306.377)"
          fill="none"
          stroke="url(#_x32__1_)"
          strokeWidth={11.99969959}
          strokeMiterlimit={10}
        />
        <Path
          d="M1146.3 691.4c3.2 5.7 9.3 9.6 16.3 9.6s12.8-3.8 16.3-9.3"
          transform="translate(209.06 306.377)"
          fill="none"
          stroke="#fff"
          strokeWidth={3.9999001}
          strokeMiterlimit={10}
        />
      </G>
      <G strokeMiterlimit={10}>
        <Path
          d="M1154.8 665.5c-6.5 3-10.8 9.5-10.8 16.7 0 .8.3 1.6.3 2.3"
          transform="translate(209.06 306.377)"
          fill="none"
          stroke="url(#_x31__1_)"
          strokeWidth={11.99969959}
          strokeMiterlimit={10}
        />
        <Path
          d="M1162.5 663.8c-10.3 0-18.5 8.2-18.5 18.5 0 3.3.8 6.3 2.3 9"
          transform="translate(209.06 306.377)"
          fill="none"
          stroke="#fff"
          strokeWidth={3.9999001}
          strokeMiterlimit={10}
        />
      </G>
      <G transform="translate(209.06 306.377)">
        <LinearGradient
          gradientUnits="userSpaceOnUse"
          x1={1342.0726}
          y1={10209.19}
          x2={1366.4384}
          y2={10188.744}
          gradientTransform="matrix(1,0,0,-1,0,11177.891)"
        >
          <Stop offset={0.3144} stopColor="#943f90" />
          <Stop offset={0.3689} stopColor="#a95b79" />
          <Stop offset={0.4974} stopColor="#d79848" />
          <Stop offset={0.5918} stopColor="#f4be2a" />
          <Stop offset={0.6412} stopColor="#ffcd1e" />
        </LinearGradient>
        <Path
          strokeMiterlimit={10}
          d="M1355.7 992.7c1-1.6 1.4-3.9 1.4-4.1.3-1.6.5-3.2.5-4.7-.3-6.6-4.1-12.6-9.6-15.6-.3 0-.8-.5-2.5-1.3"
          fill="url(#n)"
          stroke="url(#SVGID_6_)"
          strokeWidth={12}
        />
        <Path
          strokeMiterlimit={10}
          d="M1353 996.6c3-3.4 4.6-7.7 4.6-12.6-.3-9.6-7.7-17.4-17.4-17.9"
          fill="none"
          stroke="#fff"
          strokeWidth={3.9999001}
        />
      </G>
      <G strokeMiterlimit={10}>
        <Path
          d="M1322.3 992.5c3 6.5 9.8 10.8 17.4 10.6 2.5-.3 5.2-.8 7.4-1.8"
          transform="translate(209.06 306.377)"
          fill="none"
          stroke="url(#SVGID_8_)"
          strokeWidth={11.99969959}
          strokeMiterlimit={10}
        />
        <Path
          d="M1320.3 984.9c.3 10.3 9 18.5 19 17.9 5.5-.3 10.3-2.5 13.4-6.5"
          transform="translate(209.06 306.377)"
          fill="none"
          stroke="#fff"
          strokeWidth={3.9999001}
          strokeMiterlimit={10}
        />
      </G>
      <G strokeMiterlimit={10}>
        <Path
          d="M1332.6 967.1c-5.5 1.9-9.6 6.3-11.2 11.4"
          transform="translate(209.06 306.377)"
          fill="none"
          stroke="url(#SVGID_9_)"
          strokeWidth={11.99969959}
          strokeMiterlimit={10}
        />
        <Path
          d="M1340.3 966.3h-2c-10.3 0-18.4 9-17.8 19"
          transform="translate(209.06 306.377)"
          fill="none"
          stroke="#fff"
          strokeWidth={3.9999001}
          strokeMiterlimit={10}
        />
      </G>
      <Path
        d="M1342.183 1350.522c-4.3-4.3-11.2-4.3-15.5 0-4.3 4.3-4.3 11.2 0 15.5 4.3 4.3 11.2 4.3 15.5 0 4.4-4.1 4.4-11 0-15.5zm-4.2 11.4c-1.9 1.9-4.9 1.9-6.9 0-1.9-1.9-1.9-4.9 0-6.9 1.9-1.9 4.9-1.9 6.9 0 1.8 1.8 1.8 5 0 6.9z"
        fill = {this.state.Branch8} onPress = {this.Handler8}
      />
      <G strokeMiterlimit={10}>
        <Path
          d="M1132.5 1049.8c6.6-2.5 11.4-9.5 11.4-17.1 0-2.5-.5-4.9-1.4-7"
          transform="translate(209.06 306.377)"
          fill="none"
          stroke="url(#SVGID_10_)"
          strokeWidth={11.99969959}
          strokeMiterlimit={10}
        />
        <Path
          d="M1128.1 1051.2c9-1.3 15.9-9 15.9-18.5 0-5.5-2.2-10.1-6-13.3"
          transform="translate(209.06 306.377)"
          fill="none"
          stroke="#fff"
          strokeWidth={3.9999001}
          strokeMiterlimit={10}
        />
      </G>
      <G strokeMiterlimit={10}>
        <Path
          d="M1108.1 1039.6c1.9 4.9 6 8.8 10.6 10.6"
          transform="translate(209.06 306.377)"
          fill="none"
          stroke="url(#SVGID_11_)"
          strokeWidth={11.99969959}
          strokeMiterlimit={10}
        />
        <Path
          d="M1107 1032.9c0 1.8.3 3.9.3 4 1.6 7 7.3 12.7 14.4 14.2.1 0 2.4.5 3.8.5"
          transform="translate(209.06 306.377)"
          fill="none"
          stroke="#fff"
          strokeWidth={3.9999001}
          strokeMiterlimit={10}
        />
      </G>
      <G strokeMiterlimit={10}>
        <Path
          d="M1134.3 1016.2c-2.1-.8-6.6-1.9-8.9-1.9-8 0-14.8 4.9-17.4 12.1"
          transform="translate(209.06 306.377)"
          fill="none"
          stroke="url(#SVGID_12_)"
          strokeWidth={11.99969959}
          strokeMiterlimit={10}
        />
        <Path
          d="M1138.3 1019.5c-3.3-3.2-7.7-5.2-12.8-5.2-9.1 0-16.7 6.5-18.3 15.2"
          transform="translate(209.06 306.377)"
          fill="none"
          stroke="#fff"
          strokeWidth={3.9999001}
          strokeMiterlimit={10}
        />
      </G>
      <G strokeMiterlimit={10}>
        <Path
          d="M900.1 971.8c6.5-6.3 10.8-14.8 11.2-24.7.5-9.6-3-18.5-8.8-25.1-.3-.3-1.4-1.9-3.4-3.4"
          transform="translate(209.06 306.377)"
          fill="none"
          stroke="url(#SVGID_13_)"
          strokeWidth={11.99969959}
          strokeMiterlimit={10}
        />
        <Path
          d="M892.7 977c10.6-6 18-16.9 18.5-29.9.5-13.1-6-24.7-15.9-31.5"
          transform="translate(209.06 306.377)"
          fill="none"
          stroke="#fff"
          strokeWidth={3.9999001}
          strokeMiterlimit={10}
        />
      </G>
      <G strokeMiterlimit={10}>
        <Path
          d="M839.8 950.3c2.2 16.9 16.3 30.4 34.1 31.3 4.3.3 8.2-.3 12.2-1.6"
          transform="translate(209.06 306.377)"
          fill="none"
          stroke="url(#SVGID_14_)"
          strokeWidth={11.99969959}
          strokeMiterlimit={10}
        />
        <Path
          d="M839.6 944.1c-1 19.9 14.5 36.6 34.4 37.6 6.9.3 13.3-1.3 19-4.4"
          transform="translate(209.06 306.377)"
          fill="none"
          stroke="#fff"
          strokeWidth={3.9999001}
          strokeMiterlimit={10}
        />
      </G>
      <G strokeMiterlimit={10}>
        <Path
          d="M889.2 912.5c-3.8-1.6-8-2.5-12.2-2.5-16.6-.8-31.3 10.1-36 25.3-.1.3-.8 3.2-.8 3.4"
          transform="translate(209.06 306.377)"
          fill="none"
          stroke="url(#SVGID_15_)"
          strokeWidth={11.99969959}
          strokeMiterlimit={10}
        />
        <Path
          d="M895.5 915.9c-5.5-3.6-11.7-6-18.5-6-19.9-1-36.6 14.5-37.6 34.4"
          transform="translate(209.06 306.377)"
          fill="none"
          stroke="#fff"
          strokeWidth={3.9999001}
          strokeMiterlimit={10}
        />
      </G>
      <G strokeMiterlimit={10}>
        <Path
          d="M876.3 952.7c1.6 7.4 5.5 13.9 10.6 19"
          transform="translate(209.06 306.377)"
          fill="none"
          stroke="url(#SVGID_16_)"
          strokeWidth={11.99969959}
          strokeMiterlimit={10}
        />
        <Path
          d="M875.5 945.6c0 13.3 7.1 25 18 31.3"
          transform="translate(209.06 306.377)"
          fill="none"
          stroke="#fff"
          strokeWidth={3.9999001}
          strokeMiterlimit={10}
        />
      </G>
      <G strokeMiterlimit={10}>
        <Path
          d="M886.4 919.7c-4.9 4.7-8.5 10.8-10.1 17.8"
          transform="translate(209.06 306.377)"
          fill="none"
          stroke="url(#SVGID_17_)"
          strokeWidth={11.99969959}
          strokeMiterlimit={10}
        />
        <Path
          d="M893.3 914.5c-10.6 6.3-17.9 17.9-17.9 31.1"
          transform="translate(209.06 306.377)"
          fill="none"
          stroke="#fff"
          strokeWidth={3.9999001}
          strokeMiterlimit={10}
        />
      </G>
      <G strokeMiterlimit={10}>
        <Path
          d="M623.2 917.2c2.3.5 4.7 1 7 1 13.3 0 24.5-9.1 27.6-21.3"
          transform="translate(209.06 306.377)"
          fill="none"
          stroke="url(#SVGID_18_)"
          strokeWidth={11.99969959}
          strokeMiterlimit={10}
        />
        <Path
          d="M615.7 914c4.3 2.5 9.5 4.1 14.8 4.1 15.6 0 28.4-12.7 28.4-28.4"
          transform="translate(209.06 306.377)"
          fill="none"
          stroke="#fff"
          strokeWidth={3.9999001}
          strokeMiterlimit={10}
        />
      </G>
      <G strokeMiterlimit={10}>
        <Path
          d="M609.9 869.8c-4.9 5.2-8 12.1-8 19.7 0 7.7 3.2 14.9 8.2 20.1"
          transform="translate(209.06 306.377)"
          fill="none"
          stroke="url(#SVGID_19_)"
          strokeWidth={11.99969959}
          strokeMiterlimit={10}
        />
        <Path
          d="M616.1 865c-8.5 4.9-14.2 14.2-14.2 24.7 0 10.4 5.5 19.3 13.7 24.2"
          transform="translate(209.06 306.377)"
          fill="none"
          stroke="#fff"
          strokeWidth={3.9999001}
          strokeMiterlimit={10}
        />
      </G>
      <G strokeMiterlimit={10}>
        <Path
          d="M609.9 869.8c-4.9 5.2-8 12.1-8 19.7 0 7.7 3.2 14.9 8.2 20.1"
          transform="translate(209.06 306.377)"
          fill="none"
          stroke="url(#SVGID_19_)"
          strokeWidth={11.99969959}
          strokeMiterlimit={10}
        />
        <Path
          d="M616.1 865c-8.5 4.9-14.2 14.2-14.2 24.7 0 10.4 5.5 19.3 13.7 24.2"
          transform="translate(209.06 306.377)"
          fill="none"
          stroke="#fff"
          strokeWidth={3.9999001}
          strokeMiterlimit={10}
        />
      </G>
      <G strokeMiterlimit={10}>
        <Path
          d="M657.7 881.6c-3.4-11.7-14.5-20.4-27.3-20.4-2.3 0-4.6.3-6.5.8"
          transform="translate(209.06 306.377)"
          fill="none"
          stroke="url(#SVGID_20_)"
          strokeWidth={11.99969959}
          strokeMiterlimit={10}
        />
        <Path
          d="M659 889.6c0-15.6-12.7-28.4-28.4-28.4-5.2 0-10.3 1.4-14.3 3.8"
          transform="translate(209.06 306.377)"
          fill="none"
          stroke="#fff"
          strokeWidth={3.9999001}
          strokeMiterlimit={10}
        />
      </G>
      <G strokeMiterlimit={10}>
        <Path
          d="M657.7 881.6c-3.4-11.7-14.5-20.4-27.3-20.4-2.3 0-4.6.3-6.5.8"
          transform="translate(209.06 306.377)"
          fill="none"
          stroke="url(#SVGID_20_)"
          strokeWidth={11.99969959}
          strokeMiterlimit={10}
        />
        <Path
          d="M659 889.6c0-15.6-12.7-28.4-28.4-28.4-5.2 0-10.3 1.4-14.3 3.8"
          transform="translate(209.06 306.377)"
          fill="none"
          stroke="#fff"
          strokeWidth={3.9999001}
          strokeMiterlimit={10}
        />
      </G>
      <G transform="translate(209.06 306.377)">
        <Path
          d="M311.6 1103.2L318.6 1096 325.6 1103.2 318.4 1110.2z"
          fill="url(#SVGID_22_)"
        />
        <Path
          transform="rotate(-44.855 318.731 1102.514)"
          d="M305 1100.9H332.5V1104.1000000000001H305z"
          fill="#fff"
        />
      </G>
      <G transform="translate(209.06 306.377)">
        <Path
          d="M713.29999 622.79999H721.29999V632.79999H713.29999z"
          fill="url(#SVGID_24_)"
        />
        <Path
          d="M716.29999 614.79999H718.29999V642.79999H716.29999z"
          fill="#fff"
        />
      </G>
      <G transform="translate(209.06 306.377)">
        <Path
          d="M1138.7 1168.6L1144.4 1160.3 1152.5 1165.7 1146.9 1174.1z"
          fill="url(#SVGID_25_)"
        />
        <Path
          d="M1154.8 1155.8L1139.7 1178.6 1137 1176.8 1152.3 1154.2z"
          fill="#fff"
        />
      </G>
      <G transform="translate(209.06 306.377)">
        <Path
          d="M879.29999 523.79999H889.29999V533.79999H879.29999z"
          fill="url(#SVGID_26_)"
        />
        <Path
          d="M882.29999 514.79999H886.29999V542.79999H882.29999z"
          fill="#fff"
        />
      </G>
      <G transform="translate(209.06 306.377)">
        <Path
          d="M1132.3 500.79999H1142.3V510.79999H1132.3z"
          fill="url(#SVGID_27_)"
        />
        <Path d="M1136.3 492.79999H1139.3V520.79999H1136.3z" fill="#fff" />
      </G>
      <G transform="translate(209.06 306.377)">
        <Path
          d="M1269.3 603.79999H1279.3V613.79999H1269.3z"
          fill="url(#SVGID_28_)"
        />
        <Path d="M1272.3 595.79999H1275.3V623.79999H1272.3z" fill="#fff" />
      </G>
      <G transform="translate(209.06 306.377)">
        <Path
          d="M1444.3 882.79999H1454.3V892.79999H1444.3z"
          fill="url(#SVGID_29_)"
        />
        <Path d="M1434.3 885.79999H1462.3V889.79999H1434.3z" fill="#fff" />
      </G>
      <G transform="translate(209.06 306.377)">
        <Path d="M1429.3 1069.8H1439.3V1079.8H1429.3z" fill="url(#SVGID_30_)" />
        <Path d="M1420.3 1072.8H1448.3V1076.8H1420.3z" fill="#fff" />
      </G>
      <G transform="translate(209.06 306.377)">
        <Path
          d="M913.1 1190.5L920.4 1183.6 927.3 1190.5 920.4 1197.5z"
          fill="url(#SVGID_31_)"
        />
        <Path
          transform="rotate(45.001 919.996 1191.014)"
          d="M918.40002 1177.3H921.6000200000001V1204.8H918.40002z"
          fill="#fff"
        />
      </G>
      <G transform="translate(209.06 306.377)">
        <Path
          d="M796.29999 1131.8H806.29999V1141.8H796.29999z"
          fill="url(#SVGID_32_)"
        />
        <Path d="M800.29999 1123.8H803.29999V1151.8H800.29999z" fill="#fff" />
      </G>
      <G transform="translate(209.06 306.377)">
        <Path
          d="M699.3 1027.7L706.1 1020.8 713.1 1027.7 706.2 1035z"
          fill="url(#SVGID_33_)"
        />
        <Path d="M716.6 1035.6L714.3 1037.8 695 1018.2 697 1016z" fill="#fff" />
      </G>
      <G transform="translate(209.06 306.377)">
        <Path
          d="M665.2 762.3L672.1 755.3 679.1 762.3 671.9 769.4z"
          fill="url(#SVGID_34_)"
        />
        <Path
          transform="rotate(45.001 671.807 762.889)"
          d="M670.20001 749.09998H673.4000100000001V776.59998H670.20001z"
          fill="#fff"
        />
      </G>
      <G transform="translate(209.06 306.377)">
        <Path
          d="M984.9 629.6L994.1 625.9 997.9 635 988.8 638.8z"
          fill="url(#SVGID_35_)"
        />
        <Path
          d="M1005.6 628.3L980.1 638.8 979 635.9 1004.5 625.4z"
          fill="#fff"
        />
      </G>
      <Path
        d="M1077.16 581.918a2 2 0 11-3.937-.71 2 2 0 013.936.71zm-23.394 11.735a2 2 0 11-3.936-.71 2 2 0 013.937.71zm5.59-2.762a2 2 0 11-3.936-.71 2 2 0 013.936.71zm6.112-2.987a2 2 0 11-3.936-.71 2 2 0 013.937.71zm5.817-2.853a2 2 0 11-3.937-.71 2 2 0 013.937.71z"
        opacity={1}
        fill="#858585"
        fillOpacity={0.45882353}
        stroke="none"
        strokeWidth={1.04900002}
        strokeMiterlimit={4}
        strokeDasharray="none"
        strokeOpacity={1}
      />
      <Circle r={1.3} cy={589.64471} cx={1451.4482} fill="#858585" />
      <Circle r={1.3} cy={586.74469} cx={1448.2482} fill="#858585" />
      <Circle r={1.3} cy={583.64471} cx={1445.4482} fill="#858585" />
      <G transform="translate(209.06 306.377)">
        <Path
          d="M1141.2 1584.3L1148.2 1577.2 1155.1 1584.3 1148.4 1591.4z"
          fill="url(#SVGID_36_)"
        />
        <Path
          d="M1139.5 1573.4L1158.9 1592.9 1156.7 1595.1 1137.3 1575.6z"
          fill="#fff"
        />
      </G>
      <G transform="translate(209.06 306.377)">
        <Path
          d="M894.2 1643.8L901.2 1636.6 908.2 1643.8 901.2 1650.7z"
          fill="url(#SVGID_37_)"
        />
        <Path
          transform="rotate(44.992 900.643 1642.915)"
          d="M886.90002 1641.3H914.40002V1644.5H886.90002z"
          fill="#fff"
        />
      </G>
      <G transform="translate(209.06 306.377)">
        <Path
          d="M698.29999 1811.8H708.29999V1822.8H698.29999z"
          fill="url(#SVGID_38_)"
        />
        <Path d="M702.29999 1802.8H705.29999V1829.8H702.29999z" fill="#fff" />
      </G>
      <G transform="translate(209.06 306.377)">
        <Path
          d="M892.29999 1889.8H902.29999V1899.8H892.29999z"
          fill="url(#SVGID_39_)"
        />
        <Path d="M883.29999 1892.8H911.29999V1895.8H883.29999z" fill="#fff" />
      </G>
      <G transform="translate(252.158 304.468)">
        <Path
          d="M1357.8 1864.1L1365 1871.1 1357.8 1878 1350.8 1871.1z"
          fill="url(#SVGID_40_)"
        />
        <Path
          transform="rotate(44.96 1357.233 1871.66)"
          d="M1355.6 1857.9H1358.8V1885.5H1355.6z"
          fill="#fff"
        />
      </G>
      <G transform="translate(209.06 306.377)">
        <Path
          d="M1078.9 762.8L1087.1 757.4 1092.6 765.4 1084.5 771z"
          fill="url(#SVGID_41_)"
        />
        <Path
          d="M1095.2 775.2L1092.6 776.9 1077.3 754.2 1080 752.5z"
          fill="#fff"
        />
      </G>
      <Path
        d="M1689.654 672.565l-.189-12.81 10-.039.189 12.81z"
        fill = {this.state.Branch1} onPress = {this.Handler1}
        fillOpacity={1}
      />
      <Path d="M1692.758 680.439l-.109-28 4-.016.109 28z" fill="#fff" />
      <Path
        d="M1364.594 1581.834a2 2 0 11-3.34 2.201 2 2 0 013.34-2.201zm-1.99 5.454a2 2 0 11-3.34 2.201 2 2 0 013.34-2.201zm-1.882 5.766a2 2 0 11-3.34 2.202 2 2 0 013.34-2.202zm-1.878 5.46a2 2 0 11-3.34 2.2 2 2 0 013.34-2.2zm-1.574 5.463a2 2 0 11-3.34 2.202 2 2 0 013.34-2.202zM751.47 1398.11a2 2 0 11-2.518 3.108 2 2 0 012.518-3.109zm-.14 5.771a2 2 0 11-2.517 3.109 2 2 0 012.517-3.109zm.153 5.684a2 2 0 11-2.518 3.109 2 2 0 012.518-3.109zM1833.317 1080.885a2 2 0 11-3.912-.834 2 2 0 013.912.834zm-5.427 2.707a2 2 0 11-3.913-.834 2 2 0 013.913.834zm-5.208 2.494a2 2 0 11-3.912-.834 2 2 0 013.912.834zm-4.996 2.714a2 2 0 11-3.912-.834 2 2 0 013.912.834zM1817.208 863.886a2 2 0 11-3.982.384 2 2 0 013.982-.384zm-4.215 3.947a2 2 0 11-3.982.382 2 2 0 013.982-.382zm-3.947 4.092a2 2 0 11-3.982.383 2 2 0 013.982-.383zM1707.281 553.714a2 2 0 01-2 2 2 2 0 01-2-2 2 2 0 012-2 2 2 0 012 2zm-4.89 3.525a2 2 0 01-2 2 2 2 0 01-2-2 2 2 0 012-2 2 2 0 012 2zm-5.003 3.753a2 2 0 01-2 2 2 2 0 01-2-2 2 2 0 012-2 2 2 0 012 2zm-5.231 3.752a2 2 0 01-2 2 2 2 0 01-2-2 2 2 0 012-2 2 2 0 012 2zm-4.89 3.64a2 2 0 01-2 2 2 2 0 01-2-2 2 2 0 012-2 2 2 0 012 2zm-4.555 3.566a2 2 0 01-2 2 2 2 0 01-2-2 2 2 0 012-2 2 2 0 012 2zm-4.663 3.458a2 2 0 01-2 2 2 2 0 01-2-2 2 2 0 012-2 2 2 0 012 2zm-4.745 3.78a2 2 0 01-2 2 2 2 0 01-2-2 2 2 0 012-2 2 2 0 012 2zm-4.573 3.523a2 2 0 01-2 2 2 2 0 01-2-2 2 2 0 012-2 2 2 0 012 2zm-4.32 3.696a2 2 0 01-2 2 2 2 0 01-2-2 2 2 0 012-2 2 2 0 012 2zM1451.866 423.046a2 2 0 11-3.79 1.282 2 2 0 013.79-1.282zm-3.203 4.804a2 2 0 11-3.79 1.281 2 2 0 013.79-1.281zm-2.91 4.885a2 2 0 11-3.79 1.281 2 2 0 013.79-1.281zM849.84 471.896a2 2 0 11-.002 4 2 2 0 01.002-4zm3.777 4.746a2 2 0 11-.002 4 2 2 0 01.002-4zm3.522 4.574a2 2 0 11-.002 4 2 2 0 01.002-4zm3.694 4.323a2 2 0 11-.002 4 2 2 0 01.002-4zM649.665 666.644a2 2 0 112.482 3.137 2 2 0 01-2.482-3.137zm5.798 1.648a2 2 0 112.482 3.136 2 2 0 01-2.482-3.136zm6.048 1.595a2 2 0 112.482 3.137 2 2 0 01-2.482-3.137zm6.188 1.774a2 2 0 112.482 3.137 2 2 0 01-2.482-3.137zm5.888 1.576a2 2 0 112.482 3.137 2 2 0 01-2.482-3.137zm5.624 1.359a2 2 0 112.482 3.137 2 2 0 01-2.482-3.137z"
        opacity={1}
        fill="#858585"
        fillOpacity={0.45882353}
        stroke="none"
        strokeWidth={1.04900002}
        strokeMiterlimit={4}
        strokeDasharray="none"
        strokeOpacity={1}
      />
      <G transform="translate(209.06 306.377)" strokeMiterlimit={10}>
        <Path
          d="M1023.7 908.29999L1018.1 895.5"
          fill="none"
          stroke="url(#SVGID_8140_)"
          strokeWidth={11.99969959}
          strokeMiterlimit={10}
        />
        <Path
          d="M1026.4 915L1015.7 889.79999"
          fill="none"
          stroke="#fff"
          strokeWidth={3.9999001}
          strokeMiterlimit={10}
        />
      </G>
      <G transform="translate(209.06 306.377)" strokeMiterlimit={10}>
        <Path
          d="M1012.9 882.79999L1007 868.70001"
          fill="none"
          stroke="url(#SVGID_82_)"
          strokeWidth={11.99969959}
          strokeMiterlimit={10}
        />
        <Path
          d="M1015.4 889.59998L1005.4 864.59998"
          fill="none"
          stroke="#fff"
          strokeWidth={3.9999001}
          strokeMiterlimit={10}
        />
      </G>
      <G transform="translate(209.06 306.377)">
        <Path
          d="M1185.3 826.2L1195.2 825.9 1195.6 835.8 1185.3 835.8z"
          fill="url(#SVGID_8346_)"
        />
        <Path
          d="M1176.3 829.8L1176.3 832.8 1204.3 832.8 1204.3 829.8z"
          fill="#fff"
        />
      </G>
      <G strokeMiterlimit={10}>
        <Path
          d="M918.3 773.5c.3-.6.3-1.3.3-1.9 0-7.5-4.6-13.9-10.8-16.7"
          transform="translate(209.06 306.377)"
          fill="none"
          stroke="url(#_x33__3_)"
          strokeWidth={11.99969959}
          strokeMiterlimit={10}
        />
        <Path
          d="M916.1 780.9c1.6-2.5 2.5-6 2.5-9.3 0-10.3-8.2-18.5-18.5-18.5"
          transform="translate(209.06 306.377)"
          fill="none"
          stroke="#fff"
          strokeWidth={3.9999001}
          strokeMiterlimit={10}
        />
      </G>
      <G strokeMiterlimit={10}>
        <Path
          d="M889 785.8c3.2 2.3 6.9 3.6 11 3.6 3.8 0 7.1-1.1 10.3-3"
          transform="translate(209.06 306.377)"
          fill="none"
          stroke="url(#_x32__3_)"
          strokeWidth={11.99969959}
          strokeMiterlimit={10}
        />
        <Path
          d="M883.4 779.8c3.2 5.7 9.3 9.6 16.3 9.6 6.9 0 12.8-3.8 16.3-9.3"
          transform="translate(209.06 306.377)"
          fill="none"
          stroke="#fff"
          strokeWidth={3.9999001}
          strokeMiterlimit={10}
        />
      </G>
      <G strokeMiterlimit={10}>
        <Path
          d="M892.2 754.8c-6.5 3-10.8 9.5-10.8 16.7 0 .8.3 1.6.3 2.3"
          transform="translate(209.06 306.377)"
          fill="none"
          stroke="url(#_x31__3_)"
          strokeWidth={11.99969959}
          strokeMiterlimit={10}
        />
        <Path
          d="M899.8 753.2c-10.3 0-18.5 8.2-18.5 18.5 0 3.3.8 6.3 2.3 9"
          transform="translate(209.06 306.377)"
          fill="none"
          stroke="#fff"
          strokeWidth={3.9999001}
          strokeMiterlimit={10}
        />
      </G>
      <Path
        transform="translate(209.06 306.377)"
        d="M1008.6 849L1006.2 842.7 1011.8 838.8 1005.1 838.8 1003 832.4 1000.9 838.8 994.2 838.8 999.7 842.7 997.7 849 1003 844.9z"
        fill = {this.state.Branch1} onPress = {this.Handler1}
      />
      <Path
        d="M1473.3594 555.07703H1488.3594V559.07703H1473.3594z"
        fill = {this.state.Branch3} onPress = {this.Handler3}
      />
      <Path
        d="M1444.76 571.177c-2.5-2.5-6.6-2.5-9.3 0-2.5 2.5-2.5 6.6 0 9.3 2.5 2.5 6.6 2.5 9.3 0 2.5-2.6 2.5-6.7 0-9.3zm-2.6 6.8c-1.3 1.3-3 1.3-4.3 0-1.3-1.3-1.3-3 0-4.3 1.3-1.3 3-1.3 4.3 0 1.2 1.3 1.2 3 0 4.3zM1167.16 571.177c-2.5-2.5-6.6-2.5-9.3 0-2.5 2.5-2.5 6.6 0 9.3 2.5 2.5 6.6 2.5 9.3 0 2.5-2.5 2.5-6.5 0-9.3zm-2.5 6.8c-1.3 1.3-3 1.3-4.3 0-1.3-1.3-1.3-3 0-4.3 1.3-1.3 3-1.3 4.3 0 1.2 1.3 1.2 3 0 4.3z"
        fill="#0a72b9"
      />
      <Circle
        r={2.3}
        cy={485.61462}
        cx={1111.3085}
        fill = {this.state.Branch9} onPress = {this.Handler9}
        fillOpacity={1}
      />
      <Circle
        r={2.3}
        cy={484.51163}
        cx={1149.6122}
        fill = {this.state.limeBranch} onPress = {this.limeHandler}
        fillOpacity={1}
      />
      <Path
        d="M703.615 986.45a2 2 0 01-2.661-.959 2 2 0 01.958-2.661 2 2 0 012.66.958 2 2 0 01-.957 2.661zm-4.549-2.73a2 2 0 01-2.661-.958 2 2 0 01.958-2.661 2 2 0 012.661.958 2 2 0 01-.958 2.661zm-4.492-2.786a2 2 0 01-2.66-.958 2 2 0 01.957-2.661 2 2 0 012.661.958 2 2 0 01-.958 2.661zm-5.174-3.127a2 2 0 01-2.66-.958 2 2 0 01.957-2.661 2 2 0 012.661.958 2 2 0 01-.958 2.66zm-20.767-11.153a2 2 0 01-2.662-.958 2 2 0 01.958-2.66 2 2 0 012.662.957 2 2 0 01-.958 2.661zm-5.272-2.923a2 2 0 01-2.662-.958 2 2 0 01.958-2.661 2 2 0 012.662.958 2 2 0 01-.958 2.661zm-5.526-2.93a2 2 0 01-2.661-.957 2 2 0 01.958-2.662 2 2 0 012.66.958 2 2 0 01-.957 2.662zm-5.623-3.134a2 2 0 01-2.661-.958 2 2 0 01.958-2.662 2 2 0 012.661.958 2 2 0 01-.958 2.662zm-5.375-2.875a2 2 0 01-2.66-.958 2 2 0 01.957-2.662 2 2 0 012.661.958 2 2 0 01-.958 2.662zm-5.167-2.603a2 2 0 01-2.66-.958 2 2 0 01.957-2.66 2 2 0 012.661.957 2 2 0 01-.958 2.661zm-5.114-2.747a2 2 0 01-2.661-.958 2 2 0 01.958-2.662 2 2 0 012.661.958 2 2 0 01-.958 2.662zm-5.44-2.684a2 2 0 01-2.66-.958 2 2 0 01.957-2.66 2 2 0 012.661.957 2 2 0 01-.958 2.661zm-5.136-2.637a2 2 0 01-2.66-.958 2 2 0 01.957-2.66 2 2 0 012.661.957 2 2 0 01-.958 2.661zm-5.184-2.336a2 2 0 01-2.66-.958 2 2 0 01.957-2.661 2 2 0 012.661.958 2 2 0 01-.958 2.661zm53.295 27.633a2 2 0 01-2.66-.958 2 2 0 01.957-2.661 2 2 0 012.661.958 2 2 0 01-.958 2.661zm5.45 2.874a2 2 0 01-2.661-.958 2 2 0 01.958-2.661 2 2 0 012.661.958 2 2 0 01-.958 2.66zm4.96 2.637a2 2 0 01-2.662-.958 2 2 0 01.958-2.661 2 2 0 012.661.958 2 2 0 01-.958 2.66zM1090.093 401.19a2 2 0 11-3.989.302 2 2 0 013.99-.301zm5.166-4.426a2 2 0 11-3.989.301 2 2 0 013.99-.3zm4.914-4.222a2 2 0 11-3.99.3 2 2 0 013.99-.3zM694.312 941.847a2 2 0 01-2.828.056 2 2 0 01-.056-2.828 2 2 0 012.828-.056 2 2 0 01.056 2.828zm-5.574-.691a2 2 0 01-2.828.055 2 2 0 01-.056-2.828 2 2 0 012.828-.055 2 2 0 01.056 2.827zm-6.117-.738a2 2 0 01-2.828.056 2 2 0 01-.056-2.828 2 2 0 012.828-.056 2 2 0 01.056 2.828zm-59.65-6.772a2 2 0 01-2.827.055 2 2 0 01-.056-2.828 2 2 0 012.828-.055 2 2 0 01.056 2.828zm5.677.33a2 2 0 01-2.828.056 2 2 0 01-.056-2.828 2 2 0 012.828-.056 2 2 0 01.056 2.828zm5.74.628a2 2 0 01-2.829.056 2 2 0 01-.055-2.828 2 2 0 012.828-.056 2 2 0 01.055 2.828zm6.038.564a2 2 0 01-2.827.055 2 2 0 01-.056-2.828 2 2 0 012.828-.055 2 2 0 01.056 2.828zm5.759.739a2 2 0 01-2.828.056 2 2 0 01-.056-2.828 2 2 0 012.828-.056 2 2 0 01.056 2.828zm5.756.585a2 2 0 01-2.828.056 2 2 0 01-.056-2.828 2 2 0 012.828-.056 2 2 0 01.056 2.828zm6.047.765a2 2 0 01-2.828.056 2 2 0 01-.056-2.828 2 2 0 012.828-.056 2 2 0 01.056 2.828zm6.371.92a2 2 0 01-2.828.056 2 2 0 01-.055-2.828 2 2 0 012.828-.056 2 2 0 01.055 2.828zm6.208.762a2 2 0 01-2.828.056 2 2 0 01-.056-2.828 2 2 0 012.828-.056 2 2 0 01.056 2.828zm5.968.847a2 2 0 01-2.828.056 2 2 0 01-.055-2.828 2 2 0 012.827-.055 2 2 0 01.056 2.827z"
        opacity={1}
        fill="#858585"
        fillOpacity={0.45882353}
        stroke="none"
        strokeWidth={1.04900002}
        strokeMiterlimit={4}
        strokeDasharray="none"
        strokeOpacity={1}
      />
      <Path
        d="M617.05933 982.27686H649.55933V1001.27686H617.05933z"
        fillOpacity={0.65}
        fill="#fff"
      />
      <Path
        d="M416.05933 951.37701H438.05933V968.37701H416.05933z"
        fillOpacity={0.65}
        fill="#fff"
      />
      <Path
        d="M773.35931 1186.177H832.35931V1204.177H773.35931z"
        fillOpacity={0.65}
        fill="#fff"
      />
      <Path
        d="M1112.3594 1248.177H1144.3594V1264.177H1112.3594z"
        fillOpacity={0.65}
        fill="#fff"
      />
      <Path
        d="M1609.3594 1166.177H1632.3594V1179.177H1609.3594z"
        fillOpacity={0.65}
        fill="#fff"
      />
      <Path
        d="M777.43347 606.6272H835.43347V622.6272H777.43347z"
        fillOpacity={0.65}
        fill="#fff"
      />
      <Path
        d="M1192.3594 821.177H1235.3594V839.177H1192.3594z"
        fillOpacity={0.65}
        fill="#fff"
      />
      <Path
        d="M1094.3594 861.177H1136.3594V878.177H1094.3594z"
        fillOpacity={0.65}
        fill="#fff"
      />
      <Path
        d="M1442.3594 1002.177H1485.3594V1020.177H1442.3594z"
        fillOpacity={0.65}
        fill="#fff"
      />
      <Path
        d="M1716.0568 709.67957H1755.045955V728.67957H1716.0568z"
        fill="#fff"
        fillOpacity={0.65}
      />
      <Path
        d="M1598.1294 1130.6179H1645.959329V1146.6179H1598.1294z"
        fill="#fff"
        fillOpacity={0.65}
        strokeWidth={1.24213564}
      />
      <Path
        d="M1748.3594 1374.177H1789.3594V1388.177H1748.3594z"
        fillOpacity={0.65}
        fill="#fff"
      />
      <Path
        d="M1407.3594 1687.177H1489.3594V1703.177H1407.3594z"
        fillOpacity={0.65}
        fill="#fff"
      />
      <Path
        d="M1729.3594 1412.177H1770.3594V1426.177H1729.3594z"
        fillOpacity={0.65}
        fill="#fff"
      />
      <Path
        d="M1524.3594 1315.177H1620.3594V1333.177H1524.3594z"
        fillOpacity={0.65}
        fill="#fff"
      />
      <Path
        d="M1366.3594 1150.177H1420.3594V1164.177H1366.3594z"
        fillOpacity={0.65}
        fill="#fff"
      />
      <Path
        d="M1030.3594 1157.177H1088.3594V1175.177H1030.3594z"
        fillOpacity={0.65}
        fill="#fff"
      />
      <Path
        d="M673.56061 619.88751H750.2964039999999V660.8975770000001H673.56061z"
        fill="#fff"
        fillOpacity={0.65}
        strokeWidth={1.83872795}
      />
      <Path
        d="M671.35931 845.177H730.35931V860.177H671.35931z"
        fillOpacity={0.65}
        fill="#fff"
      />
      <Path
        d="M677.35931 909.177H792.75931V928.177H677.35931z"
        fillOpacity={0.65}
        fill="#fff"
      />
      <Path
        d="M854.52679 926.1521H917.02679V945.1521H854.52679z"
        fillOpacity={0.65}
        fill="#fff"
      />
      <Path
        d="M747.35931 1549.177H806.35931V1564.177H747.35931z"
        fillOpacity={0.65}
        fill="#fff"
      />
      <Path
        d="M1250.3594 1357.177H1309.3594V1372.177H1250.3594z"
        fillOpacity={0.65}
        fill="#fff"
      />
      <Path
        d="M1301.3594 1233.177H1334.3594V1248.177H1301.3594z"
        fillOpacity={0.65}
        fill="#fff"
      />
      <Path
        d="M1135.3594 1138.7769H1198.559401V1180.1769020000002H1135.3594z"
        fillOpacity={0.65}
        fill="#fff"
      />
      <Path
        d="M1250.3594 1357.177H1309.3594V1372.177H1250.3594z"
        fillOpacity={0.65}
        fill="#fff"
      />
      <G fontSize={18.3084}>
        <Text
          x={1128.0922}
          y={318.33487}
          fontSize="18.3083992px"
          fontFamily="Moscow Sans"
          fill="#1d1d1b"
        >
          {"\u0412\u0435\u0440\u0445\u043D\u0438\u0435"}
        </Text>
        <Text
          x={1128.0922}
          y={340.33487}
          fontSize="18.3083992px"
          fontFamily="Moscow Sans"
          fill="#1d1d1b"
        >
          {"\u041B\u0438\u0445\u043E\u0431\u043E\u0440\u044B"}
        </Text>
      </G>
      <Text
        y={261.76157}
        x={1128.0759}
        fontSize="18.3083992px"
        fontFamily="Moscow Sans"
        fill="#1d1d1b"
      >
        {"\u0421\u0435\u043B\u0438\u0433\u0435\u0440\u0441\u043A\u0430\u044F"}
      </Text>
      <G fontSize={18.3084}>
        <Text
          y={1759.8735}
          x={702.83105}
          fontSize="18.3083992px"
          fontFamily="Moscow Sans"
          fill="#1d1d1b"
        >
          {"\u042E\u0433\u043E-"}
        </Text>
        <Text
          y={1776.745}
          x={704.56537}
          fontSize="18.3083992px"
          fontFamily="Moscow Sans"
          fill="#1d1d1b"
        >
          {"\u0417\u0430\u043F\u0430\u0434\u043D\u0430\u044F"}
        </Text>
      </G>
      <G fontSize={18.3084}>
        <Text
          x={702.68909}
          y={1668.3901}
          fontSize="18.3083992px"
          fontFamily="Moscow Sans"
          fill="#1d1d1b"
        >
          {"\u041F\u0440\u043E\u0441\u043F\u0435\u043A\u0442"}
        </Text>
        <Text
          x={702.68909}
          y={1690.3901}
          fontSize="18.3083992px"
          fontFamily="Moscow Sans"
          fill="#1d1d1b"
        >
          {"\u0412\u0435\u0440\u043D\u0430\u0434\u0441\u043A\u043E\u0433\u043E"}
        </Text>
      </G>
      <Text
        fontSize="18.3083992px"
        x={702.68896}
        y={1622.4331}
        fontFamily="Moscow Sans"
        fill="#1d1d1b"
      >
        {"\u0423\u043D\u0438\u0432\u0435\u0440\u0441\u0438\u0442\u0435\u0442"}
      </Text>
      <Text
        fontSize="18.3083992px"
        x={702.68896}
        y={1561.9692}
        fontFamily="Moscow Sans"
        fill="#1d1d1b"
      >
        {
          "\u0412\u043E\u0440\u043E\u0431\u044C\u0451\u0432\u044B \u0433\u043E\u0440\u044B"
        }
      </Text>
      <Text
        fontSize="18.3083992px"
        x={638.76678}
        y={1428.2421}
        fontFamily="Moscow Sans"
        fill="#1d1d1b"
      >
        {"\u0421\u043F\u043E\u0440\u0442\u0438\u0432\u043D\u0430\u044F"}
      </Text>
      <Text
        fontSize="18.3083992px"
        x={795.1582}
        y={1408.0903}
        fontFamily="Moscow Sans"
        fill="#1d1d1b"
      >
        {"\u0424\u0440\u0443\u043D\u0437\u0435\u043D\u0441\u043A\u0430\u044F"}
      </Text>
      <G fontSize={18.3084}>
        <Text
          transform="translate(209.06 306.377) translate(652.79 1042.891)"
          fontSize="18.3083992px"
          fontFamily="Moscow Sans"
          fill="#1d1d1b"
        >
          {"\u041F\u0430\u0440\u043A"}
        </Text>
        <Text
          transform="translate(209.06 306.377) translate(618.99 1064.891)"
          fontSize="18.3083992px"
          fontFamily="Moscow Sans"
          fill="#1d1d1b"
        >
          {"\u043A\u0443\u043B\u044C\u0442\u0443\u0440\u044B"}
        </Text>
      </G>
      <Text
        fontSize="18.3083992px"
        x={957.8952}
        y={1349.7305}
        fontFamily="Moscow Sans"
        fill="#1d1d1b"
      >
        {
          "\u041A\u0440\u043E\u043F\u043E\u0442\u043A\u0438\u043D\u0441\u043A\u0430\u044F"
        }
      </Text>
      <G fontSize={18.3084}>
        <Text
          transform="translate(209.06 306.377) translate(906.18 988.344)"
          fontSize="18.3083992px"
          fontFamily="Moscow Sans"
          fill="#1d1d1b"
        >
          {"\u0411\u0438\u0431\u043B\u0438\u043E\u0442\u0435\u043A\u0430"}
        </Text>
        <Text
          transform="translate(209.06 306.377) translate(906.18 1010.344)"
          fontSize="18.3083992px"
          fontFamily="Moscow Sans"
          fill="#1d1d1b"
        >
          {"\u0438\u043C. \u041B\u0435\u043D\u0438\u043D\u0430"}
        </Text>
      </G>
      <G fontSize={18.3084}>
        <Text
          transform="translate(209.06 306.377) translate(913.017 848.263)"
          fontSize="18.3083992px"
          fontFamily="Moscow Sans"
          fill="#1d1d1b"
        >
          {"\u041E\u0445\u043E\u0442\u043D\u044B\u0439"}
        </Text>
        <Text
          transform="translate(209.06 306.377) translate(958.717 870.263)"
          fontSize="18.3083992px"
          fontFamily="Moscow Sans"
          fill="#1d1d1b"
        >
          {"\u0420\u044F\u0434"}
        </Text>
      </G>
      <Text
        transform="rotate(.048) skewX(-.035)"
        fontSize="18.3083992px"
        x={1295.9154}
        y={1111.3564}
        fontFamily="Moscow Sans"
        fill="#1d1d1b"
      >
        {"\u041B\u0443\u0431\u044F\u043D\u043A\u0430"}
      </Text>
      <Text
        fontSize="18.3083992px"
        x={1400.9531}
        y={1015.6963}
        fontFamily="Moscow Sans"
        fill="#1d1d1b"
      >
        {"\u0427\u0438\u0441\u0442\u044B\u0435 \u043F\u0440\u0443\u0434\u044B"}
      </Text>
      <G fontSize={18.3084}>
        <Text
          x={441.16922}
          y={252.9942}
          fontSize="18.3083992px"
          fontFamily="Moscow Sans"
          fill="#1d1d1b"
        >
          {"\u041F\u044F\u0442\u043D\u0438\u0446\u043A\u043E\u0435"}
        </Text>
        <Text
          x={441.16922}
          y={274.9942}
          fontSize="18.3083992px"
          fontFamily="Moscow Sans"
          fill="#1d1d1b"
        >
          {"\u0448\u043E\u0441\u0441\u0435"}
        </Text>
      </G>
      <Text
        y={317.60693}
        x={441.90103}
        fontSize="18.3083992px"
        fontFamily="Moscow Sans"
        fill="#1d1d1b"
      >
        {"\u041C\u0438\u0442\u0438\u043D\u043E"}
      </Text>
      <Text
        y={404.28009}
        x={282.87781}
        fontSize="18.3083992px"
        fontFamily="Moscow Sans"
        fill="#1d1d1b"
      >
        {
          "\u0412\u043E\u043B\u043E\u043A\u043E\u043B\u0430\u043C\u0441\u043A\u0430\u044F"
        }
      </Text>
      <Text
        y={404.28009}
        x={282.87781}
        fontSize="18.3083992px"
        fontFamily="Moscow Sans"
        fill="#1d1d1b"
      >
        {
          "\u0412\u043E\u043B\u043E\u043A\u043E\u043B\u0430\u043C\u0441\u043A\u0430\u044F"
        }
      </Text>
      <Text
        fontSize="18.3083992px"
        x={441.90103}
        y={588.46729}
        fontFamily="Moscow Sans"
        fill="#1d1d1b"
      >
        {"\u041C\u044F\u043A\u0438\u043D\u0438\u043D\u043E"}
      </Text>
      <Text
        fontSize="18.3083992px"
        x={441.08072}
        y={643.88037}
        fontFamily="Moscow Sans"
        fill="#1d1d1b"
      >
        {"\u0421\u0442\u0440\u043E\u0433\u0438\u043D\u043E"}
      </Text>
      <Text
        fontSize="18.3083992px"
        x={345.16922}
        y={821.2417}
        fontFamily="Moscow Sans"
        fill="#1d1d1b"
      >
        {"\u041A\u0440\u044B\u043B\u0430\u0442\u0441\u043A\u043E\u0435"}
      </Text>
      <Text
        fontSize="18.3083992px"
        x={345.35233}
        y={866.67236}
        fontFamily="Moscow Sans"
        fill="#1d1d1b"
      >
        {"\u041C\u043E\u043B\u043E\u0434\u0451\u0436\u043D\u0430\u044F"}
      </Text>
      <G fontSize={18.3084}>
        <Text
          x={181.71356}
          y={1243.035}
          fontSize="18.3083992px"
          fontFamily="Moscow Sans"
          fill="#1d1d1b"
        >
          {"\u0421\u043B\u0430\u0432\u044F\u043D\u0441\u043A\u0438\u0439"}
        </Text>
        <Text
          x={203.11356}
          y={1265.035}
          fontSize="18.3083992px"
          fontFamily="Moscow Sans"
          fill="#1d1d1b"
        >
          {"\u0431\u0443\u043B\u044C\u0432\u0430\u0440"}
        </Text>
      </G>
      <Text
        fontSize="18.3083992px"
        x={792.1582}
        y={1255.8091}
        fontFamily="Moscow Sans"
        fill = {this.state.Branch3} onPress = {this.Handler3}
      >
        {"\u041A\u0438\u0435\u0432\u0441\u043A\u0430\u044F"}
      </Text>
      <Text
        fontSize="18.3083992px"
        x={902.57965}
        y={1204.3174}
        fontFamily="Moscow Sans"
        fill = {this.state.Branch9} onPress = {this.Handler9}
      >
        {"\u0421\u043C\u043E\u043B\u0435\u043D\u0441\u043A\u0430\u044F"}
      </Text>
      <Text
        fontSize="18.3083992px"
        x={1074.5483}
        y={1205.0725}
        fontFamily="Moscow Sans"
        fill = {this.state.Branch3} onPress = {this.Handler3}
      >
        {"\u0410\u0440\u0431\u0430\u0442\u0441\u043A\u0430\u044F"}
      </Text>
      <Text
        fontSize="18.3083992px"
        x={1211.2991}
        y={1244.9336}
        fontFamily="Moscow Sans"
        fill="#1d1d1b"
      >
        {"\u041F\u043B. \u0420\u0435\u0432\u043E\u043B\u044E\u0446\u0438\u0438"}
      </Text>
      <Text
        fontSize="18.3083992px"
        x={1571.3009}
        y={1075.5654}
        fontFamily="Moscow Sans"
        fill="#1d1d1b"
      >
        {"\u041A\u0443\u0440\u0441\u043A\u0430\u044F"}
      </Text>
      <Text
        y={831.66138}
        x={1814.631}
        fontSize="18.3083992px"
        fontFamily="Moscow Sans"
        fill="#1d1d1b"
      >
        {
          "\u041F\u0430\u0440\u0442\u0438\u0437\u0430\u043D\u0441\u043A\u0430\u044F"
        }
      </Text>
      <Text
        y={788.3797}
        x={1885.3245}
        fontSize="18.3083992px"
        fontFamily="Moscow Sans"
        fill="#1d1d1b"
      >
        {
          "\u0418\u0437\u043C\u0430\u0439\u043B\u043E\u0432\u0441\u043A\u0430\u044F"
        }
      </Text>
      <Text
        y={652.53101}
        x={1885.3245}
        fontSize="18.3083992px"
        fontFamily="Moscow Sans"
        fill="#1d1d1b"
      >
        {
          "\u041F\u0435\u0440\u0432\u043E\u043C\u0430\u0439\u0441\u043A\u0430\u044F"
        }
      </Text>
      <Text
        y={596.47101}
        x={1885.3245}
        fontSize="18.3083992px"
        fontFamily="Moscow Sans"
        fill="#1d1d1b"
      >
        {"\u0429\u0451\u043B\u043A\u043E\u0432\u0441\u043A\u0430\u044F"}
      </Text>
      <Text
        fontSize="18.3083992px"
        x={16.60173}
        y={1069.814}
        fontFamily="Moscow Sans"
        fill="#1d1d1b"
      >
        {"\u041A\u0443\u043D\u0446\u0435\u0432\u0441\u043A\u0430\u044F"}
      </Text>
      <Text
        y={1602.6306}
        x={1377.8981}
        fontSize="18.31080055px"
        fontFamily="Moscow Sans"
        fill="#1d1d1b"
      >
        {
          "\u0410\u0432\u0442\u043E\u0437\u0430\u0432\u043E\u0434\u0441\u043A\u0430\u044F"
        }
      </Text>
      <Text
        y={1602.6309}
        x={1377.8986}
        fontSize="18.31080055px"
        fontFamily="Moscow Sans"
        fill="#1d1d1b"
      >
        {
          "\u0410\u0432\u0442\u043E\u0437\u0430\u0432\u043E\u0434\u0441\u043A\u0430\u044F"
        }
      </Text>
      <G fontSize={18.3084}>
        <Text
          y={1097.0634}
          x={352.9975}
          fontSize="18.3083992px"
          fontFamily="Moscow Sans"
          fill="#1d1d1b"
        >
          {"\u0424\u0438\u043B\u0451\u0432\u0441\u043A\u0438\u0439"}
        </Text>
        <Text
          y={1119.0634}
          x={352.9975}
          fontSize="18.3083992px"
          fontFamily="Moscow Sans"
          fill="#1d1d1b"
        >
          {"\u043F\u0430\u0440\u043A"}
        </Text>
      </G>
      <Text
        fontSize="18.3083992px"
        x={460.43433}
        y={1300.0784}
        fontFamily="Moscow Sans"
        fill="#1d1d1b"
      >
        {"\u0424\u0438\u043B\u0438"}
      </Text>
      <Text
        fontSize="18.3083992px"
        x={708.97205}
        y={1283.9668}
        fontFamily="Moscow Sans"
        fill="#1d1d1b"
      >
        {
          "\u0421\u0442\u0443\u0434\u0435\u043D\u0447\u0435\u0441\u043A\u0430\u044F"
        }
      </Text>
      <Text
        fontSize="18.3083992px"
        x={435.06192}
        y={1174.7134}
        fontFamily="Moscow Sans"
        fill="#1d1d1b"
      >
        {
          "\u041C\u0435\u0436\u0434\u0443\u043D\u0430\u0440\u043E\u0434\u043D\u0430\u044F"
        }
      </Text>
      <Text
        y={1156.4286}
        x={694.23718}
        fontSize="18.3083992px"
        fontFamily="Moscow Sans"
        fill="#1d1d1b"
      >
        {"\u0412\u044B\u0441\u0442\u0430\u0432\u043E\u0447\u043D\u0430\u044F"}
      </Text>
      <Text
        fontSize="18.3083992px"
        x={897.5459}
        y={1155.4321}
        fontFamily="Moscow Sans"
        fill = {this.state.Branch4} onPress = {this.Handler4}
      >
        {"\u0421\u043C\u043E\u043B\u0435\u043D\u0441\u043A\u0430\u044F"}
      </Text>
      <Text
        fontSize="18.3083992px"
        x={1024.1536}
        y={1171.272}
        fontFamily="Moscow Sans"
        fill = {this.state.Branch4} onPress = {this.Handler4}
      >
        {"\u0410\u0440\u0431\u0430\u0442\u0441\u043A\u0430\u044F"}
      </Text>
      <Text
        fontSize="18.3083992px"
        x={1097.1981}
        y={1260.2007}
        fontFamily="Moscow Sans"
        fill="#1d1d1b"
      >
        {
          "\u0410\u043B\u0435\u043A\u0441\u0430\u043D\u0434\u0440\u043E\u0432\u0441\u043A\u0438\u0439 \u0421\u0430\u0434"
        }
      </Text>
      <Text
        fontSize="18.3083992px"
        x={651.9895}
        y={304.58545}
        fontFamily="Moscow Sans"
        fill="#1d1d1b"
      >
        {"\u041F\u043B\u0430\u043D\u0435\u0440\u043D\u0430\u044F"}
      </Text>
      <Text
        fontSize="18.3083992px"
        x={652.35571}
        y={347.56104}
        fontFamily="Moscow Sans"
        fill="#1d1d1b"
      >
        {"\u0421\u0445\u043E\u0434\u043D\u0435\u043D\u0441\u043A\u0430\u044F"}
      </Text>
      <Text
        fontSize="18.3083992px"
        x={651.9895}
        y={390.53125}
        fontFamily="Moscow Sans"
        fill="#1d1d1b"
      >
        {"\u0422\u0443\u0448\u0438\u043D\u0441\u043A\u0430\u044F"}
      </Text>
      <Text
        fontSize="18.3083992px"
        x={651.9895}
        y={433.50977}
        fontFamily="Moscow Sans"
        fill="#1d1d1b"
      >
        {"\u0421\u043F\u0430\u0440\u0442\u0430\u043A"}
      </Text>
      <Text
        fontSize="18.3083992px"
        x={651.9895}
        y={604.51526}
        fontFamily="Moscow Sans"
        fill="#1d1d1b"
      >
        {"\u0429\u0443\u043A\u0438\u043D\u0441\u043A\u0430\u044F"}
      </Text>
      <G fontSize={18.3084}>
        <Text
          x={651.8703}
          y={639.03473}
          fontSize="18.3083992px"
          fontFamily="Moscow Sans"
          fill="#1d1d1b"
        >
          {"\u041E\u043A\u0442\u044F\u0431\u0440\u044C\u0441\u043A\u043E\u0435"}
        </Text>
        <Text
          x={651.8703}
          y={661.03473}
          fontSize="18.3083992px"
          fontFamily="Moscow Sans"
          fill="#1d1d1b"
        >
          {"\u041F\u043E\u043B\u0435"}
        </Text>
      </G>
      <Text
        transform="rotate(.049)"
        fontSize="18.3083992px"
        x={754.71149}
        y={983.55493}
        fontFamily="Moscow Sans"
        fill="#1d1d1b"
      >
        {"\u0411\u0435\u0433\u043E\u0432\u0430\u044F"}
      </Text>
      <Text
        fontSize="18.3083992px"
        x={895.78424}
        y={1044.5764}
        fontFamily="Moscow Sans"
        fill="#1d1d1b"
      >
        {"\u0411\u0430\u0440\u0440\u0438\u043A\u0430\u0434\u043D\u0430\u044F"}
      </Text>
      <Text
        transform="rotate(.315)"
        fontSize="18.31057739px"
        x={1063.4574}
        y={1038.4393}
        fontFamily="Moscow Sans"
        fill="#1d1d1b"
      >
        {"\u041F\u0443\u0448\u043A\u0438\u043D\u0441\u043A\u0430\u044F"}
      </Text>
      <Text
        transform="rotate(.115)"
        fontSize="18.30890083px"
        x={1193.0844}
        y={1042.3728}
        fontFamily="Moscow Sans"
        fill="#1d1d1b"
      >
        {
          "\u041A\u0443\u0437\u043D\u0435\u0446\u043A\u0438\u0439 \u041C\u043E\u0441\u0442"
        }
      </Text>
      <Text
        fontSize="18.3083992px"
        x={1314.3094}
        y={1161.5864}
        fontFamily="Moscow Sans"
        fill="#1d1d1b"
      >
        {"\u041A\u0438\u0442\u0430\u0439-\u0433\u043E\u0440\u043E\u0434"}
      </Text>
      <Text
        transform="rotate(.011)"
        fontSize="18.3083992px"
        x={1448.6842}
        y={1272.3013}
        fontFamily="Moscow Sans"
        fill="#1d1d1b"
      >
        {"\u0422\u0430\u0433\u0430\u043D\u0441\u043A\u0430\u044F"}
      </Text>
      <Text
        fontSize="18.3083992px"
        x={710.04517}
        y={467.87656}
        fontFamily="Moscow Sans"
        fill="#1d1d1b"
      >
        {"\u0412\u043E\u0439\u043A\u043E\u0432\u0441\u043A\u0430\u044F"}
      </Text>
      <Text
        y={681.15112}
        x={854.78918}
        fontSize="18.3083992px"
        fontFamily="Moscow Sans"
        fill="#1d1d1b"
      >
        {"\u0421\u043E\u043A\u043E\u043B"}
      </Text>
      <Text
        fontSize="18.3083992px"
        x={740.4104}
        y={763.77881}
        fontFamily="Moscow Sans"
        fill="#1d1d1b"
      >
        {"\u0410\u044D\u0440\u043E\u043F\u043E\u0440\u0442"}
      </Text>
      <Text
        transform="rotate(-.008)"
        fontSize="18.3083992px"
        x={810.46289}
        y={940.32788}
        fontFamily="Moscow Sans"
        fill="#1d1d1b"
      >
        {"\u0411\u0435\u043B\u043E\u0440\u0443\u0441\u0441\u043A\u0430\u044F"}
      </Text>
      <Text
        fontSize="18.3083992px"
        x={987.90491}
        y={961.45459}
        fontFamily="Moscow Sans"
        fill="#1d1d1b"
      >
        {"\u041C\u0430\u044F\u043A\u043E\u0432\u0441\u043A\u0430\u044F"}
      </Text>
      <Text
        fontSize="18.3083992px"
        x={1011.5562}
        y={1110.2339}
        fontFamily="Moscow Sans"
        fill="#1d1d1b"
      >
        {"\u0422\u0432\u0435\u0440\u0441\u043A\u0430\u044F"}
      </Text>
      <Text
        fontSize="18.3083992px"
        x={1232.4136}
        y={1187.7932}
        fontFamily="Moscow Sans"
        fill="#1d1d1b"
      >
        {"\u0422\u0435\u0430\u0442\u0440\u0430\u043B\u044C\u043D\u0430\u044F"}
      </Text>
      <Text
        transform="rotate(.011)"
        fontSize="18.3083992px"
        x={1362.3179}
        y={1325.6343}
        fontFamily="Moscow Sans"
        fill="#1d1d1b"
      >
        {
          "\u041D\u043E\u0432\u043E\u043A\u0443\u0437\u043D\u0435\u0446\u043A\u0430\u044F"
        }
      </Text>
      <Text
        fontSize="18.3083992px"
        x={1362.1335}
        y={1490.7163}
        fontFamily="Moscow Sans"
        fill="#1d1d1b"
      >
        {"\u041F\u0430\u0432\u0435\u043B\u0435\u0446\u043A\u0430\u044F"}
      </Text>
      <Text
        fontSize="18.31080055px"
        x={1361.7764}
        y={1951.4697}
        fontFamily="Moscow Sans"
        fill="#1d1d1b"
      >
        {
          "\u041A\u0430\u043D\u0442\u0435\u043C\u0438\u0440\u043E\u0432\u0441\u043A\u0430\u044F"
        }
      </Text>
      <Text
        fontSize="18.31080055px"
        x={1361.6718}
        y={2006.4946}
        fontFamily="Moscow Sans"
        fill="#1d1d1b"
      >
        {"\u0426\u0430\u0440\u0438\u0446\u044B\u043D\u043E"}
      </Text>
      <Text
        fontSize="18.31080055px"
        x={1361.6718}
        y={2068.4224}
        fontFamily="Moscow Sans"
        fill="#1d1d1b"
      >
        {"\u041E\u0440\u0435\u0445\u043E\u0432\u043E"}
      </Text>
      <Text
        fontSize="18.31080055px"
        x={1363.3895}
        y={2130.4087}
        fontFamily="Moscow Sans"
        fill="#1d1d1b"
      >
        {
          "\u0414\u043E\u043C\u043E\u0434\u0435\u0434\u043E\u0432\u0441\u043A\u0430\u044F"
        }
      </Text>
      <Text
        fontSize="18.31080055px"
        x={1419.2595}
        y={2213.7505}
        fontFamily="Moscow Sans"
        fill="#1d1d1b"
      >
        {
          "\u041A\u0440\u0430\u0441\u043D\u043E\u0433\u0432\u0430\u0440\u0434\u0435\u0439\u0441\u043A\u0430\u044F"
        }
      </Text>
      <Text
        fontSize="18.31080055px"
        x={1632.4089}
        y={2213.1948}
        fontFamily="Moscow Sans"
        fill="#1d1d1b"
      >
        {
          "\u0410\u043B\u043C\u0430-\u0410\u0442\u0438\u043D\u0441\u043A\u0430\u044F"
        }
      </Text>
      <Text
        fontSize="18.3083992px"
        x={1311.6686}
        y={201.79417}
        fontFamily="Moscow Sans"
        fill="#1d1d1b"
      >
        {"\u0410\u043B\u0442\u0443\u0444\u044C\u0435\u0432\u043E"}
      </Text>
      <Text
        fontSize="18.3083992px"
        x={1309.7389}
        y={248.75316}
        fontFamily="Moscow Sans"
        fill="#1d1d1b"
      >
        {"\u0411\u0438\u0431\u0438\u0440\u0435\u0432\u043E"}
      </Text>
      <Text
        fontSize="18.3083992px"
        x={1309.7976}
        y={302.34598}
        fontFamily="Moscow Sans"
        fill="#1d1d1b"
      >
        {"\u041E\u0442\u0440\u0430\u0434\u043D\u043E\u0435"}
      </Text>
      <Text
        y={486.76193}
        x={1166.1429}
        fontSize="18.3083992px"
        fontFamily="Moscow Sans"
        fill="#1d1d1b"
      >
        {
          "\u041F\u0435\u0442\u0440\u043E\u0432\u0441\u043A\u043E-\u0420\u0430\u0437\u0443\u043C\u043E\u0432\u0441\u043A\u0430\u044F"
        }
      </Text>
      <Text
        fontSize="18.3083992px"
        x={1062.7061}
        y={694.75586}
        fontFamily="Moscow Sans"
        fill="#1d1d1b"
      >
        {"\u0414\u043C\u0438\u0442\u0440\u043E\u0432\u0441\u043A\u0430\u044F"}
      </Text>
      <Text
        y={772.43256}
        x={1051.2186}
        fontSize="16.3083992px"
        fontFamily="Moscow Sans"
        fill="#1d1d1b"
      >
        {"\u0421\u0430\u0432\u0451\u043B\u043E\u0432\u0441\u043A\u0430\u044F"}
      </Text>
      <Text
        fontSize="18.3083992px"
        x={1068.6274}
        y={874.13159}
        fontFamily="Moscow Sans"
        fill="#1d1d1b"
      >
        {
          "\u041C\u0435\u043D\u0434\u0435\u043B\u0435\u0435\u0432\u0441\u043A\u0430\u044F"
        }
      </Text>
      <G fontSize={18.3084}>
        <Text
          transform="translate(209.06 306.377) translate(887.156 636.458)"
          fontSize="18.3083992px"
          fontFamily="Moscow Sans"
          fill="#1d1d1b"
        >
          {"\u0426\u0432\u0435\u0442\u043D\u043E\u0439"}
        </Text>
        <Text
          transform="translate(209.06 306.377) translate(887.156 658.458)"
          fontSize="18.3083992px"
          fontFamily="Moscow Sans"
          fill="#1d1d1b"
        >
          {"\u0431\u0443\u043B\u044C\u0432\u0430\u0440"}
        </Text>
      </G>
      <Text
        fontSize="18.3083992px"
        x={1138.1826}
        y={1103.7991}
        fontFamily="Moscow Sans"
        fill="#1d1d1b"
      >
        {"\u0427\u0435\u0445\u043E\u0432\u0441\u043A\u0430\u044F"}
      </Text>
      <Text
        fontSize="18.3083992px"
        x={929.8739}
        y={1256.9553}
        fontFamily="Moscow Sans"
        fill="#1d1d1b"
      >
        {"\u0411\u043E\u0440\u043E\u0432\u0438\u0446\u043A\u0430\u044F"}
      </Text>
      <Text
        transform="scale(1.00025 .99975)"
        fontSize="18.31297493px"
        x={1133.8119}
        y={1436.1033}
        fontFamily="Moscow Sans"
        fill="#1d1d1b"
      >
        {"\u041F\u043E\u043B\u044F\u043D\u043A\u0430"}
      </Text>
      <Text
        fontSize="18.3083992px"
        x={1133.0503}
        y={1518.0519}
        fontFamily="Moscow Sans"
        fill="#1d1d1b"
      >
        {
          "\u0421\u0435\u0440\u043F\u0443\u0445\u043E\u0432\u0441\u043A\u0430\u044F"
        }
      </Text>
      <Text
        fontSize="18.3083992px"
        x={1134.2441}
        y={1558.5542}
        fontFamily="Moscow Sans"
        fill="#1d1d1b"
      >
        {"\u0422\u0443\u043B\u044C\u0441\u043A\u0430\u044F"}
      </Text>
      <Text
        fontSize="18.3083992px"
        x={1005.40997}
        y={1633.9319}
        fontFamily="Moscow Sans"
        fill="#1d1d1b"
      >
        {"\u041D\u0430\u0433\u0430\u0442\u0438\u043D\u0441\u043A\u0430\u044F"}
      </Text>
      <Text
        fontSize="18.3083992px"
        x={1133.8723}
        y={1818.2847}
        fontFamily="Moscow Sans"
        fill="#1d1d1b"
      >
        {"\u041D\u0430\u0433\u043E\u0440\u043D\u0430\u044F"}
      </Text>
      <G fontSize={18.3084}>
        <Text
          transform="translate(209.06 306.377) translate(924.813 1549.534)"
          fontSize="18.3083992px"
          fontFamily="Moscow Sans"
          fill="#1d1d1b"
        >
          {"\u041D\u0430\u0445\u0438\u043C\u043E\u0432\u0441\u043A\u0438\u0439"}
        </Text>
        <Text
          transform="translate(209.06 306.377) translate(924.813 1571.534)"
          fontSize="18.3083992px"
          fontFamily="Moscow Sans"
          fill="#1d1d1b"
        >
          {"\u043F\u0440\u043E\u0441\u043F\u0435\u043A\u0442"}
        </Text>
      </G>
      <Text
        fontSize="18.31080055px"
        x={1132.9224}
        y={1974.9019}
        fontFamily="Moscow Sans"
        fill="#1d1d1b"
      >
        {
          "\u0421\u0435\u0432\u0430\u0441\u0442\u043E\u043F\u043E\u043B\u044C\u0441\u043A\u0430\u044F"
        }
      </Text>
      <Text
        fontSize="18.31080055px"
        x={1135.3397}
        y={2011.0171}
        fontFamily="Moscow Sans"
        fill="#1d1d1b"
      >
        {
          "\u0427\u0435\u0440\u0442\u0430\u043D\u043E\u0432\u0441\u043A\u0430\u044F"
        }
      </Text>
      <Text
        fontSize="18.31080055px"
        x={1133.8739}
        y={2046.8569}
        fontFamily="Moscow Sans"
        fill="#1d1d1b"
      >
        {"\u042E\u0436\u043D\u0430\u044F"}
      </Text>
      <Text
        fontSize="18.31080055px"
        x={1133.8739}
        y={2082.4595}
        fontFamily="Moscow Sans"
        fill="#1d1d1b"
      >
        {"\u041F\u0440\u0430\u0436\u0441\u043A\u0430\u044F"}
      </Text>
      <Path
        d="M1236.1726 2127.8152H1266.6756540000001V2142.8152H1236.1726z"
        fillOpacity={0.65}
        fill="#fff"
      />
      <Text
        fontSize="18.31080055px"
        x={1133.5095}
        y={2170.1196}
        fontFamily="Moscow Sans"
        fill="#1d1d1b"
      >
        {"\u0410\u043D\u043D\u0438\u043D\u043E"}
      </Text>
      <Text
        y={319.06616}
        x={1472.9851}
        fontSize="18.3083992px"
        fontFamily="Moscow Sans"
        fill="#1d1d1b"
      >
        {
          "\u0411\u0430\u0431\u0443\u0448\u043A\u0438\u043D\u0441\u043A\u0430\u044F"
        }
      </Text>
      <Text
        y={374.4126}
        x={1472.9851}
        fontSize="18.3083992px"
        fontFamily="Moscow Sans"
        fill="#1d1d1b"
      >
        {"\u0421\u0432\u0438\u0431\u043B\u043E\u0432\u043E"}
      </Text>
      <Text
        fontSize="18.3083992px"
        x={1474.3235}
        y={415.021}
        fontFamily="Moscow Sans"
        fill="#1d1d1b"
      >
        {
          "\u0411\u043E\u0442\u0430\u043D\u0438\u0447\u0435\u0441\u043A\u0438\u0439 \u0441\u0430\u0434"
        }
      </Text>
      <Text
        fontSize="18.3083992px"
        x={1474.3308}
        y={605.01959}
        fontFamily="Moscow Sans"
        fill="#1d1d1b"
      >
        {"\u0412\u0414\u041D\u0425"}
      </Text>
      <Text
        transform="rotate(.063)"
        fontSize="18.3083992px"
        x={1473.5819}
        y={651.0965}
        fontFamily="Moscow Sans"
        fill="#1d1d1b"
      >
        {
          "\u0410\u043B\u0435\u043A\u0441\u0435\u0435\u0432\u0441\u043A\u0430\u044F"
        }
      </Text>
      <Text
        fontSize="18.3083992px"
        y={735.3291}
        x={1355.8843}
        fontFamily="Moscow Sans"
        fill="#1d1d1b"
      >
        {"\u0420\u0438\u0436\u0441\u043A\u0430\u044F"}
      </Text>
      <Text
        transform="rotate(.098)"
        fontSize="18.30890083px"
        x={1359.6791}
        y={817.62408}
        fontFamily="Moscow Sans"
        fill="#1d1d1b"
      >
        {
          "\u041F\u0440\u043E\u0441\u043F\u0435\u043A\u0442 \u041C\u0438\u0440\u0430"
        }
      </Text>
      <Text
        fontSize="18.3083992px"
        x={1320.4746}
        y={901.31177}
        fontFamily="Moscow Sans"
        fill="#1d1d1b"
      >
        {"\u0421\u0443\u0445\u0430\u0440\u0435\u0432\u0441\u043A\u0430\u044F"}
      </Text>
      <Text
        transform="rotate(.021)"
        fontSize="18.3083992px"
        x={1230.9976}
        y={1006.6356}
        fontFamily="Moscow Sans"
        fill="#1d1d1b"
      >
        {
          "\u0422\u0443\u0440\u0433\u0435\u043D\u0435\u0432\u0441\u043A\u0430\u044F"
        }
      </Text>
      <Text
        fontSize="18.3083992px"
        x={1314.3094}
        y={1161.5864}
        fontFamily="Moscow Sans"
        fill="#1d1d1b"
      >
        {"\u041A\u0438\u0442\u0430\u0439-\u0433\u043E\u0440\u043E\u0434"}
      </Text>
      <Text
        transform="rotate(.011)"
        fontSize="18.3083992px"
        x={1200.1554}
        y={1368.5415}
        fontFamily="Moscow Sans"
        fill="#1d1d1b"
      >
        {
          "\u0422\u0440\u0435\u0442\u044C\u044F\u043A\u043E\u0432\u0441\u043A\u0430\u044F"
        }
      </Text>
      <Text
        fontSize="18.3083992px"
        x={893.78955}
        y={1448.9856}
        fontFamily="Moscow Sans"
        fill="#1d1d1b"
      >
        {"\u041E\u043A\u0442\u044F\u0431\u0440\u044C\u0441\u043A\u0430\u044F"}
      </Text>
      <Text
        fontSize="18.3083992px"
        x={963.94678}
        y={1535.0552}
        fontFamily="Moscow Sans"
        fill="#1d1d1b"
      >
        {"\u0428\u0430\u0431\u043E\u043B\u043E\u0432\u0441\u043A\u0430\u044F"}
      </Text>
      <Path
        d="M871.42651 1569.2844H910.415665V1609.208095H871.42651z"
        fill="#fff"
        fillOpacity={0.65}
        strokeWidth={1.44956791}
      />
      <G fontSize={18.3084}>
        <Text
          x={864.82013}
          y={1581.7494}
          fontSize="18.3083992px"
          fontFamily="Moscow Sans"
          fill="#1d1d1b"
        >
          {"\u041B\u0435\u043D\u0438\u043D\u0441\u043A\u0438\u0439"}
        </Text>
        <Text
          x={864.82013}
          y={1603.7494}
          fontSize="18.3083992px"
          fontFamily="Moscow Sans"
          fill="#1d1d1b"
        >
          {"\u043F\u0440\u043E\u0441\u043F\u0435\u043A\u0442"}
        </Text>
      </G>
      <Text
        fontSize="18.31080055px"
        x={905.63251}
        y={1678.0776}
        fontFamily="Moscow Sans"
        fill="#1d1d1b"
      >
        {
          "\u0410\u043A\u0430\u0434\u0435\u043C\u0438\u0447\u0435\u0441\u043A\u0430\u044F"
        }
      </Text>
      <Text
        fontSize="18.31080055px"
        x={905.26465}
        y={1766.5571}
        fontFamily="Moscow Sans"
        fill="#1d1d1b"
      >
        {"\u041F\u0440\u043E\u0444\u0441\u043E\u044E\u0437\u043D\u0430\u044F"}
      </Text>
      <Text
        fontSize="18.31080055px"
        x={904.89795}
        y={1811.522}
        fontFamily="Moscow Sans"
        fill="#1d1d1b"
      >
        {
          "\u041D\u043E\u0432\u044B\u0435 \u0427\u0435\u0440\u0451\u043C\u0443\u0448\u043A\u0438"
        }
      </Text>
      <Text
        fontSize="18.31080055px"
        x={907.74902}
        y={1867.8459}
        fontFamily="Moscow Sans"
        fill="#1d1d1b"
      >
        {"\u041A\u0430\u043B\u0443\u0436\u0441\u043A\u0430\u044F"}
      </Text>
      <Text
        fontSize="18.31080055px"
        x={904.90045}
        y={1935.2085}
        fontFamily="Moscow Sans"
        fill="#1d1d1b"
      >
        {"\u0411\u0435\u043B\u044F\u0435\u0432\u043E"}
      </Text>
      <Text
        fontSize="18.31080055px"
        x={905.26465}
        y={1980.1499}
        fontFamily="Moscow Sans"
        fill="#1d1d1b"
      >
        {"\u041A\u043E\u043D\u044C\u043A\u043E\u0432\u043E"}
      </Text>
      <Text
        fontSize="18.31080055px"
        x={905.67535}
        y={2025.1011}
        fontFamily="Moscow Sans"
        fill="#1d1d1b"
      >
        {"\u0422\u0451\u043F\u043B\u044B\u0439 \u0421\u0442\u0430\u043D"}
      </Text>
      <Text
        fontSize="18.31080055px"
        x={905.59271}
        y={2070.0317}
        fontFamily="Moscow Sans"
        fill="#1d1d1b"
      >
        {"\u042F\u0441\u0435\u043D\u0435\u0432\u043E"}
      </Text>
      <Text
        transform="rotate(.126)"
        fontSize="18.31089973px"
        x={933.64178}
        y={2114.0559}
        fontFamily="Moscow Sans"
        fill="#1d1d1b"
      >
        {
          "\u041D\u043E\u0432\u043E\u044F\u0441\u0435\u043D\u0435\u0432\u0441\u043A\u0430\u044F"
        }
      </Text>
      <Text
        fontSize="18.3083992px"
        x={1228.5237}
        y={778.09619}
        fontFamily="Moscow Sans"
        fill="#1d1d1b"
      >
        {"\u0414\u043E\u0441\u0442\u043E\u0435\u0432\u0441\u043A\u0430\u044F"}
      </Text>
      <Text
        fontSize="18.3083992px"
        x={1219.6653}
        y={921.3606}
        fontFamily="Moscow Sans"
        fill="#1d1d1b"
      >
        {"\u0422\u0440\u0443\u0431\u043D\u0430\u044F"}
      </Text>
      <G fontSize={18.3084}>
        <Text
          transform="translate(209.06 306.377) translate(1108.223 626.915)"
          fontSize="18.3083992px"
          fontFamily="Moscow Sans"
          fill="#1d1d1b"
        >
          {"\u0421\u0440\u0435\u0442\u0435\u043D\u0441\u043A\u0438\u0439"}
        </Text>
        <Text
          transform="translate(209.06 306.377) translate(1125.307 648.927)"
          fontSize="18.3083992px"
          fontFamily="Moscow Sans"
          fill="#1d1d1b"
        >
          {"\u0431\u0443\u043B\u044C\u0432\u0430\u0440"}
        </Text>
      </G>
      <Text
        fontSize="18.3083992px"
        x={1401.8669}
        y={1071.9678}
        fontFamily="Moscow Sans"
        fill="#1d1d1b"
      >
        {"\u0427\u043A\u0430\u043B\u043E\u0432\u0441\u043A\u0430\u044F"}
      </Text>
      <Text
        fontSize="18.3083992px"
        x={1575.1042}
        y={1177.5845}
        fontFamily="Moscow Sans"
        fill="#1d1d1b"
      >
        {"\u0420\u0438\u043C\u0441\u043A\u0430\u044F"}
      </Text>
      <G fontSize={18.3089}>
        <Text
          x={1490.0015}
          y={1382.2725}
          fontSize="18.3089447px"
          fontFamily="Moscow Sans"
          fill="#1d1d1b"
          strokeWidth={1.00000238}
        >
          {
            "\u041A\u0440\u0435\u0441\u0442\u044C\u044F\u043D\u0441\u043A\u0430\u044F"
          }
        </Text>
        <Text
          x={1546.4015}
          y={1404.2723}
          fontSize="18.3089447px"
          fontFamily="Moscow Sans"
          fill="#1d1d1b"
          strokeWidth={1.00000238}
        >
          {"\u0417\u0430\u0441\u0442\u0430\u0432\u0430"}
        </Text>
      </G>
      <Text
        fontSize="18.3083992px"
        x={1634.5261}
        y={1490.515}
        fontFamily="Moscow Sans"
        fill="#1d1d1b"
      >
        {"\u0414\u0443\u0431\u0440\u043E\u0432\u043A\u0430"}
      </Text>
      <Path
        d="M1668.9983 1700.3901H1708.759656V1715.3901H1668.9983z"
        fillOpacity={0.65}
        fill="#fff"
      />
      <Text
        fontSize="18.31080055px"
        x={1632.116}
        y={1804.2563}
        fontFamily="Moscow Sans"
        fill="#1d1d1b"
      >
        {"\u0412\u043E\u043B\u0436\u0441\u043A\u0430\u044F"}
      </Text>
      <Text
        fontSize="18.31080055px"
        x={1632.116}
        y={1864.5308}
        fontFamily="Moscow Sans"
        fill="#1d1d1b"
      >
        {"\u041B\u044E\u0431\u043B\u0438\u043D\u043E"}
      </Text>
      <Text
        fontSize="18.31080055px"
        x={1632.116}
        y={1924.9292}
        fontFamily="Moscow Sans"
        fill="#1d1d1b"
      >
        {
          "\u0411\u0440\u0430\u0442\u0438\u0441\u043B\u0430\u0432\u0441\u043A\u0430\u044F"
        }
      </Text>
      <Text
        fontSize="18.31080055px"
        x={1632.116}
        y={1984.8091}
        fontFamily="Moscow Sans"
        fill="#1d1d1b"
      >
        {"\u041C\u0430\u0440\u044C\u0438\u043D\u043E"}
      </Text>
      <Text
        fontSize="18.31080055px"
        x={1632.116}
        y={2045.5806}
        fontFamily="Moscow Sans"
        fill="#1d1d1b"
      >
        {"\u0411\u043E\u0440\u0438\u0441\u043E\u0432\u043E"}
      </Text>
      <Text
        fontSize="18.31080055px"
        x={1632.116}
        y={2105.8784}
        fontFamily="Moscow Sans"
        fill="#1d1d1b"
      >
        {"\u0428\u0438\u043F\u0438\u043B\u043E\u0432\u0441\u043A\u0430\u044F"}
      </Text>
      <Text
        fontSize="18.31080055px"
        x={1631.5183}
        y={2165.9907}
        fontFamily="Moscow Sans"
        fill="#1d1d1b"
      >
        {"\u0417\u044F\u0431\u043B\u0438\u043A\u043E\u0432\u043E"}
      </Text>
      <Text
        fontSize="18.31080055px"
        x={789.35571}
        y={2163.3774}
        fontFamily="Moscow Sans"
        fill="#1d1d1b"
      >
        {
          "\u0411\u0438\u0442\u0446\u0435\u0432\u0441\u043A\u0438\u0439 \u043F\u0430\u0440\u043A"
        }
      </Text>
      <Text
        fontSize="18.31080055px"
        x={952.15265}
        y={2163.3774}
        fontFamily="Moscow Sans"
        fill="#1d1d1b"
      >
        {
          "\u041B\u0435\u0441\u043E\u043F\u0430\u0440\u043A\u043E\u0432\u0430\u044F"
        }
      </Text>
      <Text
        fontSize="18.31080055px"
        x={864.64301}
        y={2206.1353}
        fontFamily="Moscow Sans"
        fill="#1d1d1b"
      >
        {
          "\u0423\u043B\u0438\u0446\u0430 \u0421\u0442\u0430\u0440\u043E\u043A\u0430\u0447\u0430\u043B\u043E\u0432\u0441\u043A\u0430\u044F"
        }
      </Text>
      <G fontSize={18.3108}>
        <Text
          transform="translate(209.06 306.377) translate(795.304 1968.746)"
          fontSize="18.31080055px"
          fontFamily="Moscow Sans"
          fill="#1d1d1b"
        >
          {"\u0423\u043B\u0438\u0446\u0430"}
        </Text>
        <Text
          transform="translate(209.06 306.377) translate(795.304 1990.746)"
          fontSize="18.31080055px"
          fontFamily="Moscow Sans"
          fill="#1d1d1b"
        >
          {
            "\u0421\u043A\u043E\u0431\u0435\u043B\u0435\u0432\u0441\u043A\u0430\u044F"
          }
        </Text>
      </G>
      <G fontSize={18.3108}>
        <Text
          transform="translate(209.06 306.377) translate(689.22 1968.746)"
          fontSize="18.31080055px"
          fontFamily="Moscow Sans"
          fill="#1d1d1b"
        >
          {"\u0411\u0443\u043B\u044C\u0432\u0430\u0440"}
        </Text>
        <Text
          transform="translate(209.06 306.377) translate(689.22 1990.746)"
          fontSize="18.31080055px"
          fontFamily="Moscow Sans"
          fill="#1d1d1b"
        >
          {"\u0410\u0434\u043C\u0438\u0440\u0430\u043B\u0430"}
        </Text>
        <Text
          transform="translate(209.06 306.377) translate(689.22 2012.647)"
          fontSize="18.31080055px"
          fontFamily="Moscow Sans"
          fill="#1d1d1b"
        >
          {"\u0423\u0448\u0430\u043A\u043E\u0432\u0430"}
        </Text>
      </G>
      <G fontSize={18.3108}>
        <Text
          transform="translate(209.06 306.377) translate(568.979 1968.746)"
          fontSize="18.31080055px"
          fontFamily="Moscow Sans"
          fill="#1d1d1b"
        >
          {"\u0423\u043B\u0438\u0446\u0430"}
        </Text>
        <Text
          transform="translate(209.06 306.377) translate(568.979 1990.746)"
          fontSize="18.31080055px"
          fontFamily="Moscow Sans"
          fill="#1d1d1b"
        >
          {"\u0413\u043E\u0440\u0447\u0430\u043A\u043E\u0432\u0430"}
        </Text>
      </G>
      <G fontSize={18.3108}>
        <Text
          transform="translate(209.06 306.377) translate(455.454 1968.746)"
          fontSize="18.31080055px"
          fontFamily="Moscow Sans"
          fill="#1d1d1b"
        >
          {"\u0411\u0443\u043D\u0438\u043D\u0441\u043A\u0430\u044F"}
        </Text>
        <Text
          transform="translate(209.06 306.377) translate(455.454 1990.746)"
          fontSize="18.31080055px"
          fontFamily="Moscow Sans"
          fill="#1d1d1b"
        >
          {"\u0410\u043B\u043B\u0435\u044F"}
        </Text>
      </G>
      <Text
        y={1923.5443}
        x={1011.3381}
        fontSize="18.31080055px"
        fontFamily="Moscow Sans"
        fill="#1d1d1b"
      >
        {"\u041A\u0430\u0445\u043E\u0432\u0441\u043A\u0430\u044F"}
      </Text>
      <Text
        fontSize="18.31080055px"
        x={1190.8135}
        y={1924.0972}
        fontFamily="Moscow Sans"
        fill="#1d1d1b"
      >
        {"\u0412\u0430\u0440\u0448\u0430\u0432\u0441\u043A\u0430\u044F"}
      </Text>
      <G fontSize={18.2193}>
        <Text
          transform="translate(209.06 306.377) translate(230.201 1119.192)"
          fontSize="18.21929932px"
          fontFamily="Moscow Sans"
          fill="#1d1d1b"
        >
          {"\u041F\u0430\u0440\u043A"}
        </Text>
        <Text
          transform="translate(209.06 306.377) translate(230.201 1141.085)"
          fontSize="18.21929932px"
          fontFamily="Moscow Sans"
          fill="#1d1d1b"
        >
          {"\u041F\u043E\u0431\u0435\u0434\u044B"}
        </Text>
      </G>
      <Text
        transform="rotate(.011)"
        fontSize="18.3083992px"
        x={1200.1554}
        y={1368.5415}
        fontFamily="Moscow Sans"
        fill="#1d1d1b"
      >
        {
          "\u0422\u0440\u0435\u0442\u044C\u044F\u043A\u043E\u0432\u0441\u043A\u0430\u044F"
        }
      </Text>
      <Text
        fontSize="18.3083992px"
        x={1529.5916}
        y={1329.4812}
        fontFamily="Moscow Sans"
        fill="#1d1d1b"
      >
        {
          "\u041C\u0430\u0440\u043A\u0441\u0438\u0441\u0442\u0441\u043A\u0430\u044F"
        }
      </Text>
      <G fontSize={18.3084}>
        <Text
          x={1670.0092}
          y={1219.5042}
          fontSize="18.3083992px"
          fontFamily="Moscow Sans"
          fill="#1d1d1b"
        >
          {"\u041F\u043B\u043E\u0449\u0430\u0434\u044C"}
        </Text>
        <Text
          x={1670.0092}
          y={1241.5042}
          fontSize="18.3083992px"
          fontFamily="Moscow Sans"
          fill="#1d1d1b"
        >
          {"\u0418\u043B\u044C\u0438\u0447\u0430"}
        </Text>
      </G>
      <Text
        y={1032.1213}
        x={1936.5883}
        fontSize="18.3083992px"
        fontFamily="Moscow Sans"
        fill="#1d1d1b"
      >
        {"\u041F\u0435\u0440\u043E\u0432\u043E"}
      </Text>
      <G fontSize={18.3084}>
        <Text
          transform="translate(209.06 306.377) translate(652.79 1042.891)"
          fontSize="18.3083992px"
          fontFamily="Moscow Sans"
          fill="#1d1d1b"
        >
          {"\u041F\u0430\u0440\u043A"}
        </Text>
        <Text
          transform="translate(209.06 306.377) translate(618.99 1064.891)"
          fontSize="18.3083992px"
          fontFamily="Moscow Sans"
          fill="#1d1d1b"
        >
          {"\u043A\u0443\u043B\u044C\u0442\u0443\u0440\u044B"}
        </Text>
      </G>
      <Text
        fontSize="18.3083992px"
        x={775.1062}
        y={1200.6123}
        fontFamily="Moscow Sans"
        fill = {this.state.Branch5} onPress = {this.Handler5}
      >
        {"\u041A\u0438\u0435\u0432\u0441\u043A\u0430\u044F"}
      </Text>
      <Text
        fontSize="18.3083992px"
        x={882.97705}
        y={1090.3086}
        fontFamily="Moscow Sans"
        fill="#1d1d1b"
      >
        {
          "\u041A\u0440\u0430\u0441\u043D\u043E\u043F\u0440\u0435\u0441\u043D\u0435\u043D\u0441\u043A\u0430\u044F"
        }
      </Text>
      <Text
        transform="rotate(-.008)"
        fontSize="18.3083992px"
        x={810.46289}
        y={940.32788}
        fontFamily="Moscow Sans"
        fill="#1d1d1b"
      >
        {"\u0411\u0435\u043B\u043E\u0440\u0443\u0441\u0441\u043A\u0430\u044F"}
      </Text>
      <Text
        fontSize="18.3083992px"
        x={1108.0056}
        y={834.7251}
        fontFamily="Moscow Sans"
        fill="#1d1d1b"
      >
        {
          "\u041D\u043E\u0432\u043E\u0441\u043B\u043E\u0431\u043E\u0434\u0441\u043A\u0430\u044F"
        }
      </Text>
      <Path
        d="M1531.752 1969.7l-7.37.089-.359-94.785 7.37-.088z"
        fill = {this.state.d2} onPress = {this.Handler_d2}
        fillOpacity={1}
        strokeWidth={0.77542698}
      />
      <Path
        transform="matrix(-.99993 .01164 -.0039 -1 0 0)"
        d="M-1522.0212 -1987.4567H-1518.8530418999999V-1892.2445109999999H-1522.0212z"
        fill="#fff"
        fillOpacity={1}
        strokeWidth={0.51221192}
      />
      <Text
        fontSize="18.3083992px"
        x={1571.3009}
        y={1075.5654}
        fontFamily="Moscow Sans"
        fill="#1d1d1b"
      >
        {"\u041A\u0443\u0440\u0441\u043A\u0430\u044F"}
      </Text>
      <Text
        transform="rotate(.011)"
        fontSize="18.3083992px"
        x={1448.6842}
        y={1272.3013}
        fontFamily="Moscow Sans"
        fill="#1d1d1b"
      >
        {"\u0422\u0430\u0433\u0430\u043D\u0441\u043A\u0430\u044F"}
      </Text>
      <Text
        fontSize="18.3083992px"
        x={1362.1335}
        y={1490.7163}
        fontFamily="Moscow Sans"
        fill="#1d1d1b"
      >
        {"\u041F\u0430\u0432\u0435\u043B\u0435\u0446\u043A\u0430\u044F"}
      </Text>
      <Text
        fontSize="18.3083992px"
        x={1150.3933}
        y={1474.3687}
        fontFamily="Moscow Sans"
        fill="#1d1d1b"
      >
        {
          "\u0414\u043E\u0431\u0440\u044B\u043D\u0438\u043D\u0441\u043A\u0430\u044F"
        }
      </Text>
      <Text
        fontSize="18.3083992px"
        x={893.78955}
        y={1448.9856}
        fontFamily="Moscow Sans"
        fill="#1d1d1b"
      >
        {"\u041E\u043A\u0442\u044F\u0431\u0440\u044C\u0441\u043A\u0430\u044F"}
      </Text>
      <Text
        fontSize="18.3083992px"
        x={702.68896}
        y={1820.0942}
        fontFamily="Moscow Sans"
        fill="#1d1d1b"
      >
        {"\u0422\u0440\u043E\u043F\u0430\u0440\u0451\u0432\u043E"}
      </Text>
      <Text
        transform="rotate(.012)"
        fontSize="18.31080055px"
        x={1363.255}
        y={1698.9749}
        fontFamily="Moscow Sans"
        fill="#1d1d1b"
      >
        {"\u0422\u0435\u0445\u043D\u043E\u043F\u0430\u0440\u043A"}
      </Text>
      <Text
        fontSize="18.3083992px"
        x={702.68896}
        y={1881.7075}
        fontFamily="Moscow Sans"
        fill="#1d1d1b"
      >
        {"\u0420\u0443\u043C\u044F\u043D\u0446\u0435\u0432\u043E"}
      </Text>
      <Text
        fontSize="18.3083992px"
        x={702.68896}
        y={1924.8198}
        fontFamily="Moscow Sans"
        fill="#1d1d1b"
      >
        {"\u0421\u0430\u043B\u0430\u0440\u044C\u0435\u0432\u043E"}
      </Text>
      <Path
        d="M863.13318 629.91364H930.312845V648.91364H863.13318z"
        fillOpacity={0.65}
        fill="#fff"
      />
      <Text
        fontSize="18.3083992px"
        x={1053.11151}
        y={606.60815}
        fontFamily="Moscow Sans"
        fill="#1d1d1b"
      >
        {
          "\u0422\u0438\u043C\u0438\u0440\u044F\u0437\u0435\u0432\u0441\u043A\u0430\u044F"
        }
      </Text>
      <Text
        y={564.32568}
        x={1215.1844}
        fontSize="9.15439987px"
        fontFamily="Moscow Sans"
        fill="#1d1d1b"
      >
        {"\u0422\u0435\u043B\u0435\u0446\u0435\u043D\u0442\u0440"}
      </Text>
      <G fontSize={9.1544}>
        <Text
          x={1282.0179}
          y={552.68469}
          fontSize="9.15439987px"
          fontFamily="Moscow Sans"
          fill="#1d1d1b"
        >
          {
            "\u0423\u043B. \u0410\u043A\u0430\u0434\u0435\u043C\u0438\u043A\u0430"
          }
        </Text>
        <Text
          x={1282.0179}
          y={563.68469}
          fontSize="9.15439987px"
          fontFamily="Moscow Sans"
          fill="#1d1d1b"
        >
          {"\u041A\u043E\u0440\u043E\u043B\u0451\u0432\u0430"}
        </Text>
      </G>
      <G fontSize={9.1544}>
        <Text
          x={1353.0769}
          y={554.36963}
          fontSize="9.15439987px"
          fontFamily="Moscow Sans"
          fill="#1d1d1b"
        >
          {"\u0412\u044B\u0441\u0442\u0430\u0432\u043E\u0447\u043D\u044B\u0439"}
        </Text>
        <Text
          x={1385.9769}
          y={565.36963}
          fontSize="9.15439987px"
          fontFamily="Moscow Sans"
          fill="#1d1d1b"
        >
          {"\u0446\u0435\u043D\u0442\u0440"}
        </Text>
      </G>
      <G fontSize={9.1544}>
        <Text
          y={537.95642}
          x={1473.8488}
          fontSize="9.15439987px"
          fontFamily="Moscow Sans"
          fill="#1d1d1b"
        >
          {"\u0423\u043B. \u0421\u0435\u0440\u0433\u0435\u044F"}
        </Text>
        <Text
          y={548.95642}
          x={1473.8488}
          fontSize="9.15439987px"
          fontFamily="Moscow Sans"
          fill="#1d1d1b"
        >
          {"\u042D\u0439\u0437\u0435\u043D\u0448\u0442\u0435\u0439\u043D\u0430"}
        </Text>
      </G>
      <Text
        y={542.90717}
        x={1198.9542}
        fontSize="18.3083992px"
        fontFamily="Moscow Sans"
        fill="#1d1d1b"
      >
        {
          "\u0424\u043E\u043D\u0432\u0438\u0437\u0438\u043D\u0441\u043A\u0430\u044F"
        }
      </Text>
      <Text
        x={1228.3945}
        y={610.09528}
        fontSize="18.3083992px"
        fontFamily="Moscow Sans"
        fill="#1d1d1b"
      >
        {"\u0411\u0443\u0442\u044B\u0440\u0441\u043A\u0430\u044F"}
      </Text>
      <Text
        fontSize="18.3083992px"
        x={1474.3235}
        y={415.021}
        fontFamily="Moscow Sans"
        fill="#1d1d1b"
      >
        {
          "\u0411\u043E\u0442\u0430\u043D\u0438\u0447\u0435\u0441\u043A\u0438\u0439 \u0441\u0430\u0434"
        }
      </Text>
      <Text
        y={367.91406}
        x={854.94501}
        fontSize="18.3083992px"
        fontFamily="Moscow Sans"
        fill="#1d1d1b"
      >
        {
          "\u0412\u043E\u0434\u043D\u044B\u0439 \u0441\u0442\u0430\u0434\u0438\u043E\u043D"
        }
      </Text>
      <Text
        fontSize="18.3083992px"
        x={895.80505}
        y={433.71503}
        fontFamily="Moscow Sans"
        fill="#1d1d1b"
      >
        {"\u041B\u0438\u0445\u043E\u0431\u043E\u0440\u044B"}
      </Text>
      <Text
        fontSize="18.3083992px"
        x={861.94604}
        y={528.15387}
        fontFamily="Moscow Sans"
        fill="#1d1d1b"
      >
        {"\u0411\u0430\u043B\u0442\u0438\u0439\u0441\u043A\u0430\u044F"}
      </Text>
      <Text
        fontSize="18.3083992px"
        x={750.97528}
        y={610.49683}
        fontFamily="Moscow Sans"
        fill="#1d1d1b"
      >
        {"\u0421\u0442\u0440\u0435\u0448\u043D\u0435\u0432\u043E"}
      </Text>
      <Text
        fontSize="18.3083992px"
        x={705.01501}
        y={690.89282}
        fontFamily="Moscow Sans"
        fill="#1d1d1b"
      >
        {
          "\u041F\u0430\u043D\u0444\u0438\u043B\u043E\u0432\u0441\u043A\u0430\u044F"
        }
      </Text>
      <Text
        fontSize="18.3083992px"
        y={770.1344}
        x={666.42596}
        fontFamily="Moscow Sans"
        fill="#1d1d1b"
      >
        {"\u0417\u043E\u0440\u0433\u0435"}
      </Text>
      <Text
        fontSize="18.3083992px"
        x={500.25415}
        y={932.7887}
        fontFamily="Moscow Sans"
        fill="#1d1d1b"
      >
        {"\u0425\u043E\u0440\u043E\u0448\u0451\u0432\u043E"}
      </Text>
      <G fontSize={18.3084}>
        <Text
          x={508.60226}
          y={1122.5978}
          fontSize="18.3083992px"
          fontFamily="Moscow Sans"
          fill="#1d1d1b"
        >
          {"\u0414\u0435\u043B\u043E\u0432\u043E\u0439"}
        </Text>
        <Text
          x={508.60226}
          y={1144.5978}
          fontSize="18.3083992px"
          fontFamily="Moscow Sans"
          fill="#1d1d1b"
        >
          {"\u0446\u0435\u043D\u0442\u0440 \u041C\u0426\u041A"}
        </Text>
      </G>
      <Text
        fontSize="18.3083992px"
        x={655.36865}
        y={1390.5402}
        fontFamily="Moscow Sans"
        fill="#1d1d1b"
      >
        {"\u041B\u0443\u0436\u043D\u0438\u043A\u0438"}
      </Text>
      <Text
        fontSize="18.3083992px"
        x={795.24438}
        y={1528.5516}
        fontFamily="Moscow Sans"
        fill="#1d1d1b"
      >
        {"\u041F\u043B. \u0413\u0430\u0433\u0430\u0440\u0438\u043D\u0430"}
      </Text>
      <Text
        fontSize="18.3083992px"
        x={1000.6523}
        y={1599.9337}
        fontFamily="Moscow Sans"
        fill="#1d1d1b"
      >
        {"\u041A\u0440\u044B\u043C\u0441\u043A\u0430\u044F"}
      </Text>
      <G fontSize={18.3084}>
        <Text
          x={1173.2111}
          y={1623.5695}
          fontSize="18.3083992px"
          fontFamily="Moscow Sans"
          fill="#1d1d1b"
        >
          {"\u0412\u0435\u0440\u0445\u043D\u0438\u0435"}
        </Text>
        <Text
          x={1181.411}
          y={1645.5695}
          fontSize="18.3083992px"
          fontFamily="Moscow Sans"
          fill="#1d1d1b"
        >
          {"\u041A\u043E\u0442\u043B\u044B"}
        </Text>
      </G>
      <Text
        fontSize="18.3083992px"
        x={1293.8081}
        y={1608.0776}
        fontFamily="Moscow Sans"
        fill="#1d1d1b"
      >
        {"\u0417\u0418\u041B"}
      </Text>
      <Text
        fontSize="18.3083992px"
        x={1492.6167}
        y={1472.0974}
        fontFamily="Moscow Sans"
        fill="#1d1d1b"
      >
        {"\u0414\u0443\u0431\u0440\u043E\u0432\u043A\u0430"}
      </Text>
      <Path
        d="M824.033 476.016a2 2 0 11-3.957.582 2 2 0 013.957-.582zm4.418-4.4a2 2 0 11-3.958.581 2 2 0 013.958-.582zm-9.305 8.977a2 2 0 11-3.958.582 2 2 0 013.958-.582zm-18.431 18.58a2 2 0 11-3.958.582 2 2 0 013.958-.582zm4.417-4.4a2 2 0 11-3.958.582 2 2 0 013.958-.582zm4.841-4.78a2 2 0 11-3.957.583 2 2 0 013.957-.583zm4.604-4.558a2 2 0 11-3.958.582 2 2 0 013.958-.582zm-18.428 18.155a2 2 0 11-3.958.582 2 2 0 013.957-.582zm-18.432 18.58a2 2 0 11-3.957.582 2 2 0 013.957-.582zm4.418-4.4a2 2 0 11-3.958.582 2 2 0 013.958-.582zm4.841-4.78a2 2 0 11-3.957.583 2 2 0 013.957-.583zm4.604-4.558a2 2 0 11-3.958.582 2 2 0 013.958-.582zM773.133 526.8a2 2 0 11-3.958.582 2 2 0 013.958-.582zm-18.431 18.58a2 2 0 11-3.958.583 2 2 0 013.958-.582zm4.418-4.4a2 2 0 11-3.958.582 2 2 0 013.958-.581zm4.84-4.78a2 2 0 11-3.957.583 2 2 0 013.957-.582zm4.604-4.558a2 2 0 11-3.958.582 2 2 0 013.958-.582z"
        opacity={1}
        fill="#858585"
        fillOpacity={0.45882353}
        stroke="none"
        strokeWidth={1.04900002}
        strokeMiterlimit={4}
        strokeDasharray="none"
        strokeOpacity={1}
      />
      <Text
        fontSize="18.3083992px"
        x={1800.0023}
        y={1147.4617}
        fontFamily="Moscow Sans"
        fill="#1d1d1b"
      >
        {"\u0410\u043D\u0434\u0440\u043E\u043D\u043E\u0432\u043A\u0430"}
      </Text>
      <Text
        y={1105.2001}
        x={1817.0394}
        fontSize="18.3083992px"
        fontFamily="Moscow Sans"
        fill="#1d1d1b"
      >
        {
          "\u0428\u043E\u0441\u0441\u0435 \u042D\u043D\u0442\u0443\u0437\u0438\u0430\u0441\u0442\u043E\u0432"
        }
      </Text>
      <Text
        y={1105.2001}
        x={1817.0394}
        fontSize="18.3083992px"
        fontFamily="Moscow Sans"
        fill="#1d1d1b"
      >
        {
          "\u0428\u043E\u0441\u0441\u0435 \u042D\u043D\u0442\u0443\u0437\u0438\u0430\u0441\u0442\u043E\u0432"
        }
      </Text>
      <Path
        d="M1783.5249 944.9743H1826.5249V962.9743H1783.5249z"
        fill="#fff"
        fillOpacity={0.65}
      />
      <Text
        y={959.78534}
        x={1750.1353}
        fontSize="18.3083992px"
        fontFamily="Moscow Sans"
        fill="#1d1d1b"
      >
        {
          "\u0421\u043E\u043A\u043E\u043B\u0438\u043D\u0430\u044F \u0413\u043E\u0440\u0430"
        }
      </Text>
      <Text
        y={895.94}
        x={1815.1272}
        fontSize="18.3083992px"
        fontFamily="Moscow Sans"
        fill="#1d1d1b"
      >
        {"\u0418\u0437\u043C\u0430\u0439\u043B\u043E\u0432\u043E"}
      </Text>
      <Path
        d="M1709.3025 638.59784H1748.291655V657.59784H1709.3025z"
        fill="#fff"
        fillOpacity={0.65}
      />
      <Text
        y={654.55634}
        x={1710.5563}
        fontSize="18.3083992px"
        fontFamily="Moscow Sans"
        fill="#1d1d1b"
      >
        {"\u041B\u043E\u043A\u043E\u043C\u043E\u0442\u0438\u0432"}
      </Text>
      <Text
        y={550.93372}
        x={1738.2346}
        fontSize="18.3083992px"
        fontFamily="Moscow Sans"
        fill="#1d1d1b"
      >
        {
          "\u0411\u0443\u043B\u044C\u0432\u0430\u0440 \u0420\u043E\u043A\u043E\u0441\u0441\u043E\u0432\u0441\u043A\u043E\u0433\u043E"
        }
      </Text>
      <Text
        y={550.93372}
        x={1738.2346}
        fontSize="18.3083992px"
        fontFamily="Moscow Sans"
        fill="#1d1d1b"
      >
        {
          "\u0411\u0443\u043B\u044C\u0432\u0430\u0440 \u0420\u043E\u043A\u043E\u0441\u0441\u043E\u0432\u0441\u043A\u043E\u0433\u043E"
        }
      </Text>
      <Text
        y={531.00598}
        x={1590.1534}
        fontSize="18.3083992px"
        fontFamily="Moscow Sans"
        fill="#1d1d1b"
      >
        {
          "\u0411\u0435\u043B\u043E\u043A\u0430\u043C\u0435\u043D\u043D\u0430\u044F"
        }
      </Text>
      <Text
        y={476.3024}
        x={1513.2872}
        fontSize="18.3083992px"
        fontFamily="Moscow Sans"
        fill="#1d1d1b"
      >
        {"\u0420\u043E\u0441\u0442\u043E\u043A\u0438\u043D\u043E"}
      </Text>
      <Text
        transform="rotate(-.008)"
        fontSize="14.85060024px"
        x={590.24182}
        y={987.0481}
        fontFamily="Moscow Sans"
        fill="#1d1d1b"
      >
        {"\u0425\u043E\u0440\u043E\u0448\u0451\u0432\u0441\u043A\u0430\u044F"}
      </Text>
      <Text
        transform="rotate(-.008)"
        fontSize="14.85060024px"
        x={590.24182}
        y={987.0481}
        fontFamily="Moscow Sans"
        fill="#1d1d1b"
      >
        {"\u0425\u043E\u0440\u043E\u0448\u0451\u0432\u0441\u043A\u0430\u044F"}
      </Text>
      <Text
        transform="rotate(-.008)"
        fontSize="17.85059929px"
        x={809.54828}
        y={904.60596}
        fontFamily="Moscow Sans"
        fill="#1d1d1b"
      >
        {"\u0426\u0421\u041A\u0410"}
      </Text>
      <Text
        transform="rotate(-.008)"
        fontSize="17.85059929px"
        x={809.54828}
        y={904.60596}
        fontFamily="Moscow Sans"
        fill="#1d1d1b"
      >
        {"\u0426\u0421\u041A\u0410"}
      </Text>
      <Text
        transform="rotate(.049)"
        fontSize="18.3083992px"
        x={679.1366}
        y={924.19806}
        fontFamily="Moscow Sans"
        fill="#1d1d1b"
      >
        {
          "\u041F\u043E\u043B\u0435\u0436\u0430\u0435\u0432\u0441\u043A\u0430\u044F"
        }
      </Text>
      <Text
        y={1305.4724}
        x={527.35669}
        fontSize="18.3083992px"
        fontFamily="Moscow Sans"
        fill="#1d1d1b"
      >
        {"\u041A\u0443\u0442\u0443\u0437\u043E\u0432\u0441\u043A\u0430\u044F"}
      </Text>
      <Text
        y={262.01474}
        x={1473.3466}
        fontSize="18.3083992px"
        transform="rotate(.063)"
        fontFamily="Moscow Sans"
        fill="#1d1d1b"
      >
        {"\u041C\u0435\u0434\u0432\u0435\u0434\u043A\u043E\u0432\u043E"}
      </Text>
      <Circle cx={1385.6593} cy={1137.4771} r={2.3} fill = {this.state.Branch7} onPress = {this.Handler7} />
      <Circle cx={1413.1593} cy={1137.4771} r={2.3} fill = {this.state.Branch6} onPress = {this.Handler6} />
      <Circle cx={518.45935} cy={1418.5769} r={2.3} fill = {this.state.Branch3} onPress = {this.Handler3} />
      <Circle cx={537.85931} cy={1399.2769} r={2.3} fill = {this.state.Branch8} onPress = {this.Handler8} />
      <Circle cx={1347.4594} cy={1880.877} r={2.3} fill="#89cdcf" />
      <Circle cx={1366.8594} cy={1900.377} r={2.3} fill={this.state.greenBranch}
        onPress={this.greenHandler} id = "green-branch"/>
      <Circle cx={1316.0593} cy={1339.177} r={2.3} fill = {this.state.Branch8} onPress = {this.Handler8} />
      <Circle cx={1334.5593} cy={1357.7769} r={2.3} fill = {this.state.Branch6} onPress = {this.Handler6} />
      <Path
        d="M1316.3594 568.177H1320.3594V575.177H1316.3594z"
        fill = {this.state.Branch3} onPress = {this.Handler3}
      />
      <Path
        d="M1241.3594 568.177H1245.3594V575.177H1241.3594z"
        fill = {this.state.Branch3} onPress = {this.Handler3}
      />
      <G transform="translate(256.894 305.991)">
        <Path
          d="M622.7 653.7l-3.3-9.9H603v9.8l19.7.1zm-6.6-8.7h2.8l2 6.9h-4.8V645zm-6 0h4.8v3.7h-4.8V645zm-6 0h4.8v3.7h-4.8V645z"
          fill="#a8a8a8"
        />
        <Path
          d="M602.90002 654.29999H622.700019V655.99999H602.90002z"
          fill="#a8a8a8"
        />
      </G>
      <G transform="translate(216.973 163.189)">
        <Path
          d="M604.2 969.4l-3.2-9.9h-16.4v9.8zm-6.6-8.6h2.8l2 6.9h-4.8zm-6 0h4.8v3.7h-4.8zm-6 0h4.8v3.7h-4.8z"
          fill="#a8a8a8"
        />
        <Path
          d="M584.40002 970.09998H604.200019V971.79998H584.40002z"
          fill="#a8a8a8"
        />
      </G>
      <G transform="translate(209.06 306.377)">
        <Path
          d="M1174.4 1203.8l-3.3-9.9h-16.4v9.8l19.7.1zm-6.6-8.6h2.8l2 6.9h-4.8v-6.9zm-6 0h4.8v3.7h-4.8v-3.7zm-6 0h4.8v3.7h-4.8v-3.7z"
          fill="#a8a8a8"
        />
        <Path d="M1154.6 1204.5H1174.399999V1206.2H1154.6z" fill="#a8a8a8" />
      </G>
      <G transform="translate(233.06 306.377)">
        <Path
          d="M1378.5 786.5l-3.3-9.9h-16.4v9.8zm-6.6-8.6h2.8l2 6.9h-4.8zm-6 0h4.8v3.7h-4.8zm-6 0h4.8v3.7h-4.8z"
          fill="#a8a8a8"
        />
        <Path
          d="M1358.7 787.20001H1378.4999990000001V788.9000100000001H1358.7z"
          fill="#a8a8a8"
        />
      </G>
      <G transform="translate(241.438 278.771)">
        <Path
          d="M1225.2 479.2l-3.3-9.9h-16.4v9.8zm-6.6-8.7h2.8l2 6.9h-4.8zm-6 0h4.8v3.7h-4.8zm-6 0h4.8v3.7h-4.8z"
          fill="#a8a8a8"
        />
        <Path
          d="M1205.4 479.79999H1225.1999990000002V481.49998999999997H1205.4z"
          fill="#a8a8a8"
        />
      </G>
      <G transform="translate(187.213 344.437)">
        <Path
          d="M863.2 486.2l-3.3-9.9h-16.4v9.8l19.7.1zm-6.6-8.7h2.8l2 6.9h-4.8v-6.9zm-6 0h4.8v3.7h-4.8v-3.7zm-6 0h4.8v3.7h-4.8v-3.7z"
          fill="#a8a8a8"
        />
        <Path
          d="M843.40002 486.79999H863.200019V488.49998999999997H843.40002z"
          fill="#a8a8a8"
        />
      </G>
      <G transform="translate(209.06 306.377)">
        <Path
          d="M1317.2 635.2l-3.3-9.9h-16.4v9.8l19.7.1zm-6.6-8.7h2.8l2 6.9h-4.8v-6.9zm-6 0h4.8v3.7h-4.8v-3.7zm-6 0h4.8v3.7h-4.8v-3.7z"
          fill="#a8a8a8"
        />
        <Path
          d="M1297.4 635.79999H1317.1999990000002V637.49999H1297.4z"
          fill="#a8a8a8"
        />
      </G>
      <G transform="translate(209.06 306.377)">
        <Circle cx={441.5} cy={1151.5} r={12.8} fill="#e32213" />
        <Circle cx={441.5} cy={1151.5} r={11.6} fill="#fff" />
        <Circle cx={441.5} cy={1151.5} r={10} fill="#e32213" />
        <Circle cx={441.5} cy={1151.5} r={8.6999998} fill="#fff" />
        <Path d="M435.2 1154.6h1.7v-5.6h-1.5v-1.4h3.1v7h1.9l-.5 1.4h-4.6v-1.4h-.1zM444.8 1154.1h-3.9v-1.2l2.3-5.3h1.7l-2.2 5.2h2.2v-2.2h1.5v2.2h1.3l-.5 1.3h-.8v1.9h-1.5v-1.9h-.1z" />
      </G>
      <G transform="translate(257.915 228.908)">
        <Circle r={12.8} cy={226.39999} cx={1094.1} fill="#e32213" />
        <Circle r={11.6} cy={226.39999} cx={1094.1} fill="#fff" />
        <Circle r={10} cy={226.39999} cx={1094.1} fill="#e32213" />
        <Circle r={8.6999998} cy={226.39999} cx={1094.1} fill="#fff" />
        <Path d="M1087.9 229.5h1.7v-5.6h-1.5v-1.4h3.1v7h1.9l-.5 1.4h-4.6zM1097.5 229h-3.9v-1.2l2.3-5.3h1.7l-2.2 5.2h2.2v-2.2h1.5v2.2h1.3l-.5 1.3h-.8v1.9h-1.5z" />
      </G>
      <G transform="translate(281.07 243.575)">
        <Circle cx={1226.3} cy={318.79999} r={7.8000002} fill="#b9c7e7" />
        <Circle cx={1226.3} cy={318.79999} r={6.8000002} fill="#0072b9" />
        <Path
          d="M1221.7 320.8h1.3v-4.4h-1.2v-1.1h2.4v5.4h1.5l-.4 1.1h-3.6zM1226.2 321.1l.8-.8c.4.4 1 .6 1.5.6.7 0 1.2-.4 1.2-1 0-.7-.7-1-1.4-1-.2 0-.4 0-.6.1v-1l1.6-1.6h-2.7v-1.1h4.2v.8l-1.7 1.7c.9.1 1.8.8 1.8 2s-1.1 2.1-2.4 2.1c-.9.1-1.7-.2-2.3-.8z"
          fill="#fff"
        />
      </G>
      <G transform="translate(209.06 306.377)">
        <Circle cx={448.29999} cy={1939.8} r={11.7} fill = {this.state.Branch12} onPress = {this.Handler12} />
        <Path
          d="M440.1 1944.2h2.4v-8h-2.2v-2h4.4v9.9h2.7l-.7 2h-6.6v-1.9zM448.7 1946.2v-1.7l3-3c2.2-2.2 2.7-2.8 2.7-3.7 0-1.1-.9-1.7-2-1.7-1 0-2 .5-2.8 1.2l-1.4-1.4c1.1-1.1 2.7-1.8 4.3-1.8 2.7 0 4.1 1.6 4.1 3.5 0 1.6-.8 2.7-2.9 4.7l-2.1 2h5.5l-.7 2-7.7-.1z"
          fill="#fff"
        />
      </G>
      <G transform="translate(251.06 306.377)">
        <Circle cx={1342.3} cy={1844.2} r={11.7} fill = {this.state.limeBranch} onPress = {this.limeHandler} />
        <Path
          d="M1333.8 1847.6h2.4v-8h-2.2v-2h4.4v9.9h2.7l-.7 2h-6.6v-1.9zM1341.6 1843.6c0-3.8 1.7-6.2 4.6-6.2 2.9 0 4.6 2.3 4.6 6.2 0 3.8-1.7 6.2-4.6 6.2-2.9 0-4.6-2.4-4.6-6.2zm7 0c0-2.5-.8-4.1-2.4-4.1-1.6 0-2.4 1.6-2.4 4.1 0 2.5.8 4.1 2.4 4.1 1.7.1 2.4-1.5 2.4-4.1z"
          fill="#fff"
        />
      </G>
      <G transform="translate(298.239 159.503)">
        <Circle cx={813.29999} cy={77.199997} r={11.7} fill = {this.state.limeBranch} onPress = {this.limeHandler} />
        <Path
          d="M804.8 80.6h2.4v-8H805v-2h4.4v9.9h2.7l-.7 2h-6.6zM812.6 76.6c0-3.8 1.7-6.2 4.6-6.2 2.9 0 4.6 2.3 4.6 6.2 0 3.8-1.7 6.2-4.6 6.2-2.9 0-4.6-2.4-4.6-6.2zm7 0c0-2.5-.8-4.1-2.4-4.1-1.6 0-2.4 1.6-2.4 4.1 0 2.5.8 4.1 2.4 4.1 1.7.1 2.4-1.5 2.4-4.1z"
          fill="#fff"
        />
      </G>
      <G transform="matrix(1 0 0 1 335.383 112.009)">
        <Circle r={11.7} cy={64.599998} cx={958.79999} fill = {this.state.Branch9} onPress = {this.Handler9} />
        <Path
          d="M963.5 62.4c0 1.8-.7 3.2-2.6 5.6l-1.7 2.2-2.5-.2 3.6-4.2c-.6.3-1.2.4-1.8.4-1.9 0-3.9-1.5-3.9-4 0-2.4 1.8-4.3 4.5-4.3 2.8 0 4.4 2.2 4.4 4.5zm-6.7-.4c0 1.2.9 2.2 2.1 2.2 1.2 0 2.1-1 2.1-2.2 0-1.2-.9-2.2-2.1-2.2-1.2 0-2.1 1-2.1 2.2z"
          fill="#fff"
        />
      </G>
      <G transform="translate(209.06 306.377)">
        <Circle cx={911.79999} cy={1922.6} r={11.7} fill = {this.state.Branch9} onPress = {this.Handler9} />
        <Path
          d="M916.5 1920.4c0 1.8-.7 3.2-2.6 5.6l-1.7 2.2-2.5-.2 3.6-4.2c-.6.3-1.2.4-1.8.4-1.9 0-3.9-1.5-3.9-4 0-2.4 1.8-4.3 4.5-4.3 2.8 0 4.4 2.2 4.4 4.5zm-6.7-.4c0 1.2.9 2.2 2.1 2.2 1.2 0 2.1-1 2.1-2.2 0-1.2-.9-2.2-2.1-2.2-1.2 0-2.1 1-2.1 2.2z"
          fill="#fff"
        />
      </G>
      <G transform="translate(237.613 216.176)">
        <Circle r={11.7} cy={658.5} cx={1693.3} fill="#ffcd1c" />
        <Path d="M1697.8 655.1c0 1.1-.6 2.2-1.8 2.6 1.1.4 2 1.4 2 2.8 0 2.1-1.9 3.5-4.6 3.5-2.7 0-4.6-1.4-4.6-3.5 0-1.4 1-2.4 2-2.8-1.1-.4-1.8-1.5-1.8-2.6 0-1.8 1.6-3.3 4.3-3.3 2.7 0 4.5 1.5 4.5 3.3zm-6.5 5.3c0 .9.8 1.7 2.2 1.7 1.4 0 2.2-.8 2.2-1.7 0-.9-.8-1.7-2.2-1.7-1.4 0-2.2.9-2.2 1.7zm4.3-5.2c0-.8-.7-1.6-2-1.6-1.4 0-2 .7-2 1.6 0 .8.7 1.6 2 1.6s2-.7 2-1.6z" />
      </G>
      <G transform="translate(209.06 140.377)">
        <Circle cx={429.29999} cy={137} r={11.7} fill="#943e90" />
        <Path d="M430.8 132.5h-5.6v-2h8.2v1.6l-4.2 10.3h-2.5z" fill="#fff" />
      </G>
      <G transform="translate(251.06 182.377)">
        <Circle r={11.7} cy={54.799999} cx={1208.4} fill="#f07e23" />
        <Path
          d="M1204.1 55.9c0-1.8.7-3.2 2.6-5.6l1.7-2.2 2.5.2-3.6 4.2c.6-.3 1.2-.4 1.8-.4 1.9 0 3.9 1.5 3.9 4 0 2.4-1.8 4.3-4.5 4.3-2.8 0-4.4-2.3-4.4-4.5zm6.7.3c0-1.2-.9-2.2-2.1-2.2-1.2 0-2.1 1-2.1 2.2 0 1.2.9 2.2 2.1 2.2 1.2 0 2.1-1 2.1-2.2z"
          fill="#fff"
        />
      </G>
      <G transform="translate(209.06 306.377)">
        <Circle cx={673.90002} cy={1804.7} r={11.7} fill="#f07e23" />
        <Path
          d="M669.4 1805.8c0-1.8.7-3.2 2.6-5.6l1.7-2.2 2.5.2-3.6 4.2c.6-.3 1.2-.4 1.8-.4 1.9 0 3.9 1.5 3.9 4 0 2.4-1.8 4.3-4.5 4.3-2.8 0-4.4-2.2-4.4-4.5zm6.7.4c0-1.2-.9-2.2-2.1-2.2-1.2 0-2.1 1-2.1 2.2 0 1.2.9 2.2 2.1 2.2 1.2 0 2.1-1 2.1-2.2z"
          fill="#fff"
        />
      </G>
      <G transform="translate(209.06 306.377)">
        <Circle cx={1268.9} cy={1104.3} r={11.7} fill="#915133" />
        <Path
          d="M1264.5 1108.2l1.5-1.5c.8.8 1.8 1.1 2.7 1.1 1.3 0 2.3-.7 2.3-2 0-1-.8-1.9-2.2-1.9-.6 0-1.3.2-1.9.6l-1.8-.2.3-6.7h7.5l-.7 2h-4.9l-.2 2.7c.6-.3 1.4-.5 2-.5 2 0 4 1.4 4 3.8 0 2.2-1.7 4-4.6 4-1.5.3-3-.3-4-1.4z"
          fill="#fff"
        />
      </G>
      <G transform="translate(209.06 306.377)">
        <Circle cx={809.29999} cy={583.79999} r={11.7} fill="#915133" />
        <Path
          d="M804.8 587.7l1.5-1.5c.8.8 1.8 1.1 2.7 1.1 1.3 0 2.3-.7 2.3-2 0-1-.8-1.9-2.2-1.9-.6 0-1.3.2-1.9.6l-1.8-.2.3-6.7h7.5l-.7 2h-4.9l-.2 2.7c.6-.3 1.4-.5 2-.5 2 0 4 1.4 4 3.8 0 2.2-1.7 4-4.6 4-1.4.3-2.9-.3-4-1.4z"
          fill="#fff"
        />
      </G>
      <G transform="translate(153.095 512.224)">
        <Circle r={11.7} cy={718.29999} cx={268.79999} fill="#1ebcef" />
        <Path
          d="M269.8 721.1h-5.6v-1.7l3.2-7.5h2.4l-3.1 7.3h3.2V716h2.2v3.2h1.9l-.7 1.9H272v2.7h-2.2z"
          fill="#fff"
        />
      </G>
      <G transform="translate(271.83 264.583)">
        <Circle r={11.7} cy={304.5} cx={1595.8} fill="#0072ba" />
        <Path
          d="M1591.3 308.4l1.5-1.5c.8.8 1.8 1.1 2.7 1.1 1.3 0 2.2-.8 2.2-1.8 0-1.3-1.2-1.9-2.5-1.9-.4 0-.8.1-1.2.2v-1.6l2.9-2.9h-4.9v-2h7.8v1.5l-3 3c1.6.2 3.3 1.5 3.3 3.6 0 2.3-2.1 3.9-4.5 3.9-1.7.1-3.2-.5-4.3-1.6z"
          fill="#fff"
        />
      </G>
      <G transform="translate(209.06 -77.623)">
        <Circle r={11.7} cy={305.5} cx={217.3} fill="#0072ba" />
        <Path
          d="M212.8 309.4l1.5-1.5c.8.8 1.8 1.1 2.7 1.1 1.3 0 2.2-.8 2.2-1.8 0-1.3-1.2-1.9-2.5-1.9-.4 0-.8.1-1.2.2v-1.6l2.9-2.9h-4.9v-2h7.8v1.5l-3 3c1.6.2 3.3 1.5 3.3 3.6 0 2.3-2.1 3.9-4.5 3.9-1.7.1-3.2-.5-4.3-1.6z"
          fill="#fff"
        />
      </G>
      <G transform="translate(209.06 306.377)">
        <Circle r={11.7} cy={1881.8} cx={1514.7} fill={this.state.greenBranch}
        onPress={this.greenHandler} id = "green-branch" />
        <Path
          d="M1510.7 1887.2v-1.7l3-3c2.2-2.2 2.7-2.8 2.7-3.7 0-1.1-.9-1.7-2-1.7-1 0-2 .5-2.8 1.2l-1.4-1.4c1.1-1.1 2.7-1.8 4.3-1.8 2.7 0 4.1 1.6 4.1 3.5 0 1.6-.8 2.7-2.9 4.7l-2.1 2h5.5l-.7 2-7.7-.1z"
          fill="#fff"
        />
      </G>
      <G transform="translate(271.557 123.029)">
        <Circle r={11.7} cy={393.29999} cx={1474.8} fill="#e42313" />
        <Path
          d="M1471.4 396.8h2.4v-8h-2.2v-2h4.4v9.9h2.7l-.7 2h-6.6z"
          fill="#fff"
        />
      </G>
      <Path
        d="M1119.316 1606.597c-6 0-11 5-11 11s5 11 11 11 11-5 11-11c-.3-6-5-11-11-11zm0 16c-2.3 0-5-2.3-5-5 0-2.3 2.3-5 5-5 2.3 0 5 2.3 5 5s-2.6 5-5 5z"
        fill = {this.state.Branch9} onPress = {this.Handler9}
      />
      <Path
        d="M1188.691 1599.644a2 2 0 01-2.57 1.181 2 2 0 01-1.18-2.57 2 2 0 012.57-1.18 2 2 0 011.18 2.57zm-5.81 1.608a2 2 0 01-2.57 1.181 2 2 0 01-1.18-2.57 2 2 0 012.57-1.181 2 2 0 011.18 2.57zm-5.995 1.782a2 2 0 01-2.57 1.18 2 2 0 01-1.18-2.57 2 2 0 012.57-1.18 2 2 0 011.18 2.57zm-6.208 1.702a2 2 0 01-2.57 1.181 2 2 0 01-1.181-2.57 2 2 0 012.57-1.181 2 2 0 011.18 2.57zm-5.85 1.714a2 2 0 01-2.57 1.182 2 2 0 01-1.18-2.57 2 2 0 012.57-1.181 2 2 0 011.18 2.57zm-5.51 1.764a2 2 0 01-2.57 1.18 2 2 0 01-1.18-2.57 2 2 0 012.57-1.18 2 2 0 011.18 2.57zm-5.574 1.623a2 2 0 01-2.57 1.18 2 2 0 01-1.18-2.57 2 2 0 012.57-1.18 2 2 0 011.18 2.57zm-5.76 1.896a2 2 0 01-2.57 1.181 2 2 0 01-1.182-2.57 2 2 0 012.57-1.18 2 2 0 011.181 2.57zm-5.513 1.717a2 2 0 01-2.57 1.181 2 2 0 01-1.181-2.57 2 2 0 012.57-1.18 2 2 0 011.18 2.57zm-5.336 1.965a2 2 0 01-2.57 1.181 2 2 0 01-1.18-2.57 2 2 0 012.57-1.18 2 2 0 011.18 2.57z"
        opacity={1}
        fill="#858585"
        fillOpacity={0.45882353}
        stroke="none"
        strokeWidth={1.04900002}
        strokeMiterlimit={4}
        strokeDasharray="none"
        strokeOpacity={1}
      />
      <Path
        d="M819.013 144.75085H943.0045200000001V188.75085H819.013z"
        fill="#fff"
      />
      <Path
        d="M829.77399 163.43259H851.77399V171.43259H829.77399z"
        fill={this.state.greenBranch}
        onPress={this.greenHandler}
        id = "green-branch"
      />
      <Text
        y={326.76147}
        x={854.94501}
        fontSize="18.3083992px"
        fontFamily="Moscow Sans"
        fill="#1d1d1b"
      >
        {
          "\u0420\u0435\u0447\u043D\u043E\u0439 \u0432\u043E\u043A\u0437\u0430\u043B"
        }
      </Text>
      <G transform="translate(209.393 64.211)">
        <Circle r={11.7} cy={77} cx={631.29999} fill={this.state.greenBranch}
        onPress={this.greenHandler} id = "green-branch" />
        <Path
          d="M627.3 82.4v-1.7l3-3c2.2-2.2 2.7-2.8 2.7-3.7 0-1.1-.9-1.7-2-1.7-1 0-2 .5-2.8 1.2l-1.4-1.4c1.1-1.1 2.7-1.8 4.3-1.8 2.7 0 4.1 1.6 4.1 3.5 0 1.6-.8 2.7-2.9 4.7l-2.1 2h5.5l-.7 2h-7.7z"
          fill="#fff"
        />
      </G>
      <G fontSize={18.2193}>
        <Text
          transform="translate(209.06 306.377) translate(230.201 1119.192)"
          fontSize="18.21929932px"
          fontFamily="Moscow Sans"
          fill="#1d1d1b"
        >
          {"\u041F\u0430\u0440\u043A"}
        </Text>
        <Text
          transform="translate(209.06 306.377) translate(230.201 1141.085)"
          fontSize="18.21929932px"
          fontFamily="Moscow Sans"
          fill="#1d1d1b"
        >
          {"\u041F\u043E\u0431\u0435\u0434\u044B"}
        </Text>
      </G>
      <Text
        y={1487.0792}
        x={532.91748}
        fontSize="18.21929932px"
        fontFamily="Moscow Sans"
        fill="#1d1d1b"
      >
        {"\u041C\u0438\u043D\u0441\u043A\u0430\u044F"}
      </Text>
      <G fontSize={18.2193}>
        <Text
          transform="translate(209.06 306.377) translate(325.028 1242.809)"
          fontSize="18.21929932px"
          fontFamily="Moscow Sans"
          fill="#1d1d1b"
        >
          {
            "\u041B\u043E\u043C\u043E\u043D\u043E\u0441\u043E\u0432\u0441\u043A\u0438\u0439"
          }
        </Text>
        <Text
          transform="translate(209.06 306.377) translate(325.028 1264.707)"
          fontSize="18.21929932px"
          fontFamily="Moscow Sans"
          fill="#1d1d1b"
        >
          {"\u043F\u0440\u043E\u0441\u043F\u0435\u043A\u0442"}
        </Text>
      </G>
      <Text
        fontSize="18.21929932px"
        x={533.13843}
        y={1617.6533}
        fontFamily="Moscow Sans"
        fill="#1d1d1b"
      >
        {"\u0420\u0430\u043C\u0435\u043D\u043A\u0438"}
      </Text>
      <Path
        d="M515.85931 1540.877H529.75931V1548.877H515.85931z"
        fill = {this.state.Branch8} onPress = {this.Handler8}
      />
      <Path d="M515.56 1612.372h15v7h-15z" fill = {this.state.Branch8} onPress = {this.Handler8} fillOpacity={1} />
      <G transform="translate(209.06 306.377)">
        <Circle cx={608.20001} cy={521.79999} r={11.4} fill = {this.state.Branch11} onPress = {this.Handler11} />
        <Text
          transform="translate(602.551 525.516)"
          fontSize="11.69989967px"
          fontFamily="MoscowSansBold"
          fill="#fff"
        >
          {"11"}
        </Text>
      </G>
      <Path d="M503.6593 1642.377H648.8593V1685.377H503.6593z" fill="#fff" />
      <Path d="M505.05933 1714.377H629.05933V1749.377H505.05933z" fill="#fff" />
      <Path d="M505.05933 1774.377H629.05933V1809.377H505.05933z" fill="#fff" />
      <Path d="M497.6593 1835.377H660.6593V1887.377H497.6593z" fill="#fff" />
      <Path d="M497.6593 1894.377H660.6593V1940.377H497.6593z" fill="#fff" />
      <G transform="translate(209.06 313.51)">
        <Circle cx={309.5} cy={1750} r={11.4} fill="#ffcd1c" />
        <Text
          transform="translate(302.5 1753.5)"
          fontSize="11.69989967px"
          fontFamily="MoscowSansBold"
        >
          {"8A"}
        </Text>
      </G>
      <Path
        d="M515.55933 1606.377H522.55933V1677.094514H515.55933z"
        fill = {this.state.Branch8} onPress = {this.Handler8}
        strokeWidth={1.0511713}
      />
      <Path
        d="M515.55933 1677.0945H522.55933V1733.376971H515.55933z"
        fill = {this.state.Branch8} onPress = {this.Handler8}
        strokeWidth={1.10613382}
      />
      <G fontSize={18.2193}>
        <Text
          x={533.13934}
          y={1670.687}
          fontSize="18.21929932px"
          fontFamily="Moscow Sans"
          fill="#1d1d1b"
        >
          {"\u041C\u0438\u0447\u0443\u0440\u0438\u043D\u0441\u043A\u0438\u0439"}
        </Text>
        <Text
          x={533.13934}
          y={1690.587}
          fontSize="18.21929932px"
          fontFamily="Moscow Sans"
          fill="#1d1d1b"
        >
          {"\u043F\u0440\u043E\u0441\u043F\u0435\u043A\u0442"}
        </Text>
      </G>
      <Path
        d="M515.85931 1725.377H529.75931V1733.377H515.85931z"
        fill = {this.state.Branch8} onPress = {this.Handler8}
      />
      <Text
        fontSize="18.3083992px"
        x={533.13928}
        y={1736.377}
        fontFamily="Moscow Sans"
        fill="#1d1d1b"
      >
        {"\u041E\u0437\u0435\u0440\u043D\u0430\u044F"}
      </Text>
      <Path
        d="M515.55933 1731.377H522.55933V1789.6842279999998H515.55933z"
        fill = {this.state.Branch8} onPress = {this.Handler8}
        strokeWidth={0.86879253}
      />
      <Path
        d="M515.85901 1786.1489H529.75901V1794.1489H515.85901z"
        fill = {this.state.Branch8} onPress = {this.Handler8}
      />
      <Text
        fontSize="18.3083992px"
        x={533.13928}
        y={1796.377}
        fontFamily="Moscow Sans"
        fill="#1d1d1b"
      >
        {"\u0413\u043E\u0432\u043E\u0440\u043E\u0432\u043E"}
      </Text>
      <Path
        d="M515.55933 1789.6842H522.55933V1857.3769029999999H515.55933z"
        fill = {this.state.Branch8} onPress = {this.Handler8}
        strokeWidth={0.96380895}
      />
      <Path
        d="M515.85931 1849.377H529.75931V1857.377H515.85931z"
        fill = {this.state.Branch8} onPress = {this.Handler8}
      />
      <Text
        transform="translate(209.06 306.377) translate(324.08 1551.81)"
        fontSize="18.21929932px"
        fontFamily="Moscow Sans"
        fill="#1d1d1b"
      >
        {"\u0421\u043E\u043B\u043D\u0446\u0435\u0432\u043E"}
      </Text>
      <Path
        d="M515.55933 1850.377H522.55933V1914.377H515.55933z"
        fill = {this.state.Branch8} onPress = {this.Handler8}
      />
      <Path
        d="M515.85931 1907.377H529.75931V1915.377H515.85931z"
        fill = {this.state.Branch8} onPress = {this.Handler8}
      />
      <G fontSize={18.2193}>
        <Text
          transform="translate(209.06 306.377) translate(324.08 1609.5)"
          fontSize="18.21929932px"
          fontFamily="Moscow Sans"
          fill="#1d1d1b"
        >
          {"\u0411\u043E\u0440\u043E\u0432\u0441\u043A\u043E\u0435"}
        </Text>
        <Text
          transform="translate(209.06 306.377) translate(324.08 1631.71)"
          fontSize="18.21929932px"
          fontFamily="Moscow Sans"
          fill="#1d1d1b"
        >
          {"\u0448\u043E\u0441\u0441\u0435"}
        </Text>
      </G>
      <Path
        d="M515.55933 1914.377H522.55933V1978.377H515.55933z"
        fill = {this.state.Branch8} onPress = {this.Handler8}
      />
      <Path
        d="M515.55933 1971.377H530.55933V1978.377H515.55933z"
        fill = {this.state.Branch8} onPress = {this.Handler8}
        fillOpacity={1}
      />
      <Text
        fontSize="15.30840015px"
        x={533.13928}
        y={1979.377}
        fontFamily="Moscow Sans"
        fill="#1d1d1b"
      >
        {
          "\u041D\u043E\u0432\u043E\u043F\u0435\u0440\u0435\u0434\u0435\u043B\u043A\u0438\u043D\u043E"
        }
      </Text>
      <Path
        d="M515.55933 1971.377H522.55933V2035.377H515.55933z"
        fill = {this.state.Branch8} onPress = {this.Handler8}
      />
      <Path
        d="M508.05899 2035.377H530.05899V2042.377H508.05899z"
        fill = {this.state.Branch8} onPress = {this.Handler8}
        fillOpacity={1}
      />
      <Text
        fontSize="18.3083992px"
        x={533.13928}
        y={2043.377}
        fontFamily="Moscow Sans"
        fill="#1d1d1b"
      >
        {"\u0420\u0430\u0441\u0441\u043A\u0430\u0437\u043E\u0432\u043A\u0430"}
      </Text>
      <Path
        d="M684.35931 1919.177H692.35931V1957.177H684.35931z"
        fill = {this.state.Branch1} onPress = {this.Handler1}
      />
      <Path
        d="M684.35931 1955.177H699.35931V1963.177H684.35931z"
        fill = {this.state.Branch1} onPress = {this.Handler1}
      />
      <Text
        fontSize="18.3083992px"
        x={702.68896}
        y={1964.377}
        fontFamily="Moscow Sans"
        fill="#1d1d1b"
      >
        {"\u0424\u0438\u043B\u0430\u0442\u043E\u0432 \u041B\u0443\u0433"}
      </Text>
      <Path
        d="M684.35931 1962.177H692.35931V2000.177H684.35931z"
        fill = {this.state.Branch1} onPress = {this.Handler1}
      />
      <Path
        d="M684.35931 1999.177H699.35931V2007.177H684.35931z"
        fill = {this.state.Branch1} onPress = {this.Handler1}
      />
      <Text
        fontSize="18.3083992px"
        x={702.68896}
        y={2008.377}
        fontFamily="Moscow Sans"
        fill="#1d1d1b"
      >
        {"\u041F\u0440\u043E\u043A\u0448\u0438\u043D\u043E"}
      </Text>
      <Path
        d="M684.35931 2006.177H692.35931V2044.177H684.35931z"
        fill = {this.state.Branch1} onPress = {this.Handler1}
      />
      <Path
        d="M684.35931 2043.177H699.35931V2051.1769999999997H684.35931z"
        fill = {this.state.Branch1} onPress = {this.Handler1}
      />
      <Text
        fontSize="18.3083992px"
        x={702.68896}
        y={2052.377}
        fontFamily="Moscow Sans"
        fill="#1d1d1b"
      >
        {"\u041E\u043B\u044C\u0445\u043E\u0432\u0430\u044F"}
      </Text>
      <Path
        d="M684.35931 2048.377H692.35931V2090.377H684.35931z"
        fill = {this.state.Branch1} onPress = {this.Handler1}
      />
      <Path
        d="M677.35931 2090.177H699.35931V2097.177H677.35931z"
        fill = {this.state.Branch1} onPress = {this.Handler1}
      />
      <Text
        fontSize="18.3083992px"
        x={702.68896}
        y={2099.877}
        fontFamily="Moscow Sans"
        fill="#1d1d1b"
      >
        {"\u041A\u043E\u043C\u043C\u0443\u043D\u0430\u0440\u043A\u0430"}
      </Text>
      <Path
        d="M872.468 794.234l-9.078 10.463 7.17 1.499 6.277-7.45c9.526-11.326 17.576-14.426 32.232-19.592l96.041-23.896-1.404-5.963-95.888 23.047c-16.419 5.372-24.987 9.57-35.35 21.892z"
        fill = {this.state.Branch8} onPress = {this.Handler8}
        fillOpacity={1}
      />
      <Path
        d="M868.06 809.677c.1 0 .1.1.2.1 2.1 1.8 2.5 4.7.8 6.8-1.5 2-4.6 2.6-6.8.8l-.1-.1-3.6 4.7c4.7 3.5 11.3 2.7 15-2 3.6-4.6 2.7-11.3-2-15z"
        fill = {this.state.Branch11} onPress = {this.Handler11}
      />
      <Path
        d="M862.36 817.377c-.1 0-.1-.1-.2-.1-2.1-1.8-2.5-4.7-.9-6.7 1.5-2 4.6-2.6 6.7-.9l.1.1 3.6-4.7c-4.7-3.5-11.3-2.7-15 2-3.5 4.7-2.7 11.3 2 15z"
        fill = {this.state.Branch8} onPress = {this.Handler8}
      />
      <Text
        transform="rotate(-.008)"
        fontSize="17.85059929px"
        x={774.55469}
        y={795.86475}
        fontFamily="Moscow Sans"
        fill="#1d1d1b"
      >
        {
          "\u041F\u0435\u0442\u0440\u043E\u0432\u0441\u043A\u0438\u0439 \u043F\u0430\u0440\u043A"
        }
      </Text>
      <Path
        d="M825.70642 781.04639H919.7409739999999V800.04639H825.70642z"
        fillOpacity={0.65}
        fill="#fff"
      />
      <Text
        transform="rotate(-.008)"
        fontSize="17.85059929px"
        x={774.86926}
        y={795.86475}
        fontFamily="Moscow Sans"
        fill="#1d1d1b"
      >
        {
          "\u041F\u0435\u0442\u0440\u043E\u0432\u0441\u043A\u0438\u0439 \u043F\u0430\u0440\u043A"
        }
      </Text>
      <Path
        fill = {this.state.Branch15} onPress = {this.Handler15}
        d="M1809.222 1177.67c-2.294 2.231-1.766 2.858-4.566 5.332 47.404 47.404 94.82 94.798 142.2 142.213.984-.87 2-1.713 2.872-2.7a44.794 44.794 0 011.803-1.751c.273-.25.334-.292.422-.363z"
      />
      <Path
        d="M1808.1388 1188.947H1851.1388V1206.947H1808.1388z"
        fill="#fff"
        fillOpacity={0.65}
      />
      <Text
        y={1203.3674}
        x={1781.5619}
        fontFamily="Moscow Sans"
        fill="#1d1d1b"
        fontSize={18.3084}
      >
        {
          "\u041D\u0438\u0436\u0435\u0433\u043E\u0440\u043E\u0434\u0441\u043A\u0430\u044F"
        }
      </Text>
      <Text
        y={1203.3674}
        x={1781.5619}
        fontFamily="Moscow Sans"
        fill="#1d1d1b"
        fontSize={18.3084}
      >
        {
          "\u041D\u0438\u0436\u0435\u0433\u043E\u0440\u043E\u0434\u0441\u043A\u0430\u044F"
        }
      </Text>
      <Path
        d="M836.35931 260.177H851.35931V268.177H836.35931z"
        fill={this.state.greenBranch}
        onPress={this.greenHandler}
        id = "green-branch"
      />
      <Text
        y={269.76147}
        x={854.94501}
        fontSize="18.3083992px"
        fontFamily="Moscow Sans"
        fill="#1d1d1b"
      >
        {"\u0411\u0435\u043B\u043E\u043C\u043E\u0440\u0441\u043A\u0430\u044F"}
      </Text>
      <Path
        d="M836.35931 167.9697H844.35931V260.177006H836.35931z"
        fill={this.state.greenBranch}
        onPress={this.greenHandler}
        id = "green-branch"
        strokeWidth={0.9235605}
        
      />
      <Path
        d="M836.35931 264.177H844.35931V320.177H836.35931z"
        fill={this.state.greenBranch}
        onPress={this.greenHandler}
        strokeWidth={1.12815213}
        id = "green-branch"
      />
      <Path
        d="M336.439 1215.03c-4.3-4.3-11.2-4.3-15.5 0-4.3 4.3-4.3 11.2 0 15.5 4.3 4.3 11.2 4.3 15.5 0 4.3-4.2 4.3-11.1 0-15.5zm-4.2 11.3c-1.9 1.9-4.9 1.9-6.9 0s-1.9-4.9 0-6.9c1.9-1.9 4.9-1.9 6.9 0 1.8 1.7 1.8 4.8 0 6.9z"
        fill = {this.state.Branch3} onPress = {this.Handler3}
        fillOpacity={1}
      />
      <Path
        d="M137.45 1070.603c0 16.6 3.4 24.5 15.3 36.8l7.322 7.122 64.473 62.373 61.174 59.02h-.002l78.564 75.902 39.973 38.893.008-.01c.049.048 7.173 7.13 18.633 18.557 9.895 9.918 20.894 7.695 30.127-1.534l.015.016 28.985-28.05-5.399-5.53-28.986 28.051c-6.917 6.943-13.568 7.024-19.332 1.319l-18.66-18.36-39.973-38.894-75.203-72.657h.002l-64.475-62.373-64.474-62.373-7.172-6.574c-10.7-11-13.272-17.3-13.172-31.7z"
        fill = {this.state.d1} onPress = {this.Handler_d1}
        fillOpacity={1}
      />
      <Path
        d="M142.928 1070.523l-3.282.076c0 16.6 2.944 22.886 14.47 35.436l7.564 7.123.037-.039 63.533 61.463 65.486 63.184.063-.022 74.08 71.658-.014.014 12.139 11.738 5.732 5.578.018-.018 23.67 22.89.01-.011c1.798 1.75 7.927 7.727 17.832 17.603 9.354 9.442 19.073 6.441 27.353-1.056l-.23-.33c.009-.058 0-.09.008-.145l.39.336 31.141-30.317-2.328-2.37-31.36 30.497c-5.575 5.285-13.568 10.02-22.636 1.086l-18.057-17.882.006-.01-.552-.536-.698-.689-.008.01-29.506-28.506-8.334-8.11h.006l-1.013-.978-24.336-23.68-.084.087-49.772-48.086h.004l-2.433-2.346-1.127-1.09h-.002l-63.14-60.889-63.59-61.517.027-.03-7.172-7.294c-11.2-10.5-13.995-18.426-13.895-32.826z"
        fill="#fff"
        fillOpacity={1}
      />
      <Path
        d="M136.59966 1000.3399H144.3288499V1056.1099H136.59966z"
        fill = {this.state.d1} onPress = {this.Handler_d1}
        fillOpacity={1}
        strokeWidth={0.60908073}
      />
      <Path
        d="M138.79961 998.58215H142.1216439V1056.3607299999999H138.79961z"
        fill="#fff"
        fillOpacity={1}
        strokeWidth={0.40858781}
      />
      <Path
        d="M151.127 1061.723c-2.3-5.7-8.8-8.2-14.5-6-5.7 2.2-8.2 8.8-6 14.5 2.3 5.7 8.8 8.2 14.5 6 5.8-2.5 8.5-9 6-14.5zm-8.2 8.8c-2.5 1-5.5-.3-6.5-2.5-1-2.5.3-5.5 2.5-6.5 2.5-1 5.5.3 6.5 2.5 1.1 2.6 0 5.4-2.5 6.5z"
        fill = {this.state.d1} onPress = {this.Handler_d1}
        fillOpacity={1}
      />
      <Path
        d="M136.58701 884.88H144.3161999V998.86624H136.58701z"
        fill = {this.state.d1} onPress = {this.Handler_d1}
        fillOpacity={1}
        strokeWidth={0.87076455}
      />
      <Path
        d="M138.78696 883.12225H142.1089939V1000.08197H138.78696z"
        fill="#fff"
        fillOpacity={1}
        strokeWidth={0.58132654}
      />
      <Path
        d="M143.23 996.45a3.956 3.956 0 00-5.614 0 3.96 3.96 0 000 5.618 3.956 3.956 0 005.615 0c1.593-1.486 1.593-3.987 0-5.617zm-1.52 4.132c-.689.689-1.776.689-2.5 0-.688-.688-.688-1.776 0-2.5.688-.69 1.775-.69 2.5 0 .651.652.651 1.812 0 2.5z"
        fill = {this.state.d1} onPress = {this.Handler_d1}
        fillOpacity={1}
        strokeWidth={0.30948851}
      />
      <Path
        d="M136.58701 769.02002H144.3161999V883.00626H136.58701z"
        fill = {this.state.d1} onPress = {this.Handler_d1}
        fillOpacity={1}
        strokeWidth={0.87076455}
      />
      <Path
        d="M138.78696 767.26227H142.1089939V884.22199H138.78696z"
        fill="#fff"
        fillOpacity={1}
        strokeWidth={0.58132654}
      />
      <Path
        d="M143.22 881.324a3.956 3.956 0 00-5.615 0 3.96 3.96 0 000 5.617 3.956 3.956 0 005.614 0c1.594-1.485 1.594-3.986 0-5.617zm-1.522 4.132c-.689.688-1.775.688-2.5 0-.688-.69-.688-1.776 0-2.501.689-.689 1.775-.689 2.5 0 .652.652.652 1.812 0 2.5z"
        fill = {this.state.d1} onPress = {this.Handler_d1}
        fillOpacity={1}
        strokeWidth={0.30948851}
      />
      <G fontSize={18.3084}>
        <Text
          x={55.50124}
          y={988.44666}
          transform="translate(96.616)"
          fontSize="18.3083992px"
          fontFamily="Moscow Sans"
          fill="#1d1d1b"
        >
          {"\u0420\u0430\u0431\u043E\u0447\u0438\u0439"}
        </Text>
        <Text
          x={55.458088}
          y={1011.0241}
          transform="translate(96.616)"
          fontSize="18.3083992px"
          fontFamily="Moscow Sans"
          fill="#1d1d1b"
        >
          {"\u043F\u043E\u0441\u0435\u043B\u043E\u043A"}
        </Text>
      </G>
      <Text
        y={890.43469}
        x={152.69994}
        fontSize="18.3083992px"
        fontFamily="Moscow Sans"
        fill="#1d1d1b"
      >
        {"\u0421\u0435\u0442\u0443\u043D\u044C"}
      </Text>
      <Text
        y={1305.4724}
        x={527.35669}
        fontSize="18.3083992px"
        fontFamily="Moscow Sans"
        fill="#1d1d1b"
      >
        {"\u041A\u0443\u0442\u0443\u0437\u043E\u0432\u0441\u043A\u0430\u044F"}
      </Text>
      <Path
        d="M494.366 1327.406c-2.3-5.7-8.8-8.2-14.5-6-5.7 2.2-8.2 8.8-6 14.5 2.3 5.7 8.8 8.2 14.5 6 5.8-2.5 8.5-9 6-14.5zm-8.2 8.8c-2.5 1-5.5-.3-6.5-2.5-1-2.5.3-5.5 2.5-6.5 2.5-1 5.5.3 6.5 2.5 1.1 2.6 0 5.4-2.5 6.5z"
        fill = {this.state.d1} onPress = {this.Handler_d1}
        fillOpacity={1}
      />
      <Path
        d="M453.56 1290.905c-4.3-4.3-11.2-4.3-15.5 0-4.3 4.3-4.3 11.2 0 15.5 4.3 4.3 11.2 4.3 15.5 0 4.3-4.2 4.3-11.1 0-15.5zm-4.2 11.3c-1.9 1.9-4.9 1.9-6.9 0s-1.9-4.9 0-6.9c1.9-1.9 4.9-1.9 6.9 0 1.8 1.7 1.8 4.8 0 6.9z"
        fill = {this.state.Branch4} onPress = {this.Handler4}
        fillOpacity={1}
      />
      <Path
        d="M1099.7593 255.2605H1121.7593V262.2605H1099.7593z"
        fill = {this.state.limeBranch} onPress = {this.limeHandler}
      />
      <Path
        d="M1021.188 62.638l-10-10.29c9.767 10.874 21.33 23.004 20.834 37.965l.254 20.6 7.624.053.085-20.59c.257-13.817-7.28-22.693-17.947-36.21l-2.938-3.19-1.65.887-2.848 4.001z"
        fill = {this.state.d1} onPress = {this.Handler_d1}
        fillOpacity={1}
        strokeWidth={0.98257333}
      />
      <Path
        d="M1013.747 52.882c10.451 11.282 20.97 22.635 20.473 37.597l-.06 21.206 3.386.033v-20.86c.978-16.286-10.385-27.57-21.911-40.98-.415-.707-.415-.707 0 0l-2.608 2.222z"
        fill="#fff"
        fillOpacity={1}
        strokeWidth={0.98257333}
      />
      <Path
        d="M1319.781 2025.461h127.48v7.73h-127.48zm190.382-.215l-.096 7.729-62.903.215.096-7.729zm14.23-38.413l-.676 26.095c-.287 8.106-4.832 12.594-14.627 12.279l1.073.039-.096 7.729c13.093.42 21.105-5.548 21.514-19.584.515-16.231.06-26.238.06-26.238zm.012-14.727s4.995-.68 7.234-.387v15.434l-7.249-.32c.03-.597.012-3.264.012-14.727z"
        fill = {this.state.d2} onPress = {this.Handler_d2}
        fillOpacity={1}
        strokeWidth={1.31880975}
      />
      <Path
        d="M1319.632 2027.737l128.142-.256v3.35h-128.141zm192.156-.51l.043 3.582h-67.714l.041-3.322zm14.52-39.15l-.418 24.678c.422 8.369-6.09 14.85-14.102 14.473l.043 3.58h-3.106c11.247.492 20.585-3.573 20.443-17.985.514-16.231.451-27.583.451-27.583zm-.142-22.09l3.473 4.927-.02 14.33-3.311 2.833z"
        fill="#fff"
        fillOpacity={1}
        strokeWidth={0.87151015}
      />
      <Circle
        cx={1414.6719}
        cy={750.94623}
        r={11.3}
        fill = {this.state.Branch6} onPress = {this.Handler6}
        fillOpacity={1}
      />
      <Circle cx={1414.6719} cy={750.94623} r={5} fill="#fff" />
      <Path
        d="M884.478 577.64c-10.412-10.188-16.439-12.622-31.738-12.454l-95.888 1.114-.282-7.397 96.393-.72c19.603.16 24.374 1.983 36.862 14.597l20.491 18.596-4.668 6.057z"
        fill = {this.state.d2} onPress = {this.Handler_d2}
        fillOpacity={1}
      />
      <Path
        d="M886.21 575.87c-11.075-10.021-18.192-12.815-33.492-12.684l-93.833.804.022-2.863 93.831-.691c19.603.16 24.169 2.977 35.975 13.481l22.494 21.385-2.012 2.4z"
        fill="#fff"
        fillOpacity={1}
      />
      <Path
        d="M974.502 649.883c10.656 9.932 16.74 12.22 32.03 11.683l55.833.57.46 7.39-56.347-.954c-19.601.314-24.414-1.394-37.204-13.702l-22.128-19.008 5.083-5.972z"
        fill = {this.state.d2} onPress = {this.Handler_d2}
        fillOpacity={1}
      />
      <Path
        d="M972.815 651.693c10.655 9.932 18.496 12.372 33.787 11.872l56.476.871.048 2.863-56.477-.984c-19.6.313-23.568-2.244-36.29-12.61l-22.218-19.587 2.608-2.81z"
        fill="#fff"
        fillOpacity={1}
      />
      <Path
        d="M605.128 496.613l.187 41.869c.061 13.7 1.044 13.79 6.394 19.179v8c-7.365-2.411-14.103-8.812-14.394-26.779l.063-42.263zm-7.493-91.835l7.23-1 .25 93.304h-7.73z"
        fill = {this.state.d2} onPress = {this.Handler_d2}
        fillOpacity={1}
      />
      <Path
        d="M602.917 496.55l.273 44.432c.084 13.7 2.886 13.981 7.526 18.944l.089 3.177c-7.365-3.545-11.16-10.324-10.923-21.802l-.31-44.744zm-2.978-90.286l2.968-.354v91.328h-3.322z"
        fill="#fff"
        fillOpacity={1}
      />
      <Path
        d="M627.66302 558.49823H738.97326V566.2274199000001H627.66302z"
        fill = {this.state.d2} onPress = {this.Handler_d2}
        fillOpacity={1}
        strokeWidth={0.86046088}
      />
      <Path
        d="M627.41071 560.7735H739.14348V564.0955339H627.41071z"
        fill="#fff"
        fillOpacity={1}
        strokeWidth={0.56861913}
      />
      <Path
        d="M647.46 383.377c-2.3-5.7-8.8-8.2-14.5-6-5.7 2.2-8.2 8.8-6 14.5 2.3 5.7 8.8 8.2 14.5 6 5.8-2.5 8.5-9 6-14.5zm-8.2 8.8c-2.5 1-5.5-.3-6.5-2.5-1-2.5.3-5.5 2.5-6.5 2.5-1 5.5.3 6.5 2.5 1.1 2.6 0 5.4-2.5 6.5z"
        fill = {this.state.Branch7} onPress = {this.Handler7}
        fillOpacity={1}
      />
      <Path
        d="M609.076 388.318c-4.3-4.3-11.2-4.3-15.5 0-4.3 4.3-4.3 11.2 0 15.5 4.3 4.3 11.2 4.3 15.5 0 4.4-4.1 4.4-11 0-15.5zm-4.2 11.4c-1.9 1.9-4.9 1.9-6.9 0-1.9-1.9-1.9-4.9 0-6.9 1.9-1.9 4.9-1.9 6.9 0 1.8 1.8 1.8 5 0 6.9z"
        fill = {this.state.d2} onPress = {this.Handler_d2}
        fillOpacity={1}
      />
      <G fontSize={18.3108}>
        <Text
          x={475.98804}
          y={541.32935}
          fontSize="18.31080055px"
          fontFamily="Moscow Sans"
          fill="#1d1d1b"
        >
          {"\u041F\u043E\u043A\u0440\u043E\u0432\u0441\u043A\u043E\u0435-"}
        </Text>
        <Text
          x={475.98804}
          y={563.32935}
          fontSize="18.31080055px"
          fontFamily="Moscow Sans"
          fill="#1d1d1b"
        >
          {"\u0421\u0442\u0440\u0435\u0448\u043D\u0435\u0432\u043E"}
        </Text>
      </G>
      <Path
        d="M294.87915 366.74756H466.73743V374.4767499H294.87915z"
        fill = {this.state.d2} onPress = {this.Handler_d2}
        fillOpacity={1}
        strokeWidth={1.31880975}
      />
      <Path
        d="M294.28647 369.0228H465.71924V372.3448339H294.28647z"
        fill="#fff"
        fillOpacity={1}
        strokeWidth={0.87151015}
      />
      <Text
        fontSize="18.3083992px"
        x={651.98999}
        y={390.53085}
        fontFamily="Moscow Sans"
        fill="#1d1d1b"
      >
        {"\u0422\u0443\u0448\u0438\u043D\u0441\u043A\u0430\u044F"}
      </Text>
      <Path
        d="M559.973 367.78a3.956 3.956 0 00-5.615 0 3.96 3.96 0 000 5.617 3.956 3.956 0 005.615 0c1.594-1.486 1.594-3.986 0-5.617zm-1.521 4.131c-.689.689-1.775.689-2.5 0-.688-.688-.688-1.776 0-2.5.689-.689 1.775-.689 2.5 0 .652.652.652 1.812 0 2.5z"
        fill = {this.state.d2} onPress = {this.Handler_d2}
        fillOpacity={1}
        strokeWidth={0.30948851}
      />
      <Text
        y={357.67743}
        fontSize="18.3083992px"
        x={503.06039}
        fontFamily="Moscow Sans"
        fill="#1d1d1b"
      >
        {"\u0422\u0440\u0438\u043A\u043E\u0442\u0430\u0436\u043D\u0430\u044F"}
      </Text>
      <Circle r={5} cy={519.74109} cx={390.01593} fill="#fff" />
      <Path
        d="M246.431 296.547h7.73l-.023 55.795-7.707-.025zm46.627 70.182l-26.177-.162c-8.11-.026-12.743-4.425-12.743-14.225l-7.707-.025c0 13.1 6.199 22.168 20.24 22.125 16.24-.008 26.387.005 26.387.005z"
        fill = {this.state.d2} onPress = {this.Handler_d2}
        fillOpacity={1}
        strokeWidth={0.60908073}
      />
      <Path
        d="M248.631 294.789h3.322l-.024 57.787-3.312-.23zm45.657 74.224l-27.164-.08c-12.73-.072-14.974-8.679-15.195-16.357-1.089-.077-2.172-.148-3.312-.23.486 12.04 5.073 20.04 18.54 19.865 16.24-.008 27.13.134 27.13.134z"
        fill="#fff"
        fillOpacity={1}
        strokeWidth={0.40858781}
      />
      <Text
        fontSize="18.3083992px"
        x={260.31006}
        y={299.517}
        fontFamily="Moscow Sans"
        fill="#1d1d1b"
      >
        {"\u041F\u0430\u0432\u0448\u0438\u043D\u043E"}
      </Text>
      <Path
        d="M246.431 238.768h7.73v55.77h-7.73z"
        fill = {this.state.d2} onPress = {this.Handler_d2}
        fillOpacity={1}
        strokeWidth={0.60908073}
      />
      <Path
        d="M248.63095 237.01028H251.95298390000002V294.78886H248.63095z"
        fill="#fff"
        fillOpacity={1}
        strokeWidth={0.40858781}
      />
      <Text
        y={352.517}
        x={264.36755}
        fontSize="18.3083992px"
        fontFamily="Moscow Sans"
        fill="#1d1d1b"
      >
        {"\u041F\u0435\u043D\u044F\u0433\u0438\u043D\u043E"}
      </Text>
      <Path
        d="M246.431 180.99h7.73v55.77h-7.73z"
        fill = {this.state.d2} onPress = {this.Handler_d2}
        fillOpacity={1}
        strokeWidth={0.60908073}
      />
      <Path
        d="M248.63095 179.2317H251.95298390000002V237.01028H248.63095z"
        fill="#fff"
        fillOpacity={1}
        strokeWidth={0.40858781}
      />
      <Text
        fontSize="18.3083992px"
        x={260.26538}
        y={242.31401}
        fontFamily="Moscow Sans"
        fill="#1d1d1b"
      >
        {
          "\u041A\u0440\u0430\u0441\u043D\u043E\u0433\u043E\u0440\u0441\u043A\u0430\u044F"
        }
      </Text>
      <Path
        d="M246.431 123.21h7.73v55.77h-7.73z"
        fill = {this.state.d2} onPress = {this.Handler_d2}
        fillOpacity={1}
        strokeWidth={0.60908073}
      />
      <Path
        d="M248.63095 121.45312H251.95298390000002V179.2317H248.63095z"
        fill="#fff"
        fillOpacity={1}
        strokeWidth={0.40858781}
      />
      <Text
        fontSize="18.3083992px"
        x={261.06995}
        y={185.28825}
        fontFamily="Moscow Sans"
        fill="#1d1d1b"
      >
        {"\u041E\u043F\u0430\u043B\u0438\u0445\u0430"}
      </Text>
      <Path
        d="M246.431 65.432h7.73v55.77h-7.73z"
        fill = {this.state.d2} onPress = {this.Handler_d2}
        fillOpacity={1}
        strokeWidth={0.60908073}
      />
      <Path
        d="M248.63095 63.674545H251.95298390000002V121.453125H248.63095z"
        fill="#fff"
        fillOpacity={1}
        strokeWidth={0.40858781}
      />
      <Text
        y={126.10627}
        x={261.86594}
        fontSize="18.3083992px"
        fontFamily="Moscow Sans"
        fill="#1d1d1b"
      >
        {"\u0410\u043D\u0438\u043A\u0435\u0435\u0432\u043A\u0430"}
      </Text>
      <Text
        y={67.624489}
        x={262.63724}
        fontSize="18.3083992px"
        fontFamily="Moscow Sans"
        fill="#1d1d1b"
      >
        {"\u041D\u0430\u0445\u0430\u0431\u0438\u043D\u043E"}
      </Text>
      <Path
        d="M296.808 367.838a3.956 3.956 0 00-5.615 0 3.96 3.96 0 000 5.618 3.956 3.956 0 005.615 0c1.593-1.486 1.593-3.987 0-5.618zm-1.522 4.132c-.688.688-1.775.688-2.499 0-.688-.689-.688-1.776 0-2.5.688-.69 1.775-.69 2.5 0 .651.651.651 1.811 0 2.5zM253.014 292.668a3.956 3.956 0 00-5.615 0 3.96 3.96 0 000 5.617 3.956 3.956 0 005.615 0c1.593-1.486 1.593-3.987 0-5.617zm-1.522 4.131c-.688.689-1.775.689-2.5 0-.687-.688-.687-1.776 0-2.5.69-.69 1.776-.69 2.5 0 .652.652.652 1.812 0 2.5zM253.044 235.316a3.956 3.956 0 00-5.615 0 3.96 3.96 0 000 5.618 3.956 3.956 0 005.615 0c1.593-1.486 1.593-3.987 0-5.618zm-1.522 4.132c-.688.688-1.775.688-2.499 0-.688-.689-.688-1.776 0-2.5.688-.69 1.775-.69 2.5 0 .651.652.651 1.811 0 2.5zM253.074 177.2a3.956 3.956 0 00-5.615 0 3.96 3.96 0 000 5.618 3.956 3.956 0 005.615 0c1.593-1.486 1.593-3.986 0-5.617zm-1.522 4.132c-.688.689-1.775.689-2.499 0-.688-.688-.688-1.775 0-2.5.688-.689 1.775-.689 2.5 0 .651.652.651 1.812 0 2.5zM253.162 119.297a3.956 3.956 0 00-5.615 0 3.96 3.96 0 000 5.617 3.956 3.956 0 005.615 0c1.593-1.485 1.593-3.986 0-5.617zm-1.522 4.132c-.688.688-1.775.688-2.499 0-.688-.69-.688-1.776 0-2.501.688-.689 1.775-.689 2.5 0 .651.652.651 1.812 0 2.5z"
        fill = {this.state.d2} onPress = {this.Handler_d2}
        fillOpacity={1}
        strokeWidth={0.30948851}
      />
      <G transform="translate(0 -57.779)">
        <LinearGradient>
          <Stop offset={0} stopColor="#8e8e8e" stopOpacity={1} />
          <Stop offset={1} stopColor="#f5e3ea" stopOpacity={0} />
        </LinearGradient>
        <Path
          d="M246.431 63.432h7.73l.056 58.727-3.929-3.014-3.857 2.786z"
          fill="url(#LinearGradient7593)"
          fillOpacity={1}
          strokeWidth={0.60908073}
        />
        <Path
          d="M248.63095 61.674545H251.95298390000002V119.453125H248.63095z"
          fill="#fff"
          fillOpacity={1}
          strokeWidth={0.40858781}
        />
      </G>
      <Path
        d="M253.1 61.543a3.956 3.956 0 00-5.615 0 3.96 3.96 0 000 5.617 3.956 3.956 0 005.614 0c1.594-1.485 1.594-3.986 0-5.617zm-1.522 4.132c-.688.688-1.775.688-2.5 0-.688-.689-.688-1.776 0-2.501.689-.689 1.776-.689 2.5 0 .652.652.652 1.812 0 2.5z"
        fill = {this.state.d2} onPress = {this.Handler_d2}
        fillOpacity={1}
        strokeWidth={0.30948851}
      />
      <Path
        d="M1631.411 1235.393l5.25-5.672 22.928 19.885-5.25 5.673z"
        fill = {this.state.d2} onPress = {this.Handler_d2}
        fillOpacity={1}
        strokeWidth={0.60908073}
      />
      <Path
        d="M1631.533 1232.833l2.34-2.686 24.4 21.25-2.256 2.438z"
        fill="#fff"
        fillOpacity={1}
        strokeWidth={0.40858781}
      />
      <Path
        d="M1654.928 1255.92l5.25-5.673 61.527 53.885-5.25 5.672z"
        fill = {this.state.d2} onPress = {this.Handler_d2}
        fillOpacity={1}
        strokeWidth={0.60908073}
      />
      <Path
        d="M1655.05 1253.359l2.339-2.686 72.4 63.25-2.256 2.437z"
        fill="#fff"
        fillOpacity={1}
        strokeWidth={0.40858781}
      />
      <Path
        d="M1731.098 1312.322c-1.706 1.478-5.088 5.816-5.088 5.816 7.165 8.808 104.424 90.108 104.424 90.108l18.773 18.158c5.868 5.599 6.205 11.977-.537 19.09l.742-.776-33.226 37.649-.055-.05-53.885 61.528 5.672 5.25 45.564-52.027.021.02 41.621-47.164c9.012-9.508 9.873-19.463-.347-29.092-11.791-11.166-19.145-18.041-19.145-18.041z"
        fill = {this.state.d2} onPress = {this.Handler_d2}
        fillOpacity={1}
        strokeWidth={0.60908073}
      />
      <Path
        d="M1728.617 1312.454l-2.264 2.75 107.996 93.29 16.465 15.798c8.22 8.675 7.058 14.416 1.453 20.154l-25.986 29.475-.064-.06-12.623 14.45-6.053 6.865.031.027-44.605 51.059 2.685 2.34 51.108-58.801 37.875-42.625.338-.383-.021-.018c6.053-7.634 6.885-16.663-1.905-24.887-11.791-11.165-20.318-18.658-20.318-18.658zm126.018 134.723l-1.723 1.941a31.606 31.606 0 001.723-1.941z"
        fill="#fff"
        fillOpacity={1}
        strokeWidth={0.40858781}
      />
      <G transform="rotate(113.407 978.55 1706.594)" />
      <Path
        d="M1605.226 1488.464a2 2 0 11-3.33-2.217 2 2 0 013.33 2.217zm-6.245.35a2 2 0 11-3.329-2.217 2 2 0 013.33 2.217zm-6.433.224a2 2 0 11-3.33-2.217 2 2 0 013.33 2.217zm-6.087.319a2 2 0 11-3.33-2.217 2 2 0 013.33 2.217zm-5.768.444a2 2 0 11-3.33-2.217 2 2 0 013.33 2.217zm-5.799.293a2 2 0 11-3.33-2.217 2 2 0 013.33 2.217zm-6.043.516a2 2 0 11-3.33-2.217 2 2 0 013.33 2.217zm-5.76.398a2 2 0 11-3.33-2.217 2 2 0 013.33 2.217zm-5.645.681a2 2 0 11-3.33-2.217 2 2 0 013.33 2.217z"
        opacity={1}
        fill="#858585"
        fillOpacity={0.45882353}
        stroke="none"
        strokeWidth={1.04900002}
        strokeMiterlimit={4}
        strokeDasharray="none"
        strokeOpacity={1}
      />
      <Path
        d="M1607.476 1660.952c1.132 5.892 6.888 9.878 12.878 8.727 5.892-1.132 9.878-6.888 8.727-12.878-1.132-5.892-6.887-9.878-12.878-8.727-5.831.917-9.915 6.69-8.727 12.878zm15.811-3.038c.472 2.455-1.236 5.227-3.887 5.737-2.455.471-5.228-1.236-5.737-3.888-.472-2.455 1.236-5.227 3.888-5.736 2.595-.804 5.189 1.04 5.736 3.887z"
        fill = {this.state.limeBranch} onPress = {this.limeHandler}
        fillOpacity={1}
      />
      <Path
        d="M1631.411 1235.393l5.25-5.672 22.928 19.885-5.25 5.673z"
        transform="scale(-1 1) rotate(5.085 -5465.377 -34926.072)"
        fill = {this.state.d2} onPress = {this.Handler_d2}
        fillOpacity={1}
        strokeWidth={0.60908073}
      />
      <Path
        d="M1631.533 1232.833l2.34-2.686 24.4 21.25-2.256 2.438z"
        transform="scale(-1 1) rotate(5.085 -5465.377 -34926.072)"
        fill="#fff"
        fillOpacity={1}
        strokeWidth={0.40858781}
      />
      <Path
        d="M1544.223 1776.71c-10.4 9.946-12.07 11.635-12.47 26.179l-7.73.094v-.094.094c0-15.858 3.4-19.986 15-30.87l35.5-33.405 5.732 5.185zm-20.2 95.949h7.73v-69.77l-7.73.094z"
        fill = {this.state.d2} onPress = {this.Handler_d2}
        fillOpacity={1}
        strokeWidth={0.96866733}
      />
      <Path
        d="M1542.765 1775.337c-11.107 10.3-12.817 13.033-13.217 27.577l-.015.336-3.322-.173c0-15.858 1.831-17.335 14.138-29.633l35.589-33.404 3.16 2.584zm-16.542 99.08h3.322l-.012-71.167-3.322-.173z"
        fill="#fff"
        fillOpacity={1}
        strokeWidth={0.96866733}
      />
      <Path
        d="M1530.648 1967.94a3.956 3.956 0 00-5.614 0 3.96 3.96 0 000 5.617 3.956 3.956 0 005.614 0c1.594-1.486 1.594-3.987 0-5.618zm-1.521 4.131c-.688.689-1.775.689-2.5 0-.688-.689-.688-1.776 0-2.5.689-.69 1.776-.69 2.5 0 .652.652.652 1.811 0 2.5z"
        fill = {this.state.d2} onPress = {this.Handler_d2}
        fillOpacity={1}
        strokeWidth={0.30948851}
      />
      <Path
        d="M1265.074 2281.261l-7.675.04-.373-118.552 7.675-.04z"
        fill = {this.state.d2} onPress = {this.Handler_d2}
        fillOpacity={1}
        strokeWidth={0.52612519}
      />
      <Path
        d="M1262.901 2282.593l-3.299.017-.386-120.06 3.299-.018z"
        fill="#fff"
        fillOpacity={1}
        strokeWidth={0.35293901}
      />
      <Path
        d="M1264.729 2160.75l-7.675.052-.373-55.769 7.675-.052z"
        fill = {this.state.d2} onPress = {this.Handler_d2}
        fillOpacity={1}
        strokeWidth={0.60694051}
      />
      <Path
        transform="rotate(179.611) skewX(-.005)"
        d="M-1248.0636 -2171.0376H-1244.7648706V-2113.259039H-1248.0636z"
        fill="#fff"
        fillOpacity={1}
        strokeWidth={0.40715209}
      />
      <Path
        d="M1263.676 2158.96a3.956 3.956 0 00-5.615 0 3.96 3.96 0 000 5.617 3.956 3.956 0 005.615 0c1.594-1.486 1.594-3.987 0-5.618zm-1.521 4.131c-.689.689-1.775.689-2.5 0-.688-.689-.688-1.776 0-2.5.689-.69 1.775-.69 2.5 0 .652.652.652 1.811 0 2.5z"
        fill = {this.state.d2} onPress = {this.Handler_d2}
        fillOpacity={1}
        strokeWidth={0.30948851}
      />
      <Path
        d="M1265.445 2338.794l-7.675.052-.373-55.769 7.675-.052z"
        fill = {this.state.d2} onPress = {this.Handler_d2}
        fillOpacity={1}
        strokeWidth={0.60694051}
      />
      <Path
        transform="rotate(179.611) skewX(-.005)"
        d="M-1247.589 -2349.0823H-1244.2902706V-2291.303739H-1247.589z"
        fill="#fff"
        fillOpacity={1}
        strokeWidth={0.40715209}
      />
      <Path
        d="M1263.994 2279.285a3.956 3.956 0 00-5.615 0 3.96 3.96 0 000 5.617 3.956 3.956 0 005.615 0c1.594-1.486 1.594-3.986 0-5.617zm-1.521 4.131c-.689.69-1.776.69-2.5 0-.688-.688-.688-1.775 0-2.5.688-.689 1.775-.689 2.5 0 .651.652.651 1.812 0 2.5z"
        fill = {this.state.d2} onPress = {this.Handler_d2}
        fillOpacity={1}
        strokeWidth={0.30948851}
      />
      <Text
        fontSize="18.3083992px"
        x={1266.6918}
        y={2169.5508}
        fontFamily="Moscow Sans"
        fill="#1d1d1b"
      >
        {
          "\u041A\u0440\u0430\u0441\u043D\u044B\u0439 \u0421\u0442\u0440\u043E\u0438\u0442\u0435\u043B\u044C"
        }
      </Text>
      <Text
        y={2285.3313}
        x={1267.7268}
        fontSize="18.3083992px"
        fontFamily="Moscow Sans"
        fill="#1d1d1b"
      >
        {"\u0411\u0438\u0442\u0446\u0430"}
      </Text>
      <Path
        d="M1265.776 2395.967l-7.675.052-.373-55.769 7.675-.052z"
        fill = {this.state.d2} onPress = {this.Handler_d2}
        fillOpacity={1}
        strokeWidth={0.60694051}
      />
      <Path
        transform="rotate(179.611) skewX(-.005)"
        d="M-1247.5372 -2406.2563H-1244.2384706V-2348.477739H-1247.5372z"
        fill="#fff"
        fillOpacity={1}
        strokeWidth={0.40715209}
      />
      <Path
        d="M1264.414 2336.56a3.956 3.956 0 00-5.615 0 3.96 3.96 0 000 5.617 3.956 3.956 0 005.615 0c1.593-1.486 1.593-3.987 0-5.618zm-1.522 4.13c-.688.69-1.775.69-2.5 0-.687-.688-.687-1.775 0-2.5.69-.689 1.776-.689 2.5 0 .652.652.652 1.812 0 2.5z"
        fill = {this.state.d2} onPress = {this.Handler_d2}
        fillOpacity={1}
        strokeWidth={0.30948851}
      />
      <Text
        y={2342.9536}
        x={1267.7267}
        fontSize="18.3083992px"
        fontFamily="Moscow Sans"
        fill="#1d1d1b"
      >
        {"\u0411\u0443\u0442\u043E\u0432\u043E"}
      </Text>
      <Text
        y={2401.0891}
        x={1268.5751}
        fontSize="18.3083992px"
        fontFamily="Moscow Sans"
        fill="#1d1d1b"
      >
        {"\u0429\u0435\u0440\u0431\u0438\u043D\u043A\u0430"}
      </Text>
      <Path
        d="M1266.164 2452.962l-7.675.052-.373-55.769 7.675-.052z"
        fill = {this.state.d2} onPress = {this.Handler_d2}
        fillOpacity={1}
        strokeWidth={0.60694051}
      />
      <Path
        transform="rotate(179.611) skewX(-.005)"
        d="M-1247.5441 -2463.2522H-1244.2453706000001V-2405.473639H-1247.5441z"
        fill="#fff"
        fillOpacity={1}
        strokeWidth={0.40715209}
      />
      <Text
        y={2458.6335}
        x={1268.9955}
        fontSize="18.3083992px"
        fontFamily="Moscow Sans"
        fill="#1d1d1b"
      >
        {"\u041E\u0441\u0442\u0430\u0444\u044C\u0435\u0432\u043E"}
      </Text>
      <Path
        d="M1266.495 2510.135l-7.675.052-.373-55.769 7.675-.052z"
        fill = {this.state.d2} onPress = {this.Handler_d2}
        fillOpacity={1}
        strokeWidth={0.60694051}
      />
      <Path
        transform="rotate(179.611) skewX(-.005)"
        d="M-1247.4924 -2520.4263H-1244.1936706000001V-2462.647739H-1247.4924z"
        fill="#fff"
        fillOpacity={1}
        strokeWidth={0.40715209}
      />
      <Text
        y={2515.1636}
        x={1269.5552}
        fontSize="18.3083992px"
        fontFamily="Moscow Sans"
        fill="#1d1d1b"
      >
        {"\u0421\u0438\u043B\u0438\u043A\u0430\u0442\u043D\u0430\u044F"}
      </Text>
      <Path
        d="M1266.86 2567.424l-7.675.052-.373-55.768 7.675-.052z"
        fill = {this.state.d2} onPress = {this.Handler_d2}
        fillOpacity={1}
        strokeWidth={0.60694051}
      />
      <Path
        transform="rotate(179.611) skewX(-.005)"
        d="M-1247.4745 -2577.7168H-1244.1757706V-2519.938239H-1247.4745z"
        fill="#fff"
        fillOpacity={1}
        strokeWidth={0.40715209}
      />
      <Text
        y={2571.1062}
        x={1269.2537}
        fontSize="18.3083992px"
        fontFamily="Moscow Sans"
        fill="#1d1d1b"
      >
        {"\u041F\u043E\u0434\u043E\u043B\u044C\u0441\u043A"}
      </Text>
      <Path
        d="M1663.0397 1262.2532H1691.228178V1277.2532H1663.0397z"
        fill="#fff"
        fillOpacity={0.65}
      />
      <Text
        y={1275.665}
        x={1610.0408}
        fontSize="18.3083992px"
        fontFamily="Moscow Sans"
        fill="#1d1d1b"
      >
        {"\u041A\u0430\u043B\u0438\u0442\u043D\u0438\u043A\u0438"}
      </Text>
      <Text
        y={1747.8124}
        x={1516.5638}
        fontSize="18.3083992px"
        fontFamily="Moscow Sans"
        fill="#1d1d1b"
      >
        {"\u0414\u0435\u043F\u043E"}
      </Text>
      <Text
        fontSize="18.3083992px"
        x={1535.1565}
        y={1878.8085}
        fontFamily="Moscow Sans"
        fill="#1d1d1b"
      >
        {"\u041F\u0435\u0440\u0435\u0440\u0432\u0430"}
      </Text>
      <Text
        y={1988.0483}
        x={1479.5508}
        fontSize="18.3083992px"
        fontFamily="Moscow Sans"
        fill="#1d1d1b"
      >
        {"\u041C\u043E\u0441\u043A\u0432\u043E\u0440\u0435\u0447\u044C\u0435"}
      </Text>
      <Path
        d="M1380.5065 854.84131H1446.382431V872.84131H1380.5065z"
        fillOpacity={0.65}
        fill="#fff"
      />
      <Text
        y={870.30078}
        x={1330.1765}
        fontSize="18.3083992px"
        fontFamily="Moscow Sans"
        fill="#1d1d1b"
      >
        {
          "\u041A\u0430\u043B\u0430\u043D\u0447\u0435\u0432\u0441\u043A\u0430\u044F"
        }
      </Text>
      <Path
        d="M906.052 597.677l5.25-5.672 40.927 37.885-5.25 5.672z"
        fill = {this.state.d2} onPress = {this.Handler_d2}
        fillOpacity={1}
        strokeWidth={0.60908073}
      />
      <Path
        d="M906.174 595.117l2.34-2.686 42.4 39.25-2.256 2.437z"
        fill="#fff"
        fillOpacity={1}
        strokeWidth={0.40858781}
      />
      <Path
        d="M911.574 592.195a3.956 3.956 0 00-5.615 0 3.96 3.96 0 000 5.617 3.956 3.956 0 005.615 0c1.593-1.486 1.593-3.986 0-5.617zm-1.522 4.131c-.688.689-1.775.689-2.499 0-.688-.688-.688-1.775 0-2.5.688-.689 1.775-.689 2.5 0 .651.652.651 1.812 0 2.5zM953.014 630.526a3.956 3.956 0 00-5.614 0 3.96 3.96 0 000 5.618 3.956 3.956 0 005.614 0c1.594-1.486 1.594-3.987 0-5.618zm-1.52 4.132c-.69.688-1.776.688-2.5 0-.689-.689-.689-1.776 0-2.501.688-.689 1.775-.689 2.5 0 .651.652.651 1.812 0 2.5z"
        fill = {this.state.d2} onPress = {this.Handler_d2}
        fillOpacity={1}
        strokeWidth={0.30948851}
      />
      <Path
        d="M871.90704 546.36505H920.896195V580.481974H871.90704z"
        fill="#fff"
        fillOpacity={0.65}
        strokeWidth={1.34001029}
      />
      <G fontSize={18.3084}>
        <Text
          x={875.51477}
          y={555.33362}
          fontSize="18.3083992px"
          fontFamily="Moscow Sans"
          fill="#1d1d1b"
        >
          {"\u041A\u0440\u0430\u0441\u043D\u044B\u0439"}
        </Text>
        <Text
          x={875.51465}
          y={576.0434}
          fontSize="18.3083992px"
          fontFamily="Moscow Sans"
          fill="#1d1d1b"
        >
          {"\u0411\u0430\u043B\u0442\u0438\u0435\u0446"}
        </Text>
      </G>
      <Path
        d="M776.431 1006.028a5.572 5.8 0 01-5.572 5.8 5.572 5.8 0 01-5.572-5.8 5.572 5.8 0 015.572-5.8 5.572 5.8 0 015.572 5.8z"
        opacity={1}
        fill="#fff"
        fillOpacity={1}
        stroke="none"
        strokeWidth={1.13583684}
        strokeMiterlimit={4}
        strokeDasharray="none"
        strokeOpacity={1}
      />
      <Path
        d="M778.51 998.383c-4.3-4.3-11.2-4.3-15.5 0-4.3 4.3-4.3 11.2 0 15.5 4.3 4.3 11.2 4.3 15.5 0 4.3-4.2 4.3-11.1 0-15.5zm-4.2 11.3c-1.9 1.9-4.9 1.9-6.9 0s-1.9-4.9 0-6.9c1.9-1.9 4.9-1.9 6.9 0 1.8 1.7 1.8 4.8 0 6.9z"
        fill = {this.state.Branch7} onPress = {this.Handler7}
        fillOpacity={1}
      />
      <Path
        d="M928.236 906.065a2 2 0 11-2.708 2.944 2 2 0 012.708-2.945z"
        opacity={1}
        fill="#858585"
        fillOpacity={0.45882353}
        stroke="none"
        strokeWidth={1.04900002}
        strokeMiterlimit={4}
        strokeDasharray="none"
        strokeOpacity={1}
      />
      <Path
        d="M948.86 861.408c10.3-10.3 12.8-16.3 12.8-31.6l-.065-95.895 7.4-.201-.335 96.396c-.375 19.6-2.25 24.35-15 36.7l-19.652 21.534-5.91-5.377z"
        fill = {this.state.d1} onPress = {this.Handler_d1}
        fillOpacity={1}
      />
      <Path
        d="M950.61 863.158c10.3-10.3 13.013-18.05 13.05-33.35l.223-93.836 2.863.053-.336 93.833c-.375 19.6-3.07 23.475-13.875 35.825l-19.277 20.284-3.035-2.377z"
        fill="#fff"
        fillOpacity={1}
      />
      <Path
        d="M937.035 889.307c-2.3-5.7-8.8-8.2-14.5-6-5.7 2.2-8.2 8.8-6 14.5 2.3 5.7 8.8 8.2 14.5 6 5.8-2.5 8.5-9 6-14.5zm-8.2 8.8c-2.5 1-5.5-.3-6.5-2.5-1-2.5.3-5.5 2.5-6.5 2.5-1 5.5.3 6.5 2.5 1.1 2.6 0 5.4-2.5 6.5zM777.947 1030.167c-2.3-5.7-8.8-8.2-14.5-6-5.7 2.2-8.2 8.8-6 14.5 2.3 5.7 8.8 8.2 14.5 6 5.8-2.5 8.5-9 6-14.5zm-8.2 8.8c-2.5 1-5.5-.3-6.5-2.5-1-2.5.3-5.5 2.5-6.5 2.5-1 5.5.3 6.5 2.5 1.1 2.6 0 5.4-2.5 6.5z"
        fill = {this.state.d1} onPress = {this.Handler_d1}
        fillOpacity={1}
      />
      <Path
        d="M1034.3594 611.81653H1041.3594V681.5432679999999H1034.3594z"
        fill = {this.state.Branch9} onPress = {this.Handler9}
        strokeWidth={1.75225675}
      />
      <Path
        d="M1032.275 402.295v94.225h.1l.01 20.474c.028 8.11-4.34 12.77-14.14 12.836l-35.448.582c-13.098.175-22.083 6.495-21.853 20.535.225 16.238.146 40.485.146 40.485l7.72-.104.01-40.277c-.081-8.11 4.256-12.801 14.056-12.932l35.396-.38c13.1-.088 22.127-6.547 21.99-20.589-.116-16.238-.17-26.386-.17-26.386h-.088v-88.47z"
        fill = {this.state.d1} onPress = {this.Handler_d1}
        fillOpacity={1}
        strokeWidth={0.79169375}
      />
      <Path
        d="M1034.475 401.121v94.108h.195l.078 21.505c.013 12.73-8.579 15.033-16.256 15.305l-35.695.56c-12.032.647-19.973 5.34-19.617 18.803.224 16.238.228 41.13.228 41.13l3.332-.044-.281-41.162c-.098-12.728 8.477-15.089 16.152-15.412l35.674-.562c12.036-.567 20.007-5.206 19.742-18.672-.116-16.239-.047-27.13-.047-27.13l-.183.003V401.12z"
        fill="#fff"
        fillOpacity={1}
        strokeWidth={0.52144891}
      />
      <Path
        d="M975.626 597.436c-2.3-5.7-8.8-8.2-14.5-6-5.7 2.2-8.2 8.8-6 14.5 2.3 5.7 8.8 8.2 14.5 6 5.8-2.5 8.5-9 6-14.5zm-8.2 8.8c-2.5 1-5.5-.3-6.5-2.5-1-2.5.3-5.5 2.5-6.5 2.5-1 5.5.3 6.5 2.5 1.1 2.6 0 5.4-2.5 6.5z"
        fill = {this.state.d1} onPress = {this.Handler_d1}
        fillOpacity={1}
      />
      <Path
        d="M961.66 609.078v86.762h-.1v21.533h7.73V697.39h.099v-88.31z"
        fill = {this.state.d1} onPress = {this.Handler_d1}
        fillOpacity={1}
        strokeWidth={0.76644027}
      />
      <Path
        d="M963.86 607.906v87.588h-.1v21.887h3.322v-19.455h.1v-90.02z"
        fill="#fff"
        fillOpacity={1}
        strokeWidth={0.51000106}
      />
      <Path
        d="M975.588 721.259c-2.3-5.7-8.8-8.2-14.5-6-5.7 2.2-8.2 8.8-6 14.5 2.3 5.7 8.8 8.2 14.5 6 5.8-2.5 8.5-9 6-14.5zm-8.2 8.8c-2.5 1-5.5-.3-6.5-2.5-1-2.5.3-5.5 2.5-6.5 2.5-1 5.5.3 6.5 2.5 1.1 2.6 0 5.4-2.5 6.5z"
        fill = {this.state.d1} onPress = {this.Handler_d1}
        fillOpacity={1}
      />
      <Path
        d="M1032.275 283.90814H1040.0041899V386.29537H1032.275z"
        fill = {this.state.d1} onPress = {this.Handler_d1}
        fillOpacity={1}
        strokeWidth={0.82527262}
      />
      <Path
        d="M1034.475 282.15042H1037.7970338999999V392.28719H1034.475z"
        fill="#fff"
        fillOpacity={1}
        strokeWidth={0.5641157}
      />
      <Path
        d="M1046.18 388.75c-2.3-5.7-8.8-8.2-14.5-6-5.7 2.2-8.2 8.8-6 14.5 2.3 5.7 8.8 8.2 14.5 6 5.8-2.5 8.5-9 6-14.5zm-8.2 8.8c-2.5 1-5.5-.3-6.5-2.5-1-2.5.3-5.5 2.5-6.5 2.5-1 5.5.3 6.5 2.5 1.1 2.6 0 5.4-2.5 6.5z"
        fill = {this.state.d1} onPress = {this.Handler_d1}
        fillOpacity={1}
      />
      <Path
        d="M1259.909 406.77c-32-5.2-118.805-2.826-171.614 7.973l-4.673.08c-.6.01 1.406-.494 1.406-2.694.3-1.9-1.806-5.293-1.106-5.306l4.373-.08c51.162-9.253 139.725-12.217 172.125-7.017.6.3.452 1.458.252 3.658-.2 1.8-.163 3.587-.763 3.387z"
        fill = {this.state.Branch1} onPress = {this.Handler1}
      />
      <Path
        d="M1262.39 401.51l-.068 3.17c-35.33-5.86-123.712-1.223-170.365 6.327l-6.929 1.122 2.395-3.327 3.982-.453c36.888-6.837 130.376-12.128 169.578-6.517z"
        fill="#fff"
      />
      <Path
        d="M1121.261 379.922c-2.3-5.7-8.8-8.2-14.5-6-5.7 2.2-8.2 8.8-6 14.5 2.3 5.7 8.8 8.2 14.5 6 5.8-2.5 8.5-9 6-14.5zm-8.2 8.8c-2.5 1-5.5-.3-6.5-2.5-1-2.5.3-5.5 2.5-6.5 2.5-1 5.5.3 6.5 2.5 1.1 2.6 0 5.4-2.5 6.5z"
        fill = {this.state.limeBranch} onPress = {this.limeHandler}
      />
      <Path
        d="M1088.989 407.723c-2.3-5.7-8.8-8.2-14.5-6-5.7 2.2-8.2 8.8-6 14.5 2.3 5.7 8.8 8.2 14.5 6 5.8-2.5 8.5-9 6-14.5zm-8.2 8.8c-2.5 1-5.5-.3-6.5-2.5-1-2.5.3-5.5 2.5-6.5 2.5-1 5.5.3 6.5 2.5 1.1 2.6 0 5.4-2.5 6.5z"
        fill = {this.state.Branch1} onPress = {this.Handler1}
        fillOpacity={1}
      />
      <Path
        d="M1032.1639 112.80457H1039.8930899V227.21017H1032.1639z"
        fill = {this.state.d1} onPress = {this.Handler_d1}
        fillOpacity={1}
        strokeWidth={0.87236488}
      />
      <Path
        d="M1034.3639 109.19884H1037.6859339V227.72481H1034.3639z"
        fill="#fff"
        fillOpacity={1}
        strokeWidth={0.58520597}
      />
      <Path
        d="M1032.275 228.13812H1040.0041899V283.90812H1032.275z"
        fill = {this.state.d1} onPress = {this.Handler_d1}
        fillOpacity={1}
        strokeWidth={0.60908073}
      />
      <Path
        d="M1034.475 226.38042H1037.7970338999999V284.159H1034.475z"
        fill="#fff"
        fillOpacity={1}
        strokeWidth={0.40858781}
      />
      <Path
        d="M1039 223.853a3.956 3.956 0 00-5.615 0 3.96 3.96 0 000 5.617 3.956 3.956 0 005.614 0c1.594-1.486 1.594-3.986 0-5.617zm-1.522 4.131c-.689.689-1.775.689-2.5 0-.688-.688-.688-1.775 0-2.5.689-.689 1.775-.689 2.5 0 .652.652.652 1.812 0 2.5zM1038.955 281.128a3.956 3.956 0 00-5.615 0 3.96 3.96 0 000 5.617 3.956 3.956 0 005.615 0c1.593-1.486 1.593-3.987 0-5.617zm-1.522 4.131c-.688.689-1.775.689-2.499 0-.688-.689-.688-1.776 0-2.5.688-.69 1.775-.69 2.5 0 .651.652.651 1.811 0 2.5z"
        fill = {this.state.d1} onPress = {this.Handler_d1}
        fillOpacity={1}
        strokeWidth={0.30948851}
      />
      <Path
        d="M1245.425 382.592l4.934 4.965-93.551 93.855-4.935-4.965zM1277.628 349.72l-21.385 21.214 5.179 5.22 21.386-21.414c11.949-12.152 15.08-20.14 15.146-36.54l.153-20-8-.031.049 19.7c.04 14.9-1.684 20.894-12.528 31.85z"
        fill = {this.state.Branch9} onPress = {this.Handler9}
        fillOpacity={1}
      />
      <Text
        fontSize="18.3083992px"
        x={1281.5209}
        y={381.91074}
        fontFamily="Moscow Sans"
        fill="#1d1d1b"
      >
        {"\u0412\u043B\u0430\u0434\u044B\u043A\u0438\u043D\u043E"}
      </Text>
      <Path
        d="M1269.7194 494.81055H1298.708555V513.8105499999999H1269.7194z"
        fillOpacity={0.65}
        fill="#fff"
      />
      <Text
        fontSize="18.3083992px"
        x={1281.5209}
        y={381.91074}
        fontFamily="Moscow Sans"
        fill="#1d1d1b"
      >
        {"\u0412\u043B\u0430\u0434\u044B\u043A\u0438\u043D\u043E"}
      </Text>
      <Path
        d="M902.196 31.152h89.774v7.729h-89.774z"
        fill = {this.state.d1} onPress = {this.Handler_d1}
        fillOpacity={1}
        strokeWidth={0.77274734}
      />
      <Path
        d="M900.16852 33.427052H992.1158089999999V36.749085900000004H900.16852z"
        fill="#fff"
        fillOpacity={1}
        strokeWidth={0.51582295}
      />
      <Path
        d="M970.042 32.206a3.956 3.956 0 00-5.615 0 3.96 3.96 0 000 5.617 3.956 3.956 0 005.615 0c1.593-1.486 1.593-3.986 0-5.617zm-1.522 4.131c-.688.689-1.775.689-2.499 0-.688-.688-.688-1.775 0-2.5.688-.689 1.775-.689 2.5 0 .651.652.651 1.812 0 2.5z"
        fill = {this.state.d1} onPress = {this.Handler_d1}
        fillOpacity={1}
        strokeWidth={0.30948851}
      />
      <Path
        d="M811.86047 31.183064H900.707401V38.9122539H811.86047z"
        fill = {this.state.d1} onPress = {this.Handler_d1}
        fillOpacity={1}
        strokeWidth={0.76874942}
      />
      <Path
        d="M809.85358 33.458302H900.851917V36.780335900000004H809.85358z"
        fill="#fff"
        fillOpacity={1}
        strokeWidth={0.51315421}
      />
      <Path
        d="M904.28 32.243a3.956 3.956 0 00-5.615 0 3.96 3.96 0 000 5.617 3.956 3.956 0 005.615 0c1.593-1.486 1.593-3.987 0-5.617zm-1.522 4.131c-.688.689-1.775.689-2.5 0-.688-.688-.688-1.776 0-2.5.689-.69 1.776-.69 2.5 0 .652.652.652 1.812 0 2.5z"
        fill = {this.state.d1} onPress = {this.Handler_d1}
        fillOpacity={1}
        strokeWidth={0.30948851}
      />
      <Path
        d="M720.86212 31.183064H809.709051V38.9122539H720.86212z"
        fill = {this.state.d1} onPress = {this.Handler_d1}
        fillOpacity={1}
        strokeWidth={0.76874942}
      />
      <Path
        d="M718.85522 33.458302H809.853557V36.780335900000004H718.85522z"
        fill="#fff"
        fillOpacity={1}
        strokeWidth={0.51315421}
      />
      <Path
        d="M813.36 32.226a3.956 3.956 0 00-5.615 0 3.96 3.96 0 000 5.617 3.956 3.956 0 005.615 0c1.594-1.486 1.594-3.986 0-5.617zm-1.521 4.131c-.689.689-1.775.689-2.5 0-.688-.688-.688-1.775 0-2.5.689-.689 1.775-.689 2.5 0 .652.652.652 1.812 0 2.5z"
        fill = {this.state.d1} onPress = {this.Handler_d1}
        fillOpacity={1}
        strokeWidth={0.30948851}
      />
      <Path
        d="M629.86377 31.183064H718.7107010000001V38.9122539H629.86377z"
        fill = {this.state.d1} onPress = {this.Handler_d1}
        fillOpacity={1}
        strokeWidth={0.76874942}
      />
      <Path
        d="M627.85687 33.458302H718.855207V36.780335900000004H627.85687z"
        fill="#fff"
        fillOpacity={1}
        strokeWidth={0.51315421}
      />
      <Path
        d="M722.32 32.314a3.956 3.956 0 00-5.615 0 3.96 3.96 0 000 5.618 3.956 3.956 0 005.615 0c1.594-1.486 1.594-3.987 0-5.618zm-1.521 4.132c-.689.688-1.775.688-2.5 0-.688-.689-.688-1.776 0-2.5.689-.69 1.775-.69 2.5 0 .652.651.652 1.811 0 2.5z"
        fill = {this.state.d1} onPress = {this.Handler_d1}
        fillOpacity={1}
        strokeWidth={0.30948851}
      />
      <Path
        d="M538.86542 31.183064H627.712351V38.9122539H538.86542z"
        fill = {this.state.d1} onPress = {this.Handler_d1}
        fillOpacity={1}
        strokeWidth={0.76874942}
      />
      <Path
        d="M536.85852 33.458302H627.856857V36.780335900000004H536.85852z"
        fill="#fff"
        fillOpacity={1}
        strokeWidth={0.51315421}
      />
      <Path
        d="M631.626 32.252a3.956 3.956 0 00-5.615 0 3.96 3.96 0 000 5.617 3.956 3.956 0 005.615 0c1.594-1.486 1.594-3.986 0-5.617zm-1.521 4.131c-.689.689-1.775.689-2.5 0-.688-.688-.688-1.776 0-2.5.689-.689 1.775-.689 2.5 0 .652.652.652 1.812 0 2.5z"
        fill = {this.state.d1} onPress = {this.Handler_d1}
        fillOpacity={1}
        strokeWidth={0.30948851}
      />
      <LinearGradient
        xlinkHref="#LinearGradient67856"
        id="o"
        gradientUnits="userSpaceOnUse"
        gradientTransform="matrix(0.1006,-0.1006,0.1006,0.1006,19563.711,23375.783)"
        x1={18461.189}
        y1={-206287.75}
        x2={18531.062}
        y2={-206287.75}
      />
      <Path
        d="M679.1 762.3l-7.2 7.1-6.7-7.1 6.9-7z"
        transform="rotate(-38.05 1095.369 751.158)"
        fill="url(#o)"
      />
      <Path
        transform="rotate(6.95)"
        d="M885.39331 907.11255H888.5932793000001V934.612287H885.39331z"
        fill="#fff"
        strokeWidth={0.9999904}
      />
      <G fontSize="18.3084px">
        <Text
          transform="translate(242.338 330.381) translate(530.316 746.862)"
          fontSize="18.3083992px"
          fontFamily="Moscow Sans"
          fill="#1d1d1b"
        >
          {"\u0423\u043B\u0438\u0446\u0430"}
        </Text>
        <Text
          transform="translate(242.338 330.381) translate(532.197 767.829)"
          fontSize="18.3083992px"
          fontFamily="Moscow Sans"
          fill="#1d1d1b"
        >
          {"1905 \u0433\u043E\u0434\u0430"}
        </Text>
      </G>
      <Path
        d="M836.28094 627.05103H913.016734V642.973437H836.28094z"
        fill="#fff"
        fillOpacity={0.65}
        strokeWidth={1.145715}
      />
      <Text
        fontSize="16.3083992px"
        x={840.2063}
        y={640.36267}
        fontFamily="Moscow Sans"
        fill="#1d1d1b"
      >
        {"\u0413\u0440\u0430\u0436\u0434\u0430\u043D\u0441\u043A\u0430\u044F"}
      </Text>
      <Text
        y={289.39136}
        x={937.65411}
        fontSize="18.3083992px"
        fontFamily="Moscow Sans"
        fill="#1d1d1b"
      >
        {"\u0414\u0435\u0433\u0443\u043D\u0438\u043D\u043E"}
      </Text>
      <Text
        y={232.59059}
        x={899.82233}
        fontSize="18.3083992px"
        fontFamily="Moscow Sans"
        fill="#1d1d1b"
      >
        {
          "\u0411\u0435\u0441\u043A\u0443\u0434\u043D\u0438\u043A\u043E\u0432\u043E"
        }
      </Text>
      <Text
        fontSize="18.3083992px"
        x={1047.8391}
        y={59.413864}
        fontFamily="Moscow Sans"
        fill="#1d1d1b"
      >
        {"\u041C\u0430\u0440\u043A"}
      </Text>
      <Text
        fontSize="18.3083992px"
        x={985.42358}
        y={22.617828}
        fontFamily="Moscow Sans"
        fill="#1d1d1b"
      >
        {"\u041D\u043E\u0432\u043E\u0434\u0430\u0447\u043D\u0430\u044F"}
      </Text>
      <Text
        fontSize="18.3083992px"
        x={836.39783}
        y={21.994099}
        fontFamily="Moscow Sans"
        fill="#1d1d1b"
      >
        {
          "\u0414\u043E\u043B\u0433\u043E\u043F\u0440\u0443\u0434\u043D\u0430\u044F"
        }
      </Text>
      <Text
        fontSize="18.3083992px"
        x={768.4408}
        y={59.457664}
        fontFamily="Moscow Sans"
        fill="#1d1d1b"
      >
        {"\u0412\u043E\u0434\u043D\u0438\u043A\u0438"}
      </Text>
      <Text
        fontSize="18.3083992px"
        x={663.4433}
        y={25.35672}
        fontFamily="Moscow Sans"
        fill="#1d1d1b"
      >
        {"\u0425\u043B\u0435\u0431\u043D\u0438\u043A\u043E\u0432\u043E"}
      </Text>
      <Text
        fontSize="18.3083992px"
        x={547.06616}
        y={59.064011}
        fontFamily="Moscow Sans"
        fill="#1d1d1b"
      >
        {
          "\u0428\u0435\u0440\u0435\u043C\u0435\u0442\u044C\u0435\u0432\u0441\u043A\u0430\u044F"
        }
      </Text>
      <Text
        fontSize="18.3083992px"
        x={503.48529}
        y={23.270824}
        fontFamily="Moscow Sans"
        fill="#1d1d1b"
      >
        {"\u041B\u043E\u0431\u043D\u044F"}
      </Text>
      <Path
        d="M136.58701 711.24139H144.3161999V767.01139H136.58701z"
        fill = {this.state.d1} onPress = {this.Handler_d1}
        fillOpacity={1}
        strokeWidth={0.60908073}
      />
      <Path
        d="M138.78696 709.4837H142.1089939V767.26228H138.78696z"
        fill="#fff"
        fillOpacity={1}
        strokeWidth={0.40858781}
      />
      <Path
        d="M143.203 765.356a3.956 3.956 0 00-5.615 0 3.96 3.96 0 000 5.617 3.956 3.956 0 005.615 0c1.593-1.485 1.593-3.986 0-5.617zm-1.522 4.132c-.688.688-1.775.688-2.5 0-.687-.689-.687-1.776 0-2.501.69-.689 1.776-.689 2.5 0 .652.652.652 1.812 0 2.5z"
        fill = {this.state.d1} onPress = {this.Handler_d1}
        fillOpacity={1}
        strokeWidth={0.30948851}
      />
      <Path
        d="M136.58701 653.46283H144.3161999V709.23283H136.58701z"
        fill = {this.state.d1} onPress = {this.Handler_d1}
        fillOpacity={1}
        strokeWidth={0.60908073}
      />
      <Path
        d="M138.78696 651.70514H142.1089939V709.4837200000001H138.78696z"
        fill="#fff"
        fillOpacity={1}
        strokeWidth={0.40858781}
      />
      <Path
        d="M136.58701 595.68427H144.3161999V651.45427H136.58701z"
        fill = {this.state.d1} onPress = {this.Handler_d1}
        fillOpacity={1}
        strokeWidth={0.60908073}
      />
      <Path
        d="M138.78696 593.92657H142.1089939V651.70515H138.78696z"
        fill="#fff"
        fillOpacity={1}
        strokeWidth={0.40858781}
      />
      <Path
        d="M143.26 649.507a3.956 3.956 0 00-5.615 0 3.96 3.96 0 000 5.618 3.956 3.956 0 005.615 0c1.593-1.486 1.593-3.987 0-5.618zm-1.522 4.132c-.688.688-1.775.688-2.499 0-.688-.689-.688-1.776 0-2.501.688-.689 1.775-.689 2.5 0 .651.652.651 1.812 0 2.5z"
        fill = {this.state.d1} onPress = {this.Handler_d1}
        fillOpacity={1}
        strokeWidth={0.30948851}
      />
      <G transform="translate(-109.9 473.025)">
        <LinearGradient>
          <Stop offset={0} stopColor="#8e8e8e" stopOpacity={1} />
          <Stop offset={1} stopColor="#f5e3ea" stopOpacity={0} />
        </LinearGradient>
        <Path
          d="M246.431 63.432h7.73l.056 58.727-3.929-3.014-3.857 2.786z"
          fill="url(#LinearGradient7639)"
          fillOpacity={1}
          strokeWidth={0.60908073}
        />
        <Path
          d="M248.63095 61.674545H251.95298390000002V119.453125H248.63095z"
          fill="#fff"
          fillOpacity={1}
          strokeWidth={0.40858781}
        />
      </G>
      <Path
        d="M143.188 591.828a3.956 3.956 0 00-5.614 0 3.96 3.96 0 000 5.617 3.956 3.956 0 005.614 0c1.594-1.486 1.594-3.986 0-5.617zm-1.52 4.131c-.69.689-1.776.689-2.5 0-.689-.688-.689-1.775 0-2.5.688-.689 1.775-.689 2.499 0 .652.652.652 1.812 0 2.5z"
        fill = {this.state.d1} onPress = {this.Handler_d1}
        fillOpacity={1}
        strokeWidth={0.30948851}
      />
      <Text
        y={598.28253}
        x={152.69994}
        fontSize="18.3083992px"
        fontFamily="Moscow Sans"
        fill="#1d1d1b"
      >
        {"\u041E\u0434\u0438\u043D\u0446\u043E\u0432\u043E"}
      </Text>
      <Text
        y={773.10901}
        x={150.73079}
        fontSize="18.3083992px"
        fontFamily="Moscow Sans"
        fill="#1d1d1b"
      >
        {"\u041D\u0435\u043C\u0447\u0438\u043D\u043E\u0432\u043A\u0430"}
      </Text>
      <Text
        y={714.42627}
        x={152.69994}
        fontSize="18.3083992px"
        fontFamily="Moscow Sans"
        fill="#1d1d1b"
      >
        {"\u0421\u043A\u043E\u043B\u043A\u043E\u0432\u043E"}
      </Text>
      <Text
        y={658.33502}
        x={151.93993}
        fontSize="18.3083992px"
        fontFamily="Moscow Sans"
        fill="#1d1d1b"
      >
        {"\u0411\u0430\u043A\u043E\u0432\u043A\u0430"}
      </Text>
      <Path
        d="M1638.825 1206.852a2 2 0 11-3.716 1.477 2 2 0 013.716-1.477zm-3.286 5.299a2 2 0 11-3.716 1.478 2 2 0 013.716-1.478z"
        opacity={1}
        fill="#858585"
        fillOpacity={0.45882353}
        stroke="none"
        strokeWidth={1.04900002}
        strokeMiterlimit={4}
        strokeDasharray="none"
        strokeOpacity={1}
      />
      <G fontSize={18.2193}>
        <Text
          x={689.74994}
          y={1210.0762}
          fontSize="18.21929932px"
          fontFamily="Moscow Sans"
          fill="#1d1d1b"
        >
          {"\u0414\u0435\u043B\u043E\u0432\u043E\u0439"}
        </Text>
        <Text
          x={709.75232}
          y={1231.973}
          fontSize="18.21929932px"
          fontFamily="Moscow Sans"
          fill="#1d1d1b"
        >
          {"\u0446\u0435\u043D\u0442\u0440"}
        </Text>
      </G>
      <Text
        y={1078.3768}
        x={648.87042}
        fontSize="18.21929932px"
        fontFamily="Moscow Sans"
        fill="#1d1d1b"
      >
        {"\u0428\u0435\u043B\u0435\u043F\u0438\u0445\u0430"}
      </Text>
      <Text
        y={1078.3768}
        x={648.87042}
        fontSize="18.21929932px"
        fontFamily="Moscow Sans"
        fill="#1d1d1b"
      >
        {"\u0428\u0435\u043B\u0435\u043F\u0438\u0445\u0430"}
      </Text>
      <Text
        y={400.17166}
        x={920.43921}
        fontSize="18.3083992px"
        fontFamily="Moscow Sans"
        fill="#1d1d1b"
      >
        {"\u041E\u043A\u0440\u0443\u0436\u043D\u0430\u044F"}
      </Text>
      <Text
        y={389.68283}
        x={1129.1809}
        fontSize="18.3083992px"
        fontFamily="Moscow Sans"
        fill="#1d1d1b"
      >
        {"\u041E\u043A\u0440\u0443\u0436\u043D\u0430\u044F"}
      </Text>
      <Text
        y={389.68283}
        x={1129.1809}
        fontSize="18.3083992px"
        fontFamily="Moscow Sans"
        fill="#1d1d1b"
      >
        {"\u041E\u043A\u0440\u0443\u0436\u043D\u0430\u044F"}
      </Text>
      <Text
        fontSize="18.3083992px"
        x={641.80341}
        y={549.72821}
        fontFamily="Moscow Sans"
        fill="#1d1d1b"
      >
        {"\u0421\u0442\u0440\u0435\u0448\u043D\u0435\u0432\u043E"}
      </Text>
      <Text
        y={1127.7424}
        x={700.95013}
        fontSize="18.3083992px"
        fontFamily="Moscow Sans"
        fill="#1d1d1b"
      >
        {"\u0422\u0435\u0441\u0442\u043E\u0432\u0441\u043A\u0430\u044F"}
      </Text>
      <Path
        d="M1834.0033 1411.2495H1862.191778V1426.2495H1834.0033z"
        fillOpacity={0.65}
        fill="#fff"
      />
      <Text
        fontSize="18.3083992px"
        x={1049.4661}
        y={117.03519}
        fontFamily="Moscow Sans"
        fill="#1d1d1b"
      >
        {"\u041B\u0438\u0430\u043D\u043E\u0437\u043E\u0432\u043E"}
      </Text>
      <Text
        y={732.00281}
        x={840.57532}
        fontSize="18.3083992px"
        fontFamily="Moscow Sans"
        fill="#1d1d1b"
      >
        {"\u0421\u0430\u0432\u0435\u043B\u043E\u0432\u0441\u043A\u0430\u044F"}
      </Text>
      <Text
        transform="rotate(.049)"
        fontSize="18.3083992px"
        x={754.71173}
        y={983.55469}
        fontFamily="Moscow Sans"
        fill="#1d1d1b"
      >
        {"\u0411\u0435\u0433\u043E\u0432\u0430\u044F"}
      </Text>
      <Text
        transform="rotate(-.008)"
        fontSize="18.3083992px"
        x={810.46332}
        y={940.32788}
        fontFamily="Moscow Sans"
        fill="#1d1d1b"
      >
        {"\u0411\u0435\u043B\u043E\u0440\u0443\u0441\u0441\u043A\u0430\u044F"}
      </Text>
      <Path
        d="M457.055 1309.812a2 2 0 11-.949-3.887 2 2 0 01.949 3.886zm4.793 3.988a2 2 0 11-.948-3.887 2 2 0 01.948 3.887zm5.21 4.374a2 2 0 11-.949-3.886 2 2 0 01.949 3.886zm4.968 4.159a2 2 0 11-.949-3.887 2 2 0 01.949 3.887zM592.17 1114.548a2 2 0 112.38-3.214 2 2 0 01-2.38 3.214zm.11 5.773a2 2 0 112.38-3.214 2 2 0 01-2.38 3.214zm.212 6.061a2 2 0 112.38-3.214 2 2 0 01-2.38 3.214zm.002 5.806a2 2 0 112.381-3.214 2 2 0 01-2.381 3.214zm.155 5.783a2 2 0 112.38-3.214 2 2 0 01-2.38 3.214zm.013 6.095a2 2 0 112.38-3.213 2 2 0 01-2.38 3.214zm-.099 6.437a2 2 0 112.381-3.213 2 2 0 01-2.381 3.214zm.037 6.255a2 2 0 112.381-3.214 2 2 0 01-2.381 3.214zm35.757-50.946a2 2 0 113.173 2.436 2 2 0 01-3.173-2.436zm-6.064.108a2 2 0 113.172 2.436 2 2 0 01-3.172-2.436zm-5.805-.098a2 2 0 113.172 2.436 2 2 0 01-3.172-2.436zm-5.785.055a2 2 0 113.172 2.436 2 2 0 01-3.172-2.436zm-6.095-.092a2 2 0 113.173 2.436 2 2 0 01-3.173-2.436zm-6.434-.21a2 2 0 113.172 2.436 2 2 0 01-3.172-2.436zm-6.254-.07a2 2 0 113.172 2.436 2 2 0 01-3.172-2.437zm84.421.594a2 2 0 113.173 2.436 2 2 0 01-3.173-2.436zm-5.773.01a2 2 0 113.172 2.437 2 2 0 01-3.172-2.437zm-6.065.108a2 2 0 113.173 2.436 2 2 0 01-3.173-2.436zm-5.805-.098a2 2 0 113.173 2.437 2 2 0 01-3.173-2.437zm-5.785.055a2 2 0 113.173 2.436 2 2 0 01-3.173-2.436zm-6.094-.092a2 2 0 113.172 2.436 2 2 0 01-3.172-2.436zm-6.435-.21a2 2 0 113.173 2.437 2 2 0 01-3.173-2.436zm-6.254-.07a2 2 0 113.173 2.436 2 2 0 01-3.173-2.436z"
        opacity={1}
        fill="#858585"
        fillOpacity={0.45882353}
        stroke="none"
        strokeWidth={1.04900002}
        strokeMiterlimit={4}
        strokeDasharray="none"
        strokeOpacity={1}
      />
      <Path
        d="M700.102 1100.218c-2.3-5.7-8.8-8.2-14.5-6-5.7 2.2-8.2 8.8-6 14.5 2.3 5.7 8.8 8.2 14.5 6 5.8-2.5 8.5-9 6-14.5zm-8.2 8.8c-2.5 1-5.5-.3-6.5-2.5-1-2.5.3-5.5 2.5-6.5 2.5-1 5.5.3 6.5 2.5 1.1 2.6 0 5.4-2.5 6.5z"
        fill = {this.state.d1} onPress = {this.Handler_d1}
        fillOpacity={1}
      />
      <Path
        d="M735.222 1190.414a2 2 0 11-3.467-1.996 2 2 0 013.467 1.996zm-6.054.714a2 2 0 11-3.466-1.996 2 2 0 013.466 1.996zm-5.727.818a2 2 0 11-3.467-1.996 2 2 0 013.467 1.996zm-5.767.67a2 2 0 11-3.466-1.997 2 2 0 013.466 1.996zm-5.997.907a2 2 0 11-3.467-1.997 2 2 0 013.467 1.997zm-5.722.772a2 2 0 11-3.466-1.996 2 2 0 013.466 1.996zm-5.589 1.046a2 2 0 11-3.466-1.996 2 2 0 013.466 1.996zm40.903-56.39a2 2 0 11-2.488 3.133 2 2 0 012.488-3.133zm-.173 6.252a2 2 0 11-2.487 3.133 2 2 0 012.487-3.133zm-.314 6.43a2 2 0 11-2.488 3.133 2 2 0 012.488-3.133zm-.192 6.093a2 2 0 11-2.487 3.132 2 2 0 012.487-3.132zm-.04 5.785a2 2 0 11-2.487 3.132 2 2 0 012.488-3.132zm-.192 5.802a2 2 0 11-2.488 3.133 2 2 0 012.488-3.133zm.01 6.066a2 2 0 11-2.489 3.132 2 2 0 012.488-3.132zm-.085 5.773a2 2 0 11-2.488 3.132 2 2 0 012.488-3.132zm.207 5.682a2 2 0 11-2.488 3.132 2 2 0 012.488-3.132zm.358-50.325a2 2 0 11-1.465-3.722 2 2 0 011.465 3.722zm-5.177-3.216a2 2 0 11-1.465-3.722 2 2 0 011.465 3.722zm-4.987-2.932a2 2 0 11-1.466-3.722 2 2 0 011.466 3.722zm-4.926-3.073a2 2 0 11-1.466-3.722 2 2 0 011.466 3.722zm-5.255-3.03a2 2 0 11-1.465-3.722 2 2 0 011.465 3.722zm-4.954-2.964a2 2 0 11-1.465-3.722 2 2 0 011.465 3.722zm-5.022-2.667a2 2 0 11-1.465-3.722 2 2 0 011.465 3.722zM683.442 1094.053a2 2 0 111.108 3.843 2 2 0 01-1.108-3.843zm-4.652-3.418a2 2 0 111.107 3.844 2 2 0 01-1.107-3.844zm-4.946-3.512a2 2 0 111.108 3.843 2 2 0 01-1.108-3.843zm-4.613-3.524a2 2 0 111.107 3.844 2 2 0 01-1.107-3.844zm-4.69-3.389a2 2 0 111.108 3.844 2 2 0 01-1.107-3.844zm-4.85-3.69a2 2 0 111.108 3.843 2 2 0 01-1.108-3.844zm-5.055-3.988a2 2 0 111.108 3.844 2 2 0 01-1.108-3.844zm-4.991-3.768a2 2 0 111.108 3.843 2 2 0 01-1.108-3.843z"
        opacity={1}
        fill="#858585"
        fillOpacity={0.45882353}
        stroke="none"
        strokeWidth={1.04900002}
        strokeMiterlimit={4}
        strokeDasharray="none"
        strokeOpacity={1}
      />
      <Text
        fontSize="18.31080055px"
        transform="translate(1361.671 2006.495)"
        fontFamily="Moscow Sans"
        fill="#1d1d1b"
      >
        {"\u0426\u0430\u0440\u0438\u0446\u044B\u043D\u043E"}
      </Text>
      <Text
        fontSize="18.31080055px"
        transform="translate(1361.671 2006.495)"
        fontFamily="Moscow Sans"
        fill="#1d1d1b"
      >
        {"\u0426\u0430\u0440\u0438\u0446\u044B\u043D\u043E"}
      </Text>
      <Text
        fontSize="18.3083992px"
        x={1797.5295}
        y={1503.0154}
        fontFamily="Moscow Sans"
        fill="#1d1d1b"
      >
        {
          "\u0422\u0435\u043A\u0441\u0442\u0438\u043B\u044C\u0449\u0438\u043A\u0438"
        }
      </Text>
      <Text
        fontSize="18.3083992px"
        x={1797.5295}
        y={1503.0154}
        fontFamily="Moscow Sans"
        fill="#1d1d1b"
      >
        {
          "\u0422\u0435\u043A\u0441\u0442\u0438\u043B\u044C\u0449\u0438\u043A\u0438"
        }
      </Text>
      <Text
        fontSize="18.3083992px"
        transform="translate(1571.3 1075.565)"
        fontFamily="Moscow Sans"
        fill="#1d1d1b"
      >
        {"\u041A\u0443\u0440\u0441\u043A\u0430\u044F"}
      </Text>
      <Path
        d="M1263.337 2100.917a3.956 3.956 0 00-5.615 0 3.96 3.96 0 000 5.617 3.956 3.956 0 005.615 0c1.593-1.485 1.593-3.986 0-5.617zm-1.522 4.132c-.688.688-1.775.688-2.499 0-.688-.689-.688-1.776 0-2.501.688-.689 1.775-.689 2.5 0 .651.652.651 1.812 0 2.5zM1530.645 1871.017a3.956 3.956 0 00-5.615 0 3.96 3.96 0 000 5.617 3.956 3.956 0 005.615 0c1.593-1.485 1.593-3.986 0-5.617zm-1.522 4.131c-.688.69-1.775.69-2.499 0-.688-.688-.688-1.775 0-2.5.688-.689 1.775-.689 2.5 0 .651.652.651 1.812 0 2.5z"
        fill = {this.state.d2} onPress = {this.Handler_d2}
        fillOpacity={1}
        strokeWidth={0.30948851}
      />
      <Path
        d="M1751.73 1559.086l-41.73 43.33-.035-.027-51.19 50.938c-.01-.01-.01-.01-.017-.013v-.01l-.91.946-.725.72.016.017-12.03 12.488-.034-.025-34.74 35.219c.407.501.655.85 1.025 1.47 1.592 1.844 1.342 1.431 1.896 2.772l.06.086 1.437 1.861-.061-.107.07.119c0 .012.092.147.138.228-.04-.07-.084-.141-.125-.212l.104.134.033.062 30.865-31.263.05.047 3.741-3.887 1.584-1.604-.023-.018 13.77-14.296-.08-.066 45.853-45.23.047.046 3.744-3.887 1.582-1.603-.022-.02 41.555-43.15c-1.959-1.97-3.445-3.606-5.848-5.065zm-138.343 148.123l.125.289c-.033-.086-.063-.172-.1-.256-.01-.01-.02-.025-.025-.033zm1.217 1.814c.01.031.06.127.128.245l.05-.05c-.1-.124-.193-.249-.176-.195z"
        fill = {this.state.d2} onPress = {this.Handler_d2}
        fillOpacity={1}
        strokeWidth={0.60908073}
      />
      <Path
        d="M1753.832 1560.111l-40.795 42.33-.029-.043-51.824 51.702c-.03-.03-.033-.031-.065-.062l-12.973 13.463-.029-.043-35.754 36.255c.353.325.687.67 1.045.989.011.01.03.014.043.016.21.199.428.39.631.597.144.147.272.307.408.461l-.187-.222v-.012c.389.382.35.344.447.437l29.211-29.642.14.142 18.692-19.328 46.08-45.873.12.143 47.466-49.084c-.868-.754-1.852-1.575-2.627-2.225z"
        fill="#fff"
        fillOpacity={1}
        strokeWidth={0.40858781}
      />
      <Circle
        r={11.3}
        cy={1712.5909}
        cx={1604.7563}
        fill = {this.state.d2} onPress = {this.Handler_d2}
        fillOpacity={1}
      />
      <Circle r={5} cy={1712.5909} cx={1604.7563} fill="#fff" />
      <Path
        d="M1659.589 1249.607a3.956 3.956 0 00-5.615 0 3.96 3.96 0 000 5.617 3.956 3.956 0 005.615 0c1.593-1.486 1.593-3.987 0-5.617zm-1.522 4.131c-.688.689-1.775.689-2.499 0-.688-.689-.688-1.776 0-2.5.688-.69 1.775-.69 2.5 0 .651.652.651 1.811 0 2.5z"
        fill = {this.state.d2} onPress = {this.Handler_d2}
        fillOpacity={1}
        strokeWidth={0.30948851}
      />
      <Path
        d="M1749.205 1114.962c-4.3-4.3-11.2-4.3-15.5 0-4.3 4.3-4.3 11.2 0 15.5 4.3 4.3 11.2 4.3 15.5 0 4.3-4.2 4.3-11.1 0-15.5zm-4.4 11.3c-1.9 1.9-4.9 1.9-6.9 0-2.1-1.9-1.9-4.9 0-6.9s4.9-1.9 6.9 0c2.1 1.9 2.1 5.2 0 6.9z"
        fill = {this.state.Branch8} onPress = {this.Handler8}
      />
      <G transform="rotate(-89.851 350.335 -65.422)">
        <LinearGradient>
          <Stop offset={0} stopColor="#8e8e8e" stopOpacity={1} />
          <Stop offset={1} stopColor="#f5e3ea" stopOpacity={0} />
        </LinearGradient>
        <Path
          d="M246.431 63.432h7.73l.056 58.727-3.929-3.014-3.857 2.786z"
          fill="url(#LinearGradient7731)"
          fillOpacity={1}
          strokeWidth={0.60908073}
        />
        <Path
          d="M248.63095 61.674545H251.95298390000002V119.453125H248.63095z"
          fill="#fff"
          fillOpacity={1}
          strokeWidth={0.40858781}
        />
      </G>
      <Path
        d="M540.087 32.236a3.956 3.956 0 00-5.615 0 3.96 3.96 0 000 5.617 3.956 3.956 0 005.615 0c1.593-1.486 1.593-3.987 0-5.617zm-1.522 4.131c-.688.689-1.775.689-2.5 0-.687-.688-.687-1.776 0-2.5.69-.69 1.776-.69 2.5 0 .652.652.652 1.812 0 2.5z"
        fill = {this.state.d1} onPress = {this.Handler_d1}
        fillOpacity={1}
        strokeWidth={0.30948851}
      />
      <Path
        d="M1725.354 1301.116c-6 .3-10.8 5.2-10.8 11.2.3 6.2 5.2 10.8 11.2 10.8 6-.3 10.8-5.2 10.8-11.2-.2-6-5.1-10.9-11.2-10.8zm.3 16.1c-2.5.3-4.9-2.1-4.9-4.9-.3-2.5 2.1-4.9 4.9-4.9 2.5-.3 4.9 2.1 4.9 4.9 0 2.5-2.3 4.8-4.9 4.9z"
        fill = {this.state.d2} onPress = {this.Handler_d2}
        fillOpacity={1}
      />
      <LinearGradient
        gradientUnits="userSpaceOnUse"
        x1={-121578.3}
        y1={-136549.16}
        x2={-121509.11}
        y2={-136549.16}
        gradientTransform="matrix(0.32533545,0.14483948,-0.05787556,0.12999888,32695.812,35756.946)"
      >
        <Stop offset={0.1} stopColor="#f42a7c" stopOpacity={1} />
        <Stop offset={0.9} stopColor="#e42518" stopOpacity={1} />
      </LinearGradient>
      <Path
        d="M1721.952 1305.224l8.85-33.7 10.048 2.34-9.311 34.204z"
        fill="url(#LinearGradient14783)"
        strokeWidth={1.58196139}
      />
      <Path
        d="M1723.425 1310.808l11.958-42.87 3.835 1.138-11.958 42.869z"
        fill="#fff"
        strokeWidth={1.16342318}
      />
      <Path
        d="M1775.502 1515.549c4.166 4.519 11.13 4.56 15.685.487 4.554-4.072 4.56-11.13.487-15.685-4.166-4.518-11.13-4.56-15.685-.487-4.542 4.389-4.77 11.424-.487 15.685zm4.56-11.13c1.985-1.82 5.251-1.664 6.964.04 1.82 1.985 1.663 5.251-.04 6.964-1.986 1.82-5.252 1.664-6.965-.04-1.948-2.044-1.909-5.052.041-6.965z"
        fill = {this.state.Branch7} onPress = {this.Handler7}
        fillOpacity={1}
      />
      <Path id = "green-branch"
        d="M1355.086 1994.438c-4.3-4.3-11.2-4.3-15.5 0-4.3 4.3-4.3 11.2 0 15.5 4.3 4.3 11.2 4.3 15.5 0 4.3-4.2 4.3-11.1 0-15.5zm-4.2 11.3c-1.9 1.9-4.9 1.9-6.9 0s-1.9-4.9 0-6.9c1.9-1.9 4.9-1.9 6.9 0 1.8 1.7 1.8 4.8 0 6.9z"
        fill={this.state.greenBranch}
        onPress={this.greenHandler}
      />
      <Path d="M515.559 1673.994h15v7h-15z" fill = {this.state.Branch8} onPress = {this.Handler8} fillOpacity={1} />
      <Path
        d="M684.35931 1675.3933H699.35931V1682.3933H684.35931z"
        fill = {this.state.Branch1} onPress = {this.Handler1}
      />
      <Path
        d="M1626.179 1215.83c-6 .3-10.8 5.2-10.8 11.2.3 6.2 5.2 10.8 11.2 10.8 6-.3 10.8-5.2 10.8-11.2-.2-6-5.1-10.9-11.2-10.8zm.3 16.1c-2.5.3-4.9-2.1-4.9-4.9-.3-2.5 2.1-4.9 4.9-4.9 2.5-.3 4.9 2.1 4.9 4.9 0 2.5-2.3 4.8-4.9 4.9z"
        fill = {this.state.d2} onPress = {this.Handler_d2}
        fillOpacity={1}
      />
      <Path
        d="M1380.594 764.238l5.437-5.493 93.64 97.23-5.437 5.493z"
        fill = {this.state.d2} onPress = {this.Handler_d2}
        fillOpacity={1}
        strokeWidth={0.60908073}
      />
      <Path
        d="M1380.802 761.684l2.427-2.607 95.068 98.643-2.337 2.36z"
        fill="#fff"
        fillOpacity={1}
        strokeWidth={0.40858781}
      />
      <Path
        d="M1487.713 854c-4.3-4.3-11.2-4.3-15.5 0-4.3 4.3-4.3 11.2 0 15.5 4.3 4.3 11.2 4.3 15.5 0 4.4-4.1 4.4-11 0-15.5zm-4.2 11.4c-1.9 1.9-4.9 1.9-6.9 0-1.9-1.9-1.9-4.9 0-6.9 1.9-1.9 4.9-1.9 6.9 0 1.8 1.8 1.8 5 0 6.9z"
        fill = {this.state.d2} onPress = {this.Handler_d2}
        fillOpacity={1}
      />
      <Path
        d="M1202.3594 720.83844H1217.3594V728.83844H1202.3594z"
        fill = {this.state.limeBranch} onPress = {this.limeHandler}
      />
      <Path
        d="M1075.83 662.158v7.362h97.436v-.01l95.83.5c14.705.271 20.812 2.718 31.568 13.878l18.736 19.442 26.174 27.201v.002l21.883 21.883c1.258-1.733 4.056-3.676 5.557-5.365l-21.866-21.864.01-.004-26.138-27.265-19.221-19.946c-11.596-11.6-19.385-14.927-35.219-15.36l-97.31-.454z"
        fill = {this.state.d2} onPress = {this.Handler_d2}
        fillOpacity={1}
        strokeWidth={0.60908073}
      />
      <Path
        d="M1077.107 664.367v3.332h96.176l96.117.285c14.705.272 22.395 3.105 33.15 14.266l18.532 19.61 2.49-2.266-19.584-19.89c-11.596-11.601-17.453-14.356-33.287-14.79l-97.42-.547h-.064zm243.977 37.492l26.023 27.096-.016.016 21.924 21.922c.811-.762 1.698-1.579 2.44-2.274l-21.725-21.724v-.002l-26.156-27.3z"
        fill="#fff"
        fillOpacity={1}
        strokeWidth={0.40858781}
      />
      <Path
        d="M1384.463 748c-4.3-4.3-11.2-4.3-15.5 0-4.3 4.3-4.3 11.2 0 15.5 4.3 4.3 11.2 4.3 15.5 0 4.4-4.1 4.4-11 0-15.5zm-4.2 11.4c-1.9 1.9-4.9 1.9-6.9 0-1.9-1.9-1.9-4.9 0-6.9 1.9-1.9 4.9-1.9 6.9 0 1.8 1.8 1.8 5 0 6.9z"
        fill = {this.state.d2} onPress = {this.Handler_d2}
        fillOpacity={1}
      />
      <Path
        d="M1099.374 384.58a2 2 0 11-3.364-2.165 2 2 0 013.364 2.166zm-6.239.447a2 2 0 11-3.363-2.165 2 2 0 013.363 2.165zm-6.43.323a2 2 0 11-3.363-2.165 2 2 0 013.363 2.165zm-6.08.413a2 2 0 11-3.364-2.166 2 2 0 013.363 2.166zm-5.762.533a2 2 0 11-3.363-2.165 2 2 0 013.363 2.165zm-5.793.382a2 2 0 11-3.363-2.165 2 2 0 013.363 2.165zm-6.034.61a2 2 0 11-3.363-2.166 2 2 0 013.363 2.165zm-5.753.487a2 2 0 11-3.363-2.166 2 2 0 013.363 2.166zm-5.634.768a2 2 0 11-3.363-2.166 2 2 0 013.363 2.166zM1051.476 403.008a2 2 0 11-1.958-3.488 2 2 0 011.958 3.488zm6.195 2.812a2 2 0 11-1.959-3.488 2 2 0 011.96 3.488zm5.904 2.669a2 2 0 11-1.96-3.488 2 2 0 011.96 3.488z"
        opacity={1}
        fill="#858585"
        fillOpacity={0.45882353}
        stroke="none"
        strokeWidth={1.04900002}
        strokeMiterlimit={4}
        strokeDasharray="none"
        strokeOpacity={1}
      />
      <Path
        d="M1076.227 658.036c-4.3-4.3-11.2-4.3-15.5 0-4.3 4.3-4.3 11.2 0 15.5 4.3 4.3 11.2 4.3 15.5 0 4.4-4.1 4.4-11 0-15.5zm-4.2 11.4c-1.9 1.9-4.9 1.9-6.9 0-1.9-1.9-1.9-4.9 0-6.9 1.9-1.9 4.9-1.9 6.9 0 1.8 1.8 1.8 5 0 6.9z"
        fill = {this.state.d2} onPress = {this.Handler_d2}
        fillOpacity={1}
      />
      <Path
        d="M1016.812 752.309c.078.063.015.14.093.203.51 2.719-.994 5.23-3.635 5.803-2.422.62-5.214-.854-5.802-3.635l-.015-.141-5.75 1.41c1.472 5.672 7.119 9.181 12.946 7.834 5.688-1.331 9.182-7.118 7.835-12.946z"
        fill = {this.state.Branch11} onPress = {this.Handler11}
      />
      <Path
        d="M1007.546 754.742c-.078-.062-.015-.14-.093-.203-.51-2.718.995-5.23 3.494-5.787 2.422-.62 5.215.854 5.787 3.494l.015.14 5.75-1.409c-1.472-5.672-7.118-9.181-12.946-7.834-5.672 1.472-9.182 7.118-7.835 12.946z"
        fill = {this.state.Branch8} onPress = {this.Handler8}
      />
      <Path
        d="M1044.794 758.595c-4.3-4.3-11.2-4.3-15.5 0-4.3 4.3-4.3 11.2 0 15.5 4.3 4.3 11.2 4.3 15.5 0 4.3-4.2 4.3-11.1 0-15.5zm-4.2 11.3c-1.9 1.9-4.9 1.9-6.9 0s-1.9-4.9 0-6.9c1.9-1.9 4.9-1.9 6.9 0 1.8 1.7 1.8 4.8 0 6.9zM1045.671 681.517c-4.3-4.3-11.2-4.3-15.5 0-4.3 4.3-4.3 11.2 0 15.5 4.3 4.3 11.2 4.3 15.5 0 4.3-4.2 4.3-11.1 0-15.5zm-4.2 11.3c-1.9 1.9-4.9 1.9-6.9 0s-1.9-4.9 0-6.9c1.9-1.9 4.9-1.9 6.9 0 1.8 1.7 1.8 4.8 0 6.9z"
        fill = {this.state.Branch9} onPress = {this.Handler9}
      />
      <Path
        d="M1058.694 675.762a2 2 0 11-3.993-.224 2 2 0 013.993.224zm-5.448 3.825a2 2 0 11-3.994-.224 2 2 0 013.994.224z"
        opacity={1}
        fill="#858585"
        fillOpacity={0.45882353}
        stroke="none"
        strokeWidth={1.04900002}
        strokeMiterlimit={4}
        strokeDasharray="none"
        strokeOpacity={1}
      />
      <Path
        d="M755.478 554.135c-4.3-4.3-11.2-4.3-15.5 0-4.3 4.3-4.3 11.2 0 15.5 4.3 4.3 11.2 4.3 15.5 0 4.4-4.1 4.4-11 0-15.5zm-4.2 11.4c-1.9 1.9-4.9 1.9-6.9 0-1.9-1.9-1.9-4.9 0-6.9 1.9-1.9 4.9-1.9 6.9 0 1.8 1.8 1.8 5 0 6.9z"
        fill = {this.state.d2} onPress = {this.Handler_d2}
        fillOpacity={1}
      />
      <Path
        d="M644.547 589.705c-4.3-4.3-11.2-4.3-15.5 0-4.3 4.3-4.3 11.2 0 15.5 4.3 4.3 11.2 4.3 15.5 0 4.3-4.2 4.3-11.1 0-15.5zm-4.2 11.3c-1.9 1.9-4.9 1.9-6.9 0s-1.9-4.9 0-6.9c1.9-1.9 4.9-1.9 6.9 0 1.8 1.7 1.8 4.8 0 6.9z"
        fill = {this.state.Branch7} onPress = {this.Handler7}
      />
      <Path
        d="M434.617 378.796c-4.3-4.3-11.2-4.3-15.5 0-4.3 4.3-4.3 11.2 0 15.5 4.3 4.3 11.2 4.3 15.5 0 4.4-4.1 4.4-11 0-15.5zm-4.2 11.4c-1.9 1.9-4.9 1.9-6.9 0-1.9-1.9-1.9-4.9 0-6.9 1.9-1.9 4.9-1.9 6.9 0 1.8 1.8 1.8 5 0 6.9z"
        fill = {this.state.Branch3} onPress = {this.Handler3}
      />
      <Path
        d="M912.836 1318.036c-4.3-4.3-11.2-4.3-15.5 0-4.3 4.3-4.3 11.2 0 15.5 4.3 4.3 11.2 4.3 15.5 0 4.3-4.2 4.3-11.1 0-15.5zm-4.2 11.3c-1.9 1.9-4.9 1.9-6.9 0s-1.9-4.9 0-6.9c1.9-1.9 4.9-1.9 6.9 0 1.8 1.7 1.8 4.8 0 6.9z"
        fill = {this.state.Branch1} onPress = {this.Handler1}
      />
      <Path
        d="M1567.106 996.618l7.8-.02v37.77h-7.729zm7.727-27.72c-.343-16.4-3.664-24.19-14.793-35.461l-69.931-67.669-5.187 5.214 68.93 66.77c10.426 10.373 13.142 16.366 13.183 31.866l.071 27 7.8-.02z"
        fill = {this.state.d2} onPress = {this.Handler_d2}
        fillOpacity={1}
        strokeWidth={0.60908073}
      />
      <Path
        d="M1569.341 996.722l3.368.09-.01 37.806h-3.322zm2.992-27.824c-.343-16.4-2.664-22.44-13.793-33.711l-69.994-67.856-2.311 2.4 69.241 66.772c10.427 10.372 14.018 17.74 14.06 33.24l-.195 26.979 3.368.09z"
        fill="#fff"
        fillOpacity={1}
        strokeWidth={0.40858781}
      />
      <Path
        d="M1570.808 1028.319c-6 .3-10.8 5.2-10.8 11.2.3 6.2 5.2 10.8 11.2 10.8 6-.3 10.8-5.2 10.8-11.2-.2-6-5.1-10.9-11.2-10.8zm.3 16.1c-2.5.3-4.9-2.1-4.9-4.9-.3-2.5 2.1-4.9 4.9-4.9 2.5-.3 4.9 2.1 4.9 4.9 0 2.5-2.3 4.8-4.9 4.9z"
        fill = {this.state.d2} onPress = {this.Handler_d2}
        fillOpacity={1}
      />
      <Text
        transform="rotate(.049)"
        fontSize="18.3083992px"
        x={880.58167}
        y={861.867}
        fontFamily="Moscow Sans"
        fill="#1d1d1b"
      >
        {"\u0414\u0438\u043D\u0430\u043C\u043E"}
      </Text>
      <Text
        fontSize="18.3083992px"
        x={1495.9333}
        y={903.90747}
        fontFamily="Moscow Sans"
        fill="#1d1d1b"
      >
        {
          "\u041A\u043E\u043C\u0441\u043E\u043C\u043E\u043B\u044C\u0441\u043A\u0430\u044F"
        }
      </Text>
      <Text
        fontSize="18.3083992px"
        x={1495.9333}
        y={903.90747}
        fontFamily="Moscow Sans"
        fill="#1d1d1b"
      >
        {
          "\u041A\u043E\u043C\u0441\u043E\u043C\u043E\u043B\u044C\u0441\u043A\u0430\u044F"
        }
      </Text>
      <Path
        d="M1321.219 2021.13c-4.3-4.3-11.2-4.3-15.5 0-4.3 4.3-4.3 11.2 0 15.5 4.3 4.3 11.2 4.3 15.5 0 4.3-4.2 4.3-11.1 0-15.5zm-4.2 11.3c-1.9 1.9-4.9 1.9-6.9 0s-1.9-4.9 0-6.9c1.9-1.9 4.9-1.9 6.9 0 1.8 1.7 1.8 4.8 0 6.9zM1756.46 1562.336c5.368 2.68 12.03.53 14.755-4.928 2.68-5.368.53-12.03-4.929-14.755-5.368-2.68-12.03-.53-14.755 4.928-2.814 5.19-.708 11.941 4.928 14.755zm7.191-14.404c2.237 1.117 3.401 4.157 2.195 6.573-1.116 2.236-4.157 3.401-6.572 2.195-2.237-1.117-3.402-4.157-2.196-6.573.938-2.55 3.979-3.49 6.573-2.195z"
        fill = {this.state.d2} onPress = {this.Handler_d2}
        fillOpacity={1}
      />
      <Text
        y={172.55264}
        x={854.61731}
        fontSize="18.3083992px"
        fontFamily="Moscow Sans"
        fill="#1d1d1b"
      >
        {"\u0425\u043E\u0432\u0440\u0438\u043D\u043E"}
      </Text>
      <Path
        transform="rotate(44.881) skewX(-.091)"
        d="M2021.1847 -426.43149H2029.2911224V-342.371042H2021.1847z"
        fill = {this.state.Branch8} onPress = {this.Handler8}
        fillOpacity={1}
        strokeWidth={1.43732834}
      />
      <Path
        d="M1784.4507 993.43201H1827.4507V1011.43201H1784.4507z"
        fill="#fff"
        fillOpacity={0.65}
      />
      <Text
        x={1728.046}
        y={1008.3066}
        fontSize="18.3083992px"
        fontFamily="Moscow Sans"
        fill="#1d1d1b"
      >
        {"\u041B\u0435\u0444\u043E\u0440\u0442\u043E\u0432\u043E"}
      </Text>
      <Path
        d="M1703.0267 1001.4671H1725.0267V1009.4671H1703.0267z"
        fill = {this.state.Branch15} onPress = {this.Handler15}
        fillOpacity={1}
      />
      <Path
        d="M1709.6121 1007.564H1717.6121V1116.21154H1709.6121z"
        fill = {this.state.Branch15} onPress = {this.Handler15}
        fillOpacity={1}
        strokeWidth={1.00251901}
      />
      <Path
        d="M1701.0121 1092.5482H1776.5390089999999V1110.5482H1701.0121z"
        fill="#fff"
        fillOpacity={0.65}
        strokeWidth={1.32530749}
      />
      <Text
        x={1641.3618}
        y={1107.4369}
        fontSize="18.3083992px"
        fontFamily="Moscow Sans"
        fill="#1d1d1b"
      >
        {
          "\u0410\u0432\u0438\u0430\u043C\u043E\u0442\u043E\u0440\u043D\u0430\u044F"
        }
      </Text>
      <Text
        x={1641.3618}
        y={1107.4369}
        fontSize="18.3083992px"
        fontFamily="Moscow Sans"
        fill="#1d1d1b"
      >
        {
          "\u0410\u0432\u0438\u0430\u043C\u043E\u0442\u043E\u0440\u043D\u0430\u044F"
        }
      </Text>
      <Text
        fontSize="16.3083992px"
        x={1528.4016}
        y={929.77338}
        fontFamily="Moscow Sans"
        fill="#1d1d1b"
      >
        {
          "\u042D\u043B\u0435\u043A\u0442\u0440\u043E\u0437\u0430\u0432\u043E\u0434\u0441\u043A\u0430\u044F"
        }
      </Text>
      <Text
        y={855.11749}
        x={1661.1663}
        fontSize="18.3083992px"
        fontFamily="Moscow Sans"
        fill="#1d1d1b"
      >
        {"\u0421\u0435\u043C\u0451\u043D\u043E\u0432\u0441\u043A\u0430\u044F"}
      </Text>
      <Path
        d="M1400.213 750.123a2 2 0 11-3.61-1.725 2 2 0 013.61 1.725zm-6.121 1.187a2 2 0 11-3.61-1.725 2 2 0 013.61 1.725z"
        opacity={1}
        fill="#858585"
        fillOpacity={0.45882353}
        stroke="none"
        strokeWidth={1.04900002}
        strokeMiterlimit={4}
        strokeDasharray="none"
        strokeOpacity={1}
      />
      <LinearGradient
        xlinkHref="#LinearGradient8533"
        gradientUnits="userSpaceOnUse"
        gradientTransform="matrix(0.08941206,0.1105,0.1105,-0.08941206,18553.371,15263.51)"
        x1={-157802.03}
        y1={-29730.627}
        x2={-157637.23}
        y2={-29730.627}
        transform="translate(-71.3 23.747)"
      />
      <LinearGradient
        xlinkHref="#LinearGradient8527"
        gradientUnits="userSpaceOnUse"
        gradientTransform="matrix(0.11118877,-0.08855407,-0.08855407,-0.11118877,16087.21,-16787.131)"
        x1={-157802.03}
        y1={-29730.627}
        x2={-157637.23}
        y2={-29730.627}
        transform="translate(-71.3 23.747)"
      />
      <Text
        y={486.76193}
        x={1166.1429}
        fontSize="18.3083992px"
        fontFamily="Moscow Sans"
        fill="#1d1d1b"
      >
        {
          "\u041F\u0435\u0442\u0440\u043E\u0432\u0441\u043A\u043E-\u0420\u0430\u0437\u0443\u043C\u043E\u0432\u0441\u043A\u0430\u044F"
        }
      </Text>
      <Text
        y={2103.1052}
        x={1265.3204}
        fontSize="18.3083992px"
        fontFamily="Moscow Sans"
        fill="#1d1d1b"
      >
        {"\u041F\u043E\u043A\u0440\u043E\u0432\u0441\u043A\u043E\u0435"}
      </Text>
      <Text
        y={974.02924}
        x={1943.3673}
        fontSize="18.3083992px"
        fontFamily="Moscow Sans"
        fill="#1d1d1b"
      >
        {"\u041D\u043E\u0432\u043E\u0433\u0438\u0440\u0435\u0435\u0432\u043E"}
      </Text>
      <Text
        y={900.53101}
        x={1987.8022}
        fontSize="18.3083992px"
        fontFamily="Moscow Sans"
        fill="#1d1d1b"
      >
        {"\u041D\u043E\u0432\u043E\u043A\u043E\u0441\u0438\u043D\u043E"}
      </Text>
      <LinearGradient
        gradientUnits="userSpaceOnUse"
        x1={-126821.66}
        y1={-137924.08}
        x2={-126568.95}
        y2={-137924.08}
        gradientTransform="matrix(0.1423,0,0,0.1423,18669.74,20534.467)"
      >
        <Stop offset={0.3} stopColor="#24bcef" stopOpacity={1} />
        <Stop offset={0.7} stopColor="#0572b9" stopOpacity={1} />
      </LinearGradient>
      <Path
        strokeMiterlimit={10}
        d="M293.876 1076.586c2.295.524 4.69 1.049 6.99 1.073 13.299.137 24.593-8.846 27.819-21.013"
        fill="none"
        stroke="url(#LinearGradient9536)"
        strokeWidth={11.99969959}
      />
      <Path
        strokeMiterlimit={10}
        d="M286.41 1073.308c4.274 2.545 9.457 4.199 14.757 4.254 15.599.161 28.53-12.405 28.693-28.104"
        fill="none"
        stroke="#fff"
        strokeWidth={3.9999001}
      />
      <LinearGradient
        y2={-138122.59}
        x2={-126846.49}
        y1={-137979.44}
        x1={-126989.65}
        gradientTransform="matrix(-0.12731527,-0.06356188,0.06356188,-0.12731527,-5605.0629,-24110.038)"
        gradientUnits="userSpaceOnUse"
        id="p"
        xlinkHref="#LinearGradient7482"
      />
      <Path
        strokeMiterlimit={10}
        d="M1769.288 1550.747c6.706-2.464 12.562-7.252 15.957-14.052 3.44-6.889 3.792-14.76 1.641-21.646"
        fill="none"
        stroke="url(#p)"
        strokeWidth={11.99969959}
      />
      <Path
        strokeMiterlimit={10}
        d="M1761.597 1552.272c9.793-.587 19.047-6.361 23.737-15.756 4.646-9.305 3.7-19.724-1.448-27.77"
        fill="none"
        stroke="#fff"
        strokeWidth={3.9999001}
      />
      <Path
        d="M1498.3594 961.177H1564.235331V979.177H1498.3594z"
        fillOpacity={0.65}
        fill="#fff"
      />
      <Text
        fontSize="18.3083992px"
        x={1442.1101}
        y={975.1521}
        fontFamily="Moscow Sans"
        fill="#1d1d1b"
      >
        {
          "\u041A\u0440\u0430\u0441\u043D\u044B\u0435 \u0412\u043E\u0440\u043E\u0442\u0430"
        }
      </Text>
      <Path
        d="M1400.192 806.17053H1481.181155V825.17053H1400.192z"
        fillOpacity={0.65}
        fill="#fff"
      />
      <Text
        transform="rotate(.098)"
        fontSize="18.30890083px"
        x={1359.6791}
        y={817.62408}
        fontFamily="Moscow Sans"
        fill="#1d1d1b"
      >
        {
          "\u041F\u0440\u043E\u0441\u043F\u0435\u043A\u0442 \u041C\u0438\u0440\u0430"
        }
      </Text>
      <Text
        y={1719.9805}
        x={1625.8075}
        fontSize="18.3083992px"
        fontFamily="Moscow Sans"
        fill="#1d1d1b"
      >
        {"\u041A\u0443\u0431\u0430\u043D\u0441\u043A\u0430\u044F"}
      </Text>
      <Text
        fontSize="18.31080055px"
        x={1363.0018}
        y={1882.8267}
        fontFamily="Moscow Sans"
        fill="#1d1d1b"
      >
        {"\u041A\u0430\u0448\u0438\u0440\u0441\u043A\u0430\u044F"}
      </Text>
      <Path
        d="M263.838 1074.738a2 2 0 11-3.06-2.576 2 2 0 013.06 2.576zm6.788.455a2 2 0 11-3.06-2.577 2 2 0 013.06 2.577zm-32.917-1.932a2 2 0 11-3.06-2.577 2 2 0 013.06 2.577zm6.223.39a2 2 0 11-3.06-2.578 2 2 0 013.06 2.577zm6.788.454a2 2 0 11-3.06-2.577 2 2 0 013.06 2.577zm6.465.423a2 2 0 11-3.06-2.576 2 2 0 013.06 2.577zm-45.23-2.893a2 2 0 11-3.06-2.577 2 2 0 013.06 2.577zm6.222.39a2 2 0 11-3.06-2.577 2 2 0 013.06 2.577zm6.788.454a2 2 0 11-3.06-2.577 2 2 0 013.06 2.577zm6.465.424a2 2 0 11-3.06-2.577 2 2 0 013.06 2.577zm-45.346-2.91a2 2 0 11-3.06-2.576 2 2 0 013.06 2.576zm6.223.39a2 2 0 11-3.06-2.577 2 2 0 013.06 2.577zm6.788.454a2 2 0 11-3.06-2.576 2 2 0 013.06 2.576zm6.465.424a2 2 0 11-3.06-2.577 2 2 0 013.06 2.577zm-45.23-2.893a2 2 0 11-3.06-2.577 2 2 0 013.06 2.577zm6.222.39a2 2 0 11-3.06-2.578 2 2 0 013.06 2.577zm6.788.454a2 2 0 11-3.06-2.577 2 2 0 013.06 2.577zm6.465.424a2 2 0 11-3.06-2.577 2 2 0 013.06 2.577z"
        opacity={1}
        fill="#858585"
        fillOpacity={0.45882353}
        stroke="none"
        strokeWidth={1.04900002}
        strokeMiterlimit={4}
        strokeDasharray="none"
        strokeOpacity={1}
      />
      <Text
        y={685.37762}
        x={1554.3782}
        fontSize="18.30890083px"
        fontFamily="Moscow Sans"
        fill="#1d1d1b"
      >
        {
          "\u0427\u0435\u0440\u043A\u0438\u0437\u043E\u0432\u0441\u043A\u0430\u044F"
        }
      </Text>
      <Text
        y={724.91302}
        x={1690.1981}
        fontSize="18.3083992px"
        fontFamily="Moscow Sans"
        fill="#1d1d1b"
      >
        {
          "\u041F\u0440\u0435\u043E\u0431\u0440\u0430\u0436\u0435\u043D\u0441\u043A\u0430\u044F \u043F\u043B."
        }
      </Text>
      <Path d="M1664.639 706.104l4.9-5 10.7 10.2-5.2 5.2z" fill = {this.state.Branch1} onPress = {this.Handler1} />
      <Text
        fontSize="18.3083992px"
        x={1541.0428}
        y={877.32349}
        fontFamily="Moscow Sans"
        fill="#1d1d1b"
      >
        {
          "\u041A\u0440\u0430\u0441\u043D\u043E\u0441\u0435\u043B\u044C\u0441\u043A\u0430\u044F"
        }
      </Text>
      <Text
        x={1597.7959}
        y={814.11212}
        fontSize="18.3083992px"
        fontFamily="Moscow Sans"
        fill="#1d1d1b"
      >
        {"\u0421\u043E\u043A\u043E\u043B\u044C\u043D\u0438\u043A\u0438"}
      </Text>
      <Path
        d="M558.6593 1252.177H600.3593010000001V1267.177H558.6593z"
        fillOpacity={0.65}
        fill="#fff"
      />
      <Text
        fontSize="18.3083992px"
        x={225.34415}
        y={1174.2208}
        fontFamily="Moscow Sans"
        fill="#1d1d1b"
      >
        {
          "\u0411\u0430\u0433\u0440\u0430\u0442\u0438\u043E\u043D\u043E\u0432\u0441\u043A\u0430\u044F"
        }
      </Text>
      <Path
        d="M1586.2776 1427.5005H1625.2667549999999V1446.5005H1586.2776z"
        fill="#fff"
        fillOpacity={0.65}
      />
      <Text
        fontSize="18.3083992px"
        x={1586.8113}
        y={1435.783}
        fontFamily="Moscow Sans"
        fill="#1d1d1b"
      >
        {"\u0423\u0433\u0440\u0435\u0448\u0441\u043A\u0430\u044F"}
      </Text>
      <LinearGradient
        gradientUnits="userSpaceOnUse"
        y2={558.1062}
        x2={1176.0452}
        y1={566.7486}
        x1={1166.0804}
        id="q"
        xlinkHref="#LinearGradient8437"
      />
      <Path
        d="M1169.818 566.437a1.3 1.3 0 01-1.3 1.3 1.3 1.3 0 01-1.3-1.3 1.3 1.3 0 011.3-1.3 1.3 1.3 0 011.3 1.3zm2.8-2.9a1.3 1.3 0 01-1.3 1.3 1.3 1.3 0 01-1.3-1.3 1.3 1.3 0 011.3-1.3 1.3 1.3 0 011.3 1.3zm3.2-3.3a1.3 1.3 0 01-1.3 1.3 1.3 1.3 0 01-1.3-1.3 1.3 1.3 0 011.3-1.3 1.3 1.3 0 011.3 1.3z"
        fill="url(#q)"
        fillOpacity={1}
      />
      <LinearGradient
        gradientTransform="translate(25.795215,58.606249)"
        y2={558.1062}
        x2={1176.0452}
        y1={566.7486}
        x1={1166.0804}
        gradientUnits="userSpaceOnUse"
        xlinkHref="#LinearGradient8480"
      />
      <Text
        fontSize="18.3083992px"
        x={1671.4089}
        y={1385.2954}
        fontFamily="Moscow Sans"
        fill="#1d1d1b"
      >
        {
          "\u041F\u0440\u043E\u043B\u0435\u0442\u0430\u0440\u0441\u043A\u0430\u044F"
        }
      </Text>
      <Path
        d="M1090.51 571.55c-2.5-2.5-6.6-2.5-9.3 0-2.5 2.5-2.5 6.6 0 9.3 2.5 2.5 6.6 2.5 9.3 0 2.4-2.6 2.4-6.6 0-9.3zm-2.7 6.7c-1.3 1.3-3 1.3-4.3 0-1.3-1.3-1.3-3 0-4.3 1.3-1.3 3-1.3 4.3 0 1.3 1.3 1.1 3.3 0 4.3z"
        fill="#0a72b9"
      />
      <Circle cx={689.05933} cy={2113.377} r={11.7} fill="#e42313" />
      <Text
        x={685.25116}
        y={2119.1985}
        fontSize={15.6999}
        fontFamily="Moscow Sans"
        fill="#fff"
        fontWeight="bold"
      >
        {"1"}
      </Text>
      <Path
        transform="rotate(-44.984)"
        d="M192.8721 2332.7959H199.92722809999998V2450.6530700000003H192.8721z"
        fill = {this.state.Branch7} onPress = {this.Handler7}
        strokeWidth={0.99999046}
      />
      <Path
        d="M1884.292 1591.774l-10.4 10.2-5.2-5.1 10.4-10.5z"
        fill = {this.state.Branch7} onPress = {this.Handler7}
      />
      <Text
        fontSize="18.3083992px"
        x={1894.9005}
        y={1589.3213}
        fontFamily="Moscow Sans"
        fill="#1d1d1b"
      >
        {"\u041A\u0443\u0437\u044C\u043C\u0438\u043D\u043A\u0438"}
      </Text>
      <Rect
        ry={0}
        x={192.97021}
        y={2457.7539}
        transform="rotate(-44.984)"
        width={7.0915289}
        height={85.893059}
        fill = {this.state.Branch7} onPress = {this.Handler7}
        strokeWidth={0.99999046}
      />
      <Path
        d="M1975.94 1715.354c-.3-17.4-3.6-25.2-15.2-37l-16.2-16.2-5.266 5.134 16.266 16.366c10.4 10.4 13.1 16.4 13.1 31.9v16.5h7.7z"
        fill = {this.state.Branch7} onPress = {this.Handler7}
        fillOpacity={1}
      />
      <Path
        d="M1949.74 1657.154l-10.4 10.2-5.2-5.1 10.4-10.5z"
        fill = {this.state.Branch7} onPress = {this.Handler7}
      />
      <Path
        d="M1961.3401 1731.954H1976.3401V1739.954H1961.3401z"
        fill = {this.state.Branch7} onPress = {this.Handler7}
      />
      <Text
        fontSize="18.3083992px"
        x={1882.7228}
        y={1740.4119}
        fontFamily="Moscow Sans"
        fill="#1d1d1b"
      >
        {"\u0412\u044B\u0445\u0438\u043D\u043E"}
      </Text>
      <Path
        d="M1968.5447 1739.854H1976.3401955V1809.854H1968.5447z"
        fill = {this.state.Branch7} onPress = {this.Handler7}
        strokeWidth={1.05529237}
      />
      <Path
        d="M1939.894 1749.52h9.3v9.4h-9.3zm.7 8.5h7.7v-7.9h-7.7zm5.3-4.9c0 1-.8 1.9-2.2 1.9h-1v2h-1v-5.7h2.2c1.4 0 2 1 2 1.8zm-.9 0c0-.5-.5-1-1.1-1h-1v1.9h1c.6 0 1.1-.3 1.1-.9z"
        fill = {this.state.Branch3} onPress = {this.Handler3}
      />
      <Path
        d="M1980.239 1809.966c-4.3-4.3-11.2-4.3-15.5 0-4.3 4.3-4.3 11.2 0 15.5 4.3 4.3 11.2 4.3 15.5 0 4.3-4.1 4.3-11.3 0-15.5zm-4.3 11.4c-1.9 1.9-4.9 1.9-6.9 0s-1.9-4.9 0-6.9c1.9-1.9 4.9-1.9 6.9 0 1.9 1.8 1.9 4.9 0 6.9z"
        fill = {this.state.Branch7} onPress = {this.Handler7}
      />
      <G fontSize={18.3084}>
        <Text
          x={1560.0979}
          y={1447.959}
          transform="translate(251.841 360.683)"
          fontSize="18.3083992px"
          fontFamily="Moscow Sans"
          fill="#1d1d1b"
        >
          {
            "\u041B\u0435\u0440\u043C\u043E\u043D\u0442\u043E\u0432\u0441\u043A\u0438\u0439"
          }
        </Text>
        <Text
          x={1560.0979}
          y={1469.959}
          transform="translate(251.841 360.683)"
          fontSize="18.3083992px"
          fontFamily="Moscow Sans"
          fill="#1d1d1b"
        >
          {"\u043F\u0440\u043E\u0441\u043F\u0435\u043A\u0442"}
        </Text>
      </G>
      <Path
        d="M2007.907 1809.939c-4.3-4.3-11.2-4.3-15.5 0-4.3 4.3-4.3 11.2 0 15.5 4.3 4.3 11.2 4.3 15.5 0 4.3-4.1 4.3-11.3 0-15.5zm-4.3 11.4c-1.9 1.9-4.9 1.9-6.9 0s-1.9-4.9 0-6.9c1.9-1.9 4.9-1.9 6.9 0 1.9 1.8 1.9 4.9 0 6.9z"
        fill = {this.state.Branch15} onPress = {this.Handler15}
        fillOpacity={1}
      />
      <G>
        <Path
          d="M1982.1327 1812.7786H1992.1327V1822.7786H1982.1327z"
          fill="url(#SVGID_30_05)"
        />
        <Path
          d="M1973.1327 1815.7786H2001.1327V1819.7786H1973.1327z"
          fill="#fff"
        />
      </G>
      <Path
        d="M1997 1826.5013H2004V1950.4986099999999H1997z"
        fill = {this.state.Branch15} onPress = {this.Handler15}
        fillOpacity={1}
        strokeWidth={1.33093584}
      />
      <Path
        d="M1997 1957.5986H2004V2044.8790410000001H1997z"
        fill = {this.state.Branch15} onPress = {this.Handler15}
        fillOpacity={1}
        strokeWidth={1.11663055}
      />
      <Path
        d="M1997 2043.5792H2012V2051.5792H1997z"
        fill = {this.state.Branch15} onPress = {this.Handler15}
        fillOpacity={1}
      />
      <Path
        d="M1997 2051.5791H2004V2136.274779H1997z"
        fill = {this.state.Branch15} onPress = {this.Handler15}
        fillOpacity={1}
        strokeWidth={1.09997201}
      />
      <Path
        d="M1997 1950.299H2012V1958.299H1997z"
        fill = {this.state.Branch15} onPress = {this.Handler15}
        fillOpacity={1}
      />
      <Text
        y={1822.3571}
        x={2023.0469}
        fontSize="18.3083992px"
        fontFamily="Moscow Sans"
        fill="#1d1d1b"
      >
        {"\u041A\u043E\u0441\u0438\u043D\u043E"}
      </Text>
      <G fontSize={16.3084}>
        <Text
          x={2026.3612}
          y={1933.7762}
          fontSize="16.3083992px"
          fontFamily="Moscow Sans"
          fill="#1d1d1b"
        >
          {"\u0423\u043B\u0438\u0446\u0430"}
        </Text>
        <Text
          x={2026.3612}
          y={1955.7762}
          fontSize="16.3083992px"
          fontFamily="Moscow Sans"
          fill="#1d1d1b"
        >
          {
            "\u0414\u043C\u0438\u0442\u0440\u0438\u0435\u0432\u0441\u043A\u043E\u0433\u043E"
          }
        </Text>
      </G>
      <Text
        y={2051.5408}
        x={2023.6381}
        fontSize="18.3083992px"
        fontFamily="Moscow Sans"
        fill="#1d1d1b"
      >
        {
          "\u041B\u0443\u0445\u043C\u0430\u043D\u043E\u0432\u0441\u043A\u0430\u044F"
        }
      </Text>
      <Text
        y={2144.3079}
        x={2023.463}
        fontSize="18.3083992px"
        fontFamily="Moscow Sans"
        fill="#1d1d1b"
      >
        {"\u041D\u0435\u043A\u0440\u0430\u0441\u043E\u0432\u043A\u0430"}
      </Text>
      <Path
        d="M1989.528 2136.2241H2011.528V2144.2241H1989.528z"
        fill = {this.state.Branch15} onPress = {this.Handler15}
        fillOpacity={1}
      />
      <G>
        <Circle cx={1800.1171} cy={2122.8228} r={11.7} fill="#943e90" />
        <Path
          d="M1597.8 1650h-5.6v-2h8.2v1.6l-4.2 10.3h-2.5z"
          transform="translate(203.817 468.323)"
          fill="#fff"
        />
      </G>
      <G>
        <Circle
          cx={2000.345}
          cy={2161.8181}
          r={11.7}
          fill = {this.state.Branch15} onPress = {this.Handler15}
          fillOpacity={1}
        />
        <Path
          d="M2000.186 2166.134l1.5-1.5c.8.8 1.8 1.1 2.7 1.1 1.3 0 2.3-.7 2.3-2 0-1-.8-1.9-2.2-1.9-.6 0-1.3.2-1.9.6l-1.8-.2.3-6.7h7.5l-.7 2h-4.9l-.2 2.7c.6-.3 1.4-.5 2-.5 2 0 4 1.4 4 3.8 0 2.2-1.7 4-4.6 4-1.5.3-3-.3-4-1.4zM1992.886 2165.534h2.4v-8h-2.2v-2h4.4v9.9h2.7l-.7 2h-6.6z"
          fill="#fff"
        />
      </G>
      <Path
        d="M1721.198 1127.787c-1.89 1.858-3.627 3.274-5.018 4.88l29.98 29.981c12.092 12.092 20.223 15.273 36.557 15.344l10.594.012v-7.223h-11.018c-14.566 0-20.577-2.476-31.396-13.295z"
        fill = {this.state.Branch15} onPress = {this.Handler15}
        fillOpacity={1}
      />
      <Path
        d="M1721.805 1114.962c-4.3-4.3-11.2-4.3-15.5 0-4.3 4.3-4.3 11.2 0 15.5 4.3 4.3 11.2 4.3 15.5 0 4.2-4.2 4.2-11.1 0-15.5zm-4.4 11.3c-1.9 1.9-4.9 1.9-6.9 0s-1.9-4.9 0-6.9 4.9-1.9 6.9 0c1.9 2 1.9 5.2 0 6.9z"
        fill = {this.state.Branch15} onPress = {this.Handler15}
        fillOpacity={1}
      />
      <Path
        d="M1729.496 1121.668a2 2 0 11-3.982.383 2 2 0 013.982-.383z"
        opacity={1}
        fill="#858585"
        fillOpacity={0.45882353}
        stroke="none"
        strokeWidth={1.04900002}
        strokeMiterlimit={4}
        strokeDasharray="none"
        strokeOpacity={1}
      />
      <Path
        d="M1957.5 1880.623c-.3.3-.6.8-1 1.1l-119.002 112.695 4.84 5.063 119.262-112.458c.3-.3.8-.8 1.1-1.3zm11.8-24.7c-.8 10.3-3.7 16.1-11.8 24.7l5.2 5.1c9.6-10.3 13.206-17.344 13.906-29.744zm7.258-5.623l-.177-23.188-6.94-.088-.16 23.8v.437c0 1.9.019 3.063.019 4.663l7.306.056c.097-1.97-.085-3.78-.044-5.68zM1816.575 2025.53l21.296-21.3-5.093-5.305-21.3 21.5c-12.147 11.954-14.664 20.203-15 36.6l-.488 41.14 7.998.164.282-40.845c.205-14.899 1.282-21.177 12.305-31.954z"
        fill = {this.state.Branch7} onPress = {this.Handler7}
        fillOpacity={1}
      />
      <Path
        d="M1843.183 2009.06l-10.605-9.935 4.948-4.702 10.82 10.022z"
        fill = {this.state.Branch7} onPress = {this.Handler7}
      />
      <Text
        fontSize="18.3083992px"
        x={1854.4327}
        y={2010.2249}
        fontFamily="Moscow Sans"
        fill="#1d1d1b"
      >
        {"\u0416\u0443\u043B\u0435\u0431\u0438\u043D\u043E"}
      </Text>
      <Path
        d="M1789.2841 2094.7332H1811.2841V2101.7332H1789.2841z"
        fill = {this.state.Branch7} onPress = {this.Handler7}
      />
      <Text
        fontSize="18.3083992px"
        x={1830.3086}
        y={2100.9915}
        fontFamily="Moscow Sans"
        fill="#1d1d1b"
      >
        {"\u041A\u043E\u0442\u0435\u043B\u044C\u043D\u0438\u043A\u0438"}
      </Text>
      <Path
        d="M991.898 436.02a3.956 3.956 0 00-5.615 0 3.96 3.96 0 000 5.617 3.956 3.956 0 005.615 0c1.594-1.485 1.594-3.986 0-5.617zm-1.521 4.132c-.689.688-1.775.688-2.5 0-.688-.689-.688-1.776 0-2.501.688-.689 1.775-.689 2.5 0 .652.652.652 1.812 0 2.5zM931.359 462.76a3.956 3.956 0 00-5.615 0 3.96 3.96 0 000 5.618 3.956 3.956 0 005.615 0c1.593-1.486 1.593-3.987 0-5.618zm-1.522 4.132c-.688.689-1.775.689-2.499 0-.688-.689-.688-1.776 0-2.5.688-.69 1.775-.69 2.5 0 .651.652.651 1.811 0 2.5z"
        fill = {this.state.Branch1} onPress = {this.Handler1}
        fillOpacity={1}
        strokeWidth={0.30948851}
      />
      <Path
        d="M878.968 495.676c-2.3-5.7-8.8-8.2-14.5-6-5.7 2.2-8.2 8.8-6 14.5 2.3 5.7 8.8 8.2 14.5 6 5.8-2.5 8.5-9 6-14.5zm-8.2 8.8c-2.5 1-5.5-.3-6.5-2.5-1-2.5.3-5.5 2.5-6.5 2.5-1 5.5.3 6.5 2.5 1.1 2.6 0 5.4-2.5 6.5zM781.203 575.66c-2.3-5.7-8.8-8.2-14.5-6-5.7 2.2-8.2 8.8-6 14.5 2.3 5.7 8.8 8.2 14.5 6 5.8-2.5 8.5-9 6-14.5zm-8.2 8.8c-2.5 1-5.5-.3-6.5-2.5-1-2.5.3-5.5 2.5-6.5 2.5-1 5.5.3 6.5 2.5 1.1 2.6 0 5.4-2.5 6.5zM704.006 675.979c-2.3-5.7-8.8-8.2-14.5-6-5.7 2.2-8.2 8.8-6 14.5 2.3 5.7 8.8 8.2 14.5 6 5.8-2.5 8.5-9 6-14.5zm-8.2 8.8c-2.5 1-5.5-.3-6.5-2.5-1-2.5.3-5.5 2.5-6.5 2.5-1 5.5.3 6.5 2.5 1.1 2.6 0 5.4-2.5 6.5zM664.976 747.481c-2.3-5.7-8.8-8.2-14.5-6-5.7 2.2-8.2 8.8-6 14.5 2.3 5.7 8.8 8.2 14.5 6 5.8-2.5 8.5-9 6-14.5zm-8.2 8.8c-2.5 1-5.5-.3-6.5-2.5-1-2.5.3-5.5 2.5-6.5 2.5-1 5.5.3 6.5 2.5 1.1 2.6 0 5.4-2.5 6.5zM615.96 928.077c-2.3-5.7-8.8-8.2-14.5-6-5.7 2.2-8.2 8.8-6 14.5 2.3 5.7 8.8 8.2 14.5 6 5.8-2.5 8.5-9 6-14.5zm-8.2 8.8c-2.5 1-5.5-.3-6.5-2.5-1-2.5.3-5.5 2.5-6.5 2.5-1 5.5.3 6.5 2.5 1.1 2.6 0 5.4-2.5 6.5zM614.65 1035.77c-2.3-5.7-8.8-8.2-14.5-6-5.7 2.2-8.2 8.8-6 14.5 2.3 5.7 8.8 8.2 14.5 6 5.8-2.5 8.5-9 6-14.5zm-8.2 8.8c-2.5 1-5.5-.3-6.5-2.5-1-2.5.3-5.5 2.5-6.5 2.5-1 5.5.3 6.5 2.5 1.1 2.6 0 5.4-2.5 6.5zM632.293 1142.02c-2.3-5.7-8.8-8.2-14.5-6-5.7 2.2-8.2 8.8-6 14.5 2.3 5.7 8.8 8.2 14.5 6 5.8-2.5 8.5-9 6-14.5zm-8.2 8.8c-2.5 1-5.5-.3-6.5-2.5-1-2.5.3-5.5 2.5-6.5 2.5-1 5.5.3 6.5 2.5 1.1 2.6 0 5.4-2.5 6.5zM699.752 1300.329c-2.3-5.7-8.8-8.2-14.5-6-5.7 2.2-8.2 8.8-6 14.5 2.3 5.7 8.8 8.2 14.5 6 5.8-2.5 8.5-9 6-14.5zm-8.2 8.8c-2.5 1-5.5-.3-6.5-2.5-1-2.5.3-5.5 2.5-6.5 2.5-1 5.5.3 6.5 2.5 1.1 2.6 0 5.4-2.5 6.5zM760.558 1381.682c-2.3-5.7-8.8-8.2-14.5-6-5.7 2.2-8.2 8.8-6 14.5 2.3 5.7 8.8 8.2 14.5 6 5.8-2.5 8.5-9 6-14.5zm-8.2 8.8c-2.5 1-5.5-.3-6.5-2.5-1-2.5.3-5.5 2.5-6.5 2.5-1 5.5.3 6.5 2.5 1.1 2.6 0 5.4-2.5 6.5zM928.548 1515.934c-2.3-5.7-8.8-8.2-14.5-6-5.7 2.2-8.2 8.8-6 14.5 2.3 5.7 8.8 8.2 14.5 6 5.8-2.5 8.5-9 6-14.5zm-8.2 8.8c-2.5 1-5.5-.3-6.5-2.5-1-2.5.3-5.5 2.5-6.5 2.5-1 5.5.3 6.5 2.5 1.1 2.6 0 5.4-2.5 6.5zM1280.966 399.726c-2.3-5.7-8.8-8.2-14.5-6-5.7 2.2-8.2 8.8-6 14.5 2.3 5.7 8.8 8.2 14.5 6 5.8-2.5 8.5-9 6-14.5zm-8.2 8.8c-2.5 1-5.5-.3-6.5-2.5-1-2.5.3-5.5 2.5-6.5 2.5-1 5.5.3 6.5 2.5 1.1 2.6 0 5.4-2.5 6.5z"
        fill = {this.state.Branch1} onPress = {this.Handler1}
        fillOpacity={1}
      />
      <G>
        <Path
          d="M1261.509 399.004l-7.286-10.538 8.286-5.598 7.286 10.538z"
          fill="url(#LinearGradient777)"
        />
        <Path
          d="M1268.47 403.818l-15.674-23.202 3.315-2.24 15.673 23.203z"
          fill="#fff"
        />
      </G>
      <Path
        d="M1447.547 443.14c-2.3-5.7-8.8-8.2-14.5-6-5.7 2.2-8.2 8.8-6 14.5 2.3 5.7 8.8 8.2 14.5 6 5.8-2.5 8.5-9 6-14.5zm-8.2 8.8c-2.5 1-5.5-.3-6.5-2.5-1-2.5.3-5.5 2.5-6.5 2.5-1 5.5.3 6.5 2.5 1.1 2.6 0 5.4-2.5 6.5z"
        fill = {this.state.Branch1} onPress = {this.Handler1}
        fillOpacity={1}
      />
      <G>
        <Path
          d="M913.151 1540.704l.057-11.36 10 .066-.057 11.359z"
          fill="url(#LinearGradient9586)"
          strokeWidth={1.06579709}
        />
        <Path d="M916.1 1548.361l.16-28 4 .024-.16 28z" fill="#fff" />
      </G>
      <G>
        <LinearGradient
          gradientTransform="matrix(8.1093113e-4,-0.16163929,0.14229769,9.2115573e-4,20447.375,-17985.947)"
          y2={-136549.16}
          x2={-121509.11}
          y1={-136549.16}
          x1={-121578.3}
          gradientUnits="userSpaceOnUse"
        >
          <Stop offset={0.1} stopColor="#24bcef" stopOpacity={1} />
          <Stop offset={0.9} stopColor="#e42518" stopOpacity={1} />
        </LinearGradient>
        <Path
          d="M667.036 1300.879l13.344-.587.502 9.987-13.344.587z"
          fill="url(#LinearGradient3896)"
          strokeWidth={1.06579709}
        />
        <Path
          d="M659.558 1304.256l27.964-1.427.203 3.995-27.963 1.427z"
          fill="#fff"
        />
      </G>
      <G>
        <LinearGradient
          gradientTransform="matrix(-0.07965554,-0.11791642,0.11791642,-0.07965554,7680.6518,-24819.489)"
          y2={-136549.16}
          x2={-121509.11}
          y1={-136549.16}
          x1={-121578.3}
          gradientUnits="userSpaceOnUse"
        >
          <Stop offset={0.1} stopColor="#e42518" stopOpacity={1} />
          <Stop offset={0.9} stopColor="#24bcef" stopOpacity={1} />
        </LinearGradient>
        <Path
          d="M618.09 1156.512l-16.909 14.513-6.476-7.62 16.909-14.513z"
          fill="url(#LinearGradient8372)"
        />
        <Path
          d="M622.108 1149.063l-27.608 23.6-2.59-3.047 27.607-23.601z"
          fill="#fff"
        />
      </G>
      <Text
        fontSize="18.3083992px"
        x={505.22757}
        y={1043.072}
        fontFamily="Moscow Sans"
        fill="#1d1d1b"
      >
        {"\u0428\u0435\u043B\u0435\u043F\u0438\u0445\u0430"}
      </Text>
      <G>
        <Path
          d="M1016.875 752.23c.078.064.015.142.093.204.51 2.719-.995 5.23-3.635 5.803-2.422.62-5.215-.854-5.802-3.635l-.015-.14-5.75 1.409c1.472 5.672 7.118 9.181 12.946 7.834 5.688-1.331 9.182-7.118 7.835-12.946z"
          fill = {this.state.Branch11} onPress = {this.Handler11}
        />
        <Path
          d="M1007.609 754.664c-.078-.062-.015-.14-.093-.203-.51-2.718.994-5.23 3.494-5.787 2.422-.62 5.215.854 5.787 3.494l.015.14 5.75-1.409c-1.472-5.672-7.119-9.181-12.947-7.834-5.672 1.472-9.181 7.118-7.834 12.946z"
          fill = {this.state.Branch8} onPress = {this.Handler8}
        />
      </G>
      <G>
        <Path
          d="M1033.59 760.374l-4.311 7.955-10.884-5.897 4.311-7.955z"
          fill="url(#SVGID_42_-7)"
        />
        <Path
          d="M1037.83 766.142l-1.43 2.637-24.617-13.34 1.429-2.638z"
          fill="#fff"
        />
      </G>
      <Path
        d="M143.213 707.56a3.956 3.956 0 00-5.615 0 3.96 3.96 0 000 5.617 3.956 3.956 0 005.615 0c1.594-1.486 1.594-3.987 0-5.618zm-1.521 4.131c-.689.689-1.775.689-2.5 0-.688-.689-.688-1.776 0-2.5.688-.69 1.775-.69 2.5 0 .651.652.651 1.811 0 2.5z"
        fill = {this.state.d1} onPress = {this.Handler_d1}
        fillOpacity={1}
        strokeWidth={0.30948851}
      />
      <Text
        fontSize="18.3083992px"
        x={934.74524}
        y={484.6438}
        fontFamily="Moscow Sans"
        fill="#1d1d1b"
      >
        {"\u041A\u043E\u043F\u0442\u0435\u0432\u043E"}
      </Text>
      <Path
        d="M1018.153 49.115a3.956 3.956 0 00-5.615 0 3.96 3.96 0 000 5.617 3.956 3.956 0 005.615 0c1.594-1.486 1.594-3.987 0-5.617zm-1.521 4.131c-.689.689-1.775.689-2.5 0-.688-.688-.688-1.776 0-2.5.689-.69 1.775-.69 2.5 0 .652.652.652 1.812 0 2.5zM1038.977 108.967a3.956 3.956 0 00-5.615 0 3.96 3.96 0 000 5.618 3.956 3.956 0 005.615 0c1.594-1.486 1.594-3.987 0-5.618zm-1.521 4.132c-.689.688-1.775.688-2.5 0-.688-.689-.688-1.776 0-2.5.689-.69 1.775-.69 2.5 0 .652.652.652 1.811 0 2.5z"
        fill = {this.state.d1} onPress = {this.Handler_d1}
        fillOpacity={1}
        strokeWidth={0.30948851}
      />
      <G transform="translate(98.475 449.815) scale(.14918)">
        <Path
          d="M453.8 667.2h-309c-6.5 0-11.1 3.4-13.2 9.6-14.1 43.6-42.4 130.9-56.6 174.5-1.7 5.2 1.4 9.4 6.9 9.4h309c6.5 0 11.1-3.4 13.2-9.6 14.2-43.6 42.5-130.9 56.7-174.5 1.6-5.1-1.5-9.4-7-9.4"
          fill="#f90"
        />
        <Path
          d="M222.6 705.9h-53.1l-6.3 19.4h19.4V822h40c36.3-.2 59.7-23.9 59.7-58 0-34.4-23.4-58.1-59.7-58.1m-.7 96.9h-17.6v-77.6h17.6c21.4 0 37.5 12.9 37.5 38.8 0 25.7-16.1 38.8-37.5 38.8"
          fill="#fff"
        />
        <Path
          d="M304.5 725.2L325.9 725.2 325.9 802.7 302.8 802.7 302.8 822 366.2 822 372.5 802.7 347.6 802.7 347.6 705.9 304.5 705.9z"
          fill="#fff"
        />
      </G>
      <G transform="translate(447.561 -54.055) scale(.14918)">
        <Path
          d="M453.8 667.2h-309c-6.5 0-11.1 3.4-13.2 9.6-14.1 43.6-42.4 130.9-56.6 174.5-1.7 5.2 1.4 9.4 6.9 9.4h309c6.5 0 11.1-3.4 13.2-9.6 14.2-43.6 42.5-130.9 56.7-174.5 1.6-5.1-1.5-9.4-7-9.4"
          fill="#f90"
        />
        <Path
          d="M222.6 705.9h-53.1l-6.3 19.4h19.4V822h40c36.3-.2 59.7-23.9 59.7-58 0-34.4-23.4-58.1-59.7-58.1m-.7 96.9h-17.6v-77.6h17.6c21.4 0 37.5 12.9 37.5 38.8 0 25.7-16.1 38.8-37.5 38.8"
          fill="#fff"
        />
        <Path
          d="M304.5 725.2L325.9 725.2 325.9 802.7 302.8 802.7 302.8 822 366.2 822 372.5 802.7 347.6 802.7 347.6 705.9 304.5 705.9z"
          fill="#fff"
        />
      </G>
      <G>
        <Path
          d="M861.5 667.2h-309c-6.5 0-11.1 3.4-13.2 9.6-14.2 43.6-42.5 130.9-56.7 174.5-1.7 5.2 1.4 9.4 6.9 9.4h309c6.5 0 11.1-3.4 13.2-9.6 14.2-43.6 42.5-130.9 56.7-174.5 1.6-5.1-1.5-9.4-6.9-9.4"
          transform="matrix(.14918 0 0 .14918 150.285 -83.757)"
          fill = {this.state.d2} onPress = {this.Handler_d2}
        />
        <Path
          d="M622.5 705.9h-53.1l-6.3 19.4h19.4V822h40c36.3-.2 59.7-23.9 59.7-58 0-34.4-23.4-58.1-59.7-58.1m-.7 96.9h-17.6v-77.6h17.6c21.4 0 37.5 12.9 37.5 38.8 0 25.7-16.1 38.8-37.5 38.8M705.6 822v-16.2l29.8-29.2c21.7-21.4 25.8-27.5 25.8-36.3 0-10.3-8.4-16.6-19.1-16.6-9.3 0-19.2 5-26.8 12.1l-14.1-14.1c10.3-10.3 26-17.7 41.6-17.7 26 0 40.3 15.9 40.3 34 0 15.6-8.1 26.7-28.2 45.6l-20.1 18.9v.3h53l-6.3 19.2z"
          transform="matrix(.14918 0 0 .14918 150.285 -83.757)"
          fill="#fff"
        />
      </G>
      <Path
        d="M1265.463 2507.9a3.956 3.956 0 00-5.615 0 3.96 3.96 0 000 5.617 3.956 3.956 0 005.615 0c1.594-1.486 1.594-3.986 0-5.617zm-1.521 4.131c-.689.689-1.775.689-2.5 0-.688-.688-.688-1.775 0-2.5.689-.689 1.775-.689 2.5 0 .652.652.652 1.812 0 2.5z"
        fill = {this.state.d2} onPress = {this.Handler_d2}
        fillOpacity={1}
        strokeWidth={0.30948851}
      />
      <G transform="rotate(-179.991 756.75 1345.288)">
        <LinearGradient>
          <Stop offset={0} stopColor="#8e8e8e" stopOpacity={1} />
          <Stop offset={1} stopColor="#f5e3ea" stopOpacity={0} />
        </LinearGradient>
        <Path
          d="M246.431 63.432h7.73l.056 58.727-3.929-3.014-3.857 2.786z"
          fill="url(#LinearGradient7670)"
          fillOpacity={1}
          strokeWidth={0.60908073}
        />
        <Path
          d="M248.63095 61.674545H251.95298390000002V119.453125H248.63095z"
          fill="#fff"
          fillOpacity={1}
          strokeWidth={0.40858781}
        />
      </G>
      <Path
        d="M1265.828 2565.19a3.956 3.956 0 00-5.614 0 3.96 3.96 0 000 5.617 3.956 3.956 0 005.614 0c1.594-1.486 1.594-3.987 0-5.618zm-1.521 4.13c-.688.69-1.775.69-2.5 0-.688-.688-.688-1.775 0-2.5.689-.689 1.776-.689 2.5 0 .652.652.652 1.812 0 2.5zM1264.744 2393.732a3.956 3.956 0 00-5.614 0 3.96 3.96 0 000 5.618 3.956 3.956 0 005.614 0c1.594-1.486 1.594-3.987 0-5.618zm-1.521 4.132c-.688.688-1.775.688-2.5 0-.688-.689-.688-1.776 0-2.5.689-.69 1.776-.69 2.5 0 .652.651.652 1.811 0 2.5zM1265.132 2450.727a3.956 3.956 0 00-5.614 0 3.96 3.96 0 000 5.617 3.956 3.956 0 005.614 0c1.594-1.486 1.594-3.986 0-5.617zm-1.52 4.131c-.69.689-1.776.689-2.5 0-.689-.688-.689-1.776 0-2.5.688-.689 1.775-.689 2.5 0 .651.652.651 1.812 0 2.5z"
        fill = {this.state.d2} onPress = {this.Handler_d2}
        fillOpacity={1}
        strokeWidth={0.30948851}
      />
      <G>
        <Path
          d="M623.69 391.602a2 2 0 11-3.618-1.708 2 2 0 013.618 1.708zm-5.64 1.235a2 2 0 11-3.617-1.708 2 2 0 013.617 1.708z"
          opacity={1}
          fill="#858585"
          fillOpacity={0.45882353}
          stroke="none"
          strokeWidth={1.04900002}
          strokeMiterlimit={4}
          strokeDasharray="none"
          strokeOpacity={1}
        />
      </G>
      <G>
        <LinearGradient>
          <Stop offset={0} stopColor="#f42a7c" stopOpacity={1} />
          <Stop offset={1} stopColor="#e42518" stopOpacity={1} />
        </LinearGradient>
        <Path
          d="M768.884 571.337l-8.696 7.71-12.337-9.283 7.62-8.867z"
          fill="url(#LinearGradient3923)"
          fillOpacity={1}
          fillRule="nonzero"
          stroke="none"
          strokeWidth={11.89830017}
          strokeMiterlimit={10}
          strokeDasharray="none"
        />
        <Path
          d="M767.439 579.497l-21.66-16.944 1.972-2.52 21.66 16.944z"
          fill="#fff"
        />
      </G>
      <G>
        <Path
          d="M1484.346 888.38a2 2 0 11-3.745-1.406 2 2 0 013.745 1.407zm-.447-6.063a2 2 0 11-3.745-1.407 2 2 0 013.745 1.407zm-.404-5.948a2 2 0 11-3.744-1.408 2 2 0 013.744 1.408z"
          opacity={1}
          fill="#858585"
          fillOpacity={0.45882353}
          stroke="none"
          strokeWidth={1.04900002}
          strokeMiterlimit={4}
          strokeDasharray="none"
          strokeOpacity={1}
        />
      </G>
      <G>
        <Path
          d="M1607.346 1697.771a2 2 0 11-2.676-2.973 2 2 0 012.676 2.973zm2.395-5.589a2 2 0 11-2.677-2.973 2 2 0 012.677 2.973zm2.38-5.465a2 2 0 11-2.676-2.974 2 2 0 012.675 2.974z"
          opacity={1}
          fill="#858585"
          fillOpacity={0.45882353}
          stroke="none"
          strokeWidth={1.04900002}
          strokeMiterlimit={4}
          strokeDasharray="none"
          strokeOpacity={1}
        />
      </G>
      <G>
        <Path
          d="M1324.177 2020.347a2 2 0 11-.787-3.922 2 2 0 01.787 3.921zm4.909-3.588a2 2 0 11-.787-3.922 2 2 0 01.787 3.922zm4.834-3.489a2 2 0 11-.787-3.922 2 2 0 01.786 3.922z"
          opacity={1}
          fill="#858585"
          fillOpacity={0.45882353}
          stroke="none"
          strokeWidth={1.04900002}
          strokeMiterlimit={4}
          strokeDasharray="none"
          strokeOpacity={1}
        />
      </G>
      <G>
        <Path
          d="M1001.115 746.562a2 2 0 11-1.353-3.765 2 2 0 011.353 3.765zm-21.858-14.394a2 2 0 11-1.353-3.765 2 2 0 011.353 3.765zm5.187 3.46a2 2 0 11-1.353-3.764 2 2 0 011.353 3.764zm5.642 3.8a2 2 0 11-1.353-3.764 2 2 0 011.353 3.765zm5.38 3.612a2 2 0 11-1.354-3.764 2 2 0 011.353 3.764z"
          opacity={1}
          fill="#858585"
          fillOpacity={0.45882353}
          stroke="none"
          strokeWidth={1.04900002}
          strokeMiterlimit={4}
          strokeDasharray="none"
          strokeOpacity={1}
        />
      </G>
      <Path
        d="M515.55902 1478.9114H529.45902V1486.9114H515.55902z"
        fill = {this.state.Branch8} onPress = {this.Handler8}
      />
      <G>
        <LinearGradient
          y2={-136549.16}
          x2={-121509.11}
          y1={-136546.83}
          x1={-121653.59}
          gradientTransform="matrix(0.1423,0,0,0.1423,18358.469,20038.089)"
          gradientUnits="userSpaceOnUse"
          id="r"
          xlinkHref="#LinearGradient9600"
        />
        <Path
          transform="rotate(29.491)"
          d="M1045.026 602.629h22.29v9.515h-22.29z"
          fill="url(#r)"
        />
        <Path
          transform="rotate(29.491)"
          d="M1041.383 605.463h34.933v3.681h-34.933z"
          fill="#fff"
        />
      </G>
      <G>
        <LinearGradient
          y2={-136549.16}
          x2={-121509.11}
          y1={-136546.83}
          x1={-121653.59}
          gradientTransform="matrix(0.1423,0,0,0.1423,18358.469,20038.089)"
          gradientUnits="userSpaceOnUse"
          xlinkHref="#LinearGradient9600"
        />
        <Path
          transform="rotate(29.491)"
          d="M1045.026 602.629h22.29v9.515h-22.29z"
          fill="url(#r)"
        />
        <Path
          transform="rotate(29.491)"
          d="M1041.383 605.463h34.933v3.681h-34.933z"
          fill="#fff"
        />
      </G>
      <G>
        <Path
          d="M861.5 667.2h-309c-6.5 0-11.1 3.4-13.2 9.6-14.2 43.6-42.5 130.9-56.7 174.5-1.7 5.2 1.4 9.4 6.9 9.4h309c6.5 0 11.1-3.4 13.2-9.6 14.2-43.6 42.5-130.9 56.7-174.5 1.6-5.1-1.5-9.4-6.9-9.4"
          transform="matrix(.14918 0 0 .14918 1161.98 2482.342)"
          fill = {this.state.d2} onPress = {this.Handler_d2}
        />
        <Path
          d="M622.5 705.9h-53.1l-6.3 19.4h19.4V822h40c36.3-.2 59.7-23.9 59.7-58 0-34.4-23.4-58.1-59.7-58.1m-.7 96.9h-17.6v-77.6h17.6c21.4 0 37.5 12.9 37.5 38.8 0 25.7-16.1 38.8-37.5 38.8M705.6 822v-16.2l29.8-29.2c21.7-21.4 25.8-27.5 25.8-36.3 0-10.3-8.4-16.6-19.1-16.6-9.3 0-19.2 5-26.8 12.1l-14.1-14.1c10.3-10.3 26-17.7 41.6-17.7 26 0 40.3 15.9 40.3 34 0 15.6-8.1 26.7-28.2 45.6l-20.1 18.9v.3h53l-6.3 19.2z"
          transform="matrix(.14918 0 0 .14918 1161.98 2482.342)"
          fill="#fff"
        />
      </G>
      <Path
        d="M813.36 32.226a3.956 3.956 0 00-5.615 0 3.96 3.96 0 000 5.617 3.956 3.956 0 005.615 0c1.594-1.486 1.594-3.986 0-5.617zm-1.521 4.131c-.689.689-1.775.689-2.5 0-.688-.688-.688-1.775 0-2.5.689-.689 1.775-.689 2.5 0 .652.652.652 1.812 0 2.5z"
        fill = {this.state.d1} onPress = {this.Handler_d1}
        fillOpacity={1}
        strokeWidth={0.30948851}
      />
      <Path
        d="M1700.6587 1026.3125H1728.809459V1044.3125H1700.6587z"
        fill="#fff"
        fillOpacity={0.65}
        strokeWidth={0.80911607}
      />
      <Text
        fontSize="18.3083992px"
        x={1618.4402}
        y={1040.3269}
        fontFamily="Moscow Sans"
        fill="#1d1d1b"
      >
        {"\u0411\u0430\u0443\u043C\u0430\u043D\u0441\u043A\u0430\u044F"}
      </Text>
      <Text
        fontSize="18.3083992px"
        x={185.89978}
        y={1057.8069}
        fontFamily="Moscow Sans"
        fill="#1d1d1b"
      >
        {"\u041A\u0443\u043D\u0446\u0435\u0432\u0441\u043A\u0430\u044F"}
      </Text>
      <Text
        fontSize="18.3083992px"
        x={346.02216}
        y={1055.7192}
        fontFamily="Moscow Sans"
        fill="#1d1d1b"
      >
        {"\u041A\u0443\u043D\u0446\u0435\u0432\u0441\u043A\u0430\u044F"}
      </Text>
      <Text
        fontSize="18.3083992px"
        x={191.9118}
        y={1124.5404}
        fontFamily="Moscow Sans"
        fill="#1d1d1b"
      >
        {"\u041F\u0438\u043E\u043D\u0435\u0440\u0441\u043A\u0430\u044F"}
      </Text>
      <Path
        d="M479.733 362.576c-4.3-4.3-11.2-4.3-15.5 0-4.3 4.3-4.3 11.2 0 15.5 4.3 4.3 11.2 4.3 15.5 0 4.4-4.1 4.4-11 0-15.5zm-4.2 11.4c-1.9 1.9-4.9 1.9-6.9 0-1.9-1.9-1.9-4.9 0-6.9 1.9-1.9 4.9-1.9 6.9 0 1.8 1.8 1.8 5 0 6.9zM626.131 553.365c-4.3-4.3-11.2-4.3-15.5 0-4.3 4.3-4.3 11.2 0 15.5 4.3 4.3 11.2 4.3 15.5 0 4.4-4.1 4.4-11 0-15.5zm-4.2 11.4c-1.9 1.9-4.9 1.9-6.9 0-1.9-1.9-1.9-4.9 0-6.9 1.9-1.9 4.9-1.9 6.9 0 1.8 1.8 1.8 5 0 6.9z"
        fill = {this.state.d2} onPress = {this.Handler_d2}
        fillOpacity={1}
      />
      <G>
        <Path
          d="M624.615 573.09a2 2 0 11-1.037 3.862 2 2 0 011.037-3.863zm2.42 5.56a2 2 0 11-1.037 3.864 2 2 0 011.037-3.863zm2.218 5.331a2 2 0 11-1.037 3.864 2 2 0 011.037-3.864z"
          opacity={1}
          fill="#858585"
          fillOpacity={0.45882353}
          stroke="none"
          strokeWidth={1.04900002}
          strokeMiterlimit={4}
          strokeDasharray="none"
          strokeOpacity={1}
        />
      </G>
      <G>
        <Path
          d="M460.838 379.213a2 2 0 11-3.617-1.708 2 2 0 013.617 1.708zm-5.903 1.392a2 2 0 11-3.617-1.707 2 2 0 013.617 1.707zm-5.64 1.235a2 2 0 11-3.617-1.707 2 2 0 013.617 1.707zm-5.485 1.498a2 2 0 11-3.618-1.708 2 2 0 013.618 1.708z"
          opacity={1}
          fill="#858585"
          fillOpacity={0.45882353}
          stroke="none"
          strokeWidth={1.04900002}
          strokeMiterlimit={4}
          strokeDasharray="none"
          strokeOpacity={1}
        />
      </G>
      <Text
        y={1304.649}
        x={1742.5629}
        fontSize="18.3083992px"
        fontFamily="Moscow Sans"
        fill="#1d1d1b"
      >
        {
          "\u041D\u043E\u0432\u043E\u0445\u043E\u0445\u043B\u043E\u0432\u0441\u043A\u0430\u044F"
        }
      </Text>
      <G>
        <Path
          d="M1024.16 602.828a2 2 0 11-3.203-2.394 2 2 0 013.204 2.394zm-6.254.01a2 2 0 11-3.204-2.395 2 2 0 013.204 2.395zm-6.436-.126a2 2 0 11-3.204-2.395 2 2 0 013.204 2.395zm-6.096-.013a2 2 0 11-3.203-2.394 2 2 0 013.203 2.394zm-5.783.13a2 2 0 11-3.204-2.394 2 2 0 013.204 2.394zm-5.806-.023a2 2 0 11-3.204-2.394 2 2 0 013.204 2.394zm-6.063.187a2 2 0 11-3.204-2.395 2 2 0 013.204 2.395zm-5.772.085a2 2 0 11-3.204-2.395 2 2 0 013.204 2.395z"
          opacity={1}
          fill="#858585"
          fillOpacity={0.45882353}
          stroke="none"
          strokeWidth={1.04900002}
          strokeMiterlimit={4}
          strokeDasharray="none"
          strokeOpacity={1}
        />
      </G>
      <G>
        <LinearGradient
          gradientTransform="matrix(0.1423,0,0,-0.1423,18669.76,20673.027)"
          y2={140610.33}
          x2={-123092.12}
          y1={140471.28}
          x1={-123172.38}
          gradientUnits="userSpaceOnUse"
        >
          <Stop offset={0.3} stopColor="#925233" stopOpacity={1} />
          <Stop offset={0.7} stopColor="#f42a7c" stopOpacity={1} />
        </LinearGradient>
        <Path
          d="M1565.187 1035.942c-9.674-1.688-20.105.38-26.534 5.457-.715.565-1.106 1.304-1.731 1.798"
          strokeMiterlimit={10}
          fill="#fff"
          fillOpacity={1}
          stroke="url(#LinearGradient7944)"
          strokeWidth={13.58401299}
        />
        <Path
          d="M1573.088 1039.059c-10.382-6.578-25.505-5.503-34.12 2.423-2.76 2.54-4.462 5.36-5.209 8.395"
          strokeMiterlimit={10}
          fill="none"
          stroke="#fff"
          strokeWidth={4.57766724}
        />
      </G>
      <G>
        <LinearGradient
          gradientTransform="matrix(0.1423,0,0,-0.1423,18669.76,20673.027)"
          y2={140469.94}
          x2={-122914.76}
          y1={140610.89}
          x1={-122952.53}
          gradientUnits="userSpaceOnUse"
        >
          <Stop offset={0.3} stopColor="#925233" stopOpacity={1} />
          <Stop offset={0.7} stopColor="#0572b9" stopOpacity={1} />
        </LinearGradient>
        <Path
          strokeMiterlimit={10}
          d="M1551.96 1070.277c.3-.6.3-1.3.3-1.9 0-7.5-4.6-13.9-10.8-16.7"
          fill="none"
          stroke="url(#LinearGradient9401)"
          strokeWidth={11.99969959}
        />
        <Path
          strokeMiterlimit={10}
          d="M1549.76 1077.677c1.6-2.5 2.5-6 2.5-9.3 0-10.3-8.2-18.5-18.5-18.5"
          fill="none"
          stroke="#fff"
          strokeWidth={3.9999001}
        />
      </G>
      <G>
        <LinearGradient
          gradientTransform="matrix(0.1423,0,0,-0.1423,18669.76,20673.027)"
          y2={140610.33}
          x2={-123092.12}
          y1={140471.28}
          x1={-123172.38}
          gradientUnits="userSpaceOnUse"
        >
          <Stop offset={0.3} stopColor="#bed12e" stopOpacity={1} />
          <Stop offset={0.7} stopColor="#925233" stopOpacity={1} />
        </LinearGradient>
        <Path
          strokeMiterlimit={10}
          d="M1525.86 1051.477c-6.5 3-10.8 9.5-10.8 16.7 0 .8.3 1.6.3 2.3"
          fill="none"
          stroke="url(#LinearGradient9405)"
          strokeWidth={11.99969959}
        />
        <Path
          strokeMiterlimit={10}
          d="M1533.56 1049.777c-10.3 0-18.5 8.2-18.5 18.5 0 3.3.8 6.3 2.3 9"
          fill="none"
          stroke="#fff"
          strokeWidth={3.9999001}
        />
      </G>
      <G>
        <LinearGradient
          gradientTransform="matrix(0.1423,0,0,-0.1423,18669.76,20673.027)"
          y2={140363.66}
          x2={-122952.29}
          y1={140363.66}
          x1={-123108.54}
          gradientUnits="userSpaceOnUse"
        >
          <Stop offset={0.3} stopColor="#bed12e" stopOpacity={1} />
          <Stop offset={0.7} stopColor="#0572b9" stopOpacity={1} />
        </LinearGradient>
        <Path
          strokeMiterlimit={10}
          d="M1522.76 1083.377c3.2 2.3 6.9 3.6 11 3.6 3.8 0 7.1-1.1 10.3-3"
          fill="none"
          stroke="url(#LinearGradient9403)"
          strokeWidth={11.99969959}
        />
        <Path
          strokeMiterlimit={10}
          d="M1517.36 1077.377c3.2 5.7 9.3 9.6 16.3 9.6s12.8-3.8 16.3-9.3"
          fill="none"
          stroke="#fff"
          strokeWidth={3.9999001}
        />
      </G>
      <Path
        d="M1809.239 1166.89c-4.075-4.404-11.067-4.747-15.545-.605-4.405 4.074-4.748 11.067-.605 15.544 4.074 4.405 11.066 4.748 15.544.606 4.467-3.86 4.884-10.92.606-15.545zm-11.82 10.933c-1.697-1.835-1.712-5.091.27-6.924 1.836-1.698 5.091-1.713 6.925.27 1.698 1.834 1.712 5.09-.27 6.924-1.778 2.053-4.955 1.859-6.924-.27z"
        fill = {this.state.Branch15} onPress = {this.Handler15}
        fillOpacity={1}
      />
      <Path d="M1949.891 1328.143l-5.3-5.2 10.5-10.3 5 5.3z" fill = {this.state.Branch15} onPress = {this.Handler15} />
      <Text
        y={1313.9437}
        x={1957.4519}
        fontFamily="Moscow Sans"
        fill="#1d1d1b"
        fontSize={18.3084}
      >
        {
          "\u0421\u0442\u0430\u0445\u0430\u043D\u043E\u0432\u0441\u043A\u0430\u044F"
        }
      </Text>
      <Path
        fill = {this.state.Branch15} onPress = {this.Handler15}
        d="M1952.7 1321c-1.78 1.483-3.227 3.516-4.9 5l35.53 35.532c10.82 10.819 13.294 16.828 13.294 31.394v69.862l7.283.072-.07-69.51c-.07-16.334-3.252-24.465-15.344-36.557z"
      />
      <Path
        fill = {this.state.Branch15} onPress = {this.Handler15}
        d="M1996.6238 1462.6873H2011.6238V1470.6873H1996.6238z"
      />
      <Text
        y={1470.318}
        x={2017.324}
        fontFamily="Moscow Sans"
        fill="#1d1d1b"
        fontSize={18.3084}
      >
        {"\u041E\u043A\u0441\u043A\u0430\u044F"}
      </Text>
      <Path
        fill = {this.state.Branch15} onPress = {this.Handler15}
        d="M1996.6603 1470.0201H2003.9996264V1704.6406299999999H1996.6603z"
      />
      <Path
        d="M1985.6746 1634.25H2013.8253590000002V1675.25H1985.6746z"
        fill="#fff"
        fillOpacity={0.65}
        strokeWidth={1.22114289}
      />
      <G fontSize={18.3084}>
        <Text
          x={1957.2603}
          y={1648.2384}
          fontSize="18.3083992px"
          fontFamily="Moscow Sans"
          fill="#1d1d1b"
        >
          {"\u0420\u044F\u0437\u0430\u043D\u0441\u043A\u0438\u0439"}
        </Text>
        <Text
          x={1957.2603}
          y={1670.2384}
          fontSize="18.3083992px"
          fontFamily="Moscow Sans"
          fill="#1d1d1b"
        >
          {"\u043F\u0440\u043E\u0441\u043F\u0435\u043A\u0442"}
        </Text>
      </G>
      <Text
        y={1636.4191}
        x={1633.4636}
        fontSize="18.31080055px"
        fontFamily="Moscow Sans"
        fill="#1d1d1b"
      >
        {"\u041F\u0435\u0447\u0430\u0442\u043D\u0438\u043A\u0438"}
      </Text>
      <Text
        fontSize="18.31080055px"
        x={1632.116}
        y={1575.1851}
        fontFamily="Moscow Sans"
        fill="#1d1d1b"
      >
        {"\u041A\u043E\u0436\u0443\u0445\u043E\u0432\u0441\u043A\u0430\u044F"}
      </Text>
      <Text
        fontSize="18.31080055px"
        x={1363.2292}
        y={1838.3054}
        fontFamily="Moscow Sans"
        fill="#1d1d1b"
      >
        {"\u041A\u043E\u043B\u043E\u043C\u0435\u043D\u0441\u043A\u0430\u044F"}
      </Text>
      <Text
        fontSize="18.31080055px"
        x={1363.0018}
        y={1882.8267}
        fontFamily="Moscow Sans"
        fill="#1d1d1b"
      >
        {"\u041A\u0430\u0448\u0438\u0440\u0441\u043A\u0430\u044F"}
      </Text>
      <Text
        fontSize="18.3083992px"
        x={1720.6667}
        y={1423.4761}
        fontFamily="Moscow Sans"
        fill="#1d1d1b"
      >
        {
          "\u0412\u043E\u043B\u0433\u043E\u0433\u0440\u0430\u0434\u0441\u043A\u0438\u0439 \u043F\u0440\u043E\u0441\u043F\u0435\u043A\u0442"
        }
      </Text>
      <Text
        y={728.82928}
        x={1065.2505}
        fontSize="18.3083992px"
        fontFamily="Moscow Sans"
        fill="#1d1d1b"
      >
        {"\u041C\u0430\u0440\u044C\u0438\u043D\u0430 \u0420\u043E\u0449\u0430"}
      </Text>
      <G fontSize={18.3108}>
        <Text
          x={1134.6079}
          y={2118.1206}
          fontSize="18.31080055px"
          fontFamily="Moscow Sans"
          fill="#1d1d1b"
        >
          {"\u0423\u043B\u0438\u0446\u0430"}
        </Text>
        <Text
          x={1134.6079}
          y={2140.1206}
          fontSize="18.31080055px"
          fontFamily="Moscow Sans"
          fill="#1d1d1b"
        >
          {
            "\u0410\u043A\u0430\u0434\u0435\u043C\u0438\u043A\u0430 \u042F\u043D\u0433\u0435\u043B\u044F"
          }
        </Text>
      </G>
      <G fontSize={18.3108}>
        <Text
          x={1133.5111}
          y={2207.1353}
          fontSize="18.31080055px"
          fontFamily="Moscow Sans"
          fill="#1d1d1b"
        >
          {"\u0411\u0443\u043B\u044C\u0432\u0430\u0440"}
        </Text>
        <Text
          x={1133.5111}
          y={2229.1353}
          fontSize="18.31080055px"
          fontFamily="Moscow Sans"
          fill="#1d1d1b"
        >
          {
            "\u0414\u043C\u0438\u0442\u0440\u0438\u044F \u0414\u043E\u043D\u0441\u043A\u043E\u0433\u043E"
          }
        </Text>
      </G>
      <Path
        d="M1579.977 1738.472a3.956 3.956 0 00-5.615 0 3.96 3.96 0 000 5.617 3.956 3.956 0 005.615 0c1.593-1.486 1.593-3.987 0-5.617zm-1.522 4.131c-.688.689-1.775.689-2.499 0-.688-.689-.688-1.776 0-2.5.688-.69 1.775-.69 2.5 0 .651.652.651 1.811 0 2.5z"
        fill = {this.state.d2} onPress = {this.Handler_d2}
        fillOpacity={1}
        strokeWidth={0.30948851}
      />
      <Path
        d="M1535.9019 1195.9579H1574.117518V1237.830649H1535.9019z"
        fill="#fff"
        fillOpacity={0.65}
        strokeWidth={1.9453814}
      />
      <G fontSize={18.3084}>
        <Text
          y={1211.6091}
          x={1522.674}
          fontSize="18.3083992px"
          fontFamily="Moscow Sans"
          fill="#1d1d1b"
        >
          {"\u041C\u043E\u0441\u043A\u0432\u0430-"}
        </Text>
        <Text
          y={1233.6091}
          x={1522.674}
          fontSize="18.3083992px"
          fontFamily="Moscow Sans"
          fill="#1d1d1b"
        >
          {"\u0422\u043E\u0432\u0430\u0440\u043D\u0430\u044F"}
        </Text>
      </G>
      <Path
        fill = {this.state.Branch15} onPress = {this.Handler15}
        d="M1996.6606 1711.1185H2003.9999263999998V1808.3119510000001H1996.6606z"
      />
      <Path
        fill = {this.state.Branch15} onPress = {this.Handler15}
        d="M1996.6237 1703.5765H2011.6237V1711.5765H1996.6237z"
      />
      <Text
        y={1711.5428}
        x={2016.5637}
        fontFamily="Moscow Sans"
        fill="#1d1d1b"
        fontSize={18.3084}
      >
        {
          "\u042E\u0433\u043E-\u0412\u043E\u0441\u0442\u043E\u0447\u043D\u0430\u044F"
        }
      </Text>
      <G strokeMiterlimit={10}>
        <Path
          d="M1793.142 1173.198c-7.145-.066-14.315 2.344-19.894 7.505-5.653 5.228-8.765 12.467-9.187 19.668"
          fill="none"
          stroke="url(#LinearGradient12121)"
          strokeWidth={11.99969959}
          strokeMiterlimit={10}
        />
        <Path
          d="M1800.875 1174.49c-9.369-2.912-20.066-.782-27.774 6.348-7.635 7.063-10.433 17.144-8.462 26.49"
          fill="none"
          stroke="#fff"
          strokeWidth={3.9999001}
          strokeMiterlimit={10}
        />
      </G>
      <G>
        <G transform="translate(196.192 307.968)">
          <Path
            d="M1191.254 1607.405v-3.992l-1.584-1.358h-12.658v8.044h2.437a1.53 1.53 0 01-.098-.56c0-1.395 1.163-2.373 2.819-2.373v.619c-1.136 0-2.06.797-2.06 1.754 0 .96.924 1.737 2.06 1.737.875 0 1.702-.477 1.964-1.177h7.12v-1.357h.78v-1.337zm-13.465-2.016h3.148v-1.976h-3.148zm4.356 5.187c-.688 0-1.253-.477-1.253-1.037 0-.576.565-1.057 1.253-1.057.685 0 1.275.481 1.275 1.058 0 .54-.519 1.036-1.275 1.036zm-.404-5.187h3.172v-1.976h-3.172zm3.976 3.353h1.584v-5.328h-1.584zm2.391 0h1.562v-5.328h-1.562z"
            fill="#3277af"
            fillOpacity={1}
            fillRule="evenodd"
            stroke="none"
            strokeWidth={0.47931814}
          />
          <Path
            d="M1185.7167 1603.4142H1187.3011436V1608.7419059H1185.7167z"
            opacity={1}
            fill="#fff"
            fillOpacity={1}
            fillRule="evenodd"
            stroke="none"
            strokeWidth={1.04900002}
            strokeMiterlimit={4}
            strokeDasharray="none"
            strokeOpacity={1}
          />
          <Path
            d="M1188.1083 1603.4142H1189.6927436V1608.7419059H1188.1083z"
            opacity={1}
            fill="#fff"
            fillOpacity={1}
            fillRule="evenodd"
            stroke="none"
            strokeWidth={1.04900002}
            strokeMiterlimit={4}
            strokeDasharray="none"
            strokeOpacity={1}
          />
          <Path
            d="M1181.7407 1603.4127H1184.9164147000001V1605.4614230000002H1181.7407z"
            opacity={1}
            fill="#fff"
            fillOpacity={1}
            fillRule="evenodd"
            stroke="none"
            strokeWidth={0.92093587}
            strokeMiterlimit={4}
            strokeDasharray="none"
            strokeOpacity={1}
          />
          <Path
            d="M1177.7892 1603.3403H1180.9649147V1605.3890230000002H1177.7892z"
            opacity={1}
            fill="#fff"
            fillOpacity={1}
            fillRule="evenodd"
            stroke="none"
            strokeWidth={0.92093587}
            strokeMiterlimit={4}
            strokeDasharray="none"
            strokeOpacity={1}
          />
        </G>
        <Text
          y={1929.304}
          x={1372.171}
          fontSize="10px"
          fontFamily="Moscow Sans"
          fill="#3277af"
        >
          {"\u041A\u041C"}
        </Text>
        <Path
          d="M1363.348 1918.584l-17.64 17.5c-10.4 10.4-15.07 13.336-30.47 13.736l-60.144-.01h-120.998v3.58h120.998l59.514.012c16.9 0 22.198-3.437 33.898-15.037l17.127-17.334z"
          fill="#3277af"
          fillOpacity={1}
          strokeWidth={0.82721734}
        />
        <Ellipse
          ry={2.6348305}
          rx={2.6007335}
          cy={2322.4221}
          cx={390.79861}
          transform="scale(-1 1) rotate(45)"
          opacity={1}
          fill="#3277af"
          fillOpacity={1}
          stroke="none"
          strokeWidth={1.20090508}
          strokeMiterlimit={4}
          strokeDasharray="none"
          strokeOpacity={1}
        />
        <Circle
          r={1.8874153}
          cy={2322.4404}
          cx={390.77261}
          transform="scale(-1 1) rotate(45)"
          opacity={1}
          fill="#fff"
          fillOpacity={1}
          stroke="none"
          strokeWidth={0.89086854}
          strokeMiterlimit={4}
          strokeDasharray="none"
          strokeOpacity={1}
        />
        <Ellipse
          ry={2.6348305}
          rx={2.6007335}
          cy={-578.64301}
          cx={-2181.5403}
          transform="rotate(-135)"
          opacity={1}
          fill="#3277af"
          fillOpacity={1}
          stroke="none"
          strokeWidth={1.20090508}
          strokeMiterlimit={4}
          strokeDasharray="none"
          strokeOpacity={1}
        />
        <Circle
          r={1.8874153}
          cy={-578.62469}
          cx={-2181.5662}
          transform="rotate(-135)"
          opacity={1}
          fill="#fff"
          fillOpacity={1}
          stroke="none"
          strokeWidth={0.89086854}
          strokeMiterlimit={4}
          strokeDasharray="none"
          strokeOpacity={1}
        />
        <Ellipse
          ry={2.6348305}
          rx={2.6007335}
          cy={-497.54404}
          cx={-2262.6389}
          transform="rotate(-135)"
          opacity={1}
          fill="#3277af"
          fillOpacity={1}
          stroke="none"
          strokeWidth={1.20090508}
          strokeMiterlimit={4}
          strokeDasharray="none"
          strokeOpacity={1}
        />
        <Circle
          r={1.8874153}
          cy={-497.52573}
          cx={-2262.665}
          transform="rotate(-135)"
          opacity={1}
          fill="#fff"
          fillOpacity={1}
          stroke="none"
          strokeWidth={0.89086854}
          strokeMiterlimit={4}
          strokeDasharray="none"
          strokeOpacity={1}
        />
        <Path
          d="M1237.288 1932.705h-125.07v-3.581h125.07z"
          fill="#9bc4d6"
          fillOpacity={1}
          strokeWidth={0.84102088}
        />
        <Ellipse
          ry={2.6348305}
          rx={2.6007335}
          cy={2151.4436}
          cx={579.48529}
          transform="scale(-1 1) rotate(45)"
          opacity={1}
          fill="#9bc4d6"
          fillOpacity={1}
          stroke="none"
          strokeWidth={1.20090508}
          strokeMiterlimit={4}
          strokeDasharray="none"
          strokeOpacity={1}
        />
        <Circle
          r={1.8874153}
          cy={-579.46698}
          cx={-2151.4695}
          transform="rotate(-135)"
          opacity={1}
          fill="#fff"
          fillOpacity={1}
          stroke="none"
          strokeWidth={0.89086854}
          strokeMiterlimit={4}
          strokeDasharray="none"
          strokeOpacity={1}
        />
        <Ellipse
          ry={2.6348305}
          rx={2.6007335}
          cy={-489.49435}
          cx={-2241.1624}
          transform="rotate(-135)"
          opacity={1}
          fill="#9bc4d6"
          fillOpacity={1}
          stroke="none"
          strokeWidth={1.20090508}
          strokeMiterlimit={4}
          strokeDasharray="none"
          strokeOpacity={1}
        />
        <Circle
          r={1.8874153}
          cy={-489.47604}
          cx={-2241.1882}
          transform="rotate(-135)"
          opacity={1}
          fill="#fff"
          fillOpacity={1}
          stroke="none"
          strokeWidth={0.89086854}
          strokeMiterlimit={4}
          strokeDasharray="none"
          strokeOpacity={1}
        />
        <Path
          d="M1146.308 1904.597v.804h-2.528l-.832-.804zm3.712 4.293v4.415h.832v1.606h-.832v1.513h-6.868c-.285.813-1.083 1.398-2.022 1.398h-.01c-.935 0-1.73-.587-2.015-1.398a1.99 1.99 0 01-.112-.661c0-1.136.952-2.056 2.128-2.06v-.73c-.39 0-.77.073-1.126.219a2.867 2.867 0 00-1.54 1.484 2.69 2.69 0 00-.144 1.748h-2.63v-5.033h2.048v-2.501h-2.049v-1.513h5.441v-.8h1.59l-1.216-1.176h-1.91a.41.41 0 01-.417-.402.41.41 0 01.417-.401h2.212l2.052 1.98h2.456v.799h2.145zm-.831 6.02h-2.049v-6.02h2.049zm-4.93.001h2.048v-6.021h-2.047zm-.831-3.52h-4.865v-2.501h4.865zm-2.316 5.621c-.463 0-.87-.235-1.098-.588a1.216 1.216 0 01-.195-.661c0-.69.579-1.25 1.293-1.25.716 0 1.296.56 1.296 1.25 0 .242-.072.47-.196.66a1.307 1.307 0 01-1.1.59z"
          clipRule="evenodd"
          fill="#9bc4d6"
          fillOpacity={1}
          fillRule="evenodd"
          strokeWidth={0.73875594}
        />
        <Text
          y={1927.1792}
          x={1126.6992}
          fontSize="10px"
          fontFamily="Moscow Sans"
          fill="#9bc4d6"
          fillOpacity={1}
        >
          {"\u211660,72"}
        </Text>
        <Path
          d="M1336.559 1897.902l-17.64 17.5c-10.4 10.4-15.07 13.337-30.47 13.737h-28.793c.581 1.142.652 2.409.204 3.58l27.959.01c16.9 0 22.198-3.437 33.898-15.037l17.127-17.334z"
          fill="#9bc4d6"
          fillOpacity={1}
          strokeWidth={0.82721734}
        />
        <Ellipse
          ry={2.6348305}
          rx={2.6007335}
          cy={-475.67416}
          cx={-2254.9832}
          transform="rotate(-135)"
          opacity={1}
          fill="#9bc4d6"
          fillOpacity={1}
          stroke="none"
          strokeWidth={1.20090508}
          strokeMiterlimit={4}
          strokeDasharray="none"
          strokeOpacity={1}
        />
        <Circle
          r={1.8874153}
          cy={-475.65585}
          cx={-2255.0093}
          transform="rotate(-135)"
          opacity={1}
          fill="#fff"
          fillOpacity={1}
          stroke="none"
          strokeWidth={0.89086854}
          strokeMiterlimit={4}
          strokeDasharray="none"
          strokeOpacity={1}
        />
        <Ellipse
          ry={2.6348305}
          rx={2.6007335}
          cy={-396.37326}
          cx={-2288.6025}
          transform="rotate(-135)"
          opacity={1}
          fill="#9bc4d6"
          fillOpacity={1}
          stroke="none"
          strokeWidth={1.20090508}
          strokeMiterlimit={4}
          strokeDasharray="none"
          strokeOpacity={1}
        />
        <Circle
          r={1.8874153}
          cy={-396.35495}
          cx={-2288.6287}
          transform="rotate(-135)"
          opacity={1}
          fill="#fff"
          fillOpacity={1}
          stroke="none"
          strokeWidth={0.89086854}
          strokeMiterlimit={4}
          strokeDasharray="none"
          strokeOpacity={1}
        />
        <G transform="translate(207.008 302.377)">
          <Path
            d="M1118.123 1587.707v-3.992l-1.585-1.357h-12.658v8.043h2.438a1.53 1.53 0 01-.098-.56c0-1.395 1.162-2.373 2.818-2.373v.619c-1.136 0-2.059.798-2.059 1.755 0 .96.923 1.737 2.06 1.737.875 0 1.701-.477 1.964-1.177h7.12v-1.358h.78v-1.337zm-13.465-2.016h3.148v-1.976h-3.148zm4.356 5.188c-.688 0-1.254-.477-1.254-1.037 0-.576.566-1.058 1.254-1.058.684 0 1.274.482 1.274 1.058 0 .54-.518 1.037-1.274 1.037zm-.405-5.188h3.173v-1.976h-3.173zm3.976 3.353h1.585v-5.328h-1.585zm2.392 0h1.561v-5.328h-1.561z"
            fill="#9bc4d6"
            fillOpacity={1}
            fillRule="evenodd"
            stroke="none"
            strokeWidth={0.47931814}
          />
          <Path
            d="M1112.5852 1583.7164H1114.1696436V1589.0441059H1112.5852z"
            opacity={1}
            fill="#fff"
            fillOpacity={1}
            fillRule="evenodd"
            stroke="none"
            strokeWidth={1.04900002}
            strokeMiterlimit={4}
            strokeDasharray="none"
            strokeOpacity={1}
          />
          <Path
            d="M1114.9768 1583.7164H1116.5612436V1589.0441059H1114.9768z"
            opacity={1}
            fill="#fff"
            fillOpacity={1}
            fillRule="evenodd"
            stroke="none"
            strokeWidth={1.04900002}
            strokeMiterlimit={4}
            strokeDasharray="none"
            strokeOpacity={1}
          />
          <Path
            d="M1108.6093 1583.715H1111.7850147000001V1585.763723H1108.6093z"
            opacity={1}
            fill="#fff"
            fillOpacity={1}
            fillRule="evenodd"
            stroke="none"
            strokeWidth={0.92093587}
            strokeMiterlimit={4}
            strokeDasharray="none"
            strokeOpacity={1}
          />
          <Path
            d="M1104.6577 1583.6426H1107.8334147V1585.691323H1104.6577z"
            opacity={1}
            fill="#fff"
            fillOpacity={1}
            fillRule="evenodd"
            stroke="none"
            strokeWidth={0.92093587}
            strokeMiterlimit={4}
            strokeDasharray="none"
            strokeOpacity={1}
          />
        </G>
        <Text
          y={1903.0134}
          x={1302.1049}
          fontSize="10px"
          fontFamily="Moscow Sans"
          fill="#9bc4d6"
          fillOpacity={1}
        >
          {"\u2116607"}
        </Text>
        <Path
          d="M1111.3005 1936.1771H1113.3005V1943.1771H1111.3005z"
          opacity={1}
          fill="#fff"
          strokeWidth={0.15617375}
        />
        <Path
          d="M1115.3005 1936.1771H1117.3005V1943.1771H1115.3005z"
          opacity={1}
          fill="#fff"
          strokeWidth={0.15617375}
        />
        <Path
          d="M1119.3005 1936.1771H1121.3005V1943.1771H1119.3005z"
          opacity={1}
          fill="#fff"
          strokeWidth={0.15617375}
        />
        <Path
          d="M1123.3005 1936.1771H1125.3005V1943.1771H1123.3005z"
          opacity={1}
          fill="#fff"
          strokeWidth={0.15617375}
        />
        <Path
          d="M1127.3005 1936.1771H1129.3005V1943.1771H1127.3005z"
          opacity={1}
          fill="#fff"
          strokeWidth={0.15617375}
        />
        <Path
          d="M1131.3005 1936.1771H1133.3005V1943.1771H1131.3005z"
          opacity={1}
          fill="#fff"
          strokeWidth={0.15617375}
        />
        <Path
          d="M1135.3005 1936.1771H1137.3005V1943.1771H1135.3005z"
          opacity={1}
          fill="#fff"
          strokeWidth={0.15617375}
        />
        <Path
          d="M1139.3005 1936.1771H1141.3005V1943.1771H1139.3005z"
          opacity={1}
          fill="#fff"
          strokeWidth={0.15617375}
        />
        <Path
          d="M1143.3005 1936.1771H1145.3005V1943.1771H1143.3005z"
          opacity={1}
          fill="#fff"
          strokeWidth={0.15617375}
        />
        <Path
          d="M1147.3005 1936.1771H1149.3005V1943.1771H1147.3005z"
          opacity={1}
          fill="#fff"
          strokeWidth={0.15617375}
        />
        <Path
          d="M1151.3005 1936.1771H1153.3005V1943.1771H1151.3005z"
          opacity={1}
          fill="#fff"
          strokeWidth={0.15617375}
        />
        <Path
          d="M1155.3005 1936.1771H1157.3005V1943.1771H1155.3005z"
          opacity={1}
          fill="#fff"
          strokeWidth={0.15617375}
        />
        <Path
          d="M1159.3005 1936.1771H1161.3005V1943.1771H1159.3005z"
          opacity={1}
          fill="#fff"
          strokeWidth={0.15617375}
        />
        <Path
          d="M1163.3005 1936.1771H1165.3005V1943.1771H1163.3005z"
          opacity={1}
          fill="#fff"
          strokeWidth={0.15617375}
        />
        <Path
          d="M1167.3005 1936.1771H1169.3005V1943.1771H1167.3005z"
          opacity={1}
          fill="#fff"
          strokeWidth={0.15617375}
        />
        <Path
          d="M1171.3005 1936.1771H1173.3005V1943.1771H1171.3005z"
          opacity={1}
          fill="#fff"
          strokeWidth={0.15617375}
        />
        <Path
          d="M1175.3005 1936.1771H1177.3005V1943.1771H1175.3005z"
          opacity={1}
          fill="#fff"
          strokeWidth={0.15617375}
        />
        <Path
          d="M1179.3005 1936.1771H1181.3005V1943.1771H1179.3005z"
          opacity={1}
          fill="#fff"
          strokeWidth={0.15617375}
        />
        <Path
          d="M1183.3005 1936.1771H1185.3005V1943.1771H1183.3005z"
          opacity={1}
          fill="#fff"
          strokeWidth={0.15617375}
        />
        <Path
          d="M1187.3005 1936.1771H1189.3005V1943.1771H1187.3005z"
          opacity={1}
          fill="#fff"
          strokeWidth={0.15617375}
        />
        <Path
          d="M1191.3005 1936.1771H1193.3005V1943.1771H1191.3005z"
          opacity={1}
          fill="#fff"
          strokeWidth={0.15617375}
        />
        <Path
          transform="rotate(-90)"
          d="M-1941.1771 1108.399H-1938.1771V1315.2919H-1941.1771z"
          opacity={1}
          fill="#fff"
          strokeWidth={1.03986609}
        />
        <Path
          d="M1195.3005 1936.1771H1197.3005V1943.1771H1195.3005z"
          opacity={1}
          fill="#fff"
          strokeWidth={0.15617375}
        />
        <Path
          d="M1199.3005 1936.1771H1201.3005V1943.1771H1199.3005z"
          opacity={1}
          fill="#fff"
          strokeWidth={0.15617375}
        />
        <Path
          d="M1203.3005 1936.1771H1205.3005V1943.1771H1203.3005z"
          opacity={1}
          fill="#fff"
          strokeWidth={0.15617375}
        />
        <Path
          d="M1207.3005 1936.1771H1209.3005V1943.1771H1207.3005z"
          opacity={1}
          fill="#fff"
          strokeWidth={0.15617375}
        />
        <Path
          d="M1211.3005 1936.1771H1213.3005V1943.1771H1211.3005z"
          opacity={1}
          fill="#fff"
          strokeWidth={0.15617375}
        />
        <Path
          d="M1215.3005 1936.1771H1217.3005V1943.1771H1215.3005z"
          opacity={1}
          fill="#fff"
          strokeWidth={0.15617375}
        />
        <Path
          d="M1219.3005 1936.1771H1221.3005V1943.1771H1219.3005z"
          opacity={1}
          fill="#fff"
          strokeWidth={0.15617375}
        />
        <Path
          d="M1223.3005 1936.1771H1225.3005V1943.1771H1223.3005z"
          opacity={1}
          fill="#fff"
          strokeWidth={0.15617375}
        />
        <Path
          d="M1227.3005 1936.1771H1229.3005V1943.1771H1227.3005z"
          opacity={1}
          fill="#fff"
          strokeWidth={0.15617375}
        />
        <Path
          d="M1231.3005 1936.1771H1233.3005V1943.1771H1231.3005z"
          opacity={1}
          fill="#fff"
          strokeWidth={0.15617375}
        />
        <Path
          d="M1235.3005 1936.1771H1237.3005V1943.1771H1235.3005z"
          opacity={1}
          fill="#fff"
          strokeWidth={0.15617375}
        />
        <Path
          d="M1239.3005 1936.1771H1241.3005V1943.1771H1239.3005z"
          opacity={1}
          fill="#fff"
          strokeWidth={0.15617375}
        />
        <Path
          d="M1243.3005 1936.1771H1245.3005V1943.1771H1243.3005z"
          opacity={1}
          fill="#fff"
          strokeWidth={0.15617375}
        />
        <Path
          d="M1247.3005 1928.3445H1249.3005V1943.1771999999999H1247.3005z"
          opacity={1}
          fill="#fff"
          strokeWidth={0.22733647}
        />
        <Path
          d="M1251.3007 1936.1771H1253.3007V1943.1771H1251.3007z"
          opacity={1}
          fill="#fff"
          strokeWidth={0.15617375}
        />
        <Path
          d="M1255.3007 1936.1771H1257.3007V1943.1771H1255.3007z"
          opacity={1}
          fill="#fff"
          strokeWidth={0.15617375}
        />
        <Path
          d="M1246.3075 1931.5901H1250.3075V1940.3442980999998H1246.3075z"
          opacity={1}
          fill="#fff"
          strokeWidth={0.24699163}
        />
        <Path
          transform="rotate(-90)"
          d="M-1933.1771 1244.3075H-1931.1771V1252.3075H-1933.1771z"
          opacity={1}
          fill="#fff"
          strokeWidth={0.16695677}
        />
        <Path
          transform="rotate(-90)"
          d="M-1937.1771 1244.3075H-1935.1771V1252.3075H-1937.1771z"
          opacity={1}
          fill="#fff"
          strokeWidth={0.16695677}
        />
        <Path
          transform="rotate(-90)"
          d="M-1938.7815 1244.7681H-1936.7815V1251.7681H-1938.7815z"
          opacity={1}
          fill="#fff"
          strokeWidth={0.15617375}
        />
        <Path
          d="M1259.3007 1936.1771H1261.3007V1943.1771H1259.3007z"
          opacity={1}
          fill="#fff"
          strokeWidth={0.15617375}
        />
        <Path
          d="M1263.3007 1936.1771H1265.3007V1943.1771H1263.3007z"
          opacity={1}
          fill="#fff"
          strokeWidth={0.15617375}
        />
        <Path
          d="M1267.3007 1936.1771H1269.3007V1943.1771H1267.3007z"
          opacity={1}
          fill="#fff"
          strokeWidth={0.15617375}
        />
        <Path
          d="M1271.3007 1936.1771H1273.3007V1943.1771H1271.3007z"
          opacity={1}
          fill="#fff"
          strokeWidth={0.15617375}
        />
        <Path
          d="M1275.3007 1936.1771H1277.3007V1943.1771H1275.3007z"
          opacity={1}
          fill="#fff"
          strokeWidth={0.15617375}
        />
        <Path
          d="M1279.3007 1936.1771H1281.3007V1943.1771H1279.3007z"
          opacity={1}
          fill="#fff"
          strokeWidth={0.15617375}
        />
        <Path
          d="M1283.3007 1936.1771H1285.3007V1943.1771H1283.3007z"
          opacity={1}
          fill="#fff"
          strokeWidth={0.15617375}
        />
        <Path
          d="M1287.3007 1936.1771H1289.3007V1943.1771H1287.3007z"
          opacity={1}
          fill="#fff"
          strokeWidth={0.15617375}
        />
        <Path
          d="M1291.3007 1936.1771H1293.3007V1943.1771H1291.3007z"
          opacity={1}
          fill="#fff"
          strokeWidth={0.15617375}
        />
        <Path
          d="M1295.3007 1936.1771H1297.3007V1943.1771H1295.3007z"
          opacity={1}
          fill="#fff"
          strokeWidth={0.15617375}
        />
        <Path
          d="M1299.3007 1936.1771H1301.3007V1943.1771H1299.3007z"
          opacity={1}
          fill="#fff"
          strokeWidth={0.15617375}
        />
        <Path
          d="M1303.3007 1936.1771H1305.3007V1943.1771H1303.3007z"
          opacity={1}
          fill="#fff"
          strokeWidth={0.15617375}
        />
        <Path
          d="M1307.3007 1935.9176H1309.3007V1943.1772202H1307.3007z"
          opacity={1}
          fill="#fff"
          strokeWidth={0.15904352}
        />
        <Path
          d="M1358.46 1906.588l-12.228 12.164c-10.39 10.39-17.604 19.009-32.974 19.424v.016c.03.219.082.437.094.658.029.113.066.225.088.34.052.274.065.549.055.824.02.072.05.153.088.373.05.518.053.359.043.744v.045c16.599-.144 23.485-8.997 35.09-20.502l11.869-11.96zm-45.398 31.586c-.015.062-.03.125-.043.188-.01.042.04-.084.043-.128.01-.051.01-.052.01-.06z"
          fill="#fff"
          fillOpacity={1}
        />
        <Path
          transform="scale(1.00358 .99641) rotate(-45)"
          d="M-414.83542 2307.9961H-412.9876165V2315.529471H-414.83542z"
          opacity={1}
          fill="#fff"
          strokeWidth={0.15572797}
        />
        <Path
          transform="scale(1.00358 .99641) rotate(-45)"
          d="M-411.11929 2307.9756H-409.2714865V2315.508971H-411.11929z"
          opacity={1}
          fill="#fff"
          strokeWidth={0.15572797}
        />
        <Path
          transform="scale(1.00358 .99641) rotate(-45)"
          d="M-407.39307 2307.9653H-405.5452665V2315.498671H-407.39307z"
          opacity={1}
          fill="#fff"
          strokeWidth={0.15572797}
        />
        <Path
          transform="scale(1.00358 .99641) rotate(-45)"
          d="M-403.728 2307.9551H-401.8801965V2315.488471H-403.728z"
          opacity={1}
          fill="#fff"
          strokeWidth={0.15572797}
        />
        <Path
          transform="scale(1.00358 .99641) rotate(-45)"
          d="M-400.03238 2307.9551H-398.1845765V2315.488471H-400.03238z"
          opacity={1}
          fill="#fff"
          strokeWidth={0.15572797}
        />
        <Path
          transform="scale(1.0098 .9901) rotate(-45)"
          d="M-444.16159 2310.5793H-442.26549389999997V2318.3095565999997H-444.16159z"
          opacity={1}
          fill="#fff"
          strokeWidth={0.15979794}
        />
        <Path
          transform="scale(1.00358 .99641) rotate(-45)"
          d="M-425.9017 2307.9551H-424.0538965V2315.488471H-425.9017z"
          opacity={1}
          fill="#fff"
          strokeWidth={0.15572797}
        />
        <Path
          transform="scale(1.00358 .99641) rotate(-45)"
          d="M-422.19611 2308.0061H-420.3483065V2315.539471H-422.19611z"
          opacity={1}
          fill="#fff"
          strokeWidth={0.15572797}
        />
        <Path
          transform="scale(1.00358 .99641) rotate(-45)"
          d="M-418.53104 2307.9961H-416.6832365V2315.529471H-418.53104z"
          opacity={1}
          fill="#fff"
          strokeWidth={0.15572797}
        />
        <Path
          d="M1311.3007 1935.7157H1313.3007V1943.1195529H1311.3007z"
          opacity={1}
          fill="#fff"
          strokeWidth={0.16061568}
        />
        <Path
          transform="rotate(-3)"
          d="M1212.0173 2001.3136H1214.0173V2009.1501526H1212.0173z"
          opacity={1}
          fill="#fff"
          strokeWidth={0.16524243}
        />
        <Path
          transform="matrix(.9955 -.09475 .08016 .99678 0 0)"
          d="M1159.7817 2051.0515H1161.7830933V2059.1012398000003H1159.7817z"
          opacity={1}
          fill="#fff"
          strokeWidth={0.16753331}
        />
        <Path
          transform="scale(1.00337 .99662) rotate(-45)"
          d="M-432.93637 2306.9832H-430.9749292V2314.9798631000003H-432.93637z"
          opacity={1}
          fill="#fff"
          strokeWidth={0.16530502}
        />
        <Path
          transform="rotate(-45)"
          d="M-428.95306 2303.811H-426.95306V2312.811H-428.95306z"
          opacity={1}
          fill="#fff"
          strokeWidth={0.17708439}
        />
        <Path
          transform="rotate(-35)"
          d="M-25.497633 2342.9783H-23.497633V2351.9783H-25.497633z"
          opacity={1}
          fill="#fff"
          strokeWidth={0.17708439}
        />
        <Path
          transform="rotate(-15)"
          d="M775.38586 2210.4001H777.38586V2219.4001H775.38586z"
          opacity={1}
          fill="#fff"
          strokeWidth={0.17708439}
        />
      </G>
      <G>
        <Path
          d="M854.902 505.38a2 2 0 11-3.976.435 2 2 0 013.976-.435zm4.577-4.235a2 2 0 11-3.977.436 2 2 0 013.977-.436zm-9.63 8.629a2 2 0 11-3.976.436 2 2 0 013.976-.436zm-19.103 17.889a2 2 0 11-3.976.435 2 2 0 013.976-.435zm4.577-4.235a2 2 0 11-3.977.435 2 2 0 013.977-.435zm5.014-4.598a2 2 0 11-3.977.436 2 2 0 013.977-.436zm4.768-4.386a2 2 0 11-3.976.436 2 2 0 013.976-.436zm-19.085 17.464a2 2 0 11-3.976.436 2 2 0 013.976-.436zm-9.512 9.056a2 2 0 11-3.976.436 2 2 0 013.976-.436zm4.768-4.386a2 2 0 11-3.976.436 2 2 0 013.976-.436z"
          transform="rotate(-53.728 926.997 799.657)"
          opacity={1}
          fill="#858585"
          fillOpacity={0.45882353}
          stroke="none"
          strokeWidth={1.04900002}
          strokeMiterlimit={4}
          strokeDasharray="none"
          strokeOpacity={1}
        />
      </G>
      <G>
        <Path
          d="M824.033 476.016a2 2 0 11-3.957.582 2 2 0 013.957-.582zm-4.887 4.577a2 2 0 11-3.958.582 2 2 0 013.958-.582zm-18.431 18.58a2 2 0 11-3.958.582 2 2 0 013.958-.582zm4.417-4.4a2 2 0 11-3.958.582 2 2 0 013.958-.582zm4.841-4.78a2 2 0 11-3.957.583 2 2 0 013.957-.583zm4.604-4.558a2 2 0 11-3.958.582 2 2 0 013.958-.582zm-18.428 18.155a2 2 0 11-3.958.582 2 2 0 013.957-.582zm-18.432 18.58a2 2 0 11-3.957.582 2 2 0 013.957-.582zm4.418-4.4a2 2 0 11-3.958.582 2 2 0 013.958-.582zm4.841-4.78a2 2 0 11-3.957.583 2 2 0 013.957-.583zm4.604-4.558a2 2 0 11-3.958.582 2 2 0 013.958-.582zM773.133 526.8a2 2 0 11-3.958.582 2 2 0 013.958-.582zm-4.569 4.842a2 2 0 11-3.958.582 2 2 0 013.958-.582z"
          transform="matrix(-1 0 0 1 2372.433 1025.554)"
          opacity={1}
          fill="#858585"
          fillOpacity={0.45882353}
          stroke="none"
          strokeWidth={1.04900002}
          strokeMiterlimit={4}
          strokeDasharray="none"
          strokeOpacity={1}
        />
      </G>
       </Svg>
       </View>
       </View>
       </TouchableWithoutFeedback>
  
    }
}

export default Map;

