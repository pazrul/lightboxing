var toOpen = [];

for (img in document.images){
	console.log(img);
};

$('a[data-boxing="true"]').click(function(e){
	$('<div id="xyzoverlay"></div>').appendTo('body');

	return false;
});