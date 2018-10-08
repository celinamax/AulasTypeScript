import {SpacecraftModulo, ContainershipModulo} from './base-ships'
import {MillenniumFalconModulo} from './starfighters'

let falcon = new MillenniumFalconModulo()
falcon.jumpIntoHyperspaceModulo()

interface ContainershipModulo {

  cargoContainers : number

}
let goodForTheJob = ( ship : ContainershipModulo ) => ship.cargoContainers > 2

console.log(`Is falcon good  for the job? ${goodForTheJob( falcon ) ? 'yes': 'no'}`)
