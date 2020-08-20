var gamePattern = [];

var buttonColours = ["red", "blue", "green", "yellow"];

var randomChosenColour = buttonColours[nextSequence()];

gamePattern.push(randomChosenColour);

function nextSequence(){
    var randomNumber = Math.floor(Math.random() * 4); 
    return randomNumber;
}
$("#"+randomChosenColour).css({opacity : 0}).animate({opacity: 1}, 300);




