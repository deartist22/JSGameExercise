const container = document.querySelector(".gameBoard");
const scoreBoard = document.querySelector(".score");
const btnStart = document.querySelector(".btnStart");

let lasthideout = false;
let gameOver = false;
let score = 0;

btnStart.addEventListener('click', startGame);

function startGame(){
	//make board
	makeGameBoard();
	//make bad guy
	scoreBoard.innerHTML = score;

}

function makeGameBoard() {
	let hidOutsCreated = 8;
	container.innerHTML = "";
	for(let x = 0; x < hidOutsCreated; x++){
		console.log('making');
		let div = document.createElement("div");
		div.setAttribute("class", "hideout");
		div.badGuyId = x;
		container.appendChild(div);
	}
}