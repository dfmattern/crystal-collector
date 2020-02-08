$(document).ready(function() {
  //console.log( "ready!" );

  //global variables
  let wins = 0;
  let losses = 0;
  let numberToGuess;
  let playerTotal = 0;
  let value;
  let crystalOrange = Math.floor(Math.random() * 11 + 1);
  let crystalPurple = Math.floor(Math.random() * 11 + 1);
  let crystalBlue = Math.floor(Math.random() * 11 + 1);
  let crystalRed = Math.floor(Math.random() * 11 + 1);

  function reset() {
    $(".btn").each(function() {
      numberToGuess = Math.floor(Math.random() * 101 + 19);
      //console.log(value);

      //reset player score
      playerTotal = 0;

      //update total score
      $("#totalScore").text(playerTotal);

      //update random number to guess
      $("#randomNumber").text(numberToGuess);
    });
  }
  reset();

  //game start
 
    $(".crystal1").click(function() {
      playerTotal = playerTotal + crystalOrange;
      $("#totalScore").text(playerTotal);
      winLoss();
    });
    $(".crystal2").click(function() {
      playerTotal = playerTotal + crystalPurple;
      $("#totalScore").text(playerTotal);
      winLoss();
    });
    $(".crystal3").click(function() {
      playerTotal = playerTotal + crystalBlue;
      $("#totalScore").text(playerTotal);
      winLoss();
    });
    $(".crystal4").click(function() {
      playerTotal = playerTotal + crystalRed;
      $("#totalScore").text(playerTotal);
      winLoss();
    });
   
  


  function winLoss() {
    if (playerTotal === numberToGuess) {
      //dsiplay win overlay
      //winOn();

      //update wins total
      wins++;

      //update wins display
      $("#wins").text("Wins:" + wins);

      //reset game
      reset();
    } else if (playerTotal > numberToGuess) {
      

      //update losses total
      losses++;

      //update losses display
      $("#losses").text("Losses:" + losses);

      //reset game
      reset();
    }
  }

  

  
  //don't lose these!
});
