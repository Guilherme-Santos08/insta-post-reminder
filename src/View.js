const View = {
  render() {
    return `
    <P>Próximo Post em</p>
    <span>10:01</span>
    `
  }
}

document.body.innerHTML = View.render()

export { View }