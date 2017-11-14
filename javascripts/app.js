var main = function () {
	"use strict";

	$("main #button_search").on("click", function(){
		var arr_img = [];
		var tag = $("main #tag_text").val();
		var url = "http://api.flickr.com/services/feeds/photos_public.gne?" +
		"tags="+tag+"&format=json&jsoncallback=?";
		$.getJSON(url, function(flickrResponse){
					arr_img = flickrResponse.items.map(function(item) {
						return item.media.m;
					});
				});
		var getData = function(iterator){
			var $img = $("<img>").hide();
			$img.attr("src", arr_img[iterator]);
			$("main div.photos").empty();
			$("main div.photos").append($img);
			$img.fadeIn();
			setTimeout(function(){
					iterator++;
					if(iterator > arr_img.length - 1) {
						getData(0);
					} else getData(iterator);
				} , 3000);
			};

			getData(0);	
			
		});
	
}
$(document).ready(main);