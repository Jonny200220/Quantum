import { StyleSheet, Text, View, ScrollView, Pressable } from 'react-native';
import React from 'react';
import { useRoute } from '@react-navigation/native';

const Materiales = () => {
    const route = useRoute(); 
    const resistenciaMensaje = route.params?.resistenciaMensaje || 0;
    const resistencia = route.params?.resistencia || 0;
    const volumen = route.params?.volumen || 0;

    const totalMateriales = (volumen * 1) / 0.342;

  // Definimos las proporciones para cada resistencia
  const proporciones = {
    100: { cemento: 1, arena: 6.25, grava: 7.25, agua: 2.50 },
    150: { cemento: 1, arena: 5.50, grava: 6.75, agua: 2.25 },
    200: { cemento: 1, arena: 4.25, grava: 5.25, agua: 1.75 },
    250: { cemento: 1, arena: 3.50, grava: 4.50, agua: 1.25 },
    // 300: { cemento: 1, arena: 6.25, grava: 7.25, agua: 2.50 },
    // Agrega aquí las proporciones para otras resistencias si es necesario
  };

  const proporcionesSeleccionadas = proporciones[resistencia] || { arena: 0, grava: 0, agua: 0 };

  const arena = (totalMateriales * proporcionesSeleccionadas.arena).toFixed(3);
  const grava = (totalMateriales * proporcionesSeleccionadas.grava).toFixed(3);
  const agua = (totalMateriales * proporcionesSeleccionadas.agua).toFixed(3);
  const cemento = totalMateriales.toFixed(3); // El cemento siempre es igual al total de materiales



  return (
    <ScrollView style={styles.scrollContainer}>
        <Text style={styles.title}>Dosificación de concreto</Text>
        <Text style={styles.subtitle}>Uso sugerido: { resistenciaMensaje } </Text>
        {/* <Text style={styles.subtitle}>Volumen: { volumen } </Text> */}
        {/* <Text style={styles.subtitle}>Resistencia seleccionada: { resistencia } </Text> */}
        <View style={styles.dosisContainer}>
          <Text style={styles.dosisTitle}>Dosificación para obra</Text>
          <Text style={styles.dosisSubtitle}>Unidad en botes</Text>
        </View>
          <View style={styles.buttonRow}>
            {/*Se da un hover al pressable*/}
            <Pressable style={({ pressed }) => [
              styles.button,
              { backgroundColor: pressed ? '#99C1EA' : '#ACC8E5' },
            ]}>
              <Text style={styles.buttonText}>Cemento</Text>
              <Text style={styles.buttonValue}>{cemento}</Text>
            </Pressable>
            <Pressable style={({ pressed }) => [
              styles.button,
              { backgroundColor: pressed ? '#99C1EA' : '#ACC8E5' },
            ]}>
              <Text style={styles.buttonText}>Grava</Text>
              <Text style={styles.buttonValue}>{grava}</Text>
            </Pressable>
          </View>

          <View style={styles.buttonRow}>
            <Pressable style={({ pressed }) => [
              styles.button,
              { backgroundColor: pressed ? '#99C1EA' : '#ACC8E5' },
            ]}>
              <Text style={styles.buttonText}>Arena</Text>
              <Text style={styles.buttonValue}>{arena}</Text>
            </Pressable>
            <Pressable style={({ pressed }) => [
              styles.button,
              { backgroundColor: pressed ? '#99C1EA' : '#ACC8E5' },
            ]}>
              <Text style={styles.buttonText}>Agua</Text>
              <Text style={styles.buttonValue}>{agua}</Text>
            </Pressable>
          </View>

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
    marginBottom: 5,
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
