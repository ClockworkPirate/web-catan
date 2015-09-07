var main = function () {
	var red = document.createElement("div");
	$(this).append(red);
	
	var yellow = document.createElement("div");
	$(this).append(yellow);
	
	$("div#dice").click(function () {
	});
};

$(document).ready(main);