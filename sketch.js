var player,bananaImage,obstacleImage,foodgroup,obstaclegroup,background,score;

function preload(){
  backImage=loadImage("jungle.jpg")
  player_running = loadAnimation ("Monkey_01.png","Monkey_02.png","Monkey_03.png","Monkey_04.png","Monkey_05.png","Monkey_06.png","Monkey_07.png","Monkey_08.png","Monkey_09.png","Monkey_10.png");
  
bananaImage=loadImage("Banana.png");
  obstacleImage=loadImage("stone.png");
}

function setup(){
  createCanvas(800,600);
  background=createSprite(200,200,10,10);
  ground=createSprite(200,200,200,200);
}

function draw(){
  background("jungle.jpg",30,30);
  switch(score){
    case 10: player.scale=0.12;
      break;
    case 20: player.scale=0.14;
      break;
    case 30: player.scale=0.16;
      break;
    case 40: player.scale=0.18;
    default:break;
  }
}