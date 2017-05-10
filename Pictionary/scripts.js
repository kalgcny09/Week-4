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
var colorPicker = document.getElementById('color-picker');

// var myBall= document.getElementById('myBall')



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

	// var randomX = Math.random() * 4
	// var randomY = Math.random() * 4
	// x += randomX * xDirection;
	// Y += randomY * yDirection;
	// red += 1;
	// blue +=1;
	// green +=1;

	x += 4 * xDirection;
	y += 1 * yDirection;

}

var clicks = 0;

var timer = setInterval(drawBall, 20);

canvas.addEventListener("click", function (event){
	clicks += 1;
	document.getElementById('counter').innerHTML = "Clicks " +clicks;
	console.log(clicks);

colorPicker.addEventListener('change', function(event){
	console.dir(event.target)
	color = colorPicker.value
	console.log(color);
})

})
