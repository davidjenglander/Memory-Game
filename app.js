document.addEventListener('DOMContentLoaded', () => {
	//card options
	const cardArray = [
		{
			name: 'card1',
			img: 'img/1.jpg',
		},
		{
			name: 'card2',
			img: 'img/2.jpg',
		},
		{
			name: 'card3',
			img: 'img/3.jpg',
		},
		{
			name: 'card4',
			img: 'img/4.jpg',
		},
		{
			name: 'card5',
			img: 'img/5.jpg',
		},
		{
			name: 'card6',
			img: 'img/6.jpg',
		},
		{
			name: 'card1',
			img: 'img/1.jpg',
		},
		{
			name: 'card2',
			img: 'img/2.jpg',
		},
		{
			name: 'card3',
			img: 'img/3.jpg',
		},
		{
			name: 'card4',
			img: 'img/4.jpg',
		},
		{
			name: 'card5',
			img: 'img/5.jpg',
		},
		{
			name: 'card6',
			img: 'img/6.jpg',
		},
	];

	cardArray.sort(() => 0.5 - Math.random());

	const grid = document.querySelector('.grid');
	const resultDisplay = document.querySelector('#result');
	let cardsChosen = [];
	let cardsChosenId = [];
	let cardsWon = [];

	//create your board
	function createBoard() {
		for (let i = 0; i < cardArray.length; i++) {
			const card = document.createElement('img');
			card.setAttribute('src', 'img/blank.jpg');
			card.setAttribute('data-id', i);
			card.addEventListener('click', flipCard);
			grid.appendChild(card);
		}
	}

	//check for matches
	function checkForMatch() {
		const cards = document.querySelectorAll('img');
		const optionOneId = cardsChosenId[0];
		const optionTwoId = cardsChosenId[1];

		if (optionOneId == optionTwoId) {
			cards[optionOneId].setAttribute('src', 'img/blank.jpg');
			cards[optionTwoId].setAttribute('src', 'img/blank.jpg');
			alert('You have clicked the same image!');
		} else if (cardsChosen[0] === cardsChosen[1]) {
			alert('You found a match');
			cards[optionOneId].setAttribute('src', 'img/white.jpg');
			cards[optionTwoId].setAttribute('src', 'img/white.jpg');
			cards[optionOneId].removeEventListener('click', flipCard);
			cards[optionTwoId].removeEventListener('click', flipCard);
			cardsWon.push(cardsChosen);
		} else {
			cards[optionOneId].setAttribute('src', 'img/blank.jpg');
			cards[optionTwoId].setAttribute('src', 'img/blank.jpg');
			alert('Sorry, try again');
		}
		cardsChosen = [];
		cardsChosenId = [];
		resultDisplay.textContent = cardsWon.length;
		if (cardsWon.length === cardArray.length / 2) {
			resultDisplay.textContent = 'Congratulations! You found them all!';
		}
	}

	//flip your card
	function flipCard() {
		let cardId = this.getAttribute('data-id');
		cardsChosen.push(cardArray[cardId].name);
		cardsChosenId.push(cardId);
		this.setAttribute('src', cardArray[cardId].img);
		if (cardsChosen.length === 2) {
			setTimeout(checkForMatch, 500);
		}
	}

	createBoard();
});
