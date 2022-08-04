import { StyleSheet, Text, TextInput, View } from "react-native";
import React, { useState } from "react";

const NumberSettingsOption = (props: any) => {
  const value = props.value;
  const setSettings = props.setSettings;
  const attribute = props.attribute;
  const prompt = props.prompt;

  function textChanged(text: string) {
    setSettings((s: any) => {
      return {
        ...s,
        [attribute]: text.replace(/[^0-9]/g, ""),
      };
    });
  }

  function submitChange() {
    // alert(test);
  }

  return (
    <View style={styles.container}>
      <TextInput
        keyboardType="number-pad"
        onChangeText={textChanged}
        maxLength={2}
        value={value}
        onBlur={submitChange}
        onSubmitEditing={submitChange}
        style={styles.value}
      ></TextInput>
      <Text style={styles.prompt}>{prompt}</Text>
    </View>
  );
};

export default NumberSettingsOption;

const styles = StyleSheet.create({
  container: {
    backgroundColor: "rgba(52, 52, 52, 0.3)",
    alignSelf: "flex-start",
    padding: 10,
    paddingRight: 20,
    paddingLeft: 20,
    alignItems: "center",
    justifyContent: "center",
  },

  value: {
    fontSize: 30,
    color: "#fff",
    marginBottom: 5,
  },

  prompt: {
    fontSize: 10,
    color: "#a3a6b3",
  },
});
