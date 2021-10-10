
let wn = {
  x: 1120,
  y: 700
}
let options = {
  row: 20,
  column: 32
}

let world = new World(wn,options)
function setup(){
  let canvas = createCanvas(wn.x,wn.y)
  canvas.parent('canvas')
}

function draw(){
  background(100)

  for (let i=0; i<wn.x; i+=world.cellSize){
    line(i,0,i,wn.y)
    line(0,i,wn.x,i)
  }

  world.render()
  world.drawCell()
}
