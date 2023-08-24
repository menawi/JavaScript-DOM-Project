import { gameContainer, player, enemy } from "./ElementCreator.js";

// active subinstances
function Game() {
  this.activeGameComponents = function () {
    const activeContainer = gameContainer.createGameContainer();
    const activePlayer = player.createPlayer(activeContainer);
    const activeEnemy = enemy.createEnemy(activeContainer);
    return { activeContainer, activePlayer, activeEnemy };
  };
  return this;
}
//

const game = new Game();
const activeGameComponents = game.activeGameComponents();

//
export { activeGameComponents };
