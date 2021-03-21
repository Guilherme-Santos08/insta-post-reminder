const Timer = {
  time: 25 * 60, // 25 minutos x 60 segundos
  currentTime: 0,

  init() {
    Timer.currentTime = Timer.time // Timer pega time e atribui no currentTime
  },

  countdown() {

  }
}

export { Timer }