App.HelloW = function($) {	
	// private stuffs
	var HelloWorldView = Backbone.View.extend({
		el : '#hello-world',
		events : {
			'click #sayit' : 'render'
		},
		
		initialize : function(params) {
			this.name = params.name || ''; // empty string by defualt
			this.bold = params.bold || true; // bold by default
		},
		render : function() {			
			$(this.el).html(this.name + ' is Saying \'Hello World!\'')
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
			});
		}
	}
}(jQuery);
jQuery(function() { App.HelloW.start(); });