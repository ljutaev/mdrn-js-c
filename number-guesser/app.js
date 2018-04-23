// Game values

let min = 2,
	max = 10,
	winningNum = 2,
	guessesLeft = 3;

// UI elements
const game = document.getElementById('game'),
	minNum = document.querySelector('.min-num'),
	maxNum = document.querySelector('.max-num'),
	guessBtn = document.querySelector('#guess-btn'),
	guessInput = document.querySelector('#guess-input'),
	message = document.querySelector('.message');

// Assign UI min and max
minNum.textContent = min;
maxNum.textContent = max;

// Listen for gues
guessBtn.addEventListener('click', function() {
	console.log(guessInput.value);
});