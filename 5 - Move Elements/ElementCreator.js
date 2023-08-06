// Keep it simple , 
// -------


// Game Container
function GameContainer() {
    // element
    this.createGameContainer = function () {
        const gameContainer = document.createElement('div');
        // ---
        gameContainer.classList.add('Game-Container');
        gameContainer.id = 'Game-Container-One';
        gameContainer.style.background = 'DarkSlateBlue';
        gameContainer.style.width = '50%'
        gameContainer.style.height = '75%'
        gameContainer.style.top = '0';
        gameContainer.style.bottom = '0';
        gameContainer.style.left = '0';
        gameContainer.style.right = '0';
        gameContainer.style.position = 'fixed'
        gameContainer.style.margin = 'auto'
        // ---
        document.body.appendChild(gameContainer);
        return gameContainer;
    };

    this.removeGameContainer =
        function (gameContainer) {
            gameContainer = document.querySelector('.Game-Container#Game-Container-One')
            document.body.removeChild(gameContainer);
        }


}

// Add these functions to the Gameloop function 
const gameContainer = new GameContainer();
const activeGameContainer = gameContainer.createGameContainer();
// gameContainer.removeGameContainer();
// --- //



// Player 
function Player() {
    this.createPlayer = function (gameContainer) {
        gameContainer = document.querySelector('#Game-Container-One')
        const playerElement = document.createElement('div');
        gameContainer.appendChild(playerElement);
        playerElement.classList.add('Player');
        playerElement.id = 'Player-One';
        playerElement.style.background = 'limegreen';
        playerElement.style.height = '50px';
        playerElement.style.width = '50px';
        playerElement.style.position = 'absolute';
        playerElement.style.left = '50%';
        playerElement.style.top = '75%';
        playerElement.style.margin = 'auto'

        return playerElement;

    }


}

Player.prototype.removePlayer = function (player, container) {
    container.removeChild(player);
}



// -------------- Bugged Code to fix ----------------
// [checkpoint::08-06-2023]
// Bug: You are trying to access the up, down, left, right functions from the move **object**, but you are not returning the object from the move function.
// Fix: Return the object from the move function.
// See "Corrected Object" in files

Player.prototype.handlePlayerMovement = function () {
    const player = this;
    window.addEventListener('keydown', function (event) {
        switch (event.key) {
            case 'ArrowRight':
                player.move.right();
                break;
            case 'ArrowLeft':
                player.move.left();
                break
            case 'ArrowUp':
                player.move.up();
                break;
            case 'ArrowDown':
                player.move.down();
                break;
            default:
                console.log('No movement');
                break;

        }
    });
}


Player.prototype.move = function () {
    const player = this;
    const playerElement = document.querySelector('.Player#Player-One');

    return {
        left: function () {
            playerElement.style.left = parseInt(playerElement.style.left) - 10 + 'px';
        },
        right: function () {
            playerElement.style.left = parseInt(playerElement.style.left) + 10 + 'px';
        },
        up: function () {
            playerElement.style.top = parseInt(playerElement.style.top) - 10 + 'px';
        },
        down: function () {
            playerElement.style.top = parseInt(playerElement.style.top) + 10 + 'px';
        }
    }
}

const player = new Player(activeGameContainer)
const activePlayer = player.createPlayer()
const playerMovement = player.handlePlayerMovement();
// const deadPlayer = player.removePlayer(activePlayer, activeGameContainer);