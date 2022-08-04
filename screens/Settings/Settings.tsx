import { View, StyleSheet, Text } from "react-native";
import React from "react";
import NumberSettingsOption from "./sub-somponents/NumberSettingsOption";

const Settings = (props: any) => {
  const settings = props.appSettings;

  const setSettings = props.setSettings;

  function getDurationSection() {
    return (
      <View style={styles.durationSection}>
        <NumberSettingsOption
          settings={settings}
          setSettings={setSettings}
          attribute={"pomodoroTime"}
          displayValue={settings.pomodoroTime}
          prompt={"POMODORO"}
          siblings={3}
        />
        <NumberSettingsOption
          settings={settings}
          setSettings={setSettings}
          attribute={"breakTime"}
          displayValue={settings.breakTime}
          prompt={"BREAK"}
          siblings={3}
        />
        <NumberSettingsOption
          settings={settings}
          setSettings={setSettings}
          attribute={"longBreakTime"}
          displayValue={settings.longBreakTime}
          prompt={"LONG BREAK"}
          siblings={3}
        />
      </View>
    );
  }

  function getOtherPreferences() {
    return (
      <View>
        <View style={styles.durationSection}>
          <NumberSettingsOption
            settings={settings}
            setSettings={setSettings}
            attribute={"longBreakRequirement"}
            displayValue={settings.longBreakRequirement}
            prompt={"SESSIONS FOR LONG BREAK"}
            siblings={2}
          />
          <NumberSettingsOption
            settings={settings}
            setSettings={setSettings}
            attribute={"dailyGoal"}
            displayValue={settings.dailyGoal}
            prompt={"DAILY GOAL"}
            siblings={2}
          />
        </View>
      </View>
    );
  }

  return (
    <View>
      <Text style={styles.sectionHeading}>DURATION</Text>
      <View>{getDurationSection()}</View>
      <Text style={styles.sectionHeading}>GOAL PREFERENCES</Text>
      <View>{getOtherPreferences()}</View>
    </View>
  );
};

const styles = StyleSheet.create({
  durationSection: {
    flexDirection: "row",
    justifyContent: "space-around",
    alignItems: "center",
  },

  sectionHeading: {
    fontSize: 10,
    color: "#a3a6b3",
    alignSelf: "center",
    margin: 10,
  },
});

export default Settings;
