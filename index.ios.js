/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View
} from 'react-native';

class Stopwatch extends  React.Component {
    render(){
        return(<View style={styles.container}><Text style={styles.text}>Hello World</Text></View>)
    }
}
let styles = StyleSheet.create({

    container:{
        flex:1,
        justifyContent:'center',
        alignItems:'center',
        backgroundColor:'#29ABA4',
    },
    text:{
        fontSize:20,
        color:'white'
    }
});


AppRegistry.registerComponent('stopwatch', ()=>Stopwatch);
