import {Server} from 'boardgame.io/server'
import {TicTacToe} from '../game/game'


const server = Server({
  games: [TicTacToe],
});

console.log("server server server")

server.run(8000);

