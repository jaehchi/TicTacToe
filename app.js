const { question } = require('readline-sync');

class TicTacToe {
  constructor() {
    this.board = [
      [1,2,3],
      [4,5,6],
      [7,8,9]
    ];
    this.player = 'X';
    this.moves = 0;
  }
  

}

const game = new TicTacToe();
game.printBoard();
