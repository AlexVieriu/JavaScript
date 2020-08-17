// 131. Random Number Generation in Javascript: Building a Love Calculator

// // -> Getting a random integer between two values, inclusive
// function getRandomIntInclusive(min, max) {
//     min = Math.ceil(min);
//     max = Math.floor(max);
//     return Math.floor(Math.random() * (max - min + 1)) + min; //The maximum is inclusive and the minimum is inclusive 
//   }

//  console.log(getRandomInt(1, 10));

// // Love Score ex
// function percentege(startNumber,endNumber)
// {
//     var startNumber = prompt("Enter start number: ");
//     var endNumber = prompt("Enter end number: ");

//     var result = Math.floor(Math.random() *(endNumber - startNumber + 1) + startNumber);
//     return result;
// }

// alert(percentege(startNumber,endNumber) + "%");

// // 132. Control Statements: Using If-Else Conditionals & Logic

// function percentege(startNumber,endNumber)
// {
//     var startNumber = prompt("Enter start number: ");
//     var endNumber = prompt("Enter end number: ");
    

//     var loveScore = Math.floor(Math.random() *(endNumber - startNumber + 1) + startNumber);
    
//     if(loveScore >70){
//         alert("Your love score is " + loveScore + "%" + ". You love each other.")
//     }
//     else{
//         alert("Your love score is " + loveScore + "%");
//     }
    
//     return loveScore;
// }

// percentege(startNumber,endNumber);


// // 133. Comparators and Equality

// var a = 1;
// var b = "1";
// console.log("a typeof: " + typeof(a));
// console.log("b typeof: " +typeof(b));

// if(a===b){
//     console.log("=== result: yes");
// }
// else{
//     console.log("=== result: no");
// }
// // no 


// if(a==b){
//     console.log("== result: yes");
// }
// else{
//     console.log("== result: no");
// }
// // yes


// // 134. Combining Comparators

// function percentege()
// {
//     var startNumber = prompt("Enter start number: ");
//     var endNumber = prompt("Enter end number: ");
    

//     var loveScore = Math.floor(Math.random() *(endNumber - startNumber + 1) + startNumber);
    
//     if(loveScore >70){
//         alert("Your love score is " + loveScore + "%" + ". You love each other.")
//     }

//     if(loveScore <=70 && loveScore>30){
//         alert("Your love score is " + loveScore + "%" + ". Almost there.")
//     }

//     else{
//         alert("Your love score is " + loveScore + "%" + ". Not even close.");
//     }    
// }

// percentege();


// // BMI Calculator Advanced(IF/ELSE)

// function bmiCalculator (weight, height) {
    
//     var bmi = Math.floor(weight/Math.pow(height,2));
    
//     var interpretation;
    
//     if(bmi < 18.5){
//         interpretation =  "Your BMI is " + bmi + ", so you are underweight.";
//     }
//     if(bmi >= 18.5 && bmi<= 24.9){
//         interpretation = "Your BMI is " + bmi + ", so your are normal weight.";
//     }
//     if(bmi > 24.9){
//         interpretation = "Your BMI is " + bmi + ", so your are overweight.";
//     }
//     return interpretation;
// }

// console.log(bmiCalculator(92, 1.77));

// // 135. Leap Year Code Challenge

// function isLeap(year){
//     if(year % 4 === 0){
//         if(year % 100 === 0){
//             if(year % 400 === 0)
//                 console.log("Leap year.");
//             else
//                 console.log("Not leap year.");            
//         }        
//         else 
//             console.log("Leap year.");        
//     }
//     else 
//         console.log("Not leap year.");                    
// }

// isLeap(1948);

// // 137. Collections: Working with JavaScript Arrays

// // ex_1:
// var eggs = [1,2,3,4,5];
// console.log(eggs.length);
// console.log(eggs.includes(1));

// // ex_2:
// var guestList = ["Angela", "Jack", "Pam", "James", "Lara", "Jason"];
// var name = prompt("What is your name?");

// if(guestList.includes(name))
//     alert("Welcome");
// else
//     alert("Maybe next time.");

// // 138. Adding Elements and Intermediate Array Techniques

// // ex_1;
// var output = [];

// function fizzBuzz(){
//     output.push(output.length + 1);
//     console.log(output);
// }

// fizzBuzz();

// // ex_2;

// var output = [];
// var count = 1;

// function fizzBuzz(){
//     if(count % 3 === 0 && count % 5 === 0)
//         output.push("fizzbuzz");        
//     else if(count % 5 === 0)
//         output.push("buzz");
//     else if(count % 3 === 0)
//         output.push("fizz");
//     else{
//         output.push(count);
//     } 
                
//     count++;
//     console.log(output);
// }

// fizzBuzz();


// // Whos's Buing Lunch? Code Challenge

// var names = ["Angela", "Jack", "Pam", "James", "Lara", "Jason"];

// function randomFunction(names){
//     var randomName = Math.floor(Math.random() * names.length);
//     return names[randomName] + " is going to buy lunch today!";
// }

// randomFunction(names);


// // 140. Control Statements: While Loops

// var output = [];
// var count = 1;

// function fizzBuzz(){

//     while(count<=100)
//     {
//         if(count % 3 === 0 && count % 5 === 0)
//             output.push("fizzbuzz");        
//         else if(count % 5 === 0)
//             output.push("buzz");
//         else if(count % 3 === 0)
//             output.push("fizz");
//         else{
//             output.push(count);
//         } 

//         count++;
//     }
        
//     console.log(output);
// }

// fizzBuzz();

// // ex_2

// function bottlesGame(){

//     var numberOfBottles = 99;
//     var inistialBottles = numberOfBottles;

//     while(numberOfBottles > 0)
//     {
//         console.log(numberOfBottles  + " bottles of beer on the wall, " + numberOfBottles + " bottles of beer.");
//         console.log("Take one down and pass it around, " + (numberOfBottles - 1)  + " bottles of beer on the wall");                
        
//         if(numberOfBottles === 1 )
//         {
//             console.log(numberOfBottles  + " bottles of beer on the wall, " + numberOfBottles + " bottles of beer.");
//             console.log("Take one down and pass it around, " + (numberOfBottles - 1)  + " bottles of beer on the wall");                
         
//         } 
               
//         numberOfBottles--;        
//     }

//         console.log("No more bottles of beer on the wall, no more bottles of beer.");
//         console.log("Go to the store and buy some more, "+ inistialBottles +" bottles of beer on the wall");                
         
// }

// bottlesGame();


// // 142. Control Statements: For Loops

// var output = [];

// function fizzBuzz(){

//     for(var count = 1; count<=100; count++)
//     {
//         if(count % 3 === 0 && count % 5 === 0)
//             output.push("fizzbuzz");        
//         else if(count % 5 === 0)
//             output.push("buzz");
//         else if(count % 3 === 0)
//             output.push("fizz");
//         else
//             output.push(count);        
//     }        
//     console.log(output);
// }

// fizzBuzz();

// // 143. Introducing the Fibonacci Code Challenge 

// var n;

// function fibonacciGenerator(n){    
//     var array = [];
//     for(var i = 0; i < n ; i ++)
//     {
//         if(i<=1){
//             array.push(i);
//         }
        
//         if(i>1){
//             array.push(array[array.length-2] + array[array.length-1]);
//         }
//     }
//     return array;
// }

// output = fibonacciGenerator(10);
// console.log(output);