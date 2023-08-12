// function Enemy() {
//   this.createEnemy = function (gameContainer) {
//     const enemyElement = document.createElement("div");
//     gameContainer.appendChild(enemyElement);
//     enemyElement.classList.add("Enemy");
//     enemyElement.style.background = "red";
//     enemyElement.style.height = "50px";
//     enemyElement.style.width = "50px";
//     enemyElement.style.position = "absolute";
//     enemyElement.style.left = "0";
//     enemyElement.style.top = "0";
//     enemyElement.style.margin = "auto";
//     this.positionX = 0;
//     this.positionY = 0;
//     return enemyElement;
//   };

//   this.randomizePosition = function () {
//     const enemy = this;
//     const enemyElement = document.querySelector(".Enemy");
//     const gameContainer = document.querySelector(
//       ".Game-Container#Game-Container-One"
//     );
//     const containerWidth = gameContainer.clientWidth;
//     const containerHeight = gameContainer.clientHeight;
//     const enemyElementWidth = enemyElement.clientWidth;
//     const enemyElementHeight = enemyElement.clientHeight;

//     // randomize position
//     enemy.positionX = Math.floor(Math.random() * containerWidth);
//     enemy.positionY = Math.floor(Math.random() * containerHeight);
//     // check if enemy is still "before" right border
//     if (enemy.positionX < containerWidth - enemyElementWidth) {
//       enemyElement.style.left = enemy.positionX + "px";
//     }
//     // check if enemy exceeds right border
//     // must factor in the movement unit : is being constantly added so you must consistently remove it
//     else if (enemy.positionX >= containerWidth - enemyElementWidth) {
//       // If the small box exceeds the right boundary of the container, adjust its position to be just inside the boundary.
//       enemy.positionX = containerWidth - enemyElementWidth;
//       enemyElement.style.left = enemy.positionX + "px";
//     }
//     // check if enemy is still "before" bottom border
//     if (enemy.positionY < containerHeight - enemyElementHeight) {
//       enemyElement.style.top = enemy.positionY + "px";
//     }
//     // check if enemy exceeds bottom border
//     // must factor in the movement unit : is being constantly added so you must consistently remove it
//     else if (enemy.positionY >= containerHeight - enemyElementHeight) {
//       // If the small box exceeds the right boundary of the container, adjust its position to be just inside the boundary.
//       enemy.positionY = containerHeight - enemyElementHeight;
//       enemyElement.style.top = enemy.positionY + "px";
//     }
//   };
// }

// Enemy.prototype.moveEnemy = function () {
//   const enemy = this;
//   const enemyElement = document.querySelector(".Enemy");
//   const gameContainer = document.querySelector(
//     ".Game-Container#Game-Container-One"
//   );
//   const containerWidth = gameContainer.clientWidth;
//   const containerHeight = gameContainer.clientHeight;
//   const enemyElementWidth = enemyElement.clientWidth;
//   const enemyElementHeight = enemyElement.clientHeight;
//   const movementUnit = parseInt("10px");

//   enemy.enemyMovement = function () {
//     enemy.positionX += movementUnit + "px";
//     // left
//     if (enemy.positionX < 0) {
//       enemy.style.left = 0;
//     }
//     enemyElement.style.left = enemy.positionX + "px";
//     // right
//     if (enemy.positionX > containerWidth - enemyElementWidth) {
//       enemy.positionX = containerWidth - enemyElementWidth;
//       enemyElement.style.left = enemy.positionX + "px";
//     }
//     // up
//     if (enemy.positionY < 0) {
//       enemy.positionY = 0;
//       enemyElement.style.top = 0 + "px";
//     } else if (enemy.positionY > containerHeight - enemyElementHeight) {
//       enemy.positionY = containerHeight - enemyElementHeight;
//       enemyElement.style.top = enemy.positionY;
//     } else {
//       return 0;
//     }
//     setTimeout(function () {
//       enemy.moveEnemy();
//     }, 1000);
//   };
// };

// const newEnemy = new Enemy();
// const appendEnemy = newEnemy.createEnemy(activeGameContainer);
// newEnemy.moveEnemy();
