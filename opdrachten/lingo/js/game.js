var random = Math.floor (Math.random() * 479);

var answer = words[random];
var answerArray = answer.split('');

var checkBtn = document.getElementById('check');

console.log (answer);

checkBtn.setAttribute('onclick' , 'check()');

function check()
{
	for(var i = 0; i <=4; i++){
		var	input = document.getElementById('letter_' + i);

		for (var j = 0; j <= 4; j++) {
			if(input.value === answerArray[j]) {
				input.style.backgroundColor = 'yellow';
			}
		}
	}
	for(var i = 0; i <=4; i++){
		var	input = document.getElementById('letter_' + i);

		if(input.value === answerArray[i]) {
			input.style.backgroundColor = 'red';
		}
	}
}

function init()
{

}

function enter(e)
{
	if (e.keyCode === 13) {
		check();
	}
}

