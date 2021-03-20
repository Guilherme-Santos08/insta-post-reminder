import { Notifyer } from './Notifyer.js'

const App = {
   async start() {
      try {
         Notifyer.init()
      } catch (err) {
         console.log(err.message)
      }
   }
}

export { App }