import React from "react";
import { StatusBar } from 'expo-status-bar';
import reactDom from 'react-dom';
import { StyleSheet, Text, View, SafeAreaView, TextInput, Button, Alert } from 'react-native';

export default function App() {

  const [number, onChangeNumber] = React.useState(null);

  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.titulo}>Calculadora</Text>
      <StatusBar style="auto" />

      <TextInput
        style={styles.input}
        onChangeText={(numero1) => this.setState({ numero1 })}
        value={number}
        placeholder="Numero 1"
        keyboardType="numeric"
      />
      <TextInput
        style={styles.input}
        onChangeText={onChangeNumber}
        value={number}
        placeholder="Numero 2"
        keyboardType="numeric"
      />
      <Button
        title="Suma"
        color="#841584"
        onPress={() => Alert.alert('Se oprimio el boton')}
      />
      <View style={styles.fixToText}>
        <Button
          title="Resta"
          onPress={() => Alert.alert('Left button pressed')}
        />
        <Button
          title="Multiplicacion"
          onPress={() => Alert.alert('Right button pressed')}
        />
        <Button
          title="Division"
          onPress={() => Alert.alert('Left button pressed')}
        />
        <Button
          title="Potenciacion"
          onPress={() =>console.log('Right button pressed')}
        />
      </View>
      
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 0.5,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  titulo: {
    fontSize: 50,
    color: 'red',
    alignItems: 'center',
    justifyContent: 'center',
  },
  fixToText: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  input: {
    height: 40,
    margin: 12,
    borderWidth: 1,
    padding: 10,
  },
});
