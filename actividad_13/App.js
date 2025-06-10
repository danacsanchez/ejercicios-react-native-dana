import React, { useState } from 'react';
import { StyleSheet, Text, View, TextInput, TouchableOpacity, Platform } from 'react-native';
import { StatusBar } from 'expo-status-bar';
import { MaterialCommunityIcons } from '@expo/vector-icons';

export default function App() {
  const [horasDiarias, setHorasDiarias] = useState('');
  const [tarifaHora, setTarifaHora] = useState('');
  const [salarioNeto, setSalarioNeto] = useState(null);

  const calcularSalario = () => {
    const horas = parseFloat(horasDiarias);
    const tarifa = parseFloat(tarifaHora);
    
    if (!isNaN(horas) && !isNaN(tarifa)) {
      const DIAS_QUINCENA = 15;
      const horasTotales = horas * DIAS_QUINCENA;
      const salarioBruto = horasTotales * tarifa;
      const compensacion = salarioBruto * 0.02;
      const imss = salarioBruto * 0.015;
      const ispt = salarioBruto * 0.012;
      const neto = salarioBruto + compensacion - (imss + ispt);
      setSalarioNeto(neto.toFixed(2));
    }
  };

  return (
    <View style={styles.background}>
      <View style={styles.card}>
        <Text style={styles.titulo}>
          <MaterialCommunityIcons name="cash" size={28} color="#2ecc71" /> Calculadora de Salario
        </Text>
        <Text style={styles.label}>Horas trabajadas por día:</Text>
        <TextInput
          style={styles.input}
          placeholder="Ej: 8"
          keyboardType="numeric"
          placeholderTextColor="#b2bec3"
          value={horasDiarias}
          onChangeText={setHorasDiarias}
        />
        <Text style={styles.label}>Tarifa por hora ($):</Text>
        <TextInput
          style={styles.input}
          placeholder="Ej: 50"
          keyboardType="numeric"
          placeholderTextColor="#b2bec3"
          value={tarifaHora}
          onChangeText={setTarifaHora}
        />
        <TouchableOpacity style={styles.boton} onPress={calcularSalario}>
          <Text style={styles.botonTexto}>Calcular salario neto</Text>
        </TouchableOpacity>
        {salarioNeto !== null && (
          <Text style={styles.resultado}>
            Salario neto quincenal: <Text style={styles.valor}>${salarioNeto} MXN</Text>
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
    shadowColor: '#2ecc71',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.10,
    shadowRadius: 8,
    elevation: 8,
  },
  titulo: {
    fontSize: 22,
    fontWeight: 'bold',
    color: '#2ecc71',
    marginBottom: 18,
    fontFamily: Platform.OS === 'ios' ? 'AvenirNext-Bold' : 'Roboto',
    letterSpacing: 1,
    textAlign: 'center',
  },
  label: {
    fontSize: 16,
    color: '#2ecc71',
    marginBottom: 8,
    fontWeight: '600',
    textAlign: 'center',
  },
  input: {
    height: 44,
    borderColor: '#2ecc71',
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
    backgroundColor: '#2ecc71',
    paddingVertical: 12,
    paddingHorizontal: 32,
    borderRadius: 10,
    marginBottom: 14,
    alignItems: 'center',
    shadowColor: '#2ecc71',
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
    color: '#2ecc71',
    fontWeight: 'bold',
    fontSize: 18,
  },
});
