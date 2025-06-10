import React, { useState } from 'react';
import { StyleSheet, Text, View, TouchableOpacity, FlatList, Platform } from 'react-native';
import { StatusBar } from 'expo-status-bar';

export default function App() {
  const numeros = [19, 17, 21, 9, 12, 7];
  const [promedio, setPromedio] = useState(null);

  const calcularPromedio = () => {
    const suma = numeros.reduce((a, b) => a + b, 0);
    setPromedio((suma / numeros.length).toFixed(2));
  };

  return (
    <View style={styles.background}>
      <View style={styles.card}>
        <Text style={styles.label}>Números a promediar:</Text>
        <View style={styles.numerosContainer}>
          {numeros.map((num, idx) => (
            <View key={idx} style={styles.numeroBox}>
              <Text style={styles.numero}>{num}</Text>
            </View>
          ))}
        </View>
        <TouchableOpacity style={styles.boton} onPress={calcularPromedio}>
          <Text style={styles.botonTexto}>Calcular promedio</Text>
        </TouchableOpacity>
        {promedio !== null && (
          <Text style={styles.resultado}>
            El promedio es: <Text style={styles.valor}>{promedio}</Text>
          </Text>
        )}
        <StatusBar style="auto" />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  background: {
    flex: 1,
    backgroundColor: '#f6f7fb',
    alignItems: 'center',
    justifyContent: 'center',
  },
  card: {
    backgroundColor: '#fff',
    borderRadius: 18,
    padding: 32,
    width: 340,
    alignItems: 'center',
    shadowColor: '#6366f1',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.10,
    shadowRadius: 8,
    elevation: 8,
  },
  titulo: {
    fontSize: 22,
    fontWeight: 'bold',
    color: '#6366f1',
    marginBottom: 12,
    fontFamily: Platform.OS === 'ios' ? 'AvenirNext-Bold' : 'Roboto',
    letterSpacing: 1,
    textAlign: 'center',
  },
  label: {
    fontSize: 16,
    color: '#6366f1',
    marginBottom: 8,
    fontWeight: '600',
    textAlign: 'center',
  },
  numerosContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    flexWrap: 'wrap',
    marginBottom: 20,
    gap: 8,
  },
  numeroBox: {
    backgroundColor: '#e0e7ff',
    borderRadius: 8,
    paddingVertical: 8,
    paddingHorizontal: 14,
    marginHorizontal: 4,
    marginVertical: 4,
    shadowColor: '#6366f1',
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.09,
    shadowRadius: 2,
    elevation: 2,
  },
  numero: {
    fontSize: 18,
    color: '#3730a3',
    fontWeight: 'bold',
    textAlign: 'center',
  },
  boton: {
    backgroundColor: '#6366f1',
    paddingVertical: 12,
    paddingHorizontal: 32,
    borderRadius: 10,
    marginBottom: 14,
    alignItems: 'center',
    shadowColor: '#6366f1',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.18,
    shadowRadius: 4,
    elevation: 4,
  },
  botonTexto: {
    color: '#fff',
    fontSize: 17,
    fontWeight: 'bold',
    letterSpacing: 1,
  },
  resultado: {
    marginTop: 16,
    fontSize: 17,
    color: '#444',
    fontWeight: '500',
    textAlign: 'center',
  },
  valor: {
    color: '#6366f1',
    fontWeight: 'bold',
    fontSize: 18,
  },
});
