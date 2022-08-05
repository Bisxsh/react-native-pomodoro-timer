import { View, Text, StyleSheet, TouchableOpacity } from "react-native";
import React, { useContext, useEffect, useState } from "react";
import { ISettings, SettingsContext } from "../../../objects/Settings";
import Indicator from "./Indicator";

const BooleanSettingsOption = ({ attribute }: any) => {
  const { appSettings, setAppSettings } = useContext(SettingsContext);
  const label = attribute.replace(/([A-Z])/g, " $1").trim();

  function handleClick(value: boolean) {
    setAppSettings((s) => {
      return {
        ...s,
        [attribute]: value,
      };
    });
  }

  function getOpacity(isTick: boolean) {
    if (isTick)
      return {
        opacity: appSettings[attribute as keyof ISettings] ? 1 : 0.6,
      };
    return { opacity: !appSettings[attribute as keyof ISettings] ? 1 : 0.6 };
  }

  return (
    <View style={styles.container}>
      <View style={styles.buttonContainer}>
        <TouchableOpacity onPress={() => handleClick(false)}>
          <View style={getOpacity(false)}>
            <Indicator large={true} isTick={false} />
          </View>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => handleClick(true)}>
          <View style={getOpacity(true)}>
            <Indicator large={true} isTick={true} />
          </View>
        </TouchableOpacity>
      </View>
      <Text style={styles.label}>{label}</Text>
    </View>
  );
};

export default BooleanSettingsOption;

const styles = StyleSheet.create({
  container: {
    backgroundColor: "rgba(52, 52, 52, 0.5)",
    width: "auto",
    padding: 20,
    paddingRight: 30,
    paddingLeft: 30,
    alignItems: "center",
    justifyContent: "center",
    margin: 5,
    borderRadius: 5,
  },

  buttonContainer: {
    flexDirection: "row",
    width: 100,
    justifyContent: "space-between",
    marginBottom: 10,
  },

  label: {
    textTransform: "uppercase",
    fontSize: 10,
    color: "#a3a6b3",
  },
});
