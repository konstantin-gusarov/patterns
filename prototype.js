const ship = {
  registry: 'NCC-1701',
  init() {
    console.log(`${this.name}: ${this.registry}`)
  }
}

const shipEnterprise = Object.create(ship, {
  name: {
    value: 'Enterptise'
  }
})

const shipDiscovery = {
  __proto__: ship,
  name: 'DISCOVERY',
  registry: 'NCC-2000'
}


shipEnterprise.init()

shipDiscovery.init()
