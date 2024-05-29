import { StyleSheet, Text, View, ScrollView, Pressable } from 'react-native';
import React from 'react';
import { useRoute } from '@react-navigation/native';
import { StatusBar } from 'expo-status-bar';


const Materiales = () => {
    const route = useRoute(); 
    const resistenciaMensaje = route.params?.resistenciaMensaje || 0;
    const resistencia = route.params?.resistencia || 0;
    const volumen = route.params?.volumen || 0;

    // const totalMateriales = (volumen * proporciones ) ;

  // Definimos las proporciones para cada resistencia
  const proporciones = {
    100: { cemento: 4.50, arena: 31.50, grava: 37.13, agua: 11.25 },
    150: { cemento: 5.50, arena: 30.25, grava: 38.50, agua: 11 },
    200: { cemento: 6.75,arena: 28.69, grava: 40.50, agua: 11.81 },
    250: { cemento: 7.75, arena: 27.13, grava: 40.69, agua: 11.63 },
    300: { cemento: 8.50, arena: 23.38, grava: 38.25, agua: 10.63 },
  };

  const proporcionesSeleccionadas = proporciones[resistencia] || { cemento: 0 ,arena: 0, grava: 0, agua: 0 };

  const arena = (totalMateriales * proporcionesSeleccionadas.arena).toFixed(3);
  const grava = (totalMateriales * proporcionesSeleccionadas.grava).toFixed(3);
  const agua = (totalMateriales * proporcionesSeleccionadas.agua).toFixed(3);
  const cemento = (totalMateriales * proporcionesSeleccionadas.cemento).toFixed(3); // El cemento siempre es igual al total de materiales

  const totalMateriales = {
    cemento: (volumen * proporcionesSeleccionadas.cemento).toFixed(2),
    arena: (volumen * proporcionesSeleccionadas.arena).toFixed(2),
    grava: (volumen * proporcionesSeleccionadas.grava).toFixed(2),
    agua: (volumen * proporcionesSeleccionadas.agua).toFixed(2),
  };

  return (
    <ScrollView style={styles.scrollContainer}>
        <Text style={styles.title}>Dosificación de concreto</Text>
        <Text style={styles.subtitle}>Uso sugerido: { resistenciaMensaje } </Text>
        <Text style={styles.subtitle}>Volumen: { volumen } </Text>
        <Text style={styles.subtitle}>Resistencia seleccionada: { resistencia } </Text>
        <View style={styles.dosisContainer}>
          <Text style={styles.dosisTitle}>Dosificación en obra</Text>
          {/* <Text style={styles.dosisSubtitle}>Unidad en botes y bultos</Text> */}
        </View>
          <View style={styles.buttonRow}>
            {/*Se da un hover al pressable*/}
            <Pressable style={({ pressed }) => [
              styles.button,
              { backgroundColor: pressed ? '#99C1EA' : '#ACC8E5' },
            ]}>
              <Text style={styles.buttonText}>Cemento(Bultos)</Text>
              <Text style={styles.buttonValue}>{totalMateriales.cemento}</Text>
            </Pressable>
            <Pressable style={({ pressed }) => [
              styles.button,
              { backgroundColor: pressed ? '#99C1EA' : '#ACC8E5' },
            ]}>
              <Text style={styles.buttonText}>Grava(Botes)</Text>
              <Text style={styles.buttonValue}>{ totalMateriales.grava}</Text>
            </Pressable>
          </View>

          <View style={styles.buttonRow}>
            <Pressable style={({ pressed }) => [
              styles.button,
              { backgroundColor: pressed ? '#99C1EA' : '#ACC8E5' },
            ]}>
              <Text style={styles.buttonText}>Arena(Botes)</Text>
              <Text style={styles.buttonValue}>{totalMateriales.arena}</Text>
            </Pressable>
            <Pressable style={({ pressed }) => [
              styles.button,
              { backgroundColor: pressed ? '#99C1EA' : '#ACC8E5' },
            ]}>
              <Text style={styles.buttonText}>Agua(Botes)</Text>
              <Text style={styles.buttonValue}>{totalMateriales.agua}</Text>
            </Pressable>
          </View>
          <StatusBar style="auto" />
    </ScrollView>
  );
}

export default Materiales;

const styles = StyleSheet.create({
  scrollContainer: {
    flex: 1,
    backgroundColor: '#F3F4F6',
    alignContent: 'center'
  },
  container: {
    padding: 20,
  },
  title: {
    fontSize: 25,
    fontWeight: '700',
    marginVertical: 25,
    textAlign: 'center',
  },
  subtitle: {
    fontSize: 20,
    textAlign: 'center',
    marginBottom: 20,
    fontWeight: '400'
  },
  materialContainer: {
    marginVertical: 20,
  },
  materialTitle: {
    fontSize: 20,
    fontWeight: '700',
    marginBottom: 10,
  },
  material: {
    fontSize: 16,
    marginVertical: 5,
  },
  usageContainer: {
    marginVertical: 20,
  },
  usageTitle: {
    fontSize: 20,
    fontWeight: '700',
    marginBottom: 10,
  },
  usageText: {
    fontSize: 16,
    marginVertical: 5,
  },
  dosisTitle: {
    fontSize: 22,
    fontWeight: 'bold',
    marginBottom: 15,
    // marginHorizontal: 100,
    marginTop: 40
  },
  dosisSubtitle: {
    fontSize: 20,
    fontWeight: '400', // Gris más claro
    marginBottom: 20,
    marginHorizontal: 100
  },
  dosisContainer:{
    alignItems: 'center',
    textAlign: 'center'
  },
  buttonRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 15,
  },
  button: {
    flex: 1,
    backgroundColor: '#ACC8E5', // Color azul claro
    padding: 10,
    borderRadius: 8,
    alignItems: 'center',
    marginHorizontal: 5,
  },
  buttonText: {
    fontSize: 16,
    fontWeight: 'bold',
    color: 'white',
  },
  buttonValue: {
    fontSize: 20,
    fontWeight: 'bold',
    color: 'white',
    marginTop: 5,
  },
});
