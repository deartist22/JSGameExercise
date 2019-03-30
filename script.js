const container = document.querySelector(".gameBoard");
const scoreBoard = document.querySelector(".score");
const btnStart = document.querySelector(".btnStart");

let lasthideout = false;
let gameOver = false;
let score = 0;

btnStart.addEventListener('click', startGame);

function startGame(){
	btnStart.style.display = "none";
	makeGameBoard();
	startBadGuys();
	//make bad guy
	scoreBoard.innerHTML = score;

}

function startBadGuys() {
	let hideout = randomUp();
	let tempClass = "up";
	hideout.classList.add(tempClass);
	const time = Math.round(Math.random() * (1500-250) + 250);
	setTimeout(function() {
		hideout.classList.remove(tempClass);
		if(!gameOver) startBadGuys();
	}, time);
}

function randomUp() {
	const hideouts = document.querySelectorAll(".hideout");
	const idx = Math.floor(Math.random() * hideouts.length);
	if(hideouts[idx].badGuyId === lasthideout) {
		return randomUp();
	}
	lasthideout = hideouts[idx].badGuyId;
	return hideouts[idx];
}

function makeGameBoard() {
	let hidOutsCreated = 8;

	container.innerHTML = "";
	for(let x = 0; x < hidOutsCreated; x++){
		console.log('making');
		let div = document.createElement("div");
		div.setAttribute("class", "hideout");
		div.badGuyId = x;

		let badGuy = document.createElement("div");
		badGuy.setAttribute("class", "badGuy");
		badGuy.onclick = myShot;
		div.appendChild(badGuy);

		let friend = document.createElement("div");
		friend.setAttribute("class", "friend");
		friend.onclick = myShot2;
		div.appendChild(friend);

		let bricks = document.createElement("div");
		bricks.setAttribute("class", "bricks");
		div.appendChild(bricks);

		container.appendChild(div);
	}
}

function myShot() {

}

function myShot2() {
	
}

