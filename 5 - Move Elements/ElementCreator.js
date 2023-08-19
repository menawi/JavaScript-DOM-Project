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
const gameContainerInstance = new GameContainer();
const gameContainerObject = Object.create(gameContainerInstance);
const createdGameContainer = gameContainerObject.createGameContainer();

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

gameContainerInstance.styleGameContainer().styleContainer();

// GameContainer.prototype.styleGameContainer = function () {
//   // Turn this into an Object array with key/value pairs using Object.keys
//   this.containerBackground = "purple";
//   this.containerHeight = "50vh";
//   this.containerWidth = "50vw";
//   this.containerPosition = "fixed";
//   this.containerTop = "25%";
//   this.containerLeft = "25%";
//   this.margin = "auto";

//   // Turn this into a for loop that iterates through the Object array
//   const container = this.createGameContainer();
//   container.style.background = this.containerBackground;
//   container.style.height = this.containerHeight;
//   container.style.width = this.containerWidth;
//   container.style.position = this.containerPosition;
//   container.style.top = this.containerTop;
//   container.style.left = this.containerLeft;
//   container.style.margin = this.margin;

//   return this;
// };

// gameContainerInstance.styleGameContainer();

// ---------------------

// Player
function Player() {
  this.createPlayer = function (parentElement) {
    const playerElement = document.createElement("div");
    parentElement.appendChild(playerElement);
    playerElement.classList.add("Player");
    playerElement.id = "Player-One";
    playerElement.style.background = "limegreen";
    playerElement.style.height = "50px";
    playerElement.style.width = "50px";
    playerElement.style.position = "absolute";
    playerElement.style.left = "50%";
    playerElement.style.top = "50%";
    playerElement.style.margin = "auto";
    return playerElement;
  };
  return this;
}

const player = new Player();
// const activePlayer = player.createPlayer(activeGameContainer);

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
