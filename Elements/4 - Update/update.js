//  Console Log Version
function addEvent(el_selector, ev_type) {
  const el = document.querySelectorAll(el_selector);
  el.forEach((e, i) => {
    e.addEventListener(ev_type, () => {
      e.classList.add("is-clicked");
      console.log(
        `Element with classList '${e.className}' at index ${i} was clicked`
      );
    });
  });
}

// addEvent(".box", "click");

// Visual Version that changes elements backgroundColor
function addVisualEvent(el, ev, sty) {
  const element = document.querySelectorAll(el);
  element.forEach((e, i) => {
    e.addEventListener(ev, () => {
      e.classList.add("is-clicked");
      e.style.backgroundColor = sty;
      console.log(
        `Element with className ${e.className} at index ${i} and styling ${e.style.backgroundColor} was clicked.`
      );
    });
  });
}

// addVisualEvent(".box", "click", "green");

// Now let's make a version that tracks changes
// If already clicked, then undo backgroundColor
// Else, keep as is

function advancedAddEvent(selector, event, style) {
  const elements = document.querySelectorAll(selector);
  elements.forEach((el, i) => {
    el.addEventListener(event, () => {
      !el.classList.contains("is-clicked")
        ? (el.classList.add("is-clicked"), (el.style.backgroundColor = style))
        : el.classList.contains("is-clicked")
        ? (el.classList.remove("is-clicked"), (el.style.backgroundColor = ""))
        : "null";
    });
  });
}

// function advancedAddEvent(selector, event, style) {
//   const elements = document.querySelectorAll(selector);
//   elements.forEach((el, i) => {
//     el.addEventListener(event, () => {
//       !el.classList.contains("is-clicked")
//         ? (el.classList.add("is-clicked"), (el.style.backgroundColor = style))
//         : el.classList.contains("is-clicked")
//         ? (el.classList.remove("is-clicked"), (el.style.backgroundColor = ""))
//         : "null";
//     });
//   });
// }

// advancedAddEvent(".box", "click", "red");

function containsBlue(element) {
  element.classList.contains("Blue")
    ? (element.classList.remove("Blue"), element.classList.add("Red"))
    : (!element.classList.contains("Blue"), element.classList.contains("Red"))
    ? (element.classList.add("Blue"), element.classList.remove("Red"))
    : console.log("none");
}

function toggleFontColor() {
  const element = document.querySelector(".box");
  element.addEventListener("click", () => {
    element.classList.contains("Blue")
      ? (element.classList.remove("Blue"),
        console.log(`Classlist for element changed to ${element.className}`))
      : !element.classList.contains("Blue")
      ? (element.classList.add("Blue"),
        console.log(`Element classList changed to ${element.className}.`))
      : console.log("No matching classNames found");
  });
}

toggleFontColor();
