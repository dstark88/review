var gameChoices = ["r", "p", "s"];
var wins = 0;
var losses = 0;
var ties = 0;
var gameScore = (wins, losses, ties);

// var computerChoice = gameChoices[Math.floor(Math.random() * gameChoices.length)];
// console.log("learning: " + computerChoice);


//put in the bottom of console log in inspect 
// Math.floor(Math.random() * gameChoices.length)

// //First show how we generate a random number
// Math.random() // shows a number between 0 and .999999
// * gameChoices.length => * by 3
// Math.floor //rounds it down and cuts off the decimal
// 0.068724 * 3 = 0.26 =>  0

// 0.538511 * 3 = 1.615 => 1

// 0.958511 * 3 = 2.875 => 2


for (var i = 0; i < 3; i++) {
    // play each individual round!
    // collect the user choice
    var userChoice = prompt("type 'r' or 'p' or 's' to start!");
    userChoice = userChoice.toLowerCase();
    console.log("User: " + userChoice);

    // if user gave a valid guess (r, p, s)
    if (gameChoices.includes(userChoice)) {

        // generate computer choice (random)
        var computerChoice = gameChoices[Math.floor(Math.random() * gameChoices.length)];
        console.log("Computer: " + computerChoice);

        // display both user and computer choice
        alert(`You Chose: ${userChoice} | Computer Chose: ${computerChoice}`);
    
        // calculate whether user win/lose/tie and alert the result
        if (userChoice === computerChoice) {
            ties ++;
            console.log(`Ties: ${ties}`);
            alert(`You tied! You've tied ${ties} time so far!`);
        }
        else if (userChoice === "r" && computerChoice === "s" ||
            userChoice === "s" && computerChoice === "p" ||
            userChoice === "p" && computerChoice === "r") {
            wins ++;
            console.log(`Wins: ${wins}`);
            alert(`You won! You've won ${wins} time so far!`);
        }
        else {
            losses ++;
            console.log(`Losses: ${losses}`);
            alert(`You lost! You've lost ${losses} time so far!`);
        }
        
        console.log("Game Score: ", gameScore);
        // console.log(`Game score = Wins: ${wins}, Losses: ${losses}, and Ties: ${ties}`);

    } else {
        // triggered when the user make an invalid choice
        alert("Please make a valid choice!")
    }

}

