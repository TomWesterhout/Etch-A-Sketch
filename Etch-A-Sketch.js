$(document).ready(function() {
	standardGrid();
});

function standardGrid() {

	resetGrid();

	var tile = $("<div class='tile'></div>");
	var tileStandard = 16;
	var tileTotal = tileStandard * tileStandard;

	for (i = 0; i < tileTotal; i++) {
		$(".grid").append("<div class='tile'></div>");
	}

	gridSize();

	hoverStandard();
}

function resetGrid() {
	$(".tile").remove();
}

function gridSize() {

	var gridWidth = 640;
	var tileStandard = 16;
	var tileWidth = (gridWidth / tileStandard) -2;

	$(".tile").css({'width': tileWidth, 'height': tileWidth});
}

function hoverStandard() {
	$(".tile").hover(function() {
		$(this).animate({'background-color': '#bcbcbc'}, 400);
	});
}