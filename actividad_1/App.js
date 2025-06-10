import React, { useState } from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, TextInput, TouchableOpacity, Platform } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';

export default function App() {
  const [nombre, setNombre] = useState('');
  const [saludo, setSaludo] = useState('');

  const manejarSaludo = () => {
    setSaludo(`¡Hola ${nombre}!`);
  };

  return (
    <LinearGradient
      colors={['#a8edea', '#fed6e3']}
      style={styles.gradient}
    >
      <View style={styles.card}>
        <Text style={styles.titulo}>¡Bienvenido!</Text>
        <Text style={styles.label}>Ingrese su nombre:</Text>
        <TextInput
          style={styles.input}
          placeholder="Escribe tu nombre"
          placeholderTextColor="#aaa"
          value={nombre}
          onChangeText={setNombre}
        />
        <TouchableOpacity style={styles.boton} onPress={manejarSaludo}>
          <Text style={styles.botonTexto}>¡Saludar!</Text>
        </TouchableOpacity>
        {saludo !== '' && <Text style={styles.saludo}>{saludo}</Text>}
        <StatusBar style="auto" />
      </View>
    </LinearGradient>
  );
}

const styles = StyleSheet.create({
  gradient: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  card: {
    backgroundColor: '#fff',
    borderRadius: 20,
    padding: 30,
    alignItems: 'center',
    width: 320,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.2,
    shadowRadius: 8,
    elevation: 8,
  },
  titulo: {
    fontSize: 28,
    fontWeight: 'bold',
    color: '#ff6f91',
    marginBottom: 10,
    fontFamily: Platform.OS === 'ios' ? 'AvenirNext-Bold' : 'Roboto',
  },
  label: {
    fontSize: 16,
    color: '#333',
    marginBottom: 8,
    fontWeight: '600',
  },
  input: {
    height: 44,
    borderColor: '#ffb6b9',
    borderWidth: 1,
    borderRadius: 10,
    paddingHorizontal: 12,
    width: 220,
    marginBottom: 15,
    backgroundColor: '#f9f9f9',
    fontSize: 16,
  },
  boton: {
    backgroundColor: '#ff6f91',
    paddingVertical: 12,
    paddingHorizontal: 30,
    borderRadius: 10,
    marginBottom: 12,
    shadowColor: '#ff6f91',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.3,
    shadowRadius: 4,
    elevation: 4,
  },
  botonTexto: {
    color: '#fff',
    fontSize: 18,
    fontWeight: 'bold',
  },
  saludo: {
    marginTop: 15,
    fontSize: 20,
    fontWeight: 'bold',
    color: '#ff6f91',
    textShadowColor: '#ffe6ea',
    textShadowOffset: { width: 1, height: 1 },
    textShadowRadius: 2,
  },
});
