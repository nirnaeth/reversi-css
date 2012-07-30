(function($) {

  var squareAt = function(i) {
    return $($('.square')[i]);
  };

  var blackDisk = '<div class="black"></div>';
  var whiteDisk = '<div class="white"></div>';

  test('flip lines', function() {
    $($('.square')[27]).trigger('click');
    strictEqual( squareAt(9).html(), blackDisk, "NW diagonal flip fails");
    strictEqual( squareAt(18).html(), blackDisk, "NW diagonal flip fails");
    strictEqual( squareAt(13).html(), blackDisk, "NE diagonal flip fails");
    strictEqual( squareAt(20).html(), blackDisk, "NE diagonal flip fails");
    strictEqual( squareAt(11).html(), blackDisk, "N vertical flip fails");
    strictEqual( squareAt(19).html(), blackDisk, "N vertical flip fails");
    strictEqual( squareAt(19).html(), blackDisk, "N vertical flip fails");
    strictEqual( squareAt(25).html(), blackDisk, "W horizontal flip fails");
    strictEqual( squareAt(26).html(), blackDisk, "W horizontal flip fails");
    strictEqual( squareAt(28).html(), blackDisk, "E horizontal flip fails");
    strictEqual( squareAt(29).html(), blackDisk, "E horizontal flip fails");
    strictEqual( squareAt(30).html(), blackDisk, "E horizontal flip fails");
    strictEqual( squareAt(34).html(), blackDisk, "SW horizontal flip fails");
    strictEqual( squareAt(41).html(), blackDisk, "SW horizontal flip fails");
    strictEqual( squareAt(35).html(), blackDisk, "S vertical flip fails");
    strictEqual( squareAt(43).html(), blackDisk, "S vertical flip fails");
    strictEqual( squareAt(36).html(), blackDisk, "SE horizontal flip fails");
    strictEqual( squareAt(45).html(), blackDisk, "SE horizontal flip fails");
  });

}(jQuery));
