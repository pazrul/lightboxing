//var toOpen = [];

//for (img in document.images){
//	console.log(img);
//};

$(document).ready(function(){
  $('a[data-boxing="true"]').click(function(e){
		var imgUrl = $(this).attr('href');
		$overlay = $('<div id="xyzoverlay"></div>');
		$overlay
			.hide()
			.appendTo('body')
			.fadeIn('900');

		$('<div id="xyzframe"/>').appendTo('#xyzoverlay');
		//.ready(centerImage());

		$('<img class="xyzimg">').attr('src', imgUrl)
			.load(imgUrl, function(){
				var height = window.innerHeight;
				var width = window.innerWidth;
				var imgHeight = this.height;
				var imgWidth = this.width;
				console.log(height, width, imgHeight, imgWidth, imgUrl);
				$('#xyzframe').css({
					'top' : ((height / 2) - (imgHeight / 2)),
					'left' : ((width / 2) - (imgWidth /2))
				});


			})
			.appendTo('#xyzframe');
			
		$overlay.click(function(e){
			removeBoxing();
		});


    return false;
  });

});

function removeBoxing(){
	$('#xyzoverlay')
		.fadeOut('700', function(){
			$(this).remove();
	});
}

function centerImage(){
	var height = window.innerHeight;
	var width = document.innerWidth;
	$('')
}