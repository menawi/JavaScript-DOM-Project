// Create a class called Element
// Give it styling
// Add a "select" state 
// Add default classlist as "unselected"
// Add conditional to allow user to control it ONLY if it's classlist is registered as "selected"
// Add movement method that uses arrow keys to move box around the screen
// Add event listener to register the user selecting the element

// GREAT DEBUGGING CHANCE !

// NOTE : all bug comments are for before this code was fixed

class Elements {
    constructor(name) {
        this.name = name;
        this.element = document.createElement("div")
        this.element.textContent = this.name; // not accessing element
        this.x = 0;
        this.y = 0;
        this.element.style.position = 'absolute';
        this.isSelected = false;
        this.element.addEventListener('click', () => this.toggleElementSelection())
    }


    appendElement() {
        document.body.appendChild(this.element);
        this.styleElement({ background: 'grey' })
        this.element.style.height = '100px';
        this.element.style.width = '100px'
        this.element.style.top = `${this.y}px` //missing units
        this.element.style.left = `${this.x}px` // missing units
        this.element.style.display = 'flex';
        this.element.style.alignItems = 'center';
        this.element.style.justifyContent = 'center';

    }

    styleElement(styleValue) {
        Object.assign(this.element.style, styleValue)
    }

    toggleElementSelection() {
        // on click, change selection state = "selected"
        this.isSelected = !this.isSelected;

        if (!this.isSelected) {
            this.element.classList.add('is-selected');
            this.element.textContent = 'Selected.'
            this.styleElement({ background: 'green' }) // 

        } else {
            this.element.classList.add('NOT-selected');
            this.element.textContent = 'Not Selected'
            this.styleElement({ background: 'red' }) //
        }
    }
}


const box = new Elements("box");
box.appendElement()
const logBox = new Elements("logBox");

// [[Object.assign]]

box.styleElement(elementStyleObject, newStyleObject)

const elementStyleObject = {
    background: 'red',
    display: 'flex'
}

const newStyleObject = {
    background: 'green',
    display: 'none',
    justifyContent: 'center'
}

// 👉

const newObjectStyle = {
    background: 'green',
    display: 'none',
    justifyContent: 'center'
}

