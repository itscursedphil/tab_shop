$(document).ready(function(){
	if(window.location.pathname.indexOf("contact") > -1){
		$('.contact-form input[type=text]').each(function(){
			if($(this).val() !== ''){
				var label = $(this).parent().find('label');
				label.addClass('form-label-focus');
			}
		});
	}
	$('.contact-form input[type=text]').on('focusin', function(){
		var label = $(this).parent().find('label');
		if(!label.hasClass('form-label-focus')){
			label.addClass('form-label-focus');
		}
	});
	$('.contact-form input[type=text]').on('focusout', function(){
		var label = $(this).parent().find('label');
		var input = $(this).val();
		if(!input){
			label.removeClass('form-label-focus');
		}
	});
});