type pomodoro =
  | Stopped
  | Break(int)
  | Cycle(int);