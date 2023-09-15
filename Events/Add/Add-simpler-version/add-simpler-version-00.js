function toggleColor(element) {
  // Check if the element has a class called "active-color"
  if (element.classList.contains("active-color")) {
    // If it does, remove the class to toggle the color off
    element.classList.remove("active-color");
  } else {
    // If it doesn't, add the class to toggle the color on
    element.classList.add("active-color");
  }
}

function toggler(target, property, update) {
  if (target[property].contains(update)) {
    target[property].remove(update);
  } else {
    target[property].add(update);
  }
}

function attributeModifier(selector) {
  const elements = document.querySelectorAll(selector);
  elements.forEach((element) => {
    // Add a click event listener to toggle the color
    element.addEventListener("click", () => {
      toggleColor(element);
    });
  });
}

attributeModifier(".box");
