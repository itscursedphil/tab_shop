(function(e){e.fn.itemAvailable=function(e,t){var n=function(){return t<=e?!1:!0};return n()}})(jQuery),$(document).ready(function(){if(window.location.pathname.indexOf("products")>-1||window.location.pathname.indexOf("category")>-1){var e=$(window).width();e>620&&$(".category-name").each(function(){var e=$(this),t=0;$(window).scroll(function(){var n=e.offset().top,r=n-$(window).scrollTop(),i=function(){return t>r?"up":"down"};r<200&&e.hasClass("anim-fadeout")===!1&&i()=="up"?e.addClass("anim-fadeout"):r>100&&e.hasClass("anim-fadeout")===!0&&i()=="down"&&e.removeClass("anim-fadeout"),t=r})})}}),$(document).ready(function(){function e(t){var n=t,r=n.parent(),i=n.find("span"),s=i.html(),o=$(".nav-overview #nav-cart-total"),u=$(".product-details form option:selected").attr("value");Cart.addItem(u,1,function(t){n.fadeOut(function(){n.remove(),r.append('<span class="button-small button-success">Item added!</span>')}),o.parent().load(location.href+" #nav-cart-total"),setTimeout(function(){r.find(".button-success").fadeOut(function(){$(this).remove(),r.append('<button name="submit" type="submit" title="Add to Cart" class="button-small button-buy"><span class="anim-underline">'+s+"</span></button>"),$(".product-single .product-details .button-buy").on("click",function(t){t.preventDefault();var n=$(this);e(n)})})},2e3)})}$(".product-single .product-details .button-buy").on("click",function(t){t.preventDefault();var n=$(this);e(n)})}),$(document).ready(function(){window.location.pathname.indexOf("cart")>-1&&($(".cart-item-quantity-remove").on("click",function(e){e.preventDefault();var t=$(this).closest("ul"),n=t.attr("id"),r=t.find(".cart-item-quantity span").html()-1;Cart.updateItem(n,r,function(e){e.items.length===0?$.ajax({url:"",context:document.body,success:function(e){$(this).html(e)}}):r>0?$.ajax({url:"/cart",type:"GET",success:function(e){var t=$(e).find("#quantity-item-"+n+" span").html(),r=$(e).find("#price-item-"+n).html(),i=$(e).find("#nav-cart-total").html();total=$(e).find("#cart-total span").html(),$("#quantity-item-"+n+" span").html(t),$("#price-item-"+n).html(r),$("#nav-cart-total").html(i),$("#cart-total span").html(total)}}):r===0&&($.ajax({url:"/cart",type:"GET",success:function(e){var t=$(e).find("#nav-cart-total").html();total=$(e).find("#cart-total span").html(),$("#nav-cart-total").html(t),$("#cart-total span").html(total)}}),t.slideUp().fadeOut(function(){t.remove()}))})}),$(".cart-item-quantity-add").on("click",function(e){e.preventDefault();var t=$(this).closest("ul"),n=parseInt(t.find(".cart-item-quantity span").html()),r=parseInt(t.attr("data-product-available"));if(t.itemAvailable(n,r)){var i=t.attr("id"),s=parseInt(t.find(".cart-item-quantity span").html())+1;Cart.updateItem(i,s,function(e){$.ajax({url:"/cart",type:"GET",success:function(e){var t=$(e).find("#quantity-item-"+i+" span").html(),n=$(e).find("#price-item-"+i).html(),r=$(e).find("#nav-cart-total").html();total=$(e).find("#cart-total span").html(),$("#quantity-item-"+i+" span").html(t),$("#price-item-"+i).html(n),$("#nav-cart-total").html(r),$("#cart-total span").html(total)}})})}}),$(".cart-item-remove a").on("click",function(e){e.preventDefault();var t=$(this).closest("ul"),n=t.attr("id"),r=0;Cart.updateItem(n,r,function(e){e.items.length===0?$.ajax({url:"",context:document.body,success:function(e){$(this).html(e)}}):($.ajax({url:"/cart",type:"GET",success:function(e){var t=$(e).find("#nav-cart-total").html();total=$(e).find("#cart-total span").html(),$("#nav-cart-total").html(t),$("#cart-total span").html(total)}}),t.slideUp().fadeOut(function(){t.remove()}))})}))}),$(document).ready(function(){window.location.pathname.indexOf("contact")>-1&&$(".contact-form input[type=text]").each(function(){if($(this).val()!==""){var e=$(this).parent().find("label");e.addClass("form-label-focus")}}),$(".contact-form input[type=text]").on("focusin",function(){var e=$(this).parent().find("label");e.hasClass("form-label-focus")||e.addClass("form-label-focus")}),$(".contact-form input[type=text]").on("focusout",function(){var e=$(this).parent().find("label"),t=$(this).val();t||e.removeClass("form-label-focus")})});