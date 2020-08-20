var buttonColours = ["red", "blue", "green", "yellow"];

var userClickedPattern = [];

var randomChosenColour ;

var gamePattern = [];

var level = 0;
var count = 0;

$(document).keydown(startGame);


function startGame(){

    nextSequence();
    userSound();
}


function nextSequence(){    

    $("h1").text("Level " + level);
    level++;

    var randomNumber = Math.floor(Math.random() * 4);
    randomChosenColour = buttonColours[randomNumber];

    $("#" + randomChosenColour).css({opacity: 0}).animate({opacity:1}, 300); 

    switch (randomChosenColour) {
        case "green":
                var audio = new Audio("sounds/green.mp3");
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
        case "blue":
                var audio = new Audio("sounds/blue.mp3");
                audio.play(); 
            break;
        default:
            console.log("Da deci nu");
            break;
    }

    gamePattern.push(randomChosenColour);
    
    console.log(gamePattern);
}

var test = nextSequence();

function userSound(){
    
    $(".btn").click(function (e) { 
            var userChosenColour =  $(e.currentTarget).attr('id');
            animatePress(userChosenColour);

            switch (userChosenColour) {
                case "green":
                        var audio = new Audio("sounds/green.mp3");
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
                case "blue":
                        var audio = new Audio("sounds/blue.mp3");
                        audio.play(); 
                    break;
            }
            userClickedPattern.push(userChosenColour);  
            debugger;
            console.log(userClickedPattern);  

            for(i=0; i< userClickedPattern.length; i++){
                if(userClickedPattern[i] != test[i])
                var audio = new Audio("sounds/wrong.mp3");
                audio.play(); 
            }
    });     

}
    


function animatePress(currentColoour){
    $("#" + currentColoour ).addClass("pressed");
    setTimeout(() => {
        $("#" + currentColoour ).removeClass("pressed");
    }, 100);
}







