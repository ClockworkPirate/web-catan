var main = function () {
	$("div#dice").click(function () {
		$(this).add(new HTMLDivElement())
	});
};

$(document).ready(main);