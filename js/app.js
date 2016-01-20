
$(document).ready(function(){

var randomNumber = 0;
var guessCount = 0;
var userGuess = 0;   
var win = false;
var userCount = 0;


var counting = function(){
      userCount += 1;
       $('#count').replaceWith("<span id='count'>" + userCount + "</span>");
  };

//generates number
	function randomNumberGenerator() {
 		randomNumber = Math.floor(Math.floor(Math.random()*100));
 		console.log("random number= " + randomNumber);
	}


randomNumberGenerator();
//starts new game
	function newGame(){
		win = false;
		guessCount = 0;
		userGuess = 0;
		$("#userGuess").val('');
		changeFeedback('Make your Guess!');
		randomNumber = (Math.floor(Math.random()*100));
		console.log("random number= " + randomNumber);
		$('#guessList').empty();
      	$('#count').replaceWith("<span id='count'>" + guessCount + "</span>");
	}

//user guess
	function compareGuess(userGuess){  
		counting();
		$('#guessList').append('<li>'+userGuess+'</li>');
		var guessChecker = (Math.abs(userGuess - randomNumber));
        console.log(guessChecker);
        if (userGuess == randomNumber) {
        	changeFeedback('You Win!');
        	win = true;
        } else if (guessChecker <= 10){
        	changeFeedback('You are Hot');
        } else if (guessChecker <= 50){
        	changeFeedback('You are Warm');
        	
        } else {

        	changeFeedback('You are very cold');
        }
    }

// changes feedback
    function changeFeedback(feedback) {
        $('#feedback').text(feedback);
    }

//sets number of counts
    function setCount(count){
        $('#count').text(guessCount);
    }


//submit
	$('#guessButton').click(function() {
		var userGuess = $("#userGuess").val();
		compareGuess(userGuess);
	});

//click for new game
	$( ".new" ).click(function() {
  	newGame();
	});





/*-- Checks the user's input--*/
function checkInput(){
    if(isNaN(userGuess)) {
        alert("Please enter a number from 1 - 100!");
    } else if(userGuess === " ") {
        alert("Well, you have to input a number");
    } else if (userGuess < 0 || userGuess > 100) {
        alert("Plese enter a number from 1 - 100!");
    } 
}

/*--- To get user's input --*/
    $("form").submit(function(event){
        event.preventDefault();
        //if user finished the game, it doesn't allow him to continue!
        if(!win){
            userGuess = $('#userGuess').val();
            checkInput();
        } else {
            changeFeedback("You already won! Need to start a new game!");
        }
    });



});




$(document).ready(function(){
	
	/*--- Display information modal box ---*/
  	$(".what").click(function(){
    	$(".overlay").fadeIn(1000);

  	});

  	/*--- Hide information modal box ---*/
  	$("a.close").click(function(){
  		$(".overlay").fadeOut(1000);
  	});

});