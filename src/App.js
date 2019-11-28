import React, { Component } from 'react'
import {
  AppRegistry,
  Platform,
  StyleSheet,
  Text,
  View,
} from 'react-native';


export default class app extends Component {
  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.texto1}>Estabelecimento</Text>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#ff5722',
    flex: 1,
    alignItems: 'center',

  },
  texto1: {
    fontSize: 25,
    textAlign: 'center',
    justifyContent: 'center',
    margin: 80,
    color: '#ffffff'

  }

})