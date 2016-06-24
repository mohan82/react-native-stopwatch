import React, {
    PropTypes,
    Component
} from 'react';

import {StyleSheet,View,Text} from 'react-native'


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


export  default class StopWatchApplication extends  Component {

    render() {
            return (<View style={styles.container}><Text style={styles.text}>Hello World</Text></View>);
        }

}


export default StopWatchApplication;
