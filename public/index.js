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
  const x = setInterval(getNextBoard, 500)
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

// function addCells(numberOfCells) {
// }

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
  const boardInfo = {
    width: getWidth(),
    board: getBoardState()
  }
  const payload = JSON.stringify(boardInfo)
  socket.send(payload)
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
  return boardStateFlat
}

function getWidth() {
  const width = parseInt(getBoardNode().style.width.slice(0, -2)) / 50
  return width
}

function isAlive(cell) {
  return cell.classList.contains('alive')
}