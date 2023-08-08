// Keep it simple , 
// -------


// Game Container
function GameContainer() {
    // element
    this.createGameContainer = function () {
        const gameContainer = document.createElement('divToPToPrintTo');
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
        // 
        gameContainer = document.querySelector('#Game-Container-One')
        // 
        const playerElement = document.createElement('divToPToPrintTo');
        // 
        gameContainer.appendChild(playerElement);
        // 
        playerElement.classList.add('Player');
        playerElement.id = 'Player-One';
        playerElement.style.background = 'limegreen';
        playerElement.style.height = '50px';
        playerElement.style.width = '50px';
        playerElement.style.position = 'absolute';
        playerElement.style.left = '50%';
        playerElement.style.top = '50%';
        playerElement.style.margin = 'auto'
        this.positionX = (gameContainer.clientWidth / 2)
        this.positionY = (gameContainer.clientHeight / 2)
        return playerElement;
    }


}

Player.prototype.removePlayer = function (player, container) {
    container.removeChild(player);
}



Player.prototype.move = function () {
    const player = this;
    const playerElement = document.querySelector('.Player#Player-One')
    const gameContainer = document.querySelector('.Game-Container#Game-Container-One')
    const containerWidth = gameContainer.clientWidth;
    const containerHeight = gameContainer.clientHeight;
    const playerElementWidth = playerElement.clientWidth;
    const playerElementHeight = playerElement.clientHeight;
    const movementUnit = parseInt('10px');

    return {
        left: function () {
            player.positionX -= movementUnit;
            if (player.positionX < 0) {
                player.positionX = 0;
            }
            else {
                playerElement.style.left = player.positionX + 'px';
            }
        },
        // --------- check docs for this part : tricky 
        right: function () {
            // console.log(containerWidth);
            player.positionX += movementUnit;
            // check if player is still "before" right border
            if (player.positionX < (containerWidth - (playerElementWidth + movementUnit))) {
                playerElement.style.left = player.positionX + 'px';
            }
            // check if player exceeds right border 
            // must factor in the movement unit
            else if ((player.positionX - movementUnit) >= (containerWidth - (playerElementWidth + movementUnit))) {
                // If the small box exceeds the right boundary of the container, adjust its position to be just inside the boundary.
                player.positionX = Math.floor(containerWidth - playerElementWidth);
                playerElement.style.left = player.positionX + 'px';
            }
        },
        // ------------- 
        up: function () {
            player.positionY -= movementUnit;
            // stop condition
            if (player.positionY <= 0) {
                player.positionY = 0
            }
            // go condition
            else {
                playerElement.style.top = player.positionY + 'px'
            }
        },
        down: function () {
            // --move
            player.positionY += movementUnit;
            // if player Y is greater than ( container height - player height )
            // you have to think about the player going _out_ of the container, that is why we subtract the player height and movement unit
            if (
                (player.positionY >= (containerHeight - movementUnit - playerElementHeight)
                )
            )
            // move player Y position to 
            {
                player.positionY = (containerHeight - playerElementHeight)
                playerElement.style.top = player.positionY + 'px'
            }


            // --else if : player Y is 
            else if ((player.positionY - movementUnit) < containerHeight) {
                playerElement.style.top = player.positionY + 'px';
            }

            else {
                return console.log('check code');
            }
        },

        default: function () {
            playerElement.style.left = player.positionX;
            playerElement.style.top = player.positionY;
        }
    }


}



Player.prototype.handleMovement = function () {
    const player = this;
    const movement = player.move()
    const gameContainer = document.querySelector('.Game-Container#Game-Container-One')
    window.addEventListener('keydown', function (event) {
        switch (event.key) {
            case 'ArrowLeft':
                movement.left();
                break;
            case 'ArrowRight':
                movement.right();
                break;
            case 'ArrowUp':
                movement.up();
                break;
            case 'ArrowDown':
                movement.down();
                break;
            default:
                console.log('No movement');
                console.log(gameContainer.clientWidth);
        }
    }
    );
}



const player = new Player();
const playerElement = player.createPlayer(activeGameContainer);
player.handleMovement();


// In CSS, moving right is considered positive, while moving left is considered negative.

// Similarly, moving down is considered positive, while moving up is considered negative
