

/* 
result : #training-wheels
date: 07-27-2023
Lessons :
    - Adding a default || option 
    - Using `this` to refer to the internal function scope
    - 
*/
function ShapeConstructor(_element, _class, _parent, _styles) {
    this._element = _element || 'h1';
    this._class = _class || '';
    this._parent = _parent || document.body;
    this._styles = _styles || {};


    this.createShape = function () {
        const newShape = document.createElement(this._element);
        this._parent.appendChild(newShape);
        newShape.classList.add(this._class);
        this.setElementStyle(newShape, this._styles)
        return newShape;
    };


    this.setElementStyle = function (shape, styles) {
        shape.style.background = styles.background;
        shape.style.height = styles.height;
        shape.style.width = styles.width;
        return shape;
    };

}


const greenSquare = new ShapeConstructor('div', 'Squares', document.body, { background: 'red', height: '100px', width: '100px' }).createShape();

const blueRectangle = new ShapeConstructor('', 'Rectangles', '', { background: 'blue', height: '100px', width: '250px' }).createShape();


