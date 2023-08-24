// Game Container
function GameContainer() {
  // element
  this.createGameContainer = function () {
    const gameContainer = document.createElement("div");
    gameContainer.classList.add("Game-Container");
    gameContainer.id = "Game-Container-One";
    document.body.appendChild(gameContainer);
    return gameContainer;
  };
  return this;
}

// -- It works!
// main instance
const gameContainerInstance = new GameContainer();
// object instance to derive variables from
// "ports" or "bridges" over all prototypes from main instance to object instance and then to variable instance
const gameContainerObject = Object.create(gameContainerInstance);
// variable instance
// specifc states etc

console.log(createdGameContainer);

GameContainer.prototype.styleGameContainer = function () {
  const container = this.createGameContainer();
  const activeContainerStyle = {
    background: "purple",
    height: "50vh",
    width: "50vw",
    position: "fixed",
    top: "25%",
    left: "25%",
    margin: "auto",
  };
  // Explain this as if you were explaining it to a 5 year old
  this.styleContainer = function () {
    Object.keys(activeContainerStyle).forEach((key) => {
      let value = activeContainerStyle[key];
      container.style[key] = value;
    });
  };

  return this;
};

// --------------

// Player
function Player() {
  this.createPlayer = function (parentElement) {
    const playerElement = document.createElement("div");
    parentElement.appendChild(playerElement);
    playerElement.classList.add("Player");
    playerElement.id = "Player-One";
    return playerElement;
  };
  return this;
}

const playerInstance = new Player();
const playerObject = Object.create(playerInstance);
console.log(playerObject);

Player.prototype.stylePlayer = function () {
  const player = this.createPlayer();
  this.activePlayerStyles = {
    background: "limegreen",
    height: "50px",
    width: "50px",
    position: "absolute",
    left: "50%",
    top: "50%",
    margin: "auto",
  };

  this.activatePlayer = function () {
    Object.keys(this.activePlayerStyles).forEach((style) => {
      player.style[style];
    });
  };
  return this;
};

// const activePlayer = playerObject.stylePlayer().acti

function Enemy() {
  this.enemyArray = [];
  this.createEnemy = function (parentElement) {
    const enemyElement = document.createElement("div");
    parentElement.appendChild(enemyElement);
    enemyElement.style.backgroundColor = "red";
    enemyElement.style.height = "25px";
    enemyElement.style.width = "25px";
    enemyElement.style.position = "absolute";
    enemyElement.style.top = "25%";
    enemyElement.style.left = "25%";
    enemyElement.style.margin = "auto";
    return enemyElement;
  };
  return this;
}

const enemy = new Enemy();
// const activeEnemy = enemy.createEnemy(activeGameContainer);
export { GameContainer, Player, Enemy };
// export { gameContainer, player, enemy };
