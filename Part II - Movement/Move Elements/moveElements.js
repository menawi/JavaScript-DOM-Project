class Element {
    constructor(name) {
        this.name = name;
        this.element = document.createElement('div');
        this.element.textContent = this.name;
        this.x = 0;
        this.y = 0;
        this.element.style.position = 'absolute'; // Set position to 'absolute'
    }

    create() {
        document.body.appendChild(this.element);
    }

    addStyle(style) {
        Object.assign(this.element.style, style);
    }

    changeStyle(property, value) {
        this.element.style[property] = value;
    }

    move(dx, dy) {
        this.x += dx;
        this.y += dy;
        this.element.style.left = `${this.x}px`;
        this.element.style.top = `${this.y}px`;
    }
}

class Style {
    constructor() {
        this.style = {}
    }

    newStyle(property, value) {
        this.style[property] = value
    }
}

const greenBox = new Element('greenBox')
greenBox.create()
const greenBackground = new Style();
greenBackground.newStyle('background', 'green')
const greenHeight = new Style();
greenHeight.newStyle('height', '300px')
const greenWidth = new Style();
greenWidth.newStyle('width', '300px')
greenBox.addStyle(greenBackground.style)
greenBox.addStyle(greenHeight.style)
greenBox.addStyle(greenWidth.style)

// console.log(greenBackground);
// console.log(greenBackground.style);


// redBox.move(100, 400)

greenBox.move(100, 100)

