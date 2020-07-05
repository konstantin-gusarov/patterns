class Spaceship {
  constructor(model, type) {
    this.model = model
    this.type = type
  }
}

class ShipFactory {
  constructor() {
    this.ships = []
  }

  create(model, type) {
    const candidate = this.getCar(type)
    if (candidate) {
      return candidate
    }

    const newSpaceship = new Spaceship(model, type)
    this.ships.push(newSpaceship)
    return newSpaceship
  }

  getCar(type) {
    return this.ships.find(ship => ship.type === type)
  }
}

const factory = new ShipFactory()

const enterprise = factory.create('enterprise', 'constitution')
const furry = factory.create('furry', 'furry')
const discovery = factory.create('discovery', 'constitution')

console.log(enterprise === discovery)
console.log(furry === discovery)

