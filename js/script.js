import {initControl} from './control.js'
import {state} from './state.js'
import {showTime} from './timer.js'

const initPomodoro = () => {
  showTime(state.timeWorkLeft)
  initControl()
}

initPomodoro()
