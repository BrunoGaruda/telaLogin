import React, { Component } from 'react'
import {
  AppRegistry,
  Platform,
  StyleSheet,
  Text,
  View,
  StatusBar,

} from 'react-native';
import Login from './paginas/Login'


export default class app extends Component {
  render() {
    return (
      <View style={styles.container}>
        <Login/>
        <StatusBar backgroundColor="#b53d00" barStyle="light-content" />
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#f57c00',
    flex: 1,
    alignItems: 'center',

  },
  texto1: {
    fontSize: 30,
    textAlign: 'center',
    justifyContent: 'center',
    margin: 80,
    color: '#ffffff'

  }

})