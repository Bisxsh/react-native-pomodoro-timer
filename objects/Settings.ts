export class AppSettings {
  settings: ISettings;

  constructor() {
    this.settings = DEFAULT_SETTINGS;
  }
}

export interface ISettings {
  pomodoroTime: number;
  breakTime: number;
  longBreakTime: number;
  backgroundColor: string;
  dailyGoal: number;
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
  backgroundColor: "#4A4B4F",
  dailyGoal: 8,
  playSound: true,
  vibrate: true,
  autostartBreaks: true,
  autostartPomodoro: false,
  showNotifications: true,
  keepPhoneAwake: true,
};
