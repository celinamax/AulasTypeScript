let message: string = "Help me, Obi-Wan Kenobi. You're my only hope!";
console.log(message);

let episode: number = 4
console.log("This is episode " + 4)
episode = episode + 1
console.log("Next episode is" + episode)

let favoriteDroid: string
favoriteDroid = "BB-8"
console.log("M favorite droid is " + favoriteDroid)

let isEnoughToBeatMF = function (parsecs: number) : boolean {
        return parsecs < 12
}
let distance = 11
console.log(`Is ${distance} parsecs enough to beat Millennium Falcon? ${isEnoughToBeatMF(distance) ? 'YES': 'NO'}`)

let call = (name: string) => console.log(`Do you copy, ${name}?`)
call('R2')

function inc (speed: number, inc: number = 1) : number {
  return speed + inc
}


console.log(`inc (5, 1) = ${inc(5, 1)}`)
console.log(`inc (5) = ${inc(5)}`)
