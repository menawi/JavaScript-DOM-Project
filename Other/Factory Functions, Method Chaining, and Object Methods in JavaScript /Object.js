// [main:: JavaScript Objects]
// [supports:: _Understand Inheritance]
// Answer to this: "How do you write constructor functions such that the methods passed in it are automatically available to all sub-instances of the class?";

// The Object.Assign() method copies all [[enumerable own properties]] from one or more source objects to a target object.
// It returns the target object.
// [source::https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/assign#return_value]

const source = { x: 0, y: 0 };
const condition = false;
const target = {};

function test() {
  !condition;
  if (!condition) {
    let result = Object.assign(target, source);
    console.log(result);
  }
}

test();

// The Object.create() static method creates a new object, using an existing object as the prototype of the newly created object. [source::https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/create]

const person = {
  name: "",
  age: "",
  printMessage: function () {
    let message = `Hello, my name is ${this.name} and I am ${
      this.age
    } years old. My favorite sport is ${this.sport || `soccer`}`;
    return message;
  },
};

const menawi = Object.create(person);

// menawi.name = "Omar";
// menawi.age = 24;
// menawi.sport = "tennis";
// console.log(menawi.printMessage());

// Try it in constructor function
function PersonObject() {
  this.name = "";
  this.age = "";
  this.printMessage = function () {
    return `Hello, my name is ${this.name} and I am ${this.age} years old. ${
      this.sport || `I don't have a favorite sport`
    }`;
  };
  return this;
}

const personObjectInstance = new PersonObject();
const omar = Object.create(personObjectInstance);

omar.name = "Omar";
omar.age = 27;
console.log(omar);
console.log(omar.printMessage());

// I want you to extract a list of skills from this document that I can repeat and practice on my own. Outline them in an organized list format, with markdown titles h3 and descriptions. Are you ready?

// Object.keys() returns an array of a given object's own enumerable property names, iterated in the same order that a normal loop would. [source::https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/keys]

// ISSUE : Not printing colors
// NEXT :
// - See ChatGPT latest convo for recap
// - I am at point where using Object.keys to loop through styles THEN using Object.assing to assign them to element.
// - I am practicing it in isolation first.
const colors = {
  colors: {
    first: "red",
    second: "orange",
    third: "yellow",
    fourth: "green",
    fifth: "blue",
    sixth: "indigo",
    seventh: "violet",
  },
  printColors: function () {
    const result = Object.keys(this.colors).forEach((color) => {
      const colors = this.colors[color];
      return colors;
      //   console.log(this.colors[color]);
    });
    return result;
  },
};

console.log(colors.printColors);
