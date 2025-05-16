var randomNumber1 = Math.floor(Math.random() * 6) + 1;
var randomNumber2 = Math.floor(Math.random() * 6) + 1;

function test() {
    function randomImage1() {
        var dice1 = "dice" + randomNumber1;
        document.querySelector(".img1").setAttribute("src", "images/" + dice1 + ".png");
    }

    function randomImage2() {
        var dice2 = "dice" + randomNumber2;
        document.querySelector(".img2").setAttribute("src", "images/" + dice2 + ".png");
    }
    randomImage1();
    randomImage2();
}

if (randomNumber1 > randomNumber2) {
    document.querySelector("h1").innerHTML = "Player 1 Wins!";
} else if(randomNumber1 < randomNumber2) {
    document.querySelector("h1").innerHTML = "Player 2 Wins!";
} else {
    document.querySelector("h1").innerHTML = "Draw!";
}

test();