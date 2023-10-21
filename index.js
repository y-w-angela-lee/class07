//Question 1

/**
* @desc a function that returns the largest number values in each set
 * @param {*} set1 a set of three different values
 * @param {*} set2 a set of three different values
 * @param {*} set3 a set of three different values 
 * @returns the largest value from each set
 */

function maximum (set1, set2, set3) {
    return Math.max (set1, set2, set3);
}

var maxNumberOne = maximum(12,18,3);

var maxNumberTwo = maximum(100, 4, 20);

var maxNumberThree = maximum(24, 41, 87);


console.log(maxNumberOne);//18
console.log(maxNumberTwo);//100
console.log(maxNumberThree);//87


//Question 2
/**
 * @desc a function that generates a value between 1-6, like a dice roll
 * @returns a number between 1-6
 */

function diceRoll (){
    return Math.floor(Math.random()*6) + 1;
};

/**
 * @desc a function that says if the dice number was a winner or not
 * @param {*} diceNumber the number that is rolled 
 */
function isWinner(diceNumber) {
    if (diceNumber == 4){
        console.log("Winner")
    } else {
        console.log("You lost");
    }
}

var number = diceRoll();
isWinner(number);


//Question 3

/**
 * @desc a function that returns the number from the fibonacci sequence
 * @param {*} number the number position in the fibonacci sequence
 * @returns the fibonacci number
 */
function fibonacci(number) {
    if (number == 0||number == 1) {
    return number;
    }
 return fibonacci(number - 1) + fibonacci (number - 2); 
}

var count = fibonacci(6);
console.log(count);//8


//Question 4
/**
 * @desc a function that gives us the location name capitalized
 * @param {*} location name of location
 * @returns the capitalized location name 
 */
function capitalise(location) {
    return location[0].toUpperCase() + location.substring(1);
}

/**
 * @desc a function that checks and formation the location
 * @param {*} location the location to check and format
 */
function checkLocation(location) {
    var locationFormatted = capitalise(location);
    console.log(locationFormatted);//Vancouver
   

    if (locationFormatted === "Vancouver") {
        console.log ("It is rainy here");
    }
}
checkLocation("vancouver");

//Question 5

/**
 * Create a function that will generate a number between -5 and 5.
 * It will also format and return that number to 2 decimal places
 * The function's name will be randomNum, and will have no parameters.
 * Call the function to a variable called number, then console log it
 */

function randomNum() {
    var randomNumber = Math.floor(Math.random() * 11) - 5;
    return randomNumber.toFixed(2);
}
//Call the function to a variable called number, then console log it
var number = randomNum();
console.log(number);//ex. 1.00

/**
 * Create another function that will check if it is a positive number
 * Name the function checkPositive, with the parameter 'number'
 * If positive, console log "Positive", 
 * otherwise, should console log "Negative"
 * Then call the checkPositive function with the variable 'number'
 */

function checkPositive (number) {
    if (number > 0) {
    console.log("Positive"); 
} else {
    console.log("Negative");
}
}
checkPositive(number);//Positive

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

function sentence(game, place) {
    if(game == "soccer") {
        console.log("I live in " + place[0].toUpperCase() + place.slice(1) + " and I enjoy " + game);
    } else {
        console.log("Not right")
    }
        }
    sentence(sport,city);//I live in Surrey and I enjoy soccer

/**
 * Create another function named 'favouriteSport' and give it the parameter 'game'
 * If game is equal to "soccer" return "Soccer is my favourite"
 * If not, return "Soccer is not my favourite sport"
 */

function favouriteSport(game) {
    if (game == "soccer") {
        return "Soccer is my favourite";
    } else {
        return "Soccer is not my favourite sport"
    }
}

var message = favouriteSport(sport);
console.log(message);//Soccer is my favourite