//var toOpen = [];
//for (img in document.images){
//	console.log(img);
//};
function removeBoxing(){$("#xyzoverlay").fadeOut("700",function(){$(this).remove()})}function centerImage(){var e=window.innerHeight,t=document.innerWidth;$("")}$(document).ready(function(){$('a[data-boxing="true"]').click(function(e){var t=$(this).attr("href");$overlay=$('<div id="xyzoverlay"></div>');$overlay.hide().appendTo("body").fadeIn("900");$('<div id="xyzframe"/>').appendTo("#xyzoverlay");$('<img class="xyzimg">').attr("src",t).load(t,function(){var e=window.innerHeight,n=window.innerWidth,r=this.height,i=this.width;console.log(e,n,r,i,t);$("#xyzframe").css({top:e/2-r/2,left:n/2-i/2})}).appendTo("#xyzframe");$overlay.click(function(e){removeBoxing()});return!1})});