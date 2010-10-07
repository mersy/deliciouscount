$.fn.mersydeliciouscount = function(thisURL){
    return this.each(function(){
		$.ajax({ 
			type: "GET",
			dataType: "json",
			url: "http://feeds.delicious.com/v2/json/urlinfo/data?url="+thisURL+"&amp;callback=?",
			success: function(data){
				var count = 0;
				if (data.length > 0) {
					count = data[0].total_posts;
				}
			$("#deliciousCount").html('<a href="http://delicious.com/url/?url='+thisURL+'" id="deliciousCount">'+count+'</a>');
			}
		});
    });
}
