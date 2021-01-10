document.addEventListener('DOMContentLoaded', () => {
  newBoard()
  addClickHandler()
})

// function newBoardHandler() {
//   newBoard(width, height)
// }

function addClickHandler() {
  const cells = getCells()
  for (const cell of cells) {
    cell.addEventListener('click', toggleState)
  }
}

function start() {
  const x = setInterval(getNextBoard, 1000)
  const stopButton = document.querySelector('#stop')
  stopButton.addEventListener('click', () => clearInterval(x), {once: true})
}


function newBoard() {
  const width = document.querySelector('#boardWidth').value
  const height = document.querySelector('#boardHeight').value
  removeAll()
  const totalCells = width * height
  const board = getBoardNode()
  board.style.width = width * 50 + "px"
  board.style.height = height * 50 + "px"
  const cellTemplate = document.createElement('div')

  cellTemplate.classList.add('cell')
  for (let i = 0; i < totalCells; i++) {
    board.appendChild(cellTemplate.cloneNode())
  }
  addClickHandler()
}

function addCells(numberOfCells) {
}

function removeAll() {
  const boardNode = getBoardNode()
  while(boardNode.lastElementChild) {
    boardNode.removeChild(boardNode.lastElementChild)
  }
}


function toggleState(event) {
  event.target.classList.toggle('alive')
} 

const getBoardNode = () => document.querySelector('.board')
const getCells = () => Array.from(document.querySelectorAll('.cell'))
  
function getNextBoard() {
  const currentBoard = JSON.stringify(getBoardState())
  socket.send(currentBoard)
}

function displayBoard(board) {
  const cells = getCells()
  const boardFlat = board.flat()
  for (const i in boardFlat) {
    const nextCellState = boardFlat[i]
    const cell = cells[i]
    if (nextCellState) {
      makeAlive(cell)
    } else {
      makeDead(cell)
    }
  }
}

function makeAlive(cell) {
  cell.classList.add('alive')
}

function makeDead(cell) {
  cell.classList.remove('alive')
}

function getBoardState() {
  const boardStateFlat = getCells().map((cell) => isAlive(cell))
  const boardState = unFlattenBoard(boardStateFlat)
  return boardState
}

function unFlattenBoard(boardFlat) {
  const width = parseInt(getBoardNode().style.width.slice(0, -2)) / 50
  console.log(width)
  const reducer = (acc, cell) => {
    const newArray = [...acc]
    const rows = newArray.length
    let lastRow = newArray[rows - 1]
    if(lastRow.length < width) {
      lastRow.push(cell)
    } else {
      newArray.push([cell])
    }
    return newArray
  }
  const board = boardFlat.reduce(reducer, [[]])
  return board   
}

function isAlive(cell) {
  return cell.classList.contains('alive')
}