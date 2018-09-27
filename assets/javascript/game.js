//Define Global Variables 



//Create a function that assigns numbers to the buttons
function gameReset () {
    wins = 0;
    losses = 0;
    randomNumber();
    randomButtons();
    $("#wins, #losses, #user-number").empty();
}

gameReset()


//Create a computer generated random number function
function randomNumber() {
    computerRandom = Math.floor(Math.random( ) * 65 + 35);
    $("#computer-random").text(computerRandom);
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
$("#btn1").on("click", function() {
    result+= parseInt(randomBtn1);
    $("#user-number").text(result);
    console.log("btn1: ", randomBtn1, "user-number:", result);

});
