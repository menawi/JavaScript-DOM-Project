# Bugs for the Movement/User Select Elements section

#javascript #DOM #bugs


This code has a few bugs that need to be fixed, and thus is not rendering the box on the DOM.


```js 
class Elements {
    constructor(name) {
        this.name = name;
        this.element = document.createElement("div")
        this.textContent = this.name;
        this.x = 0;
        this.y = 0;
        this.element.style.position = 'absolute';
        this.isSelected = false;
        this.element.addEventListener('click', () => this.toggleElementSelection())
    }


    appendElement() {
        document.body.appendChild(this.element);
        this.styleElement(this.element.style.background, 'red');
        this.element.style.height = '100px';
        this.element.style.width = '100px'
        this.element.style.top = `${this.y}`
        this.element.style.left = `${this.x}`
    }

    styleElement(styleValue) {
        Object.assign(this.element.style, styleValue)
    }

    toggleElementSelection() {
        // on click, change selection state = "selected"
        this.isSelected = !this.isSelected;

        if (!this.isSelected) {
            this.element.classList.add('is-selected');
            this.textContent = 'Box selected.'
            this.styleElement(this.element.style.background, 'green')
        } else {
            this.element.classList.add('NOT-selected');
            this.textContent = 'Box not selected.'
            this.styleElement(this.element.style.background, 'red')
        }
    }
}


const box = new Elements("box");
box.appendElement()
box.toggleElementSelection()

```

## Object Instance vs Element Created
1. The Element class creates 
   1. an instance of the `Elements` class referenced by `this` , and
   2. a new HTML element referenced by `this.element` . 

> Thus, any modifications to the styling or other properties of the element must be applied to `this.element`.^[Update `this.textContent` to `this.element.textContent` within the constructor to correctly set the text content of the created element.]

   

## Units 
2. In the `appendElement()` method, add the missing units (`px`) to the `this.y` and `this.x` assignments to specify the position.


## Style Object Syntax 
3. Change `this.styleElement(this.element.style.background, 'red')` and `this.styleElement(this.element.style.background, 'green')` to `this.styleElement({ background: 'red' })` and `this.styleElement({ background: 'green' })` respectively. This change ensures the correct assignment of the background color. 👈 **still struggle to understand this** 
   
## Classlist
4. Replace `this.element.classList.add('NOT-selected')` with `this.element.classList.remove('is-selected')` to remove the 'is-selected' class when the box is not selected. _You must first remove the "is-selected" class before adding the "NOT-selected" class , otherwise both classes will be applied to the element._

---

