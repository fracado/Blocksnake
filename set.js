
// CREATE SETTING
var canvas = document.getElementById("canvas");
var ctx = canvas.getContext("2d");


//Setting the canvas width and height to make it responsive
//canvas.width = Math.floor(startScreen.offsetWidth);
//canvas.height = Math.floor(startScreen.offsetHeight);

// CREATE BORDER
// ctx.strokeStyle = "black";
// ctx.strokeRect(0,0,w,h);

// CREATE FILLED RECTANGLE TO COVER CANVAS
// ctx.fillStyle = "white";
// ctx.fillRect(0,0,w,h);


// PAINT CANVAS
function paint() {
  ctx.fillStyle = "oldlace";
  ctx.fillRect(0,0,canvas.width,canvas.height);
  ctx.strokeStyle = "plum";
  ctx.strokeRect(0,0,canvas.width,canvas.height);
}

