(function($) {

  var squareAt = function(i) {
    return $($('.square')[i]);
  };

  var blackDisk = '<div class="black"></div>';
  var whiteDisk = '<div class="white"></div>';

  test('flip lines on edges', function() {
    squareAt(32).trigger('click');
    strictEqual( squareAt(24).html(), blackDisk, "left edge flip N failed" );
    strictEqual( squareAt(16).html(), blackDisk, "left edge flip N failed" );
    strictEqual( squareAt(8).html(), blackDisk, "left edge flip N failed" );
    strictEqual( squareAt(40).html(), blackDisk, "left edge flip S failed" );
    strictEqual( squareAt(48).html(), blackDisk, "left edge flip S failed" );

    squareAt(31).trigger('click');
    strictEqual( squareAt(23).html(), whiteDisk, "right edge flip N failed" );
    strictEqual( squareAt(15).html(), whiteDisk, "right edge flip N failed" );
    strictEqual( squareAt(39).html(), whiteDisk, "right edge flip S failed" );
    strictEqual( squareAt(47).html(), whiteDisk, "right edge flip S failed" );
    strictEqual( squareAt(55).html(), whiteDisk, "right edge flip S failed" );

    squareAt(3).trigger('click');
    strictEqual( squareAt(2).html(), blackDisk, "top edge flip W failed" );
    strictEqual( squareAt(1).html(), blackDisk, "top edge flip W failed" );
    strictEqual( squareAt(4).html(), blackDisk, "top edge flip E failed" );
    strictEqual( squareAt(5).html(), blackDisk, "top edge flip E failed" );

    squareAt(60).trigger('click');
    strictEqual( squareAt(59).html(), whiteDisk, "bottom edge flip W failed" );
    strictEqual( squareAt(58).html(), whiteDisk, "bottom edge flip W failed" );
    strictEqual( squareAt(61).html(), whiteDisk, "bottom edge flip E failed" );
    strictEqual( squareAt(62).html(), whiteDisk, "bottom edge flip E failed" );

  });

  test('game over white wins', function() {
    strictEqual( $('#info').text(), "White wins!", "game over failed" );
  });

}(jQuery));
