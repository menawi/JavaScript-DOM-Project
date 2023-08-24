

// FINALLY --- THIS IS WHAT I WAS LOOKING FOR !

function ElementConstructor(type, _class, appendParent, style) {
    this.type = type || 'div'; // If type is not provided, default to 'div'
    this._class = _class || ''; // If class is not provided, default to an empty string
    this.appendParent = appendParent || document.body; // If appendParent is not provided, default to document.body
    this.style = style || {}; // If style is not provided, default to an empty object

    this.createElement = function () {
        const newElement = document.createElement(this.type);
        newElement.classList.add(this._class);
        this.appendParent.appendChild(newElement);
        this.setElementStyle(newElement, this.style);
        return newElement;
    };

    this.setElementStyle = function (element, styleOptions) {
        element.style.background = styleOptions.background || '';
        element.style.height = styleOptions.height || '';
        element.style.width = styleOptions.width || '';
        return element;
    };
}

// Example usage:
const newElement = new ElementConstructor('div', 'squares', document.body, { background: "red", height: "100px", width: "100px" }).createElement();
