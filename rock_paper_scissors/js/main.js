//Completed by House Gardner members (Peter, Carter, Jesus, Oscar, Tyana)

let botScore=0,
playerScore=0;
document.getElementById("rock").addEventListener('click', playerThrowsRock);
document.getElementById("scissors").addEventListener('click', playerThrowsScissors);
document.getElementById("paper").addEventListener('click', playerThrowsPaper);

function playerThrowsRock(){
	let botsWeaponTest= getRandomWeapon();
	checkWhoWon(botsWeaponTest,'rock');
}
function playerThrowsScissors(botsWeapon,playersWeapon){
	let botsWeaponTest= getRandomWeapon();
	checkWhoWon(botsWeaponTest,"scissors");
}

function playerThrowsPaper(botsWeapon,playersWeapon){
	let botsWeaponTest= getRandomWeapon();
	checkWhoWon(botsWeaponTest,"paper");
}
function getRandomWeapon(){
	let randomNumber=Math.random();
	let botsWeapon = 'rock';
	if(randomNumber<.33){
		botsWeapon="scissors";
	}else if(randomNumber<.6666){
		botsWeapon="paper";
	}
	return botsWeapon;
}
function checkWhoWon(botsWeapon,playersWeapon){
	if(botsWeapon==playersWeapon){
		displayCompleteMessage("There was tie");
	}
	else if(
		(botsWeapon=="scissors" && playersWeapon=="paper") ||
		(botsWeapon=="paper" && playersWeapon=="rock") ||
		(botsWeapon=="rock" && playersWeapon=="scissors")
		){
		return increaseBotScore();
	}
	else{
		return increasePlayerScore();
	}
}
function increaseBotScore(){
	botScore+=1;
	document.getElementById("computerScore").innerHTML=botScore;
	displayCompleteMessage("Sorry, you're a loser");
}
function increasePlayerScore(){
	playerScore+=1;
	document.getElementById('humanScore').innerHTML=playerScore
	displayCompleteMessage('Congrats! You won!')
}
function displayCompleteMessage(msg){
	document.getElementById("status").innerHTML=msg;
}