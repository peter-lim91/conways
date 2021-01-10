const express = require('express');
const WebSocket = require('ws');
const { EventEmitter } = require('events');
const cw = require ('./server/conways/conways.js')

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
    const currentBoard = JSON.parse(message)
    const nextBoard = JSON.stringify(cw.nextBoard(currentBoard))
    ws.send(nextBoard)
  })
})


