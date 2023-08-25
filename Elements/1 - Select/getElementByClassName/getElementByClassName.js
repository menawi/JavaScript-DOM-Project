/*
Summary of Lessons Learned:

This code demonstrates the power of JavaScript in working with HTML documents 
for manipulating and logging data derived from a specific class of elements, in this case, "paragraph".
It covers lessons learned in the following areas:

1. Selecting HTML elements by their class name
2. Iterating over HTML collections
3. Logging the text content of selected HTML elements
4. Building and logging an array from the text content of the elements
5. Calculating and logging the length of each element's text content
6. Using key-value pairs to build an array that stores the length alongside the original text content
7. Filtering an array based on condition (in this case, lengths greater than 10)
8. Logging elements of an array alongside their index in a formatted way
9. Adding event listeners to HTML elements
*/

// Next Step before the next selector on the list
// - Use fitler & math to create conditonals
// - combine them with events

// This section of the code selects all tags with the class "paragraph" and logs their text content to the console
const paragraphs = document.getElementsByClassName("paragraph");
for (let i = 0; i < paragraphs.length; i++) {
  console.log(paragraphs[i].textContent);
}

// This section pushes the text content of each paragraph into the 'paragraphTextArray' and logs the array
const paragraphTextArray = [];
for (let p of paragraphs) {
  paragraphTextArray.push(p.textContent);
}
console.log(paragraphTextArray);

// Here the length of each paragraph text is calculated, it then stores the text and length as key-value pairs in 'paragraphTextArrayLength', and logs the array
const paragraphTextArrayLength = [];
paragraphTextArray.forEach((p) => {
  let stringLength = p.length;
  paragraphTextArrayLength.push({ p, stringLength });
});
console.log(paragraphTextArrayLength);

// This section filters 'paragraphTextArray' to include only those paragraphs longer than 10 characters, constructs a formatted string for each, and logs the strings and the filtered array
const filteredTextArray = paragraphTextArray.filter((p) => p.length > 10);
filteredTextArray.forEach((p, i) => {
  let result = `Paragraph ${i} : ${p}`;
  console.log(result);
});
filteredTextArray.forEach((p) => {
  console.log(p);
});

// This code adds a click event listener to each paragraph, logging 'true' when a paragraph is clicked
for (let p of paragraphs) {
  p.addEventListener("click", function () {
    console.log("true");
  });
}

// It also logged onclick event using a 'for loop'
for (let i = 0; i < paragraphs.length; i++) {
  paragraphs[i].addEventListener("click", () => {
    console.log(paragraphs[i].innerHTML);
  });
}

// ---
// This code is an excellent foundation for further work with JavaScript and HTML, demonstrating various key concepts and techniques in a clear, hands-on way.
// The added event listener shows how JavaScript can be used to make interactive web pages, and the array manipulations show some of the robust data handling capabilities of JavaScript.
// Each section should be understood and mastered before moving onto more complex topics.
