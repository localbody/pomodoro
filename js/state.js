const WORK_TIME = 1 // время работы в минутах
const BREAK_TIME = 1 // время перерыва в работе в минутах
const RELAX_TIME = 1 // время отдыха в минутах
const WORK_PAUSE_COUNT = 3 // количество циклов "работа-пауза"
const WORK = 'work' // статус помодоро
const BREAK = 'break' // статус помодоро
const RELAX = 'relax' // статус помодоро

export const state = {
  //
  timeWork: WORK_TIME * 60, //
  timeBreak: BREAK_TIME * 60, //
  timeRelax: RELAX_TIME * 60, //
  timeWorkLeft: WORK_TIME * 60, // оставшееся время в секундах
  statusPomodoro: RELAX, // статус помодоро
  isActive: false, // таймер запущен
  timerId: null, //
}
