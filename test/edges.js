(function($) {

  var squareAt = function(i) {
    return $($('.square')[i]);
  };
  var squareAtData = function(i) {
    return $($('.square')[i]).children().data('occupier');
  };


  test('flip lines on edges', function() {
    squareAt(32).trigger('click');
    strictEqual( squareAtData(24), 'black', "left edge flip N failed" );
    strictEqual( squareAtData(16), 'black', "left edge flip N failed" );
    strictEqual( squareAtData(8), 'black', "left edge flip N failed" );
    strictEqual( squareAtData(40), 'black', "left edge flip S failed" );
    strictEqual( squareAtData(48), 'black', "left edge flip S failed" );

    squareAt(31).trigger('click');
    strictEqual( squareAtData(23), 'white', "right edge flip N failed" );
    strictEqual( squareAtData(15), 'white', "right edge flip N failed" );
    strictEqual( squareAtData(39), 'white', "right edge flip S failed" );
    strictEqual( squareAtData(47), 'white', "right edge flip S failed" );
    strictEqual( squareAtData(55), 'white', "right edge flip S failed" );

    squareAt(3).trigger('click');
    strictEqual( squareAtData(2), 'black', "top edge flip W failed" );
    strictEqual( squareAtData(1), 'black', "top edge flip W failed" );
    strictEqual( squareAtData(4), 'black', "top edge flip E failed" );
    strictEqual( squareAtData(5), 'black', "top edge flip E failed" );

    squareAt(60).trigger('click');
    strictEqual( squareAtData(59), 'white', "bottom edge flip W failed" );
    strictEqual( squareAtData(58), 'white', "bottom edge flip W failed" );
    strictEqual( squareAtData(61), 'white', "bottom edge flip E failed" );
    strictEqual( squareAtData(62), 'white', "bottom edge flip E failed" );

  });

  test('game over white wins', function() {
    strictEqual( $('#info').text(), "White wins!", "game over failed" );
  });

}(jQuery));
