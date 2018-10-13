import {SpacecraftModulo} from './SpacecraftModulo'
import {ContainershipModulo} from './ContainershipModulo'
import {MillenniumFalconModulo} from './MillenniumFalconModulo'

let falcon = new MillenniumFalconModulo()
falcon.jumpIntoHyperspaceModulo()

let goodForTheJob = ( ship : ContainershipModulo ) => ship.cargoContainers > 2

console.log(`Is falcon good  for the job? ${goodForTheJob( falcon ) ? 'yes': 'no'}`)
