const View = {
  render({ minutes, seconds }) {
    document.body.innerHTML = `
    <P>Próximo Post em</p>
    <span>${minutes}: ${seconds}</span>
    `
  }
}


export { View }