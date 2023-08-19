import { GameContainer, Player, Enemy } from "./ElementCreator.js";

// const gameContainer = new GameContainer();
// const activeGameContainer = gameContainer.createGameContainer();
// const player = new Player();
// const activePlayer = player.createPlayer(activeGameContainer);
// const enemy = new Enemy();
// const activeEnemy = enemy.createEnemy(activeGameContainer);

// Player.prototype.movePlayer = function () {
//   const player = document.querySelector("#Player-One");
//   this.unit = 10;
//   this.movement = {
//     up: function () {
//       player.style.top = player.style.top - `${player.unit}px`;
//     },
//     down: function () {
//       player.style.top = player.style.top + `${player.unit}px`;
//     },
//     left: function () {
//       player.style.left = player.style.left - `${player.unit}px`;
//     },
//     right: function () {
//       player.style.left = player.style.left + `${player.unit}px`;
//     },
//   };
//   return this;
// };

// // STOP HERE ---- WORKING ON UNDERSTANDING CONSTRUCTORS AND PROTOTYPES
// // "How do you write constructor functions such that the methods passed in it are automatically available to all sub-instances of the class?

// // Player.prototype.handleMovement = function () {
// //   window.addEventListener("keydown", (event) => {
// //     switch (event.key) {
// //       case "ArrowUp":
// //         break;
// //       case "ArrowDown":
// //         break;
// //       case "ArrowLeft":
// //         break;
// //       case "ArrowRight":
// //         break;
// //     }
// //   });
// //   return this;
// // };
