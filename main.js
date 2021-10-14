
let start = false
let speed = 5
let size = 1

let wn = {
  x: 1120,
  y: 700
}
let options = {
  row: 20*size,
  column: 32*size
}

let world = new World(wn,options)


function setup(){
  let canvas = createCanvas(wn.x,wn.y)
  canvas.parent('canvas')
}

function draw(){
  background(80)
  start?frameRate(speed):frameRate(60)

  for (let i=0; i<wn.x; i+=world.cellSize){
    line(i,0,i,wn.y)
    line(0,i,wn.x,i)
  }

  world.render()
  world.drawCell()

  if (start){world.applyLifeRules()}
}
