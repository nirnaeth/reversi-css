(function($) {

  var squareAt = function(i) {
    return $($('.square')[i]);
  };
  var squareAtData = function(i) {
    return $($('.square')[i]).children().data('occupier');
  };

  test('flip lines', function() {
    squareAt(27).trigger('click');
    strictEqual( squareAtData(9), 'black', "NW diagonal flip fails");
    strictEqual( squareAtData(18), 'black', "NW diagonal flip fails");
    strictEqual( squareAtData(13), 'black', "NE diagonal flip fails");
    strictEqual( squareAtData(20), 'black', "NE diagonal flip fails");
    strictEqual( squareAtData(11), 'black', "N vertical flip fails");
    strictEqual( squareAtData(19), 'black', "N vertical flip fails");
    strictEqual( squareAtData(19), 'black', "N vertical flip fails");
    strictEqual( squareAtData(25), 'black', "W horizontal flip fails");
    strictEqual( squareAtData(26), 'black', "W horizontal flip fails");
    strictEqual( squareAtData(28), 'black', "E horizontal flip fails");
    strictEqual( squareAtData(29), 'black', "E horizontal flip fails");
    strictEqual( squareAtData(30), 'black', "E horizontal flip fails");
    strictEqual( squareAtData(34), 'black', "SW horizontal flip fails");
    strictEqual( squareAtData(41), 'black', "SW horizontal flip fails");
    strictEqual( squareAtData(35), 'black', "S vertical flip fails");
    strictEqual( squareAtData(43), 'black', "S vertical flip fails");
    strictEqual( squareAtData(36), 'black', "SE horizontal flip fails");
    strictEqual( squareAtData(45), 'black', "SE horizontal flip fails");
  });

}(jQuery));
