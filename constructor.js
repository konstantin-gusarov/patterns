class Lego {
  constructor (projectType, lengthOfDetails) {
    this.projectType = projectType
    this.lengthOfDetails = lengthOfDetails
  }

  getProjectInfo () {
    return `LegoProject: ${this.projectType}, with ${this.lengthOfDetails} details`
  }
}

const lego = new Lego('USS Enterprise NCC-1701', 50000)

console.log(lego.getProjectInfo())