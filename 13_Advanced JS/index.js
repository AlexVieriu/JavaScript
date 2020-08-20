// 171. Adding Event Listeners to a Button

// alert("salut");

// document.querySelector("button").addEventListener("click", function(){
//     alert("Salut");
// })


// for( var i = 0; i<document.querySelectorAll(".drum").length; i++)
// {
//     document.querySelectorAll("button")[i].addEventListener("click",function(){
//         alert("Salut");
//     })    
// }

// ---> more examples

// var a = document.getElementsByTagName("input")[0];
// var b = a.attributes;

// for (var i = 0; i<b.length; i++){
//     console.log(b[i]);
// }

// 172. Higher Order Functions and Passing Functions as Arguments

// function add(num1, num2){
//     return num1 + num2;
// }

// function multiply(num1, num2){
//     return num1 * num2;
// }

// function substract(num1, num2){
//     return num1/num2;
// }

// function minus(num1, num2){
//     return num1-num2;
// }

// function calculator(num1, num2, operator){
//     return operator(num1, num2);
// }


// var resultAdd = calculator(8,5,add);
// var resultMultiply = calculator(8,5,multiply);
// var resultSubstract = calculator(8,5,substract);
// var resultMinus = calculator(8,5,minus);

// console.log(resultAdd);
// console.log(resultMultiply);
// console.log(resultSubstract);
// console.log(resultMinus);

// 174. How to Play Sounds on a Website


////   definition : 
//     declare var Audio: {
//     new(src?: string): HTMLAudioElement;
// };

// var numberOfDrums = document.querySelectorAll(".drum");
// var audio = new Audio("sounds/tom-1.mp3");


// for (let i = 0; i < numberOfDrums.length; i++) {
//         numberOfDrums[i].addEventListener("click",function() {            
//              audio.play();
//              this.style.color = "white"  // change the color of the button we press  
//        });
// }

// 176. A deep Understanding of JavaScript Objects

// function HouseKeeper(yearsOfExperience, name, cleaningRepertoire){
//     this.yearsOfExperience = yearsOfExperience;
//     this.name = name;
//     this.cleaningRepertoire = cleaningRepertoire;
// }

// var houseKeeper1 = new HouseKeeper(10,"alex", ["baie", "bucatarie", "dormitor"]);

// console.log(houseKeeper1.name);


// 177. How to Use Switch Statements in Javascript

// var nuberOfDrumButtons = document.querySelectorAll(".drum");

// for(var i=0; i<nuberOfDrumButtons.length; i++)
// {
//     nuberOfDrumButtons[i].addEventListener("click", function(){

//         var letter =  this.innerHTML;

//         switch (letter) {
//             case "w":
//                 var tom1 = new Audio("sounds/tom-1.mp3");
//                 tom1.play();
//                 break;

//             case "a":
//                 var tom2 = new Audio("sounds/tom-2.mp3");
//                 tom2.play();
//                 break;

//             case "s":
//                 var tom3 = new Audio("sounds/tom-3.mp3");
//                 tom3.play();
//                 break;

//             case "d":
//                 var tom4 = new Audio("sounds/tom-4.mp3");
//                 tom4.play();
//                 break;

//             case "j":
//                 var snare = new Audio("sounds/snare.mp3");
//                 snare.play();
//                 break;

//             case "k":
//                 var crash = new Audio("sounds/crash.mp3");
//                 crash.play();
//                 break;  

//             case "l":
//                 var kick = new Audio("sounds/kick-bass.mp3");
//                 kick.play();
//                 break;

//             default:
//                 console.log("asa ceva");
//                 break;
//         }
//     })
// }


// 178. Objects, their Methods and the Dot Notation

// function HouseKeeper(yearsOfExperience, name, cleaningRepertoire){
//     this.yearsOfExperience = yearsOfExperience;
//     this.name = name;
//     this.cleaningRepertoire = cleaningRepertoire;
//     this.Clean =  function() {
//         alert("Salut!");
//     }
// }

// var HouseKeeper_new = new HouseKeeper().Clean();


// 179. Using Keyboard Event Listeners to Check for Key Presses

// var nuberOfDrumButtons = document.querySelectorAll(".drum");


// for(var i=0; i<nuberOfDrumButtons.length; i++)
// {
//     nuberOfDrumButtons[i].addEventListener("click", function(){

//         var letter =  this.innerHTML;

//         switch (letter) {
//             case "w":
//                 var tom1 = new Audio("sounds/tom-1.mp3");
//                 tom1.play();
//                 break;

//             case "a":
//                 var tom2 = new Audio("sounds/tom-2.mp3");
//                 tom2.play();
//                 break;

//             case "s":
//                 var tom3 = new Audio("sounds/tom-3.mp3");
//                 tom3.play();
//                 break;

//             case "d":
//                 var tom4 = new Audio("sounds/tom-4.mp3");
//                 tom4.play();
//                 break;

//             case "j":
//                 var snare = new Audio("sounds/snare.mp3");
//                 snare.play();
//                 break;

//             case "k":
//                 var crash = new Audio("sounds/crash.mp3");
//                 crash.play();
//                 break;  

//             case "l":
//                 var kick = new Audio("sounds/kick-bass.mp3");
//                 kick.play();
//                 break;

//             default:
//                 console.log("asa ceva");
//                 break;
//         }
//     })
// }

// exemple Cristi


// ---> CheckBox <---
// var kkk = document.getElementById("cbxTest");

// kkk.addEventListener("change", function() {
//    debugger;
//    if(kkk.checked == true)
//    {
//     var kick = new Audio("sounds/kick-bass.mp3");
//     kick.play();
//    }
//    else 
//    {
//     var crash = new Audio("sounds/crash.mp3");
//     crash.play();
//    }
// })



// document.addEventListener("keypress", function(event){
//     console.log(event);
//     // alert("Key was pressed.")
// })


// ---> radio <---

// Varianta corecta
// var nrOfCar = document.querySelectorAll(".car");

// for (var i = 0; i < nrOfCar.length; i++) {
    
//     nrOfCar[i].addEventListener("click",function() {  
//         console.log(event);
//         // debugger;          
//             if(this.value == "1")
//             {
//                 var audio = new Audio("sounds/tom-1.mp3");
//                 audio.play();    
//             }
//             else if(this.value == "2")
//             {
//                 var audio = new Audio("sounds/tom-2.mp3");
//                 audio.play();  
//             }
//             else 
//             {
//                 var audio = new Audio("sounds/tom-3.mp3");
//                 audio.play(); 
//             }
//        });
// }


// Varianta incorecta 

// var kkk = document.getElementById("masina1");


// kkk.addEventListener("change", function() {
//    //debugger;
//    if(kkk.value == "1")
//     {
//         var kick = new Audio("sounds/tom-1.mp3");
//         kick.play();
//     }
//    else 
//     {
//         var crash = new Audio("sounds/tom-2.mp3");
//         crash.play();
//     }
// })


// var kkk = document.getElementsByName("masini");

// for(var i = 0; i<=kkk.length; i++)
// {
//     debugger;
//     kkk[i].addEventListener("click", function(event){
//         if(event.value = "1")
//         {
//             var kick = new Audio("sounds/tom-1.mp3");
//             kick.play();
//         }
//         else if(event.value =="2")
//         {
//             var kick = new Audio("sounds/tom-2.mp3");
//             kick.play();
//         }
//         else 
//         {
//             var kick = new Audio("sounds/tom-3.mp3");
//             kick.play();
//         }
//     })
// }


// 180. Using Keyboard Event Listeners to Check for Key Presses

// mouse click
var pressClick = document.querySelectorAll(".drum");

for(var i = 0; i< pressClick.length;i++)
{
    pressClick[i].addEventListener("click", drums);
}

// keybord press
document.addEventListener("keydown", drums);


// function
function drums(event) {
    switch (event.key || this.innerHTML) {
       case "w":
           var tom1 = new Audio("sounds/tom-1.mp3");
           tom1.play();
           break;
            
       case "a":
           var tom2 = new Audio("sounds/tom-2.mp3");
           tom2.play();
           break;
            
       case "s":
           var tom3 = new Audio("sounds/tom-3.mp3");
           tom3.play();
           break;
            
       case "d":
           var tom4 = new Audio("sounds/tom-4.mp3");
           tom4.play();
           break;
            
       case "j":
           var snare = new Audio("sounds/snare.mp3");
           snare.play();
           break;
            
       case "k":
           var crash = new Audio("sounds/crash.mp3");
           crash.play();
           break;  
            
       case "l":
           var kick = new Audio("sounds/kick-bass.mp3");
           kick.play();
           break;
            
       default:
           console.log("Something");
           break;
    }
}


// 181. Understanding Callbacks and How to Respond to 

// document.addEventListener("keypress", respondToKey(event));
// document.addEventListener("keypress", respondToKey);

// function respondToKey(event){
//     console.log("Key press.");
// }

