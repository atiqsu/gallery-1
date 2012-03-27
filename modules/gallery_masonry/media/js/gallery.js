$(document).ready(function(){
	var base = location.href.replace(/#.*/, '');

	$("#images a").fancybox({
		'margin'         : 0,
		'padding'        : 0,
		'changeSpeed'    : 100,
		'overlayShow'    : true,
		'overlayOpacity' : 0.95,
		'titlePosition'  : 'over',
		'transitionIn'   : 'elastic',
		'transitionOut'  : 'elastic',
		'onComplete'     : function() {
			var hash = '#' + $(this.orig.context).attr('file');
			history.replaceState('', '', base + hash);
		},
		'onClosed'       : function() {
			history.replaceState('', '', base);
		}
	});

	// load image, if linked
	$('#images a[file="' + location.hash.substr(1) + '"]').click();

	var anim = function(ancestor, action) {
		var el = ancestor.find('img');
		if (el.length == 0) { el = ancestor; }
		el[action]('hover', 'fast');
	}

	$("a").hover(function(){
		anim($(this), "addClass");
	}, function(){
		anim($(this), "removeClass");
	});

	$('#images').imagesLoaded(function() {
		$('#images').masonry({
			itemSelector : '.pic',
			columnWidth : 10,
			isAnimated : true
		});
	});
});
