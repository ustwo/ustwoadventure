
var $document = $(document);

$document.mousemove(function(e) {
    var width = $document.width() / 255;
    var pageX = e.pageX / width;
    var pageY = e.pageY / width;
    var valueX = pageX + 200;
    var valueY = 255 - pageY;

    $("span.stretch").css("transform", "scale(" + valueX/200 + "," + valueY/50 +")");
});

$document.mousemove(function(e) {
    var width = $document.width() / 255;
    var pageX = e.pageX / width;
    var pageY = e.pageY / width;
    var valueX = pageX - 122.5;
    var valueY = 122.5 - pageY;

    $("span.stretch.clear").css("transform", "scale(" + valueX/50 + "," + valueY/25 +")");
});


window.ondevicemotion = function(event) {
  var x = event.accelerationIncludingGravity.x;
  var y = event.accelerationIncludingGravity.y;
  var z = event.accelerationIncludingGravity.z;

  $("span.stretch").css("transform", "scale(" + x/5 + "," + y/5 +")");

  $("span.stretch.clear").css("transform", "scale(" + (x+3)/5 + "," + ((-y)+3)/5 +")");

}
