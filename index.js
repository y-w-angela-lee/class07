//Question 1

/**
 * @desc a function that returns the largest number within the set
 * @param maxNumberOne the largest number in that set
 * @param maxNumberTwo the largest number in that set
 * @param maxNumberThree the largest number in that set
 * @returns the largest numbers from each set
 */
var maxNumberOne = maximum(12,18,3);

var maxNumberTwo = (100, 4, 20);

var maxNumberThree = (24, 41, 87);

function maximum (){
    return maxNumberOne, maxNumberTwo, maxNumberThree
};


console.log(maxNumberOne);//
console.log(maxNumberTwo);//20
console.log(maxNumberThree);//87


//Question 2
/**
 * @desc a function that generates a value between 1-6, like a dice roll
 * @returns a number between 1-6
 */

function diceRoll (){
    return (Math.floor(Math.random()*6))
};

/**
 * @desc a function that checks if the dice roll is a winner or not
 * @param {*} diceRoll the number result 
 */
function isWinner (diceRoll) {
    if (diceRoll == 4){
        console.log("Winner")
    } else {
        console.log("You lost");
    }
}

var number = diceRoll 
isWinner (number){}

//Question 3

function fibonacci(number) {
    if (number == 0||1);
    return number;
}
fibonacci(number - 1) + fibonacci (number - 2); {
    return ()
};

var count = fibonacci(6);
console.log(count);//


//Question 4
/**
 * @desc a function that gives us the location name capitalized
 * @param {*} location name of location
 * @returns the location name with first character capitalized
 */
function capitalise(location) {
    return location[0].toUpperCase() + location.substring(1);
}

function checkLocation(vancouver) {
    return locationFormatted (location)
    console.log(locationFormatted);//

    if (location == "Vancouver") {
        console.log ("It is rainy here");
    }
}

//Question 5

/**
 * Initialise the variable 'number' to the value of 5
 * Setup a function that is called 'randomNumber'that has the parameter 'digit'
 * Inside the if statement, if 'digit' is equal to 5, then console log "Correct"
 * Else then console log "Incorrect"
 * Call the function 'result' and pass the variable 'digit' in the parameters
 * Return digit and add 1 
 */

var number = 5;
function randomNumber(digit) {
    if (digit == 5) {
        console.log("Correct");
    } else {
        console.log("Incorrect")
    }
}
function result(digit) {
    return (digit + 1)
}

//Question 6
/**
 * Initialise the variable 'sport' to the value of 'soccer'
 * Initialise the variable 'city' to the value of 'surrey' in lowercase
 * Setup a function called sentence that has the parameters of game and place
 * 
 * Inside the function setup an if statement that checks if game is equal to soccer.
 * Use a method that capitalizes the game. 
 * If true then console log out "I live in __place__ and I enjoy __game__"
 * Else then console log out "Not right"
 * 
 * Call the function sentence under the function that passes the variable sport and city. 
 */
var sport = "soccer";
var city = "surrey";

function sentence(game,place) {
    if(game == "soccer") {
        console.log("I live in " + place[0].toUpperCase() + place.slice(1) + " and I enjoy" + game);
    } else {
        console.log("Not right")
    }
        }
    sentence(sport,city);//

