// constructor
function GameState() {
  this.world = new World();
}

GameState.prototype.start = function() {
  this.world.start();
}