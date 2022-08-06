import { StatusBar } from "expo-status-bar";
import { useState } from "react";
import {
  Image,
  SafeAreaView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import { DEFAULT_SETTINGS, SettingsContext } from "./objects/Settings";
import Settings from "./screens/Settings/Settings";
import Timer from "./screens/Timer";

export default function App() {
  const [menuActive, setMenuActive] = useState(false);
  const [appSettings, setAppSettings] = useState(DEFAULT_SETTINGS);

  function getMainView() {
    if (!menuActive)
      return (
        <View style={[styles.container, styles.mainContainer]}>
          <Timer />
        </View>
      );
    return <Settings appSettings={appSettings} setSettings={setAppSettings} />;
  }

  function toggleMenu() {
    setMenuActive(!menuActive);
  }

  return (
    <SettingsContext.Provider
      value={{ setAppSettings: setAppSettings, appSettings: appSettings }}
    >
      <View
        style={[
          styles.container,
          { backgroundColor: appSettings.backgroundColor },
        ]}
      >
        <StatusBar style="auto"></StatusBar>
        <SafeAreaView style={styles.container}>
          <TouchableOpacity
            onPress={toggleMenu}
            style={{ alignSelf: "flex-end" }}
          >
            <Image source={require("./assets/menu.png")} style={styles.menu} />
          </TouchableOpacity>

          {getMainView()}
        </SafeAreaView>
      </View>
    </SettingsContext.Provider>
  );
}

const styles = StyleSheet.create({
  mainContainer: {
    alignItems: "center",
    justifyContent: "center",
  },

  container: {
    flex: 1,
  },

  menu: {
    alignSelf: "flex-end",
    marginRight: 20,
    marginTop: 50,
  },
});
