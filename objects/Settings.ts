export interface ISettings {
  pomodoroTime: number;
  breakTime: number;
  longBreakTime: number;
  dailyGoal: number;
  longBreakRequirement: number;
  backgroundColor: string;
  playSound: boolean;
  vibrate: boolean;
  autostartBreaks: boolean;
  autostartPomodoro: boolean;
  showNotifications: boolean;
  keepPhoneAwake: boolean;
}

export const DEFAULT_SETTINGS: ISettings = {
  pomodoroTime: 25,
  breakTime: 5,
  longBreakTime: 15,
  dailyGoal: 8,
  longBreakRequirement: 4,
  backgroundColor: "#4A4B4F",
  playSound: true,
  vibrate: true,
  autostartBreaks: true,
  autostartPomodoro: false,
  showNotifications: true,
  keepPhoneAwake: true,
};

export let appSettings: ISettings = DEFAULT_SETTINGS;
