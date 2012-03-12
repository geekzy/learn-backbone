App.HelloW = function($) {	
	// private stuffs
	var HelloWorldView = Backbone.View.extend({
		container : '#hello-world',		
		initialize : function() {
			this.bold = true;
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
				tagName : 'span',
				id : 'foo',
				className : 'title',
			}).render();
		}
	}
}(jQuery);
jQuery(function() { App.HelloW.start(); });