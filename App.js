import React from 'react'
import {StyleSheet, View, Text} from 'react-native'

export default function App() {
  return(
    <View style={styles.container}>
          <Text style={styles.text}>Texto en caja texto</Text>
    </View>

  )
}

const styles=StyleSheet.create({
  container:{
    flex: 1,
    backgroundColor: 'white',
    alignItems:'center',
    justifyContent:'center',
  },
  text:{
    color: 'rgb(59,108,212)',
    fontSize: 42,
    fontWeight: '100',
    textAlign: 'center',
  },

})