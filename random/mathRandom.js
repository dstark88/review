
var random1 = document.getElementById("mathRandom-1").innerHTML =
(Math.random());
var random2 = document.getElementById("mathRandom-2").innerHTML =
(Math.random());
var random3 = document.getElementById("mathRandom-3").innerHTML =
(Math.random());


document.getElementById("mathX10-1").innerHTML =
(random1 * 10);
document.getElementById("mathX10-2").innerHTML =
(random2 * 10);
document.getElementById("mathX10-3").innerHTML =
(random3 * 10);

document.getElementById("mathFloor-1").innerHTML =
Math.floor(random1 * 10);
document.getElementById("mathFloor-2").innerHTML =
Math.floor(random2 * 10);
document.getElementById("mathFloor-3").innerHTML =
Math.floor(random3 * 10);



var random11 = document.getElementById("mathRandom-11").innerHTML =
(Math.random());
var random22 = document.getElementById("mathRandom-22").innerHTML =
(Math.random());
var random33 = document.getElementById("mathRandom-33").innerHTML =
(Math.random());

document.getElementById("mathX10-11").innerHTML =
(random11 * 100);
document.getElementById("mathX10-22").innerHTML =
(random22 * 100);
document.getElementById("mathX10-33").innerHTML =
(random33 * 100);


document.getElementById("mathFloor-11").innerHTML =
Math.floor(random11 * 100) + 100;
document.getElementById("mathFloor-22").innerHTML =
Math.floor(random22 * 100) + 100;
document.getElementById("mathFloor-33").innerHTML =
Math.floor(random33 * 100) + 100;
