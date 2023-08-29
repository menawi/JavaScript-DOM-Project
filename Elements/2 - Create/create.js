// create a new element
// append it to container

function createElements(type, id) {
  const element = document.createElement(type); // Removed unnecessary template literal
  element.setAttribute("id", id); // Removed unnecessary template literal
  console.log(`created ${type} with id: ${id}`);
  return element; // Return the created element
}

function appendElements(child, parent) {
  parent.appendChild(child); // Used appendChild instead of append
  console.log(`appended ${child.tagName} to ${parent.id}`); // Access tagName and parent's id
}

const container = createElements("div", "container");
const main_container = document.querySelector("#main-container");
appendElements(container, main_container); // Don't need to store the result

function styleElements(element, style) {
  Object.assign(element.style, style);
  console.log(`styled ${element.tagName} with ${JSON.stringify(style)}`);
}

styleElements(container, {
  background: "red",
  width: "25%",
  height: "25%",
  position: "absolute",
  top: "50%",
  left: "50%",
});

function removeItems(item) {
  item.remove();
  console.log(`removed ${item.tagName}`);
}

const removeButton = createElements("button", "remove-button");
removeButton.textContent = "Remove";
appendElements(removeButton, container);
styleElements(removeButton, {
  background: "blue",
  position: "absolute",
  top: "-40vh",
  left: "-40vw",
});
removeButton.addEventListener("click", () => {
  removeItems(container);
});
