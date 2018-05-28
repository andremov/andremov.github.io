(function($){
  $(function(){

    var curImg = 1;
    var maxImg = 3;
    var mePic = $("#bioPic");
    var player = $("#player");
    var playTitle = $("#playTitle")
    var hoverTitle = $("#hoverTitle")

    mePic.click(
      function() {
          curImg = (curImg%maxImg)+1;
          console.log(curImg);
          mePic.attr("src","resources/"+curImg+".png");
      }
    )

    mePic.hover(
      function() {
        mePic.css("width","85%");
      },
      function() {
        mePic.css("width","80%");
      }
    )

    var videos = [
      "hmay7JBJ_WY",
      "hh01BErf_jU",
      "mTpsyG7csrs",
      "Nl75QJHJl7M",
      "Ilc5u8k4kWM",
    ];

    for (var i = 1; i <= videos.length; i++) {
      $("#vid"+i).hover(
        function() {
          hoverTitle.innerHTML=$(this).attr('title');
          clearVidBorders();
          $(this).css("border-width","thick");
          $(this).find("i").css("font-size","4.5rem");
        },
      );
    }

    for (var i = 1; i <= videos.length; i++) {
      $("#vid"+i).click(
        function() {
          playVideo($(this).attr('id').substring(3));
          clearVidPlaying();
          $(this).css("background-color","#44007E");
        }
      );
    }

    function clearVidBorders() {
      for (var i = 1; i <= videos.length; i++) {
        $("#vid"+i).css("border-width","thin");
        $("#vid"+i).find("i").css("font-size","5rem");
      }
    }

    function clearVidPlaying() {
      for (var i = 1; i <= videos.length; i++) {
        $("#vid"+i).css("background-color","black");
      }
    }

    function playVideo(index) {
      player.attr("src","https://www.youtube.com/embed/"+videos[index]+"?rel=0");
      playTitle.innerHTML = $("#vid"+index).attr('title')
    }

  });
})(jQuery);
