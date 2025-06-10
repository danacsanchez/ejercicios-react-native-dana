import React, { useState } from 'react';
import { StyleSheet, Text, View, TextInput, TouchableOpacity, Platform } from 'react-native';
import { StatusBar } from 'expo-status-bar';
import { MaterialCommunityIcons } from '@expo/vector-icons';

export default function App() {
  const [pulgadas, setPulgadas] = useState('');
  const [metros, setMetros] = useState(null);

  const convertir = () => {
    const valorPulgadas = parseFloat(pulgadas);
    if (!isNaN(valorPulgadas)) {
      setMetros((valorPulgadas * 0.0254).toFixed(4));
    }
  };

  return (
    <View style={styles.background}>
      <View style={styles.card}>
        <View style={styles.tituloContainer}>
          <MaterialCommunityIcons name="ruler" size={28} color="#5ac8fa" />
          <Text style={styles.titulo}>Conversor de Pulgadas a Metros</Text>
        </View>
        <TextInput
          style={styles.input}
          placeholder="Pulgadas"
          placeholderTextColor="#888"
          keyboardType="numeric"
          value={pulgadas}
          onChangeText={setPulgadas}
        />
        <TouchableOpacity style={styles.boton} onPress={convertir}>
          <Text style={styles.botonTexto}>
            Convertir
          </Text>
        </TouchableOpacity>
        {metros !== null && (
          <View style={styles.resultadoContainer}>
            <Text style={styles.resultado}>
              <Text style={styles.valor}>{pulgadas}</Text> pulgadas = <Text style={styles.valor}>{metros}</Text> metros
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
    fontSize: 20,
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
    borderColor: '#5ac8fa',
    borderWidth: 1.5,
    borderRadius: 12,
    paddingHorizontal: 16,
    marginBottom: 20,
    color: '#222',
    fontSize: 17,
    fontWeight: '500',
  },
  boton: {
    backgroundColor: '#5ac8fa',
    paddingVertical: 14,
    paddingHorizontal: 36,
    borderRadius: 12,
    marginBottom: 16,
    alignItems: 'center',
    shadowColor: '#5ac8fa',
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
    color: '#5ac8fa',
    fontWeight: 'bold',
    fontSize: 18,
  },
});
