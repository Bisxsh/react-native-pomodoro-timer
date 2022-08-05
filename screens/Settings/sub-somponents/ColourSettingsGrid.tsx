import { View, Text, StyleSheet } from "react-native";
import React from "react";
import ColourButton from "./ColourButton";

const ColourSettingsGrid = () => {
  return (
    <View style={styles.container}>
      <ColourButton colour="hsl(325, 20%, 50%)" />
      <ColourButton colour="hsl(350, 20%, 50%)" />
      <ColourButton colour="hsl(300, 20%, 50%)" />
      <ColourButton colour="hsl(250, 20%, 50%)" />
      <ColourButton colour="hsl(200, 20%, 50%)" />
      <ColourButton colour="hsl(175, 20%, 50%)" />
      <ColourButton colour="hsl(150, 20%, 50%)" />
      <ColourButton colour="hsl(125, 20%, 50%)" />
      <ColourButton colour="hsl(100, 20%, 50%)" />
      <ColourButton colour="hsl(228, 3%, 50%)" />
      <ColourButton colour="hsl(325, 20%, 30%)" />
      <ColourButton colour="hsl(350, 20%, 30%)" />
      <ColourButton colour="hsl(300, 20%, 30%)" />
      <ColourButton colour="hsl(250, 20%, 30%)" />
      <ColourButton colour="hsl(200, 20%, 30%)" />
      <ColourButton colour="hsl(175, 20%, 30%)" />
      <ColourButton colour="hsl(150, 20%, 30%)" />
      <ColourButton colour="hsl(125, 20%, 30%)" />
      <ColourButton colour="hsl(100, 20%, 30%)" />
      <ColourButton colour="hsl(228, 3%, 30%)" />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    flexWrap: "wrap",
    flexBasis: "auto",
    justifyContent: "space-around",
    alignItems: "center",
  },
});

export default ColourSettingsGrid;
