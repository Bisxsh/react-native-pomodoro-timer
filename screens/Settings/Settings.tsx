import { View, Text } from "react-native";
import React from "react";
import NumberSettingsOption from "./sub-somponents/NumberSettingsOption";

const Settings = (props: any) => {
  const settings = props.settings;
  const setSettings = props.setSettings;

  return (
    <View>
      <NumberSettingsOption
        settings={settings}
        setSettings={setSettings}
        attribute={"pomodoroTime"}
        value={settings.pomodoroTime}
        prompt={"POMODORO"}
      />
    </View>
  );
};

export default Settings;
