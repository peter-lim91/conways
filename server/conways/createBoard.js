function createBoard(size) {
  let board = []
  for (let i = 0; i < size; i++) {
    let row = createRow(size)
    board.push(row)
  }
  console.log(board)
  return board

  function createRow(size) {
    let row = []
    for (let i = 0; i < size; i++) {
      row.push(false)
    }
    return row
  }
}

module.exports = createBoard
