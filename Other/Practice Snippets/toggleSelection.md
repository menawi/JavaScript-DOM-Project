# Toggle Selection

#javascript #snippet #function

You have a class called `Element` with this as part of the constructor:

```
this.isSelected = false;
this.element.addEventListener("click", () => this.toggleSelection());
```

You have this method in the class:

```js
    toggleSelection() {
        this.isSelected = !this.isSelected;
        if (this.isSelected) {
            this.element.classList.add('selected');
            console.log(this.element.classList.value);
        } else {
            this.element.classList.remove('selected');
            console.log(this.element.classList.value);
        }
    }
```

## Challenge 1: Toggle Selection with Styling

Extend the functionality of the `toggleSelection()` method to toggle the background color of the element between two colors (e.g., red and blue) whenever it is clicked. Use the `classList` property to add or remove appropriate classes for styling the background color. You can define the CSS classes in your HTML or dynamically create them using JavaScript.

## Challenge 2: Multi-Element Selection

Modify the code to allow selecting multiple elements simultaneously. Update the `Element` class to maintain an array of selected elements instead of a single `isSelected` property. Modify the `toggleSelection()` method to add or remove the current element from the selected elements array. You can then perform additional operations or apply styles to the selected elements.

These challenges will allow you to explore and experiment with the `classList` property, styling elements, and expanding the selection behavior of the code. Have fun coding!


