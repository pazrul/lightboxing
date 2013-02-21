//constants

var KEY_ESC = 27;

//helper functions

function removeBoxing(){
	$('#xyzoverlay')
		.fadeOut('700', function(){
			$(this).remove();
	});
}

//Need an animate and center funciton. I don't want to do it how it is now



// Start watching for clicks, and prevent clicking through
$(document).ready(function(){
  $('a[data-boxing="true"]').click(function(e){
		e.preventDefault();

		//get the address for the large size image
		var imgUrl = $(this).attr('href');
		
		//start overlay creation. This can be cleaned up to have all of it in one declaration
		var overlay = $('<div id="xyzoverlay"></div>');
		overlay
			.hide()
			.appendTo('body')
			.fadeIn('900');

		//Image border and containment div
		$('<div id="xyzframe"/>').appendTo('#xyzoverlay').css({
			'top': (window.innerHeight / 2),
			'left': (window.innerWidth / 2)
		});

		//Actual image load. Doesn't animate properly and it needs to be fixed.
		$('<img class="xyzimg">').attr('src', imgUrl)
			.ready(function(){
				$('#xyzframe').animate({
					'top' : ((window.innerHeight / 2) - (this.height / 2)),
					'left' : ((window.innerWidth / 2) - (this.width /2))
				}, 2000);


			})
			.appendTo('#xyzframe');
		
		/*Need to change this to stop event propagation. 
		If someone clicks on the image it currently removes the image and overlay.
		Also want to add 'esc' key to leave.
		*/
		
		overlay.click(function(e){
			removeBoxing();
		});

		//should remove lightbox on esc. It doesn't.
		$('#overlay').keyup(function(e) {
			if (e.keyCode == KEY_ESC) {removeBoxing();}
		});
  });

});