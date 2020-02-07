import React, { useState } from "react";
import { StyleSheet, Text, View, Button, TextInput } from "react-native";
import Header from "./components/Header";
import StartGameScreen from "./screens/StartGameScreen";

export default function App() {
  return (
    <View style={styles.container}>
      <Header title="Guess a Number" />
      <StartGameScreen />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1
  }
});
