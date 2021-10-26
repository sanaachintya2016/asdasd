var db;
var form,game,player;
var gameState = 0;
var playerCount = 0;
function preload(){


}
function setup(){
createCanvas(1000,600)
db = firebase.database();
game = new Game();
game.getState();

}

function draw(){
   
game.start();

}



