

var whosTurn = 1;

var squares = document.getElementsByClassName('square');


for (let i = 0; i < squares.length; i++) {
	squares[i].addEventListener('click', function(event){
		markSquare(this);
	});
}


function markSquare(currentSquare){
	var squareResult= ""
	if((currentSquare.innerHTML == "X") || (currentSquare.innerHTML == "O")){
	
		var messageElement = document.getElementById('message');
		squareResult = "Sorry, this square is taken!"
	
	}else if (whosTurn == 1){
		currentSquare.innerHTML = "X"
		whosTurn = 2;
} 	else {
	currentSquare.innerHTML = "O"
		whosTurn = 1;
	}
	var messageElement = document.getElementById('message')
	messageElement.innerHTML = squareResult;
};
