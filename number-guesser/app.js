// Game values

let min = 1,
	max = 10,
	winningNum = getRandNum(min, max),
	guessesLeft = 3;

// UI elements
const gameWrapper = document.getElementById('game'),
	minNum = document.querySelector('.min-num'),
	maxNum = document.querySelector('.max-num'),
	guessBtn = document.querySelector('#guess-btn'),
	guessInput = document.querySelector('#guess-input'),
	message = document.querySelector('.message');

// Assign UI min and max
minNum.textContent = min;
maxNum.textContent = max;

// Play again event listener
game.addEventListener('mousedown', function(e) {
	if(e.target.className === 'play-again'){
		window.location.reload();
	}
});

// Listen for guess
guessBtn.addEventListener('click', function() {
	let  guess = parseInt(guessInput.value);

	// Validate
	if(isNaN(guess) || guess < min || guess > max){
		setMessage(`Please enter a number between ${min} and ${max}`, 'red');
	}

	// Check if won
	if(guess === winningNum){
		// Game over 
		gameOver(true, `${winningNum} is correct, You Win`);
	}else{
		// Wrong number
		guessesLeft -=1;

		if(guessesLeft === 0) {
			// Game over - lost

			// Game over 
			gameOver(false, `Geme over, you lost. ${winningNum}`);
		}else{
			// Game continues - answer wrong

			// Change border color
			guessInput.style.borderColor = 'red';

			// Clear Input
			guessInput.value = '';
			
			setMessage(`${guess} is not correct!, ${guessesLeft} guesses left`, 'red');  
		}

	}
});
// Game over
function gameOver(won, msg){
	let color;
	won === true ? color = 'green' : color = 'red';

	// Disable input
	guessInput.disabled = true;
	// Change border color
	guessInput.style.borderColor = color;
	// Set message
	setMessage(msg, color);

	// Play Again?
	guessBtn.value = 'Play Again';
	guessBtn.className += 'play-again'; 
}
// Set message
function setMessage(msg, color){
	message.style.color = color;
	message.textContent = msg;
}

// Winning num
function getRandNum(min, max) {
	return (Math.floor(Math.random()*(max-min+1)+min))
}