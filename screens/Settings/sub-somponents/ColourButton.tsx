import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import React, { useContext } from "react";
import { SettingsContext } from "../../../objects/Settings";
import TickIndicator from "./TickIndicator";

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
    return <TickIndicator />;
  }

  const styles = StyleSheet.create({
    container: {
      aspectRatio: 1,
      height: 50,
      position: "relative",
      justifyContent: "center",
      alignItems: "center",
      borderRadius: 5,
      margin: 5,
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
