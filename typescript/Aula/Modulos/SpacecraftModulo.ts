class SpacecraftModulo {

  public propulsor : string
  constructor ( propulsor : string) {
    this.propulsor = propulsor
  }

  public jumpIntoHyperspaceModulo() {
    console.log(`Entering hyperspace with ${this.propulsor}`)
  }
}
export {SpacecraftModulo}
