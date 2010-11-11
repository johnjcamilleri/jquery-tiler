/**
 * jQuery Tiler plugin
 * 
 * 
 * @author John J. Camilleri
 * @version 1.0
 */

(function($){

	// Tile function
	$.fn.tile = function(opts) {
	
		// Default values
		var defaults = {
			widths: [300], // possible widths
			force_width: true
		};
		var options = $.extend(defaults, opts);
		
		// Get dimensions of container
		var container_width = this.width();
		var container_height = this.height();
		
		// DEBUG ONLY
		this.parent().find('.info').html("Container W: "+container_width+", H: "+container_height);
		
		// TODO: Attach some handler in case the page/container is resized?
		
		// Delete any previous columns and return childs to container
		this.find('.jquery-tiler-column').each(function(i){
			$(this).find('.jquery-tiler-block').appendTo( $(this).parent() );
			$(this).remove();
		});
		
		// Divide the page up into columns
		var columns;
		if (options.widths.length == 1) {
			// Easy
			var how_many_cols = Math.floor( container_width / options.widths[0] );
			for (var i = 0; i < how_many_cols; i++) {
				$('<div />')
					.addClass('jquery-tiler-column')
					.css({
						'float':'left',
						'width':options.widths[0],
						'background':'red',
						'margin-right':'1px'
					})
					.prependTo(this)
			}
			// Get hold of our new columns for later
			columns = this.find('.jquery-tiler-column');
		} else {
			// We need to find the different widths present and make some intellignet
			// calculation of optimal number of columns and their width
			
			// MAJOR TODO
		}
		
		// TODO: are we retrugnint the right thing?
		
		// Apply to each direct child of matching item
		return this.children(':gt('+(how_many_cols-1)+')').each(function(natural_index) {
			var obj = $(this);
			
			// Stick some basic info in it
			obj.html("Index: "+natural_index+", W: "+obj.outerWidth()+", H: "+obj.outerHeight());
			
			// Choose which column is the shortest
			var col_index = 0;
			var min_height = $(columns[col_index]).outerHeight();
			columns.each(function(i){
				var this_height = $(this).outerHeight();
				if (this_height < min_height) {
					min_height = this_height;
					col_index = i;
				}
			});
			var column = $(columns[col_index]);
			
			// Fix it and move it to column
			obj
				.addClass('jquery-tiler-block')
				.css({'float':'none'})
				.appendTo( column );
				
			// Adjust the width from whatever it may have been?
			if (options.force_width) {
				obj
					.width('auto')
					.wrap('<div style="width:100%;" />')
			}
			
		});

	};
})(jQuery);
