// Create item
// Append item to container
// Style item
// Select item
// Remove item

function createElements() {
  this.create = function (type, cls, id, par) {
    const el = document.createElement("type");
    par.appendChild(el);
    el.classList.add(cls);
    el.id = id;
    return el;
  };
}

const elementInstance = new createElements();
const redSq = elementInstance.create(
  "div",
  "Squares",
  "redSquareOne",
  document.body
);

// Still not visible because no styling
function styleElements() {
  this.basicStyling = function (target, style) {
    Object.assign(target.style, style);
  };
}

const styleInstance = new styleElements();
const styledRedsquare = styleInstance.basicStyling(redSq, {
  background: "tomato",
  height: "calc(100vw/4)",
  width: "calc(100vw/4)",
  position: "absolute",
  top: "calc('100vh/4)",
  left: "calc(100vh/4)",
});

const blueSq = elementInstance.create(
  "div",
  "Squares",
  "blueSquareOne",
  document.body
);

const styledBlueSquare = styleInstance.basicStyling(redSq, {
  background: "royalblue",
  height: "50vh",
  width: "50vw",
  position: "absolute",
  top: "25vh", // center horizontally
  left: "25vw", // center vertically
});

const greenSq = elementInstance.create(
  "div",
  "Squares",
  "greenSquareOne",
  blueSq
);

const styledGreenSquare = styleInstance.basicStyling(greenSq, {
  background: "green",
  height: "calc(100vh/4)",
  width: "calc(100vw/4)",
  position: "absolute",
  top: "calc(50vh - 12.5vh)", // center horizontally
  left: "calc(100vw/2 - 100vw/8)", // center vertically
});

// create button
// center top
// attach event
// remove square

const removerButton = elementInstance.create(
  "button",
  "Buttons",
  "removerButtonOne",
  document.body
);

removerButton.innerHTML = "Click to remove buttons.";

const styledRemoverButton = styleInstance.basicStyling(removerButton, {
  position: "absolute",
  left: "40vw",
  top: "5vw",
  alignItems: "center",
  borderRadius: "10px",
  background: "crimson",
  padding: "1vh 1vh",
  textAlign: "center",
});

// -- This is the trial version - using console.log();
// function removeChildren(parent) {
//   if (parent) {
//     let children = parent.children;
//     console.log(children);
//   } else {
//     let children = document.body.children;
//     console.log(children);
//   }
// }
// removeChildren(blueSq);
// removeChildren();
// -- end trial

function removeChildren(parent) {
  if (parent) {
    let children = parent.children;
    parent.remove(children);
    console.log(
      `These children elements were removed ${children} from this parent ${parent}`
    );
  } else {
    console.log(`No children to remove.`);
  }
}
