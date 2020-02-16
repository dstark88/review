// extra playing around 
var name = "denise stark";

name.split(" ");
// console.log(name.split(" ")); 
var nameArr = name.split(" ");
// console.log(nameArr);

for (var i = 0; i < nameArr.length; i++) {
  var currentName = nameArr[i];
  var upperCaseName = currentName.charAt(0).toUpperCase() + currentName.substring(1);
//   console.log(upperCaseName);
  nameArr[i] = upperCaseName; //reassign the name
}
//   console.log(nameArr.join(" "));

  
// actual loop code

var animals = ["chicken", "rabbit", "ocelot", "shark", "whale", "caterpillar", "ostrich", "unicorn", "Crocodile"];

for (var i = 0; i < animals.length; i++) {
    // console.log(animals[i]); 
    // console.log(animals[i].charAt(0).toUpperCase() + animals[i].substring(1));
    var animal = animals[i];
    var firstLetter = animal.charAt(0).toLowerCase();
    console.log(animal);

    if (firstLetter === "c" || firstLetter === "o") {
        console.log(animal + " starts with either a 'c' or and 'o'");
    }

}