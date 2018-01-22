const title = document.getElementById('title');
const image = document.getElementById('image');

const start = document.getElementById('start');
const story = document.getElementById('story');
const back = document.getElementById('back');

const wellDone = document.getElementById('wellDone');
const youWon = document.getElementById('youWon');

const tryAgain = document.getElementById('tryAgain');

const gameOver = document.getElementById('gameOver');
const gameOverSituation = document.getElementById('gameOverSituation');

const options = document.getElementsByClassName('options');
const nav1 = document.getElementById('nav1');
const nav2 = document.getElementById('nav2');
const nav3 = document.getElementById('nav3');

const item1 = document.getElementById('item1');
const item2 = document.getElementById('item2');
const item3 = document.getElementById('item3');

const tool1 = document.getElementById('tool1');
const tool2 = document.getElementById('tool2');
const tool3 = document.getElementById('tool3');
const tool4 = document.getElementById('tool4');
const tool5 = document.getElementById('tool5');
const tool6 = document.getElementById('tool6');
const tool7 = document.getElementById('tool7');
const tool8 = document.getElementById('tool8');

const inventory = document.getElementById('inventory');
const close = document.getElementById('close');

const text = document.getElementById('text');


title.innerHTML = 'Adventure Game';
image.src = 'img/bg/black.jpg';

start.setAttribute('onclick','startGame()');
start.src = 'img/startGame.png';


story.setAttribute('onclick', 'storyline()')
story.src = 'img/story.png';

window.onload = function() 
{
	localStorage.clear();
}

function startGame() 
{
	clear();
	title.innerHTML = 'Adventure Game';
	image.src = 'img/bg/welcome2.gif';
	start.style.display = 'none';
	story.style.display = 'none';

	localStorage.setItem('key', 'room');
	localStorage.setItem('person1', 'sleep');
	localStorage.setItem('cellphone', 'notFound');
	localStorage.setItem('rope', 'room');
	localStorage.setItem('talk', 'false');
	
	tool1.src = '';
	tool2.src = '';
	tool3.src = '';
	tool4.src = '';
	tool5.src = '';
	tool6.src = '';
	tool7.src = '';
	tool8.src = '';	
	
	setTimeout(function()
	{
    	hotelRoom();
    }, 2250);
}

function storyline()
{
	start.style.display = 'none';
	story.style.display = 'none';
	title.innerHTML = 'Storyline';
	image.src = 'img/bg/fade.jpg';

}

function clear() 
{
	item1.src = '';
	item2.src = '';
	item3.src = '';

	nav1.src = '';
	nav2.src = '';
	nav3.src = '';
	nav4.src = '';
	nav5.src = '';

	wellDone.style.display = 'none';
	wellDone.src = '';
	youWon.style.display = 'none';
	youWon.src = '';

	tryAgain.src = '';
	tryAgain.style.display = 'none';

	gameOver.src = '';
	gameOver.style.display = 'none';
	gameOverSituation.src = '';
	gameOverSituation.style.display = 'none';
	
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
		},6000);
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
		
		nav1.style.display = 'block';
		nav1.style.top = '300px';
		nav1.style.left = '0px';
		nav1.src = 'img/item/arrowHall.png';
		nav1.setAttribute('onclick', 'hall()');

	if (localStorage.getItem('key') === 'room') {

		item1.style.display = 'block';
		item1.style.top = '435px';
		item1.style.left = '250px';
		item1.src = 'img/item/key.png';
		item1.setAttribute('onclick', 'pickupKey()');

		popup();
		text.innerHTML = 'Hee, you have to hurry and find the key to get out..';

	} else if (localStorage.getItem('key') === 'bag') {

		tool1.setAttribute('onclick', 'usedKey()');	

	} else if (localStorage.getItem('key') === 'used') {

		popup();
		text.innerHTML = 'Did you forget something?';

	} else if (localStorage.getItem('key') === 'notFound') {

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

		nav1.style.display = 'block';
		nav1.style.top = '44px';
		nav1.style.left = '88px';
	    nav1.src = 'img/item/room1.png';
	    nav1.setAttribute('onclick', 'room1()');

	    nav2.style.display = 'block';
	    nav2.style.top = '174px';
	    nav2.style.left = '494px';
	    nav2.src = 'img/item/room2.png';
	    nav2.setAttribute('onclick', 'room2()');

	    nav3.style.display = 'block';
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
		item1.setAttribute('onclick', '');

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
	bathroom();
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

		tool1.setAttribute('onclick', 'noService()');
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
	image.src = 'img/bg/room2on.jpg';
   	item1.style.display = 'none';
}

function rope()
{
	localStorage.setItem('rope', 'bag');

	item2.style.display = 'none';
	item2.src = '';
	tool2.src = 'img/item/rope1.png';

	popup();           
	text.innerHTML = 'Good job, you found the rope...';
	room2();
}

function fail()
{
	popup();
	text.innerHTML = 'Can not use that here..';
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

	nav1.style.top = '10px';
	nav1.style.left = '10px';
	nav1.src = 'img/item/arrowBack.png';
	nav1.setAttribute('onclick', 'hall()');

    nav2.style.display = 'block';
	nav2.style.top = '300px';    
	nav2.style.left = '0px';
	nav2.src = 'img/item/arrowBalcony.png';
	nav2.setAttribute('onclick', 'balcony()');

	nav3.style.display = 'none';

	if (localStorage.getItem('rope') === 'room') {

		item2.style.display = 'block';
		item2.style.top = '470px';
		item2.style.left = '363px';
		item2.src = 'img/item/rope.png';
		item2.setAttribute('onclick', 'rope()');

	} else if (localStorage.getItem('rope') === 'bag') {

		item2.style.display = 'none';
		item2.src = '';
		tool2.setAttribute('onclick', 'fail()')
	}
}

function useRobe()
{
		localStorage.setItem('rope', 'used');
    	tool2.src = '';
   		text.innerHTML = 'Well Done you used the rope';
   		popup();
    	storageClose();
		balcony();
}

function balcony()
{
	clear();
    title.innerHTML = 'Balcony';
    image.src = 'img/bg/balcony.jpg';


	nav1.style.top = '10px';
    nav1.style.left = '10px';
	nav1.src = 'img/item/arrowBack.png';
	nav1.setAttribute('onclick', 'room2()');

	nav2.style.top = '60px';
	nav2.style.left = '10px';
	nav2.src = 'img/item/arrowDead.png';
    nav2.setAttribute('onclick', 'dead()');
    
    if (localStorage.getItem('rope') === 'bag') {
    	tool2.setAttribute('onclick', 'useRobe()')
    }

    else if (localStorage.getItem('rope') === 'used') {

    	nav3.style.display = 'block';
    	nav3.style.top = '353px';
    	nav3.style.left = '658px';
    	nav3.src = 'img/item/escapeRobe.png';
    	nav3.setAttribute('onclick', 'street()');
    }
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

	nav2.style.top = '300px';
    nav2.style.left = '0px';
	nav2.src = 'img/item/arrowElevator.png';
    nav2.setAttribute('onclick', 'elevator()');
}

function elevator()
{
	clear();
    title.innerHTML = 'Elevator';
    image.src = 'img/bg/elevator.jpg';

    popup();
    text.innerHTML = 'It looks like its broken, so i can only go down..'

	nav1.style.top = '10px';
    nav1.style.left = '10px';
	nav1.src = 'img/item/arrowBack.png';
	nav1.setAttribute('onclick', 'room3()');

	nav2.style.top = '180px';
    nav2.style.left = '925px';
	nav2.src = 'img/item/controlPanel.png';
    nav2.setAttribute('onclick', 'exit()');
}

function talk()
{
	localStorage.setItem('talk', 'true');
	popup();
	text.innerHTML = 'Hello sir, can you please return the cards and pay for your room?';
	reception();

}

function pay()
{
	localStorage.setItem('talk', 'done');
	popup();
	text.innerHTML = 'Thanks for paying online by your phone';
	reception();
}

function reception()
{		
	clear();
    title.innerHTML = 'Reception';
    image.src = 'img/bg/reception.jpg';

    item1.style.top = '120px';
    item1.style.left = '800px';
    item1.src = 'img/item/person2.png';
    item1.setAttribute('onclick', 'talk()');

    nav1.style.top = '10px';
    nav1.style.left = '0px';
    nav1.src = 'img/item/arrowBack.png';
    nav1.setAttribute('onclick', 'stairs()');

    nav2.style.top = '300px';
    nav2.style.left = '0px';
    nav2.src = 'img/item/arrowStreet.png';
    nav2.setAttribute('onclick', 'street()');

    nav3.style.display = 'none';

	if ((localStorage.getItem('talk') === 'true') && (localStorage.getItem('cellphone') === 'found')) {
    
	nav3.style.display = 'block';
	nav3.style.top = '60px';
	nav3.style.left = '0px';
	nav3.src = 'img/item/arrowPay.png';
	nav3.setAttribute('onclick', 'pay()');
	}
}

function exit()
{
	clear();
    title.innerHTML = 'Emergency Exit';
    image.src = 'img/bg/emergencyExit.jpg';

    nav1.setAttribute('onclick', 'street()');
    nav2.setAttribute('onclick', 'pool()');
}

function street()
{
	if (localStorage.getItem('talk') === 'done') {

	clear();
    title.innerHTML = 'Street';
    image.src = 'img/bg/theEnd.jpg';

    backpack.style.display ='none';

    wellDone.style.display = 'block';
    wellDone.src = 'img/wellDone.png';

    youWon.style.display = 'block';
    youWon.src = 'img/youWon.png';

    tryAgain.style.display = 'block';
    tryAgain.src = 'img/tryAgain.png';
    tryAgain.setAttribute('onclick', 'startGame()');

  	setTimeout(function() 
    {
    	tryAgain.style.zIndex = '2';
    	tryAgain.style.cursor = 'pointer';
    }, 3000);
	} else {
		jail();
	}	

    // nav1.setAttribute('onclick', 'foodStore()');
    // nav2.setAttribute('onclick', 'bank()');
    // nav3.setAttribute('onclick', 'alley()');
    // nav4.setAttribute('onclick', 'taxi()');
    // nav5.setAttribute('onclick', 'jail()');
}

// function foodStore()
// {
// 	clear();
//     title.innerHTML = 'Food Store';
//     image.src = 'img/bg/foodStore.jpg';

//     nav1.style.top = '10px';
//     nav1.style.left = '10px';
// 	nav1.src = 'img/item/arrowBack.png';
//     nav1.setAttribute('onclick', 'street()');

//     nav2.setAttribute('onclick', 'bank()');
// }

// function pool()
// {
// 	clear();
//     title.innerHTML = 'Pool';
//     image.src = 'img/bg/pool.jpg';

//     nav1.setAttribute('onclick', 'street()');
//     nav2.setAttribute('onclick', 'beach()');
// }

// function bank()
// {
// 	clear();
//     title.innerHTML = 'Bank';
//     image.src = 'img/bg/bank.jpg';

//     nav1.style.top = '10px';
//     nav1.style.left = '10px';
// 	nav1.src = 'img/item/arrowBack.png';
//     nav1.setAttribute('onclick', 'street()');

//     nav2.setAttribute('onclick', 'foodStore()');
// }

// function beach()
// {
// 	clear();
//     title.innerHTML = 'Beach';
//     image.src = 'img/bg/beach.jpg';
//     nav1.setAttribute('onclick', 'sea()');
// }

// function alley()
// {
// 	clear();
//     title.innerHTML = 'Alley';
//     image.src = 'img/bg/alley.jpg';

//     nav1.style.top = '10px';
//     nav1.style.left = '10px';
// 	nav1.src = 'img/item/arrowBack.png';
//     nav1.setAttribute('onclick', 'street()');
// }

// function taxi()
// {
// 	clear();
//     title.innerHTML = 'Taxi';
//     image.src = 'img/bg/taxi.jpg';
//     var randomNumber = Math.floor((Math.random() * 3) + 1);
//     setTimeout(function() 
//     {
//         if (randomNumber === 1) {
//             traffic();
//         } else if (randomNumber === 2) {
//             accident();
//         } else if (randomNumber === 3) {
//             breakdown();
//         }
//     }, 5000);
// }

// function sea()
// {
// 	clear();
//     title.innerHTML = 'Sea';
//     image.src = 'img/bg/sea.jpg';
//     nav1.setAttribute('onclick', 'island()');
//     nav2.setAttribute('onclick', 'cruisseship()');
// }

// function island()
// {
// 	clear();
//     title.innerHTML = 'Island';
//     image.src = 'img/bg/island.jpg';
//     nav1.setAttribute('onclick', 'dead()');
// }

// function traffic()
// {
// 	clear();
//     title.innerHTML = 'Traffic';
//     image.src = 'img/bg/traffic.jpg';
//     nav1.setAttribute('onclick', 'jail()');
//     nav2.setAttribute('onclick', 'plane()');
//     nav3.setAttribute('onclick', 'taxiAirport()');
// }

// function cruisseship()
// {
// 	clear();
//     title.innerHTML = 'Cruise Ship';
//     image.src = 'img/bg/cruisseship.jpg';
//     nav1.setAttribute('onclick', 'topDeck()');
//     nav2.setAttribute('onclick', 'suite()');
//     nav3.setAttribute('onclick', 'jail()');
// }

// function topDeck()
// {
// 	clear();
//     title.innerHTML = 'Top Deck';
//     image.src = 'img/bg/topDeck.jpg';
//     nav1.setAttribute('onclick', 'helicopter()');
// }

// function accident()
// {
// 	clear();
//     title.innerHTML = 'Accicent';
//     image.src = 'img/bg/accident.jpg';
//     nav1.setAttribute('onclick', 'jail()');
//     nav2.setAttribute('onclick', 'plane()');
//     nav3.setAttribute('onclick', 'airport()');
// }

// function walk()
// {
// 	clear();
//     title.innerHTML = 'Walk';
//     image.src = 'img/bg/walk.jpg';
//     nav1.setAttribute('onclick', 'plane()');
// }

// function helicopter()
// {
// 	clear();
//     title.innerHTML = 'Helicopter';
//     image.src = 'img/bg/helicopter.jpg';
//     nav1.setAttribute('onclick', 'airport()');
// }

// function suite()
// {
// 	clear();
//     title.innerHTML = 'Suite';
//     image.src = 'img/bg/suite.jpg';
// }

// function breakdown()
// {
// 	clear();
//     title.innerHTML = 'Breakdown';
//     image.src = 'img/bg/breakdown.jpg';
//     nav1.setAttribute('onclick', 'jail()');
//     nav2.setAttribute('onclick', 'plane()');
//     nav3.setAttribute('onclick', 'airport()');
// }

// function taxiAirport()
// {
// 	clear();
//     title.innerHTML = 'Taxi to the Airport';
//     image.src = 'img/bg/taxiAirport.jpg';
//     nav1.setAttribute('onclick', 'airport()');
// }

// function airport()
// {
// 	clear();
//     title.innerHTML = 'Airport';
//     image.src = 'img/bg/airport.jpg';
// }

function deadText()
{
    gameOver.style.display = 'block';
    gameOver.src = 'img/gameOverText.png';

    gameOverSituation.style.display = 'block';

    tryAgain.style.display = 'block';
    tryAgain.src = 'img/tryAgain.png';
    tryAgain.setAttribute('onclick', 'startGame()');

    backpack.style.display ='none';

	nav1.style.display = 'none';
	nav2.style.display = 'none';
	nav3.style.display = 'none'; 

    setTimeout(function() 
    {
    	tryAgain.style.zIndex = '2';
    	tryAgain.style.cursor = 'pointer';
    }, 3000);
}

function jail()
{
	clear();
	deadText();
    title.innerHTML = 'Game Over';
    image.src = 'img/bg/jail.jpg';

    gameOverSituation.style.left = '30px';
    gameOverSituation.src = 'img/gameOverJail.png';
}

function dead()
{
	clear();
	deadText();
    title.innerHTML = 'Game Over';
    image.src = 'img/bg/dead.jpg';
    
    gameOverSituation.style.left = '250px';
    gameOverSituation.src = 'img/gameOverDeath.png';
}

// function plane()
// {
// 	clear();
//     title.innerHTML = 'Game Over';
//     image.src = 'img/bg/plane.jpg';
// }
