const Timer = {
  time: 0.1 * 60, // 0.1 minutos x 60 segundos
  currentTime: 0,

  init() {
    Timer.currentTime = Timer.time // Timer pega time e atribui no currentTime
    setInterval(Timer.countdown, 1000)
  },

  countdown() {
    Timer.currentTime = Timer.currentTime - 1 // a cada um segundo, ele vai tirar um segundo
    console.log(Timer.currentTime)
  }
}

export { Timer }