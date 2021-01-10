const getNeighbours = require('./getNeighbours')

function countAliveNeighbours(cellRow, cellColumn, board) {
  const neighbours = getNeighbours(cellRow, cellColumn, board)
  let aliveNeighbours = 0
  for (const neighbour of neighbours) {
    if (neighbour) {
      aliveNeighbours += 1
    }
  }
  return aliveNeighbours
}

module.exports = countAliveNeighbours
