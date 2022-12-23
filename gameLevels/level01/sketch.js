//Final Project - Level 1 - Welcome

let player1;
let ground01, ground02, ground03, ground04, ground05, ground06, ground07, ground08, ground09, ground10;
let platform01, platform02, platform03, platform04, platform05, platform06, platform07, platform08, platform09, platform10;
let coin01, coin02, coin03, coin04, coin05, coin06, coin07, coin08, coin09, coin10; 
let heart01, heart02, heart03, heart04, heart05;
let border01, border02, border03, border04;
let fire01, fire02, fire03, fire04, fire05, fire06, fire07, fire08, fire09, fire10;
let water01, water02, water03, water04, water05, water06, water07, water08, water09, water10;
let firePit01, firePit02, firePit03, firePit04, firePit05;
let waterPit01, waterPit02, waterPit03, waterPit04, waterPit05;
let powerUpSpeedUp, powerUpSpeedDown, powerUpJumpHigher, powerUpJumpLower, powerUpEnemySpeedUp, powerUpEnemySpeedDown;
let shapeColor = "black";
let ground = false;
let coins = 0, time = 10, lives = 3;
let gameOver = false;
let coinPoints = 0, timePoints = 0, bonusPoints = 0, totalPoints = 0;
let powerUpSpeedUpactive = false, powerUpSpeedDownactive = false, powerUpJumpHigheractive = false, powerUpJumpLoweractive = false, powerUpEnemySpeedUpactive = false, powerUpEnemySpeedDownactive = false;
let powerUpSpeedUptimer = 5, powerUpSpeedDowntimer = 5, powerUpJumpHighertimer = 5, powerUpJumpLowertimer = 5, powerUpEnemySpeedUptimer = 5, powerUpEnemySpeedDowntimer = 5;
let restartLevel1Button;
let level2Button;
let x = 0;
let y = 0;
let w = 0;
let h = 0;
let d = 0;
let clouds = [];

function setup() {
  createCanvas(1100, 600);
  
  for (let i = 0; i < 10; i++) {
        clouds.push(genCloud(100, 50, 10));
    }
  
  drawBorders();
  drawGround();
  drawPlatforms();
  drawPowerUps();
  drawCoins();
  //drawHealth();
  //drawFireObstacles();
  //drawWaterObstacles();

  establishPlayer();
    
  frameRate(60);
}

function establishPlayer() {
  player1 = createSprite(100, 300, 50, 50);
  player1.shapeColor = color("white");
  player1.rotationLock = true;
  player1.vel.x = 0;
  player1.vel.y = 0;
}

function spriteCollision() {
  
  playerGround();
  playerPlatforms();
  playerCoins();
  playerPowerUps();
  //playerHealth();
  //playerFireObstacles();
  //playerWaterObstacles();
  
}

function gameFunction() {
  
  world.gravity.y = 10;
  if (frameCount % 60 == 0) {
    time = time - 1;
  }

}

function gameText() {
  
  // Displays Game Level
  fill('black')
  textSize(30);
  text("Level 1 - Welcome!", width/2, height/8, width/2, height/2);
  
  // Displays Game Trackers
  fill('black')
  textSize(15);
  text("Time: " + time + " seconds" + "\nLives: " + lives + "\nCoins: " + coins, width/2, height/5, width/2, height/2);
  
}

function playerGround() {
  
  player1.collide(ground01, () => {
    ground = true;
  })
  player1.collide(ground02, () => {
    ground = true;
  })
  
}

function playerPlatforms() {
  
  player1.collide(platform01, ()=>{
    ground = true;
  })
  player1.collide(platform02, ()=>{
    ground = true;
  })
  player1.collide(platform03, ()=>{
    ground = true;
  })
  player1.collide(platform04, ()=>{
    ground = true;
  })
  player1.collide(platform05, ()=>{
    ground = true;
  })
  player1.collide(platform06, ()=>{
    ground = true;
  })
  
}

function playerCoins() {
  
  if (coin01 && player1.overlaps(coin01)) {
    coins = coins + 1;
    coin01.remove();
  }
  if (coin02 && player1.overlaps(coin02)) {
    coins = coins + 1;
    coin02.remove();
  }
  if (coin03 && player1.overlaps(coin03)) {
    coins = coins + 1;
    coin03.remove();
  }
  if (coin04 && player1.overlaps(coin04)) {
    coins = coins + 1;
    coin04.remove();
  }
  if (coin05 && player1.overlaps(coin05)) {
    coins = coins + 1;
    coin05.remove();
  }
  if (coin06 && player1.overlaps(coin06)) {
    coins = coins + 1;
    coin06.remove();
  }
  if (coin07 && player1.overlaps(coin07)) {
    coins = coins + 1;
    coin07.remove();
  }
  if (coin08 && player1.overlaps(coin08)) {
    coins = coins + 1;
    coin08.remove();
  }
  if (coin09 && player1.overlaps(coin09)) {
    coins = coins + 1;
    coin09.remove();
  }
  if (coin10 && player1.overlaps(coin10)) {
    coins = coins + 1;
    coin10.remove();
  }
  
}

function playerPowerUps() {
  
  if (powerUpSpeedUp && player1.overlaps(powerUpSpeedUp)) {
    powerUpSpeedUpactive = true;
    powerUpSpeedUp.remove();
  }
  if (powerUpSpeedDown && player1.overlaps(powerUpSpeedDown)) {
    powerUpSpeedDownactive = true;
    powerUpSpeedDown.remove();
  }
  if (powerUpJumpHigher && player1.overlaps(powerUpJumpHigher)) {
    powerUpJumpHigheractive = true;
    powerUpJumpHigher.remove();
  }
  if (powerUpJumpLower && player1.overlaps(powerUpJumpLower)) {
    powerUpJumpLoweractive = true;
    powerUpJumpLower.remove();
  }
  if (powerUpEnemySpeedUp && player1.overlaps(powerUpEnemySpeedUp)) {
    powerUpEnemySpeedUpactive = true;
    powerUpEnemySpeedUp.remove();
  }
  if (powerUpEnemySpeedDown && player1.overlaps(powerUpEnemySpeedDown)) {
    powerUpEnemySpeedDownactive = true;
    powerUpEnemySpeedDown.remove();
  }
  
}

function playerHealth() {
  
  if (heart01 && player1.overlaps(heart01)) {
    lives = lives + 1;
    heart01.remove();
  }
  
}

function playerFireObstacles() {
  // Player Hits Fire Ball
  if (fire01 && player1.overlaps(fire01)) {
    lives = lives - 1;
    fire01.remove();
  }
  
  // Player Hits Fire Pit
  if (firePit01 && player1.overlaps(firePit01)) {
    lives = 0;
    player1.remove();
  }
  
}

function playerWaterObstacles() {
  
  // Player Hits Water Ball
  if (fire01 && player1.overlaps(fire01)) {
    lives = lives - 1;
    water01.remove();
  }
  
  // Player Hits Water Pit
  if (waterPit01 && player1.overlaps(waterPit01)) {
    lives = 0;
    player1.remove();
  }
  
}

function playerMovement() {
  
  if (ground == true) {
    if (kb.pressing('ArrowLeft')) {
      if (powerUpSpeedUpactive == true) {
        player1.vel.x = -6;
      } 
      else if (powerUpSpeedDownactive == true) {
        player1.vel.x = -2;
      }
      else {
        player1.vel.x = -4
      }
    }
    else if (kb.pressing('ArrowRight')) {
        if (powerUpSpeedUpactive == true) {
        player1.vel.x = 6;
      } 
      else if (powerUpSpeedDownactive == true) {
        player1.vel.x = 2;
      }
      else {
        player1.vel.x = 4
      }
    }
    else if (kb.pressing('ArrowUp')) {
      if (powerUpJumpHigheractive == true) {
        player1.vel.y = -10;
        ground = false;
      }
      else if (powerUpJumpLoweractive == true) {
        player1.vel.y = -5;
        ground = false;
      }
      else {
        player1.vel.y = -6;
        ground = false;
      }
    }
  }
  else if (ground == false) {
    if (kb.pressing('ArrowLeft')) {
        if (powerUpSpeedUpactive == true) {
        player1.vel.x = -3;
      } 
      else if (powerUpSpeedDownactive == true) {
        player1.vel.x = -1;
      }
      else {
        player1.vel.x = -2;
      }
    }
    else if (kb.pressing('ArrowRight')) {
        if (powerUpSpeedUpactive == true) {
        player1.vel.x = 3;
      } 
      else if (powerUpSpeedDownactive == true) {
        player1.vel.x = 1;
      }
      else {
        player1.vel.x = 2
      }
    }
  }
  
}

//Determines when game is over or level is complete
function endGame() {
  
  if ((time == 0 && coins < 10) || lives == 0) {
    gameOver = true;
    gameOver1();
  }
  if (time != 0 && coins == 10) {
    levelWin();
  }
  
}

//Main Function for Final Scoring
function scoring() {
  
  coinPoints = coins * 100;
  
  //Establishes score based on time
  if (time > 96) {
    timePoints = 500;
  }
  else if (time > 72 && time <= 96) {
    timePoints = 400;
  }
  else if (time > 48 && time <= 72) {
    timePoints = 300;
  }
  else if (time > 24 && time <= 48) {
    timePoints = 200;
  }
  else if (time >= 1 && time <= 24) {
    timePoints = 100;
  }
  else if (time == 0) {
    timePoints = 0;
  }
  
  totalPoints = coinPoints + timePoints;
}

//Game Over Prompt
function gameOver1() {
  
  gameOver = true;
  frameCount = stop;
  player1.vel.x = 0;
  player1.vel.y = 0;
  
  //rect(90, 90, 400, height/2);
  
  textSize(20);
  text("Game Over!!" + "\nCoins Obtained: " + coins + " = " + coinPoints + " point(s)" + "\nTime Remaining: " + time + " seconds = " + timePoints + " point(s)" + "\n" + "\nTotal Points: " + totalPoints + " point(s)!", width/2, height/2, 400, height/2);
  
  restartLevel1Button = createButton('Restart Level');
  restartLevel1Button.position(width/2, height/(4/3));
  restartLevel1Button.mousePressed(/gameLevels/level01/index.html);
  
}

//Level Completion Prompt
function levelWin() {
  
  frameCount = stop;
  player1.vel.x = 0;
  player1.vel.y = 0;
  
  //rect(90, 90, 400, height/2);
  
  textSize(20);
  text("Level Complete!!!" + "\nCoins Obtained: " + coins + " = " + coinPoints + " point(s)" + "\nTime Remaining: " + time + " seconds = " + timePoints + " point(s)" + "\n" + "\nTotal Points: " + totalPoints + " point(s)!", width/2, height/2, 400, height/2);
  
  restartLevel1Button = createButton('Restart Level');
  restartLevel1Button.position(width/(8/7), height/(4/3));
  restartLevel1Button.mousePressed(/gameLevels/level01/index.html);
  
  level2Button = createButton('Next Level');
  level2Button.position(width/(7/8), height/(4/3));
  level2Button.mousePressed(/gameLevels/level02/index.html);
  
}

function drawGround() {
  
  ground01 = createSprite(550, 550, 1050, 50, 'static');
  ground01.shapeColor = color("brown");
  
  ground02 = createSprite(550, 500, 460, 50, 'static');
  ground02.shapeColor = color("brown");
  
}

function drawPlatforms() {
  
  platform01 = createSprite(200, 400, 120, 20, 'static');
  platform01.shapeColor = color("gray");
  
  platform02 = createSprite(650, 390, 120, 20, 'static');
  platform02.shapeColor = color("gray");
  
  platform03 = createSprite(900, 300, 120, 20, 'static');
  platform03.shapeColor = color("gray");
  
  platform04 = createSprite(1015, 350, 120, 20, 'static');
  platform04.shapeColor = color("gray");
  
  platform05 = createSprite(410, 310, 120, 20, 'static');
  platform05.shapeColor = color("gray");
  
  platform06 = createSprite(670, 240, 120, 20, 'static');
  platform06.shapeColor = color("gray");
  
}

function drawBorders() {
  
  border01 = createSprite(600, 0, 1200, 50, 'static');
  border01.shapeColor = color("gray");
  
  border02 = createSprite(0, 300, 50, 600, 'static');
  border02.shapeColor = color("gray");
  
  border03 = createSprite(600, 600, 1200, 50, 'static');
  border03.shapeColor = color("gray");
  
  border04 = createSprite(1100, 300, 50, 600, 'static');
  border04.shapeColor = color("gray");
  
}

function drawPowerUps() {
  
  powerUpSpeedUp = createSprite(400, 450, 20, 20, 'static');
  powerUpSpeedUp.shapeColor = color("purple");
  powerUpSpeedUp.rotation = 45;
  
  powerUpSpeedDown = createSprite(700, 450, 20, 20, 'static');
  powerUpSpeedDown.shapeColor = color("pink");
  powerUpSpeedDown.rotation = 45;
  
  // powerUpJumpHigher = createSprite(250, 340, 20, 20, 'static');
  // powerUpJumpHigher.shapeColor = color("purple");
  // powerUpJumpHigher.rotation = 45;
  
  // powerUpJumpLower = createSprite(250, 340, 20, 20, 'static');
  // powerUpJumpLower.shapeColor = color("pink");
  // powerUpJumpLower.rotation = 45;
  
  // powerUpEnemySpeedUp = createSprite(250, 340, 20, 20, 'static');
  // powerUpEnemySpeedUp.shapeColor = color("purple");
  // powerUpEnemySpeedUp.rotation = 45;
  
  // powerUpEnemySpeedUp = createSprite(250, 340, 20, 20, 'static');
  // powerUpEnemySpeedUp.shapeColor = color("pink");
  // powerUoEnemySpeedUp.rotation = 45;
  
}

function drawCoins() {
  
  //Draw Coins Normal
  coin01 = createSprite(230, 500, 20, 'static');
  coin01.shapeColor = color("gold");
  
  coin02 = createSprite(200, 360, 20, 'static');
  coin02.shapeColor = color("gold");
  
  coin03 = createSprite(410, 280, 20, 'static');
  coin03.shapeColor = color("gold");
  
  coin04 = createSprite(650, 350, 20, 'static');
  coin04.shapeColor = color("gold");
  
  coin05 = createSprite(900, 270, 20, 'static');
  coin05.shapeColor = color("gold");
  
  coin06 = createSprite(1020, 320, 20, 'static');
  coin06.shapeColor = color("gold");
  
  coin07 = createSprite(950, 500, 20, 'static');
  coin07.shapeColor = color("gold");
  
  coin08 = createSprite(500, 450, 20, 'static');
  coin08.shapeColor = color("gold");
  
  coin09 = createSprite(660, 210, 20, 'static');
  coin09.shapeColor = color("gold");
  
  coin10 = createSprite(150, 200, 20, 'static');
  coin10.shapeColor = color("gold");
  
}

function drawHealth() {
  heart01 = createSprite(170, 320, 20, 'static');
  heart01.shapeColor = color("red");
}

function drawFireObstacles() {
  // Draw Fire Balls
  fire01 = createSprite(200, 320, 20, 20, 'static');
  fire01.shapeColor = color("red");
  
  // Draw Fire Pits
  firePit01 = createSprite(200, 320, 20, 20, 'static');
  firePit01.shapeColor = color("red");
}

function drawWaterObstacles() {
  // Draw Water Balls
  water01 = createSprite(200, 320, 20, 20, 'static');
  water01.shapeColor = color("blue");
  
  // Draw Water Pits
  waterPit01 = createSprite(200, 320, 20, 20, 'static');
  waterPit01.shapeColor = color("blue");
}

function powerUpFunction() {
  
  // Player Speed Up
  if (powerUpSpeedUpactive == true) {
    if (frameCount % 60 == 0) {
      powerUpSpeedUptimer = powerUpSpeedUptimer - 1;
    }
  }
  // Speed Up Timer
  if (powerUpSpeedUptimer == 0) {
    powerUpSpeedUpactive = false;
    powerUpSpeedUptimer = 5;
  }
  
  // Player Speed Down
  if (powerUpSpeedDownactive == true) {
    if (frameCount % 60 == 0) {
      powerUpSpeedDowntimer = powerUpSpeedDowntimer - 1;
    }
  }
  // Speed Down Timer
  if (powerUpSpeedDowntimer == 0) {
    powerUpSpeedDownactive = false;
    powerUpSpeedDowntimer = 5;
  }
  
  // Player Jump Higher
  if (powerUpJumpHigheractive == true) {
    if (frameCount % 60 == 0) {
      powerUpJumpHighertimer = powerUpJumpHighertimer - 1;
    }
  }
  // Jump Higher Timer
  if (powerUpJumpHighertimer == 0) {
    powerUpJumpHigheractive = false;
    powerUpJumpHighertimer = 5;
  }
  
  // Player Jump Lower
  if (powerUpJumpLoweractive == true) {
    if (frameCount % 60 == 0) {
      powerUpJumpLowertimer = powerUpJumpLowertimer - 1;
    }
  }
  // Jump Lower Timer
  if (powerUpJumpLowertimer == 0) {
    powerUpJumpLoweractive = false;
    powerUpJumpLowertimer = 5;
  }
  
  // Enemy Speed Up
  if (powerUpEnemySpeedUpactive == true) {
    if (frameCount % 60 == 0) {
      powerUpEnemySpeedUptimer = powerUpEnemySpeedUptimer - 1;
    }
  }
  // Enemy Speed Up Timer
  if (powerUpEnemySpeedUptimer == 0) {
    powerUpEnemySpeedUpactive = false;
    powerUpEnemySpeedUptimer = 5;
  }
  
  // Enemy Speed Down
  if (powerUpEnemySpeedDownactive == true) {
    if (frameCount % 60 == 0) {
      powerUpEnemySpeedDowntimer = powerUpSpeedDowntimer - 1;
    }
  }
  // Enemy Speed Down Timer
  if (powerUpEnemySpeedDowntimer == 0) {
    powerUpEnemySpeedDownactive = false;
    powerUpEnemySpeedDowntimer = 5;
  }
  
}

function drawBackground() {
  //Draw Sky
  fill(50, 255, 255);
  rect(25, 25, 1050, 550);
  
  //Draw Sun
  fill("orange");
  noStroke();
  ellipse(- frameCount + 1200, 100, 100);
  
  //Draw Clouds
  fill('white')
  for (let cloud of clouds) {
        drawCloud(cloud);
    }
}

function genCloud(w, h, num) {
    let cloud = {
        points: [],
        size: 30,
        x: random(0, width),
        y: random(0, height),
        w: w
    }
    for (let i = 0; i < num; i++) {
        cloud.points.push({ x: random(-w / 2, w / 2), y: random(-h / 2, h / 2) })
    }
    return cloud;
}
function drawCloud(cloud, time) {
    noStroke();
    for (let i = 0; i < cloud.points.length; i++) {
        let point = cloud.points[i];
        circle(point.x + cloud.x, point.y + cloud.y, cloud.size);

    }
    cloud.x++;
    if (cloud.x > width + cloud.w / 2 + cloud.size / 2) {
        cloud.x = -cloud.w / 2 - cloud.size / 2;
        cloud.y = random(0, height);
    }
}

function draw() {
  background(200);
  
  camera.on();
  
  camera.x = player1.x;
  camera.y = 300;
  
  drawBackground();
  drawSprites();
  gameFunction();
  spriteCollision();
  playerMovement();
  powerUpFunction();
  scoring();
  
  camera.off();
  
  gameText();
  endGame();
}