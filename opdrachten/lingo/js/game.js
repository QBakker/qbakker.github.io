var random = Math.floor (Math.random() * 479);

var answer = words[random];
var answerArray = answer.split('');

var checkBtn = document.getElementById('check');

console.log (answer);

checkBtn.setAttribute('onclick', 'check()');

function check()
{
	for(var i = 0; i <=4; i++){
		
		var input = document.getElementById('letter_' + i);
		
		console.log(input.value);

		if(input.value === answerArray[i]) {
			input.style.backgroundColor = 'red';
		} else if(input.value === answerArray[1,2,3,4]) {
			input.style.backgroundColor = 'yellow';
		}
	}
}

