import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import CircularProgress from "react-native-circular-progress-indicator";
import Timer from "./screens/Timer";

export default function App() {
  return (
    <View style={styles.container}>
      <StatusBar style="auto" />

      <Timer />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#4A4B4F",
    alignItems: "center",
    justifyContent: "center",
  },
});
