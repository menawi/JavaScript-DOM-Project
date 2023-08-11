// Keep it simple ,
// -------

// Game Container
function GameContainer() {
  // element
  this.createGameContainer = function () {
    const gameContainer = document.createElement("div");
    // ---
    gameContainer.classList.add("Game-Container");
    gameContainer.id = "Game-Container-One";
    gameContainer.style.background = "DarkSlateBlue";
    gameContainer.style.width = "50%";
    gameContainer.style.height = "75%";
    gameContainer.style.top = "0";
    gameContainer.style.bottom = "0";
    gameContainer.style.left = "0";
    gameContainer.style.right = "0";
    gameContainer.style.position = "fixed";
    gameContainer.style.margin = "auto";
    // ---
    document.body.appendChild(gameContainer);
    return gameContainer;
  };

  this.removeGameContainer = function (gameContainer) {
    gameContainer = document.querySelector(
      ".Game-Container#Game-Container-One"
    );
    document.body.removeChild(gameContainer);
  };
}

// Add these functions to the Gameloop function
const gameContainer = new GameContainer();
const activeGameContainer = gameContainer.createGameContainer();
// gameContainer.removeGameContainer();
// --- //

// Player
function Player() {
  this.createPlayer = function (gameContainer) {
    //
    gameContainer = document.querySelector("#Game-Container-One");
    //
    const playerElement = document.createElement("div");
    //
    gameContainer.appendChild(playerElement);
    //
    playerElement.classList.add("Player");
    playerElement.id = "Player-One";
    playerElement.style.background = "limegreen";
    playerElement.style.height = "50px";
    playerElement.style.width = "50px";
    playerElement.style.position = "absolute";
    // shouldn't we replace style left and right with gameContainer/2 ?
    playerElement.style.left = "50%";
    playerElement.style.top = "50%";
    //
    playerElement.style.margin = "auto";
    this.positionX = gameContainer.clientWidth / 2;
    this.positionY = gameContainer.clientHeight / 2;
    return playerElement;
  };
}

Player.prototype.removePlayer = function (player, container) {
  container.removeChild(player);
};

Player.prototype.move = function () {
  const player = this;
  const playerElement = document.querySelector(".Player#Player-One");
  const gameContainer = document.querySelector(
    ".Game-Container#Game-Container-One"
  );
  const containerWidth = gameContainer.clientWidth;
  const containerHeight = gameContainer.clientHeight;
  const playerElementWidth = playerElement.clientWidth;
  const playerElementHeight = playerElement.clientHeight;
  const movementUnit = parseInt("10px");

  return {
    // challenging part requires breakdown
    left: function () {
      player.positionX -= movementUnit;
      if (player.positionX < 0) {
        player.positionX = 0;
      } else {
        console.log("no issues here boss");
      }
      playerElement.style.left = player.positionX + "px";
    },
    // --------- check docs for this part : tricky
    right: function () {
      // console.log(containerWidth);
      player.positionX += movementUnit;
      // check if player is still "before" right border
      if (
        player.positionX <
        containerWidth - (playerElementWidth + movementUnit)
      ) {
        playerElement.style.left = player.positionX + "px";
      }
      // check if player exceeds right border
      // must factor in the movement unit : is being constantly added so you must consistently remove it
      else if (
        player.positionX >=
        containerWidth - (playerElementWidth + movementUnit)
      ) {
        // If the small box exceeds the right boundary of the container, adjust its position to be just inside the boundary.
        player.positionX = containerWidth - playerElementWidth;
        playerElement.style.left = player.positionX + "px";
      }
    },
    // -------------
    up: function () {
      player.positionY -= movementUnit;
      // stop condition
      if (player.positionY <= 0) {
        player.positionY = 0;
      }
      // go condition
      else {
        console.log("no issues here boss");
      }
      playerElement.style.top = player.positionY + "px";
    },
    down: function () {
      player.positionY += movementUnit;
      if (
        // below the bottom Y
        player.positionY >=
        containerHeight - (movementUnit + playerElementHeight)
      ) {
        player.positionY = containerHeight - playerElementHeight;
        playerElement.style.top = player.positionY + "px";
      } else if (
        // above the bottom Y
        player.positionY < containerHeight
      ) {
        playerElement.style.top = player.positionY + "px";
      } else {
        return console.log("no issues here boss");
      }
    },

    default: function () {
      playerElement.style.left = player.positionX;
      playerElement.style.top = player.positionY;
    },
  };
};

Player.prototype.handleMovement = function () {
  const player = this;
  const movement = player.move();
  const gameContainer = document.querySelector(
    ".Game-Container#Game-Container-One"
  );
  document.addEventListener("keydown", function (event) {
    switch (event.key) {
      case "ArrowLeft":
        movement.left();
        break;
      case "ArrowRight":
        movement.right();
        break;
      case "ArrowUp":
        movement.up();
        break;
      case "ArrowDown":
        movement.down();
        break;
      default:
        console.log("No movement");
        console.log(gameContainer.clientWidth);
    }
  });
};

const player = new Player();
const playerElement = player.createPlayer(activeGameContainer);
//
player.handleMovement();

//  -------------- Enemy

function Enemy() {
  this.createEnemy = function (gameContainer) {
    const enemyElement = document.createElement("div");
    gameContainer.appendChild(enemyElement);
    enemyElement.classList.add("Enemy");
    enemyElement.style.background = "red";
    enemyElement.style.height = "50px";
    enemyElement.style.width = "50px";
    enemyElement.style.position = "absolute";
    enemyElement.style.left = "0";
    enemyElement.style.top = "0";
    enemyElement.style.margin = "auto";
    this.positionX = 0;
    this.positionY = 0;
    return enemyElement;
  };

  this.randomizePosition = function () {
    const enemy = this;
    const enemyElement = document.querySelector(".Enemy");
    const gameContainer = document.querySelector(
      ".Game-Container#Game-Container-One"
    );
    const containerWidth = gameContainer.clientWidth;
    const containerHeight = gameContainer.clientHeight;
    const enemyElementWidth = enemyElement.clientWidth;
    const enemyElementHeight = enemyElement.clientHeight;

    // randomize position
    enemy.positionX = Math.floor(Math.random() * containerWidth);
    enemy.positionY = Math.floor(Math.random() * containerHeight);
    // check if enemy is still "before" right border
    if (enemy.positionX < containerWidth - enemyElementWidth) {
      enemyElement.style.left = enemy.positionX + "px";
    }
    // check if enemy exceeds right border
    // must factor in the movement unit : is being constantly added so you must consistently remove it
    else if (enemy.positionX >= containerWidth - enemyElementWidth) {
      // If the small box exceeds the right boundary of the container, adjust its position to be just inside the boundary.
      enemy.positionX = containerWidth - enemyElementWidth;
      enemyElement.style.left = enemy.positionX + "px";
    }
    // check if enemy is still "before" bottom border
    if (enemy.positionY < containerHeight - enemyElementHeight) {
      enemyElement.style.top = enemy.positionY + "px";
    }
    // check if enemy exceeds bottom border
    // must factor in the movement unit : is being constantly added so you must consistently remove it
    else if (enemy.positionY >= containerHeight - enemyElementHeight) {
      // If the small box exceeds the right boundary of the container, adjust its position to be just inside the boundary.
      enemy.positionY = containerHeight - enemyElementHeight;
      enemyElement.style.top = enemy.positionY + "px";
    }
  };
}

Enemy.prototype.moveEnemy = function () {
  const enemy = this;
  const enemyElement = document.querySelector(".Enemy");
  const gameContainer = document.querySelector(
    ".Game-Container#Game-Container-One"
  );
  const containerWidth = gameContainer.clientWidth;
  const containerHeight = gameContainer.clientHeight;
  const enemyElementWidth = enemyElement.clientWidth;
  const enemyElementHeight = enemyElement.clientHeight;
  const movementUnit = parseInt("10px");

  enemy.enemyMovement = function () {
    enemy.positionX += movementUnit + "px";
    // left
    if (enemy.positionX < 0) {
      enemy.style.left = 0;
    }
    enemyElement.style.left = enemy.positionX + "px";
    // right
    if (enemy.positionX > containerWidth - enemyElementWidth) {
      enemy.positionX = containerWidth - enemyElementWidth;
      enemyElement.style.left = enemy.positionX + "px";
    }
    // up
    if (enemy.positionY < 0) {
      enemy.positionY = 0;
      enemyElement.style.top = 0 + "px";
    } else if (enemy.positionY > containerHeight - enemyElementHeight) {
      enemy.positionY = containerHeight - enemyElementHeight;
      enemyElement.style.top = enemy.positionY;
    } else {
      return 0;
    }
    setTimeout(function () {
      enemy.moveEnemy();
    }, 1000);
  };
};

const newEnemy = new Enemy();
const appendEnemy = newEnemy.createEnemy(activeGameContainer);
newEnemy.moveEnemy();
// setTimeout(() => {
//   setInterval(() => {
//     newEnemy.moveEnemy(enemy1);
//   }, 2000);
// }, 1000);

// setTimeout(() => {
//   setInterval(() => {
//     newEnemy.randomizePosition();
//   }, 2000);
// }, 1000);

// function addNumbers() {
//   let result = 2 + 3;
//   console.log(result);
//   setTimeout(addNumbers, 1000);
// }

// console.log(addNumbers());
