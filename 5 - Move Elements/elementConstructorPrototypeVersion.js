function ElementConstructor(type, _class, appendParent, style) {
    this.type = type;
    this._class = _class;
    this.appendParent = appendParent;
    this.style = style;
}

ElementConstructor.prototype.createElement = function () {
    const newElement = document.createElement(this.type);
    newElement.classList.add(this._class);
    this.appendParent.appendChild(newElement);
    return newElement;
};

ElementConstructor.prototype.setElementStyle = function (element, styleOptions) {
    element.style.background = styleOptions.background;
    element.style.height = styleOptions.height;
    element.style.width = styleOptions.width;
    return element;
};

// Example usage:
// const newElement = new ElementConstructor('div', 'squares', document.body, { background: "green", height: "100px", width: "100px" });

// const createdElement = newElement.createElement();
// newElement.setElementStyle(createdElement, newElement.style);

// console.log(newElement);
