(function($){
  $(function(){

    // PARALLAX
    $('.parallax').parallax();


    // KONAMI
		new Konami(function() {
			h.css("filter","invert(1)");
		});

  });
})(jQuery);
