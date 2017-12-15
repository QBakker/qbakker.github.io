var random = Math.floor (Math.random() * 479);

var answer = words[random];
var answerArray = answer.split('');

var checkBtn = document.getElementById('check');

console.log (answer);

checkBtn.setAttribute('onclick', 'check()');

function check()
{
	var input = document.getElementById('letter_0');
	console.log(input.value);
}