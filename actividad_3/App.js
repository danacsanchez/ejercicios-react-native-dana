import React, { useState } from 'react';
import { StyleSheet, Text, View, TextInput, TouchableOpacity, Platform } from 'react-native';
import { StatusBar } from 'expo-status-bar';

export default function App() {
  const [calificaciones, setCalificaciones] = useState(['', '', '', '']);
  const [promedio, setPromedio] = useState(null);

  const handleInput = (value, index) => {
    const nuevasCalificaciones = [...calificaciones];
    nuevasCalificaciones[index] = value;
    setCalificaciones(nuevasCalificaciones);
  };

  const calcularPromedio = () => {
    const nums = calificaciones.map(c => parseFloat(c));
    if (nums.every(n => !isNaN(n))) {
      const suma = nums.reduce((a, b) => a + b, 0);
      setPromedio((suma / 4).toFixed(2));
    }
  };

  return (
    <View style={styles.container}>
      <View style={styles.card}>
        <Text style={styles.titulo}>Promedio Escolar</Text>
        {calificaciones.map((cal, idx) => (
          <TextInput
            key={idx}
            style={styles.input}
            keyboardType="numeric"
            placeholder={`Calificación ${idx + 1}`}
            placeholderTextColor="#bbb"
            value={cal}
            onChangeText={value => handleInput(value, idx)}
            maxLength={5}
          />
        ))}
        <TouchableOpacity style={styles.boton} onPress={calcularPromedio}>
          <Text style={styles.botonTexto}>Calcular promedio</Text>
        </TouchableOpacity>
        {promedio && (
          <Text style={styles.resultado}>El promedio es: <Text style={styles.valor}>{promedio}</Text></Text>
        )}
      </View>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f6f7fb',
    alignItems: 'center',
    justifyContent: 'center',
  },
  card: {
    backgroundColor: '#fff',
    borderRadius: 18,
    padding: 30,
    width: 320,
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 3 },
    shadowOpacity: 0.08,
    shadowRadius: 8,
    elevation: 5,
  },
  titulo: {
    fontSize: 22,
    fontWeight: '700',
    color: '#222',
    marginBottom: 22,
    letterSpacing: 1,
    fontFamily: Platform.OS === 'ios' ? 'AvenirNext-Bold' : 'Roboto',
  },
  input: {
    height: 44,
    borderColor: '#e3e6ee',
    borderWidth: 1.5,
    borderRadius: 10,
    paddingHorizontal: 14,
    width: 220,
    marginBottom: 14,
    backgroundColor: '#f8fafc',
    fontSize: 17,
    color: '#222',
  },
  boton: {
    backgroundColor: '#222',
    paddingVertical: 12,
    paddingHorizontal: 32,
    borderRadius: 10,
    marginTop: 8,
    marginBottom: 10,
    alignItems: 'center',
  },
  botonTexto: {
    color: '#fff',
    fontSize: 16,
    fontWeight: '600',
    letterSpacing: 1,
  },
  resultado: {
    marginTop: 18,
    fontSize: 17,
    color: '#444',
    fontWeight: '500',
  },
  valor: {
    color: '#222',
    fontWeight: 'bold',
    fontSize: 18,
  },
});
