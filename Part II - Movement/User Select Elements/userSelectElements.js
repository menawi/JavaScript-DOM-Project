class Element {
    constructor(name) {
        this.name = name;
        this.element = document.createElement('div');
        this.element.textContent = this.name;
        this.x = 0;
        this.y = 0;
        this.isSelected = false;
        this.element.addEventListener('click', () => this.toggleSelection());
    }

    create() {
        document.body.appendChild(this.element);
    }

    addStyle(style) {
        Object.assign(this.element.style, style);
    }


    toggleSelection() {
        this.isSelected = !this.isSelected;
        if (this.isSelected) {
            this.element.classList.add('selected');
            console.log(this.element.classList.value);
        } else {
            this.element.classList.remove('selected');
            console.log(this.element.classList.value);
        }
    }
}


function createBox(name, style) {
    const box = new Element(name);
    box.create();
    box.addStyle(style);
    return box;
}

const greenBox = createBox('green box', { 'background': 'green', 'width': '100px', 'height': '100px' })

// I want to add user control ONLY if the element is selected
