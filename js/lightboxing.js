//var toOpen = [];

//for (img in document.images){
//	console.log(img);
//};

$(document).ready(function(){
  $('a[data-boxing="true"]').click(function(e){
		e.preventDefault();
		var imgUrl = $(this).attr('href');
		
		$overlay = $('<div id="xyzoverlay"></div>');
		$overlay
			.hide()
			.appendTo('body')
			.fadeIn('900');

		$('<div id="xyzframe"/>').appendTo('#xyzoverlay');

		$('<img class="xyzimg">').attr('src', imgUrl)
			.load(function(){
				$('#xyzframe').css({
					'top' : ((window.innerHeight / 2) - (this.height / 2)),
					'left' : ((window.innerWidth / 2) - (this.width /2))
				});


			})
			.appendTo('#xyzframe');
			
		$overlay.click(function(e){
			removeBoxing();
		});
  });

});

function removeBoxing(){
	$('#xyzoverlay')
		.fadeOut('700', function(){
			$(this).remove();
	});
}