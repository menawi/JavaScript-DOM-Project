Player.prototype.handlePlayerMovement = function (movement) {
    const player = this;
    window.addEventListener('keydown', function (event) {
        switch (event.key) {
            case 'ArrowRight':
                movement.right();
                break;
            case 'ArrowLeft':
                movement.left();
                break;
            case 'ArrowUp':
                movement.up();
                break;
            case 'ArrowDown':
                movement.down();
                break;
            default:
                console.log('No movement');
                break;
        }
    });
};

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
        },
    };
};



const player = new Player(activeGameContainer);
const activePlayer = player.createPlayer();
const playerMovement = player.move(); // Get the movement object
player.handlePlayerMovement(playerMovement);
