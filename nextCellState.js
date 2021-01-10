const isOverPopulated = require('./isOverPopulated')
const isUnderPopulated = require('./isUnderPopulated')
const isRessurectable = require('./isRessurectable')

function nextCellState (cellState, neighbourCount) {
  if (isOverPopulated(neighbourCount)) return false
  else if (isUnderPopulated(neighbourCount)) return false
  else if (isRessurectable) return true
  else return cellState
}

module.exports = nextCellState
