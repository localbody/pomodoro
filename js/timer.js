import {alarm} from './alarm.js'
import {state} from './state.js'
import {addZero} from './utils.js'

const showTime = (seconds) => {
  const elementTimeMinutes = document.querySelector('.time__minutes')
  const elementTimeSeconds = document.querySelector('.time__seconds')

  elementTimeMinutes.textContent = addZero(Math.floor(seconds / 60))
  elementTimeSeconds.textContent = addZero(seconds % 60)
}

const startTimer = () => {
  // show on page
  showTime(state.timeWorkLeft)

  state.timeWorkLeft -= 1

  if (state.timeWorkLeft > 0 && state.isActive) {
    state.timerId = setTimeout(startTimer, 1000)
  } else {
    // останавливаемся
    alarm()
  }
}

export {startTimer, showTime}
