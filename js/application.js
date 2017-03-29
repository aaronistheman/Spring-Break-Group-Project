// constructor
function Application() {
  this.state = new GameState();
}

Application.prototype.run = function() {
  this.state.start();
}