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

//  ------ Enemy

// Summary :
// Enemy movement logic is challenging
// Using setTimeout is still foggy
// An easier step would be to update enemy position in the container
// Random enemy movement generation will be fun , and will be a stepping stone to the next step

// ----------

function Enemy() {
  const enemyElement = document.createElement("div");
  const enemyArray = [];
  const gameContainer = document.querySelector(
    ".Game-Container#Game-Container-One"
  );
  this.appendEnemy = function () {
    enemyElement.classList.add("Enemy");
    gameContainer.appendChild(enemyElement);
    enemyElement.style.background = "red";
    enemyElement.style.height = "25px";
    enemyElement.style.width = "25px";
    enemyElement.style.position = "absolute";
    enemyElement.style.margin = "auto";
    enemyArray.push(enemyElement);
  };
}

Enemy.prototype.appear = function () {
  // need a timer
  // need to update position randomly
  const enemy = this;
  const enemyElement = document.querySelector(".Enemy");
  const enemyWidth = enemyElement.clientWidth;
  const enemyHeight = enemyElement.clientHeight;
  let enemyPosX = enemyElement.style.left;
  let enemyPosY = enemyElement.style.top;

  enemy.checkBoundaries = function () {
    // check if enemy is within boundaries of the game before update position // if out of bounds , run update position again
    // -----------------
    // Run update position
    this.updatePosition();
    // boundary left
    if (enemyPosX < 0) {
      this.updatePosition().x;
    }
    // boundary right
    else if (enemyPosX > gameContainer.clientWidth - enemyWidth) {
      this.updatePosition().x;
    } // boundary top
    else if (enemyPosY < 0) {
      this.updatePosition().y;
    }
    // boundary bottom
    else if (enemyPosY > gameContainer.clientHeight - enemyHeight) {
      this.updatePosition().y;
    }
  };

  enemy.generateRandomPosition = function () {
    const x = Math.floor(Math.random() * 100);
    const y = Math.floor(Math.random() * 100);
    return { x: x, y: y };
  };

  enemy.updatePosition = function () {
    enemyPosX = this.generateRandomPosition().x;
    enemyPosY = this.generateRandomPosition().y;
    return { x: enemyPosX, y: enemyPosY };
  };
};

const enemy = new Enemy();
const firstEnemy = enemy.appendEnemy();
firstEnemy.appear();
