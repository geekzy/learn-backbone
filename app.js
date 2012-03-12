App.HelloW = function($) {
	// private stuffs
	var HelloWorldView = Backbone.View.extend({
		render : function() {
			$(this.el).html('Hello World!');
		}
	});
	
	// public stuffs
	return {
		start : function() {
			new HelloWorldView().render();
		}
	}
}(jQuery);
jQuery(function() { App.HelloW.start(); });