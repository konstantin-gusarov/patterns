class SpaceShip {
  constructor (name, _class) {
    this.name = name
    this._class = _class
  }

  get information () {
    return `${this.name}: class: ${this._class}`
  }
}

function enterprise (spaceship) {
  spaceship.isEnterprise = true

  return spaceship
}

function furry (spaceship) {
  spaceship.isFurry = true

  return spaceship
}

const s1 = enterprise(new SpaceShip('Enterprise', 'Constitution'))
console.log(s1.isEnterprise)
console.log(s1.information)

const s2 = furry(new SpaceShip('Furry', 'Furry'))
console.log(s2.isFurry)
console.log(s2.information)
