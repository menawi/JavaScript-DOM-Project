

// Create a function that takes an array of numbers and returns a new array of only odd numbers sorted from least to greatest.


// -----------
// Loop through and array of numbers and then create a div for each number and append it to the body of the document

// const new array with values 
const arrayToPrint = [1, 2, 3, 4]

// for loop to iterate through the array starting at index 0 and ending at the length of the array and incrementing by 1
for (let index = 0; index < arrayToPrint.length; index++) {
    // assign "element" the value of each index of the array as it loops through
    const element = arrayToPrint[index];
    // create a new array to push that element into
    const newArray = []
    // push the element into the new array
    newArray.push(element)

    // create a forEach loop to iterate through the new array
    // for each element in new array, create a new div and append and style it
    newArray.forEach(element => {
        // create a new div
        const newDiv = document.createElement('div');
        // append the new div to the body
        document.body.appendChild(newDiv);
        // style the new div
        newDiv.style.height = '100px';
        newDiv.style.width = '100px';
        newDiv.style.backgroundColor = 'green';
        newDiv.style.margin = '10px';
        newDiv.style.display = 'inline-block';
        newDiv.style.borderRadius = '50%';
        newDiv.style.textAlign = 'center';
        // ---
    }

    )
    // log the element to the console for debugging
    console.log(element);

}

// --------------

// --------------
// Loop through an array of numbers (from 1 to 9) and print whether the addition of the previous index and the current index is odd or even.

const numbersToOperate = [1, 2, 3, 4, 5, 6, 7, 8, 9];

function createAndStyledivToPToPrintTo(text) {
    const divToPToPrintTo = document.body.appendChild(document.createElement('div'));
    divToPToPrintTo.classList.add('Standard-Div');
    divToPToPrintTo.style.background = 'DarkSlateBlue';
    divToPToPrintTo.style.width = '50%'
    divToPToPrintTo.style.height = '75%'
    divToPToPrintTo.style.margin = '10px'

    // this.addDivMessage = function (text) {
    //     divToPToPrintTo.innerHTML = text;
    // }

    return divToPToPrintTo;

}

for (let index = 0; index < numbersToOperate.length; index++) {

    const newDiv = createAndStyledivToPToPrintTo();
    const number = numbersToOperate[index];
    const prevNumber = numbersToOperate[index - 1];

    if (prevNumber <= 0) {
        console.log('negative number');
        newDiv.innerHTML = 'negative number';
    }
    else if (prevNumber > 0) {

        if ((number + prevNumber) % 2 === 0) {
            console.log((number + prevNumber) + ' is even');
            newDiv.innerHTML = ((number + prevNumber) + ' is even');

        }
        else {
            console.log((number + prevNumber) + ' is odd');
            newDiv.innerHTML = ((number + prevNumber) + ' is odd');
        }

        // 
    }

    else {
        console.log('no number');
        newDiv.innerHTML = 'no number';
    }

}

// --------------

// --------------

// Calculator 

// function calculator() {
//     return {
//         add: function (a, b) {
//             return a + b;
//         }

//         ,
//         subtract: function (a, b) {
//             return a - b;
//         },

//         multiply: function (a, b) {
//             return a * b;
//         },

//         divToPToPrintToide: function (a, b) {
//             return a / b;
//         },

//         operate: function (operator, a, b) {
//             switch (operator) {
//                 case '+':
//                     return this.add(a, b);
//                 case '-':
//                     return this.subtract(a, b);
//                 case '*':
//                     return this.multiply(a, b);
//                 case '/':
//                     return this.divToPToPrintToide(a, b);
//                 default:
//                     console.log('No operator');
//             }
//         }
//     }

// }

