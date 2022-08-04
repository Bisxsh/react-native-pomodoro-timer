import { View, Text, StyleSheet } from "react-native";
import React from "react";
import ColourButton from "./ColourButton";

const ColourSettingsGrid = () => {
  return (
    <View style={styles.container}>
      <ColourButton colour="#4A4B4F" />
      <ColourButton colour="#a0aee7" />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    margin: 10,
    backgroundColor: "rgba(52, 52, 52, 0.3)",
  },
});

export default ColourSettingsGrid;
