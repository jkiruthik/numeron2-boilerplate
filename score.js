// Iteration 8: Making scoreboard functional

var score = localStorage.getItem("totalscore")

var scoreBoard = document.getElementById("score-board");
scoreBoard.innerHTML = score;

var playAgainButton = document.getElementById("play-again-button");

playAgainButton.onclick = () => {
    console.log("check")
  location.href = "./game.html";
};