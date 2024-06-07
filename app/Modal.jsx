import { View, Text, Pressable, StyleSheet, Linking } from 'react-native';
import { router } from 'expo-router';
import { StatusBar } from 'expo-status-bar';

export default function Modal() {
  const isPresented = router.canGoBack();
  
  const openTikTok = () => {
    const urlTikTok = 'https://www.tiktok.com/@studiodigitalpue?_t=8mzhcnqPcbW&_r=1';
    Linking.openURL(urlTikTok).catch((err) => console.error("Error al abrir la URL:", err));
  };

  const openTikTokProfile = () => {
    openTikTok(); // Llamar a la función que abre la URL de TikTok
  };

  return (
    <View style={styles.container}>
      <Text style={styles.text}>Instrucciones de uso...</Text>
      {!isPresented && (
        <Link href="../" style={styles.link}>
          <Text style={styles.linkText}>Dismiss</Text>
        </Link>
      )}
      {isPresented && (
        <Pressable onPress={() => router.back()} style={styles.backButton}>
          <Text style={styles.backButtonText}>Back</Text>
        </Pressable>
      )}
      {/* Botón para abrir el perfil de TikTok */}
      <Pressable onPress={openTikTokProfile} style={styles.tikTokButton}>
        <Text style={styles.tikTokButtonText}>TikTok Profile</Text>
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
    backgroundColor: 'rgba(0, 0, 0, 0.8)',
  },
  text: {
    fontSize: 24,
    color: 'white',
  },
  link: {
    marginTop: 20,
    padding: 10,
    backgroundColor: 'white',
    borderRadius: 5,
  },
  linkText: {
    color: 'black',
    fontSize: 16,
  },
  backButton: {
    marginTop: 20,
    padding: 10,
    backgroundColor: 'white',
    borderRadius: 5,
  },
  backButtonText: {
    color: 'black',
    fontSize: 16,
  },
  tikTokButton: {
    marginTop: 20,
    padding: 10,
    backgroundColor: 'white',
    borderRadius: 5,
  },
  tikTokButtonText: {
    color: 'black',
    fontSize: 16,
  },
});
