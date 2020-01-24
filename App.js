import React, { useState } from "react";
import { StyleSheet, Text, View, Button } from "react-native";

export default function App() {
  const [outputText, setOutputText] = useState("Hiiiiii 😄");
  return (
    <View style={styles.container}>
      <Text>{outputText}</Text>
      <Button
        title="Press Here"
        onPress={() => setOutputText(" انت مبقتش تحبني زي الاول😞 ")}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#E8DB72",
    alignItems: "center",
    justifyContent: "center"
  }
});
