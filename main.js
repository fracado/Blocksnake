var bkgmusic = $("#bkgmusic")[0];
    bkgmusic.load();

const canvas = document.getElementById("game-canvas");
const context = canvas.getContext('2d');

var world = new Canvas(700, 700);

function startGame() {
  bkgmusic.play();
  $('.overlay').hide();
  $('#game-canvas').show();
  world.moveRight();
}

function reloadGame() {
  document.location.reload(true);
}

function renderWorld(world) {
  var snake = world.snake;
  var food = world.food;
  var totalSnake = world.totalSnake;

  context.clearRect(0, 0, world.width, world.height);
  context.fillStyle = "#002463";
  context.fillRect(food.x, food.y, food.width, food.height);
  fillSnake();
}

function fillSnake() {
  context.fillStyle = "#4169E1";
  world.totalSnake.forEach(function (snake) {
    context.fillRect(snake.x, snake.y, snake.width, snake.height);
  });
}

setInterval(function () {
  world.tick();
}, 2000 / world.difficulty);

requestAnimationFrame(function gameLoop() {
  renderWorld(world);
  world.isSnakeCollidingWithFood();
  world.isCollidingWithSelf();
  world.isSnakeCollidingWithWall();
  requestAnimationFrame(gameLoop);
});

// SET KEY DIRECTIONS
//function changeDirection(keycode){      
  window.addEventListener("keydown", keyCode);
  function keyCode(e){
  //document.onkeydown = function(event) {
    //keyCode = window.event.keyCode; 
        
    switch(e.keyCode) {

        case 13:
         startGame();
          break;

        case 27:
          reloadGame();
          break;
                
        case 37: 
          if (world.totalSnake[world.totalSnake.length-1].direction != 'right') {
            // window.event.preventDefault();  //to prevent any conflicting action for this key
            world.leftArrow();
            world.totalSnake[world.totalSnake.length-1].direction = 'left';
          } 
          break;
        
        case 39:
          if (world.totalSnake[world.totalSnake.length-1].direction != 'left') {
            // window.event.preventDefault();  //to prevent any conflicting action for this key
            world.rightArrow();
            world.totalSnake[world.totalSnake.length-1].direction = 'right';
          }
          break;
        
        case 38:
          if (world.totalSnake[world.totalSnake.length-1].direction != 'down') {
            // window.event.preventDefault();  //to prevent any conflicting action for this key
            world.upArrow();
            world.totalSnake[world.totalSnake.length-1].direction = 'up';
          }
          break;
        
        case 40:
          if (world.totalSnake[world.totalSnake.length-1].direction != 'up') {
            // window.event.preventDefault();  //to prevent any conflicting action for this key
            world.downArrow();
            world.totalSnake[world.totalSnake.length-1].direction = 'down';
          }
          break;
      }
   }
//}

/*
document.addEventListener('keydown', function (e) {
  e.preventDefault();
  var keyInput = e.keyCode;
  if (keyInput === 39 && world.totalSnake[world.totalSnake.length-1].direction != 'left') {
    console.log('right key pressed');
    world.rightArrow();
    console.log(world.totalSnake[world.totalSnake.length-1].direction);
  }
  if (keyInput === 37 && world.totalSnake[world.totalSnake.length-1].direction != 'right') {
    console.log('left key pressed');
    world.leftArrow();
    console.log(world.totalSnake[world.totalSnake.length-1].direction);
  }
  if (keyInput === 38 && world.totalSnake[world.totalSnake.length-1].direction != 'down') {
    console.log('up key pressed');
    world.upArrow();
    console.log(world.totalSnake[world.totalSnake.length-1].direction);
  }
  if (keyInput === 40 && world.totalSnake[world.totalSnake.length-1].direction != 'up') {
    console.log('down key pressed');
    world.downArrow();
    console.log(world.totalSnake[world.totalSnake.length-1].direction);
  }
});

document.onkeydown = function(event) {
if (event.keyCode === 13) {
  startGame();
}

$('#start-button').on('click', function () {
  startGame();
});


else if (event.keyCode === 27) {
  reloadGame();
}
}

/*
$('#reset-button').on('click', function () {
  reloadGame();
});
*/

