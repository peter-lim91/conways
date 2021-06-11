const HOST = location.href.replace(/^http/, "ws");
const socket = new WebSocket(HOST);

socket.addEventListener("message", function (ev) {
  const newBoardFlat = JSON.parse(ev.data);
  displayBoard(newBoardFlat);
});
