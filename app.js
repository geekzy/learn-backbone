App.HelloW = function($) {
	// private stuffs
	
	// public stuffs
	return {
		start : function() {
			console.log('Started');
		}
	}
}(jQuery);
jQuery(function() { App.HelloW.start(); });