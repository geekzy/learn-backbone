
// Put this in a common javscript file just before app.js
jQueryView = Backbone.View.extend({
	initialize : function() {
		this.el = $(this.el);
		this.tmpl = $(this.tmpl);
	}
});

App.HelloW = function($) {	
	// private stuffs
	var HelloWorldView;
	
	// Creating a Backbone.View that supports jQuery
	HelloWorldView = jQueryView.extend({
		el : '#hello-world',
		tmpl : '#hello-world-tmpl',
		events : {
			'click #btnSay' : 'render'
		},
		
		initialize : function(params) {
			// call super initializer
			jQueryView.prototype.initialize.call(this);
			this.name = params.name || ''; // empty string by defualt
			this.bold = params.bold || true; // bold by default
			
			// initializing a button
			$.tmpl('<button id="btnSay">${text}</button>', {text : params.btn}).appendTo(this.el);
		},
		render : function() {	
			var content = this.tmpl.tmpl({name : this.name});
			
			// manipulating view a.k.a rendering view
			this.el.html(content)
				.css({'font-weight' : this.bold ? 'bold' : 'normal'});
		}
	});
	
	// public stuffs
	return {
		start : function() {
			// instatiating a view
			new HelloWorldView({				
				name : 'GeekZy',
				btn : 'Say it',
				tagName : 'span',
				id : 'foo',
				className : 'title',
			});
		}
	}
}(jQuery);
jQuery(function() { App.HelloW.start(); });