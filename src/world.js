class World{
  constructor(wn, options){
    this.cellSize = wn.y/options.row
    this.cells = makeGrid(
      options.row,
      options.column,
      "0"
      )
      this.wn = wn
      this.options = options
    }


  // might make a parser to make new rules more easily
  //   this.rules = {
  //     die: [
  //       "N<2",
  //       "N>3"
  //     ],
  //     idle: [
  //       "N=2",
  //       "N=3"
  //     ],
  //     spawn: [
  //       "N=3",
  //       "S=0"
  //     ]
  //   }
  // }


  drawCell(){
    if (mouseIsPressed){
      let x = Math.floor(mouseX/this.cellSize)
      let y = Math.floor(mouseY/this.cellSize)
      if(x>=0 && y>=0 && y<options.row){
        this.cells[y][x]='1'
      }
    }
  }

  render(){
    fill(250)
    for (let i=0; i<this.options.row; i++){
      for (let j=0; j<this.options.column; j++){
        if (world.cells[i][j]==1){
          square(j*this.cellSize,i*world.cellSize,world.cellSize)
        }
      }
    }
  }

  neighbour(i,j,range){
    let n = 0, fi=i+range, fj=j+range
    if (world.cells[i][j]==1){n-=1}

    for (i-=range; i<=fi; i++){
      j=fj-range
      for (j-=range; j<=fj; j++){
        if (i>=0 && j>=0 &&
          i<options.row &&
          j<options.column
        ){
          if (this.cells[i][j]==1){n++}
        }
      }
    }
    return n
  }

  applyLifeRules(){
    let newGen = JSON.parse(JSON.stringify(world.cells))
    for (let i=0; i<this.options.row; i++){
      for (let j=0; j<this.options.column; j++){

        let n = this.neighbour(i,j,1)
        if (n<2 || n>3){newGen[i][j]=0}
        if (n==3){newGen[i][j]=1}

      }
    }
    world.cells=newGen
  }
}
