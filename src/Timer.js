import { View } from './View.js';
import { Emitter } from './Emitter.js'

const Timer = {
  time: 60 * 60, // 60 minutos x 60 segundos
  currentTime: 0,
  interval: null, // Criando a variavel para o countdown não ficar contando para sempre

  timeToMinutes: time => Math.floor(time / 60),
  timeToSeconds: time => time % 60, // Oque sobrar da divisão ele vai colocar aqui

  formatTime: time => String(time).padStart(2, '0'),

  init(time) {
    Emitter.emit('countdown-start')
    Timer.time = time || Timer.time
    Timer.currentTime = Timer.time // Timer pega time e atribui no currentTime
    Timer.interval = setInterval(Timer.countdown, 1000)
  },

  countdown() {
    Timer.currentTime = Timer.currentTime - 1 // a cada um segundo, ele vai tirar um segundo

    const minutes = Timer.formatTime(Timer.timeToMinutes(Timer.currentTime))
    const seconds = Timer.formatTime(Timer.timeToSeconds(Timer.currentTime))


    View.render({
      minutes,
      seconds
    })

    // View.render({
    //   minutes: "25",
    //   seconds: "19"
    // })

    if(Timer.currentTime === 0) {
      clearInterval(Timer.interval) // Vai cancelar o countdown
      Emitter.emit('countdown-end') // Vai reiciar o tempo
      return
    }
    
  }
}

export { Timer }