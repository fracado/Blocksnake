
// CREATE VARIABLES
var cellSize = 60;  // set amount of pixels for size
var snake = [];
snake[0] = {
  x: canvas.width/2,
  y: canvas.height/2
 };
var snakeSize = 5;
var direction;
var food;

var score = 0;


function bodySnake(x,y) {
  //single square for snake body
  ctx.fillStyle = 'green';
  ctx.fillRect(x*snakeSize, y*snakeSize, snakeSize, snakeSize);
  //border of square
  ctx.strokeStyle = 'darkgreen';
  ctx.strokeRect(x*snakeSize, y*snakeSize, snakeSize, snakeSize);
}

/*
function bodyFood(x,y) {
  ctx.fillStyle = 'yellow';
  ctx.fillRect(x*snakeSize, y*snakeSize, snakeSize, snakeSize);
  ctx.strokeStyle = 'red';
  ctx.strokeRect(x*snakeSize+1, y*snakeSize+1, snakeSize-2, snakeSize-2);
}
*/

function drawSnake() {
  paint()
    // creating the snake and pushing coordinates to the array
    //function createSnake() {
    // for (var i = snakeSize; i > 0; i--) {
    //  k = i * cellSize;
    //  snake.push({x: k, y:0});
    //  snake.push({x: i, y:0});
    // }
    //}

  direction = "right"; // initial direction of snake
        //for (var i = 0; i < snakeSize; i++) {
        //  ctx.fillStyle = "rgb(" + Math.random()*256 + "," + Math.random()*256 + "," + Math.random()*256 + ")";
        //  ctx.fillRect(snake[i].x,snake[i].y, cellSize, cellSize);
        //  ctx.strokeStyle = "black";
        //  ctx.strokeRect(snake[i].x,snake[i].y, cellSize, cellSize);
        //snake.length = 5; // how many cells the snake occupies
  for (var i = snakeSize; i>=0 ; i--) {
  snake.push({x:i, y:0});
      }


      // MAKE SNAKE MOVE BY INCREASING/DECREASING X/Y
  var snakeX = snake[0].x; //getting coordinates of the head of snake
  var snakeY = snake[0].y;
      
  if (direction == "right") {
      snakeX++;
  } else if (direction == "left") {
      snakeX--; 
  } else if (direction == "up") {
      snakeY--;
  } else if (direction == "down") {
      snakeY++;}
  
    var tail = snake.pop();
    tail.x = snakeX;
    tail.y = snakeY;
      // PUTS BACK TAIL AS FIRST CELL ???
      snake.unshift(tail);
}
      
      
function drawFood() {
//  bodyFood(food.x,food.y);
food = {
  //Generate random numbers.
  x: Math.floor((Math.random() * 30) + 1),
  y: Math.floor((Math.random() * 30) + 1)
}

//Look at the position of the snake's body.
for (var i=0; i>snake.length; i++) {
  var snakeX = snake[i].x;
  var snakeY = snake[i].y;
  
   if (food.x===snakeX || food.y === snakeY || food.y === snakeY && food.x===snakeX) {
      food.x = Math.floor((Math.random() * 30) + 1);
      food.y = Math.floor((Math.random() * 30) + 1);
  }
}
 // MAKE SNAKE EAT FOOD AND GROW
 if(snakeX == food.x && snakeY == food.y) {
  snake[snakeSize] = {x: snakeX, y: snakeY};
   // INCREASE SCORE
   score+=10;        
   drawFood();
     } else {
   // POPS OUT LAST CELL ???
   var tail = snake.pop();
   tail.x = snakeX;
   tail.y = snakeY;
     }
   // SNAKE CAN NOW EAT FOOD
   // PUTS BACK TAIL AS FIRST CELL ???
   snake.unshift(tail);

  for(var i =0; i<snake.length; i++) {
    bodySnake(snake[i].x, snake[i].y)
  }
};

      
// function drawScore() {
//   ctx.fillStyle = "white";
//   ctx.font = "bold 250% monospace";
//   ctx.fillText("SCORE: " + score,cellSize,2*cellSize);
// }

      // var btn = document.getElementById('btn');
      // btn.addEventListener("click", function(){ drawModule.init();});
      // // DISABLE BUTTON ???
      // btn.setAttribute('disabled', true);
      

      






