import { StyleSheet, Text, TouchableWithoutFeedback, View } from "react-native";
import React, { useState } from "react";
import CircularProgress from "react-native-circular-progress-indicator";

const Timer = () => {
  const [timerActive, setTimerActive] = useState(false);

  function _onPressButton() {
    alert("You tapped the button!");
  }

  function CircularProgressBar() {
    if (!timerActive)
      return (
        <View>
          <TouchableWithoutFeedback
            onPress={() => {
              setTimerActive(true);
            }}
          >
            <View>
              <CircularProgress
                value={10}
                radius={120}
                maxValue={10}
                initialValue={10}
                activeStrokeColor={"white"}
                inActiveStrokeColor={"black"}
                activeStrokeWidth={15}
                inActiveStrokeWidth={15}
                showProgressValue={false}
              />
            </View>
          </TouchableWithoutFeedback>
        </View>
      );
    return (
      <View>
        <CircularProgress
          value={0}
          radius={120}
          maxValue={10}
          initialValue={10}
          activeStrokeColor={"white"}
          inActiveStrokeColor={"black"}
          activeStrokeWidth={15}
          inActiveStrokeWidth={15}
          showProgressValue={false}
          duration={10000}
          onAnimationComplete={() => setTimerActive(false)}
        />
      </View>
    );
  }

  return (
    <View>
      <CircularProgressBar />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: "blue",
    width: "100%",
    height: "100%",
    justifyContent: "center",
    alignItems: "center",
  },

  inner: { backgroundColor: "blue", width: "100%", height: "100%" },
});

export default Timer;
