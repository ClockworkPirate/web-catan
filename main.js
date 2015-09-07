var rolls = [5, 2, 6, 3, 8, 10, 9, 12, 11, 4, 8, 10, 9, 4, 5, 6, 3, 11].reverse();

var catanBoard = function (width) {
	var board = [];
	var pastRowsLen = 0;
	var desertLoc = Math.floor(Math.random() * (rolls.length + 1));
	for (var i = 0; i < width; i++) {
		var row = [];
		var rowLen = width - Math.abs(width / 2 - i) - ((i > width / 2) ? 1 : 0);
		for (var j = 0; j < rowLen; j ++) {
			row.push(pastRowsLen + j == desertLoc ? -1 : rolls.pop());
		}
		board.push(row);
		pastRowsLen += rowLen;
	}
	console.log(board);
}

var main = function () {
	console.log($("canvas#board"));
}

$(document).ready(main);