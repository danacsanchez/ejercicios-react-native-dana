import React, { useState } from 'react';
import { StyleSheet, Text, View, TextInput, TouchableOpacity, ScrollView, Platform } from 'react-native';
import { StatusBar } from 'expo-status-bar';
import { Ionicons, MaterialCommunityIcons, FontAwesome5, Fontisto, Feather } from '@expo/vector-icons';

export default function App() {
  const [edad, setEdad] = useState('');
  const [resultados, setResultados] = useState(null);

  const calcular = () => {
    const años = parseInt(edad, 10);
    if (!isNaN(años)) {
      const decadas = Math.floor(años / 10);
      const lustros = Math.floor(años / 5);
      const meses = años * 12;
      const semanas = años * 52;
      const dias = años * 365;
      const horas = dias * 24;
      const minutos = horas * 60;

      setResultados({
        decadas,
        lustros,
        años,
        meses,
        semanas,
        dias,
        horas,
        minutos,
      });
    }
  };

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <View style={styles.card}>
        <Text style={styles.titulo}>
          <Ionicons name="hourglass-outline" size={28} color="#6366f1" /> Calculadora de Edad
        </Text>
        <TextInput
          style={styles.input}
          placeholder="Edad en años"
          keyboardType="numeric"
          placeholderTextColor="#b2bec3"
          value={edad}
          onChangeText={setEdad}
        />
        <TouchableOpacity style={styles.boton} onPress={calcular}>
          <Text style={styles.botonTexto}>Calcular</Text>
        </TouchableOpacity>
        {resultados && (
          <View style={styles.resultados}>
            <View style={styles.row}>
              <FontAwesome5 name="decade" size={22} color="#6366f1" style={styles.icono} />
              <Text style={styles.resultadoTexto}>Décadas: <Text style={styles.valor}>{resultados.decadas}</Text></Text>
            </View>
            <View style={styles.row}>
              <MaterialCommunityIcons name="roman-numeral-v" size={22} color="#00b894" style={styles.icono} />
              <Text style={styles.resultadoTexto}>Lustros: <Text style={styles.valor}>{resultados.lustros}</Text></Text>
            </View>
            <View style={styles.row}>
              <Ionicons name="calendar-outline" size={22} color="#6366f1" style={styles.icono} />
              <Text style={styles.resultadoTexto}>Años: <Text style={styles.valor}>{resultados.años}</Text></Text>
            </View>
            <View style={styles.row}>
              <Fontisto name="date" size={22} color="#00b894" style={styles.icono} />
              <Text style={styles.resultadoTexto}>Meses: <Text style={styles.valor}>{resultados.meses}</Text></Text>
            </View>
            <View style={styles.row}>
              <Feather name="calendar" size={22} color="#6366f1" style={styles.icono} />
              <Text style={styles.resultadoTexto}>Semanas: <Text style={styles.valor}>{resultados.semanas}</Text></Text>
            </View>
            <View style={styles.row}>
              <Ionicons name="sunny-outline" size={22} color="#00b894" style={styles.icono} />
              <Text style={styles.resultadoTexto}>Días: <Text style={styles.valor}>{resultados.dias}</Text></Text>
            </View>
            <View style={styles.row}>
              <Ionicons name="time-outline" size={22} color="#6366f1" style={styles.icono} />
              <Text style={styles.resultadoTexto}>Horas: <Text style={styles.valor}>{resultados.horas}</Text></Text>
            </View>
            <View style={styles.row}>
              <MaterialCommunityIcons name="timer-sand" size={22} color="#00b894" style={styles.icono} />
              <Text style={styles.resultadoTexto}>Minutos: <Text style={styles.valor}>{resultados.minutos}</Text></Text>
            </View>
          </View>
        )}
        <StatusBar style="auto" />
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    backgroundColor: '#f6f7fb',
    alignItems: 'center',
    justifyContent: 'center',
    paddingVertical: 40,
  },
  card: {
    backgroundColor: '#fff',
    borderRadius: 18,
    padding: 30,
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
    color: '#6366f1',
    fontWeight: 'bold',
    fontSize: 16,
  },
});
