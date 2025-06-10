import React, { useState } from 'react';
import { StyleSheet, Text, View, TextInput, TouchableOpacity, Platform } from 'react-native';
import { StatusBar } from 'expo-status-bar';
import { LinearGradient } from 'expo-linear-gradient';

export default function App() {
  const [radio, setRadio] = useState('');
  const [perimetro, setPerimetro] = useState(null);
  const [area, setArea] = useState(null);

  const calcular = () => {
    const r = parseFloat(radio);
    if (!isNaN(r)) {
      const p = 2 * Math.PI * r;
      const a = Math.PI * r * r;
      setPerimetro(p.toFixed(1));
      setArea(a.toFixed(1));
    }
  };

  return (
    <LinearGradient colors={['#f9d423', '#ff4e50']} style={styles.gradient}>
      <View style={styles.card}>
        <Text style={styles.titulo}>Calculadora de Círculo</Text>
        <Text style={styles.label}>Ingrese el radio:</Text>
        <TextInput
          style={styles.input}
          placeholder="Escribe el radio"
          placeholderTextColor="#bbb"
          keyboardType="numeric"
          value={radio}
          onChangeText={setRadio}
        />
        <TouchableOpacity style={styles.boton} onPress={calcular}>
          <Text style={styles.botonTexto}>Calcular</Text>
        </TouchableOpacity>
        {perimetro && area && (
          <View style={styles.resultados}>
            <Text style={styles.resultadoTexto}>Perímetro: <Text style={styles.valor}>{perimetro}</Text></Text>
            <Text style={styles.resultadoTexto}>Área: <Text style={styles.valor}>{area}</Text></Text>
          </View>
        )}
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
    borderRadius: 22,
    padding: 32,
    alignItems: 'center',
    width: 320,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.18,
    shadowRadius: 8,
    elevation: 8,
  },
  titulo: {
    fontSize: 26,
    fontWeight: 'bold',
    color: '#ff4e50',
    marginBottom: 12,
    fontFamily: Platform.OS === 'ios' ? 'AvenirNext-Bold' : 'Roboto',
  },
  label: {
    fontSize: 16,
    color: '#444',
    marginBottom: 10,
    fontWeight: '600',
  },
  input: {
    height: 46,
    borderColor: '#f9d423',
    borderWidth: 1.5,
    borderRadius: 12,
    paddingHorizontal: 14,
    width: 220,
    marginBottom: 18,
    backgroundColor: '#f7f7f7',
    fontSize: 17,
    color: '#222',
  },
  boton: {
    backgroundColor: '#ff4e50',
    paddingVertical: 12,
    paddingHorizontal: 36,
    borderRadius: 12,
    marginBottom: 16,
    shadowColor: '#ff4e50',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.22,
    shadowRadius: 4,
    elevation: 4,
  },
  botonTexto: {
    color: '#fff',
    fontSize: 19,
    fontWeight: 'bold',
    letterSpacing: 1,
  },
  resultados: {
    marginTop: 18,
    alignItems: 'center',
    backgroundColor: '#fff7e6',
    padding: 14,
    borderRadius: 10,
    width: 200,
    shadowColor: '#f9d423',
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.12,
    shadowRadius: 2,
    elevation: 2,
  },
  resultadoTexto: {
    fontSize: 17,
    color: '#333',
    marginBottom: 4,
    fontWeight: '600',
  },
  valor: {
    color: '#ff4e50',
    fontWeight: 'bold',
    fontSize: 18,
  },
});
