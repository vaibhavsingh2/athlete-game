var car1,car2,car3,car4;
var cars;
var canvas, backgroundImage;
var hurdle1;
var gameState = 0;
var playerCount;

var database;

var form, player, game;
var allPlayers;
var track,car1img,car2img,car3img,car4img;
var xyz=0;


function preload(){
  car1img=loadImage("images/car1.png");
  car2img=loadImage("images/car2.png");
  car3img=loadImage("images/car3.png");
  car4img=loadImage("images/car4.png");
  track=loadImage("images/track.jpg");
  hurdle1img=loadImage("images/Capture.PNG");
}
function setup(){
  canvas = createCanvas(displayWidth-20,displayHeight-20);
  database = firebase.database();
  game = new Game();
  game.getState();
  game.start();
 
}


function draw(){
if(playerCount===4){
  game.update(1);

}
if(gameState===1){
clear();
game.play();
}
if(gameState===2){
  game.end();
}
}
