import { Stack } from 'expo-router';

export default function RootLayout() {
  return (
    <Stack>
      {/*Pantalla de navegacion para "Dosificacion" */}
      <Stack.Screen
        name="index"
        options={{
          title: 'Dosificación de concreto',
          headerTitleAlign: 'center',
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
      {/*Pantalla de navegacion para "Materiales" */}
      <Stack.Screen
        name="Materiales"
        options={{  // Options es para darle un contexto a la pantalla, que titulo, estilos, etc.
          title: 'Dosificacion de Materiales',
          headerBackTitle: 'Back',
          headerTitleAlign: 'center',
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
      {/*Pantalla de navegacion para "Modal" */}
      <Stack.Screen
        name="Modal"
        options={{
          presentation: 'modal',
          title: 'Instrucciones de Uso',
          headerTitleAlign: 'center',
        }}
      />

    </Stack>
  );
}
