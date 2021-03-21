import View from './View.js';

const Timer = {
  time: 0.1 * 60, // 0.1 minutos x 60 segundos
  currentTime: 0,
  interval: null, // Criando a variavel para o countdown não ficar contando para sempre
  init() {
    Timer.currentTime = Timer.time // Timer pega time e atribui no currentTime
    Timer.interval = setInterval(Timer.countdown, 1000)
  },

  countdown() {
    Timer.currentTime = Timer.currentTime - 1 // a cada um segundo, ele vai tirar um segundo
    console.log(Timer.currentTime)

    if(Timer.currentTime === 0) {
      clearInterval(Timer.interval) // Vai cancelar o countdown
      return
    }
    
  }
}

export { Timer }