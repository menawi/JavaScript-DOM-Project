// GOAL : Draw Shapes function

// 1. Provide options for the user to select different shapes such as rectangles, circles, and triangles.
// 2. When the user selects a shape, it should appear on the page


// Inspiration used in the code structure: 
// https://www.theodinproject.com/lessons/node-path-javascript-objects-and-object-constructors
// https://dmitripavlutin.com/gentle-explanation-of-this-in-javascript/#2-function-invocation


// -------- CODE -------- //
function Shape(shapeClass) {
    this.createShape = function () {
        const shape = document.body.appendChild(document.createElement('div'));
        shape.classList.add(shapeClass);
        return { newShape: shape };
    };

    this.styleShape = function () {
        let unstyledShape = this.createShape().newShape;
        const styledShape = function (color, height, width) { unstyledShape.style.background = color; unstyledShape.style.height = height; unstyledShape.style.width = width; }
        return { styledShape: styledShape };
    };
}

const greenSq = new Shape('SQUARE');
greenSq.createShape().newShape;
greenSq.styleShape().styledShape('red', '100px', '100px');

//  DOCUMENTATION //

// This code creates a Shape constructor, which takes a shapeClass argument, and returns an object with two methods: createShape() and styleShape(), which are used to create and style a div element.

    // 1. The Shape constructor has two methods:
        // 1. createShape() and
        // 2. styleShape().
    // 2. The createShape() method
        // 1. creates a div element, appends it to the body,
        // 2. and gives it a class of shapeClass.
    // 3. The styleShape() method
        // 1. takes three arguments: color, height, and width,
        // 2. then uses a closure function "styledShape" to set the background color, height, and width of the shapeClass div.

// Skill recap :
    // 1. understand parameters
    // 2. constructor function 👉  https://www.theodinproject.com/lessons/node-path-javascript-objects-and-object-constructors
    // 3. function as an object to access
    // 4. `this' variable 👉  https://dmitripavlutin.com/gentle-explanation-of-this-in-javascript/#2-function-invocation
    // 5. anonymous function (automatic run)
    // 6. return statement
    // 7. closure 👉  https://www.w3schools.com/js/js_function_closures.asp


// Questions
    // 1. Not sure why, but I returned an Object that contained an object called "newShape" and assigned it the result of the createShape function
    // 2. I did the same for the styleShape function , and also created a function within the styleShape function, passing parameters into that subfunction instead of the main function


