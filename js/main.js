

(function($){
	var header = $('#word');
	var win = $(window);

	TweenLite.fromTo(header, 1, {x:-100}, {x:100});
})(jQuery);



	var $story1 = $('#story1')
		img = $('#mask');
		text = $('#text1');
	TweenLite.from(img, 1, {x:-200, ease:Power1.easeOut});
	TweenLite.from(text, 1, {autoAlpha: 0, delay:1});
	
	$story1.waypoint(function(direction){
		if(direction == 'down')
			tween.restart()
	}, {offset: '50%'});
		



var $story2 = $('.story2');

	$story2.waypoint(function (direction){
		if(direction =='down'){
			$story2.addClass('js-story2-animate');
		} else{
			$story2.removeClass('js-story2-animate')
		}

	}, { offset: '50%' });

var $text3 = $('.story3');

$text3.waypoint(function(direction){
	if(direction == 'down'){
		$text3.addClass('js-animate');
	}else{
	$text3.removeClass('js-animate');
	}
}, {offset: '50%'});

var $story4 = $('.story4');

	$story4.waypoint(function (direction){
		if(direction =='down'){
			$story4.addClass('js-story4-animate');
		} else{
			$story4.removeClass('js-story4-animate')
		}

	}, { offset: '50%' });

var $story5 = $('.story5');

	$story5.waypoint(function (direction){
		if(direction =='down'){
			$story5.addClass('js-story5-animate');
		} else{
			$story5.removeClass('js-story5-animate')
		}

	}, { offset: '50%' });

