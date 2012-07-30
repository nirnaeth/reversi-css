(function($) {

  test('skip turn', function() {
    strictEqual( $('#info').text(), "White wins!", "double skip fails");
  });

}(jQuery));
