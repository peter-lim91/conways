const HOST = location.origin.replace(/^http/, 'ws');
// const HOST = 'ws://localhost/server:3000'
const socket = new WebSocket(HOST);

socket.addEventListener('message', function (ev) {
  const newBoard = JSON.parse(ev.data)
  // console.log(Array.from(newBoard))
  const newBoardFlat = newBoard.flat()
  //push newboard info to display it on html page
  displayBoard(newBoardFlat)
  // setTimeout(getNextBoard, 1000)
});

