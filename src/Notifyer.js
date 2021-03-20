const Notifyer = {
   async init() {
       const permission = await Notification.requestPermission()  // await vc está prometendo algo // requestPermission vai pedir a permição de mostrar notificação
       if(permission !== "granted") {
          throw new Error('Permissão negada')
       }
   },
   notify() {}
}

export { Notifyer }