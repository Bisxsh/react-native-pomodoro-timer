import { StyleSheet, View } from "react-native";
import React, { useContext } from "react";
import { SettingsContext } from "../../../objects/Settings";

const CrossIndicator = () => {
  const settingsObj = useContext(SettingsContext);
  const backgroundColor = settingsObj.appSettings.backgroundColor;

  return (
    <View style={styles.selected}>
      <View
        style={[styles.tickLeftDash, { backgroundColor: backgroundColor }]}
      ></View>
      <View
        style={[styles.tickRightDash, { backgroundColor: backgroundColor }]}
      ></View>
    </View>
  );
};

export default CrossIndicator;

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
    height: 12,
    justifyContent: "center",
    transform: [{ rotate: "135deg" }],
    position: "absolute",
  },

  tickRightDash: {
    width: 2,
    height: 12,
    justifyContent: "center",
    transform: [{ rotate: "45deg" }],
    position: "absolute",
  },
});
