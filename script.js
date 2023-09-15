const startButton = document.getElementById('startbutton');
const startUp = document.getElementById('startup');
const game = document.getElementById('game');

const beginGame = () => {
   startUp.style.display = 'none';
   game.style.display = 'flex';
}

startButton.onclick = beginGame;

