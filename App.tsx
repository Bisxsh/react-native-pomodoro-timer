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
import { AppSettings } from "./objects/Settings";
import Settings from "./screens/Settings/Settings";
import Timer from "./screens/Timer";

export default function App() {
  const [menuActive, setMenuActive] = useState(true);
  const [appSetings, setAppSettings] = useState(new AppSettings());

  function getMainView() {
    if (!menuActive)
      return (
        <View style={[styles.container, styles.mainContainer]}>
          <Timer />
        </View>
      );
    return <Settings settings={appSetings} setSettings={setAppSettings} />;
  }

  function toggleMenu() {
    setMenuActive(!menuActive);
  }

  return (
    <View style={styles.container}>
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
  );
}

const styles = StyleSheet.create({
  mainContainer: {
    alignItems: "center",
    justifyContent: "center",
  },

  container: {
    flex: 1,
    backgroundColor: "#4A4B4F",
  },

  menu: {
    alignSelf: "flex-end",
    marginRight: 20,
    marginTop: 50,
  },
});
