import React, { useState } from 'react';
import { StyleSheet, Text, View, TextInput, TouchableOpacity, Platform } from 'react-native';
import { StatusBar } from 'expo-status-bar';
import { LinearGradient } from 'expo-linear-gradient';

export default function App() {
  const [cm, setCm] = useState('');
  const [pulgadas, setPulgadas] = useState(null);

  const convertir = () => {
    const valorCm = parseFloat(cm);
    if (!isNaN(valorCm)) {
      const resultado = valorCm / 2.54;
      setPulgadas(resultado.toFixed(4));
    }
  };

  return (
    <LinearGradient colors={['#43cea2', '#185a9d']} style={styles.gradient}>
      <View style={styles.card}>
        <Text style={styles.titulo}>Conversor de Unidades</Text>
        <Text style={styles.label}>Centímetros a pulgadas</Text>
        <TextInput
          style={styles.input}
          keyboardType="numeric"
          placeholder="Centímetros"
          placeholderTextColor="#b2bec3"
          value={cm}
          onChangeText={setCm}
        />
        <TouchableOpacity style={styles.boton} onPress={convertir}>
          <Text style={styles.botonTexto}>Convertir</Text>
        </TouchableOpacity>
        {pulgadas && (
          <Text style={styles.resultado}>
            {cm} cm = <Text style={styles.valor}>{pulgadas}</Text> pulgadas
          </Text>
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
    borderRadius: 18,
    padding: 32,
    width: 320,
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.10,
    shadowRadius: 8,
    elevation: 8,
  },
  titulo: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#185a9d',
    marginBottom: 6,
    fontFamily: Platform.OS === 'ios' ? 'AvenirNext-Bold' : 'Roboto',
    letterSpacing: 1,
  },
  label: {
    fontSize: 16,
    color: '#43cea2',
    marginBottom: 18,
    fontWeight: '600',
    letterSpacing: 0.5,
  },
  input: {
    height: 44,
    borderColor: '#43cea2',
    borderWidth: 1.5,
    borderRadius: 10,
    paddingHorizontal: 14,
    width: 200,
    marginBottom: 18,
    backgroundColor: '#f7f7f7',
    fontSize: 17,
    color: '#222',
  },
  boton: {
    backgroundColor: '#185a9d',
    paddingVertical: 12,
    paddingHorizontal: 32,
    borderRadius: 10,
    marginBottom: 14,
    alignItems: 'center',
    shadowColor: '#185a9d',
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
    color: '#185a9d',
    fontWeight: 'bold',
    fontSize: 18,
  },
});
