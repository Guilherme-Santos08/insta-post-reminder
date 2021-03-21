const Timer = { // Aqui vamos fazer a função de iniciar o contador
   time: 25 * 60, // Vai transforma o 25 minutos em segundos
   currentTime: 0,
   init() {
      Timer.currentTime = Timer.time
      setInterval(Timer.countdown, 1000) // vai registrar e a cada 1 segundo ele vai executar
   },

   countdown() {
      console.log(Timer.currentTime)
   }
}

export { Timer }