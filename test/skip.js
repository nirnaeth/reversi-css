(function($) {

  var squareAt = function(i) {
    return $($('.square')[i]);
  };

  var blackDisk = '<div class="black"></div>';
  var whiteDisk = '<div class="white"></div>';

  test('skip turn', function() {
    strictEqual( $('#info').text(), "white's move", "turn skip failed");
  });

}(jQuery));
