// // ---------- Method Chaining ----------

// // Caterpillar example
// function Caterpillar() {
//   this.color = "green";
//   this.size = "100px";
//   this.position = { x: 0, y: 0 };

//   this.eat = function (food) {
//     // add the logic to check caterpillar ate food
//     // --
//     // allow food to grow the caterpillar
//     let caterpillarSize = this.size;
//     caterpillarSize += "50px";
//     // return the caterpillar
//     return this;
//   };
//   //   return the caterpillar
//   return this;
// }

// Caterpillar.prototype.spinSilk = function () {
//   //   add logic to create silk and append it
//   //   add logic to render silk being produced from caterpillar
//   const silk = document.createElement("div");
//   const caterpillar = this;
//   return this;
// };
// // ----------------
// // ----------------

// // DOM Element example
// // This code creates a class called DOM.
// // The DOM class has a constructor that sets the domElement property to a div element.
// // The class has a number of methods that can be called on it.
// // The addClass method adds a class to the domElement.
// // The appendTo method appends the domElement to a parent element.
// // The addText method adds text to the domElement.
// // The addStyle method adds a style to the domElement. The remove method removes the domElement from its parent element.
// // The code then creates a new instance of the DOM class called DOMinstance.
// //  It then creates a function called redDOM that calls the addStyle, addClass, and appendTo methods on the DOMinstance.
// // The redDOM function then returns the DOMinstance.
// // The redDOM function is then called.

// function DOM() {
//   this.domElement = document.createElement("div");
//   return this;
// }

// DOM.prototype.addClass = function (className) {
//   this.domElement.classList.add(className);
//   return this;
// };

// DOM.prototype.appendTo = function (parentElement) {
//   parentElement.appendChild(this.domElement);
//   return this;
// };

// DOM.prototype.addText = function (text) {
//   this.domElement.textContent = text;
//   return this;
// };

// DOM.prototype.addStyle = function (style) {
//   this.domElement.style = style;
//   return this;
// };

// DOM.prototype.remove = function (parent) {
//   parent.removeChild(this.domElement);
//   return this;
// };

// // This is an instance of DOM
// const DOMinstance = new DOM();

// // This is a sub-instance of DOMinstance
// const redDOM = function () {
//   return {
//     allowAccessToDomInstanceMethods: DOMinstance,
//     createDOMSubInstance: function () {
//       DOMinstance.addStyle("background: red; height: 100px; width: 100px;")
//         .addClass("newClass")
//         .appendTo(document.body);
//     },
//   };
// };

// // [insight:: My obsession with wanting to return objects from functions now makes sense!]
// redDOM().createDOMSubInstance();
// redDOM().allowAccessToDomInstanceMethods.remove(document.body);
