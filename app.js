App.HelloW = function($) {	
	// private stuffs
	var HelloWorldView = Backbone.View.extend({
		container : '#hello-world',		
		initialize : function(params) {
			this.name = params.name || '';
			this.bold = params.bold || false;
		},
		render : function(text) {
			var div = $(this.container);			
			$(this.el).html('Saying \'Hello World!\'').appendTo(div)
				.css({'font-weight' : this.bold ? 'bold' : 'normal'});
		}
	});
	
	// public stuffs
	return {
		start : function() {
			new HelloWorldView({
				name : 'GeekZy',
				tagName : 'span',
				id : 'foo',
				className : 'title',
			}).render();
		}
	}
}(jQuery);
jQuery(function() { App.HelloW.start(); });