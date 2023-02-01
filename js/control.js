import {state} from './state.js'
import {startTimer} from './timer.js'

const btnStart = document.querySelector('.control__btn_start')
const btnStop = document.querySelector('.control__btn_stop')

const onClickBtnStart = () => {
  // по клику инвертнем состояние
  state.isActive = !state.isActive

  if (state.isActive) {
    // если стало активным
    btnStart.textContent = 'Пауза'
    startTimer()
  } else {
    // если стало не активным
    clearTimeout(state.timerId)
    btnStart.textContent = 'Старт'
  }
}

const onClickBtnStop = () => {
  state.isActive = false
  btnStart.textContent = 'Старт'
}

export const initControl = () => {
  btnStart.addEventListener('click', onClickBtnStart)
  btnStop.addEventListener('click', onClickBtnStop)
}
