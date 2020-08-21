var buttonColours = ["red", "blue", "green", "yellow"];

var gamePattern = [];
var userClickedPattern = [];

$(".btn").click(function (event) { 
    var userChosenColour =  $(this).attr("id"); 
    userClickedPattern.push(userChosenColour);

    playSound(userChosenColour);
});

function nextSequence() {

    var randomNumber = Math.floor(Math.random() * 4);
    var randomChosenColour = buttonColours[randomNumber];
    gamePattern.push(randomChosenColour);
  
    $("#" + randomChosenColour).fadeIn(100).fadeOut(100).fadeIn(100);

    playSound(randomChosenColour);
}




var randomChosenColour = buttonColours[nextSequence()];

gamePattern.push(randomChosenColour);

function nextSequence(){
    var randomNumber = Math.floor(Math.random() * 4);                   
    return randomNumber;
}

$(document).keydown(function () { 
    $("#" + randomChosenColour).css({opacity : 0}).animate({opacity: 1}, 300);

    switch (randomChosenColour) {
        case "green":
            var audio = new Audio("sounds/green.mp3");
            audio.play();
            break;
        case "blue":
            var audio = new Audio("sounds/blue.mp3");
            audio.play();
            break;
        case "red":
            var audio = new Audio("sounds/red.mp3");
            audio.play();
            break;
        case "yellow":
            var audio = new Audio("sounds/yellow.mp3");
            audio.play();
            break;
    }       
});



function playSound(name){


    $(".btn").click(function (event) { 
        var userChosenColour =  $(event.currentTarget).attr("id"); 
        userClickedPattern.push(userChosenColour);
    
        switch (userChosenColour) {
            case "green":
                var audio = new Audio("sounds/green.mp3");
                audio.play();
                break;
            case "blue":
                var audio = new Audio("sounds/blue.mp3");
                audio.play();
                break;
            case "red":
                var audio = new Audio("sounds/red.mp3");
                audio.play();
                break;
            case "yellow":
                var audio = new Audio("sounds/yellow.mp3");
                audio.play();
                break;
        }
    
        console.log(userClickedPattern);
    });
}










