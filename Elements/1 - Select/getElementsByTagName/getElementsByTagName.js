// Summary
// - selector
// - live html collection
// - traverse
// - conditional
// - event listener
// - access attribute

// ---

// select all li tags
const listTags = document.getElementsByTagName("li");

// iterate over the list of li tags using a for loop
// log each li tag's innerText to the console
for (let i = 0; i < listTags.length; i++) {
  let li_text = listTags[i].innerText;
  console.log(li_text);
}

// iterate over the list of li tags using a for...of loop
// if the li tag contains the word "Item", log a message to the console
// else log an error to the console
for (let li of listTags) {
  console.log(li.innerHTML);
  if (li.innerText.includes("Item")) {
    console.log(`List item contains the word "Item"`);
  } else {
    console.error(`List item does not contain the word "Item"`);
  }
}

// select all span tags
const spanTags = document.getElementsByTagName("span");
// iterate over the list of span tags using a for...of loop
// log the span tag's innerHTML to the console when clicked
for (let span of spanTags) {
  span.addEventListener("click", () => {
    console.log(span.innerHTML);
  });
}
