import { StyleSheet, Text, TextInput, View } from "react-native";
import React, { useState } from "react";

const NumberSettingsOption = (props: any) => {
  const displayValue = props.displayValue;
  const setSettings = props.setSettings;
  const attribute = props.attribute;
  const prompt = props.prompt;

  const siblings = props.siblings;

  function textChanged(text: string) {
    setSettings((s: any) => {
      return {
        ...s,
        [attribute]: text.replace(/[^0-9]/g, ""),
      };
    });
  }

  return (
    <View
      style={[styles.container, siblings == 2 ? styles.large : styles.small]}
    >
      <TextInput
        keyboardType="number-pad"
        onChangeText={textChanged}
        maxLength={2}
        value={"" + displayValue}
        style={styles.value}
      ></TextInput>
      <Text style={styles.prompt}>{prompt}</Text>
    </View>
  );
};

export default NumberSettingsOption;

const styles = StyleSheet.create({
  container: {
    backgroundColor: "rgba(52, 52, 52, 0.5)",
    alignSelf: "flex-start",
    padding: 20,
    paddingRight: 30,
    paddingLeft: 30,
    alignItems: "center",
    justifyContent: "center",
    margin: 10,
    borderRadius: 5,
  },

  small: {
    minWidth: 100,
  },

  large: {
    minWidth: 170,
  },

  value: {
    fontSize: 40,
    color: "#fff",
    marginBottom: 5,
  },

  prompt: {
    fontSize: 10,
    color: "#a3a6b3",
  },
});
