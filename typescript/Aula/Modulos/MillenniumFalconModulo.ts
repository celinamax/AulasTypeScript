import {SpacecraftModulo} from './SpacecraftModulo'
import {ContainershipModulo} from './ContainershipModulo'


class MillenniumFalconModulo extends SpacecraftModulo implements ContainershipModulo{

  cargoContainers : number
  constructor() {
    super('hyperdrive')
    this.cargoContainers = 4
  }


  jumpIntoHyperspaceModulo() {
    if (Math.random() >=0.5){
      super.jumpIntoHyperspaceModulo()
    }else {console.log('Failed to jump into hyperspace')}

  }
}
export {MillenniumFalconModulo}
