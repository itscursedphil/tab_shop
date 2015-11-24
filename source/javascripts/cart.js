$(document).ready(function(){
	if(window.location.pathname.indexOf("cart") > -1){
		$('.cart-item-quantity-remove').on("click",function(event){
			event.preventDefault();
			var e=$(this).closest("ul"),
				t=e.attr("id"),
				n=e.find(".cart-item-quantity span").html()-1;
				Cart.updateItem(t,n,function(cart){
					if(cart.items.length === 0){
	  					$.ajax({url:"",context:document.body,success:function(e){$(this).html(e);}});
					} else if(n>0) {
						$.ajax({url:"/cart", type: 'GET', success:function(data){
							var quantity = $(data).find('#quantity-item-' + t + ' span').html(),
								price = $(data).find('#price-item-' + t).html(),
								navTotal = $(data).find('#nav-cart-total').html();
								total = $(data).find('#cart-total span').html();
							$('#quantity-item-' + t + ' span').html(quantity);
							$('#price-item-' +t).html(price);
							$('#nav-cart-total').html(navTotal);
							$('#cart-total span').html(total);
						}});
					} else if(n===0) {
						$.ajax({url:"/cart", type: 'GET', success:function(data){
							var navTotal = $(data).find('#nav-cart-total').html();
								total = $(data).find('#cart-total span').html();
							$('#nav-cart-total').html(navTotal);
							$('#cart-total span').html(total);
						}});
						e.slideUp().fadeOut(function(){
							e.remove();
						});
					}
				});
		});
		$('.cart-item-quantity-add').on("click",function(event){
			event.preventDefault();
			var e=$(this).closest("ul"),
				q = parseInt(e.find('.cart-item-quantity span').html()),
				a = parseInt(e.attr('data-product-available'));
			if(e.itemAvailable(q, a)){
				var	t=e.attr("id"),
					n=parseInt(e.find(".cart-item-quantity span").html())+1;
				Cart.updateItem(t,n,function(cart){
					$.ajax({url:"/cart", type: 'GET', success:function(data){
						var quantity = $(data).find('#quantity-item-' + t + ' span').html(),
							price = $(data).find('#price-item-' + t).html(),
							navTotal = $(data).find('#nav-cart-total').html();
							total = $(data).find('#cart-total span').html();
						$('#quantity-item-' +t + ' span').html(quantity);
						$('#price-item-' +t).html(price);
						$('#nav-cart-total').html(navTotal);
						$('#cart-total span').html(total);
					}});
				});
			}
		});
		$(".cart-item-remove a").on("click",function(event){
			event.preventDefault();
			var e=$(this).closest("ul"),
				t=e.attr("id"),
				n=0;
				Cart.updateItem(t,n,function(cart){
					//e.find('#quantity-item-' + t).load(location.href + ' #quantity-item-' + t);
					if(cart.items.length === 0){
	  					$.ajax({url:"",context:document.body,success:function(e){$(this).html(e);}});
					} else {
						$.ajax({url:"/cart", type: 'GET', success:function(data){
							var navTotal = $(data).find('#nav-cart-total').html();
								total = $(data).find('#cart-total span').html();
							$('#nav-cart-total').html(navTotal);
							$('#cart-total span').html(total);
						}});
						e.slideUp().fadeOut(function(){
							e.remove();
						});
					}
				});
		});
	}
});