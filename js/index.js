var game = {};
game.entity1 = { width: 10, height: 15 };

function setUpGame() {
  // Not quite sure what to put here yet
}

function startGame() {
  // Set up event handlers, so that the player can do stuff
  
  
  // Start the game loop.
  // Call gameloop() every ?? milliseconds, where ?? is the second argument.
  setInterval(gameloop, 30);
}

function gameloop() {
  updateEntities();
  redrawCanvas();
}

function updateEnemies() {
  
}

function updatePlayer() {
  
}

function updateEntities() {
  updateEnemies();
  updatePlayer();
}

function eraseCanvas() {
  
}

function redrawCanvas() {
  eraseCanvas();
  
  // draw all entities
  
}

$(document).ready(function() {
  setUpGame();
  startGame();
});