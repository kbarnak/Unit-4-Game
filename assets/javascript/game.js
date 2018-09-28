//Define Global Variables 
var computerRandom;
var randomBtn1;
var randomBtn2;
var randomBtn3;
var randomBtn4;
var result = 0;
var wins = 0;
var losses = 0;

//Create a function that assigns numbers to the buttons
function gameReset () {
    randomNumber();
    randomButtons();
    result = 0;
}

gameReset();


//Create a computer generated random number function
function randomNumber() {
    computerRandom = Math.floor(Math.random( ) * 65 + 35);
    $("#match-number").text(" " + computerRandom);
};

//Create a function that assigns random numbers to all buttons 
function randomButtons() {
    randomBtn1 = Math.floor(Math.random() * 19 + 1);
    randomBtn2 = Math.floor(Math.random() * 19 + 1);
    randomBtn3 = Math.floor(Math.random() * 19 + 1);
    randomBtn4 = Math.floor(Math.random() * 19 + 1);
}

randomButtons();


//Create an "ON CLICK" event that gives and displays the buttons random values
function run() {

    
$("#btn1").on("click", function() {
    result+= (randomBtn1);
    $("#player-number").text(" " + result);
    if (result > computerRandom) {
        checkWin(); }

    console.log("btn1: ", randomBtn1, "user-number:", result);
}); 

$("#btn2").on("click", function() {
    result+= (randomBtn2);
    $("#player-number").text(" " + result);
    if (result > computerRandom) {
        checkWin(); }
});

$("#btn3").on("click", function() {
    result+= (randomBtn3);
    $("#player-number").text(" " + result);
    if (result > computerRandom) {
        checkWin(); }
});

$("#btn4").on("click", function() {
    result+= (randomBtn4);
    $("#player-number").text(" " + result);
    if (result > computerRandom) {
        checkWin(); }
});
};

function checkWin() {
if (result === computerRandom) {
    wins++;
$("#player-wins").text(wins);
} else if (result > computerRandom) {
    losses++;
$("#player-losses").text(losses);
    gameReset();
}
};

run();