function drawCell(){  
  if (mouseIsPressed){
    let x = Math.floor(mouseX/cellSize)
    let y = Math.floor(mouseY/cellSize)
    let unique = true
    for (cell of cellList){
      if (cell.x == x && cell.y == y){unique = false}
    }
    if (unique){cellList.push(new Cell(x,y))}
  }
}
