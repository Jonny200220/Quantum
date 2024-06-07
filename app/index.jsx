// Importaciones necesarias para el proyecto
import { StyleSheet, Text, View, TextInput, Alert, ScrollView, Pressable } from 'react-native';
import React, { useState } from 'react';
// import { Picker } from '@react-native-picker/picker';
import RNPickerSelect from 'react-native-picker-select';
import { useNavigation } from '@react-navigation/native'; // Importacion necesarias para lanavegacion del proyecto
import { StatusBar } from 'expo-status-bar';
import { Image } from 'expo-image'
import { Link } from 'expo-router'; // Importaciones necesarias para el routing del proyecto

// funcion de dosificadora (Lo que se "muestra en la pantalla")
const Dosificadora = () => {
    // Controladores del estado de los formularios, resistencia, mensajes de resistencia, volumen y navegacion
    const [largo, setLargo] = useState('');
    const [ancho, setAncho] = useState('');
    const [espesor, setEspesor] = useState('');
    const [volumen, setVolumen] = useState(0);
    const [resistencia, setResistencia] = useState('');
    const [resistenciaMensaje, setResistenciaMensaje] = useState('');
    const navigation = useNavigation();

    // Funcion que controla el calculo del volumen de los input
    const handleCalculateVolume = () => {
        const largoValue = parseFloat(largo) || 0;
        const anchoValue = parseFloat(ancho) || 0;
        const espesorValue = parseFloat(espesor) || 0;

        if (largoValue > 0 && anchoValue > 0 && espesorValue > 0) {
            let calculatedVolume = largoValue * anchoValue * espesorValue;
            calculatedVolume = parseFloat(calculatedVolume.toFixed(3)); // limite 3 decimales

            // Verifica que si el int excede 3 digitos
            if (calculatedVolume >= 1000) {
                calculatedVolume = parseFloat(calculatedVolume.toPrecision(6)); // limiting to 3 integers and 3 decimals
            }

            setVolumen(calculatedVolume);

            // Navergacion y envio de props de index de dosificcion a Materiales
            navigation.navigate('Materiales', { volumen: calculatedVolume, resistencia: resistencia, resistenciaMensaje: resistenciaMensaje });
            // Verificacion de los input y mensaje de error
        } else {
            Alert.alert('Error', 'Valores de entrada inválidos.', [
                { text: 'OK', onPress: () => console.log('Alert dismissed') },
            ]);
        }
    };
    // Funcionabilidad del picker (Resistrencia, resistenciaMensaje)
    const handleResistenciaChange = (value) => {
        setResistencia(value);
        let mensaje = '';
        switch (value) {
            // case '0':
            //     mensaje = "Seleccionar Resistencia";
            //     break;
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
// A partir de aqui todo es frontend, y estilos que se le dan a la pantalla del celular
    return (
        <ScrollView style={styles.scrollContainer}>
            
            <View>
                <View style={styles.titlesContainer}>
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
                    <Text style={styles.inputLabelE}>Espesor: </Text>
                    <TextInput
                        style={styles.input}
                        placeholder="Ingresa Aquí"
                        placeholderTextColor="#666"
                        keyboardType="numeric"
                        value={espesor}
                        onChangeText={text => setEspesor(text)}
                        textAlign="center"
                        />
                </View>
                <View style={styles.resultContainer}>  
                    <View style={styles.resultRow}>
                      <Text style={styles.resultLabel}>Volumen:</Text>
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
                
                {/* Picker o selector nativo para la resistencia */}
                <Text style={{fontSize: 20, marginTop: 10, textAlign :'center', marginBottom: 12, fontWeight: '500'}} >Selecciona una Resistencia (f')</Text>
                <RNPickerSelect
                    onValueChange={handleResistenciaChange}
                    items={[
                        // { label: '0', value: '0' },
                        { label: '100', value: '100' },
                        { label: '150', value: '150' },
                        { label: '200', value: '200' },
                        { label: '250', value: '250' },
                        { label: '300', value: '300' },
                    ]}
                    style={{
                        inputIOS: {
                            ...styles.pickerIos, // aplicamos el estilo del picker
                        },
                        inputAndroid: {
                            ...styles.pickerAnd, // aplicamos el estilo del picker
                        },
                        placeholder: {
                            color: '#666',
                        },
                    }}
                    value={resistencia}
                    useNativeAndroidPickerStyle={false} // para aplicar los estilos personalizados en Android
                />

                {/* Boton para calcular el volumen */}
                <Pressable style={({ pressed }) => [
              styles.btnCalcular,
              { backgroundColor: pressed ? '#ACE506' : '#E55406' },
            ]} onPress={handleCalculateVolume}>
                    <Text style={styles.txtBtnCalcular}>Calcular</Text>
                </Pressable>
            </View>
            <StatusBar style="auto" />
            {/* Modal que se abre al momento de presionar el boton flotante */}
            <Pressable style={styles.floatingButton}>
            <Link href="/Modal" >
                <Text style={styles.floatingButtonText}>?</Text>
            </Link>
            </Pressable>

        </ScrollView>
    );
}
export default Dosificadora;

// A partir de aqui inician todos los estilos que se le dan a la pantalla, estos se escriben como si fueran un objeto en json
const styles = StyleSheet.create({
    scrollContainer: {
        flex: 1,
        backgroundColor: '#f3f4f6',
    },
    logo:{
        // alignItems: 'center',
        width:180, // Ancho
        height:200, // Alto
        marginTop: 25,
      },
    titlesContainer: {
        alignItems: 'center',
        textAlign: 'center'
    },
    subTitle: {
        fontSize: 26,
        fontWeight: '700',
        marginVertical: 10,
    },
    campos: {
        flexDirection: 'row',
        alignItems: 'center',
        marginHorizontal: 100,
        marginTop: 24,
    },
    inputLabel: {
        marginRight: 10,
        fontSize: 16,
        fontWeight: 'bold',
        marginTop: 20,
    },
    inputLabelE:{
      marginRight: 5,
        fontSize: 14,
        fontWeight: 'bold',
        marginTop: 20,
    },
    input: {
        flex: 1,
        borderBottomWidth: 1,
        borderColor: 'black',
        padding: 10,
        textAlign: 'center',
        fontSize: 13
    },
    content: {
        padding: 20,
        marginTop: 40,
    },
    btnCalcular: {
        alignItems: 'center',
        padding: 10,
        borderRadius: 10,
        backgroundColor: '#5E4581',
        marginHorizontal: 20,
        marginVertical: 80
    },
    btnMateriales: {
        alignItems: 'center',
        padding: 10,
        borderRadius: 10,
        backgroundColor: '#5E4581',
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
        color: '#fff',
    },
    txtBtnMateriales: {
        fontSize: 24,
        fontWeight: '600',
    },
    pickerAnd: {
        marginHorizontal: 100,
        alignItems: 'center',
        backgroundColor: '#fff',
        borderRadius: 5,
        padding: 10,
        textAlign: 'center'
    },
    pickerIos:{
        marginHorizontal: 100,
        alignItems: 'center',
        backgroundColor: '#fff',
        borderRadius: 5,
        padding: 10,
        fontSize: 22, // tamaño Picker
        height: 60,
        textAlign: 'center',
    },
    floatingButton: {
      position: 'absolute',
      top: 15,
      right: 15,
      backgroundColor: '#E55406',
      borderRadius: 100,
      width: 30,
      height: 30,
      alignItems: 'center',
      zIndex: 1000,
  },
  floatingButtonText: {
      color: 'white',
      fontSize: 24,
      fontWeight: 'bold',
      borderRadius: 100,
  },
});
