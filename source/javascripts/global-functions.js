(function($) {

    $.fn.itemAvailable = function(quantity, available) {

        var validate = function(){
			if(available <= quantity){
				return false;
			} else {
				return true;
			}
        };

        return validate();

    };

}(jQuery));