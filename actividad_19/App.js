import React, { useState } from 'react';
import { StyleSheet, Text, View, TouchableOpacity, ScrollView, Platform } from 'react-native';
import { StatusBar } from 'expo-status-bar';

export default function App() {
  const [mostrarIniciales, setMostrarIniciales] = useState(false);

  const iniciales = `
DDDDDDD
D           D
D           D
 D         D
  DDDDD

S    SSS 
S   S      S
S   S      S
S   S      S
 SSS      S
  `;

  return (
    <ScrollView contentContainerStyle={styles.scrollContainer}>
      <View style={styles.card}>
        <Text style={styles.titulo}>Iniciales: D y S</Text>
        <Text style={styles.textoPlano}>
          Las iniciales que se muestran abajo corresponden a la "D" y la "S".
        </Text>
        <TouchableOpacity style={styles.boton} onPress={() => setMostrarIniciales(!mostrarIniciales)}>
          <Text style={styles.botonTexto}>
            {mostrarIniciales ? 'Ocultar iniciales' : 'Generar iniciales'}
          </Text>
        </TouchableOpacity>
        {mostrarIniciales && (
          <Text style={styles.arte}>
            {iniciales}
          </Text>
        )}
        <StatusBar style="auto" />
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  scrollContainer: {
    flexGrow: 1,
    backgroundColor: '#fff',
    justifyContent: 'center',
    alignItems: 'center',
    paddingVertical: 40,
  },
  card: {
    backgroundColor: '#fff',
    borderRadius: 16,
    padding: 32,
    width: 340,
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.08,
    shadowRadius: 8,
    elevation: 4,
    borderWidth: 1,
    borderColor: '#e0e0e0',
  },
  titulo: {
    fontSize: 22,
    fontWeight: 'bold',
    color: '#333',
    marginBottom: 8,
    fontFamily: Platform.OS === 'ios' ? 'AvenirNext-Bold' : 'Roboto',
    letterSpacing: 0.5,
    textAlign: 'center',
  },
  textoPlano: {
    fontSize: 16,
    color: '#555',
    marginBottom: 20,
    textAlign: 'center',
    fontFamily: Platform.OS === 'ios' ? 'AvenirNext-Regular' : 'Roboto',
  },
  boton: {
    backgroundColor: '#ff8a65',
    paddingVertical: 14,
    paddingHorizontal: 32,
    borderRadius: 12,
    marginBottom: 20,
    alignItems: 'center',
    shadowColor: '#ff8a65',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.2,
    shadowRadius: 4,
    elevation: 4,
  },
  botonTexto: {
    color: '#fff',
    fontSize: 17,
    fontWeight: 'bold',
    letterSpacing: 0.5,
  },
  arte: {
    fontFamily: 'monospace',
    fontSize: 16,
    lineHeight: 20,
    letterSpacing: 1,
    textAlign: 'center',
    color: '#333',
    backgroundColor: '#f9f9f9',
    padding: 16,
    borderRadius: 8,
    borderWidth: 1,
    borderColor: '#e0e0e0',
    marginTop: 8,
  },
});
