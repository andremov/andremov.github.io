(function($){
  $(function(){

    // KIM POSSIBLE
    var k = $("#k");
    var j = ["CALL ME","BEEP ME","REACH ME"];
    var i = Math.floor(Math.random()*10);
    k.text(j[i]);

    // HEAD SPIN
    var h = $("#h");
    h.hover(
      function() {
        h.css("transform","rotate(360deg) scale(1.3)");
      },
      function() {
        h.css("transform","rotate(0deg) scale(1)");
      }
    );

  });
})(jQuery);
