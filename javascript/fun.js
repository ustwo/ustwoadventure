
var $document = $(document);

$document.mousemove(function(e) {
    var width = $document.width() / 255;
    var pageX = e.pageX / width;
    var pageY = e.pageY / width;
    var valueX = pageX - 122.5;
    var valueY = 122.5 - pageY;

    $("span.stretch").css("transform", "scale(" + valueX/50 + "," + valueY/25 +")");
});


window.ondevicemotion = function(event) {
  var x = event.accelerationIncludingGravity.x;
  var y = event.accelerationIncludingGravity.y;
  var z = event.accelerationIncludingGravity.z;

  $("span.stretch").css("transform", "scale(" + (x+2)/5 + "," + (y-2)/5 +")");
}
