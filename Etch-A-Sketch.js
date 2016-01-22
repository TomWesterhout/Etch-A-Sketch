$(document).ready(function() {
	standardGrid();
});

// Function which creates the standard grid of 16x by 16x divs, at a height based on the grid size and total amount of divs.
function standardGrid() {

	resetGrid();

	var tileStandard = 16;
	var tileTotal = tileStandard * tileStandard;

	for (i = 0; i < tileTotal; i++) {
		$(".grid").append("<div class='tile'></div>");
	}

	divSizeStandard();

	hoverStandard();
}

// Function which resets the grid to contain zero divs.
function resetGrid() {
	$(".tile").remove();
}

// Function which sets the width and height of the divs based on the standard settings 16x by 16x.
function divSizeStandard() {

	var gridWidth = 640;
	var tileStandard = 16;
	var tileSize = (gridWidth / tileStandard) -2;

	$(".tile").css({'width': tileSize, 'height': tileSize});
}

// Function which changes the color of the divs inside the grid when hovering takes place.
function hoverStandard() {
	$(".tile").hover(function() {
		$(this).animate({'background-color': '#bcbcbc'}, 400);
	});
}

// Function which creates a grid with a total of divs based on the input value.
function createGrid() {

	var tileTotal = document.getElementById("input").value; // Input value given by user.
	var numberCheck = isNaN(tileTotal);						// Checks whether the input is a number.

	if (tileTotal <= 0) {
		confirm("Input has to be higher than zero.");		// Message given if input is zero or lower.
	}
	else if (numberCheck === true) {
		confirm("Input has to be a number.");				// Message given if input is not a number.
	};

	resetGrid();

	for (i = 0; i < tileTotal; i++) {
		$(".grid").append("<div class='tile'></div>");		// Sets the total amount of divs based on the user input.
	}

	divSize();

	hoverStandard();
}

// Function which sets the width and height of the divs based on the input from the user.
function divSize() {

	var gridWidth = 640;
	var tileCount = document.getElementById("input").value;
	var tileSide = Math.sqrt(tileCount);
	var tileSize = (gridWidth / tileSide) -2;

	$(".tile").css({'width': tileSize, 'height': tileSize});
}