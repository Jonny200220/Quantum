import { Pressable, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { Image } from 'expo-image'
import { Link } from 'expo-router'

const index = () => {
  return (
    <View style={styles.container}>
      <View style={styles.subcontainer}>
        <Image                             
        style = {styles.logo}
        source={require('../assets/images/logo-quatum-1.png')}/>
        <Text style={styles.title}>Quantum</Text>

        <Link href="/Dosificacion">
            Dosificadora
        </Link>

        <Link href="/Pruebas">
            Pruebas
        </Link>

        <Link href="/PruebasMateriales">
            Pruebas de pantalla materiales
        </Link>
      </View>
    </View>
  )
}

export default index

const styles = StyleSheet.create({
  container:{
    flex: 1,
    alignItems: 'center',
    backgroundColor: '#f3f4f6',
  },
  title:{
    textAlign: 'center',
    fontSize: 60,
    fontWeight: '700',
    marginTop: 20
  },
  logo:{
    alignItems: 'center',
    width:280, // Ancho
    height:300, // Alto
  },
  subcontainer:{
    alignItems: 'center',
    marginVertical: 100,
  },
})
