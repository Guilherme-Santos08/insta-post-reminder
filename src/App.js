import { Notifyer } from './Notifyer.js';
import { Timer } from './Timer.js';
import { Emitter } from './Emitter.js'


const messages = [
  "Postar foto do meu stup",
  "Postar uma frase motivacional" ,
  "Ensinar algo que aprendi hoje ou ontem",
  "Crie algum conteúdo para ajudar a comunidade"
];

const notify = () => {

   const randonIndex = Math.floor(Math.random() * messages.length)

   const notification = Notifyer.notify({
   title: "Hora do Post",
   body: messages[randonIndex]
})

   notification()
}

const App = {
   async start() {
      try {
         await Notifyer.init()

         Emitter.on('countdown-start', notify)
         Emitter.on('countdown-end', Timer.init)
         
         Timer.init(0.1 * 60)
      } catch (err) {
         console.log(err.message)
      }
   }
}

export { App }