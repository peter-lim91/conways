function isOutOfBounds (index, array) {
  if ((index < 0 ) || (index > array.length - 1)) {
    return true
  } else {
    return false
  }
}

module.exports = isOutOfBounds
