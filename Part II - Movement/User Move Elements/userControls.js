
// this.element.style.position = 'absolute' 👈 Superimportant ! Otherwise you can't move the element.


class Element {
    constructor(name) {
        this.name = name;
        this.element = document.createElement('div');
        this.element.textContent = this.name;
        this.x = 0;
        this.y = 0;
        this.element.style.position = 'absolute'
    }

    create() {
        document.body.appendChild(this.element);
    }

    addStyle(style) {
        Object.assign(this.element.style, style);
    }

    move(dx, dy) {
        this.x += dx;
        this.y += dy;
        this.element.style.left = `${this.x}px`
        this.element.style.top = `${this.y}px`
    }
}

// Create instances of the elements
const element1 = new Element("Element 1");


// Append elements to the DOM
element1.create();



// User movement controls
function userMovement(element) {
    document.addEventListener("keydown", function (event) {
        const key = event.key;
        switch (key) {
            case "ArrowUp":
                element.move(0, -10);
                break;
            case "ArrowDown":
                element.move(0, +10);
                break;
            case "ArrowRight":
                element.move(+10, 0);
                break;
            case "ArrowLeft":
                element.move(-10, 0);
                break;
            default: document.body.appendChild(document.createElement('div')).textContent = "Not a valid keyboard entry";

        }
    })
}

userMovement(element1)


