import React, { useState } from 'react';
import { StyleSheet, Text, View, TextInput, TouchableOpacity, Platform } from 'react-native';
import { StatusBar } from 'expo-status-bar';

export default function App() {
  const [catetoA, setCatetoA] = useState('');
  const [catetoB, setCatetoB] = useState('');
  const [hipotenusa, setHipotenusa] = useState(null);

  const calcularHipotenusa = () => {
    const a = parseFloat(catetoA);
    const b = parseFloat(catetoB);

    if (!isNaN(a) && !isNaN(b)) {
      const c = Math.sqrt(Math.pow(a, 2) + Math.pow(b, 2));
      setHipotenusa(c.toFixed(4));
    }
  };

  return (
    <View style={styles.background}>
      <View style={styles.card}>
        <Text style={styles.titulo}>Calculadora de Hipotenusa</Text>
        <TextInput
          style={styles.input}
          placeholder="Cateto a"
          keyboardType="numeric"
          placeholderTextColor="#b2bec3"
          value={catetoA}
          onChangeText={setCatetoA}
        />
        <TextInput
          style={styles.input}
          placeholder="Cateto b"
          keyboardType="numeric"
          placeholderTextColor="#b2bec3"
          value={catetoB}
          onChangeText={setCatetoB}
        />
        <TouchableOpacity style={styles.boton} onPress={calcularHipotenusa}>
          <Text style={styles.botonTexto}>Calcular hipotenusa</Text>
        </TouchableOpacity>
        {hipotenusa && (
          <Text style={styles.resultado}>
            La hipotenusa es <Text style={styles.valor}>{hipotenusa}</Text>
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
    backgroundColor: '#eaf6fb',
    alignItems: 'center',
    justifyContent: 'center',
  },
  card: {
    backgroundColor: '#fff',
    borderRadius: 18,
    padding: 32,
    width: 320,
    alignItems: 'center',
    shadowColor: '#00b894',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.10,
    shadowRadius: 8,
    elevation: 8,
  },
  titulo: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#00b894',
    marginBottom: 18,
    fontFamily: Platform.OS === 'ios' ? 'AvenirNext-Bold' : 'Roboto',
    letterSpacing: 1,
    textAlign: 'center',
  },
  input: {
    height: 44,
    borderColor: '#00b894',
    borderWidth: 1.5,
    borderRadius: 10,
    paddingHorizontal: 14,
    width: 200,
    marginBottom: 16,
    backgroundColor: '#f8fafc',
    fontSize: 17,
    color: '#222',
  },
  boton: {
    backgroundColor: '#0984e3',
    paddingVertical: 12,
    paddingHorizontal: 32,
    borderRadius: 10,
    marginBottom: 14,
    alignItems: 'center',
    shadowColor: '#0984e3',
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
  },
  valor: {
    color: '#00b894',
    fontWeight: 'bold',
    fontSize: 18,
  },
});
