// Put the game frame in a variable
var game = document.getElementById("game");

// Create a array for the current colors on the bullets
var currentColors = [-1, -1, -1, -1];

// # mastermind : Start
// Save all the available colors
var colors = ["red", "blue", "green", "yellow", "pink", "purple"];

// Pick 4 random colors
var picked = [getRandomColor(), getRandomColor(), getRandomColor(), getRandomColor()];

// Create a function to generate a random color
function getRandomColor(){
	/*
		Generate a random color
		Math.random() generates a random number between 0 and 1
		Multiply that to the count of available colors
		Math.floor() remove all the floating digits
	*/ 
	var random = Math.floor(   Math.random() * colors.length   );
	// Use that number to pick a random word
	return colors[random];
}

// # Generate board

// Generate 12 rows in a forlus
for(var rowCount = 0; rowCount < 12; rowCount++){
	// create a div object
	var row = document.createElement("div");
	// set the id of the row, including the row number
	row.setAttribute("id", "row_" + rowCount);
	// Generate 4 column per row in a forlus
	for(var column = 0; column < 4; column++){
		// Create for each bullet in each row a unique div
		var bullet = document.createElement("div");
		// Set the id attribute of the div to bullet_ with the row number and the current column
		bullet.setAttribute("id", "bullet_" + rowCount + "_" + column);
		// Set the class attribute 
		bullet.setAttribute("class", "bullet");
		// Create a onclick function for each bullet
		bullet.setAttribute("onclick", "setColor("+column+")");
		// Add the bullet to the row 
		row.appendChild(bullet);
	}
	// When we finished generating all the bullets, add them to the game frame
	game.appendChild(row);
}

// # Enable colorpicking

function setColor(f_id){
	// Put the bullet html element in a variable
	var bullet = document.getElementById("bullet_0_" + f_id);
	
	// Add one to the index of the current color
	currentColors[f_id]++;

	// If the current color is higher than the length of the colors, than set the currentColor to 0
	if(currentColors[f_id] == colors.length){
		currentColors[f_id] = 0;
	}
	// Put the next color id in an index variable
	var index = currentColors[f_id];

	// change the style
	bullet.style.backgroundColor = colors[index];
}

