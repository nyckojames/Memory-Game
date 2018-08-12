/*Autorship: Danilo Trinchão Costa
Date: 10/08/2018*/



let cards = ["imagens/html5_card.jpg", "imagens/css3_card.jpg", "imagens/js_card.jpg", "imagens/Php_card.jpg",
"imagens/html5_card.jpg", "imagens/css3_card.jpg", "imagens/js_card.jpg", "imagens/Php_card.jpg"];
let qntdClicks = 0;
/*This function aims to shuffle elements without repeating the order*/
function shuffle(array) {
  var currentIndex = array.length, temporaryValue, randomIndex;

  // While there remain elements to shuffle...
  while (0 !== currentIndex) {

    // Pick a remaining element...
    randomIndex = Math.floor(Math.random() * currentIndex);
    currentIndex -= 1;

    // And swap it with the current element.
    temporaryValue = array[currentIndex];
    array[currentIndex] = array[randomIndex];
    array[randomIndex] = temporaryValue;
  }

  return array;
}
let guardaCard = [];
function verifica(cartas) {
	if (cartas[0].dataset.cards === cartas[1].dataset.cards) {
		cartas[0].removeEventListener("click",viraCard);
		cartas[1].removeEventListener("click",viraCard);
	}else{
		cartas[0].src="imagens/card_fundo.jpg";
		cartas[1].src="imagens/card_fundo.jpg";
	}
	
	guardaCard= [];
}

/*This function will call the previous randOrd function so that it shuffles
 the array values ​​so that the order of the cards does not recur in the game.*/

function viraCard (){
			qntdClicks++;
			guardaCard.push(this);
			this.src=this.dataset.cards;
			if (guardaCard.length > 2){
				qntdClicks = 0;
				verifica(guardaCard);
			}			

			console.log(guardaCard);
		}
function shufflerBoard() {	
	cards = shuffle(cards);
	let sts = '';
	for (let i = 0; i < cards.length; i++) {
		sts += `<img class="cards" src="imagens/card_fundo.jpg" data-cards="${cards[i]}">`;


	}
	document.querySelector('#teste').innerHTML = sts;
	let seg = document.querySelectorAll(".cards");
	console.log(seg);
	for (var i = 0; i < cards.length; i++) {
		seg[i].addEventListener("click",viraCard)

	}
	console.log(cards);
	
}
shufflerBoard();




function Stopwath() {
	
}
/*This function will act behind the html doom starting the game after the difficulty level is selected.*/
function playGame() {
	let levelGame = document.getElementById('levelGame').value;
	window.location.href = 'game.html';
	alert(levelGame);
}


