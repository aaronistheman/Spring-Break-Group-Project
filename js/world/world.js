// Constructor
function World() {
  this.pressedKeys = [];
  
  // in milliseconds
  this.TIME_BETWEEN_LOOPINGS = 30;
}

World.prototype.start = function() {
  this.setUpGame();
  this.startLooping();
}

World.prototype.setUpGame = function() {
  // Clear any event handlers that might exist
  $(document).unbind('keydown');
  $(document).unbind('keyup');
  
  // Set event handlers for the game
  var that = this;
  $(document).keydown(function(e) {
    // Make a note that this key is being pressed
    that.pressedKeys[e.which] = true;
  });
  $(document).keyup(function(e) {
    // Remove the note saying that this key is being pressed
    that.pressedKeys[e.which] = false;
  });
}

World.prototype.startLooping = function() {
  // I have to do this hacky thing to make World.gameLoop()
  // be passed to setInterval()
  var that = this;
  setInterval(function() {
    that.gameLoop();
  },
  this.TIME_BETWEEN_LOOPINGS);
}

World.prototype.gameLoop = function() {
  this.update();
  this.draw();
}

World.prototype.update = function() {
  this.updateEntities();
}

World.prototype.updateEntities = function() {
  this.updateEnemies();
  this.updatePlayer();
}

World.prototype.updateEnemies = function() {
  
}

World.prototype.updatePlayer = function() {
  if (this.pressedKeys[KEY.UP]) {
    console.log("Player is moving up");
  }
}

World.prototype.eraseCanvas = function() {
  
}

World.prototype.drawEntities = function() {
  
}

World.prototype.draw = function() {
  this.eraseCanvas();
  this.drawEntities();
}