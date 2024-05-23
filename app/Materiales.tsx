import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { ScrollView } from 'react-native'
// import { ScrollView } from 'react-native-gesture-handler'

const Materiales = () => {
  return (
    <ScrollView style={{flex: 1, backgroundColor: '#F3F4F6'}} >
        <Text style={styles.title}>Dosificación de concreto</Text>
      <Text style={styles.subtitle}>Uso sugerido: Piso, Firmes y Banquetas</Text>
    </ScrollView>
  )
}

export default Materiales

const styles = StyleSheet.create({
  title: {
    fontSize: 25,
    fontWeight: '700',
    marginVertical: 25,
    textAlign: 'center'
},
  subtitle: {
    fontSize: 16,
    textAlign: 'center',
    marginBottom: 20,
  },
})