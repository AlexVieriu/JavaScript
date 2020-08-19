var gamePattern = [randomChosenColour];

var buttonColours = ["red", "blue", "green", "yellow"];

var randomChosenColour = buttonColours[nextSequence()];

function nextSequence(){
    var randomNumber = Math.floor(Math.random() * 4);
    return randomNumber;
}

$("#" + randomChosenColour).css({opacity: 0}).animate({opacity:1}, 300);

function sound (){
    for(var i = 0; i< buttonColours.length; i++){
        var audio = new Audio();
        switch (randomChosenColour) {
            case "green":
                    audio.play("sounds/green.mp3"); 
                break;
            case "red":
                    audio.play("sounds/red.mp3"); 
                break;
            case "yellow":
                    audio.play("sounds/yellow.mp3"); 
                break;
            case "blue":
                    audio.play("sounds/blue.mp3"); 
                break;
            default:
                console.log("Da deci nu");
                break;
        }
    }
}

sound();




