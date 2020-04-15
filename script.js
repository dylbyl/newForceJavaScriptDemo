
var dylanObject = {
    firstName : "Dylan",
    lastName : "Bishop",
    age : 25,
    likesTravel : true,
    movieArray : ["Scott Pilgrim vs the World", "Your Name", "Spider-Man: Into the Spiderverse"]
}

console.log(dylanObject.firstName, dylanObject.lastName, dylanObject.age, dylanObject.likesTravel);

for(var i = 0; i < dylanObject.movieArray.length; i++){
    console.log(dylanObject.movieArray[i]);
}


// All About Me
// instantiate and assign the following variables with information about yourself:
// firstName should hold a string of your first name
// lastName should hold a string of your last name
// age should hold a number of your age
// likesTravel should hold a boolean representing whether or not you like to travel
// Log each variable to the console.

// Favorite Movies
// In your JavaScript file, instantiate and assign a variable called movieArray. This variable should hold an array of your favorite movie titles. (Don't go overboard- two or three is fine).
// Log each movie in the array to the console.


// Instead of storing the data from your first lightning exercise in separate variables, store them in an object. Your object should have a property of firstName, lastName, age, likesToTravel. It should also have a property called favoriteMovies, which should hold the array of your favorite movies you created in the last lightning exercise.

const wardrobe = {
    height: 80,
    manufacturer: "Killibrew & Sons",
    contents: ["Dress shirt", "Jeans", "Suit", "Skirt", "Tennis shoes"],
    depth: 38,
    width: 50
}

console.log(wardrobe.height);
console.log(wardrobe.manufacturer);
console.log(wardrobe.contents[2]);
console.log(wardrobe.depth);
console.log(wardrobe.width);


const empireStateBuilding = {
    stories: 103,
    height: 1453,
    address: "350 Fifth Avenue, Manhattan, New York 10118",
    squareFeet: 2768591,
    constructionDate: 1931,
    cost: 40948900,
    owner: "Empire State Realty Trust",
    eastWestLength: 424,
    northSouthLength: 187,
    architect: "Shreve, Lamb & Harmon"
}


console.log(empireStateBuilding.stories, empireStateBuilding.height, empireStateBuilding.squareFeet, empireStateBuilding.eastWestLength, empireStateBuilding.northSouthLength)

var address = empireStateBuilding.address;
var date = empireStateBuilding.constructionDate;
var cost = empireStateBuilding.cost;
var owner = empireStateBuilding.owner;
var architect = empireStateBuilding.architect;

console.log(address, date, cost, owner, architect)


var mustangObject = {
    manufacturer : "Ford",
    carType : "Mustang",
    modelYear : 2015
}

var shelterNames = ["Kippers", "Jack", "Gypsy", "Angus", "Seymour Bouts", "Sharky"];

var mother = {
    name : "Traci",
    birthday : "July 26",
    likesTravel : true
}

var father = {
    name : "Marty",
    birthday : "August 30",
    likesTravel : false
}

var familyArray = [mother, father]

console.log(familyArray)

    //  Lightning Exercise 1: Given two options of data structures - array or object - which should you use? You need to represent a red 2015 Ford Mustang in your code.

    //  Lightning Exercise 2: Given two options of data structures - array or object - which should you use? You need to store list of animal names in a shelter. The names are "Kippers", "Jack", "Gypsy", "Angus", "Seymour Bouts", and "Sharky".
     
    //  Lightning Exercise 3: Define an object for four family members, and put each object in an array named familyMembers. Each family member object that you create should have the same keys on them, but the values will be different.

// In your JavaScript file, declare a new variable called likesToTravel and set it equal to true or false.
// If likesToTravel is true, log "Bon voyage!" to the console. If not, log "Enjoy your couch!" to the console.

likesToTravel = true;

if (likesToTravel){
    console.log("Bon voyage!");
}
else{
    console.log("Enjoy your couch!");
}

var piggyBank = {
    pennies : 50,
    nickels : 20,
    dimes : 23,
    quarters : 7
}


var dollarAmount = 0;

dollarAmount = piggyBank.pennies * .01;
dollarAmount += piggyBank.nickels * .05;
dollarAmount += piggyBank.dimes * .10;
dollarAmount += piggyBank.quarters * .25;

var newDollarAmount = 1.26
var newPiggyBank = {
    pennies : 0,
    nickels : 0,
    dimes : 0,
    quarters : 0
}

while(newDollarAmount >= 0){
    if((newDollarAmount - .25) >= 0){
        newDollarAmount -= 0.25;
        newPiggyBank.quarters++;
    }
    else if((newDollarAmount - .10) >= 0){
        newDollarAmount -= 0.10;
        newPiggyBank.dimes++;
    }
    else if((newDollarAmount - .05) >= 0){
        newDollarAmount -= 0.05;
        newPiggyBank.nickels++;
    }
    else{
        newDollarAmount -= 0.01;
        newPiggyBank.pennies++;
        console.log(newPiggyBank.pennies)
        console.log(newDollarAmount)
    }
}

console.log(newPiggyBank);


var scores = [82, 71, 62, 95, 55, 98, 69, 72, 78, 84, 64, 58, 87, 60]
var grades = {
    A : 0,
    B : 0,
    C : 0,
    D : 0,
    F : 0
}
var lowestScore = 100;
var highestScore = 0;
var highestGrade = "F";
var lowestGrade = "A";
var secondLowestGrade = "A";
var currentGrade = "F";

for (var i = 0; i < scores.length; i++) {
    if (scores[i] > highestScore){
        highestScore = scores[i];
    }
    if (scores[i] < lowestScore){
        lowestScore = scores[i];
    }

    switch(true){
    case (scores[i] < 60):
        grades.F++;
        currentGrade = "F";
        break;
    case (scores[i] < 70):
        grades.D++;
        currentGrade = "D";
        break;
    case (scores[i] < 80):
        grades.C++;
        currentGrade = "C";
        break;
    case (scores[i] < 90):
        grades.B++;
        currentGrade = "D";
        break;
    case (scores[i] <= 100):
        grades.A++;
        currentGrade = "A";
        break;
    }

    if(grades[currentGrade] > grades[highestGrade]){
        highestGrade = currentGrade;
    }
    if(grades[currentGrade] <= grades[lowestGrade]){
        if(lowestGrade != currentGrade){
            secondLowestGrade = lowestGrade;
            lowestGrade = currentGrade;
        }
    }
    /*
      If the score is greater than 90, increment grades.A by 1.

      You can use a series of `if/then` blocks, but you could
      also achieve this with a switch statement.
    */
}
console.log(grades);
console.log(highestScore);
console.log(lowestScore);
console.log(highestGrade);
console.log(lowestGrade);
console.log(secondLowestGrade);