// //   - [x] Click event listener to add a class.
// //   - [ ] Mouseover event listener to change the background color.
// //   - [ ] Keydown event listener to log key presses.

function getElements(selector) {
  return document.querySelectorAll(selector);
}

function addAttributeEventListener(element, event, attribute, value) {
  element.addEventListener(event, () => {
    modifyAttribute(element, attribute, value);
  });
}

function modifyAttribute(element, attribute, value) {
  if (element.hasAttribute(attribute)) {
    const currentAttributeValue = element.getAttribute(attribute);
    console.log(
      `${
        element.tagName
      } element has attribute ${attribute.toUpperCase()} with current value of "${currentAttributeValue}"`
    );
    element.setAttribute(attribute, currentAttributeValue + " " + value);
  } else {
    element.setAttribute(attribute, value);
  }
}

function attributeModifier(selector, event, attribute, value) {
  const elements = getElements(selector);
  elements.forEach((element) => {
    addAttributeEventListener(element, event, attribute, value);
  });
}

attributeModifier(".box", "click", "class", "active");
