import React, { useState } from 'react';
import { StyleSheet, Text, View, TextInput, TouchableOpacity, Platform } from 'react-native';
import { StatusBar } from 'expo-status-bar';
import { MaterialCommunityIcons, FontAwesome5 } from '@expo/vector-icons';

export default function App() {
  const [lado, setLado] = useState('');
  const [area, setArea] = useState(null);
  const [perimetro, setPerimetro] = useState(null);

  const calcular = () => {
    const valorLado = parseFloat(lado);
    if (!isNaN(valorLado)) {
      setArea((valorLado * valorLado).toFixed(2));
      setPerimetro((4 * valorLado).toFixed(2));
    }
  };

  return (
    <View style={styles.background}>
      <View style={styles.card}>
        <Text style={styles.titulo}>
          <MaterialCommunityIcons name="square-outline" size={28} color="#00b894" /> Calculadora de Cuadrado
        </Text>
        <TextInput
          style={styles.input}
          placeholder="Lado del cuadrado"
          keyboardType="numeric"
          placeholderTextColor="#b2bec3"
          value={lado}
          onChangeText={setLado}
        />
        <TouchableOpacity style={styles.boton} onPress={calcular}>
          <Text style={styles.botonTexto}>Calcular</Text>
        </TouchableOpacity>
        {area !== null && perimetro !== null && (
          <View style={styles.resultados}>
            <View style={styles.row}>
              <FontAwesome5 name="square-full" size={20} color="#00b894" style={styles.icono} />
              <Text style={styles.resultadoTexto}>Área: <Text style={styles.valor}>{area}</Text></Text>
            </View>
            <View style={styles.row}>
              <MaterialCommunityIcons name="vector-square" size={20} color="#0984e3" style={styles.icono} />
              <Text style={styles.resultadoTexto}>Perímetro: <Text style={styles.valor}>{perimetro}</Text></Text>
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
    fontSize: 22,
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
    marginBottom: 18,
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
    color: '#00b894',
    fontWeight: 'bold',
    fontSize: 16,
  },
});
