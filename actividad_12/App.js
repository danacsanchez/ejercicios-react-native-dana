import React, { useState } from 'react';
import { StyleSheet, Text, View, TextInput, TouchableOpacity, Platform } from 'react-native';
import { StatusBar } from 'expo-status-bar';
import { MaterialCommunityIcons, FontAwesome5 } from '@expo/vector-icons';

export default function App() {
  const [num1, setNum1] = useState('');
  const [num2, setNum2] = useState('');
  const [resultados, setResultados] = useState(null);

  const calcular = () => {
    const a = parseFloat(num1);
    const b = parseFloat(num2);
    if (!isNaN(a) && !isNaN(b)) {
      setResultados({
        suma: a + b,
        resta: a - b,
        multiplicacion: a * b,
        division: b !== 0 ? (a / b).toFixed(2) : 'Indefinido',
      });
    }
  };

  return (
    <View style={styles.background}>
      <View style={styles.card}>
        <Text style={styles.titulo}>
          <MaterialCommunityIcons name="calculator-variant-outline" size={26} color="#6366f1" /> Calculadora Básica
        </Text>
        <TextInput
          style={styles.input}
          placeholder="Primer número"
          keyboardType="numeric"
          placeholderTextColor="#b2bec3"
          value={num1}
          onChangeText={setNum1}
        />
        <TextInput
          style={styles.input}
          placeholder="Segundo número"
          keyboardType="numeric"
          placeholderTextColor="#b2bec3"
          value={num2}
          onChangeText={setNum2}
        />
        <TouchableOpacity style={styles.boton} onPress={calcular}>
          <Text style={styles.botonTexto}>Calcular</Text>
        </TouchableOpacity>
        {resultados && (
          <View style={styles.resultados}>
            <View style={styles.row}>
              <FontAwesome5 name="plus" size={18} color="#6366f1" style={styles.icono} />
              <Text style={styles.resultadoTexto}>Suma: <Text style={styles.valor}>{resultados.suma}</Text></Text>
            </View>
            <View style={styles.row}>
              <FontAwesome5 name="minus" size={18} color="#e17055" style={styles.icono} />
              <Text style={styles.resultadoTexto}>Resta: <Text style={styles.valor}>{resultados.resta}</Text></Text>
            </View>
            <View style={styles.row}>
              <FontAwesome5 name="times" size={18} color="#00b894" style={styles.icono} />
              <Text style={styles.resultadoTexto}>Multiplicación: <Text style={styles.valor}>{resultados.multiplicacion}</Text></Text>
            </View>
            <View style={styles.row}>
              <FontAwesome5 name="divide" size={18} color="#f1c40f" style={styles.icono} />
              <Text style={styles.resultadoTexto}>División: <Text style={styles.valor}>{resultados.division}</Text></Text>
            </View>
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
    marginBottom: 18,
    fontFamily: Platform.OS === 'ios' ? 'AvenirNext-Bold' : 'Roboto',
    letterSpacing: 1,
    textAlign: 'center',
  },
  input: {
    height: 44,
    borderColor: '#6366f1',
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
  resultados: {
    marginTop: 20,
    alignItems: 'flex-start',
    width: '100%',
  },
  row: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 8,
  },
  icono: {
    marginRight: 10,
  },
  resultadoTexto: {
    fontSize: 16,
    color: '#444',
    fontWeight: '500',
  },
  valor: {
    fontWeight: 'bold',
    fontSize: 16,
  },
});