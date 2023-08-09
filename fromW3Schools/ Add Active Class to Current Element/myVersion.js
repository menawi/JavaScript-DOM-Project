// My version
// Use SOLID
// returns new function for each button
function createButtonHandler(btn) {
  return function () {
    const buttonHTMLCollection = document.getElementsByClassName("btn");
    const replacementClassName = "";
    const previousIndex = document.getElementsByClassName("active")[0];
    if (buttonHTMLCollection.length <= 0) {
      console.log("No elements with class 'btn' found.");
    } else if (previousIndex) {
      previousIndex.className = previousIndex.className.replace(
        "active",
        replacementClassName
      );
    }
    btn.className += " active";
  };
}

// set up the event handlers for all buttons
function initButtonHandler() {
  const header = document.getElementById("myDIV");
  const buttonsHTMLCollection = header.getElementsByClassName("btn");
  for (let i = 0; i < buttonsHTMLCollection.length; i++) {
    const currentIndex = buttonsHTMLCollection[i];
    currentIndex.addEventListener("click", createButtonHandler(currentIndex));
  }
}

initButtonHandler();
