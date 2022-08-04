import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import React, { useContext } from "react";
import { SettingsContext } from "../../../objects/Settings";

const ColourButton = (props: any) => {
  const settingsObj = useContext(SettingsContext);
  const isActive = getBackgroundColor() == props.colour;

  function getBackgroundColor(): string {
    return settingsObj.appSettings.backgroundColor;
  }

  function setActive() {
    console.log();
  }

  function getIndicator() {
    if (!isActive) return;
    return (
      <View style={styles.selected}>
        <View
          style={[
            styles.tickLeftDash,
            { backgroundColor: getBackgroundColor() },
          ]}
        ></View>
        <View
          style={[
            styles.tickRightDash,
            { backgroundColor: getBackgroundColor() },
          ]}
        ></View>
      </View>
    );
  }

  const styles = StyleSheet.create({
    container: {
      aspectRatio: 1,
      width: 50,
      position: "relative",
      justifyContent: "center",
      alignItems: "center",
    },

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

  return (
    <TouchableOpacity
      style={[styles.container, { backgroundColor: props.colour }]}
      onPress={setActive}
    >
      {getIndicator()}
    </TouchableOpacity>
  );
};

export default ColourButton;
