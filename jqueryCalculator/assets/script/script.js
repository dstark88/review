var firstNumber = ""; // concatenating "" + "4"
var secondNumber = "";
var operator = "";
var result = 0;
var operatorChosen = false;
var isCalculated = false;

function resetCalculator(){
    // reset all variables to default
    firstNumber = ""; // concatenating "" + "4"
    secondNumber = "";
    operator = "";
    result = 0;
    operatorChosen = false;
    isCalculated = false;

    // reset all html to default
    $("#first-number, #second-number, #operator, #result").empty();
}

// vanilla javaScript selector
var JSSelector = document.getElementById("kitten");
// jquery selector
var JQSelector = $("#puppies"); 

// examples
var myStr = "testing";
myStr += " whatever"; // testing whatever
myStr += " hey"; // testing whatever hey

var myNum = 5;
myNum += 3; // 8 are you working with numbers or "strings"?


$(".number").on("click", function() {
    // if we've already run the calculation, prevent the user from adding more digits
    if (isCalculated) {
        return;
    }

    console.log("clicked ", $(this).val());
    var digit = $(this).val();

    // if (operator has NOT been chosen)
    if (!operatorChosen) {
        // add to firstNumber
        firstNumber += digit;
        // print to page
        $("#first-number").text(firstNumber);
    // if (operator has been chosen)
    } else {
        // add to secondNumber
        secondNumber += digit;
        // update html
        $("#second-number").text(secondNumber);
    }
});

$(".operator").on("click", function() {
    // if we've already run the calculation, prevent the user from changing operator
    if (isCalculated || !firstNumber || operatorChosen) {
        return;
    }

    console.log("clicked ", $(this).val());
    operatorChosen = true;
    operator = $(this).val(); // = word plus want it to ge +

    // getting the text from the html for the symbol. 
    // If .text() is empty you get the text
    // If .text("hey") you give the text of what is in there
    var symbol = $(this).text();
    $("#operator").text(symbol);

});

$(".equal").on("click", function() {

    // if we've already run the calculation, prevent the user from calculating again
    if (isCalculated) {
        return;
    }

    console.log("clicked ", $(this).val());
    console.log("numbers typed are ", typeof firstNumber);

    isCalculated = true;

    firstNumber = parseInt(firstNumber); // telling it to store the number version of the string
    secondNumber = parseInt(secondNumber); // store the number version of the string
    console.log("numbers typed are ", typeof firstNumber);

    switch(operator) {
        case "plus": 
            result = firstNumber + secondNumber;
            break;

        case "minus":
            result = firstNumber - secondNumber;
            break;

        case "times":
            result = firstNumber * secondNumber;
            break;

        case "divide":
            result = firstNumber / secondNumber;
            break;

        case "power":
            result = Math.pow(firstNumber, secondNumber);
            break;
        
        default:
            alert("not a valid operator");
    }   

    $("#result").text(result);
});

$(".clear").on("click", function() {
    console.log("clicked ", $(this).val());

    resetCalculator();
});