//constants
function removeBoxing(){$("#xyzoverlay").fadeOut("700",function(){$(this).remove()})}function centerLightboxing(){}var KEY_ESC=27;$(document).ready(function(){$('a[data-boxing="true"]').click(function(e){e.preventDefault();var t=$(this).attr("href"),n=$('<div id="xyzoverlay"></div>');n.hide().appendTo("body").fadeIn("900");$('<div id="xyzframe"/>').appendTo("#xyzoverlay").css({top:window.innerHeight/2,left:window.innerWidth/2}).ready(function(){var e=$('<img class="xyzimg">');e.attr("src",t).css({"z-index":-1}).load(function(){$("#xyzframe").animate({top:window.innerHeight/2-e.height()/2,left:window.innerWidth/2-e.width()/2,width:$(e).width(),height:$(e).height()},2e3).animate({"z-index":4})}).appendTo("#xyzframe")});n.click(function(e){removeBoxing()});$("#overlay").keyup(function(e){e.keyCode==KEY_ESC&&removeBoxing()})})});