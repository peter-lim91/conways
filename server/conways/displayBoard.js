function displayBoard (board) {
  // eslint-disable-next-line no-console


for (let row of board) {
  let newArray = row.map ((element) => {
    return element.currentState
  })
  console.log(newArray)
}



}


module.exports = displayBoard


