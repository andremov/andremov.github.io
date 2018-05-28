(function($){
  $(function(){

    var allBtn = $("#allBtn");
    var perBtn = $("#perBtn");
    var uniBtn = $("#uniBtn");

    perBtn.click(
      function () {
          var test = $(".personal-project");
          test.css("opacity","10%");
      }
    );


  });
})(jQuery);
