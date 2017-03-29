// Constructor
function World() {
  // in milliseconds
  this.TIME_BETWEEN_LOOPINGS = 30;
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
  
}

World.prototype.eraseCanvas = function() {
  
}

World.prototype.drawEntities = function() {
  
}

World.prototype.draw = function() {
  this.eraseCanvas();
  this.drawEntities();
}