const indicesAreOutOfBounds = require('./indicesAreOutOfBounds')

function getNeighbours (cellRow, cellColumn, board) {

const validNeighbours = []
for (let i = -1; i < 2; i++){
  for (let j = -1; j < 2; j++) {
    if (!(i == 0 && j == 0)) {
        const outOfBounds = indicesAreOutOfBounds(cellRow + i, cellColumn + j, board)
        if (!outOfBounds) {
        validNeighbours.push(board[cellRow + i][cellColumn + j])
        }
      }
    }
    console.log(validNeighbours)
    
  }
  return validNeighbours
}

module.exports = getNeighbours