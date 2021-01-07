const isOutOfBounds = require('./isOutOfBounds')

function indicesAreOutOfBounds (rowIndex, columnIndex, array) {
// rowIndex = board index
//  columnIndex = index within the each 
// isOutOfBounds on rowIndex and columnIndex and if either are out of bounds return true
  const rowOutOfBounds = isOutOfBounds(rowIndex, array)
  const columnOutOfBounds = isOutOfBounds(columnIndex, array)
  return rowOutOfBounds || columnOutOfBounds
}

module.exports = indicesAreOutOfBounds
