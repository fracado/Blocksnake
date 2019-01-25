class Snake {
  constructor(x, y, width, height, direction) {
    this.x = x;
    this.y = y;
    this.width = width;
    this.height = height;
    this.direction = direction;
  }
}

class Food {
  constructor(x, y, width, height) {
    this.x = x;
    this.y = y;
    this.width = width;
    this.height = height;
  }
}

var maxLength = 2;

// CANVAS CLASS
class Canvas {
  constructor(width, height) {
    this.width = width;
    this.height = height;
    this.snake = new Snake(300, 300, 20, 20, null);
    this.newFood();
    this.totalSnake = [this.snake];
    this.score = 0;
    this.highscore = 0;
    this.level = 1;
    this.difficulty = 10;
  }

  newFood() {
    this.food = new Food(
      Math.round(Math.round(Math.random() * 680)/20) * 20,
      Math.round(Math.round(Math.random() * 680)/20) * 20,
      20,
      20
    )
  }

  isSnakeCollidingWithFood(food) {
	  if (this.food.x === this.totalSnake[0].x && this.food.y === this.totalSnake[0].y) {
	    this.newFood();
	    maxLength++;
	    this.increaseScore();
	    this.changeLevel();
	    return true;
	  } else {
	    return false;
	  }
	}

  isCollidingWithSelf(x,y,totalSnake) {
    for (var i = 1; i < this.totalSnake.length; i++) {
      var snakeBody = this.totalSnake;
      var snakeHead = this.totalSnake[0];
      if (snakeHead.x === snakeBody[i].x && snakeHead.y === snakeBody[i].y) {
        this.gameOver();
      }
    }
  }

  isSnakeCollidingWithWall() {
    if (this.totalSnake[0].x >= 700 || this.totalSnake[0].x <= -20 || this.totalSnake[0].y >= 700 || this.totalSnake[0].y <= -20) {
      this.gameOver();
      return true;
    } else {
      return false;
    }
  }
  // DIRECTIONS ON CANVAS
  rightArrow() {
    this.moveRight();
  }
  leftArrow() {
    this.moveLeft();
  }
  upArrow() {
    this.moveUp();
  }
  downArrow() {
    this.moveDown();
  }

  tick() {
    var direction = this.totalSnake[0].direction;
    if (direction === 'right') {
      this.moveRight();
    }
    if (direction === 'left') {
      this.moveLeft();
    }
    if (direction === 'up') {
      this.moveUp();
    }
    if (direction === 'down') {
      this.moveDown();
    }
  }

  removeTail() {
	  if (this.totalSnake.length >= maxLength) {
	    return this.totalSnake.pop();
    }
  }

  //SNAKE MOVEMENT
  moveRight() {
	  var xValue = this.totalSnake[0].x + 20;
	  var yValue = this.totalSnake[0].y;
	  this.totalSnake.unshift(new Snake(xValue, yValue, 20, 20, 'right'));
	  this.removeTail();
  }
  moveLeft() {
	  var xValue = this.totalSnake[0].x - 20;
	  var yValue = this.totalSnake[0].y;
	  this.totalSnake.unshift(new Snake(xValue, yValue, 20, 20, 'left'));
	  this.removeTail();
  }
  moveUp() {
	  var xValue = this.totalSnake[0].x;
	  var yValue = this.totalSnake[0].y - 20;
	  this.totalSnake.unshift(new Snake(xValue, yValue, 20, 20, 'up'));
	  this.removeTail();
  }
  moveDown() {
	  var xValue = this.totalSnake[0].x;
	  var yValue = this.totalSnake[0].y + 20;
	  this.totalSnake.unshift(new Snake(xValue, yValue, 20, 20, 'down'));
	  this.removeTail();
	}

  //GAME FUNCTIONALITY
  increaseScore() {
	  this.score += 10;
    $('#user-score').html('<p>Score: ' + this.score + '</p>');
    if (this.score > localStorage.getItem("highscore")) 
      {localStorage.setItem("highscore", this.score);}
	}

  changeLevel() {
	  if (this.score % 100 === 0) {
	    this.level++;
      $('#user-level').html('<p>level: ' + this.level + '</p>');
      world.difficulty*20;
    }
  }

  gameOver() {
	  $('.game-over-overlay').show();
    $('#game-canvas').hide();
    //var highscore = document.getElementById("highscore");
    if (this.score > localStorage.getItem("highscore")) {
      $('#highscore-display').html('<h2>New Highscore: ' + localStorage.getItem("highscore") + '</h2>');
    }
	};
};

var highscore = document.getElementById("highscore");
    $('#highscore').html('Highscore: ' + localStorage.getItem("highscore"));