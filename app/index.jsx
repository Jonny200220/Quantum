import { StyleSheet, Text, View, TextInput, Alert, ScrollView, Pressable, Platform } from 'react-native';
import { useState } from 'react';
import { useNavigation } from '@react-navigation/native'; 
import { StatusBar } from 'expo-status-bar';
import { Image } from 'expo-image'
import { Link } from 'expo-router';
import { Picker } from '@react-native-picker/picker'; 

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
            calculatedVolume = parseFloat(calculatedVolume.toFixed(3));

            if (calculatedVolume >= 1000) {
                calculatedVolume = parseFloat(calculatedVolume.toPrecision(6)); 
            }

            setVolumen(calculatedVolume);
            navigation.navigate('Materiales', { volumen: calculatedVolume, resistencia: resistencia, resistenciaMensaje: resistenciaMensaje });
        } else {
            Alert.alert('Error', 'Valores de entrada inválidos.');
        }
    };

    const handleResistenciaChange = (value) => {
        setResistencia(value);
        let mensaje = '';
        switch (value) {
            case '100':
                mensaje = "Plantillas";
                break;
            case '150':
                mensaje = "Pisos y Banquetas";
                break;
            case '200':
                mensaje = "Dalas, Castillos y Cadenas";
                break;
            case '250':
                mensaje = "Zapatas, Losas y trabes";
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
            <View style={styles.container}>
                <View style={styles.titlesContainer}>
                    <Image style={styles.logo} source={require('../assets/images/logo-quatum-2.png')} />
                    <Text style={styles.subTitle}>QUANTUM</Text>
                </View>

                <View style={styles.campos}>
                    <Text style={styles.inputLabel}>Largo (metros): </Text>
                    <View style={styles.inputContainer}>
                        <TextInput
                            style={styles.input}    
                            placeholder="Ingresa Aquí"
                            placeholderTextColor="#999"
                            keyboardType="numeric"
                            value={largo}
                            onChangeText={text => setLargo(text)}
                        />
                        <Text style={styles.unitLabel}>m</Text>
                    </View>
                </View>

                <View style={styles.campos}>
                    <Text style={styles.inputLabel}>Ancho: </Text>
                    <View style={styles.inputContainer}>
                        <TextInput
                            style={styles.input}
                            placeholder="Ingresa Aquí"
                            placeholderTextColor="#999"
                            keyboardType="numeric"
                            value={ancho}
                            onChangeText={text => setAncho(text)}
                        />
                        <Text style={styles.unitLabel}>m</Text>
                    </View>
                </View>

                <View style={styles.campos}>
                    <Text style={styles.inputLabel}>Espesor: </Text>
                    <View style={styles.inputContainer}>
                        <TextInput
                            style={styles.input}
                            placeholder="Ingresa Aquí"
                            placeholderTextColor="#999"
                            keyboardType="numeric"
                            value={espesor}
                            onChangeText={text => setEspesor(text)}
                        />
                        <Text style={styles.unitLabel}>m</Text>
                    </View>
                </View>

                <View style={styles.resultContainer}>
                    <View style={styles.resultRow}>
                        <Text style={styles.resultLabel}>Volumen:</Text>
                        <Text style={styles.resultValue}>{volumen} m³</Text>
                    </View>
                    <View style={styles.resultRow}>
                        <Text style={styles.resultLabel}>Resistencia(f'c):</Text>
                        <Text style={styles.resultValue}>{resistencia}</Text>
                    </View>
                    <View style={styles.resultRow}>
                        <Text style={styles.resultLabel}>Uso Sugerido:</Text>
                        <Text style={styles.resultValue}>{resistenciaMensaje}</Text>
                    </View>
                </View>

                <Text style={styles.pickerLabel}>Selecciona una Resistencia (f'c)</Text>
                
                <View style={{alignItems: 'center'}} >
                <Picker selectedValue={resistencia}
                        style={styles.picker}
                        onValueChange={handleResistenciaChange}>
                            
                        <Picker.Item label="Selecciona una resistencia" value="0" color='#000'/>
                        <Picker.Item label="100 kg/cm²" value="100" color='#000' />
                        <Picker.Item label="150 kg/cm²" value="150" color='#000'/>
                        <Picker.Item label="200 kg/cm²" value="200" color='#000'/>
                        <Picker.Item label="250 kg/cm²" value="250" color='#000'/>
                        <Picker.Item label="300 kg/cm²" value="300" color='#000'/>
                </Picker>
                </View>
                
                <Pressable style={({ pressed }) => [styles.btnCalcular, { backgroundColor: pressed ? '#4CAF50' : '#E55406' }]} onPress={handleCalculateVolume}>
                    <Text style={{fontSize: 20, fontWeight: '600', color: '#fff',}}>Calcular</Text>
                </Pressable>
            </View>
            <StatusBar style="auto" />

            <Pressable style={styles.floatingButton}>
                <Link href="/Modal">
                    <Text style={styles.floatingButtonText}>?</Text>
                </Link>
            </Pressable>
        </ScrollView>

    );
}

export default Dosificadora;

const styles = StyleSheet.create({
    scrollContainer: {
        flex: 1,
        backgroundColor: '#f3f4f6',
    },
    container: {
        padding: 12,
    },
    logo: {
        width: 180,
        height: 200,
        marginBottom: 20,
    },
    titlesContainer: {
        alignItems: 'center',
        justifyContent: 'center',
        marginBottom: 10,
    },
    subTitle: {
        fontSize: 26,
        fontWeight: '700',
        marginVertical: 5,
        color: '#333',
    },
    campos: {
        marginBottom: 20,
    },
    inputLabel: {
        fontSize: 16,
        fontWeight: 'bold',
        marginBottom: 5,
        color: '#333',
    },
    inputContainer: {
        flexDirection: 'row',
        alignItems: 'center',
    },
    input: {
        borderWidth: 1,
        borderColor: '#ccc',
        borderRadius: 10,
        padding: 10,
        fontSize: 16,
        backgroundColor: '#fff',
        flex: 1,

    },
    unitLabel: {
        fontSize: 16,
        fontWeight: 'bold',
        marginLeft: 5,
        color: '#333',
    },
    resultContainer: {
        marginVertical: 20,
        padding: 15,
        borderRadius: 10,
        backgroundColor: '#e0e0e0',
    },
    resultRow: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginBottom: 10,
    },
    resultLabel: {
        fontSize: 15,
        fontWeight: 'bold',
    },
    resultValue: {
        fontSize: 15,
        fontWeight: '500'
    },
    pickerLabel: {
        fontSize: 20,
        textAlign: 'center',
        marginVertical: 10,
        fontWeight: '500',
        color: '#333',
    },
    picker: {
        ...Platform.select({
          ios: {
            fontSize: 24,
            marginBottom: 5,
            backgroundColor: '#fff',
            borderRadius: 15,
            width: '90%',
            marginHorizontal: 20,
          },
          android: {
            height: 50,
            width: '75%',
            backgroundColor: '#fff',
            borderRadius: 10,
            marginBottom: 20,
          },
        }),
      },
    btnCalcular: {
        alignItems: 'center',
        padding: 15,
        borderRadius: 10,
        marginVertical: 30,
    },
    floatingButton: {
        position: 'absolute',
        top: 15,
        right: 15,
        backgroundColor: '#E55406',
        borderRadius: 100,
        width: 40,
        height: 40,
        alignItems: 'center',
        justifyContent: 'center',
        zIndex: 1000,
    },
    floatingButtonText: {
        color: 'white',
        fontSize: 24,
        fontWeight: 'bold',
    },
});