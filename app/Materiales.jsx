import { StyleSheet, Text, View, ScrollView, Pressable, Linking, Platform } from 'react-native';
import { useLocalSearchParams } from 'expo-router';
import { StatusBar } from 'expo-status-bar';
import { Image } from 'expo-image';

const Materiales = () => {
    const { resistenciaMensaje = '', resistencia = 0, volumen = 0 } = useLocalSearchParams();

    const proporciones = {
        100: { cemento: 4.50, arena: 31.50, grava: 37.13, agua: 11.25 },
        150: { cemento: 5.50, arena: 30.25, grava: 38.50, agua: 11 },
        200: { cemento: 6.75, arena: 28.69, grava: 40.50, agua: 11.81 },
        250: { cemento: 7.75, arena: 27.13, grava: 40.69, agua: 11.63 },
        300: { cemento: 8.50, arena: 23.38, grava: 38.25, agua: 10.63 },
    };

    const proporcionesSeleccionadas = proporciones[resistencia] || { cemento: 0 ,arena: 0, grava: 0, agua: 0 };

    const totalMateriales = {
        cemento: (volumen * proporcionesSeleccionadas.cemento).toFixed(2),
        arena: (volumen * proporcionesSeleccionadas.arena).toFixed(2),
        grava: (volumen * proporcionesSeleccionadas.grava).toFixed(2),
        agua: (volumen * proporcionesSeleccionadas.agua).toFixed(2),
    };

    const proporcionesUnBulto = {
        grava: (totalMateriales.grava / totalMateriales.cemento ).toFixed(2),
        arena: (totalMateriales.arena / totalMateriales.cemento ).toFixed(2),
        agua: (totalMateriales.agua / totalMateriales.cemento ).toFixed(2),
    }

    const openInsta = () => {
        const urlInsta = 'https://www.instagram.com/studiodigitalmx?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw==';
        Linking.openURL(urlInsta).catch((err) => console.error("Error al abrir la URL:", err));
    };

    const enviarMensajeWhatsapp = () =>{
        const mensaje = `Hola, me gustaria cotizar el siguiente material: \nCemento: ${totalMateriales.cemento} Bultos\nGrava: ${totalMateriales.grava} Botes\nArena: ${totalMateriales.arena} Botes`;
        const numero = '522222396612';
        const mobile = Platform.OS === 'android' || Platform.OS === 'ios' ? numero : '+' + numero;
        const url = `whatsapp://send?text=${mensaje}&phone=${mobile}`;
        Linking.openURL(url)
        .catch(() => alert("Asegurate de tener whatsapp instalado en tu dispositivo"));      
    };

    return (
        <ScrollView style={styles.scrollContainer}>
            <View style={{padding : 15}}>
                <Text style={styles.title}>Dosificación de concreto</Text>
                <Text style={styles.subtitle}>Uso sugerido: {resistenciaMensaje}</Text> 
                <Text style={styles.subtitle}>Volumen: {volumen} m³</Text>
                <Text style={styles.subtitle}>Resistencia(f'c) seleccionada: {resistencia}</Text>
                
                <View style={styles.dosisContainer}>
                    <Text style={styles.dosisTitle}>Dosificación para su elaboración, en revolvedora de 1 saco de capacidad</Text>
                </View>
                
                <View style={styles.buttonRow}>
                    <Pressable style={({ pressed }) => [
                        styles.button,
                        { backgroundColor: pressed ? '#4CAF50' : '#E55406' },
                    ]}>
                        <Text style={styles.buttonText}>Cemento (Bulto 50kg)</Text>
                        <Text style={styles.buttonValue}>{totalMateriales.cemento}</Text>
                    </Pressable>
                    <Pressable style={({ pressed }) => [
                        styles.button,
                        { backgroundColor: pressed ? '#4CAF50' : '#E55406' },
                    ]}>
                        <Text style={styles.buttonText}>Grava (Botes)</Text>
                        <Text style={styles.buttonValue}>{totalMateriales.grava}</Text>
                    </Pressable>
                </View>
 
                <View style={styles.buttonRow}>
                    <Pressable style={({ pressed }) => [
                        styles.button,
                        { backgroundColor: pressed ? '#4CAF50' : '#E55406' },
                    ]}>
                        <Text style={styles.buttonText}>Arena (Botes)</Text>
                        <Text style={styles.buttonValue}>{totalMateriales.arena}</Text>
                    </Pressable>
                    <Pressable style={({ pressed }) => [
                        styles.button,
                        { backgroundColor: pressed ? '#4CAF50' : '#E55406' },
                    ]}>
                        <Text style={styles.buttonText}>Agua (Botes)</Text>
                        <Text style={styles.buttonValue}>{totalMateriales.agua}</Text>
                    </Pressable>
                </View>

                <View style={styles.dosisContainer}>
                    <Text style={styles.dosisTitle}>Dosificación para un bulto en revolvedora de 1 saco</Text>
                </View>

                <View style={styles.buttonRow}>
                    <Pressable style={({ pressed }) => [
                        styles.button,
                        { backgroundColor: pressed ? '#4CAF50' : '#E55406' },
                    ]}>
                        <Text style={styles.buttonText}>Cemento (Bultos 50kg)</Text>
                        <Text style={styles.buttonValue}>1</Text>
                    </Pressable>
                    <Pressable style={({ pressed }) => [
                        styles.button,
                        { backgroundColor: pressed ? '#4CAF50' : '#E55406' },
                    ]}>
                        <Text style={styles.buttonText}>Grava (Botes)</Text>
                        <Text style={styles.buttonValue}>{proporcionesUnBulto.grava}</Text>
                    </Pressable>
                </View>

                <View style={styles.buttonRow}>
                    <Pressable style={({ pressed }) => [
                        styles.button,
                        { backgroundColor: pressed ? '#4CAF50' : '#E55406' },
                    ]}>
                        <Text style={styles.buttonText}>Arena (Botes)</Text>
                        <Text style={styles.buttonValue}>{proporcionesUnBulto.arena}</Text>
                    </Pressable>
                    <Pressable style={({ pressed }) => [
                        styles.button,
                        { backgroundColor: pressed ? '#4CAF50' : '#E55406' },
                    ]}>
                        <Text style={styles.buttonText}>Agua (Botes)</Text>
                        <Text style={styles.buttonValue}>{proporcionesUnBulto.agua}</Text>
                    </Pressable>
                </View>

                <Pressable style={({ pressed }) => [styles.btnCotizar, { backgroundColor: pressed ? '#4CAF50' : '#E55406' }]}
                            onPress={enviarMensajeWhatsapp}>
                    <Text style={{fontSize: 20, fontWeight: '600', color: '#fff',}}>Cotizar Material</Text>
                </Pressable>

                <View style={{alignItems: 'center', marginVertical: 30,}}>
                    <Pressable onPress={openInsta}>
                        <Image                             
                            style={{width: 220, height: 60,}}
                            source={require('../assets/images/logo studio.png')}
                        />
                    </Pressable>
                </View>

                <StatusBar style="auto" />
            </View>
        </ScrollView>
    );
};

export default Materiales;

const styles = StyleSheet.create({
    scrollContainer: {
        flex: 1,
        backgroundColor: '#F3F4F6',
    },
    title: {
        fontSize: 26,
        fontWeight: '700',
        marginBottom: 5,
        textAlign: 'center',
        color: '#333',
    },
    subtitle: {
        fontSize: 18,
        textAlign: 'center',
        marginBottom: 15,
        fontWeight: '500',
        color: '#555',
    },
    btnCotizar: {
        alignItems: 'center',
        padding: 10,
        borderRadius: 10,
        marginVertical: 10,
        marginHorizontal: 10,
    },
    dosisContainer: {
        alignItems: 'center',
        textAlign: 'center',
        marginBottom: 20,
    },
    dosisTitle: {
        fontSize: 22,
        fontWeight: 'bold',
        color: '#333',
        textAlign: 'center'
    },
    buttonRow: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginBottom: 10,
    },
    button: {
        flex: 1,
        padding: 10,
        borderRadius: 10,
        alignItems: 'center',
        marginHorizontal: 10,
    },
    buttonText: {
        fontSize: 16,
        fontWeight: 'bold',
        color: '#fff',
    },
    buttonValue: {
        fontSize: 20,
        fontWeight: 'bold',
        color: '#fff',
        marginTop: 5,
    },
});
