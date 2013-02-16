//var toOpen = [];

//for (img in document.images){
//	console.log(img);
//};

$(document).ready(function(){
  $('a[data-boxing="true"]').click(function(e){
		$('<div id="xyzoverlay"></div>').appendTo('body');
    
    /*$('<div id="overlay"></div>')
      .css('top', $(document).scrollTop())
      .css('opacity', '0')
      .animate({'opacity': '0.5'}, 'slow')
      .appendTo('body');
      
    $('<div id="lightbox"></div>')
      .hide()
      .appendTo('body');
      
    $('<img>')
      .attr('src', $(this).attr('href'))
      .load(function() {
        positionLightboxImage();
      })
      .click(function() {
        removeLightbox();
      })
      .appendTo('#lightbox');*/
    
    return false;
  });
});