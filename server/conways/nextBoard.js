const nextCellState = require('./nextCellState')
const countAliveNeighbours = require('./countAliveNeighbours')

function nextBoard (currentBoard) {
  const newBoard = []
  for (let rowIndex in currentBoard) {
    rowIndex = parseInt(rowIndex)
    row = currentBoard[rowIndex]
    const nextRow = []
    for (let columnIndex in row) {
      columnIndex = parseInt(columnIndex)
      const cellState = row[columnIndex]
      const aliveNeighbours = countAliveNeighbours(rowIndex, columnIndex, currentBoard)
      const newCellState = nextCellState(cellState, aliveNeighbours)
      nextRow.push(newCellState)
    }
    newBoard.push(nextRow)
  }
  console.log(newBoard) 
  return newBoard
}

module.exports = nextBoard
