const express = require('express');
const WebSocket = require('ws');
const { chunk } = require('lodash')
const cw = require('./server/conways/conways.js')

const PORT = process.env.PORT || 3000;
const app = express();
app.use(express.static('public'))

const server = app.listen(PORT, () => console.log('listening on port ' + PORT));
const wss = new WebSocket.Server({ noServer: true });
server.on('upgrade', (req, socket, head) => {
  wss.handleUpgrade(req, socket, head, (ws) => {
    wss.emit('connection', ws, req)
  })
})

wss.on('connection', (ws) => {
  ws.on('message',(message) => {
    const boardInfo = JSON.parse(message)
    const currentBoard = chunk(boardInfo.board, boardInfo.width)
    const nextBoard = (cw.nextBoard(currentBoard))
    const nextBoardFlat = nextBoard.flat()
    const payload = JSON.stringify(nextBoardFlat)
    ws.send(payload)
  })
})


