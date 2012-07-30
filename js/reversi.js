var Reversi = (function(global, $, undefined) {

  var diskValues = ['white', 'black'],
      playerToMove = 'black',
      opponent = 'white';

  var updateScore = function() {
    var scoreboard = $('#score'),
        whiteScore = scoreboard.find('#white_score'),
        blackScore = scoreboard.find('#black_score');

    whiteScore.text($('.white').length);
    blackScore.text($('.black').length);
  };

  var switchPlayers = function() {
      playerToMove = opponent;
      opponent = (playerToMove === 'black' ? 'white' : 'black');
  };

  var gameOver = function() {
    var whiteScore = $('#white_score').text(),
        blackScore = $('#black_score').text();

    $('.square').removeClass('valid');
    if (whiteScore > blackScore) {
      $('#info').text('White wins!');
    } else if (whiteScore < blackScore) {
      $('#info').text('Black wins!');
    } else {
      $('#info').text("It's a draw!");
    }
  };

  var Square = function(id, disk) {
    this.id = id;
    if (disk.attr('class') === undefined || diskValues.indexOf(disk.attr('class')) === -1 ) {
      this.state = undefined;
    } else {
      this.state = disk.attr('class');
    }

    this.flip = function() {
      if (this.state === 'white') {
        this.state = 'black';
      } else if (this.state === 'black') {
        this.state = 'white';
      }
    };
  };

  var Board = function(size) {
    // board = { 'a1':  { id: 0, state: (undefined, 'white', 'black') }, 'a2': { id: 1, state: ... } ... }
    this.board = [];
    if (size === undefined) {
      this.size = 8;
    } else {
      this.size = size;
    }
    this.leftEdgeDirections = [-this.size, -this.size + 1, 1, this.size, this.size + 1];
    this.rightEdgeDirections = [-this.size, -this.size - 1, -1, this.size, this.size - 1];
    this.directions = [-this.size + 1, -this.size, -this.size - 1, -1, 1, this.size - 1, this.size, this.size + 1];


    var board = this.board,
        boardContainer = $("#board"),
        boardSquares = boardContainer.find('.square');

    this.refreshBoardState = function() {
      $('.square').off('click');
      boardSquares.each(function() {
        board[boardSquares.index($(this))] = new Square($(this).attr('id'), $(this).children());
      });
      updateScore();
      var validMoves = this.findValidMoves();
      if (validMoves.length > 0) {
        this.markValidMoves(validMoves);
      } else {
        switchPlayers();
        validMoves = this.findValidMoves();
        if (validMoves.length === 0) {
          gameOver();
          return;
        } else {
          this.markValidMoves(validMoves);
        }
      }
      $('.valid').on('click', null, { board: this }, function(event) {
        event.data.board.move($('.square').index($(this)));
      }, this);
      $('#info').text(playerToMove + "'s move");
    };

    this.findValidMoves = function() {
      var emptyNeighbors = this.emptyOpponentNeighbors(),
          validMoves = [];

      for(var i = 0; i < emptyNeighbors.length; i++) {
        var directions = this.validDirections(emptyNeighbors[i]);
        for( var j = 0; j < directions.length; j++) {
          if(this.isValidLine(emptyNeighbors[i], directions[j])) {
            validMoves.push(emptyNeighbors[i]);
          }
        }
      }

      return validMoves;
    };

    this.markValidMoves = function(validMoves) {
      $('.square').removeClass('valid');
      validMoves.forEach(function(position) {
        $(boardSquares[position]).addClass('valid');
      });
    };

    this.isOnBoard = function(i) {
      return !(i < 0 || i > this.size * this.size - 1);
    };

    this.isOnEdge = function(i) {
      return (i % this.size === 0 || (i+1) % this.size === 0);
    };

    this.isValidLine = function(index, direction) {
      var size = this.size;
      if (this.isOnBoard(index + direction) && this.board[index + direction].state !== opponent) {
        return false;
      }
      if (direction !== size && direction !== -size && this.isOnEdge(index + direction)) {
        return false;
      }

      for(var i = index + (direction * 2); this.isOnBoard(i); i += direction) {
        if (this.board[i].state === undefined) {
          return false;
        } else if (this.board[i].state === playerToMove) {
          return true;
        } else if (direction !== size && direction !== -size && this.isOnEdge(i)) {
          return false;
        }
      }
      return false;
    };

    this.emptyOpponentNeighbors = function() {
      var emptyNeighborIndices = [];
      this.board.forEach(function(square, index, board) {
        if (square.state !== opponent) {
          return;
        }
        var neighbors = this.getNeighbors(index);
        for (var i = 0; i < neighbors.length; i++) {
          if (board[neighbors[i]].state === undefined) {
            emptyNeighborIndices.push(neighbors[i]);
          }
        }
      }, this);

      return emptyNeighborIndices;
    };

    this.validDirections = function(position) {
      if (position % this.size === 0) {
        return this.leftEdgeDirections;
      } else if ( (position + 1) % this.size === 0) {
        return this.rightEdgeDirections;
      }
      return this.directions;
    };

    this.getNeighbors = function(position) {
      var neighbors = [],
          bounds = [0, this.size * this.size - 1];

      if (position === undefined || position < 0 || position > bounds[1]) {
        return undefined;
      }

      var neighborRelation = this.validDirections(position);

      for (var i = 0; i < neighborRelation.length; i++) {
        var neighborId = position + neighborRelation[i];
        if (neighborId >= bounds[0] && neighborId <= bounds[1]) {
          neighbors.push(neighborId);
        }
      }

      return neighbors;
    };

    this.move = function(index) {
      var newSquare = $('<div>').addClass(playerToMove),
          directions = this.validDirections(index);
      $(boardSquares[index]).append(newSquare);
      for (var i = 0; i < directions.length; i++) {
        this.flipLine(index, directions[i]);
      }
      switchPlayers();
      this.refreshBoardState();
    };

    this.flipLine = function(index, direction) {
      if(!this.isValidLine(index, direction)) {
        return false;
      }

      for (var i = index + direction; this.isOnBoard(i); i += direction) {
        if (this.board[i].state === playerToMove || this.board[i].state === undefined) {
          return true;
        }
        this.board[i].flip();
        $(boardSquares[i]).children().removeClass(opponent).addClass(playerToMove);
      }
    };

  };

  $(document).ready(function() {
    global.board = new Reversi.Board();
    global.board.refreshBoardState();
  });

  return {
    Board: Board
  };

}(window, jQuery));
