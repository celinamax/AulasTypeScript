import {SpacecraftModulo} from './SpacecraftModulo'
import {ContainershipModulo} from './ContainershipModulo'
import {MillenniumFalconModulo} from './MillenniumFalconModulo'

import * as _ from 'lodash'
console.log(_.pad("Typescript Examples", 40, "="))

//faltava este trecho do código
let ship = new Spacecraft('hyperdrive')
ship.jumpIntoHyperspace()

let falcon = new MillenniumFalconModulo()
falcon.jumpIntoHyperspaceModulo()

let goodForTheJob = ( ship : ContainershipModulo ) => ship.cargoContainers > 2

console.log(`Is falcon good  for the job? ${goodForTheJob( falcon ) ? 'yes': 'no'}`)
