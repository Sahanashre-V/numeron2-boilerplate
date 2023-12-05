// Iteration 1: Making the play button in the index.html functional.
// Description: When the play button is clicked the game.html page should be opened
let playbutton= document.getElementById("play-button");
playbutton.addEventListener("click",function(){
    window.location.href="./game.html"
})