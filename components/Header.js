import React from "react";
import { View, StyleSheet, Text } from "react-native";
import Color from "../constants/Color";

const Header = props => {
  return (
    <View style={styles.header}>
      <Text style={styles.title}>{props.title}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  header: {
    width: "100%",
    height: 100,
    backgroundColor: Color.primary,
    alignItems: "center",
    justifyContent: "center"
  },
  title: {
    fontSize: 20,
    marginTop: 20
  }
});

export default Header;
