var table ;
var tableImage ;
var player1, player2, player1Image, player2Image, ball, ballImage ;
var midLine, upBoundary, downBoundary, right, left;
var turn1, turn2 ;
var score1, score2;
var goal1, goal2;
function preload (){
 tableImage = loadImage("image/Table.png")
}
function setup() {
  createCanvas(displayWidth , displayHeight);
  table = createSprite(displayWidth/2, displayHeight/2 - 75, 200, 200);
  table.addImage (tableImage)
  table.scale = 4;
  player1 = createSprite(displayWidth/2 - 300, displayHeight/2 - 65 , 50, 50)
  player1.shapeColor = "red"
  player2 = createSprite(displayWidth/2 + 300, displayHeight/2 - 65, 50, 50)
  player2.shapeColor = "green"
  ball = createSprite(displayWidth/2 - 50, displayHeight/2 - 65, 50, 50)
  ball.shapeColor = "yellow"
  midLine = createSprite(displayWidth/2, displayHeight/2 - 60 , 15, 500)
  midLine.visible = false;
  upBoundary = createSprite(displayWidth/2 , displayHeight/2 - 320  , 1050, 15)
  upBoundary.visible = false;
  downBoundary = createSprite(displayWidth/2 , displayHeight/2 + 173  , 1050, 15)
  downBoundary.visible = false;
  right = createSprite(displayWidth/2 - 525, displayHeight/2 - 60  , 15, 500)
  right.visible = false;
  left = createSprite(displayWidth/2 + 525, displayHeight/2 - 60 , 15, 500)
  left.visible = false;
  goal1 = createSprite(displayWidth/2 - 500, displayHeight/2 - 70 , 15, 200)
  goal1.shapeColor = "white"
  goal2 = createSprite(displayWidth/2 + 500, displayHeight/2 - 70 , 15, 200)
  goal2.shapeColor = "white"
  turn1 = false ;
  turn2 = false ;
  score1 = 00;
  score2 = 00;
}

function draw() {
  background("green");
 
 
  if (ball.x < displayWidth/2){
    turn1 = true ;
    turn2 = false ;
  }
  else if (ball.x > displayWidth/2){
    turn1 = false ;
    turn2 = true ;
  } 
  if (turn1){
    player1.x = mouseX;
    player1.y = mouseY;
  }
  else if (turn2){
   player2.x = mouseX;
    player2.y = mouseY;
  }
  if (keyDown ("space")){
    ball.velocityX = -10;
    ball.velocityY = +5 ;
  }
  
  
  ball.bounceOff (right);
  ball.bounceOff (left);
  ball.bounceOff (upBoundary);
  ball.bounceOff (downBoundary);
  ball.bounceOff (player2);
  ball.bounceOff (player1);
  player2.collide (midLine);
  player1.collide (midLine);
  
  
  if(ball.x < displayWidth/2 - 525 || ball.x > displayWidth/2 + 525 ||
   ball.y < displayHeight/2 - 320 || ball.y > displayHeight/2 + 173 ){
  ball.x = displayWidth/2 - 50
  ball.y = displayHeight/2 - 65
  }
  if(player1.x < displayWidth/2 - 525 || player1.x > displayWidth/2 ||
    player1.y < displayHeight/2 - 320 || player1.y > displayHeight/2 + 173 ){
      player1.y = displayHeight/2 - 65; 
      player1.x = displayWidth/2 - 300 ;
      }
  if(player2.x > displayWidth/2 + 525 || player2.x < displayWidth/2 ||
    player2.y < displayHeight/2 - 320 || player2.y > displayHeight/2 + 173 ){
        player2.y = displayHeight/2 - 65; 
        player2.x = displayWidth/2 + 300 ;
          }
  if (ball.collide (goal1)){
    score2 = score2 + 1 ;
    ball.x = displayWidth/2 - 50;
    ball.y = displayHeight/2 - 65 ;
    ball.velocityX = -10;
    ball.velocityY = +5 ;
  }
  if (ball.collide (goal2)){
    score1 = score1 + 1 ;
    ball.x = displayWidth/2 - 50;
    ball.y = displayHeight/2 - 65 ;
    ball.velocityX = +10;
    ball.velocityY = -5 ;
  }

   //text ("score" + score1, displayWidth/2 - 400, displayHeight/2 - 300);       
  drawSprites(); 
  textSize (32)
  fill ("white") 
  text ("score  " + score1, displayWidth/2 - 430, displayHeight/2 - 280);
  text ("score  " + score2, displayWidth/2 + 350, displayHeight/2 - 280); 
}
