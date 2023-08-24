
// class ElementFactory {
//     createElement(htmlTag) {
//         return document.createElement(htmlTag);
//     }
// }

// class ScreenPrinter {
//     printToScreen(htmlElement, parentElement) {
//         parentElement.appendChild(htmlElement);
//     }
// }


// class StyleManager {
//     addStyle(htmlElement, style) {
//         htmlElement.style = style;
//     }
// }


// const elementFactory = new ElementFactory();
// const screenPrinter = new ScreenPrinter();
// const styleManager = new StyleManager();

// const container = elementFactory.createElement('div');
// screenPrinter.printToScreen(container, document.body);

// const redDiv = elementFactory.createElement('div');
// styleManager.addStyle(redDiv, 'background-color: red; width: 100px; height: 100px; margin: 10px;');
// screenPrinter.printToScreen(redDiv, container);

// const blueDiv = elementFactory.createElement('div');
// styleManager.addStyle(blueDiv, 'background-color: blue; width: 100px; height: 100px; margin: 10px;');
// screenPrinter.printToScreen(blueDiv, container);

// console.log(container);
// console.log(redDiv);

// ---------- ES5 
function ElementFactory() { }

ElementFactory.prototype.createElement = function (htmlTag) {
    return document.createElement(htmlTag);
};

function ScreenPrinter() { }

ScreenPrinter.prototype.printToScreen = function (htmlElement, parentElement) {
    parentElement.appendChild(htmlElement);
};

function StyleManager() { }

StyleManager.prototype.addStyle = function (htmlElement, style) {
    htmlElement.style = style;
};

const elementFactory = new ElementFactory();
const screenPrinter = new ScreenPrinter();
const styleManager = new StyleManager();

const container = elementFactory.createElement('div');
document.body.appendChild(container);

const redDiv = elementFactory.createElement('div');
styleManager.addStyle(redDiv, 'background-color: red; width: 100px; height: 100px; margin: 10px;');
screenPrinter.printToScreen(redDiv, container);

const blueDiv = elementFactory.createElement('div');
styleManager.addStyle(blueDiv, 'background-color: blue; width: 100px; height: 100px; margin: 10px;');
screenPrinter.printToScreen(blueDiv, container);

// 

window.addEventListener('load', function () {
    const link = document.createElement('link');
    link.rel = 'stylesheet';
    link.href = '/Users/omarmenawi/Desktop/JavaScript DOM Project/fromWebDevForBeginnersRepo/style.css';
    document.head.appendChild(link);
});