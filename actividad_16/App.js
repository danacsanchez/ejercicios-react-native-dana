import React, { useState } from 'react';
import { StyleSheet, Text, View, TextInput, TouchableOpacity, Platform } from 'react-native';
import { StatusBar } from 'expo-status-bar';
import { MaterialCommunityIcons } from '@expo/vector-icons';

export default function App() {
  const [pies, setPies] = useState('');
  const [pulgadas, setPulgadas] = useState(null);

  const convertir = () => {
    const valorPies = parseFloat(pies);
    if (!isNaN(valorPies)) {
      setPulgadas(valorPies * 12);
    }
  };

  return (
    <View style={styles.background}>
      <View style={styles.card}>
        <View style={styles.tituloContainer}>
          <MaterialCommunityIcons name="swap-vertical" size={28} color="#a4ffa7" />
          <Text style={styles.titulo}>Pies a Pulgadas</Text>
        </View>
        <TextInput
          style={styles.input}
          placeholder="Pies"
          placeholderTextColor="#888"
          keyboardType="numeric"
          value={pies}
          onChangeText={setPies}
        />
        <TouchableOpacity style={styles.boton} onPress={convertir}>
          <Text style={styles.botonTexto}>
            Convertir
          </Text>
        </TouchableOpacity>
        {pulgadas !== null && (
          <View style={styles.resultadoContainer}>
            <Text style={styles.resultado}>
              <Text style={styles.valor}>{pies}</Text> pies = <Text style={styles.valor}>{pulgadas}</Text> pulgadas
            </Text>
          </View>
        )}
        <StatusBar style="auto" />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  background: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  card: {
    backgroundColor: '#fff',
    borderRadius: 16,
    padding: 32,
    width: 320,
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.08,
    shadowRadius: 8,
    elevation: 4,
    borderWidth: 1,
    borderColor: '#e0e0e0',
  },
  tituloContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 24,
  },
  titulo: {
    fontSize: 22,
    fontWeight: 'bold',
    color: '#333',
    marginLeft: 8,
    fontFamily: Platform.OS === 'ios' ? 'AvenirNext-Bold' : 'Roboto',
    letterSpacing: 0.5,
  },
  input: {
    height: 48,
    width: 240,
    backgroundColor: '#f9f9f9',
    borderColor: '#a4ffa7',
    borderWidth: 1.5,
    borderRadius: 12,
    paddingHorizontal: 16,
    marginBottom: 20,
    color: '#222',
    fontSize: 17,
    fontWeight: '500',
  },
  boton: {
    backgroundColor: '#a4ffa7',
    paddingVertical: 14,
    paddingHorizontal: 36,
    borderRadius: 12,
    marginBottom: 16,
    alignItems: 'center',
    shadowColor: '#a4ffa7',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.2,
    shadowRadius: 4,
    elevation: 4,
  },
  botonTexto: {
    color: '#333',
    fontSize: 17,
    fontWeight: 'bold',
    letterSpacing: 0.5,
  },
  resultadoContainer: {
    backgroundColor: '#f9f9f9',
    borderRadius: 12,
    padding: 16,
    marginTop: 16,
    width: '100%',
    alignItems: 'center',
    borderColor: '#e0e0e0',
    borderWidth: 1,
  },
  resultado: {
    fontSize: 17,
    color: '#333',
    fontWeight: '500',
    textAlign: 'center',
  },
  valor: {
    color: '#a4ffa7',
    fontWeight: 'bold',
    fontSize: 18,
  },
});
