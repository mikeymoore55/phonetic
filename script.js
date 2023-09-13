const startButton = document.getElementById('startbutton');
const startUp = document.getElementById('startup');

const beginGame = () => {
   startUp.style.display = 'none';
}

startButton.onclick = beginGame;

