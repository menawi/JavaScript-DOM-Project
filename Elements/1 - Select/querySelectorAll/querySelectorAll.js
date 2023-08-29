// Select all list items
const listItems = document.querySelectorAll("li");

// Function to print every item from the list after a delay
function printEveryItemFromList() {
  setTimeout(() => {
    console.log(`All List Items: ${listItems.innerHTML}`); // Log all list items
    listItems.forEach((item, index) => {
      let print_message = `${index} : ${item.innerHTML}`;
      console.log(print_message); // Log each list item with index
    });
  }, 2000);
}

printEveryItemFromList(); // Call the function to print items after a delay

// Function to print every item sequentially using setInterval
function printEveryItemSequentially() {
  let counter = 0;
  let interval = setInterval(() => {
    console.log(`${listItems[counter].innerHTML}`); // Log each list item sequentially
    counter++;
    if (counter >= listItems.length) {
      clearInterval(interval); // Stop the interval when all items are printed
    }
  }, 2000);
}

// Function to start printing items sequentially on button click
function start() {
  let button = document.querySelector("button");
  button.addEventListener("click", () => {
    printEveryItemSequentially(); // Call the function to start sequential printing
  });
}

start(); // Call the start function to attach the click event listener
