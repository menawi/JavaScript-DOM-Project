// Draw Shapes: Provide options for the user to select different shapes such as rectangles, circles, and triangles. When the user selects a shape, they should be able to click and drag on the canvas to draw the shape.

/*
  This code creates a shape element and styles it.
  The shape element is created by using the createShape function,
  which takes in a shape and style parameter. The shape parameter
  is a string that specifies the type of shape to create.
  The style parameter is an object that contains the style
  properties of the shape element. The style object contains
  the style method, which takes in the width, height, and
  background color of the shape element.
  The style method returns the style object, which is then
  returned by the createShape function.
*/

function createShape(shape, style) {
    return {
        shape: {
            // Create the shape element
            shape: function () {
                if (typeof shape !== 'string') {
                    throw new Error('shape must be a string');
                }

                shapeElement = document.createElement('div');
                shapeElement.classList.add('${shape}');
                document.body.appendChild(shapeElement);
                return shapeElement;
            }
        },

        style: {
            // Style the shape element
            style: function (w, h, bg) {
                if (typeof w !== 'number' || typeof h !== 'number') {
                    throw new Error('width and height must be numbers');
                }

                if (typeof bg !== 'string') {
                    throw new Error('bg must be a string');
                }

                shapeElement = this.shape();
                shapeElement.style.width = w;
                shapeElement.style.height = h;
                shapeElement.style.backgroundColor = bg;
                return style;
            }

        }
    }
}

const GREEN_SQUARES = []
const greenSq = createShape('square', { width: '100px', height: '100px', background: 'green' })

