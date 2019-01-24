var bkgmusic = $("#bkgmusic")[0];
    bkgmusic.load();

const canvas = document.getElementById("game-canvas");
const context = canvas.getContext('2d');

var world = new Canvas(400, 400);

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
}, 600);

requestAnimationFrame(function gameLoop() {
  renderWorld(world);
  world.isSnakeCollidingWithFood();
  world.isCollidingWithSelf();
  world.isSnakeCollidingWithWall();
  requestAnimationFrame(gameLoop);
});

document.addEventListener('keydown', function (e) {
  e.preventDefault();
  var keyInput = e.keyCode;
  if (keyInput === 39) {
    world.rightArrow();
  }
  if (keyInput === 37) {
    world.leftArrow();
  }
  if (keyInput === 38) {
    world.upArrow();
  }
  if (keyInput === 40) {
    world.downArrow();
  }
});

$('#start-button').on('click', function () {
  startGame();
});

$('#reset-button').on('click', function () {
  reloadGame();
});


