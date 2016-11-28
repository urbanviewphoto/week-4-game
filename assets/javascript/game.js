// Our alphabet in an array
var letters = ['a','b','c','d','e','f',
			   'g','h','i','j','k','l',
			   'm','n','o','p','q','r',
			   's','t','u','v','w','x',
			   'y','z']; 
// We preset wins & losses to zero
var guess  = '?';
var pad	    = "&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;"; 
var wintext = "Winning letters: "; 
var winners = "";
var letter = ''; 
var lettersTyped = "";
var left = 9; 
var wins = 0;
var losses = 0;	
var i = 0;

document.querySelector("#computer").innerHTML="Guess what letter I'm thinking of " + guess; 
// document.getElementById("#lastwin").style.visibility = "hidden";

// Reset function - sets up variables
// & displays wins, losses, etc. 
reset = function() {			   
	// We generate a random number between 1 and 26
	var randNumber = Math.floor(Math.random()*letters.length+1);
	letter = letters[randNumber];
	lettersTyped = "";
	left = 9;
	i = 0;
	console.log(letter); 

	// Display wins, losses, left and guesses typed
	if (wins == 0) {
		document.querySelector("#wins").innerHTML="Wins: " + wins;		
	} else {
		document.querySelector("#wins").innerHTML="Wins: " + wins + pad + wintext + winners;
	}
	document.querySelector("#losses").innerHTML="Losses: " + losses;
	document.querySelector("#left").innerHTML="Guesses Left: " + left;
	document.querySelector("#guesses").innerHTML="Your Guesses so far: " + lettersTyped;
};

reset();

// Big Loop
for (i=0; i<9; i++) {
	// Key event 
	document.onkeyup = function(event) {
		var key = event.key; 
		if (key == letter) {
			wins++; 
			winners += key;
			reset();
		} else {
			lettersTyped += key;
			left--;
			document.querySelector("#left").innerHTML="Guesses Left: " + left;
			document.querySelector("#guesses").innerHTML="Your Guesses so far: " + lettersTyped;
			if (left == 0) {
				losses++;
				reset(); 
			}
		}			
	}
}
reset();	
// var rerun = prompt("Play again?"); 
// if (rerun == true) {
// 	reset();
// } else {
// 	return; 
// }

