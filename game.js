

//COLLISION CHECK
function checkCollision(x,y,array) {
  for(var i=0;i<array.length;i++) {
    if(array[i].x == x && array[i].y == y) {
      return true;
      }
    } 
  return false;
} 



// SET KEY DIRECTIONS
function changeDirection(keycode){      
//document.onkeydown = function(event) {
      
  //keyCode = window.event.keyCode; 
  keyCode = event.keyCode;
      
  switch(keyCode) {
              
      case 37: 
        if (direction != 'right') {
          direction = 'left';
        } 
        break;
      
      case 39:
        if (direction != 'left') {
          direction = 'right';
        }
        break;
      
      case 38:
        if (direction != 'down') {
          direction = 'up';
        }
        break;
      
      case 40:
        if (direction != 'up') {
          direction = 'down';
        }
        break;
    }
//  }
}
/*
  // GAME OVER CONDITIONS
  if (checkCollision(snakeX, snakeY, array)) {
  //if(snakeX == -1 || snakeX == w/snakeSize || snakeX == -1 || snakeY == h/snakeSize || checkCollision(snakeX,snakeY,snake)) { //when snake reaches border
      alert("GAME OVER /n Your Score is " + score);
      init();   // restart game
      btn.removeAttribute('disabled', true);
      ctx.clearRect(0,0,canvas.width,canvas.height);
      gameloop = clearInterval(gameloop);
      return;
  } 
}
*/


    // function changeDirection(keycode) {
    //   if(keycode == 37 && direction != 'right') {
    //      direction = 'left'; }
    //   else if(keycode == 38 && direction != 'down') {
    //      direction = 'up'; }
    //   else if(keycode == 39 && direction != 'left') {
    //      direction = 'right'; }
    //   else if(keycode == 40 && direction != 'top') {
    //      direction = 'down' }
    // }


    function init() {
      paint();
      // create snake
      drawSnake();
      // create food
      drawFood();
      // create score
      scoreIs = document.getElementById("score");
      scoreIs.innerHTML = score;
            
      window.onkeydown = changeDirection;  // make snake move with keys
      // start the game
      if(typeof loop != "undefined") {
        clearInterval(loop); // check if gameloop is already running
      } else {
        loop = setInterval(drawSnake, 80); // repeatedly initiate game after 80ms
        }  
    }
    var btn = document.getElementById('btn').addEventListener("click", init);