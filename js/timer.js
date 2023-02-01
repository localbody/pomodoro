import {alarm} from './alarm.js'
import {state} from './state.js'

const showTime = (seconds) => {
  const elementTimeMinutes = document.querySelector('.time__minutes')
  const elementTimeSeconds = document.querySelector('.time__seconds')

  elementTimeMinutes.textContent = Math.floor(seconds / 60)
    .toString()
    .padStart(2, '0')

  elementTimeSeconds.textContent = (seconds % 60).toString().padStart(2, '0')
}

const startTimer = () => {
  // show on page
  showTime(state.timeLeft)

  state.timeLeft -= 1

  if (state.timeLeft > 0 && state.isActive) {
    state.timerId = setTimeout(startTimer, 1000)
  } else {
    // останавливаемся
    alarm()
  }
}

export {startTimer, showTime}
