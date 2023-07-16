class Element {
    constructor(name) {
      this.name = name;
      this.element = document.createElement('div');
      this.element.textContent = this.name;
    }
  
    create() {
      document.body.appendChild(this.element);
    }
  
    remove() {
      if (this.element.parentNode) {
        this.element.parentNode.removeChild(this.element);
      }
    }
  }
  
  // Create instances of the elements
  const element1 = new Element("Element 1");
  const element2 = new Element("Element 2");
  const element3 = new Element("Element 3");
  
  // Append method
  function appendElements() {
    element1.create();
    element2.create();
    element3.create();
  }
  
  // Remove method
  function removeElements() {
    element1.remove();
    element2.remove();
    element3.remove();
  }

  appendElements();
//   removeElements();