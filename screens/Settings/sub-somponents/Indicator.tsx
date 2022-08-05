import { StyleSheet, View } from "react-native";
import React, { useContext } from "react";
import { SettingsContext } from "../../../objects/Settings";

const Indicator = ({ large, isTick }: any) => {
  const settingsObj = useContext(SettingsContext);
  const backgroundColor = settingsObj.appSettings.backgroundColor;

  return (
    <View style={[styles.container, { width: large ? 40 : 30 }]}>
      <View
        style={[
          isTick ? styles.tickLeftDash : styles.crossLeftDash,
          { backgroundColor: backgroundColor },
        ]}
      ></View>
      <View
        style={[
          isTick ? styles.tickRightDash : styles.crossRightDash,
          { backgroundColor: backgroundColor },
        ]}
      ></View>
    </View>
  );
};

export default Indicator;

const styles = StyleSheet.create({
  container: {
    aspectRatio: 1,
    borderRadius: 100,
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
    height: 12,
    justifyContent: "center",
    transform: [{ rotate: "45deg" }, { translateX: 2 }],
    position: "absolute",
  },

  crossLeftDash: {
    width: 2,
    height: 12,
    justifyContent: "center",
    transform: [{ rotate: "135deg" }],
    position: "absolute",
  },

  crossRightDash: {
    width: 2,
    height: 12,
    justifyContent: "center",
    transform: [{ rotate: "45deg" }],
    position: "absolute",
  },
});

Indicator.defaultProps = {
  colour: "white",
};
