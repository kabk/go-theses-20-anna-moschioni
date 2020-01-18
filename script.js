var video = document.querySelector('.videoplayer1');



$('.infobox_container').hide();


setTimeout(function() {
  $('.videocontainer1').mouseenter(function(){

  });

}, 59000);


setTimeout(function() {
  $('.title').addClass("halfopacity");
  $('.infobuttonbox').addClass("halfopacity_info");


}, 59000);

$('.infobuttonbox').on("click",showinfo);


function showinfo(){

  $('.infobox_container').show();


  $('.infobuttonbox').off("click",showinfo);
  $('.infobuttonbox').on("click",hideinfo);

}

function hideinfo(){


  $('.infobox_container').hide();


  $('.infobuttonbox').on("click",showinfo);
  $('.infobuttonbox').off("click",hideinfo);

}
