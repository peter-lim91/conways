function createBoard (size) {
  
  function createBoard (size) {
    let board = []
    for (let i = 0; i < size; i++) {
      let row = createRow(size)
      for (let cell of row) {
        cell.row = i
      }
      board.push(row)
    }
    return board
  }

  function createRow (size) {
    let row = []
    for (let i = 0; i < size; i++) {
      row.push({
        currentState: false,
        nextState: false,
        column: i
      })
    }
    return row
  }
  

  // console.log(createBoard(size))
  return createBoard(size)
  






//   function createRow (size) {
//   return Array(size).fill(
//     {
//       currentState: false,
//       nextState: false
//     }
//   ) 
//  }

//   let board = Array(size).fill(createRow(size))
//   console.log(board)
//   return board
}

module.exports = createBoard
