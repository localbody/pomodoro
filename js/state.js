const WORK_TIME = 1 // в минутах

export const state = {
  //
  timeLeft: WORK_TIME * 60, // оставшееся время в секундах
  isActive: false, // таймер запущен
  timerId: null,
}
