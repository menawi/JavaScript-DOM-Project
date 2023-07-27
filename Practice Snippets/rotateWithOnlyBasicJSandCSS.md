---
reviewed:
---

#code 
#animation

Rotate an element without using element.style.transform by directly manipulating the style properties of the element using position and left/top properties to simulate rotation.

```javascript
function rotate(element, degrees) {
    element.style.position = 'relative'; // Enable positioning for rotation

    const radians = (Math.PI / 180) * degrees;
    const cosTheta = Math.cos(radians);
    const sinTheta = Math.sin(radians);

    const elementWidth = element.offsetWidth;
    const elementHeight = element.offsetHeight;

    // Calculate the new coordinates of the corners after rotation
    const newX1 = -elementWidth / 2 * cosTheta + elementHeight / 2 * sinTheta;
    const newY1 = -elementWidth / 2 * sinTheta - elementHeight / 2 * cosTheta;
    const newX2 = elementWidth / 2 * cosTheta + elementHeight / 2 * sinTheta;
    const newY2 = elementWidth / 2 * sinTheta - elementHeight / 2 * cosTheta;
    const newX3 = elementWidth / 2 * cosTheta - elementHeight / 2 * sinTheta;
    const newY3 = elementWidth / 2 * sinTheta + elementHeight / 2 * cosTheta;
    const newX4 = -elementWidth / 2 * cosTheta - elementHeight / 2 * sinTheta;
    const newY4 = -elementWidth / 2 * sinTheta + elementHeight / 2 * cosTheta;

    // Set the new coordinates using the left and top properties
    const newX = Math.min(newX1, newX2, newX3, newX4);
    const newY = Math.min(newY1, newY2, newY3, newY4);
    element.style.left = `${element.offsetLeft + newX}px`;
    element.style.top = `${element.offsetTop + newY}px`;
    element.style.width = `${Math.abs(newX2 - newX1)}px`;
    element.style.height = `${Math.abs(newY3 - newY2)}px`;
}

const myElement = document.getElementById('myElement');
rotate(myElement, 45);
```
This code will rotate the myElement by 45 degrees without using transform. It directly modifies the style properties to achieve the rotation effect using positioning and width/height adjustments.