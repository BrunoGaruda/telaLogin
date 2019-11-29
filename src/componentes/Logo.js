import React, { Component } from 'react'
import { 
   StyleSheet,
   Text,
   View,
   Image, 
  } from 'react-native'



export default class Logo extends Component {
  render() {
    return (
      <View>
        <Image
          style={{width: 170, height: 137}}
          source={require('../imagens/camarões.png')}
        />
        <Text style={styles.textoEstabelecimento}>
          Camarões      
        </Text>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    justifyContent: 'center',
    alignItems: 'center'
    
},
  textoEstabelecimento: {
    
    fontSize: 30,
    color: '#b53d00',
    textAlign: 'center',
    marginVertical: 12,
    
    
},
  
})

