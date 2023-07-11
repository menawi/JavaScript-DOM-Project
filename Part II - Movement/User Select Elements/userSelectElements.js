// Don't understand :
// 1. bind
// 2. I don't see how the movement function is specific only to the selected item


class Element {
    constructor(name) {
        this.name = name;
        this.element = document.createElement('div');
        this.element.textContent = this.name;
        this.x = 0;
        this.y = 0;
        this.isSelected = false;
        this.element.addEventListener('click', this.toggleSelection.bind(this));
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
        this.element.style.transform = `translate(${this.x}px, ${this.y}px)`;
    }

    toggleSelection() {
        this.isSelected = !this.isSelected;
        if (this.isSelected) {
            this.element.classList.add('selected');
        } else {
            this.element.classList.remove('selected');
        }
    }
}

// Create instances of the elements
const element1 = new Element("Element 1");

// Append elements to the DOM
element1.create();

// Move elements non-interactively
element1.move(100, 50);

// User movement controls
function handleUserMovement(event) {
    const key = event.key;
    switch (key) {
        case "ArrowUp":
            element1.move(0, -10);
            break;
        // Handle other movement keys if needed
        // 👉 You can write the code here !
    }
}

// Register DOM events
document.addEventListener('keydown', handleUserMovement);