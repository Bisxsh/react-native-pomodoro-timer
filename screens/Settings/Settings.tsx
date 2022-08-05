import {
  View,
  StyleSheet,
  Text,
  ScrollViewComponent,
  ScrollView,
} from "react-native";
import React from "react";
import NumberSettingsOption from "./sub-somponents/NumberSettingsOption";
import ColourSettingsGrid from "./sub-somponents/ColourSettingsGrid";
import BooleanSettingsOption from "./sub-somponents/BooleanSettingsOption";

const Settings = (props: any) => {
  const settings = props.appSettings;

  const setSettings = props.setSettings;

  function getDurationSection() {
    return (
      <View style={styles.numberOptionRow}>
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

  function getGoalPreferences() {
    return (
      <View>
        <View style={styles.numberOptionRow}>
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

  function getOtherPreferences() {
    return (
      <View>
        <BooleanSettingsOption />
        <BooleanSettingsOption />
        <BooleanSettingsOption />
        <BooleanSettingsOption />
        <BooleanSettingsOption />
        <BooleanSettingsOption />
      </View>
    );
  }

  return (
    <ScrollView>
      <Text style={styles.sectionHeading}>Duration</Text>
      <View>{getDurationSection()}</View>
      <Text style={styles.sectionHeading}>Goal Preferences</Text>
      <View>{getGoalPreferences()}</View>

      <Text style={styles.sectionHeading}>Background Colour</Text>
      <View style={styles.colourGrid}>
        <ColourSettingsGrid />
      </View>

      <Text style={styles.sectionHeading}>Other Preferences</Text>
      <View style={styles.otherPreferences}>{getOtherPreferences()}</View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  numberOptionRow: {
    flexDirection: "row",
    justifyContent: "space-around",
    alignItems: "center",
  },

  sectionHeading: {
    fontSize: 10,
    color: "#a3a6b3",
    alignSelf: "center",
    margin: 10,
    textTransform: "uppercase",
  },

  colourGrid: {
    backgroundColor: "rgba(52, 52, 52, 0.3)",
    margin: 10,
    padding: 10,
    height: "auto",
    borderRadius: 5,
  },

  otherPreferences: {},
});

export default Settings;
