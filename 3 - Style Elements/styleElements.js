class Element {
    constructor(name) {
      this.name = name;
      this.element = document.createElement('div');
      // this.element.textContent = this.name;
    }
  
    create() {
      document.body.appendChild(this.element);
    }
  
    remove() {
      if (this.element.parentNode) {
        this.element.parentNode.removeChild(this.element);
      }
    }
  
    addStyle(style) {
      Object.assign(this.element.style, style);
    }
  
    changeStyle(property, value) {
      this.element.style[property] = value;
    }
  }
  
  // Create instances of the elements
  const element1 = new Element("Element 1");
  const element2 = new Element("Element 2");
  const element3 = new Element("Element 3");
  
  // Append elements to the DOM
  element1.create();
  element2.create();
  element3.create();
  
  // Create a Style class
  class Style {
    constructor() {
      this.style = {};
    }
  
    setStyle(property, value) {
      this.style[property] = value;
    }
  }
  
  // Assign element styles
  const style1 = new Style();
  style1.setStyle("backgroundColor", "red");
  element1.addStyle(style1.style);
  
  const style2 = new Style();
  style2.setStyle("fontSize", "20px");
  style2.setStyle("color", "blue");
  element2.addStyle(style2.style);
  
  // Change element styles
  element3.changeStyle("border", "1px solid black");
  element3.changeStyle("padding", "10px");


// --------- Questions -------------- //
// 1.  I don't understand how element1.addStyle(style1.style); sets the style for element1?
    // Is the setStyle method considered an object with the inner property style (denoted as this.style) that we can access?
// 2. Why use [] to access the style?
    // Is style an attribute or a property?



