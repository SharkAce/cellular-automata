class World{
  constructor(wn, options){
    this.cellSize = wn.y/options.row
    this.cells = makeGrid(
      options.row,
      options.column,
      "dead"
      )

    this.rules = {
      die: [
        "<2",
        ">3"
      ],
      idle: [
        "=2",
        "=3"
      ],
      spawn: [
        "=3",
        "=dead"
      ]
    }
    this.wn = wn
    this.options = options
  }


  drawCell(){
    if (mouseIsPressed){
      let x = Math.floor(mouseX/this.cellSize)
      let y = Math.floor(mouseY/this.cellSize)
      this.cells[y][x]='alive'
    }
  }

  render(){
    for (let i=0; i<this.options.row; i++){
      for (let j=0; j<this.options.column; j++){

        this.cells[i][j]=="dead" ? fill(80) : fill(250)
        square(j*this.cellSize,i*world.cellSize,world.cellSize)

      }
    }
  }


  // applyRules(){
  //   for
  // }
}
