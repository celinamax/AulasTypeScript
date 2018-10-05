class Spacecraft {
   propulsor: string
   constructor (propulsor: string) {
     this.propulsor = propulsor
   }
}
jumpIntoHyperspace(){
  console.log("Entering hyperspace with" + this.propulsor)
}

let falcon = new Spacecraft ("hyperdrive")

falcon.jumpIntoHyperspace()
  Entering hyperspace with hyperdrive

//criando uma classe com codigo reduzido

class Spacecraft {

  constructor (public propulsor: string){}
}

//conceito de herança

class MillenniumFalcon extends Spacecraft{

  constructor() {
    super ("hyperdrive")
  }


jumpIntoHyperspace(){
  if (Math.random() >= 0.5) {
    super.jumpIntoHyperspace()
  }else {console.log("Failed")}
}

}

//O que são interfaces? Definem contratos

interface ContainerShip {
  cargoContainers:number
}

class MillenniumFalcon extends Spacecraft implements ContainerShip {


      cargoContainers: number
      constructor() {
        super("hyperdrive")
        this.cargoContainer = 4
      }

  }

function goodForTheJob(ship: ContainerShip): boolean {
  return Ship.cargoContainers > 2
}

let falcon = new MillenniumFalcon()
console.log(goodForTheJob(falcon))
> true


  //interface

  interface Smugglership extends Containership {
    hidden containers: number
  }
