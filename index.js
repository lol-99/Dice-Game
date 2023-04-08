//creating a random number 1
var randomNumber1 = Math.floor(Math.random() * 6) + 1; //1-6

var randomDiceImage1 = "dice" + randomNumber1 + ".png"; //variable stores the address of image which will vary with the randomwNumber1

var randomImageSource1 = "images/" + randomDiceImage1;


var image1 = document.querySelector(".img1");
image1.setAttribute("src", randomImageSource1);

//Creating a random no 2
var randomNumber2 = Math.floor(Math.random() * 6) + 1;

var randomDiceImage2 = "dice" + randomNumber2 + ".png";

var randomImageSource2 = "images/" + randomDiceImage2;

var image2 = document.querySelector(".img2");

image2.setAttribute("src", randomImageSource2);

if (randomNumber1 > randomNumber2){
  document.querySelector("h1").innerHTML = "🚩Player 1 Wins";
}
else if (randomNumber1 < randomNumber2){
  document.querySelector("h1").innerHTML = "Player 2 Wins🚩";
}
else{
  document.querySelector("h1").innerHTML = "Draw!";
}


//MAKE IT MORE UNDERSTANDABLE, GENERATE THE RANDOM NO 1 FIRST THEN SECOND
