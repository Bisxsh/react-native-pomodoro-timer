import { StyleSheet, View } from "react-native";
import React from "react";

const TickIndicator = ({ bgColour }: any) => {
  return (
    <View style={styles.selected}>
      <View style={[styles.tickLeftDash, { backgroundColor: bgColour }]}></View>
      <View
        style={[styles.tickRightDash, { backgroundColor: bgColour }]}
      ></View>
    </View>
  );
};

export default TickIndicator;

const styles = StyleSheet.create({
  selected: {
    aspectRatio: 1,
    borderRadius: 100,
    width: 30,
    backgroundColor: "white",
    justifyContent: "center",
    alignItems: "center",
  },

  tickLeftDash: {
    width: 2,
    height: 5,
    justifyContent: "center",
    transform: [{ rotate: "135deg" }, { translateX: 5 }],
    position: "absolute",
  },

  tickRightDash: {
    width: 2,
    height: 10,
    justifyContent: "center",
    transform: [{ rotate: "45deg" }, { translateX: 2 }],
    position: "absolute",
  },
});

TickIndicator.defaultProps = {
  colour: "white",
};
