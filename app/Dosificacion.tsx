import { StyleSheet, Text, View, TextInput, Alert, ScrollView, Button, Pressable } from 'react-native';
import React, { useState } from 'react';
import { Link } from 'expo-router';

const Dosificadora = () => {
    const [largo, setLargo] = useState('');
    const [ancho, setAncho] = useState('');
    const [espesor, setEspesor] = useState('');
    const [selectedResistance, setSelectedResistance] = useState('');
    const [volumen, setVolumen] = useState(0);

    const handleCalculateVolume = () => {
        const largoValue = parseFloat(largo) || 0;
        const anchoValue = parseFloat(ancho) || 0;
        const espesorValue = parseFloat(espesor) || 0;
    
        if (largoValue > 0 && anchoValue > 0 && espesorValue > 0) {
            const calculatedVolume = largoValue * anchoValue * espesorValue;
            setVolumen(calculatedVolume);
        } else {
            Alert.alert('Error', 'Valores de entrada inválidos.', [
                { text: 'OK', onPress: () => console.log('Alert dismissed') },
            ]);
        }
    };

    return (
        <ScrollView style={styles.scrollContainer}>
            <View>
                <View style={styles.titlesContainer}>
                    <Text style={styles.title}>Dosificacion de concreto</Text>
                    <Text style={styles.subTitle}>Ingresar Cantidad</Text>
                </View>

                <View style={styles.campos}>
                    <Text style={styles.inputLabel}>Largo: </Text>
                    <TextInput
                        style={styles.input}
                        placeholder="Ingresa Aqui"
                        placeholderTextColor={'#666'}
                        keyboardType='numeric'
                        onChangeText={text => setLargo(text)}
                        textAlign='center'
                    />
                </View>

                <View style={styles.campos}>
                    <Text style={styles.inputLabel}>Ancho: </Text>
                    <TextInput
                        style={styles.input}
                        placeholder="Ingresa Aqui"
                        placeholderTextColor={'#666'}
                        keyboardType='numeric'
                        onChangeText={text => setAncho(text)}
                        textAlign='center'
                    />
                </View>

                <View style={styles.campos}>
                    <Text style={styles.inputLabel}>Espesor: </Text>
                    <TextInput
                        style={styles.input}
                        placeholder="Ingresa Aqui"
                        placeholderTextColor={'#666'}
                        keyboardType='numeric'
                        onChangeText={text => setEspesor(text)}
                        textAlign='center'
                    />
                </View>

                <View style={styles.content}>
                    <View style={styles.row}>
                        <Text style={styles.label}>Cantidad:</Text>
                        <View style={styles.valueContainer}>
                            <Text style={styles.value}>{volumen.toFixed(2)} m³</Text>
                        </View>
                    </View>

                    <View style={styles.row}>
                        <Text style={styles.label}>Resistencia:</Text>
                        <Text style={styles.value}>{selectedResistance} kg/cm²</Text>
                    </View>

                    <Pressable style={styles.btnCalcular} onPress={handleCalculateVolume}>
                        <Text style={styles.txtBtnCalular}>Calcular</Text>
                    </Pressable>

                    <Link href='/Materiales' asChild>
                        <Pressable style={styles.btnMateriales}>
                            <Text style={styles.txtBtnMateriales}>Ir a materiales</Text>
                        </Pressable>
                    </Link>
                </View>
            </View>
        </ScrollView>
    );
};

export default Dosificadora;

const styles = StyleSheet.create({
    scrollContainer: {
        flex: 1,
        backgroundColor: '#f3f4f6',
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
        marginTop: 50,
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
        padding: 10,
    },
    content: {
        padding: 20,
        marginTop: 40,
    },
    row: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        marginBottom: 10,
    },
    label: {
        fontSize: 18,
        fontWeight: 'bold',
        textAlign: 'center',
    },
    valueContainer: {
        alignItems: 'center',
        marginHorizontal: 100,
    },
    value: {
        fontSize: 18,
        fontWeight: '700',
    },
    button: {
        marginTop: 20,
        padding: 10,
        backgroundColor: '#007bff',
        color: 'white',
        borderRadius: 5,
    },
    txtBtnCalular: {
        fontSize: 24,
        fontWeight: '600',
    },
    btnCalcular: {
        alignItems: 'center',
        padding: 10,
        borderRadius: 10,
        backgroundColor: '#ACC8E5',
        marginHorizontal: 100,
        marginTop: 20,
    },
    btnMateriales: {
        alignItems: 'center',
        padding: 10,
        borderRadius: 10,
        backgroundColor: '#ACC8E5',
        marginHorizontal: 100,
        marginTop: 20,
    },
    txtBtnMateriales: {
        fontSize: 24,
        fontWeight: '600',
    },
});
