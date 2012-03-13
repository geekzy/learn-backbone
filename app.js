
// Put this in a common javscript file just before app.js
jQueryView = Backbone.View.extend({
	initialize : function() {
		this.el = $(this.el);
		this.tmpl = $(this.tmpl);
	}
});

App.HelloW = function($) {	
	// private stuffs
	var HelloWorldView = jQueryView.extend({
		el : '#hello-world',
		tmpl : '#hello-world-tmpl',
		events : {
			'click #sayit' : 'render'
		},
		
		initialize : function(params) {
			// call super initializer
			jQueryView.prototype.initialize.call(this);
			this.name = params.name || ''; // empty string by defualt
			this.bold = params.bold || true; // bold by default
		},
		render : function() {	
			var content = this.tmpl.tmpl({name : this.name});
			this.el.html(content)
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