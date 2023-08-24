// - Summary
// - We learned how to select an element using getElementById
// - We learned how to add an eventListener to an element
// - We learned the click and mouseover events
// - We learned how to add a conditional statement to an eventListener
// - We learned how to add math to a conditional statement

// ---

// [[getElementById]]
const title = document.getElementById("title");
const titleText = title.textContent;
console.log(titleText);

// [[What is a step up in complexity from the above code?]]
// --- Add [[eventListener]]

title.addEventListener("click", function () {
  console.log("You clicked the title: " + title.textContent);
});

// --- let's add a conditional statement

title.addEventListener("click", function () {
  if (title.textContent != "Hello World") {
    console.log(`Message is not "Hello World".`);
  } else {
    console.log(`Title text is "Hello World"`);
  }
});

// What is a step up in complexity from the above code?

// --- Conditional + Math
const titleLength = document.getElementById("title").textContent.length;

// [[mouseover]]
title.addEventListener("mouseover", function () {
  if (titleLength < 10) {
    console.log(`Title length ${titleLength} is less than 10.`);
  } else {
    console.log(`Title length ${titleLength} is greater than 10.`);
  }
});
