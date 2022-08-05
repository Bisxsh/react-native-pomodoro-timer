import {
  Image,
  StyleSheet,
  Text,
  TouchableOpacity,
  TouchableWithoutFeedback,
  Vibration,
  View,
} from "react-native";
import React, { ReactElement, useContext, useEffect, useState } from "react";
import CircularProgress, {
  CircularProgressBase,
} from "react-native-circular-progress-indicator";
import { SettingsContext } from "../objects/Settings";

enum Modes {
  POMODORO,
  BREAK,
  LONG_BREAK,
}

const Timer = () => {
  const [timerActive, setTimerActive] = useState(false);
  const [paused, setPaused] = useState(false);
  const [timeRemaining, setTimeRemaining] = useState(100);
  const [timeRemainingText, setTimeRemainingText] = useState(
    getTimeRemainingText()
  );
  const [mode, setMode] = useState(Modes.POMODORO);
  const [indicators, setIndicators] = useState<ReactElement[]>(
    getProgressIndicators()
  );
  const [pomodorosCompleted, setPomodorosCompleted] = useState(0);
  const [timerId, setTimerId] = useState<any>(null);

  const settingsObj = useContext(SettingsContext);

  function getProgressIndicators() {
    let indicators: ReactElement[] = [];

    for (let i = 0; i < 8; i++) {
      indicators.push(
        <Text
          style={[
            styles.indicator,
            i < pomodorosCompleted ? styles.white : styles.indicator,
          ]}
          key={`indicator+${i}`}
        >
          .
        </Text>
      );
      if (i == 3) {
        indicators.push(
          <Text
            style={[styles.indicator, styles.hidden]}
            key={`indicatorBlank`}
          >
            .
          </Text>
        );
      }
    }

    return indicators;
  }

  function getNextMode() {
    if (mode != Modes.POMODORO) return Modes.POMODORO;

    setPomodorosCompleted((i) => i + 1);
    setIndicators(getProgressIndicators());

    if (pomodorosCompleted % 4 == 0 && pomodorosCompleted != 0)
      return Modes.LONG_BREAK;
    return Modes.BREAK;
  }

  function getTimeRemainingText(): string {
    let seconds = timeRemaining % 60;
    return (
      Math.floor(timeRemaining / 60) + ":" + (seconds < 10 ? "0" : "") + seconds
    );
  }

  useEffect(() => {
    setTimeRemainingText(getTimeRemainingText());
  }, [timeRemaining]);

  function startTimer() {
    if (timeRemaining == 0) {
      resetTimer();
    } else {
      tick();
    }
  }

  function pauseTimer() {
    if (timerId != null) {
      window.clearInterval(timerId);
      setTimerId(null);
    }
    setTimerActive(false);
    setPaused(true);
  }

  async function tick() {
    setTimerActive(true);
    let time = timeRemaining;
    let id = window.setInterval(function () {
      if (time <= 0) {
        resetTimer();
        setMode(getNextMode());
        if (settingsObj.appSettings.vibrate) Vibration.vibrate(600);
        window.clearInterval(id);
        return;
      }
      setTimeRemaining(time--);
    }, 1000);
    setTimerId(id);
  }

  const handleOnClick = () => {
    if (timerActive) {
      pauseTimer();
      return;
    }
    startTimer();
  };

  const cycleMode = () => {
    if (timerActive) return;
    setMode((m) => (m + 1) % 3);
    resetTimer();
  };

  const resetTimer = () => {
    pauseTimer();
    setPaused(false);
    setTimeRemaining(100);
  };

  function CircularProgressBar() {
    return (
      <View>
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

        <TouchableWithoutFeedback
          onPress={handleOnClick}
          onLongPress={resetTimer}
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
      <View style={styles.indicatorContainer}>{indicators}</View>
      <TouchableOpacity onPress={cycleMode}>
        <View style={styles.textContainer}>
          {!timerActive && (
            <Image
              source={require("../assets/scroll.png")}
              style={styles.textScroll}
            />
          )}
          <Text style={styles.timerText}>
            {Modes[mode].replace("_", " ")} - {timeRemainingText}
          </Text>
        </View>
      </TouchableOpacity>
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
    right: -10,
    bottom: -5,
    justifyContent: "center",
    alignItems: "center",
  },

  textContainer: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    alignSelf: "center",
    marginTop: 50,
  },

  timerText: {
    color: "#a3a6b3",
    fontSize: 12,
  },

  textScroll: {
    transform: [{ rotate: "90deg" }],
    aspectRatio: 1,
    width: 12,
    marginRight: 2,
  },

  white: {
    color: "#a3a6b3",
  },

  hidden: {
    color: "transparent",
  },

  indicator: {
    color: "#6a6c74",
    fontSize: 20,
    margin: 3,
  },

  indicatorContainer: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    marginTop: 20,
  },
});

export default Timer;
