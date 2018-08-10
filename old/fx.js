(function($){
  $(function(){
    // FILL
		$('.ffx').on('mouseover', function() {
      $(this).removeClass('sfx-shine');

			$(this).removeClass('fx-out');
			$(this).addClass('fx-in');

			if($(this).is('.ffx')) {
        if($(this).is('.fx-dark') || $(this).is('.fx-black')) {
          $(this).css('color', 'white');
		    } else {
          $(this).css('color', 'black');
        }
      }
		});

		$('.ffx').on('mouseout', function() {
      $(this).removeClass('sfx-shine');

			$(this).removeClass('fx-in');
			$(this).addClass('fx-out');

			if($(this).is('.ffx')) {
				$(this).css('color', '');
			}
		});

    // SHINE
    setInterval(function() {
      $('.sfx').removeClass('fx-out');
      if (!($('.sfx').is('.fx-in'))) {
        $('.sfx').addClass('sfx-shine');
        setTimeout(function() {
          $('.sfx').removeClass('sfx-shine');
        }, 500);
      }
    }, 10000);
  });
})(jQuery);
