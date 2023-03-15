let obstacles;
let ceilingObstacles;
let randint;
let lost;
let next;
let score = 0;
let gifLoadImage;
let screen = 0;
let speed = 5;


function preload(){
  gifLoadImage = loadImage("p1.gif");
  endScreenImage = loadImage("f1.gif");
  tryAgainImage = loadImage("h1.gif");
  backgroundImage = loadImage("backgroundImage.png")
  jumpSound = loadSound("jump.wav");
  gameOverSound = loadSound("lose.wav");
  defaultImg = loadImage("dog1.png");
  jumpImg = loadImage("dog2.png");
}

function setup() {
  createCanvas(600, 400);
  resetSketch()
  background(backgroundImage);
  fill('blue')
  textSize(32);

}

function keyPressed() {
  if (key == ' ') {
    player.jump();
    jumpSound.play();
    if (lost) {
      resetSketch();
    }
    if (screen == 2) {
      text(score, 425, 240)
      image(tryAgainImage, 0, 0)
    }
  }
}

function resetSketch() {
  score = 0
  console.log("Game starting")
  lost = false;
  obstacles = []
  ceilingObstacles = []
  otherCeilings = []
  next = 0;
  player = new Player();
  new Obstacle();
  new ceilingObstacle();
  randint = int(random(35, width/5));
  loop();
}

function draw() {
	if(screen == 0){
      startScreen()
    }else if(screen == 1){
  	  gameOn()
    }
}

function mousePressed(){
	if(screen==0){
  	  screen=1
    }else if(screen==2){
  	  screen=0
  }
}

function startScreen() {
  image(gifLoadImage,0,0);
}

function gameOn() {
  background(backgroundImage);
  text(score, 20, 50)
  screen = 1
  next += 1
  if (next == randint) {
    obstacles.push(new Obstacle())
    score += 10
    speed += 0.01
    ceilingObstacles.push(new ceilingObstacle())
    next = 0
    randint = int(random(35, width/5))
  }
  for (let o of obstacles) {
    if (o.x < 0) {
      if (obstacles.length > 4) {
        obstacles.shift()
      }
    }
    o.move(speed);
    o.show();
    if (player.hits(o)) {
      console.log("Game Over!")
      obstacles.length = 0
      ceilingObstacles.length = 0
      endScreen();
      screen = 2;
      console.log(screen)
      lost = true;
      gameOverSound.play();
      noLoop();
    }
  }
  
  for (let c of ceilingObstacles) {
    if (c.x < 0) {
      if (ceilingObstacles.length > 4) {
        ceilingObstacles.shift()
      }
    }
    c.move(speed);
    c.show();
    if (player.hits(c)) {
      endScreen();
      console.log("Game Over!")
      obstacles.length = 0
      ceilingObstacles.length = 0
      gameOverSound.play()
      screen = 2
      lost = true;
      console.log(screen)
      noLoop();
    }
  }

  player.show();
  player.move();
}

function endScreen() {
  screen = 2
  background(endScreenImage, 0, 0);
  text(score, 425, 240)
  fill('blue')
  player.hide()
  
}