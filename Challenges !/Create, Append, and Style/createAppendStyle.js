// 1. Create a new element 
// 2. Append it to the body of the document 
// 3. Create a method to add style to it , a backgroundColor and a border 

class Elements {
    constructor(name) {
        this.name = name;
        this.element = document.createElement('div');

    }

    appendElement() {
        document.body.appendChild(this.element);
    }

    addStyle(newStyle) {
        Object.assign(this.element.style, newStyle);

    }

}


class Styles {
    constructor() {
        this.style = {}
    }

    createStyle(property, value) {
        this.style[property] = value
    }
}

const greenBoxBackground = new Styles();
greenBoxBackground.createStyle('background', 'red')
const greenBoxWidth = new Styles();
greenBoxWidth.createStyle('width', '100px')
const greenBoxHeight = new Styles();
greenBoxHeight.createStyle('height', '100px')

const greenBox = new Elements('greenBoxElement');
greenBox.appendElement();
greenBox.addStyle(greenBoxBackground.style);
greenBox.addStyle(greenBoxWidth.style);
greenBox.addStyle(greenBoxHeight.style);


// SUCCESS ! 
    // Level : #look-at-source
    // Grasp : still not understand the styleObject.style

// Next Step :
    // Create a function that creates objects and assigns 3 style properties to them
    // Move on to next section