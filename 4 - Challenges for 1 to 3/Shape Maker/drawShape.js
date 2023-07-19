// Draw Shapes: Provide options for the user to select different shapes such as rectangles, circles, and triangles. When the user selects a shape, they should be able to click and drag on the canvas to draw the shape.


function createShape(shape, style) {
    if (typeof shape !== 'string') {
        throw new Error('shape must be a string');
    }

    const shapeElement = document.createElement('div');
    shapeElement.classList.add(shape); // Use backticks for template literals
    document.body.appendChild(shapeElement);

    if (typeof style !== 'object' || style === null) {
        throw new Error('style must be an object');
    }

    if (typeof style.width !== 'string' || typeof style.height !== 'string' || typeof style.background !== 'string') {
        throw new Error('width, height, and background in style must be strings');
    }

    shapeElement.style.width = style.width;
    shapeElement.style.height = style.height;
    shapeElement.style.backgroundColor = style.background;

    return shapeElement;
}

const GREEN_SQUARES = [];
const greenSq = createShape('square', { width: '100px', height: '100px', background: 'green' });
GREEN_SQUARES.push(greenSq);

// future features \\
// - [ ] user dialog modal to input desired shape & style
// - [ ] 
