import {
  Image,
  StyleSheet,
  Text,
  TouchableWithoutFeedback,
  View,
} from "react-native";
import React, { useState } from "react";
import CircularProgress, {
  CircularProgressBase,
} from "react-native-circular-progress-indicator";

const Timer = () => {
  const [timerActive, setTimerActive] = useState(false);

  function _onPressButton() {
    alert("You tapped the button!");
  }

  function CircularProgressBar() {
    return (
      <View>
        <TouchableWithoutFeedback
          onPress={() => {
            setTimerActive(true);
          }}
        >
          <View style={styles.timerContainer}>
            <CircularProgress
              value={timerActive ? 0 : 100}
              radius={120}
              maxValue={100}
              initialValue={timerActive ? 100 : 0}
              activeStrokeColor={"white"}
              inActiveStrokeColor={"black"}
              activeStrokeWidth={15}
              inActiveStrokeWidth={15}
              showProgressValue={false}
              duration={timerActive ? 1000 : undefined}
              onAnimationComplete={() =>
                timerActive ? setTimerActive(false) : null
              }
            />
          </View>
        </TouchableWithoutFeedback>
        <TouchableWithoutFeedback
          onPress={() => {
            setTimerActive(true);
          }}
          style={{ position: "absolute" }}
        >
          <View style={styles.playContainer}>
            {!timerActive && (
              <Image
                source={require("../assets/controller-play.png")}
                style={styles.playButton}
              />
            )}
          </View>
        </TouchableWithoutFeedback>
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
  timerContainer: {
    transform: [{ scaleX: -1 }],
  },

  playButton: {
    width: 100,
    height: 100,
  },

  playContainer: {
    position: "absolute",
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    justifyContent: "center",
    alignItems: "center",
  },
});

export default Timer;
