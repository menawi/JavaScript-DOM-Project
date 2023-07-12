# The style property of a DOM element is an object. 

It represents the inline style attribute of the element and allows you to manipulate and apply CSS styles directly to the element.

Thus it can be manipulated with JavaScript object methods.

Write a function that takes two objects as arguments. The first object is the object to update and the second object contains the keys that need to be updated and their corresponding values. The function should return the updated object.



```javascript

box.styleElement(elementStyleObject, newStyleObject)

const elementStyleObject = {
    background: 'red',
    display: 'flex'
}

const newStyleObject = {
    background: 'green',
    display: 'none',
    justifyContent: 'center'
}

// 👉

const newObjectStyle = {
    background: 'green',
    display: 'none',
    justifyContent: 'center'
}



```


## Challenges
_Get Creative!_

1. Two objects collide and use object assign to combine their properties, and then create a new object with the combined properties.

2. Two objects collide and use object assign to exchange their properties. 
