
var $document = $(document);

$document.mousemove(function(e) {
    var width = $document.width() / 255;
    var pageX = e.pageX / width;
    var pageY = e.pageY / width;
    var valueX = 255 - pageX;
    var valueY = 255 - pageY;

    $("span.stretch").css("transform", "scale(" + valueX/102 + "," + valueY/100 +")");
});


window.ondevicemotion = function(event) {
  var x = event.accelerationIncludingGravity.x;
  var y = event.accelerationIncludingGravity.y;
  var z = event.accelerationIncludingGravity.z;

  $("span.stretch").css("transform", "scale(" + x/50 + "," + y/50 +")");
}
