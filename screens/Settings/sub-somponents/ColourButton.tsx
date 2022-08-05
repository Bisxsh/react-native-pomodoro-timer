import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import React, { useContext } from "react";
import { SettingsContext } from "../../../objects/Settings";
import Indicator from "./Indicator";

const ColourButton = (props: any) => {
  const settingsObj = useContext(SettingsContext);
  const isActive = getBackgroundColor() == props.colour;

  function getBackgroundColor(): string {
    return settingsObj.appSettings.backgroundColor;
  }

  function setActive() {
    settingsObj.setAppSettings((s) => {
      return {
        ...s,
        backgroundColor: props.colour,
      };
    });
  }

  function getIndicator() {
    if (!isActive) return;
    return <Indicator large={false} isTick={true} />;
  }

  const styles = StyleSheet.create({
    container: {
      aspectRatio: 1,
      height: 50,
      position: "relative",
      justifyContent: "center",
      alignItems: "center",
      borderRadius: 5,
      margin: 10,
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
