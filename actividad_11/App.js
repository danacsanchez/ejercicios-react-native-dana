import React, { useState } from 'react';
import { StyleSheet, Text, View, TextInput, TouchableOpacity, Platform } from 'react-native';
import { StatusBar } from 'expo-status-bar';
import { MaterialCommunityIcons } from '@expo/vector-icons';

export default function App() {
  const [kg, setKg] = useState('');
  const [libras, setLibras] = useState(null);

  const convertir = () => {
    const valorKg = parseFloat(kg);
    if (!isNaN(valorKg)) {
      setLibras((valorKg * 2.2).toFixed(2));
    }
  };

  return (
    <View style={styles.background}>
      <View style={styles.card}>
        <Text style={styles.titulo}>
          <MaterialCommunityIcons name="scale-bathroom" size={28} color="#6366f1" /> Conversor de Peso
        </Text>
        <Text style={styles.label}>Kilogramos a convertir:</Text>
        <TextInput
          style={styles.input}
          placeholder="Kilogramos"
          keyboardType="numeric"
          placeholderTextColor="#b2bec3"
          value={kg}
          onChangeText={setKg}
        />
        <TouchableOpacity style={styles.boton} onPress={convertir}>
          <Text style={styles.botonTexto}>Convertir</Text>
        </TouchableOpacity>
        {libras !== null && (
          <Text style={styles.resultado}>
            {kg} kg = <Text style={styles.valor}>{libras}</Text> libras
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
    width: 320,
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
  input: {
    height: 44,
    borderColor: '#6366f1',
    borderWidth: 1.5,
    borderRadius: 10,
    paddingHorizontal: 14,
    width: 200,
    marginBottom: 18,
    backgroundColor: '#f8fafc',
    fontSize: 17,
    color: '#222',
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
