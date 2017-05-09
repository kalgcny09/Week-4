//console.log("Test.js")

var canvas = document.getElementById("canvas");
var context = canvas.getContext("2d");
// context.moveTo(100,100);
// context.lineTo(200,200);
// context.lineTo(300,100);
// context.lineTo(100,200);
// context.lineTo(300,150);
// context.lineTo(100,100);
// context.strokeStyle = "#ff000";
context.stroke();

// Draw a circle!

context.beginPath()
context.fillStyle ="#FFFF00";
context.arc(200,200,50,0,2*Math.PI)
// console.log()

var x= 200;
var y= 200;
var r= 50;
var xDirection = 1;
var yDirection = 1;

function drawBall(){
	context.fillStyle = "#FF0000";
	context.beginPath();
	context.arc(x,y,r,0,2*Math.PI);
	context.clearRect(0,0,500,500);
	context.fill();
	if ((x > 500-r) || (x < r)){
		xDirection = -xDirection;
	}

	if ((y > 500-r) || (y < r)) {
		yDirection = -yDirection;
	}

	x += 4 * xDirection;
	y += 1 * yDirection;

}

var ball = setInterval(drawBall, 20);