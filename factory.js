
// YAMATO
// KELVIN
// EXCELSIOR
// DISCOVERY
// ENTERPRISE

class YamatoShip {
  constructor (name) {
    this.name = name
    this.registry = 'NCC-71807'
    this.class = 'Galaxy-class'
  }
}

class KelvinShip {
  constructor (name) {
    this.name = name
    this.registry = 'NCC-0514'
    this.class = 'Kelvin-type'
  }
}

class ExcelsiorShip {
  constructor (name) {
    this.name = name
    this.registry = 'NCC-2000'
    this.class = 'Excelsior-class'
  }
}

class DicoveryShip {
  constructor (name) {
    this.name = name
    this.registry = 'NCC-1031'
    this.class = 'Crossfield-class'
  }
}

class EnterptiseShip {
  constructor (name) {
    this.name = name
    this.registry = 'NCC-1701'
    this.class = 'Constitution-class'
  }
}

class EarthFactory {
  static ships = {
    yamato: YamatoShip,
    kelvin: KelvinShip,
    excelsior: ExcelsiorShip,
    discovery: DicoveryShip,
    enterprise: EnterptiseShip
  }

  create (name, ship = 'enterprise') {
    const Ship = EarthFactory.ships[ship] || EarthFactory.ships.enterptise

    const spaceShip = new Ship(name)
    spaceShip.getSpaceShipInfo = function () {
      console.log(`Name: ${this.name}, Type: ${this.class}, Registry Name of Galaxy library: ${this.registry}`)
    }
    return spaceShip
  }
}

const factoryShip  = new EarthFactory()

const galaxyShips = [
  factoryShip.create('Enterptise', 'enterprise'),
  factoryShip.create('Kelvin', 'kelvin'),
  factoryShip.create('Discovery', 'discovery')
]

console.log(galaxyShips)

galaxyShips.forEach((s) => {
  s.getSpaceShipInfo()
})