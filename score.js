// Iteration 8: Making scoreboard functional
let scoreboard= document.getElementById("score-board");
scoreboard.innerText=localStorage.getItem("score");
let playAgainBtn=document.getElementById("play-again-button");
playAgainBtn.addEventListener("click",function(){
    window.location.href="./game.html"
})
