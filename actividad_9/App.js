import React, { useState } from 'react';
import { StyleSheet, Text, View, TextInput, TouchableOpacity, Platform } from 'react-native';
import { StatusBar } from 'expo-status-bar';
import { MaterialCommunityIcons, FontAwesome5 } from '@expo/vector-icons';

export default function App() {
  const [altura, setAltura] = useState('');
  const [base, setBase] = useState('');
  const [area, setArea] = useState(null);

  const calcularArea = () => {
    const h = parseFloat(altura);
    const b = parseFloat(base);
    if (!isNaN(h) && !isNaN(b)) {
      setArea(((b * h) / 2).toFixed(2));
    }
  };

  return (
    <View style={styles.background}>
      <View style={styles.card}>
        <Text style={styles.titulo}>
          <MaterialCommunityIcons name="triangle-outline" size={28} color="#e17055" /> Área de Triángulo
        </Text>
        <TextInput
          style={styles.input}
          placeholder="Altura"
          keyboardType="numeric"
          placeholderTextColor="#b2bec3"
          value={altura}
          onChangeText={setAltura}
        />
        <TextInput
          style={styles.input}
          placeholder="Base"
          keyboardType="numeric"
          placeholderTextColor="#b2bec3"
          value={base}
          onChangeText={setBase}
        />
        <TouchableOpacity style={styles.boton} onPress={calcularArea}>
          <Text style={styles.botonTexto}>Calcular área</Text>
        </TouchableOpacity>
        {area !== null && (
          <View style={styles.resultados}>
            <View style={styles.row}>
              <FontAwesome5 name="ruler-vertical" size={20} color="#e17055" style={styles.icono} />
              <Text style={styles.resultadoTexto}>Altura: <Text style={styles.valor}>{altura}</Text></Text>
            </View>
            <View style={styles.row}>
              <FontAwesome5 name="ruler-horizontal" size={20} color="#00b894" style={styles.icono} />
              <Text style={styles.resultadoTexto}>Base: <Text style={styles.valor}>{base}</Text></Text>
            </View>
            <View style={styles.row}>
              <MaterialCommunityIcons name="triangle" size={20} color="#e17055" style={styles.icono} />
              <Text style={styles.resultadoTexto}>Área: <Text style={styles.valor}>{area}</Text></Text>
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
    width: 320,
    alignItems: 'center',
    shadowColor: '#e17055',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.10,
    shadowRadius: 8,
    elevation: 8,
  },
  titulo: {
    fontSize: 22,
    fontWeight: 'bold',
    color: '#e17055',
    marginBottom: 18,
    fontFamily: Platform.OS === 'ios' ? 'AvenirNext-Bold' : 'Roboto',
    letterSpacing: 1,
    textAlign: 'center',
  },
  input: {
    height: 44,
    borderColor: '#e17055',
    borderWidth: 1.5,
    borderRadius: 10,
    paddingHorizontal: 14,
    width: 200,
    marginBottom: 14,
    backgroundColor: '#f8fafc',
    fontSize: 17,
    color: '#222',
  },
  boton: {
    backgroundColor: '#00b894',
    paddingVertical: 12,
    paddingHorizontal: 32,
    borderRadius: 10,
    marginBottom: 14,
    alignItems: 'center',
    shadowColor: '#00b894',
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
    color: '#e17055',
    fontWeight: 'bold',
    fontSize: 16,
  },
});
