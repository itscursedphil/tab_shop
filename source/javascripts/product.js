$(document).ready(function(){
	function addToCart(el){
		var elem = el,
			container = elem.parent(),
			text = elem.find('span'),
			initText = text.html(),
			cartTotal = $('.nav-overview #nav-cart-total'),
			productId = $('.product-details form option:selected').attr('value');
			Cart.addItem(productId, 1, function(cart) {
				elem.fadeOut(function(){
					elem.remove();
					container.append('<span class="button-small button-success">Item added!</span>');
				});
				//text.html('Item added to cart!');
				cartTotal.parent().load(location.href + ' #nav-cart-total');
				//$.ajax({url:location.href + ' #nav-cart-total',context: cartTotal,success:function(newCart){$(this).html(newCart);}});
				setTimeout(function(){
					container.find('.button-success').fadeOut(function(){
					$(this).remove();
						container.append('<button name="submit" type="submit" title="Add to Cart" class="button-small button-buy"><span class="anim-underline">' + initText + '</span></button>');
						$('.product-single .product-details .button-buy').on('click', function(e){
							e.preventDefault();
							var _this = $(this);
							addToCart(_this);
						});
					});
					//text.html(initText);
				}, 2000);
    		});
	}
	$('.product-single .product-details .button-buy').on('click', function(e){
		e.preventDefault();
		var _this = $(this);
		addToCart(_this);
	});
});