function Enemy() {
  this.enemies = [];
  this.appendEnemy = function (parent) {
    const enemyElement = document.createElement("div");
    parent.appendChild(enemyElement);
    enemyElement.classList.add("Enemy");
    enemyElement.style.background = "red";
    enemyElement.style.height = "25px";
    enemyElement.style.width = "25px";
    enemyElement.style.position = "absolute";
    enemyElement.style.left = "0";
    enemyElement.style.top = "0";
    this.enemies.push(enemyElement);
    return enemyElement;
  };
}

Enemy.prototype.moveEnemy = function () {
  const enemy = this;
  const enemies = enemy.enemies;
  const movementUnit = parseInt("60px");

  enemy.changeDirection = function (enemyElement) {
    const randomDirection = Math.floor(Math.random() * 4);
    const randomTime = Math.floor(Math.random() * 1000) + 3000; // Not less than 3 seconds

    setTimeout(() => {
      this.moveEnemyItem(enemyElement, randomDirection, randomTime);
    }, 50000 / 60); // Move every 1/60th of a second
  };

  enemy.moveEnemyItem = function (enemyElement, direction, remainingTime) {
    const currentPosition = {
      left: parseInt(enemyElement.style.left),
      top: parseInt(enemyElement.style.top),
    };

    const movementTime = Math.min(remainingTime, 1000 / 60); // Move at most 1/60th of a second
    const distance = (movementTime / 1000) * movementUnit;

    switch (direction) {
      case 0: // Right
        currentPosition.left += distance;
        break;
      case 1: // Left
        currentPosition.left -= distance;
        break;
      case 2: // Down
        currentPosition.top += distance;
        break;
      case 3: // Up
        currentPosition.top -= distance;
        break;
    }

    this.checkBoundaries(enemyElement, currentPosition);

    enemyElement.style.left = currentPosition.left + "px";
    enemyElement.style.top = currentPosition.top + "px";

    remainingTime -= movementTime;

    if (remainingTime > 0) {
      this.moveEnemyItem(enemyElement, direction, remainingTime);
    } else {
      this.changeDirection(enemyElement);
    }
  };

  enemy.checkBoundaries = function (enemyElement, currentPosition) {
    if (currentPosition.left > boundaryRight) {
      currentPosition.left = boundaryRight;
    } else if (currentPosition.left < boundaryLeft) {
      currentPosition.left = boundaryLeft;
    } else if (currentPosition.top > boundaryBottom) {
      currentPosition.top = boundaryBottom;
    } else if (currentPosition.top < boundaryTop) {
      currentPosition.top = boundaryTop;
    }
  };

  const gameContainer = document.querySelector(
    ".Game-Container#Game-Container-One"
  );
  const containerWidth = gameContainer.clientWidth;
  const containerHeight = gameContainer.clientHeight;
  const enemyElementWidth = enemies[0].clientWidth;
  const enemyElementHeight = enemies[0].clientHeight;
  const boundaryRight = containerWidth - (enemyElementWidth + movementUnit);
  const boundaryBottom = containerHeight - (enemyElementHeight + movementUnit);
  const boundaryLeft = 0;
  const boundaryTop = 0;

  enemies.forEach((enemy) => {
    this.changeDirection(enemy);
  });
};

const enemy = new Enemy();
const enemyElement = enemy.appendEnemy(activeGameContainer);
enemy.moveEnemy();
