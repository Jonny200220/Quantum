import { StyleSheet, Text, View, TextInput, Alert, ScrollView, Pressable } from 'react-native';
import React, { useState } from 'react';
import { Picker } from '@react-native-picker/picker';
import { useNavigation } from '@react-navigation/native'; 
import { StatusBar } from 'expo-status-bar';
import { Image } from 'expo-image'

const Dosificadora = () => {
    const [largo, setLargo] = useState('');
    const [ancho, setAncho] = useState('');
    const [espesor, setEspesor] = useState('');
    const [volumen, setVolumen] = useState(0);
    const [resistencia, setResistencia] = useState('');
    const [resistenciaMensaje, setResistenciaMensaje] = useState('');

    const navigation = useNavigation();

    const handleCalculateVolume = () => {
        const largoValue = parseFloat(largo) || 0;
        const anchoValue = parseFloat(ancho) || 0;
        const espesorValue = parseFloat(espesor) || 0;

        if (largoValue > 0 && anchoValue > 0 && espesorValue > 0) {
            let calculatedVolume = largoValue * anchoValue * espesorValue;
            calculatedVolume = parseFloat(calculatedVolume.toFixed(3)); // Limiting to 3 decimal places

            // Check if the integer part exceeds 3 digits
            if (calculatedVolume >= 1000) {
                calculatedVolume = parseFloat(calculatedVolume.toPrecision(6)); // limiting to 3 integers and 3 decimals
            }

            setVolumen(calculatedVolume);

            navigation.navigate('Materiales', { volumen: calculatedVolume, resistencia: resistencia, resistenciaMensaje: resistenciaMensaje });
        } else {
            Alert.alert('Error', 'Valores de entrada inválidos.', [
                { text: 'OK', onPress: () => console.log('Alert dismissed') },
            ]);
        }
    };

    const handleResistenciaChange = (value) => {
        setResistencia(value);
        let mensaje = '';
        switch (value) {
            case '0':
                mensaje = "Seleccionar Resistencia";
                break;
            case '100':
                mensaje = "Pisos, firmes y banquetas";
                break;
            case '150':
                mensaje = "Dalas, castillos y cadenas";
                break;
            case '200':
                mensaje = "Zapatas, losas y trabes";
                break;
            case '250':
                mensaje = "Columnas y losas especiales";
                break;
            case '300':
                mensaje = "Preesforzados";
                break;
            default:
                mensaje = '';
        }
        setResistenciaMensaje(mensaje);
    };

    return (
        <ScrollView style={styles.scrollContainer}>
            
            <View>
                <View style={styles.titlesContainer}>
                    <Text style={styles.title}>Dosificación de concreto</Text>
                    <Image                             
        style = {styles.logo}
        source={require('../assets/images/logo-quatum-2.png')}/>
                    <Text style={styles.subTitle}>Ingresar Cantidad</Text>
                </View>
                <View style={styles.campos}>
                    <Text style={styles.inputLabel}>Largo: </Text>
                    <TextInput
                        style={styles.input}
                        placeholder="Ingresa Aquí"
                        placeholderTextColor="#666"
                        keyboardType="numeric"
                        value={largo}
                        onChangeText={text => setLargo(text)}
                        textAlign="center"
                    />
                </View>

                <View style={styles.campos}>
                    <Text style={styles.inputLabel}>Ancho: </Text>
                    <TextInput
                        style={styles.input}
                        placeholder="Ingresa Aquí"
                        placeholderTextColor="#666"
                        keyboardType="numeric"
                        value={ancho}
                        onChangeText={text => setAncho(text)}
                        textAlign="center"
                    />
                </View>

                <View style={styles.campos}>
                    <Text style={styles.inputLabel}>Espesor: </Text>
                    <TextInput
                        style={styles.input}
                        placeholder="Ingresa Aquí"
                        placeholderTextColor="#666"
                        keyboardType="numeric"
                        value={espesor}
                        onChangeText={text => setEspesor(text)}
                        textAlign="center"/>
                </View>
                <View style={styles.resultContainer}>  
                    <View style={styles.resultRow}>
                      <Text style={styles.resultLabel}>Cantidad:</Text>
                      <Text style={styles.resultValue}>{volumen} m³</Text>
                    </View>
                    <View style={styles.resultRow}>
                      <Text style={styles.resultLabel}>Resistencia:</Text>
                      <Text style={styles.resultValue}>{resistencia}</Text>
                    </View>
                    <View style={styles.resultRow}>
                      <Text style={styles.resultLabel}>Uso Sugerido:</Text>
                      <Text style={styles.resultValue}>{resistenciaMensaje}</Text>
                    </View>
                </View>

                <Picker 
                    style={styles.picker}
                    itemStyle={styles.pickerItem}
                    selectedValue={resistencia} 
                    onValueChange={(itemValue, itemIndex) => handleResistenciaChange(itemValue)}>
                    <Picker.Item label="0" value="0" />
                    <Picker.Item label="100" value="100" />
                    <Picker.Item label="150" value='150' />
                    <Picker.Item label="200" value='200' />
                    <Picker.Item label="250" value='250' />
                    <Picker.Item label="300" value='300' />
                </Picker>

                <Pressable style={({ pressed }) => [
              styles.btnCalcular,
              { backgroundColor: pressed ? '#99C1EA' : '#ACC8E5' },
            ]} onPress={handleCalculateVolume}>
                    <Text style={styles.txtBtnCalcular}>Calcular</Text>
                </Pressable>
            </View>
            <StatusBar style="auto" />
        </ScrollView>
    );
}
export default Dosificadora;

const styles = StyleSheet.create({
    scrollContainer: {
        flex: 1,
        backgroundColor: '#f3f4f6',
    },
    logo:{
        // alignItems: 'center',
        width:180, // Ancho
        height:200, // Alto
      },
    titlesContainer: {
        alignItems: 'center',
    },
    title: {
        fontSize: 25,
        fontWeight: '700',
        marginVertical: 25,
    },
    subTitle: {
        fontSize: 20,
        fontWeight: '700',
    },
    campos: {
        flexDirection: 'row',
        alignItems: 'center',
        marginHorizontal: 100,
        marginTop: 20,
    },
    inputLabel: {
        marginRight: 5,
        fontSize: 18,
        fontWeight: 'bold',
    },
    input: {
        flex: 1,
        borderBottomWidth: 1,
        borderColor: 'black',
        padding: 20,
        textAlign: 'center',
    },
    content: {
        padding: 20,
        marginTop: 40,
    },
    btnCalcular: {
        alignItems: 'center',
        padding: 10,
        borderRadius: 10,
        backgroundColor: '#ACC8E5',
        marginHorizontal: 20,
        marginVertical: 80
    },
    btnMateriales: {
        alignItems: 'center',
        padding: 10,
        borderRadius: 10,
        backgroundColor: '#4CAF50',
        marginHorizontal: 20,
        marginTop: 20,
    },
    resultContainer: {
        marginTop: 20,
        padding: 10,
        borderColor: '#ddd',
        borderRadius: 5,
    },
    resultRow: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        marginBottom: 10,
    },
    resultLabel: {
        fontSize: 18,
        fontWeight: 'bold',
        marginBottom: 10
    },
    resultValue: {
        fontSize: 18,
        marginBottom: 10
    },
    txtBtnCalcular: {
        fontSize: 24,
        fontWeight: '600',
    },
    txtBtnMateriales: {
        fontSize: 24,
        fontWeight: '600',
    },
    picker: {
        marginHorizontal: 100,
    },
    pickerItem: {
        fontSize: 22, // Ajusta este tamaño según tus necesidades
        height: 60,   // Puedes ajustar esta altura si es necesario
    }
});
