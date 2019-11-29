import React, { Component } from 'react'
import { 
   StyleSheet,
   Text,
   View,
   TextInput,
   UselessTextInput,
   TouchableOpacity,
   
  } from 'react-native'


export default class Logo extends Component {
  render() {
    return (
      <View>
       <TextInput style={styles.caixaInput} /*underlineColorAndroid='#b53d00'*/
       placeholder= 'Email' placeholderTextColor='#ffffff'   />
       <TextInput style={styles.caixaInput} /*underlineColorAndroid='#b53d00'*/
       placeholder= 'Senha' placeholderTextColor='#ffffff'   />
       <TouchableOpacity>
         <Text style={styles.buttonlogin}>
           Login
         </Text>
       </TouchableOpacity>
      </View>
    )
  }
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    
},
  caixaInput: {
    width: 300,
    height: 50,
    backgroundColor: '#ffad42',
    borderRadius: 25,
    paddingHorizontal: 20,
    fontSize: 16,
    marginVertical: 8,
    justifyContent: 'center'
    

  },
  buttonlogin: {
    
    color: '#fff',
    textAlign: 'center',
    fontSize: 20,
    width: 300,
    height: 50,
    backgroundColor: '#b53d00',
    borderRadius: 25,
    textAlignVertical: 'center',
    marginVertical: 8,
    justifyContent: 'center'
    
    
  }
})


