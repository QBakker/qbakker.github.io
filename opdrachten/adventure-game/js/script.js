var title = document.getElementById('title');
var image = document.getElementById('image');
var start = document.getElementById('start');

var again = document.getElementById('again');
var gameOver = document.getElementById('gameOver');
var gameOverSituation = document.getElementById('gameOverSituation');

var options = document.getElementsByClassName('options');
var nav1 = document.getElementById('nav1');
var nav2 = document.getElementById('nav2');
var nav3 = document.getElementById('nav3');

var item1 = document.getElementById('item1');
var item2 = document.getElementById('item2');
var item3 = document.getElementById('item3');

var tool1 = document.getElementById('tool1');
var tool2 = document.getElementById('tool2');
var tool3 = document.getElementById('tool3');
var tool4 = document.getElementById('tool4');
var tool5 = document.getElementById('tool5');
var tool6 = document.getElementById('tool6');
var tool7 = document.getElementById('tool7');
var tool8 = document.getElementById('tool8');




var inventory = document.getElementById('inventory');
var close = document.getElementById('close');

var text = document.getElementById('text');

title.innerHTML = 'Adventure Game';
start.innerHTML = 'Start Game';
start.setAttribute('onclick','startGame()');
image.src = 'img/black.jpg';

window.onload = function() 

// var tools = [];
// for(var i = 1; i <= 8; i++){
// 	tools.push(document.getElementById('tool' + i));
// }
// console.log(tools);

// function toolShift(){
// 	for(var i = 0; i < 8; i++){
// 		console.log(tools[i].src);
// 		if(tools[i].src == ""){
// 			if(i < tools.length - 2){
// 				tools[i].src = tools[i + 1].src;
// 			}
// 		}
// 	}
// }
{
	localStorage.clear();
}

function startGame() 
{
	clear();
	title.innerHTML = 'Adventure Game';
	image.src = 'img/welcome2.gif';
	start.style.display = 'none';
	localStorage.setItem('key', 'room');
	localStorage.setItem('person1', 'sleep');
	localStorage.setItem('cellphone', 'notFound');
	localStorage.setItem('rope', 'room');
	setTimeout(function()
	{
    	hotelRoom();
    }, 2400);
}

function clear() 
{
	item1.src = '';
	item2.src = '';
	item3.src = '';
	options.src = '';
	
	again.style.display = 'none';
	gameOver.style.display = 'none';
	gameOverSituation.style.display = 'none';
	
	again.src = '';
	gameOver.src = '';
	gameOverSituation.src = '';

	start.src = '';
	start.style.display = 'none';
}

function storageOpen()
{
	close.style.display = 'block';
	inventory.style.display = 'block';
	backpack.src = 'img/item/bagOpen.png';
	backpack.setAttribute('onclick', 'storageClose()');
	tool1.style.display = 'block';
	tool2.style.display = 'block';
	tool3.style.display = 'block';
	tool4.style.display = 'block';
	tool5.style.display = 'block';
	tool6.style.display = 'block';
	tool7.style.display = 'block';
	tool8.style.display = 'block';
}

function storageClose()
{
	inventory.style.display = 'none';
	close.style.display = 'none';
	backpack.src = 'img/item/bagClose.png';
	backpack.setAttribute('onclick', 'storageOpen()');
	tool1.style.display = 'none';
	tool2.style.display = 'none';
	tool3.style.display = 'none';
	tool4.style.display = 'none';
	tool5.style.display = 'none';
	tool6.style.display = 'none';
	tool7.style.display = 'none';
	tool8.style.display = 'none';
}

function popup()
{
	setTimeout(function() {
				text.style.display = 'block';
				textBg.style.display = 'block';
			},100);

	setTimeout(function() {
			text.style.display = 'none';
			textBg.style.display = 'none';
		},4000);
}

function pickupKey() 
{
	localStorage.setItem('key', 'bag');
		
	item1.style.display = 'none';
	tool1.src = 'img/item/key.png';
	hotelRoom();

	popup();
	text.innerHTML = 'Good Job, You picked up the key!';
}

function usedKey()
{
	localStorage.setItem('key', 'used');

	tool1.src = '';
	storageClose();
	
	popup();
	text.innerHTML = 'Well Done, you opened the door to the Hall.';
}

function hotelRoom()
{
		clear();
		title.innerHTML = 'Hotel Room';
		image.src = 'img/bg/hotelRoom.jpg';
		backpack.style.display = 'block';
		
		nav1.style.top = '300px';
		nav1.style.left = '0px';
		nav1.src = 'img/item/arrowHall.png';
		nav1.setAttribute('onclick', 'hall()');

	if (localStorage.getItem('key') === 'room') {

		item1.style.width = '90px';
		item1.style.height = '70px';
		item1.style.top = '435px';
		item1.style.left = '250px';
		item1.src = 'img/item/key.png';
		item1.setAttribute('onclick', 'pickupKey()');

		popup();
		text.innerHTML = 'Are you there, helloooo..????';

	} else if (localStorage.getItem('key') === 'bag') {

		tool1.setAttribute('onclick', 'usedKey()');	

	} else if (localStorage.getItem('key') === 'used') {

		popup();
		text.innerHTML = 'Did you forget something?';

	} else if (localStorage.getItem('key') === 'notFound') {

		item1.style.width = '90px';
		item1.style.height = '70px';
		item1.style.top = '435px';
		item1.style.left = '250px';
		item1.src = 'img/item/key.png';
		item1.setAttribute('onclick', 'pickupKey()');

		popup();
		text.innerHTML = 'Find the key to open the door.';
	}
}

function hall()
{
	if (localStorage.getItem('key') === 'used') {
		clear();
	    title.innerHTML = 'Hall';
	    image.src = 'img/bg/hall.jpg';

		nav1.style.top = '44px';
		nav1.style.left = '88px';
	    nav1.src = 'img/item/room1.png';
	    nav1.setAttribute('onclick', 'room1()');

	    nav2.style.top = '174px';
	    nav2.style.left = '494px';
	    nav2.src = 'img/item/room2.png';
	    nav2.setAttribute('onclick', 'room2()');

		nav3.style.top = '198px';
		nav3.style.left = '666px';
		nav3.src = 'img/item/room3.png';
	    nav3.setAttribute('onclick', 'room3()');

		nav4.style.top = '1px';
		nav4.style.left = '1154px';
		nav4.src = 'img/item/hotelRoom.png';
		nav4.setAttribute('onclick', 'hotelRoom()');

		popup();
	    text.innerHTML = 'Find a way out.';

	} else if (localStorage.getItem('key') === 'bag') {
		popup();
		hotelRoom();
		text.innerHTML = 'The door is closed... use a key.';
	} else if (localStorage.getItem('key') === 'room') { 
		localStorage.setItem('key', 'notFound');
		popup();
		hotelRoom();
	}
}

function wakeUp()
{
	localStorage.setItem('person1', 'awake');
	localStorage.setItem('cellphone', 'room');

	item1.src = 'img/item/person1.png';
	item1.style.top = '17px';
	item1.style.left = '1px';
	room1();   
}

function room1()
{
		clear();
	    title.innerHTML = 'Room 1';
	    image.src = 'img/bg/room1.jpg';

	    nav1.style.top = '10px';
	    nav1.style.left = '10px';
		nav1.src = 'img/item/arrowBack.png';
   		nav1.setAttribute('onclick', 'hall()');

   		nav2.style.top = '400px';
   		nav2.style.left = '1080px';
   		nav2.src = 'img/item/arrowBathroom.png';
    	nav2.setAttribute('onclick', 'bathroom()');

	if (localStorage.getItem('person1') === 'sleep') {

	    item1.style.display = 'block';
	    item1.style.top = '275px';
	    item1.style.left = '540px';
	    item1.src = 'img/item/person1Sleep.png';
	    item1.setAttribute('onclick', 'wakeUp()');

	    item2.style.display = 'none';

	} else if (localStorage.getItem('person1') === 'awake') {

		item1.style.display = 'block';
		item1.style.top = '17px';
		item1.style.left = '1px';
		item1.src = 'img/item/person1.png';

		popup();
		text.innerHTML = 'I think i heard your phone in the bathroom...';

		nav4.style.top = '150px';
		nav4.style.left = '1080px';
	    nav4.src = 'img/item/arrowStairs.png';
    	nav4.setAttribute('onclick', 'stairs()');
	}
}

function cellphone()
{
	localStorage.setItem('cellphone', 'found');
	item2.src = '';
	tool8.src = 'img/item/cellphone.png';
}

function noService()
{
	item3.style.display = 'block';
	item3.style.top = '300px';
	item3.style.left = '400px';
	item3.src ='img/item/phone.png';

}

function bathroom()
{
	clear();
    title.innerHTML = 'Bathroom';
    image.src = 'img/bg/bathroom.jpg';

	nav1.style.top = '10px';
    nav1.style.left = '10px';
	nav1.src = 'img/item/arrowBack.png';
	nav1.setAttribute('onclick', 'room1()');

	if (localStorage.getItem('cellphone') === 'room') { 
		item2.style.top ='560px';
		item2.style.left ='265px';
		item2.style.display = 'block';
		item2.src = 'img/item/cellphone.png';
		item2.setAttribute('onclick', 'cellphone()');

	} else if (localStorage.getItem('cellphone') === 'notFound' || 'found') {
		item2.style.display = 'none';
		item2.src = '';

		too1.setAttribute('onclick', 'noService()');
	}
}

function stairs()
{
	clear();
    title.innerHTML = 'Stairs';
    image.src = 'img/bg/stairs.jpg';

   	nav1.style.top = '10px';
  	nav1.style.left = '10px';
	nav1.src = 'img/item/arrowBack.png';
	nav1.setAttribute('onclick', 'room1()');

	nav2.style.top = '270px';
	nav2.style.left = '150px';
	nav2.src = 'img/item/stairs.png';
    nav2.setAttribute('onclick', 'reception()');
}

function lightOn()
{
	image.src = 'img/bg/room2on.jpg'
   	item1.style.display = 'none';
}

function robe()
{
	localStorage.setItem('robe', 'bag')
	item2.src = '';
	tool2.src = 'img/item/rope1.png';

	popup()
	text.innerHTML = 'Good job, you found the robe...';
	room2();
}

function room2()
{
	clear();
    title.innerHTML = 'Room 2';
    image.src = 'img/bg/room2off.jpg';

    item1.style.display = 'block';
    item1.style.top = '334px';
    item1.style.left = '766px';
    item1.src = 'img/item/light.png';
    item1.setAttribute('onclick', 'lightOn()');

	if (localStorage.getItem('rope') === 'room') {

		item2.style.top = '470px';
		item2.style.left = '363px';
		item2.src = 'img/item/rope.png';
		item2.setAttribute('onclick', 'robe()');

		nav1.style.top = '10px';
		nav1.style.left = '10px';
		nav1.src = 'img/item/arrowBack.png';
		nav1.setAttribute('onclick', 'hall()');
	} else if (localStorage.getItem('robe') === 'bag') {
		tool2.setAttribute('onclick', 'text.innerHTML = "can\'t use here..."')
	}
}

function balcony()
{
	clear();
    title.innerHTML = 'Balcony';
    image.src = 'img/bg/balcony.jpg';

    if (localStorage.getItem('robe') === 'bag') {
    	
    	nav3.style.display = 'block';
    	nav3.style.top = '200px';
    	nav3.style.left = '300px';
    	nav3.src = 'img/item/esacapeRobe.png';
    	nav3.setAttribute('onclick', 'street()');
    }

	nav1.style.top = '10px';
    nav1.style.left = '10px';
	nav1.src = 'img/item/arrowBack.png';
	nav1.setAttribute('onclick', 'room2()');

	nav2.style.top = '';
	nav2.style.left = '';	
	nav2.s
    nav2.setAttribute('onclick', 'dead()');
}

function room3()
{
	clear();
    title.innerHTML = 'Room 3';
    image.src = 'img/bg/room3.jpg';

	nav1.style.top = '10px';
    nav1.style.left = '10px';
	nav1.src = 'img/item/arrowBack.png';
	nav1.setAttribute('onclick', 'hall()');

    nav2.setAttribute('onclick', 'elevator()');
}

function elevator()
{
	clear();
    title.innerHTML = 'Elevator';
    image.src = 'img/bg/elevator.jpg';

	nav1.style.top = '10px';
    nav1.style.left = '10px';
	nav1.src = 'img/item/arrowBack.png';
	nav1.setAttribute('onclick', 'hall()');

    nav2.setAttribute('onclick', 'exit()');
}

function reception()
{
	clear();
    title.innerHTML = 'Reception';
    image.src = 'img/bg/reception.jpg';

    nav1.style.top = '300px';
    nav1.style.left = '0px';
    nav1.src = 'img/item/arrowStreet.png';
    nav1.setAttribute('onclick', 'street()');
}

function street()
{
	clear();
    title.innerHTML = 'Street';
    image.src = 'img/bg/street.jpg';

    nav1.setAttribute('onclick', 'foodStore()');
    nav2.setAttribute('onclick', 'bank()');
    nav3.setAttribute('onclick', 'alley()');
    nav4.setAttribute('onclick', 'taxi()');
    nav5.setAttribute('onclick', 'jail()');
}

function exit()
{
	clear();
    title.innerHTML = 'Emergency Exit';
    image.src = 'img/bg/emergencyExit.jpg';

    nav1.setAttribute('onclick', 'street()');
    nav2.setAttribute('onclick', 'pool()');
}

function foodStore()
{
	clear();
    title.innerHTML = 'Food Store';
    image.src = 'img/bg/foodStore.jpg';

    nav1.style.top = '10px';
    nav1.style.left = '10px';
	nav1.src = 'img/item/arrowBack.png';
    nav1.setAttribute('onclick', 'street()');

    nav2.setAttribute('onclick', 'bank()');
}

function pool()
{
	clear();
    title.innerHTML = 'Pool';
    image.src = 'img/bg/pool.jpg';

    nav1.setAttribute('onclick', 'street()');
    nav2.setAttribute('onclick', 'beach()');
}

function bank()
{
	clear();
    title.innerHTML = 'Bank';
    image.src = 'img/bg/bank.jpg';

    nav1.style.top = '10px';
    nav1.style.left = '10px';
	nav1.src = 'img/item/arrowBack.png';
    nav1.setAttribute('onclick', 'street()');

    nav2.setAttribute('onclick', 'foodStore()');
}

function beach()
{
	clear();
    title.innerHTML = 'Beach';
    image.src = 'img/bg/beach.jpg';
    nav1.setAttribute('onclick', 'sea()');
}

function alley()
{
	clear();
    title.innerHTML = 'Alley';
    image.src = 'img/bg/alley.jpg';

    nav1.style.top = '10px';
    nav1.style.left = '10px';
	nav1.src = 'img/item/arrowBack.png';
    nav1.setAttribute('onclick', 'street()');
}

function taxi()
{
	clear();
    title.innerHTML = 'Taxi';
    image.src = 'img/bg/taxi.jpg';
    var randomNumber = Math.floor((Math.random() * 3) + 1);
    setTimeout(function() 
    {
        if (randomNumber === 1) {
            traffic();
        } else if (randomNumber === 2) {
            accident();
        } else if (randomNumber === 3) {
            breakdown();
        }
    }, 5000);
}

function sea()
{
	clear();
    title.innerHTML = 'Sea';
    image.src = 'img/bg/sea.jpg';
    nav1.setAttribute('onclick', 'island()');
    nav2.setAttribute('onclick', 'cruisseship()');
}

function island()
{
	clear();
    title.innerHTML = 'Island';
    image.src = 'img/bg/island.jpg';
    nav1.setAttribute('onclick', 'dead()');
}

function traffic()
{
	clear();
    title.innerHTML = 'Traffic';
    image.src = 'img/bg/traffic.jpg';
    nav1.setAttribute('onclick', 'jail()');
    nav2.setAttribute('onclick', 'plane()');
    nav3.setAttribute('onclick', 'taxiAirport()');
}

function cruisseship()
{
	clear();
    title.innerHTML = 'Cruise Ship';
    image.src = 'img/bg/cruisseship.jpg';
    nav1.setAttribute('onclick', 'topDeck()');
    nav2.setAttribute('onclick', 'suite()');
    nav3.setAttribute('onclick', 'jail()');
}

function topDeck()
{
	clear();
    title.innerHTML = 'Top Deck';
    image.src = 'img/bg/topDeck.jpg';
    nav1.setAttribute('onclick', 'helicopter()');
}

function accident()
{
	clear();
    title.innerHTML = 'Accicent';
    image.src = 'img/bg/accident.jpg';
    nav1.setAttribute('onclick', 'jail()');
    nav2.setAttribute('onclick', 'plane()');
    nav3.setAttribute('onclick', 'airport()');
}

function walk()
{
	clear();
    title.innerHTML = 'Walk';
    image.src = 'img/bg/walk.jpg';
    nav1.setAttribute('onclick', 'plane()');
}

function helicopter()
{
	clear();
    title.innerHTML = 'Helicopter';
    image.src = 'img/bg/helicopter.jpg';
    nav1.setAttribute('onclick', 'airport()');
}

function suite()
{
	clear();
    title.innerHTML = 'Suite';
    image.src = 'img/bg/suite.jpg';
}

function breakdown()
{
	clear();
    title.innerHTML = 'Breakdown';
    image.src = 'img/bg/breakdown.jpg';
    nav1.setAttribute('onclick', 'jail()');
    nav2.setAttribute('onclick', 'plane()');
    nav3.setAttribute('onclick', 'airport()');
}

function taxiAirport()
{
	clear();
    title.innerHTML = 'Taxi to the Airport';
    image.src = 'img/bg/taxiAirport.jpg';
    nav1.setAttribute('onclick', 'airport()');
}

function airport()
{
	clear();
    title.innerHTML = 'Airport';
    image.src = 'img/bg/airport.jpg';
}

function jail()
{
	clear();
    title.innerHTML = 'Game Over';
    image.src = 'img/bg/jail.jpg';
    again.style.display = 'block';
    again.innerHTML = 'Try Again';
    again.setAttribute('onclick', 'hotelRoom()');
}

function dead()
{
	clear();
    title.innerHTML = 'Game Over';
    image.src = 'img/bg/dead.jpg';
    gameOver.src = 'img/gameOverText.png';
    gameOver.style.display = 'block';
    again.style.display = 'block';
    again.innerHTML = 'Try Again';
    again.setAttribute('onclick', 'hotelRoom()');
    setTimeout(function () 
    {
    	again.style.zIndex = '2';
    	again.style.cursor = 'pointer';
    }, 3000);
    gameOverSituation.src = 'img/gameOverDeath.png';
    gameOverSituation.style.display = 'block';
}

function plane()
{
	clear();
    title.innerHTML = 'Game Over';
    image.src = 'img/bg/plane.jpg';
    again.style.display = 'block';
    again.innerHTML = 'Try Again';
    again.setAttribute('onclick', 'hotelRoom()');
}
