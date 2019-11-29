import React, { Component } from 'react'
import {
  AppRegistry,
  Platform,
  StyleSheet,
  Text,
  View,
  StatusBar,

} from 'react-native';

import Logo from '../componentes/Logo'
import Formulário from '../componentes/Formulário'


export default class Login extends Component {
  render() {
    return (
      <View style={styles.container}>
        <Logo/>
        <Formulário />
        <View>
          <Text style={styles.texto1} >
            Caso não tenha conta, ou esqueceu a senha, clique   
            <Text style={styles.texto2}
            > aqui</Text>
          </Text>
        </View>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#f57c00',
    flex: 1,
    alignItems: 'center',
    justifyContent: 'flex-end',
    

  },
  texto1: {
    fontSize: 16,
    textAlign: 'center',
    justifyContent: 'flex-end',
    marginVertical: 15,
    color: '#ffffff',
    paddingVertical: 40

  },
  texto2: {
    fontSize: 16,
    textAlign: 'center',
    justifyContent: 'flex-end',
    marginVertical: 20,
    color: '#b52d15',
    fontWeight: 'bold',
    paddingVertical: 40

  }

})