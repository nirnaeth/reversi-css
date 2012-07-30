(function($) {

  var squareAt = function(i) {
    return $($('.square')[i]);
  };

  var blackDisk = '<div class="black"></div>';
  var whiteDisk = '<div class="white"></div>';

  test('move', function() {
    strictEqual( $("#info").text(), "black's move", "game initialization fails" );
    squareAt(37).trigger('click');
    strictEqual( squareAt(37).html(), blackDisk, "new disk placement fails" );
    strictEqual( squareAt(36).html(), blackDisk, "disk flip fails");
    strictEqual( $("#info").text(), "white's move", "player switch fails" );
  });

  test('refresh board state', function() {
    strictEqual( board.board[37].state, 'black', "disk placement in board object fails" );
    strictEqual( board.board[36].state, 'black', "disk flip in board object fails" );
  });

  test('score', function() {
    strictEqual( $('#black_score').text(), '4', "black score update fails" );
    strictEqual( $('#white_score').text(), '1', "white score update fails" );
    squareAt(45).trigger('click');
    strictEqual( $('#white_score').text(), '3', "white score update fails" );
    strictEqual( $('#black_score').text(), '3', "black score update fails" );
  });

}(jQuery));
