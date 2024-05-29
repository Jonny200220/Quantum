import { View, Text, Pressable, StyleSheet } from 'react-native';
import { Link, router } from 'expo-router';
import { StatusBar } from 'expo-status-bar';

export default function Modal() {
  const isPresented = router.canGoBack();

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
      <StatusBar style="light" />
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
});
