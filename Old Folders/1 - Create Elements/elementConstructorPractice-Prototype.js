
function ShapeConstructor(el, _class, parent, styles) {
    this.el = el || 'h1';
    this._class = _class || 'Shapes'
    this.parent = parent || document.body;
    this.styles = styles || {};
}


ShapeConstructor.prototype.appendShape = function () {
    const newShape = document.createElement(this.el);
    newShape.classList.add(this._class);
    this.parent.appendChild(newShape);
    return newShape;
}


ShapeConstructor.prototype.modifyStyle = function (shape, styleOptions) {
    shape.style.background = styleOptions.background;
    shape.style.height = styleOptions.height;
    shape.style.width = styleOptions.width;
    return shape;
}


const newShape = new ShapeConstructor('p', 'squares', document.body, { background: 'red', height: '300px', width: '300px' });

const redSquare = newShape.appendShape();

newShape.modifyStyle(redSquare, newShape.styles);


const greenSquare = () => {
    const greenSquare = new ShapeConstructor('p', 'squares', document.body, { background: 'blue', height: '300px', width: '300px' });
    const appendGreenSquare = greenSquare.appendShape();
    greenSquare.modifyStyle(appendGreenSquare, { background: 'green', height: '300px', width: '300px' });
}

greenSquare();

