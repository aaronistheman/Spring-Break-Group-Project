// Constructor
function Player() {
  // Position
  this.x = 80;
  this.y = 100;
  
  // Dimensions of the player
  this.width = 20;
  this.height = 30;
}

Player.prototype.update = function(pressedKeys) {
  if (pressedKeys[KEY.UP]) {
    console.log("Player is moving up");
  }
}

Player.prototype.draw = function(ctx) {
  ctx.fillStyle = "#FF0000";
  ctx.fillRect(this.x, this.y, this.width, this.height);
}

