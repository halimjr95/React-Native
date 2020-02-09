import React, { useState } from "react";
import { Text, View, StyleSheet } from "react-native";

import Color from "../constants/Color";

const NumberContainer = props => {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>{props.children}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    borderColor: Color.accent,
    borderWidth: 2,
    borderRadius: 10,
    marginVertical: 10,
    padding: 10,
    alignItems: "center",
    justifyContent: "center"
  },
  text: {
    color: Color.accent,
    fontSize: 22
  }
});

export default NumberContainer;
