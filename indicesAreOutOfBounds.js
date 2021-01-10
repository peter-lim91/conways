const isOutOfBounds = require('./isOutOfBounds')

function indicesAreOutOfBounds(rowIndex, columnIndex, array) {
  const rowOutOfBounds = isOutOfBounds(rowIndex, array)
  const columnOutOfBounds = isOutOfBounds(columnIndex, array)
  return rowOutOfBounds || columnOutOfBounds
}

module.exports = indicesAreOutOfBounds
