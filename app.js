const { question } = require('readline-sync');
const chalk = require('chalk');

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
    console.log(chalk.black.bgWhite(` ${this.board[0][0]} | ${this.board[0][1]} | ${this.board[0][2]} `));
    console.log(chalk.black.bgWhite(` ${this.board[1][0]} | ${this.board[1][1]} | ${this.board[1][2]} `));
    console.log(chalk.black.bgWhite(` ${this.board[2][0]} | ${this.board[2][1]} | ${this.board[2][2]} `));
  }

  printInvalidMove( message ) {
    console.log(chalk.red(`Invalid move: ${message}`));
  }

  printWinner () {
    console.log(chalk.blue.bgWhite(`Congratulations, ${this.player}! You won!`));
  }

  printDraw () {
    console.log(chalk.yellow(`Good game, well played, but this game is a draw!`));
  }

  
  promptPlayerMove () {
    let move;

    do {
      move = question(chalk.green(`${chalk.blue.underline.bold(`Player ${this.player},`)} It's your turn, make a move! `));
    } while ( this.isInvalidMove( move ) );

    return this.convertMovetoRowCol( move );
  }
  
  isInvalidMove ( move ) {
    move = Number( move );

    if ( move < 1 || move > 9 ) {
      this.printInvalidMove('Please select a move between 1 - 9!');
      return true;
    } else if ( isNaN( move ) ) {
      this.printInvalidMove('Please select a move that is an integer!');
      return true;
    } else if ( !this.isMoveAvailable( move )) {
      this.printInvalidMove('Move taken... Please select another move!');
      return true;
    } else {
      return false;
    }
  }
  
  isMoveAvailable ( move ) {
    const { row, col } = this.convertMovetoRowCol( move );
    return typeof this.board[row][col] === 'number';
  }

  convertMovetoRowCol ( move ) {
    const col = Math.floor( ( move - 1 ) % 3 );
    const row = Math.floor( ( move - 1 ) / 3 );

    return { row, col };
  }

  placeMove ( row, col ) {
    this.board[row][col] = this.player;
    this.moves++;
  }

  switchPlayers () {
    this.player === 'X' ? this.player = 'O' : this.player = 'X';
  }

  //Game Logic

  areAllEqual (a, b, c) {
    return a === b && b === c;
  }

  isRowWinner ( row ) {
    return this.areAllEqual( this.board[row][0], this.board[row][1], this.board[row][2] )
  }

  isColWinner ( col ) {
    return this.areAllEqual( this.board[0][col], this.board[1][col], this.board[2][col] )
  }

  isDiagonalWinner () {
    return this.areAllEqual( this.board[0][0], this.board[1][1], this.board[2][2] ) || this.areAllEqual( this.board[0][2], this.board[1][1], this.board[2][0] )
  }

  isWinner (row, col) {
    return this.isRowWinner( row ) || this.isColWinner( col ) || this.isDiagonalWinner();
  }

  isDraw () {
    return this.moves === 9;
  }

  play () {
    this.printBoard();

    if ( this.moves < 9 ) {
      const { row, col } = this.promptPlayerMove();
      this.placeMove( row, col );

      if ( this.isWinner( row, col ) ) {
        this.printBoard();
        this.printWinner();
      } else if ( this.isDraw() ) {
        this.printDraw();
      } else {
        this.switchPlayers();
        this.play();
      }
    }
  }

}

const game = new TicTacToe();

game.play();