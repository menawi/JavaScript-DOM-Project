// This code changes the color of two buttons when they are clicked. It also adds a class to the button that was clicked and logs the class list of the button to the console.

// Note how limited the use of query selector is
// I think it's best used in cases of IDs or in cases where I need a specific style selector

const oddButton = document.querySelector("#oddItems");
const evenButton = document.querySelector("#evenItems");

function changeButtonBackground(button) {
  if (button.id == "oddItems") {
    button.style.borderColor = "red";
    console.log("Button is odd");
  } else if (button.id == "evenItems") {
    button.style.borderColor = "green";
    console.log("Button is even");
  } else {
    console.log(button.innerHTML);
  }
}

function buttonClick(button) {
  button.addEventListener("click", () => {
    changeButtonBackground(button);
    button.classList.add("is-clicked");
    console.log(
      `Click event registered for element ${button.innerHTML}. Element's current class list is: ${button.classList}`
    );
  });
}

buttonClick(oddButton);
buttonClick(evenButton);

const evenList = document.querySelector("li:nth-child(even)");
const oddList = document.querySelector("li:nth-child(odd)");

function changeListItemBackground(listItem) {
  switch (listItem) {
    case evenList:
      listItem.style.backgroundColor = "green";
      console.log(`List item is even}`);
      break;
    case oddList:
      listItem.style.backgroundColor = "red";
      console.log(`List item is odd`);
      break;
    default:
      break;
  }
}

function buttonClickChangeListStyle(button, list) {
  button.addEventListener("click", () => {
    changeButtonBackground(button);
    changeListItemBackground(list);
    console.log(button.innerHTML);
    console.log(list.innerHTML);
  });
}
buttonClickChangeListStyle(evenButton, evenList);
buttonClickChangeListStyle(oddButton, oddList);
