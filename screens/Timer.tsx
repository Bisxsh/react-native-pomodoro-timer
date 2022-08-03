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
  const [paused, setPaused] = useState(false);
  const [timeRemaining, setTimeRemaining] = useState(100);
  const [timeRemainingText, setTimeRemainingText] = useState("");

  const [timerId, setTimerId] = useState<any>(null);

  function start() {
    if (timeRemaining == 0) {
      reset();
    } else {
      tick();
    }
  }

  function pause() {
    setTimerActive(false);
    setPaused(true);

    if (timerId != null) {
      window.clearInterval(timerId);
      setTimerId(null);
    }
  }

  function reset() {
    pause();
    setTimeRemaining(100);
    tick();
  }

  function tick() {
    setTimerActive(true);
    let id = window.setInterval(function () {
      if (0 >= timeRemaining) {
        pause();
        return;
      }
      setTimeRemainingText("" + timeRemaining);
      setTimeRemaining((t) => t - 1);
      console.log(timeRemaining);
    }, 1000);
    setTimerId(id);
  }

  const handleOnClick = () => {
    if (timerActive) {
      pause();
      return;
    }
    start();
  };

  function CircularProgressBar() {
    return (
      <View>
        <TouchableWithoutFeedback onPress={handleOnClick} onLongPress={reset}>
          <View style={styles.timerContainer}>
            <CircularProgress
              value={timeRemaining}
              radius={120}
              maxValue={100}
              initialValue={
                timerActive ? timeRemaining + 1 : paused ? timeRemaining : 0
              }
              activeStrokeColor={"white"}
              inActiveStrokeColor={"black"}
              activeStrokeWidth={15}
              inActiveStrokeWidth={15}
              showProgressValue={false}
            />
          </View>
        </TouchableWithoutFeedback>
        <TouchableWithoutFeedback
          onPress={handleOnClick}
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
