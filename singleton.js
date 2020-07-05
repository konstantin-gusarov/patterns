class SpaceShipBase {
  constructor (data) {
    if (SpaceShipBase.exists) {
      console.log(`ERR: ${data} was not parked. Current type of ships: ${SpaceShipBase.instance.data}`)
      return SpaceShipBase.instance
    }
    SpaceShipBase.instance = this
    SpaceShipBase.exists = true
    this.data = data
  }

  getData () {
    return this.data
  }
}

const constitutionShipsBase = new SpaceShipBase('Constitution')
console.log(constitutionShipsBase.getData())

const galaxyShipBase = new SpaceShipBase('Galaxy')
console.log(galaxyShipBase.getData())
