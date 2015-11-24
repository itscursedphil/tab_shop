$(document).ready(function(){	
	if(window.location.pathname.indexOf("products") > -1 || window.location.pathname.indexOf("category") > -1){
		var winWidth = $(window).width();
		if(winWidth > 620){
			$('.category-name').each(function(){
				var el = $(this);
				var oldPosition = 0;
				$(window).scroll(function(){
					var offset = el.offset().top;
					var position = offset - $(window).scrollTop();
					var direction = function(){
						if(oldPosition > position){
							return 'up';
						} else {
							return 'down';
						}
					};
					if(position < 200 && el.hasClass('anim-fadeout') === false && direction() == 'up'){
						el.addClass('anim-fadeout');
					} else if(position > 100 && el.hasClass('anim-fadeout') === true && direction() == 'down'){
						el.removeClass('anim-fadeout');
					}
					oldPosition = position;
				});
			});
			$('.product').each(function(){
				var el = $(this);
				var oldPosition = 0;
				$(window).scroll(function(){
					var offset = el.offset().top;
					var position = offset - $(window).scrollTop();
					var direction = function(){
						if(oldPosition > position){
							return 'up';
						} else {
							return 'down';
						}
					};
					if(position < 100 && el.hasClass('anim-fadeout') === false && el.hasClass('anim-movedown') === false && direction() == 'up'){
						el.addClass('anim-fadeout').addClass('anim-movedown');
					} else if(position > 0 && el.hasClass('anim-fadeout') === true && el.hasClass('anim-movedown') === true && direction() == 'down'){
						el.removeClass('anim-fadeout').removeClass('anim-movedown');
					}
					oldPosition = position;
				});
			});
		}
	}
});