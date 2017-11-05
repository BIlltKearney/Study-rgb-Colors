// colorgame.js
// created by Kearney, Billt 2017 for web dev bootcamp
// alert("connected!")
var numSquares = 9;
var colors = [];
// [
// 	"rgb(148, 0, 211)",
// 	"rgb(75, 0, 130)",
// 	"rgb(0, 0, 255)",
// 	"rgb(0, 255, 0)",
// 	"rgb(255, 255, 0)",
// 	"rgb(255, 127, 0)",
// 	"rgb(255, 0 , 0)",
// 	"rgb(0, 0, 0)",
// 	"rgb(255, 255, 255)",
// ];
var goalColor = pickColor();
var squares = document.querySelectorAll(".square");
var colorDisplay = document.getElementById("colorDisplay");
var messageDisplay = document.querySelector("#message");
var h1 = document.querySelector("h1");
var resetButton = document.querySelector("#reset");

var modeButtons = document.querySelectorAll(".mode");

init();

function init(){
	setUpModeButtons();
	setUpSquares();
	reset();
}

function setUpModeButtons(){
	for(var i = 0; i < modeButtons.length; i++){
		modeButtons[i].addEventListener("click", function(){
			modeButtons[0].classList.remove("selected");
			modeButtons[1].classList.remove("selected");
			this.classList.add("selected");
			//solve how many squares to show ****ternary operator method****
			this.textContent === "Easy" ? numSquares = 3: numSquares = 9;
				//*****alternate method*****
				// if(this.textContent === "easy"){
				// 	numSquares = 3;
				// }	else {
				// 	numSquares = 9;
				// }
			reset();
		});
	}
}

function setUpSquares(){
	for(var i = 0; i < squares.length; i++){
		// add click listeners to squares
		squares[i].addEventListener("click", function(){
			// get color of chosen square
			var clickedColor = this.style.backgroundColor;
			// compare color to goalColor
			// test color matching 
			// console.log(clickedColor, goalColor);
			if(clickedColor === goalColor){
				messageDisplay.textContent = "Correct!";
				resetButton.textContent = "Play Again?"
				changeColors(clickedColor);
				h1.style.backgroundColor = goalColor;
			} else {
				this.style.backgroundColor = "#232323";
				messageDisplay.textContent = "Try Again!";
			}
		});
	}
}

function reset(){
	// generate all new colors
	colors = generateRandomColors(numSquares);
	// pick new randonm color from array
	goalColor = pickColor();
	// change color display to match new goalColor
	colorDisplay.textContent = goalColor;
	resetButton.textContent = "New Colors";
	messageDisplay.textContent = "";
	// change colors of squares
	for(var i = 0; i < squares.length; i++){
	// add beginning colors to squares
		if(colors[i]){
			squares[i].style.display = "block";
			squares[i].style.backgroundColor = colors[i];
		}	else {
			squares[i].style.display = "none";
		}	
	}
	h1.style.backgroundColor = "#7ec0ee";
}

resetButton.addEventListener("click", function(){
	reset();
})

function changeColors(color){
	for(var i = 0; i < squares.length; i++){
	// change all squares to match goal color
		squares[i].style.backgroundColor = color;
	}
}

function pickColor(){
	var random = Math.floor(Math.random() * colors.length);
	return colors[random];
}

function generateRandomColors(num){
	// make an array
	var arr = []
	// repeat num times
	for(var i = 0; i < num; i++){
	// get randomcolor for array
	arr.push(randomColor())
	}
	//*******send all rgb values to console **********************
	console.log(arr);
	// return that array
	return arr;
}

function randomColor(){
	// pick a red from 0-255
	var r = Math.floor(Math.random() * 256);
	
	// pick a green from 0-255
	var g = Math.floor(Math.random() * 256);

	// pick a blue from 0-255
	var b = Math.floor(Math.random() * 256);
	return "rgb(" + r + ", " + g + ", " + b + ")";
}