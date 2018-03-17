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
  
  printBoard () {
    console.log(`${this.board[0][0]} | ${this.board[0][1]} | ${this.board[0][2]}`);
    console.log(`${this.board[1][0]} | ${this.board[1][1]} | ${this.board[1][2]}`);
    console.log(`${this.board[2][0]} | ${this.board[2][1]} | ${this.board[2][2]}`);
  }

  printInvalidMove( message ) {
    console.log(`Invalid move: ${message}`);
  }


  printWinner () {
    console.log(`Congratulations, ${this.player}! You won!`)
  }

  printDraw () {
    console.log(`Good game, well played, but this game is a draw!`)
  }

  
  promptPlayerMove () {
    let move;
    do {
      move = question('Make a move! ');
    } while ( this.isInvalidMove( move ) );
  }
  
  isInvalidMove ( move ) {
    move = Number( move );

    if ( move < 1 || move > 9 ) {
      this.printInvalidMove('Please select a move between 1 - 9!');
      return true;
    } else if ( isNaN(move) ) {
      this.printInvalidMove('Please select a move that is an integer!');
      return true;
    } 


  }
  
  isMoveAvailable ( move ) {
    //check to see if the move is available
  }

  switchPlayers () {
    this.player === 'X' ? this.player === 'O' : this.player === 'X';
  }

  //Game Logic

  areAllEqual (a, b, c) {
    return a === b && b === c;
  }

  isRowWinner ( row ) {
    // checks each row if theres a winner
  }

  isColWinner ( col ) {
    // check each col if theres a winner
  }

  isDiagonalWinner () {
    // check both diagonals if theres a winner
  }

  isWinner () {
    // 
  }

  isDraw () {
    return this.moves === 9;
  }

}

const game = new TicTacToe();
game.printBoard();
game.promptPlayerMove();
game.printBoard();

