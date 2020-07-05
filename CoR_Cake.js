class EasterCake {
  constructor () {
    this.ingredients = []
    this.weight = 0
  }

  add(ingredient) {
    this.ingredients.push(ingredient)
    return this
  }

  mix() {
    this.ingredients.map(ingredient => {
      for(let key in ingredient) {
        this.weight += ingredient[key]
      }
    })
    return this
  }

  result() {
    console.log(this.weight)
  }

}

const cake = new EasterCake()

cake.add({ suggar: 50 })
    .add({ milk: 200, })
    .add({ flour: 60 })
    .mix()
    .add({ suggar: 100 })
    .add({ eggs: 4})
    .mix()

cake.result()