var rolls = [5, 2, 6, 3, 8, 10, 9, 12, 11, 4, 8, 10, 9, 4, 5, 6, 3, 11];

var catanBoard = function (width) {
	var board = [];
	var pastRowsLen = 0;
	var desertLoc = Math.floor(Math.random() * (rolls.length + 1));
	for (var i = 0; i < width; i++) {
		var row = [];
		var rowLen = width - Math.abs(width / 2 - i) - ((i > width / 2) ? 1 : 0);
		for (var j = 0; j < rowLen; j ++) {
			row.push(pastRowsLen + j == desertLoc ? -1 : rolls.shift());
		}
		board.push(row);
		pastRowsLen += rowLen;
	}
	console.log(board);
}

var SQRT_3 = Math.sqrt(3);

var makeNiceContext = function (ctx) {
	ctx.x = 0;
	ctx.y = 0;
	
	ctx.move = function (x, y) {
		this.x = x;
		this.y = y;
		return this.moveTo(x, y);
	}
	
	ctx.moveR = function (dx, dy) {
		this.x += dx;
		this.y += dy;
		return this.moveTo(this.x, this.y);
	}
	
	ctx.lineR = function (dx, dy) {
		this.x += dx;
		this.y += dy;
		return this.lineTo(this.x, this.y);
	}

	ctx.drawRegHex = function (sideLength) {
		this.moveR(0, -sideLength);
		this.lineR(SQRT_3 * sideLength / 2, sideLength / 2);
		this.lineR(0, sideLength);
		this.lineR(SQRT_3 * -sideLength / 2, sideLength / 2);
		this.lineR(SQRT_3 * -sideLength / 2, -sideLength / 2);
		this.lineR(0, -sideLength);
		this.lineR(SQRT_3 * sideLength / 2, -sideLength / 2);
		this.moveR(0, sideLength);
	}
	
	ctx.moveHexCenter = function (sideLength, dx, dy) {
		this.moveR(SQRT_3 * sideLength * (dx - (dy % 2 == 0 ? 0 : 0.5)), 1.5 * sideLength * dy);
	}
	
	return ctx;
}

var main = function () {
	var ctx = makeNiceContext($("canvas#board")[0].getContext("2d"));
	var sideLength = 50;
	ctx.beginPath();
	ctx.move(300, 100);
	ctx.drawRegHex(sideLength);
	ctx.moveHexCenter(sideLength, 1, 0);
	ctx.drawRegHex(sideLength);
	ctx.moveHexCenter(sideLength, 1, 0);
	ctx.drawRegHex(sideLength);
	ctx.moveHexCenter(sideLength, -2, 1);
	ctx.drawRegHex(sideLength);
	ctx.moveHexCenter(sideLength, 1, 0);
	ctx.drawRegHex(sideLength);
	ctx.moveHexCenter(sideLength, 1, 0);
	ctx.drawRegHex(sideLength);
	ctx.moveHexCenter(sideLength, 1, 0);
	ctx.drawRegHex(sideLength);
	ctx.moveHexCenter(sideLength, -3, 1);
	ctx.drawRegHex(sideLength);
	ctx.moveHexCenter(sideLength, 1, 0);
	ctx.drawRegHex(sideLength);
	ctx.moveHexCenter(sideLength, 1, 0);
	ctx.drawRegHex(sideLength);
	ctx.moveHexCenter(sideLength, 1, 0);
	ctx.drawRegHex(sideLength);
	ctx.moveHexCenter(sideLength, 1, 0);
	ctx.drawRegHex(sideLength);
	ctx.moveHexCenter(sideLength, -4, 1);
	ctx.drawRegHex(sideLength);
	ctx.moveHexCenter(sideLength, 1, 0);
	ctx.drawRegHex(sideLength);
	ctx.moveHexCenter(sideLength, 1, 0);
	ctx.drawRegHex(sideLength);
	ctx.moveHexCenter(sideLength, 1, 0);
	ctx.drawRegHex(sideLength);
	ctx.moveHexCenter(sideLength, 1, 0);
	ctx.drawRegHex(sideLength);
	ctx.moveHexCenter(sideLength, 1, 0);
	ctx.drawRegHex(sideLength);
	ctx.moveHexCenter(sideLength, -4, 1);
	ctx.drawRegHex(sideLength);
	ctx.moveHexCenter(sideLength, 1, 0);
	ctx.drawRegHex(sideLength);
	ctx.moveHexCenter(sideLength, 1, 0);
	ctx.drawRegHex(sideLength);
	ctx.moveHexCenter(sideLength, 1, 0);
	ctx.drawRegHex(sideLength);
	ctx.moveHexCenter(sideLength, 1, 0);
	ctx.drawRegHex(sideLength);
	ctx.moveHexCenter(sideLength, -3, 1);
	ctx.drawRegHex(sideLength);
	ctx.moveHexCenter(sideLength, 1, 0);
	ctx.drawRegHex(sideLength);
	ctx.moveHexCenter(sideLength, 1, 0);
	ctx.drawRegHex(sideLength);
	ctx.moveHexCenter(sideLength, 1, 0);
	ctx.drawRegHex(sideLength);
	ctx.moveHexCenter(sideLength, -2, 1);
	ctx.drawRegHex(sideLength);
	ctx.moveHexCenter(sideLength, 1, 0);
	ctx.drawRegHex(sideLength);
	ctx.moveHexCenter(sideLength, 1, 0);
	ctx.drawRegHex(sideLength);
	ctx.stroke();
}

$(document).ready(main);