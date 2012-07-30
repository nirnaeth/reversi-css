(function($) {

  var squareAt = function(i) {
    return $($('.square')[i]);
  };

  var blackDisk = '<div class="black"></div>';
  var whiteDisk = '<div class="white"></div>';

  test('valid moves', function() {
    ok( squareAt(9).hasClass('valid'), "9th index is not valid" );
    ok( squareAt(10).hasClass('valid'), "10th index is not valid" );
    ok( squareAt(11).hasClass('valid'), "11th index is not valid" );
    ok( squareAt(12).hasClass('valid'), "12th index is not valid" );
    ok( squareAt(13).hasClass('valid'), "13th index is not valid" );
    ok( squareAt(14).hasClass('valid'), "14th index is not valid" );
    ok( squareAt(17).hasClass('valid'), "17th index is not valid" );
    ok( squareAt(22).hasClass('valid'), "22nd index is not valid" );
    ok( squareAt(25).hasClass('valid'), "25th index is not valid" );
    ok( squareAt(30).hasClass('valid'), "30th index is not valid" );
    ok( squareAt(33).hasClass('valid'), "33rd index is not valid" );
    ok( squareAt(38).hasClass('valid'), "38th index is not valid" );
    ok( squareAt(41).hasClass('valid'), "41st index is not valid" );
    ok( squareAt(46).hasClass('valid'), "46th index is not valid" );
    ok( squareAt(49).hasClass('valid'), "49th index is not valid" );
    ok( squareAt(50).hasClass('valid'), "50th index is not valid" );
    ok( squareAt(51).hasClass('valid'), "51st index is not valid" );
    ok( squareAt(52).hasClass('valid'), "52nd index is not valid" );
    ok( squareAt(53).hasClass('valid'), "53rd index is not valid" );
    ok( squareAt(54).hasClass('valid'), "54th index is not valid" );
  });

}(jQuery));
