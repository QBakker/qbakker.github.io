var color = ['red', 'green', 'blue', 'yellow', 'white', 'black']; // kleuren
var row = 0; 		//Rij nummer
var answer = []; 	//Antwoord
var input = ['white','white','white','white']; 	//Ingevuld
var result = []; 	//Uitkomst


function start()
{
	createCheckButton();
	for (var i=0; i< color.length; i++){
		colorButton = document.createElement('button');
		colorButton.id = i;
		colorButton.setAttribute('onClick', 'setColor(event)');
	 	colorButton.style.backgroundColor = color[i];
		colorButton.style.borderRadius = '15px';
		document.getElementById('menu').appendChild(colorButton);
	}
	createButton();
	setAnswer();
	createPins();
}

function createButton()
{
	for (var i = 0; i < 4; i++) {
		targetButton = document.createElement('button');
		targetButton.id = 'ball_' + row + '_' + i;
		targetButton.setAttribute('onClick', 'placeColor(event)');
		targetButton.style.backgroundColor = 'white';
		document.getElementById('screen').appendChild(targetButton);
	}
	row++;
}

function createCheckButton()
{
	checkButton = document.createElement('button');
	checkButton.id = 'checkButton';
	checkButton.setAttribute('onClick', 'check()');
	checkButton.style.display = 'block';
	checkButton.style.width = '100px';
	checkButton.style.height = '30px';
	checkButton.style.margin = '25px','10px';
	document.getElementById('menu').appendChild(checkButton);
	document.getElementById('checkButton').innerHTML = 'Check';
}

function createPins()
{
	for (var i = 0; i <4; i++){
		targetPin = document.createElement('button');
		targetPin.id = 'pin' + row + '_' + i;
		targetPin.style.backgroundColor = 'white';
		document.getElementById('pins').appendChild(targetPin);
		targetPin.style.width = '25px';
		targetPin.style.height = '25px';
		targetPin.style.marginTop = '25px';
	}
}

function setColor(event)
{
	x = event.target.style.backgroundColor;
}

function placeColor(event)
{
	event.target.style.backgroundColor = x;
}

function setAnswer()
{
	for (i=0; i<4; i++){
		answer.push(color[Math.floor(Math.random() * color.length)]);
	}
		console.log(answer);
}

function getInput()
{
	for (var i = 0; i < 4; i++){
		input[i] = document.getElementById('ball_' + (row - 1) + '_' + i).style.backgroundColor;
	}
}

function disablePreviousRow()
{
	for (var j = 0; j < 4; j++) {
		document.getElementById('ball_' + (row - 2) + '_' + j).setAttribute('disabled', 'disabled');
	}
}

function check()
{
	var tempAnswer = answer.slice();
	getInput();
	for(var i = 0; i < 4; i++){
		if (tempAnswer[i] === input[i]){
			delete tempAnswer[i];
		}
	}
	for (var j = 0; j < 4; j++){
		for (var k = 0; k <4; k++){
			if (tempAnswer[j] === input[k]) {
				delete tempAnswer[j];
			}
		}
	}
	console.log(tempAnswer);
 	createButton();
 	disablePreviousRow();
 	createPins();
}
