(function($){
  $(function(){

    // HIDE PROJECTS
    var persBtn = $("#perBtn");
    var univBtn = $("#uniBtn");
    var showPers = true;
    var showUniv = true;

    function toggleProjects() {
      $("#uniText").text(showUniv? "HIDE" : "SHOW");
      $("#perText").text(showPers? "HIDE" : "SHOW");
      if (!showPers) {
        $('.pers').addClass('hidden');
      } else {
        $('.pers').removeClass('hidden');
      }
      if (!showUniv) {
        $('.univ').addClass('hidden');
      } else {
        $('.univ').removeClass('hidden');
      }
    }

    univBtn.click( function() {
      showUniv = !showUniv;
      toggleProjects();
    });

    persBtn.click( function() {
      showPers = !showPers;
      toggleProjects();
    });

  });
})(jQuery);
