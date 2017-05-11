

var whosTurn = 1;

var player1Squares = [];
var player2Squares = [];
var winningCombos = [
	["A1", "B1", "C1"],
	["A2", "B2", "C2"],
	["A3", "B3", "C3"],
	["A1", "A2", "A3"],
	["B1", "B2", "B3"],
	["C1", "C2", "C3"],
	["A1", "B2", "C3"],
	["A3", "B2", "C1"]
]	
var gameOverBool = false;
var onePlayerGame = true;

var squares = document.getElementsByClassName('square');


for (let i = 0; i < squares.length; i++) {
	squares[i].addEventListener('click', function(event){
		if(!gameOverBool){
			markSquare(this)
		}
	});
}


function markSquare(currentSquare){
	var squareResult= ""
	if((currentSquare.innerHTML == "X") || (currentSquare.innerHTML == "O")){	
		squareResult = "Sorry, this square is taken!"
	}else if(gameOverBool){
		squareResult = "Someone has won the game!"
	
	}else if(whosTurn == 1){
		currentSquare.innerHTML = "X"
		whosTurn = 2;
		player1Squares.push(currentSquare.id)
		checkWin(player1Squares,1);
		if(onePlayerGame){
			computerMove();
		}
		
	} else {
		currentSquare.innerHTML = "O"
		whosTurn = 1;
		player2Squares.push(currentSquare.id)
		checkWin(player2Squares,2);
	}


	var messageElement = document.getElementById('message');
	messageElement.innerHTML = squareResult;
}


function computerMove(){

}

function checkWin(currentPlayersSquares, whoJustWent){
	for(let i=0; i<winningCombos.length; i++){
		var squareCount = 0;
		for(let j=0; j<winningCombos[i].length; j++){
			var winningSquare = winningCombos[i][j];
			if(currentPlayersSquares.indexOf(winningSquare) > -1){
				squareCount++;
			}
		}
		if(squareCount == 3){
			console.log("Player " + whoJustWent + " won the game!");
			gameOver(whoJustWent,winningCombos[i]);
			break;
		}
	}
}
function gameOver(whoJustWon,winningCombo){
	var messageElement= document.getElementById('message');
	var message= "Congratulations to player " + whoJustWon + " You won with " + winningCombo;
	
	messageElement.innerHTML = message;
	for(let i=0; i<winningCombo.length; i++){
		document.getElementById(winningCombo[i]).className += " winning-square";
	}

	gameOverBool = true;
}
