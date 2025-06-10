import React, { useState } from 'react';
import { StyleSheet, Text, View, TextInput, TouchableOpacity, Platform } from 'react-native';
import { StatusBar } from 'expo-status-bar';

export default function App() {
  const [horaActual, setHoraActual] = useState('');
  const [cantidadHoras, setCantidadHoras] = useState('');
  const [horaFinal, setHoraFinal] = useState(null);

  const calcularHora = () => {
    const t = parseInt(horaActual, 10);
    const h = parseInt(cantidadHoras, 10);

    if (!isNaN(t) && !isNaN(h)) {
      const resultado = ((t + h - 1) % 12) + 1;
      setHoraFinal(resultado);
    }
  };

  return (
    <View style={styles.background}>
      <View style={styles.card}>
        <Text style={styles.titulo}>Calculadora de la Hora</Text>
        <TextInput
          style={styles.input}
          placeholder="Hora actual"
          keyboardType="numeric"
          placeholderTextColor="#b2bec3"
          value={horaActual}
          onChangeText={setHoraActual}
        />
        <TextInput
          style={styles.input}
          placeholder="Cantidad de horas"
          keyboardType="numeric"
          placeholderTextColor="#b2bec3"
          value={cantidadHoras}
          onChangeText={setCantidadHoras}
        />
        <TouchableOpacity style={styles.boton} onPress={calcularHora}>
          <Text style={styles.botonTexto}>Calcular</Text>
        </TouchableOpacity>
        {horaFinal !== null && (
          <Text style={styles.resultado}>
            En {cantidadHoras} horas, el reloj marcará las <Text style={styles.valor}>{horaFinal}</Text>
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
    fontSize: 24,
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
    width: 200,
    marginBottom: 16,
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
