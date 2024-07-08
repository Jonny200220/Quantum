import { View, Text, Pressable, StyleSheet, Linking } from 'react-native';
import { router } from 'expo-router';
import { StatusBar } from 'expo-status-bar';
import { Image } from 'expo-image';

export default function Modal() {
  const isPresented = router.canGoBack();
  
  const openTikTok = () => {
    const urlTikTok = 'https://www.tiktok.com/@studiodigitalpue?_t=8mzhcnqPcbW&_r=1';
    Linking.openURL(urlTikTok).catch((err) => console.error("Error al abrir la URL:", err));
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Instrucciones de uso</Text>
      <Text style={styles.text}>Aquí van las instrucciones...</Text>
      
      {!isPresented && (
        <Pressable onPress={() => router.push('../')} style={styles.dismissButton}>
          <Text style={styles.dismissButtonText}>Cerrar</Text>
        </Pressable>
      )}
      
      <Pressable onPress={openTikTok} style={styles.tikTokButton}>
        <Image style={styles.tikTokIcon} source={require('../assets/images/tik-tok.png')} />
        <Text style={styles.tikTokButtonText}>Visita nuestro TikTok</Text>
      </Pressable>
      
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#f3f4f6',
    padding: 20,
  },
  title: {
    fontSize: 26,
    fontWeight: '700',
    marginBottom: 20,
    color: '#333',
    textAlign: 'center',
  },
  text: {
    fontSize: 18,
    color: '#555',
    textAlign: 'center',
    marginBottom: 20,
  },
  dismissButton: {
    marginTop: 20,
    padding: 15,
    backgroundColor: '#E55406',
    borderRadius: 10,
  },
  dismissButtonText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: 'bold',
  },
  tikTokButton: {
    marginTop: 20,
    padding: 15,
    backgroundColor: '#000',
    borderRadius: 10,
    flexDirection: 'row',
    alignItems: 'center',
  },
  tikTokIcon: {
    height: 50,
    width: 50,
    marginRight: 10,
  },
  tikTokButtonText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: 'bold',
  },
});
