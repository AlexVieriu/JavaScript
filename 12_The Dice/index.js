var randomNumber1;

randomNumber1 = Math.floor(Math.random() * 6 + 1);
randomNumber2 = Math.floor(Math.random() * 6 + 1);

console.log(randomNumber1);

document.querySelector(".img1").setAttribute("src","images/dice" + randomNumber1 + ".png");
document.querySelector(".img2").setAttribute("src","images/dice" + randomNumber2 + ".png");

if(randomNumber1> randomNumber2)
        document.querySelector("h1").innerHTML = '<img src="images/Flag.png"> Player 1 Wins!'
else if (randomNumber2 > randomNumber1)
        document.querySelector("h1").innerHTML = 'Player 2 Wins! <img src="images/Flag.png">'
else 
    document.querySelector("h1").innerHTML = "Draw!"