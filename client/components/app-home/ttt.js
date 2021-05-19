import { SocketIO } from 'boardgame.io/multiplayer'
import { Local } from 'boardgame.io/multiplayer';
import { Client } from 'boardgame.io/client';
import { TicTacToe } from '../../../game/game';


export class TicTacToeClient {
  constructor({ playerID } = {}) {

    this.client = Client({
      game: TicTacToe,
      multiplayer:Local(),
      playerID,
    });
    this.client.start()
  }
  // ...
}