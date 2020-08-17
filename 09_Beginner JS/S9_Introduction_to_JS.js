// // 111. Js Variables

// var a ="3";
// var b = "8";
// var c;

// c=a;
// a=b;
// b=c;

// console.log("a is " + a);
// console.log("b is " + b);


// // 112. Naming in JS

// var myName = "Alex";
// var yourName = "Ion";

// console.log(myName);
// console.log(yourName);

// // 113. Concatenation

// var message = "Hello";
// var name = "Alex";

// console.log(message + " " + name);


// // 114. String Lenght

// var name = "Alex";
// console.log(name.length);

// // exercise
// var tweet = prompt("Write a tweet");

// var numberOfCharWritten = tweet.length;
// var numberOfCharRemained = 280 - numberOfCharWritten;

// console.log("You have written " + numberOfCharWritten + " characters, you have " + numberOfCharRemained + " characters left.");

// // 115. Slicing

// var tweet = prompt("Compose your tweet");
// var tweetUnder140 =  tweet.slice(0,140);

// alert(tweetUnder140);


// // 116. Changing Casing in Text

// var name = "Alex";
// name = name.toUpperCase();
// name = name.toLowerCase();

// console.log(name);

// // ex: 
// var name = "aLEX";
// name = name.toUpperCase().slice(0,1) + name.toLowerCase().slice(1,140);

// console.log("Hello, " + name);


// // 118. Basic Arithmetic and the Modulo Operator in Javascript

// var dogAge = 10;

// var humanAge = (dogAge-2)*4+21;

// console.log(humanAge);


// // 119. Functions Part 1: Creating and Calling Functions

// function getMilk(){
//     console.log("This is a function.");
// }

// getMilk();

// // 124. Functions Part 2: Parameters and Arguments

// function getMilk(money) { 

//     var numberOfBottles =money/1.3;  
  
//     console.log("leaveHouse");
//     console.log("moveRight");
//     console.log("moveRight");
//     console.log("moveUp");
//     console.log("moveUp");
//     console.log("moveUp");
//     console.log("moveUp");
//     console.log("moveRight");
//     console.log("moveRight");
//     console.log("The robot bought " + parseInt(numberOfBottles) + " bottles of milk.");
//     console.log("moveLeft");
//     console.log("moveLeft");
//     console.log("moveDown");
//     console.log("moveDown");
//     console.log("moveDown");
//     console.log("moveDown");
//     console.log("moveLeft");
//     console.log("moveLeft");
//     console.log("enterHouse");
//   }
  
//   getMilk(5);


// // 125. Life in Weeks Solution


// function lifeinWeeks(age){

//     var YearsRemaining = 90-age;
//     var days = YearsRemaining*365;
//     var weeks = YearsRemaining*52;
//     var months = YearsRemaining*12;

//     console.log("You have " + days + " days," + weeks + " weeks, and " + months + " left.");

// }

// lifeinWeeks(31);


// // 126. Functions Part 3: Outputs & Return Values

// function getMilk(money){
//     var numberOfBottles = parseInt(money/1.5);

//     console.log("buy " + numberOfBottles + " bottles of milk");

//     return money % 1.5; //Remainder of the division
// }

// var change = getMilk(3);

// console.log(change);


// // 127. Challenge: Create a BMI Calculator

// function bmiCalculator(weight, height){
          
//     var BMI = parseInt(weight/Math.pow(height,2));    
//     return BMI;
    
// }

// bmiCalculator(65,1.8);

