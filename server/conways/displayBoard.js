function displayBoard(board) {
  // eslint-disable-next-line no-console
  for (let row of board) {
    let newArray = row.map((element) => {
      return element.currentState
    })
  }
}


module.exports = displayBoard


