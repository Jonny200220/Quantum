import { Stack } from 'expo-router';

export default function RootLayout() {
  return (
    <Stack>
      {/*Pantalla de navegacion para Dosificacion */}
      <Stack.Screen
        name="index"
        options={{
          title: 'Dosificación de concreto',
          headerTitleStyle: {
            fontWeight: '800',
            fontSize: 25,
            color: '#fff', // color del texto
          },
          headerStyle: {
            backgroundColor: '#E55406', // color de fondo del encabezado
          },
        }}
      />
      {/*Pantalla de navegacion para Materiales */}
      <Stack.Screen
        name="Materiales"
        options={{
          title: 'Dosificacion de Materiales',
          headerBackTitle: 'Back', 
          headerBackTitleStyle:{
            
          },
          headerTitleStyle: {
            fontWeight: '800',
            fontSize: 16,
            color: '#fff', 
          },
          headerStyle: {
            backgroundColor: '#E55406', // color de fondo del encabezado
          },
        }}
      />
      {/*Pantalla de navegacion para Modal de instrucciones */}
      <Stack.Screen
        name="Modal"
        options={{
          presentation: 'modal',
          title: 'Instrucciones de Uso'
        }}
      />

    </Stack>
  );
}
