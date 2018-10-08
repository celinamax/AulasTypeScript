class SpacecraftModulo {

  constructor (public propulsor : string) {}

  jumpIntoHyperspaceModulo() {
    console.log(`Entering hyperspace with ${this.propulsor}`)
  }
}

interface ContainershipModulo {

  cargoContainers : number

}

export {SpacecraftModulo, ContainershipModulo}
