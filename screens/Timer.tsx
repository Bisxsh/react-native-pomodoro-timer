import {
  Image,
  StyleSheet,
  Text,
  TouchableOpacity,
  TouchableWithoutFeedback,
  useWindowDimensions,
  Vibration,
  View,
} from "react-native";
import React, { ReactElement, useContext, useEffect, useState } from "react";
import CircularProgress from "react-native-circular-progress-indicator";
import { SettingsContext } from "../objects/Settings";
import { activateKeepAwake, deactivateKeepAwake } from "expo-keep-awake";
import useInterval from "../hooks/useInterval";

enum Modes {
  POMODORO,
  BREAK,
  LONG_BREAK,
}

const Timer = () => {
  const settingsObj = useContext(SettingsContext);
  const [timerActive, setTimerActive] = useState(false);
  const [paused, setPaused] = useState(false);
  const [timeRemaining, setTimeRemaining] = useState(8);
  const [mode, setMode] = useState(Modes.POMODORO);
  const [pomodorosCompleted, setPomodorosCompleted] = useState(0);
  const [timerId, setTimerId] = useState<any>(null);

  function getTimeInSeconds(mins: number) {
    return mins * 60;
  }

  function getTimerMaxValue() {
    let mins: number;
    switch (mode) {
      default:
      case Modes.POMODORO:
        mins = settingsObj.appSettings.pomodoroTime;
        break;

      case Modes.BREAK:
        mins = settingsObj.appSettings.breakTime;
        break;

      case Modes.LONG_BREAK:
        mins = settingsObj.appSettings.longBreakTime;
        break;
    }
    console.log("Mins: " + mins);
    return getTimeInSeconds(mins);
  }

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
      if ((i + 1) % 4 == 0) {
        indicators.push(
          <Text
            style={[styles.indicator, styles.hidden]}
            key={`indicatorBlank${i}`}
          >
            .
          </Text>
        );
      }
    }

    return indicators;
  }

  function getNextMode() {
    if (mode !== Modes.POMODORO) return Modes.POMODORO;

    setPomodorosCompleted((i) => i + 1);

    if (pomodorosCompleted % 4 === 0 && pomodorosCompleted !== 0)
      return Modes.LONG_BREAK;
    return Modes.BREAK;
  }

  function getTimeRemainingText(): string {
    let seconds = timeRemaining % 60;
    return (
      Math.floor(timeRemaining / 60) + ":" + (seconds < 10 ? "0" : "") + seconds
    );
  }

  function startTimer() {
    if (settingsObj.appSettings.keepPhoneAwake) activateKeepAwake();
    if (timeRemaining == 0) {
      resetTimer();
    } else {
      setTimerActive(true);
    }
  }
  const { width, height, scale, fontScale } = useWindowDimensions();

  function pauseTimer() {
    if (timerId != null) {
      window.clearInterval(timerId);
      setTimerId(null);
    }
    if (settingsObj.appSettings.keepPhoneAwake) deactivateKeepAwake();
    setTimerActive(false);
    setPaused(true);
  }

  useInterval(() => {
    if (!timerActive) return;
    if (timeRemaining <= 1) {
      setMode(getNextMode());
      if (settingsObj.appSettings.vibrate) Vibration.vibrate(600);
      window.clearInterval(timerId);
      resetTimer();
      return;
    }
    setTimeRemaining(timeRemaining - 1);
  }, 1000);

  const handleOnClick = () => {
    if (timerActive) {
      pauseTimer();
      return;
    }
    startTimer();
  };

  useEffect(() => {
    resetTimer(false);
  }, [mode]);

  const cycleMode = () => {
    if (timerActive) return;
    setMode((m) => (m + 1) % 3);
  };

  const resetTimer = (canStart: boolean = true) => {
    pauseTimer();
    setPaused(false);
    console.log(mode);
    setTimeRemaining(getTimerMaxValue());
    if (
      mode == Modes.POMODORO &&
      settingsObj.appSettings.autostartBreaks &&
      canStart
    ) {
      startTimer();
      return;
    }
    if (settingsObj.appSettings.autostartPomodoro && canStart) startTimer();
  };

  function CircularProgressBar() {
    return (
      <View>
        <View style={styles.timerContainer}>
          <CircularProgress
            value={timeRemaining}
            radius={120}
            maxValue={getTimerMaxValue()}
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
          onLongPress={() => resetTimer(false)}
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
      <View style={styles.indicatorContainer}>{getProgressIndicators()}</View>
      <TouchableOpacity onPress={cycleMode}>
        <View style={styles.textContainer}>
          {!timerActive && (
            <Image
              source={require("../assets/scroll.png")}
              style={styles.textScroll}
            />
          )}
          <Text style={styles.timerText}>
            {Modes[mode].replace("_", " ")} - {getTimeRemainingText()}
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
    marginTop: 70,
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
    fontSize: 35,
    margin: 3,
  },

  indicatorContainer: {
    flexDirection: "row",
    alignItems: "center",
    paddingLeft: 20,
    justifyContent: "center",
    marginTop: 0,
  },
});

export default Timer;
