// Summary
// 1. Get Elements by class name
// 2. Loop through each element:
//   - a. Log an array of key-value pair objects
//   - b. Each object has the following structure:
//        - Key: index
//        - Value: string length
// 3. Detailed loop logic includes:
//   - a. Log an error if conditions are not met
//   - b. Log value if conditions are met

// -- Start
// Create an live HTML collection of all p elements with class "paragraphClass"
const paragraphClassHTMLCollection =
  document.getElementsByClassName("paragraphClass");
console.log(paragraphClassHTMLCollection);
// Create an array of key-value paired objects using this HTML collection
// - key : position in array , value : length of string
for (let i = 0; i < paragraphClassHTMLCollection.length; i++) {
  let key = i;
  let stringLength = paragraphClassHTMLCollection[i].innerHTML.length;
  let key_stringLength = `For index ${key} , text length is ${stringLength}`;
  console.log(key_stringLength);
}
// Add a conditional that checks if the paragraph innerHTML is empty
// log error message if empty
// let's say each paragraph must be > 0 characters long
for (let i = 0; i < paragraphClassHTMLCollection.length; i++) {
  let stringObject_index = i;
  let string = paragraphClassHTMLCollection[i].innerHTML;
  let string_length = paragraphClassHTMLCollection[i].innerHTML.length;
  if (string_length <= 0 || string == "") {
    console.error(
      `Paragraph index ${stringObject_index} is ${string_length} characters long, which is less than the minimum length required of each paragraph string. 
      The Minimum paragraph string length is ${string_length}`
    );
  } else {
    console.log(
      `For paragraph index ${stringObject_index} , string length is ${string_length}.`
    );
  }
}
// -- End
