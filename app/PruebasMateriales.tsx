import React from 'react';
import { ScrollView, StyleSheet, Text, View } from 'react-native';

const PruebasMateriales = () => {
  return (

    <ScrollView style={styles.container}>
      <Text style={styles.title}>Dosificación de concreto</Text>
      <Text style={styles.subtitle}>Uso sugerido: Piso, Firmes y Banquetas</Text>

      <View style={styles.section}>
        <Text style={styles.sectionTitle}>Dosificación para obra</Text>
        <Text style={styles.sectionSubtitle}>Unidad en botes</Text>
      </View>

      <View style={styles.row}>
        <View style={[styles.item, styles.itemWithFlex]}> {/* Aplicar flex */}
          <Text style={styles.itemLabel}>Cemento</Text>
          <Text style={styles.itemValue}>16.842</Text>
        </View>
        <View style={[styles.item, styles.itemWithFlex]}> {/* Aplicar flex */}
          <Text style={styles.itemLabel}>Grava</Text>
          <Text style={styles.itemValue}>122.104</Text>
        </View>
      </View>

      <View style={styles.row}>
      <View style={styles.row}>
  <View style={[styles.item, styles.itemWithFlex]}>
    <Text style={styles.itemLabel}>Cemento</Text> 
    <Text style={styles.itemValue}>16.842</Text>
  </View>
  {/* ... (otros elementos similares) ... */}
</View>

        <View style={[styles.item, styles.itemWithFlex]}> {/* Aplicar flex */}
          <Text style={styles.itemLabel}>Agua</Text>
          <Text style={styles.itemValue}>42.105</Text>
        </View>
      </View>

    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: '#f0f0f0', // Color de fondo similar a la imagen
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    textAlign: 'center',
    marginBottom: 10,
  },
  subtitle: {
    fontSize: 16,
    textAlign: 'center',
    marginBottom: 20,
  },
  section: {
    alignItems: 'center',
    marginBottom: 10,
  },
  sectionTitle: {
    fontSize: 18,
    fontWeight: 'bold',
  },
  sectionSubtitle: {
    fontSize: 14,
  },
  row: {
    flexDirection: 'row',
    justifyContent: 'space-between', // Distribuir el espacio entre los elementos
    marginBottom: 10,
  },
  itemWithFlex: { // Nuevo estilo para aplicar flex
    flex: 1, // Ocupará la mitad del espacio disponible en la fila
    marginHorizontal: 5, // Margen horizontal para separar los items
  },
  item: {
    backgroundColor: '#fff', // Fondo blanco para los items
    padding: 15,
    borderRadius: 5,
    borderWidth: 1, 
    borderColor: '#ddd', // Borde sutil
    alignItems: 'center',
  },
  itemLabel: {
    fontSize: 16,
    fontWeight: 'bold',
  },
  itemValue: {
    fontSize: 16,
  },
});

export default PruebasMateriales;
